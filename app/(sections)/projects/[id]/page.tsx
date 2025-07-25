"use client";
import { useState, useEffect, Key, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { wrap } from "popmotion";
import { ProjectsList } from "@/lib/constants";
import BackArrow from "@/components/BackArrow";
import AnimatedHeading from "@/components/animation/animated-heading";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    type?: string;
  }[];
  title: string;
  location: string;
  period: string;
  status: string;
  client: string;
  service: string;
  description: string;
}

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectPage = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const projectId = Number(id);

  useEffect(() => {
    const fetchedProject = ProjectsList.find(
      (project) => project.id === projectId
    );
    if (fetchedProject) {
      setProject(fetchedProject);
    }
  }, [projectId]);

  const activeImageIndex = wrap(0, project?.images.length || 0, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: { offset: { x: number } }) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageIndex: number) => {
    let changeDirection;
    if (imageIndex > activeImageIndex) {
      changeDirection = 1;
    } else if (imageIndex < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageIndex, changeDirection || 0]);
  };

  const mediaRef = useRef<HTMLDivElement | null>(null);

  const handleFullscreen = () => {
    if (
      mediaRef.current &&
      typeof mediaRef.current.requestFullscreen === "function"
    ) {
      mediaRef.current.requestFullscreen().catch((err) => {
        console.warn("Fullscreen failed:", err);
      });
    }
  };

  useEffect(() => {
    const allThumbnailsLoaded =
      !!project?.images?.length && thumbnailsLoaded === project.images.length;

    if (allThumbnailsLoaded) {
      setLoading(false);
    }
  }, [thumbnailsLoaded, project?.images.length]);

  return (
    <div className="my-16 flex flex-col relative">
      {/* Loading spinner */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-300"
        style={{
          display: loading ? "flex" : "none",
        }}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>

      {/* Main content */}
      <div style={{ filter: loading ? "blur(2px)" : "none" }}>
        <div className="flex items-center justify-between mb-8">
          <BackArrow />
          <AnimatedHeading
            title={project?.title || "Project"}
            className="text-xl lg:text-5xl text-right font-title"
          />
        </div>

        <div className="">
          <div className="slider-container">
            <div className="slider">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={imageCount}
                  custom={direction}
                  variants={sliderVariants}
                  initial="incoming"
                  animate="active"
                  exit="exit"
                  transition={sliderTransition}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                  className="image"
                  onClick={() => {
                    if (window.innerWidth < 768) handleFullscreen();
                  }}
                  ref={mediaRef}
                >
                  {project?.images[activeImageIndex].type === "video" ? (
                    <div className="flex items-center justify-center w-full h-full">
                      <video
                        src={project.images[activeImageIndex].src}
                        controls
                        playsInline
                        preload="metadata"
                        className="max-h-full max-w-full rounded-lg"
                      />
                    </div>
                  ) : (
                    <Image
                      src={
                        project?.images[activeImageIndex].src ||
                        "/images/fallback-image.jpg"
                      }
                      alt={
                        project?.images[activeImageIndex].alt ||
                        "Image description not available"
                      }
                      width={project?.images[activeImageIndex].width || 800}
                      height={project?.images[activeImageIndex].height || 600}
                      className="max-h-full max-w-full rounded-lg object-contain w-full h-auto"
                      priority={true}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center space-x-2 w-full mt-4">
              <motion.button
                className="bg-transparent text-primary p-1 rounded-full flex items-center md:justify-center font-bold md:text-lg hover:bg-primary hover:text-primary-foreground cursor-pointer"
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                onClick={() => swipeToImage(-1)}
              >
                <CircleArrowLeft className="w-5 h-5 md:w-7 md:h-7" />
              </motion.button>
              <motion.button
                className="bg-transparent text-primary p-1 rounded-full flex items-center md:justify-center font-bold md:text-lg hover:bg-primary hover:text-primary-foreground cursor-pointer"
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                onClick={() => swipeToImage(1)}
              >
                <CircleArrowRight className="w-5 h-5 md:w-7 md:h-7" />
              </motion.button>
            </div>
          </div>

          <div className="thumbnails">
            {project?.images.map(
              (
                image: {
                  src: string | undefined;
                  alt: string | undefined;
                  width?: number;
                  height?: number;
                  type?: string;
                  thumbnail?: string | undefined;
                },
                index: Key | null | undefined
              ) => (
                <div
                  key={index}
                  onClick={() =>
                    typeof index === "number" && skipToImage(index)
                  }
                  className="thumbnail-container"
                >
                  {image.type === "video" ? (
                    <Image
                      src={image.thumbnail || "/images/video-placeholder.jpg"}
                      alt={image.alt || "Video thumbnail"}
                      width={image.width}
                      height={image.height}
                      priority={true}
                      onLoad={() => setThumbnailsLoaded((count) => count + 1)}
                    />
                  ) : (
                    <Image
                      src={image.src || "/images/fallback-image.jpg"}
                      alt={image.alt || "Image description not available"}
                      width={image.width}
                      height={image.height}
                      priority={true}
                      onLoad={() => setThumbnailsLoaded((count) => count + 1)}
                    />
                  )}
                  <div
                    className={`active-indicator ${
                      index === activeImageIndex ? "active" : null
                    }`}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-8">
          <div className="w-full md:w-1/3 flex flex-col space-y-4 mb-2 md:mb-0">
            <div className="space-y-2 md:space-y-4">
              <div>
                <h3 className="text-sm md:text-lg font-heading">Location</h3>
                <p className="text-lg md:text-xl font-semibold">
                  {project?.location}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Period</h3>
                <p className="text-lg md:text-xl font-semibold">
                  {project?.period}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Status</h3>
                <p className="text-lg md:text-xl font-semibold">
                  {project?.status}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Client</h3>
                <p className="text-lg md:text-xl font-semibold">
                  {project?.client}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Service</h3>
                <p className="text-lg md:text-xl font-semibold">
                  {project?.service}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-1 md:space-y-4">
            {project?.description
              .split("\n\n")
              .map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-xs md:text-lg leading-relaxed text-neutral-800"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

"use client";
import { CircleArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const BackArrow = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.a
      className="bg-transparent text-primary p-1 rounded-full flex items-center md:justify-center font-bold md:text-lg hover:bg-primary hover:text-primary-foreground cursor-pointer"
      whileTap={{ scale: 0.95 }}
      variants={itemVariants}
      onClick={handleBack}
    >
      <CircleArrowLeft className="w-5 h-5 md:w-9 md:h-9" />
    </motion.a>
  );
};

export default BackArrow;

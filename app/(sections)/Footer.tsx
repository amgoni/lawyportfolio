const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="p-12">
        <div className="md:w-5/12">
          <h3 className="text-sm md:text-xl mb-4 text-[#808080]">
            Open to design and consulting work
          </h3>
          <p className="text-lg md:text-2xl font-bold">
            Reach out if you are looking for an architect or construction
            consultant.
          </p>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="text-center">
        <p>Ⓒ {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

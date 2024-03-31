const Banner = ({ title }: { title: string }) => {
  return (
    <h4 className="w-full bg-black py-[2.625rem] text-center text-white md:py-[3.625rem]">
      {title}
    </h4>
  );
};

export default Banner;
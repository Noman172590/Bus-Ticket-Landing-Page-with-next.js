const HeroSectionToken = ({
  title = "500K+",
  subtitle = "Registered users",
  logo,
}) => {
  return (
    <div className="flex gap-4 border-b-8 border-Secondary rounded-2xl py-8 pl-8 pb-13  w-full text-white bg-white">
      <div>{logo}</div>
      <div>
        <p className="font-Inter font-bold text-4xl text-Primary">{title}</p>
        <p className="font-Inter  text-lg text-Primary/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSectionToken;

import BestCard from "@/asset/Icons/BestCard";

const BestCardComponents = ({
  percentageOff = "15",
  date = "January 2024",
  couponCode = "NEW15",
  backGroundColor="#FFBF0F",
}) => {
  return (
    <div className="relative font-Inter">
      <BestCard fill={backGroundColor}/>
      <div className="absolute top-0 p-13 flex justify-between items-center w-143.25">
        <div>
          <p className=" text-[40px] text-Primary/80 font-extrabold">
            {percentageOff}% OFF
          </p>
          <p className="font-semibold text-xl text-Primary/80">
            on your next purchase
          </p>
          <p className="font-medium text-lg text-Primary/50">use by {date}</p>
        </div>
        <div>
          <p className="font-Releway font-bold text-[32px]">{couponCode}</p>
          <p className="font-medium text-lg text-Primary/50">Coupon Code</p>
        </div>
      </div>
    </div>
  );
};

export default BestCardComponents;

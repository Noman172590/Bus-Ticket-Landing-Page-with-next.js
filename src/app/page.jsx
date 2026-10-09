"use client";
import { BusBackground, CarHero, People, TablerIconTicket } from "@/asset";
import BestCard from "@/asset/Icons/BestCard";
import BestCardComponents from "@/Components/BestCard/BestCard";
import Button from "@/Components/Button/Button";
import HeroSectionToken from "@/Components/HeroSectionToken/HeroSectionToken";
import { useState } from "react";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const HeroSectionLogo = [
    {
      title: "500K+",
      subtitle: "Registered users",
      logo: <People />,
    },
    {
      title: "1.7 lacks",
      subtitle: "Tickets sold",
      logo: <TablerIconTicket />,
    },
    {
      title: "80K+",
      subtitle: "Rental partners",
      logo: <CarHero />,
    },
  ];
  const bestCardData = [
    {
      percentageOff: 15,
      date: "January 2024",
      couponCode: "NEW15",
      backGroundColor: "#FFBF0F",
    },
    {
      percentageOff: 20,
      date: "January 2024",
      couponCode: "Couple 20",
      backGroundColor: "#F6949F",
    },
    {
      percentageOff: 10,
      date: "February 2024",
      couponCode: "SAVE10",
      backGroundColor: "#4ADE80",
    },
    {
      percentageOff: 25,
      date: "March 2024",
      couponCode: "SUPER25",
      backGroundColor: "#60A5FA",
    },
    {
      percentageOff: 30,
      date: "April 2024",
      couponCode: "MEGA30",
      backGroundColor: "#A78BFA",
    },
    {
      percentageOff: 50,
      date: "May 2024",
      couponCode: "HALF50",
      backGroundColor: "#FB923C",
    },
    {
      percentageOff: 5,
      date: "June 2024",
      couponCode: "WELCOME5",
      backGroundColor: "#38BDF8",
    },
    {
      percentageOff: 40,
      date: "July 2024",
      couponCode: "PROMO40",
      backGroundColor: "#F472B6",
    },
  ];
  const displayCards = showAll ? bestCardData : bestCardData.slice(0, 2);
  return (
    <section>
      {/* heroSection */}
      <div
        className="max-w-6xl mx-auto mt-10.5  h-137.5 bg-center bg-cover font-Releway relative"
        style={{ backgroundImage: `url(${BusBackground.src}) ` }}
      >
        <div className=" px-53.75 pt-17.5 pb-33.75">
          <div className=" text-center">
            <p className="font-extrabold text-white text-[64px]">
              End-to-End Travel with
            </p>
            <p className="font-extrabold text-Secondary text-[64px]">
              P Paribahan
            </p>
            <p className="font-Inter text-white text-lg">
              Yes, you can run unit tests and view the results directly within
              the app. The integrated testing features allow for a streamlined .
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="bg-Secondary font-bold text-xl text-Primary py-5 px-7.5 rounded-lg"
              title="Buy Tickets"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5.75 absolute -bottom-16 w-full px-25">
          {HeroSectionLogo.map((item, index) => (
            <HeroSectionToken
              title={item.title}
              key={item.logo}
              subtitle={item.subtitle}
              logo={item.index}
            />
          ))}
        </div>
      </div>
      {/* heroSection */}

      {/* Best offers for   */}
      <div className="mt-30 max-w-6xl mx-auto">
        <p className="text-center mb-12 font-bold text-[40px]">
          Best offers for
        </p>
        <div className="grid grid-cols-2 gap-6">
          {displayCards.map((item, index) => (
            <BestCardComponents
              key={index}
              percentageOff={item.percentageOff}
              date={item.date}
              couponCode={item.couponCode}
              backGroundColor={item.backGroundColor}
            />
          ))}
        </div>

        <div>
          <div
            onClick={() => setShowAll(!showAll)}
            className="flex justify-center mt-15.5"
          >
            <Button
              className="text-Secondary border px-7.5 py-5.25 rounded-xl border-Secondary cursor-pointer"
              title={showAll ? "See Less Offers" : "See All Offers"}
            />
          </div>
        </div>
      </div>
      {/* Best offers for   */}
      {/* main body */}
      <div className="border border-Secondary rounded-4xl mt-30">
        <div className="max-w-6xl mx-auto py-30 border">
          <p className="text-center font-bold text-[40px]">P.H Paribahan</p>
          <p className="text-center text-lg font-Inter text-Primary/60">Yes, you can run unit tests and view the results directly within the app. The integrated <br /> testing features allow for a streamlined .</p>
          <div className="border px-33.75">
            <BestCard width="900px" />
          </div>
        </div>
      </div>
      {/* main body */}
    </section>
  );
};

export default Home;

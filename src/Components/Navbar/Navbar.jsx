"use client";
import { NavPath } from "@/app/NavPath";
import Button from "../Button/Button";
import Link from "next/link";
import BusIcon from "@/asset/Icons/BusIcon";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
  const navMenu = [
    {
      item: "Home",
      path: NavPath.Home,
    },
    {
      item: "About",
      path: NavPath.About,
    },
    {
      item: "Destination",
      path: NavPath.Destination,
    },
    {
      item: "Search",
      path: NavPath.Search,
    },
  ];
  
  return (
    <nav>
      <div className="flex justify-between max-w-6xl mx-auto  items-center mt-9">
        <p className="font-extrabold text-4xl text-Primary">P-Ticket</p>
        <div className="flex gap-4">
          {navMenu.map((item) => (
            <Link href={item.path} className={`text-Primary/70 text-lg font-medium cursor-pointer ${item.path===pathname?"hover:border-b-2":" "}`} key={item.path}>
              {item.item}
            </Link>
            
          ))}
        </div>
        <Button className="flex flex-row-reverse items-center gap-2.5 px-7.5 py-4 border font-Releway text-Secondary font-bold text-lg bg-Secondary/5 rounded-xl" title="Bus" icon={<BusIcon  />} />
      </div>
    </nav>
  );
};

export default Navbar;

import { NavPath } from "@/app/NavPath";
import Button from "../Button/Button";

const Navbar = () => {
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
    <html>
      <div className="">
        <p>P-Ticket</p>
        <div className="flex gap-4">
          {navMenu.map((item) => (
            <p className="cursor-pointer " key={item.path}>
              {item.item}
            </p>
          ))}
        </div>
       <Button/>
      </div>
    </html>
  );
};

export default Navbar;

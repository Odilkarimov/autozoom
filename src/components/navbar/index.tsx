import RusFlag from "../../assets/RusFlag.png";
import EngFlag from "../../assets/EngFlag.png";
import AutoZoomLogo from "../../assets/AutoZoomLogo.svg";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-box flex gap-[30px] items-center">
      <div className="flex gap-[20px]">
        <div>
          <img className="cursor-pointer" width={25} src={RusFlag} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" width={25} src={EngFlag} alt="" />
        </div>
      </div>
      <div>
        <Input className="h-[50px] w-[400px]" placeholder="Search" prefix={<SearchOutlined />} />
      </div>
      <div className="px-[40px]">
        <img width={100} src={AutoZoomLogo} alt="" />
      </div>
      <div>
        <NavLink className="font-semibold text-[20px]" to={"/cars"}>cars</NavLink>
      </div>
      <div>
        <NavLink className="font-semibold text-[20px]" to={"/brand"}>Brand</NavLink>
      </div>
      <div>
        <NavLink className="font-semibold text-[20px]" to={"/services"}>services</NavLink>
      </div>
      <div>
        <NavLink className="font-semibold text-[20px]" to={"/about_us"}>about</NavLink>
      </div>
      <div>
        <NavLink className="font-semibold text-[20px]" to={"/contacts"}>contacts</NavLink>
      </div>
      <div>
        <NavLink className="font-semibold text-[20px]" to={"/blog"}>blog</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

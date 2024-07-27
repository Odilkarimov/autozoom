import RusFlag from "../../assets/RusFlag.png";
import EngFlag from "../../assets/EngFlag.png";
import AutoZoomLogo from "../../assets/AutoZoomLogo.svg";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-box flex gap-[30px] items-center">
      <div className="flex gap-[10px]">
        <div>
          <img className="cursor-pointer" width={25} src={RusFlag} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" width={25} src={EngFlag} alt="" />
        </div>
      </div>
      <div>
        <Input placeholder="Search" prefix={<SearchOutlined />} />
      </div>
      <div>
        <img width={80} src={AutoZoomLogo} alt="" />
      </div>
      <div>
        <NavLink to={"/cars"}>cars</NavLink>
      </div>
      <div>
        <NavLink to={"/brand"}>Brand</NavLink>
      </div>
      <div>
        <NavLink to={"/services"}>services</NavLink>
      </div>
      <div>
        <NavLink to={"/about_us"}>about</NavLink>
      </div>
      <div>
        <NavLink to={"/contacts"}>contacts</NavLink>
      </div>
      <div>
        <NavLink to={"/blog"}>blog</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

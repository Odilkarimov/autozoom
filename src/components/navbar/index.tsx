import RusFlag from "../../assets/RusFlag.png";
import EngFlag from "../../assets/EngFlag.png";
import AutoZoomLogo from "../../assets/AutoZoomLogo.svg";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const changelang = (lang: any) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  const { t } = useTranslation();
  return (
    <div className="container-box flex gap-[30px] items-center">
      <div className="flex gap-[20px]">
        <div>
          <img
            onClick={() => {
              changelang("ru");
            }}
            className="cursor-pointer"
            width={25}
            src={RusFlag}
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() => {
              changelang("en");
            }}
            className="cursor-pointer"
            width={25}
            src={EngFlag}
            alt=""
          />
        </div>
      </div>
      <div>
        <Input
          className="h-[50px] w-[400px]"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="px-[40px]">
        <img width={100} src={AutoZoomLogo} alt="" />
      </div>
      <div className="flex gap-5">
        <div>
          <NavLink className="font-semibold text-[20px]" to={"/cars"}>
            {t("navbar.navtext1")}
          </NavLink>
        </div>
        <div>
          <NavLink className="font-semibold text-[20px]" to={"/brand"}>
            {t("navbar.navtext2")}
          </NavLink>
        </div>
        <div>
          <NavLink className="font-semibold text-[20px]" to={"/services"}>
            {t("navbar.navtext3")}
          </NavLink>
        </div>
        <div>
          <NavLink className="font-semibold text-[20px]" to={"/about_us"}>
            {t("navbar.navtext4")}
          </NavLink>
        </div>
        <div>
          <NavLink className="font-semibold text-[20px]" to={"/contacts"}>
            {t("navbar.navtext5")}
          </NavLink>
        </div>
        <div>
          <NavLink className="font-semibold text-[20px]" to={"/blog"}>
            {t("navbar.navtext6")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

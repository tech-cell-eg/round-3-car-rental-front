import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import ROUTES from "../routes/routes";

function Logo() {
  return (
    <Link to={ROUTES.HOME} className="w-[108px] md:w-fit">
      <img src={logo} alt="logo image" className="w-full" />
    </Link>
  );
}

export default Logo;

import logo from "../assets/Logo.png";

function Logo() {
  return (
    <div className="w-[108px] md:w-fit">
      <img src={logo} alt="logo image" className="w-full" />
    </div>
  );
}

export default Logo;

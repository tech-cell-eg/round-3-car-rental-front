import Logo from "./Logo";
import SearchWrapper from "./SearchWrapper";
import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <>
      <header className="h-[288px] md:h-[124px] py-8 md:py-[40px] px-6 md:px-[32px]">
        {/* on mobile and small screens */}
        <div className="md:hidden flex-col">
          <div className="flex justify-between items-center">
            <Logo />
            <HeaderActions />
          </div>
          <SearchWrapper />
        </div>

        {/* on medium and larger screens */}
        <div className="hidden md:flex justify-between items-center">
          <Logo />
          <SearchWrapper />
          <HeaderActions />
        </div>
      </header>
    </>
  );
}

export default Header;

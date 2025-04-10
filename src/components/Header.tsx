import Logo from "./Logo";
import SearchWrapper from "./SearchWrapper";
import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <header className="md:h-auto py-8 md:py-[35px] px-6 md:px-[32px] bg-surface-default">
      {/* on mobile and small screens */}
      <div className="md:hidden flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Logo />
          <HeaderActions />
        </div>
        <div className="mb-[102px]">
          <SearchWrapper />
        </div>
      </div>

      {/* on medium and larger screens */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex justify-between items-center gap-14 w-[55%]">
          <Logo />
          <SearchWrapper />
        </div>
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;

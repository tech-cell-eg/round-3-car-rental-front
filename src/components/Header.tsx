import Logo from "./Logo";
import SearchWrapper from "./SearchWrapper";
import HeaderActions from "./HeaderActions";
import { useEffect, useRef } from "react";

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
}

function Header({ setHeaderHeight }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };

    updateHeight(); // initial measure
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 start-0 w-full py-8 md:py-[35px] px-6 md:px-[32px] bg-surface-default shadow-md z-50"
    >
      {/* on mobile and small screens */}
      <div className="md:hidden flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Logo />
          <HeaderActions />
        </div>
        {/* <div className="mb-[102px]"> */}
        <div>
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

import { useState } from "react";
import MenuButton from "./MenuButton";
import UserActionButtons from "./UserActionButtons";

function UserActionWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      <UserActionButtons isMenuOpen={isMenuOpen} />
      <MenuButton handleMenuButton={handleMenuToggle} isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default UserActionWrapper;

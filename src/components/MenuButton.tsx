import Icon from "./Icon";

interface MenuButtonProps {
  handleMenuButton: () => void;
  isMenuOpen: boolean;
}

function MenuButton({ handleMenuButton, isMenuOpen }: MenuButtonProps) {
  const buttonHandler = (): void => {
    handleMenuButton();
  };

  return (
    <button onClick={buttonHandler} type="button" className="md:hidden">
      <Icon name={isMenuOpen ? "close" : "menu"} />
    </button>
  );
}

export default MenuButton;

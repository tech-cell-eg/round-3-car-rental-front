import Icon from "./Icon";

type Action = {
  id: number;
  icon: "heart" | "notification" | "settings";
};

interface UserActionButtonsProps {
  isMenuOpen: boolean;
}

function UserActionButtons({ isMenuOpen }: UserActionButtonsProps) {
  const actions: Action[] = [
    { id: 1, icon: "heart" },
    { id: 2, icon: "notification" },
    { id: 3, icon: "settings" },
  ];

  return (
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } md:flex gap-3 md:gap-5 items-center`}
    >
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          className="flex p-[5px] md:p-[10px] md:border border-content-dimmed rounded-max cursor-pointer"
        >
          <Icon name={action.icon} />
        </button>
      ))}
    </div>
  );
}

export default UserActionButtons;

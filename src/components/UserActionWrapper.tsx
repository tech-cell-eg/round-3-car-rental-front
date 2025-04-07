import Icon from "./Icon";

type Action = {
  id: number;
  icon: "heart" | "notification" | "settings";
};

function UserActionWrapper() {
  const actions: Action[] = [
    { id: 1, icon: "heart" },
    { id: 2, icon: "notification" },
    { id: 3, icon: "settings" },
  ];

  return (
    <div className="hidden md:flex gap-5 items-center">
      {actions.map((action) => (
        <span
          key={action.id}
          className="flex p-[10px] border border-gray-300 rounded-full cursor-pointer"
        >
          <Icon name={action.icon} />
        </span>
      ))}
    </div>
  );
}

export default UserActionWrapper;

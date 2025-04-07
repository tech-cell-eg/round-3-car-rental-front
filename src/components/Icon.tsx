import settingsIcon from "../assets/icons/settings.svg";
import heartIcon from "../assets/icons/heart.svg";
import notificationIcon from "../assets/icons/notification.svg";
import search from "../assets/icons/search-normal.svg";
import filter from "../assets/icons/filter.svg";

type IconProps = {
  name: "settings" | "heart" | "notification" | "search" | "filter";
  size?: number;
  className?: string;
};

const iconMap: Record<IconProps['name'], string> = {
  settings: settingsIcon,
  heart: heartIcon,
  notification: notificationIcon,
  search: search,
  filter: filter,
};

const Icon: React.FC<IconProps> = ({ name, size = 20, className = "" }) => {
  const iconSrc = iconMap[name];

  if (!iconSrc) {
    console.warn(`Icon "${name}" is not defined in iconMap.`);
    return null;
  }

  return (
    <img
      src={iconSrc}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={`${className}`}
    />
  );
};

export default Icon;

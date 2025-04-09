import Profile from "./Profile";
import UserActionWrapper from "./UserActionWrapper";

function HeaderActions() {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <UserActionWrapper />
      <Profile />
    </div>
  );
}

export default HeaderActions;

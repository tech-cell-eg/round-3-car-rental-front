import Profile from "./Profile";
import UserActionWrapper from "./UserActionWrapper";

function HeaderActions() {
  return (
    <div>
      <div className="flex gap-5">
        <UserActionWrapper />
        <Profile />
      </div>
    </div>
  );
}

export default HeaderActions;

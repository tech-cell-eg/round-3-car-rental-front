import userAvatar from "../assets/userAvatar.png";

function Profile() {
  return (
    <button type="button" className="w-[44px] cursor-pointer">
      <img src={userAvatar} alt="user image" className="w-full" />
    </button>
  );
}

export default Profile;

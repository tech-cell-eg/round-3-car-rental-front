import userAvatar from "../assets/userAvatar.png";

function Profile() {
  return (
    <button type="button" className="w-7 md:w-[44px] cursor-pointer">
      <img src={userAvatar} alt="user image" className="w-full" />
    </button>
  );
}

export default Profile;

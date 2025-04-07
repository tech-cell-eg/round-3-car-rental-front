import userAvatar from "../assets/userAvatar.png";

function Profile() {
  return (
    <div className="w-[44px] cursor-pointer">
        <img src={userAvatar} alt="user image" className="w-full" />
    </div>
  )
}

export default Profile
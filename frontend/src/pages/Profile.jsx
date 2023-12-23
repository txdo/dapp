import constants from "../constants";
import useProfile from "../hooks/useProfile";

const Profile = () => {
  const userInfo = useProfile();

  return (
    <section className="profile">
      <div className="flex-container">
        <div className="pfp-container">
          <img
            src={`${constants.baseApiUrl}/images/${userInfo.profilePicture}`}
            alt="Profile Picture"
          />
        </div>
        <div className="user-info">
          <h1>
            {userInfo.firstName} {userInfo.lastName}, {userInfo.age}
          </h1>
          <b>{userInfo.location}</b>
          <i>{userInfo.bio}</i>
          <p>Gender: {userInfo.gender}</p>
          <p>Looking to date: {userInfo.lookingToDate}</p>
          <p>Interests:</p>
          <ul>
            {userInfo.interests?.map((interest, idx) => (
              <li key={`${interest}-${idx}`}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;

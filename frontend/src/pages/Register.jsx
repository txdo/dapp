import useRegister from "../hooks/useRegister";

const Register = () => {
  const {
    userInfo,
    setProperty,
    addInterest,
    showInterests,
    setShowInterests,
    interests,
    locations,
    interestRef,
    removeProfilePicture,
    removePhoto,
    register,
  } = useRegister();

  return (
    <section className="register">
      <div className="grid-col-2">
        <div className="reasons">
          <h1>What You Are Signing Up For:</h1>
          <ul>
            <li>
              Create a free profile and browse thousands of potential partners
              in your area
            </li>
            <li>Chat, flirt, and send messages to anyone you like</li>
            <li>Arrange dates and meet your matches in person</li>
            <li>
              Enjoy a safe and secure online dating experience with verified
              profiles and privacy protection
            </li>
          </ul>
        </div>
        <div className="form">
          <form>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={(e) => setProperty("firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={(e) => setProperty("lastName", e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={userInfo.username}
                onChange={(e) => setProperty("username", e.target.value)}
              />
              <input
                type="text"
                placeholder="Age"
                value={userInfo.age}
                onChange={(e) => setProperty("age", e.target.value)}
              />
            </div>
            <div>
              <select
                value={userInfo.location}
                onChange={(e) => setProperty("location", e.target.value)}
              >
                <option selected hidden value="">
                  Location
                </option>
                {locations.map((location, idx) => (
                  <option key={`location-${idx}`} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <div className="interests-input" ref={interestRef}>
                <p onClick={(e) => setShowInterests(!showInterests)}>
                  {userInfo.interests.length === 0
                    ? "Interests"
                    : userInfo.interests.join(", ")}
                </p>
                <ul className={!showInterests ? "hidden" : ""}>
                  {interests.map((interest, idx) => (
                    <li
                      key={`interest-${idx}`}
                      onClick={(e) => addInterest(interest)}
                      className={
                        userInfo.interests.includes(interest) ? "selected" : ""
                      }
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <select
                onChange={(e) => setProperty("gender", e.target.value)}
                value={userInfo.gender}
              >
                <option selected hidden value="">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                onChange={(e) => setProperty("lookingToDate", e.target.value)}
                value={userInfo.lookingToDate}
              >
                <option selected hidden value="">
                  Looking To Date
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
              </select>
            </div>
            <textarea
              placeholder="Bio"
              value={userInfo.bio}
              onChange={(e) => setProperty("bio", e.target.value)}
            />
            <div>
              <input
                type="password"
                placeholder="Password"
                value={userInfo.password}
                onChange={(e) => setProperty("password", e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={userInfo.repeatPassword}
                onChange={(e) => setProperty("repeatPassword", e.target.value)}
              />
            </div>
            <div className="photos-inputs">
              <label htmlFor="profilePhoto">Upload Profile Picture</label>
              <input
                type="file"
                id="profilePhoto"
                accept="image/*"
                onChange={(e) =>
                  setProperty("profilePicture", e.target.files[0])
                }
              />
              <label htmlFor="photos">Upload Photos</label>
              <input
                type="file"
                id="photos"
                accept="image/*"
                multiple
                onChange={(e) =>
                  setProperty("photos", [
                    ...userInfo.photos,
                    ...Array.from(e.target.files),
                  ])
                }
              />
              <div className="profile-image-container">
                {userInfo.profilePicture !== null && (
                  <>
                    <img src={URL.createObjectURL(userInfo.profilePicture)} />
                    <button onClick={(e) => removeProfilePicture(e)}>x</button>
                  </>
                )}
              </div>
              <div className="photos-container">
                {userInfo.photos.length > 0 && (
                  <>
                    {userInfo.photos.map((photo, idx) => (
                      <div className="photo-container">
                        <img
                          key={`photo-${idx}`}
                          src={URL.createObjectURL(photo)}
                        />
                        <button onClick={(e) => removePhoto(e, idx)}>x</button>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            <button onClick={(e) => register(e)}>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

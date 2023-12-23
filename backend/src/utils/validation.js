exports.validateRegistrationData = (data) => {
  const errors = [];

  if (data.firstName.length < 3) {
    errors.push("First name must be at least 3 characters long.");
  }

  if (data.lastName.length < 3) {
    errors.push("Last name must be at least 3 characters long.");
  }

  if (data.username.length < 4) {
    errors.push("Username must be at least 4 characters long.");
  }

  if (data.location === "") {
    errors.push("Please select a location.");
  }

  if (data.interests.length === 0) {
    errors.push("Please select at least one interest.");
  }

  if (data.password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  if (data.password !== data.repeatPassword) {
    errors.push("Passwords do not match.");
  }

  const parsedAge = parseInt(data.age, 10);
  if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 100) {
    errors.push("Age must be a number between 18 and 100.");
  }

  if (data.bio.length < 20) {
    errors.push("Bio must be at least 20 characters long.");
  }

  if (data.profilePicture === null) {
    errors.push("Profile picture is required.");
  }

  if (data.photos?.length > 10) {
    errors.push("Ten photos maximum.");
  }

  return errors;
};

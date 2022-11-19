const authData = {
  isLoggedIn: false,
};

const cred = {
  user: "admin",
  passwd: "admin123",
};

const login = (user, passwd) => {
  if (user === cred.user && passwd === cred.passwd) {
    authData.isLoggedIn = true;
    return true;
  } else {
    return false;
  }
};

const exportData = { login, authData };

export default exportData;

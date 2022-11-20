const authData = {
  isLoggedIn: false,
};

const cred = [
  {
    user: "patient",
    passwd: "patient123",
  },
  {
    user: "doctor",
    passwd: "doctor123",
  },
];

const loginPatient = (user, passwd) => {
  if (user === cred[0].user && passwd === cred[0].passwd) {
    authData.isLoggedIn = true;
    return true;
  } else {
    return false;
  }
};
const loginDoctor = (user, passwd) => {
  if (user === cred[1].user && passwd === cred[1].passwd) {
    authData.isLoggedIn = true;
    return true;
  } else {
    return false;
  }
};

const exportData = { loginPatient,loginDoctor, authData };

export default exportData;

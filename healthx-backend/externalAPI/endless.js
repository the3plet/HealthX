const axios = require("axios");

const apiUrl = "http://api.endlessmedical.com/v1/dx";

let sessionId = "";

const initApi = () => {
  axios
    .get(`${apiUrl}/InitSession`)
    .then((res) => {
      console.log(res.data);
      if (res.data.status === "ok") {
        sessionId = res.data.SessionID;
        console.log(sessionId);
        let options = {
          method: "POST",
          url: `${apiUrl}/AcceptTermsOfUse`,
          params: {
            passphrase:
              "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com",
            SessionID: sessionId,
          },
        };
        axios
          .request(options)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
  let options = {
    method: "POST",
    url: `${apiUrl}/GetUseDefaultValues`,
    params: {
      SessionID: sessionId,
    },
  };
  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

module.exports = { initApi };

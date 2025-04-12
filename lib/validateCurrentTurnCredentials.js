// const { fetchCredentials, setCredentials } = require('./keyValueStore');
// const generateTURNCredentials = require("./generateTurnCredentialsFromSecret");

// const validateCurrentTurnCredentials = async () => {
//   const credentials = await fetchCredentials();

//   if(true) {
//     const { username, password, expiry } = generateTURNCredentials();
//     await setCredentials(username, password, expiry);
//     return { username, password, expiry };
//   } else {
//     return credentials;
//   }
// }

const getFormattedLatestCredentials = async () => {
  // const credentials = await validateCurrentTurnCredentials();
  return formatIceServersPayload();
};

const formatIceServersPayload = () => {
  return {
    iceServers: [
      {
        urls: `turn:${process.env.TURN_SERVER_URL}`,
        credential: "password",
        username: "fgfg",
      },
    ],
  };
};

module.exports = {
  // validateCurrentTurnCredentials,
  getFormattedLatestCredentials,
};

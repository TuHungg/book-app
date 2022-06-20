import "../cofigFirbase";
import { getDatabase, ref, set, child, get } from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import uuid from "react-native-uuid";

const db = getDatabase();
const auth = getAuth();
const dbRef = ref(db);

// export const apiSigUp = async (data) => {
//   const userId = uuid.v4();

//   const result = await set(ref(db, "users/" + userId), {
//     userId: userId,
//     username: data.username,
//     email: data.email,
//     password: data.password,
//     vip: false,
//     // phone: data.phone,
//   });

//   return result;
// };

export const apiSigUp = async (data) => {
  await createUserWithEmailAndPassword(auth, data.email, data.password);
};

export const apiSigIn = async (data) => {
  await await signInWithEmailAndPassword(auth, data.email, data.password);
};

export const apiSigOut = async () => {
  await signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch((error) => {
      console.log("An error happend");
    });
};

// export const getAllUsers = async () => {
//   const usersRef = ref(db, "users/");
//   await onValue(usersRef, (snapshot) => {
//     const data = snapshot.val();
//     updateStarCount(postElement, data);
//   });
// };

// export const apiSigIn = async () => {
//   get(child(dbRef, `users/`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// export const apiSigIn = async () => {
//   const userId = await auth.user.userId;

//   return await onValue(
//     ref(db, "/users/" + userId),
//     (snapshot) => {
//       const username = (snapshot.val() && snapshot.val().username) || "Anonymous";
//       // ...
//       console.log(username);
//     },
//     {
//       onlyOnce: true,
//     }
//   );
// };

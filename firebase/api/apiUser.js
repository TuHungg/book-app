import "../Firebase";
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

export const apiSigUp = async (data) => {
  // const userId = uuid.v4();
  const user = await createUserWithEmailAndPassword(auth, data.email, data.password);

  // console.log(data);
  const result = await set(ref(db, "users/" + user.user.uid), {
    userId: user.user.uid,
    username: data.username,
    email: data.email,
    vip: false,
    yourbook: null,
  });

  return result;
};

let uidUser;

export const apiSigIn = async (data) => {
  const result = await signInWithEmailAndPassword(auth, data.email, data.password);
  // console.log(result);
  uidUser = result.user.uid;

  return result;
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

export const getAllUser = async () => {
  let users;
  await get(child(dbRef, `users/${uidUser}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        users = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return users;
};

export const apiCurrentUser = async (uid) => {
  let user;

  await get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        user = snapshot.val();
        // console.log(user);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  // console.log(user);
  return user;
};

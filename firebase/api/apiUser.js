import "../cofigFirbase";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const db = getDatabase();

const apiSigUp = (data) => {
  const userId = uuidv4();
  set(ref(db, "user/" + userId), {
    userId: userId,
    username: data.username,
    email: data.email,
    password: data.password,
    vip: false,
    phone: data.phone,
  });
};

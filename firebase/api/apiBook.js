import "../cofigFirbase";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  getFirestore,
  Timestamp,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore();

export const apiGetBook = async () => {
  const querySnapshot = await getDocs(collection(db, "books"));

  const myArray = new Array();

  querySnapshot.forEach((doc) => {
    const obj = { id: doc.id, value: doc.data() };

    // console.log(`${doc.id} => ${doc.data()}`);

    return myArray.push(obj);
  });

  return myArray;
};

// export const postBook = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "books"), {
//       name: "Nhà giã kim",
//       author: "do not know",
//       categary: "classic",
//       price: 189.0,
//       page: 250,
//       language: "vn,en",
//       // date: Timestamp.fromDate(new Date()),
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

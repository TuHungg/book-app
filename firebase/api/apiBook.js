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

import { getApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const Firestore = getFirestore();

// fireStorege
// Get a non-default Storage bucket
// const firebaseApp = getApp();
const storage = getStorage();
const storageRef = ref(storage);

export const apiGetImage = async () => {
  // Points to 'images'
  const imagesRef = ref(storageRef, "images");

  // Points to 'images/space.jpg'
  // Note that you can use variables to create child values
  const fileName = "doremon.jpg";
  const spaceRef = ref(imagesRef, fileName);

  // File path is 'images/space.jpg'
  const path = spaceRef.fullPath;

  // File name is 'space.jpg'
  const name = spaceRef.name;

  // Points to 'images'
  const imagesRefAgain = spaceRef.parent;

  return imagesRefAgain;
};

export const apiGetBook = async () => {
  const querySnapshot = await getDocs(collection(Firestore, "books"));

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

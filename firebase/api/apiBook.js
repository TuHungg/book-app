import "../Firebase";
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
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const Firestore = getFirestore();

// fireStorege
// Get a non-default Storage bucket
// const firebaseApp = getApp();
const storage = getStorage();
const storageRef = ref(storage);

// export const apiGetImage = async (urls) => {
//   let bookname = "dac-nhan-tam.jpg";
//   let imagesRef;

//   // console.log(urls);
//   urls.map((url) => {
//     imagesRef = ref(storage, `image/${url}`);
//     console.log("render");
//     // console.log(url);
//   });

//   console.log("data", imagesRef);

//   const result = await getDownloadURL(imagesRef)
//     .then((url) => {
//       // console.log("got image");
//       return url;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return result;
// };

export const apiGetImage = async () => {
  const imageRef = ref(storage, `image`);

  const myArray = new Array();

  await listAll(imageRef)
    .then((res) => {
      const { items } = res;
      // res.prefixes.forEach((folderRef) => {
      //   console.log("folderRef");
      //   console.log(folderRef);
      //   // return folderRef;
      // });
      const url = Promise.all(items.map((itemRef) => getDownloadURL(itemRef)));

      return url
        .then((res) => {
          return res.map((item) => {
            // console.log(item);
            const obj = {
              image: item,
            };

            myArray.push(obj);
          });

          // return JSON.stringify(res);
        })
        .catch((error) => {
          console.log(error);
        });
    })

    .catch((error) => {
      console.log(error);
    });

  return myArray;
};

export const apiGetBook = async () => {
  const querySnapshot = await getDocs(collection(Firestore, "books"));

  const myArray = new Array();

  const ArrayUrl = new Array();

  const urlImages = await apiGetImage();

  // console.log(urlImages);
  // console.log(ArrayUrl);

  querySnapshot.forEach((doc) => {
    const obj = {
      id: doc.id,
      value: {
        author: doc.data().author,
        image: doc.data().image,
        language: doc.data().language,
        description: doc.data().description,
        imageUrl: doc.data().imageUrl,
        name: doc.data().name,
        page: doc.data().page,
        price: doc.data().price,
        rating: doc.data().rating,
      },
    };

    return myArray.push(obj);
  });

  // urlImages.map((url) => {
  //   // return ArrayUrl.push(JSON.stringify(url.image));
  // });

  // console.log(myArray.concat(ArrayUrl));

  return myArray;
};

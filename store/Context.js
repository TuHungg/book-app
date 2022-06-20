import react from "react";
import { createContext } from "react";
// import auth from "@react-native-firebase/auth";
// import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = React.useState(null);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         sigin: async (data) => {
//           try {
//             await auth().signInWithEmailAndPassword(data.email, data.password);
//           } catch (error) {
//             console.log(error);
//           }
//         },
//         sigup: async () => {
//           try {
//             await auth().createUserWithEmailAndPassword(data.email, data.password);
//           } catch (error) {
//             console.log(error);
//           }
//         },
//         logout: async () => {
//           try {
//             await auth().signOut();
//           } catch (error) {
//             console.log(error);
//           }
//         },
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

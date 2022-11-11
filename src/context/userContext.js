import { createContext, useState, useEffect } from "react"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore/lite';

export const UserContext = createContext()

export function UserContextProvider(props){

  const [currentUser, setCurrentUser] = useState()
  const [userInfo, setUserInfo] = useState({
    "uid": "",
    "email": "",
    "name": "",
    "type": "",
    "plugins": []
  })
  const [loadingDataUser, setLoadingDataUser] = useState(true)
  const connexion = (email , pwd) => signInWithEmailAndPassword(auth, email, pwd)
  const checkUser = async (e) => {
    console.log(e);
    console.log(db);
    const citiesCol = collection(db, 'team');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }
  //Connexion-Deconnexion automatique quand on quite l'appli
    //Equivalent COMPONENT DID MOUNT
    useEffect(()=>{

      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        // on précharge les state user d'un contenu anonime ou connu
        setCurrentUser(currentUser)
        setLoadingDataUser(false)
      })

    }, [])// le tableau vide pour le mode componentDidMount
  return(
    <UserContext.Provider value={{currentUser, connexion, checkUser, setUserInfo, userInfo}}>
      {!loadingDataUser && props.children}
    </UserContext.Provider>
  )
}

import { createContext, useState, useEffect } from "react"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../firebase-config'
import { collection, getDocs , doc, getDoc, setDoc} from 'firebase/firestore/lite';

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
  const inscription = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  const checkUser = async (id) => {
    const test = doc(db, 'team', id)
    const testSnap = await getDoc(test)
    return testSnap.data()
    // const citiesCol = collection(db, 'team');
    // const citySnapshot = await getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    // return cityList
  }
  const addUser = async (id, name, mail) => {
    await setDoc(doc(db, "team", id), {
  name: name,
  type: "equipe",
  allow: ["Calendrier", "RDV", "Congé"],
  mail: mail
});
  }
  const getAllUser = async () => {
    const collectionTeam = collection(db , 'team')
    const teamSnapshot = await getDocs(collectionTeam)
    const teamList = teamSnapshot.docs.map(doc => doc.data())
    return teamList
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
    <UserContext.Provider value={{currentUser, connexion, inscription, checkUser, addUser, getAllUser, setUserInfo, userInfo}}>
      {!loadingDataUser && props.children}
    </UserContext.Provider>
  )
}

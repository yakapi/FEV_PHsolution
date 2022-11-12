import React , {useContext, useRef,useState} from "react"

import {UserContext} from "../../context/userContext"

import Background from "../../assets/images/bg/bg_log.jpg"
import UserLogIcon from "../../assets/images/user-shape.svg"
import PasswordLogIcon from "../../assets/images/padlock.svg"
import LogLoader from '../loader/log_loader'
import Logo from "../../assets/images/logo.png"
import {auth, db} from '../../firebase-config'
import { useNavigate } from 'react-router'
import Cookies from "universal-cookie"


export default function Home(){
  const navigate = useNavigate()
  const cookies = new Cookies();
  const {connexion, checkUser, setUserInfo} = useContext(UserContext)
  const [logLoader, setLogLoader] = useState(false)
  const [logResult, setLogResult] = useState(false)
  let bg_url = "url('"+Background+"')"
  const bgImage = {
    backgroundImage: bg_url
  }
  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }
  const closeLogModal = () => {
    setLogResult(false)
    setLogLoader(false)
  }
  const firebaseConnexion = async (e) => {
    e.preventDefault()
    setLogLoader(true)
    try {
      const cred = await connexion(inputs.current[0].value, inputs.current[1].value)
      // formRef.current.reset()
      let array_first_cred = [cred.user.email,cred.user.uid]
      try {
        const cred2 = await checkUser(array_first_cred[1])
        let userState = {
          "uid": array_first_cred[1],
          "email": array_first_cred[0],
          "name": cred2.name,
          "type": cred2.type,
          "plugins": cred2.allow
        }
        cookies.set('infoUser', userState, {path: '/'})
        setUserInfo(userState)
        setLogResult(false)
        setLogLoader(false)
        navigate("/manager")
      } catch (e) {
        setLogResult('Erreur2')

      }

    } catch (err) {
      //Mot de passe erreur
      console.log(err);
      setLogResult('Erreur')
    }
  }
  return(
    <div className="home_container" style={{backgroundImage: "url('"+Background+"')"}}>
      {logLoader ? <LogLoader close={closeLogModal} result={logResult}/> : ""}
      <div className="enc_logo">
        <img src={Logo}/>
      </div>

      <form onSubmit={firebaseConnexion} className="log_form">
        <div className="field_log">
          <div className="enc_field_icon">
            <img src={UserLogIcon} />
          </div>
          <input ref={addInputs} type="text" placeholder="Votre identifiant"/>
        </div>
        <div className="log_form_line"></div>
        <div className="field_log">
          <div className="enc_field_icon">
            <img src={PasswordLogIcon} />
          </div>
          <input ref={addInputs} type="password" placeholder="Votre mot de passe"/>
        </div>
        <div className="log_form_line"></div>
        <div className="valid_entry">
          <p>mot de passe oublié?</p>
          <input className="link_green" type="submit" value="valider"/>
        </div>
      </form>
    </div>
  )
}

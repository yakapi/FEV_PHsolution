import React, {useRef, useContext} from 'react'
import {signOut} from 'firebase/auth'
import {UserContext} from "../../../context/userContext"
import {auth} from "../../../firebase-config"

export default function CreateSalarie({modalState, setResult}){
  const {inscription, addUser} =useContext(UserContext)
  const createSalarie = useRef([])
  const addCreateSalarie = el => {
    if(el && !createSalarie.current.includes(el)){
      createSalarie.current.push(el)
    }
  }

  const addSalarie = async (e) => {
      e.preventDefault()
      modalState(true)
      try {
        const cred = await inscription(createSalarie.current[0].value, createSalarie.current[2].value)
        console.log(cred);
        let uid = cred.user.uid
        try {
            const cred2 = await addUser(uid, createSalarie.current[1].value, createSalarie.current[0])
            setResult("Salarié ajouté avec succès !")
        } catch (e) {
          setResult('ERROR2')
        }
      } catch (e) {
        setResult("error")
        console.log(e);
      }
  }

  return(
    <div>
      <h2>Ajouter un salarié</h2>
      <form onSubmit={addSalarie} className="create_salarie_form">
        <div className="field_create_salarie">
          <input ref={addCreateSalarie} className="field_plugin" type="email" placeholder="email de connexion" />
          <p className="tips">l'email peut être fictive, ex: test@test.fr</p>
        </div>
        <div className="field_create_salarie">
          <input ref={addCreateSalarie} className="field_plugin" type="text" placeholder="nom du salarié" />
        </div>
        <div className="field_create_salarie">
        <input ref={addCreateSalarie} className="field_plugin" type="password" placeholder="mots de passe" />
        </div>
        <div>
        <input className="link_green" type="submit" value="ajouter" />
        </div>
      </form>
    </div>
  )
}

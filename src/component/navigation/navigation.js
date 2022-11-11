import React , {useContext, useEffect} from "react"

import {Link} from "react-router-dom"
import {UserContext} from "../../context/userContext"
import Cookies from 'universal-cookie';

import Leaf from "../../assets/images/white_leaf.png"


export default function Navigation(){
  const{userInfo, setUserInfo} = useContext(UserContext)
  const cookies = new Cookies()

  useEffect(()=>{
    function isEmpty(str) {
      return (!str || 0 === str.length);
    }
    if (isEmpty(userInfo.name)) {
      if (!isEmpty(cookies.get('infoUser'))) {
        setUserInfo(cookies.get('infoUser'))
      }
    }
  },[])
  return(
    <div className="navigation_container">
      <div className="navigation">
        <div className="enc_leaf">
          <img src={Leaf}/>
        </div>
        <div className="userboard">
          <p className="utilisateur">utilisateur : {userInfo.name}</p>
          <p className="link_green">Aide</p>
          <p className="link_red">Déconnexion</p>
        </div>
      </div>
      <div className="menu">
        <div className="menu_content">
          <div className="menu_plugin">
            {userInfo.plugins.map((element, i)=>(
              <Link to={"/manager/"+element}>
                <div className="PluginLink" key={"Link"+element}>
                  <p>{element}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="Doc">
            <p>Documentation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

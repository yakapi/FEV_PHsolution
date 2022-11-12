import React, {useContext, useState, useEffect} from 'react'

import { UserContext } from '../../context/userContext'
import Cookies from 'universal-cookie';

import {Outlet, useLocation, Navigate} from 'react-router-dom'

import Screen from '../screen' 
import Navigation from "../navigation/navigation"

export default function ManagerChecker(){
  const {currentUser, setUserInfo} = useContext(UserContext)

  //si utilisateur pas connecté alors ...
  if (!currentUser) {
    return <Navigate to="/"/>
  }
    //si il est connecté on retourne Outlet qui renvoie à la route enfant
    return(
      <div>
        <Navigation/>
        <Screen />
        <Outlet/>
      </div>
    )
}

import React , {useEffect, useState, useContext} from "react"

import {UserContext} from '../../../context/userContext'

import Salaries from './all_salaries'
import Preloader from './preloader_salarie'

export default function ListSalarie(){
  const {getAllUser} = useContext(UserContext)
  const [listState, setListState] = useState(false)
  const [listContent, setListContent] = useState(false)
  const userList = async ()=>{
    try {
      const cred = await getAllUser()
      console.log(cred);
      setListContent(cred)
      setListState(true)
    } catch (e) {

    }
  }
  useEffect(()=>{
    userList()
  },[])
  return(
    <div>
    {listState ? <Salaries userList={listContent}/> : <Preloader />}
    </div>
  )
}

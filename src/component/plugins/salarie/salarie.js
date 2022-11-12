import React, {useState} from 'react'

import CreateSalarie from "./createSalarie"
import ModalSalarie from './modalSalarie'
import ListSalarie from './listSalarie'


export default function SalariePlugin(){

  const [modalSalarieState, setModalSalarieState] = useState(false)
  const [modalSalarieResult, setModalSalarieResut] = useState(false)

  return(
    <div className="plugin_container">
      <div className="plugin_brik"></div>
      <div className="plugin_box">
        <h2 className="title_plugin">Salarié</h2>
        <div className="content_plugin">
          {modalSalarieState ? <ModalSalarie setState={setModalSalarieState} setResult={setModalSalarieResut} modalResult={modalSalarieResult}/> : ""}
        <div className="content_box">
          <CreateSalarie modalState={setModalSalarieState} setResult={setModalSalarieResut} />
        </div>
        <div className="content_box">
          <ListSalarie />
        </div>
        </div>
      </div>
    </div>
  )
}

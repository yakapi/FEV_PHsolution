import './App.css';
import React, {useContext, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'


import Home from "./component/page/home"
import Manager from "./component/page/manager"
import SalariePlugin from "./component/plugins/salarie/salarie"
import PlanningPlugin from "./component/plugins/planning/planning"
import ServicesPlugin from "./component/plugins/services/services"
import ReservationPlugin from "./component/plugins/reservation/reservation"
import ParametrePlugin from "./component/plugins/parametre/parametre"
import ErrorPage from "./component/page/error"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager /> }>
          <Route path="/manager/salarié" element={<SalariePlugin/>} />
            <Route path="/manager/planning" element={<PlanningPlugin/>} />
              <Route path="/manager/services" element={<ServicesPlugin/>}/>
                <Route path="/manager/réservation" element={<ReservationPlugin/>}/>
                  <Route path="/manager/paramêtre" element={<ParametrePlugin/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;

export default function Salaries({userList}){
  return(
    <div>
      <div>
        <h2>Gestion des salariés</h2>
      </div>
      <div className="salarie_line bgspc">
      <div className="salarie_element spcel">
        <h2>Prénom</h2>
      </div>
      <div className="salarie_element spcel">
        <h2>Fonction</h2>
      </div>
      <div className="salarie_element spcel butSal">
        <h2>Action</h2>
      </div>
      </div>
      {userList.map((element)=>(
        <div className="salarie_line">
          <div className="salarie_element">
          <h2>{element.name}</h2>
          </div>
          <div className="salarie_element">
          <h2>{element.type}</h2>
          </div>
          <div className="salarie_element butSal">
          <p className="link_green">modifier</p>
          <p className="link_red">supprimer</p>
          </div>

        </div>
      ))}
    </div>
  )
}

import Loader from '../../loader/loader'

export default function ModalSalarie({modalResult, setState, setResult}){
  const close_modal_salarie = () => {
    setResult(false)
    setState(false)
  }
  return(
    <div className="modal_salarie">
      <div className="modal_salarie_content">
      <div onClick={close_modal_salarie} className="close_log_modal"><p>x</p></div>
        {!modalResult ? <Loader /> : modalResult}
      </div>
    </div>
  )
}

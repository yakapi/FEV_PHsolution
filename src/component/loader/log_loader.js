import Loader from "./loader"
export default function LogLoader({result, close}){
  return(
    <div className="log_loader_container">
      <div className="result_log_form">
      {result ? <Result close={close} result={result}/> : <Loader/>}
      </div>
    </div>
  )
}

function Result({result, close}){
  return(
    <div>
      <div onClick={close} className="close_log_modal"><p>x</p></div>
      <p>{result}</p>
    </div>
  )
}

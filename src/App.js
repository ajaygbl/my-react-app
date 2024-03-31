import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [resp, setData] = useState([{}])

  useEffect(() => {
    fetch("/argo").then(
      res => res.json()).then(
        resp => {
          setData(resp)
          console.log(resp.data.service.name)
    }
  )
  }, [])
  //return (<div className="card">
  //  {typeof resp.data === "undefined" ? (<p>loading</p>) : (resp.data.service.metrics[0].dimensions.map((el, i) => (<p key={i}>{el.value}</p>))) }
  //  </div>)
  return (<div className="card">
  {typeof resp.data === "undefined" ? (<p>loading</p>) : (resp.data.service.metrics.map((el , i) => (<p key={i}>{el.dimensions[0].value}</p>)))}
  </div>)
}
export default App;

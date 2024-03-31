import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [resp, setData] = useState([{}])
  const [slovar, setSlovar] = useState([{}])

  useEffect(() => {
    fetch("/argo").then(
      res => res.json()).then(
        resp => {
          setData(resp)
          console.log(resp.data.service.name)
    }
  )
  }, [])

  useEffect(() => {
    fetch("/argo/slo").then(
      res => res.json()).then(
        slovar => {
          setSlovar(slovar)
          console.log(slovar)
    }
  )
  }, [])

  //return (<div className="card">
  //  {typeof resp.data === "undefined" ? (<p>loading</p>) : (resp.data.service.metrics[0].dimensions.map((el, i) => (<p key={i}>{el.value}</p>))) }
  //  </div>)
  return (<div className="card">
  {typeof resp.data === "undefined" ? (<p>loading</p>) : (<p>{resp.data.service.name}</p>) }
  {typeof resp.data === "undefined" ? (<p>loading</p>) : (resp.data.service.metrics.map((el , i) => (<p key={i}>{el.dimensions[0].value}</p>)))}
  <div>
  {typeof slovar.data === "undefined" ? (<p>loading</p>) : (slovar.data.endpoints[0].previous_week_uptime.__typename)} : {typeof slovar.data === "undefined" ? (<p>loading</p>) : (slovar.data.endpoints[0].previous_week_uptime.percent)}

  </div>
  </div>)
}
export default App;

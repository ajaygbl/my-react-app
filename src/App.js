import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [resp, setData] = useState([])

  useEffect(() => {
    fetch("/argo").then(
      res => res.json()).then(
        resp => {
          setData(resp)
          console.log(resp.data.service.name)
    }
  )
  }, [])
  return (<div className="card">
    {typeof resp.data === "undefined" ? (<p>loading</p>) : (<p>{resp.data.service.name}</p>) }
    </div>)
}
export default App;

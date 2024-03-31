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
  return (<div>{resp.data.service.name}</div>)
}
export default App;

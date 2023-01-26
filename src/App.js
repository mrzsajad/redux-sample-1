import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state);
  return (
    <div className="App">
      <h1>
        <Badge>{number}</Badge>
      </h1>
      <Button variant="danger" style={{ margin: "10px" }} onClick={()=>dispatch({type:"plus5"})}>
        +5
      </Button>
      <Button variant="danger" style={{ margin: "10px" }} onClick={()=>dispatch({type:"plus10"})}>
        +10
      </Button>
      <Button variant="danger" style={{ margin: "10px" }} onClick={()=>dispatch({type:"minus5"})}>
        -5
      </Button>
      <Button variant="danger" style={{ margin: "10px" }} onClick={()=>dispatch({type:"minus10"})}>
        -10
      </Button>
    </div>
  );
}

export default App;

import "./App.css";
import CardContainer from "./Components/CardContainer";
import listings from "./data/data";

function App(){
  return(
    <>
      <h1>Resorts Lite</h1>
      <CardContainer listings ={listings}/>
    </>
  );
}
export default App;
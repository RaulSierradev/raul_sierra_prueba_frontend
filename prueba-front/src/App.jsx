import "./App.css";
import Home from "./components/Home/Home";
import data from './data.js'

function App() {
  return (
    <div>
      <Home data={data}/>
      
    </div>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home";
import List from "./List/List";
import Hotels from "./Hotel/Hotels";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotel" element={<List/>}/>
      <Route path="/hotel/:id" element={<Hotels/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

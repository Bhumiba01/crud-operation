import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import Update from "./components/Update";
import Create from "./components/Create";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<HomePage/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/createModal" element={<Modal/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  ); 
}

export default App;

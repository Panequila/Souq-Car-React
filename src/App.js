
import './App.css';
import {Route , Routes} from "react-router-dom"
import SalePage from './pages/sale_page'
function App() {
  return (
    <div className="container-fluid">
    <Routes>
     <Route path="/" element={<SalePage/>}/>
     <Route path="/SalePage" element={<SalePage/>}/>
    </Routes>
    </div>
  );
}

export default App;


import './App.css';
import {Route , Routes} from "react-router-dom";
import SalePage from './pages/sale_page';
import MainPage from './pages/mainPage';
function App() {
  return (
    <>

    <div className="container-fluid">
    <Routes>
     <Route path="/" element={<MainPage/>}/>
     <Route path="/MainPage" element={<MainPage/>}/>
     <Route path="/SalePage" element={<SalePage/>}/>

    </Routes>
    
    </div>
  
    </>
    
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import SalePage from "./pages/sale_page";
import MainPage from "./pages/mainPage";
import NavigationBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/SalePage" element={<SalePage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

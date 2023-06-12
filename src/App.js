import "./App.css";
import { Route, Routes } from "react-router-dom";
import SalePage from "./pages/buy-cars";
import MainPage from "./pages/main-page";
import NavigationBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import SignInForm from "./pages/sign-in";

function App() {
  return (
    <>  
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/SalePage" element={<SalePage />} />
          <Route path="/login" element={<SignInForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

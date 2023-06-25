import "./App.css";
import { Route, Routes } from "react-router-dom";
import SalePage from "./pages/buy-cars";
import MainPage from "./pages/main-page";
import NavigationBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import SignInForm from "./Components/sign-in/sign-in";
import SignUpForm from "./Components/sign-up/sign-up";
import { Navbar } from "react-bootstrap";
import Authentication from "./pages/authentication/authentication";
import { UserProvider } from "./Contexts/users";

function App() {
  return (
    <UserProvider>
      <div className="container-fluid">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/SalePage" element={<SalePage />} />
          <Route path="/login" element={<Authentication />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SalePage from "./pages/sale_page";
import MainPage from "./pages/main-page";
import NavigationBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import SignInForm from "./Components/sign-in/sign-in";
import SignUpForm from "./Components/sign-up/sign-up";
import { Navbar } from "react-bootstrap";
import Authentication from "./pages/authentication/authentication";
import { LanguageProvider } from "./Contexts/language";
import strings from "./localization/localization";
function App() {
  var localLang = localStorage.getItem("lang");
  var [language, setLanguage] = useState(localLang ? localLang : "ar");
  strings.setLanguage(language);
  localStorage.setItem("lang", language);

  return (
    <>
      <LanguageProvider value={{ language, setLanguage }}>
        <div
      
          dir={`${language === "en" ? "ltr" : "rtl"}`}
        >
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/SalePage" element={<SalePage />} />
            <Route path="/login" element={<Authentication />} />
          </Routes>
      
        </div>
        <Footer></Footer>
      </LanguageProvider>
    </>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BuyCarsPage from "./pages/buy-cars/buy-cars";
import MainPage from "./pages/main-page";
import NavigationBar from "./Components/navbar/navbar";
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
        <div className="container-fluid" dir={`${language === "en" ? "ltr" : "rtl"}`}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/SalePage" element={<BuyCarsPage />} />
            <Route path="/login" element={<Authentication />} />
          </Routes>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;

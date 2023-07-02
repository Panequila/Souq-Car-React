import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import SalePage from "./pages/sale_page";
=======
import BuyCarsPage from "./pages/buy-cars/buy-cars";
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
import MainPage from "./pages/main-page";
import NavigationBar from "./Components/navbar/navbar";
import Authentication from "./pages/authentication/authentication";
import { LanguageProvider } from "./Contexts/language";
import strings from "./localization/localization";
<<<<<<< HEAD
=======

>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
function App() {
  var localLang = localStorage.getItem("lang");
  var [language, setLanguage] = useState(localLang ? localLang : "ar");
  strings.setLanguage(language);
  localStorage.setItem("lang", language);

  return (
    <>
      <LanguageProvider value={{ language, setLanguage }}>
<<<<<<< HEAD
        <div
      
          dir={`${language === "en" ? "ltr" : "rtl"}`}
        >
=======
        <div className="container-fluid" dir={`${language === "en" ? "ltr" : "rtl"}`}>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/MainPage" element={<MainPage />} />
<<<<<<< HEAD
            <Route path="/SalePage" element={<SalePage />} />
            <Route path="/login" element={<Authentication />} />
          </Routes>
      
        </div>
        <Footer></Footer>
=======
            <Route path="/SalePage" element={<BuyCarsPage />} />
            <Route path="/login" element={<Authentication />} />
          </Routes>
        </div>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
      </LanguageProvider>
    </>
  );
}

export default App;

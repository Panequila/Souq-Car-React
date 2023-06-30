import React from 'react';


export  const languageContext=  React.createContext()
export  const LanguageProvider=languageContext.Provider

// import React, { createContext,  useState } from 'react';
// import strings from '../localization/localization'
// import { useEffect } from 'react';
// export const languageContext= createContext();
// function LanguageProvider ({children}) {
    
// var localLang = localStorage.getItem("lang")
// var [language,setLanguage]= useState(localLang? localLang :"ar");
// strings.setLanguage(language);
// console.log(language);
// localStorage.setItem("lang", language) 

//     return (
//         <>
//        <languageContext.Provider value={{language,setLanguage}} >
//         <div className="container-fluid" dir={`${language==='en'?'ltr':'rtl'}`}>
//             {children}
//             </div>
//         </languageContext.Provider>
//         </>
//     );
// }

// export default LanguageProvider;
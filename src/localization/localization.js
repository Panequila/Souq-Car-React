<<<<<<< HEAD
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  ar: {
// start home page
    SearchForCar: "ابحث عن سيارة",
    new: "جديد",
    AlmostNew: "كسر زيرو",
    used: "مستعمل",
    carMarker: "المصنع",
    carModel: " موديل السياره",
    selectGovernorate: "اختر المحافظة",
    buyCars: "بيع و شراء السيارات",
    maxPrice: "السعر الأعلى",
    lowestPrice: "السعر الأدنى",
    searchForACar: "ابحث عن سيارة",
    searchByCarBrands: "Search by car brands",
    exploreSections: " استكشف الأقسام",
    latestArticles: "أحدث المقالات",
    allArticles: "كل المقالات",
    lookingForABuyerForYourCar: "تبحث عن مشتري لسيارتك؟",
    CarNewsInEgypt: "تريد معرفة أحدث اخبار السيارات في مصر؟",
    carNews: "أخبار السيارات ",
    sellMyCar: " بيع سيارتي ",
    // end home page
    Keywords:'كلمات مفتاحية - رقم الاعلان',
=======
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 ar:{
   //  filter components
   Keywords:'كلمات مفتاحية - رقم الاعلان',
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
   location:"الموقع",
   egypt:"مصر",
  carMaker:"مصنع السيارة",
  carBody:"هيكل السيارة",
  carFuel:"نوع الوقود",
  carTransmission:"ناقل الحركة",
  color:"اللون",
  kilometerage:"المسافه المقطوعه بالكيلومتر",
  carCondition:"حالة السياره",
  engine:"سعه المحرك",
  productionYear:"سنه التصنيع",
  extraFeatures:"المميزات الاضافية",
  price:"السعر",
  payment:"طرق الدفع",
  from:"من",
  to:"الى",
  EGP:"ج.م",
  km:"كم",
  ex:'مثال',
  plases:["الجميع" , "القاهره",'الجيره' , 'الاسكنداريه' , "المنيا" ],
<<<<<<< HEAD
=======
  carMakerList:['الجميع',"لادا","سينوفا","دفسك","هايما","شاهين","كينغ لونغ","كارى","اسبيرانزا","استون مارتين","النصر","ام جى","اوبل","اودى","بروتون","بورش","بى ام دابليو","بيجو","تويوتا","جى ام سي","جيب","جيلى","دايو","رينو","سكودا","سوزوكى","سيات","سيتروين","شيرى","شيفروليه","فورد","فولفو","فولكس واغن","فيات","فيراري","كيا","مازدا","هونداى"],
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
  carFuelList:["بنزين", "ديزيل(سولار)", "كهرباء", "الغاز الطبيعى", "أخرى"],
  carTransmissionList:["أوتوماتيك", "يدوى", "cvt"],
  carConditionList:["جديد", " كسر زيرو", "مستعمل", "خرده"],
  engineList:["cc 1-999", "cc 1000-1399","cc 1400-1599","cc 1600","cc 1601-2000","cc 2001-2800", "cc 2800-7500","cc 4000","cc 3000","cc 5700","cc 4400","miles 350",],
  extraFeaturesList:[
    "نطام فرامل ABS",
    "كاميرا خلفية",
    "شاشه تعمل باللمس",
    "مثبت سرعه",
    "حساس ركن",
    "EBD",
    "اطارات خاصه",
    "تنيه/نضام مضاد للسرقة",
    "وسائد هوائيه",
    "مرايا كهربائيه",
    "زجاج كهربائى",
    "مقاعد جلد",
    "شاحن يو اس بس",
    "مصابيح ضبابيه",
    "باور ستيرينج",
    "بلوتوث",
    "مدخل aux",
    "قفل مركزى",
    "تكييف",
    "راديو اف ام",
  ],
  search:"بحث",
  clear:"حذف الفلاتر",
   //view nav componennts
   show:'عرض',
   order:'ترتيب',
   orderList:['من الأحدث للأقدم','من الأقدم للأحدث','السعر الأعلى أولا','لسعر الأقل أولا',],
<<<<<<< HEAD
  },
  en: {
    // start home page
    SearchForCar: "Search for a car",
    new: "New",
    AlmostNew: "Almost New",
    used: "Used",
    carMarker: "Car Marker",
    carModel: "Car Model",
    selectGovernorate: "Select Governorate",
    buyCars: "Buy Cars",
    maxPrice: "Max Price",
    lowestPrice: "Lowest Price",
    searchForACar: "Search for a car",
    advancedSearch: "Advanced Search",
    searchByCarBrands: "Search by car brands",
    exploreSections: "Explore Sections",
    latestArticles: "Latest Articles",
    allArticles: "all articles",
    CarNewsInEgypt: "Want to know the latest car news in Egypt?",
    carNews: "Car News",
    sellMyCar: "Sell My Car",
    lookingForABuyerForYourCar: "Looking for a buyer for your car?",
    // end home page
    //  filter components 
=======
   filter:"فلتره"

 },
 en: {
  //  filter components 
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
  Keywords:'Keywords - Ad No',
  location:"Location",
  egypt:"Egypt",
  carMaker:"Car Maker",
  carBody:"Car Body", 
  carFuel:"Car Fuel Type",
  carTransmission:"Car Transmission Type",
  color:"Color",
  kilometerage:"Kilometerage",
  carCondition:"Car Condition",
  engine:"Engine",
  productionYear:"Production Year",
  extraFeatures:"Extra Features",
  price:"Price",
  payment:"Payment Type",
  from:"From",
  to:"To",
  EGP:"EGP",
  km:"km",
  ex:'ex',
  plases:["All" , "Cairo",'Giza' , 'Alexandria' , "Minia" ],
<<<<<<< HEAD
=======
  carMakerList:['All',"Lada","Senova","dfsk","HAIMA","Shaheen","King Long","carry","Speranza","Aston Martin","Al Nasr","MG","Opel","Audi","Proton","Porsche","BMW","Peugeot","Toyota","GMC","jeep","Geely","Daewoo","Renault","Skoda","Suzuki","Seat","Citroen","Chert","Chevrolet","Ford","Volvo","Volkswagen ","Fiat","Ferrari","Kia","Mazda","Hyundai"],
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
  carFuelList:["Petrol","Diesel","Electric","Gas","Other"],
  carTransmissionList:['Automatic','Manual','CVT'],
  carConditionList:['New','Almost New','Used','Scrap'],
  engineList:["cc 1-999", "cc 1000-1399","cc 1400-1599","cc 1600","cc 1601-2000","cc 2001-2800", "cc 2800-7500","cc 4000","cc 3000","cc 5700","cc 4400","miles 350",],
  extraFeaturesList:['ABS brake system','Back camera','Touch screen','Cruise control','corner sensors','EBD','Special frames','Alarm/Anti-thefh system','Airbags','Electric mirrors','Electric glass','leather seats','USB charger','Mist lanterns','Power steering','Bluetooth','Aux audio input','Center locl','Conditioning','FM radio'],
  search:"Search",
  clear:"Clear Filter",

  //view nav componennts
  show:'Show',
  order:'Order',
  orderList:['Newest First','Oldest First','Highest Price First','Lowest Price First',],
<<<<<<< HEAD
  },
});
export default strings;
=======
  filter:"Filter"

 }
});
export default strings;
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877

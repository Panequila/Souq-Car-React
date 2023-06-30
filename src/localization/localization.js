import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 ar:{
   //  filter components
   Keywords:'كلمات مفتاحية - رقم الاعلان',
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
  carMakerList:['الجميع',"لادا","سينوفا","دفسك","هايما","شاهين","كينغ لونغ","كارى","اسبيرانزا","استون مارتين","النصر","ام جى","اوبل","اودى","بروتون","بورش","بى ام دابليو","بيجو","تويوتا","جى ام سي","جيب","جيلى","دايو","رينو","سكودا","سوزوكى","سيات","سيتروين","شيرى","شيفروليه","فورد","فولفو","فولكس واغن","فيات","فيراري","كيا","مازدا","هونداى"],
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
   filter:"فلتره"

 },
 en: {
  //  filter components 
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
  carMakerList:['All',"Lada","Senova","dfsk","HAIMA","Shaheen","King Long","carry","Speranza","Aston Martin","Al Nasr","MG","Opel","Audi","Proton","Porsche","BMW","Peugeot","Toyota","GMC","jeep","Geely","Daewoo","Renault","Skoda","Suzuki","Seat","Citroen","Chert","Chevrolet","Ford","Volvo","Volkswagen ","Fiat","Ferrari","Kia","Mazda","Hyundai"],
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
  filter:"Filter"

 }
});
export default strings;
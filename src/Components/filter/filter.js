import { useState } from "react";
import "./filter.css";
<<<<<<< HEAD
import strings from '../../localization/localization';
=======
import strings from "../../localization/localization";

>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
function Filter(props) {
  const localLang = localStorage.getItem("lang");
  const [togel, setTogel] = useState({ place: false, carMaker: false , color:false });
  const [carBody, SetCarBody] = useState(false);
  const [fuel, setFuel] = useState(false);
  const [control, setControl] = useState(false);
  const [distance, setDistance] = useState(false);
  const [status, setStatus] = useState(false);
  const [engine, setEngine] = useState(false);
  const [feature, setFeature] = useState(false);
  const [price, setPrice] = useState(false);
  const [year, setYear] = useState(false);
  const yearList = [];
  for (let year = 2024; year >= 1968; year--) {
    yearList.push(year);
  }
<<<<<<< HEAD
  
=======
  const carBodyList = [
    {
      img: "https://souq.car/storage/car_bodies/KhIZBFI6HuROkDGKh3Rw6pkZcvOoyg2o7pyCG5Bf.png",
      name_ar: "هاتشباك",
      name_en: "Hatchback",
    },
    {
      img: "https://souq.car/storage/car_bodies/9Bf8qujWRIk3xmEx8fydhXu55GDaQCry12KohHUp.png",
      name_ar: "كوبيه",
      name_en: "Coupe",
    },
    {
      img: "https://souq.car/storage/car_bodies/RsAZx4ojS1KfP4AaW9FqSVLdw6qCevmy95lkr91M.png",
      name_ar: "سيدان",
      name_en: "Sedan",
    },
    {
      img: "https://souq.car/storage/car_bodies/PVXc0rflnzlUrtkJPeUqeVjeVaPvKDM1e8GrILVB.png",
      name_ar: "سياره مكشوفه",
      name_en: "Convertible",
    },
    {
      img: "https://souq.car/storage/car_bodies/OjgIf5HiJzIpk1I3FIfNPjLDPz9HFVPsfSIYc5r8.png",
      name_ar: "ستيشن واجن",
      name_en: "Station wagon",
    },
    {
      img: "https://souq.car/storage/car_bodies/YGC92Ool7dhvaBW0nFjujKaNpVxPFU25lGsDkdCo.png",
      name_ar: "كروس اوفر",
      name_en: "Crossover",
    },
    {
      img: "https://souq.car/storage/car_bodies/VgtZsF6LR7qitVsLNZS8trE655Xo4qXDq2VYLf1T.png",
      name_ar: "مينى فان",
      name_en: "Mini Van",
    },
    {
      img: "https://souq.car/storage/car_bodies/yMTZOivrvlK46ZrSN1uyaIVY9oV7uyFvoAnDJk6C.png",
      name_ar: "بيك اب ",
      name_en: "Pickup",
    },
    {
      img: "https://souq.car/storage/car_bodies/wyZLd2q9IbZsMRzamaymkViz7aZrJat3rhxB8TYr.png",
      name_ar: "ربع نقل",
      name_en: "Quarter transfer",
    },
    {
      img: "https://souq.car/storage/car_bodies/0drZ3AMQqda2XdvXmS5RCMY1SbIKErVycCpiArZF.png",
      name_ar: "اتوبيس/باص",
      name_en: "Bus",
    },
  ];

  const colorList =[
  {color:"#000000" , name_ar:"اسود", name_en:"black"},
  {color:"#808080" , name_ar:"رمادى", name_en:"grey"},
  {color:"#0000FF" , name_ar:"ازرق", name_en:"blue"},
  {color:"#FF0000" , name_ar:"احمر", name_en:"red"},
  {color:"#FFFFFF" , name_ar:"ابيض", name_en:"white"},
  {color:"#00008B" , name_ar:"كحلى", name_en:"Navy"},
  
 

  ]

>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
  function active(el) {
    console.log(el);
    var element = document.getElementById(el);
    element.classList.toggle("checkbox-container-active");
  }
  // const Togel =(item) =>{
  //   setTogel({...togel, [item]:!togel.item})
  // }
  return (
    <>
      <aside className="col-3  display ">
        <div
          className=" p-3 me-2 w-100 border-0 theme "
<<<<<<< HEAD
          style={{ textAlign: "center", }}
        >
          <p>{strings.Keywords}</p>
          <input
            style={{display: "inline-block", width: "80%" }}
          />
=======
          style={{ textAlign: "center" }}
        >
          <p>{strings.Keywords}</p>
          <input style={{ display: "inline-block", width: "80%" }} />
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
        </div>
        <div>
          <div
            className="w-100 mt-3 d-flex me-2   rounded theme"
<<<<<<< HEAD
            onClick={() => setPlace(place ? false : true)}
=======
            onClick={() => setTogel({ ...togel, place: !togel.place })}
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
          >
            <i
              style={{ fontSize: "21px" }}
              className={`fa-sharp fa-solid fa-location-dot  icon ${
                togel.place ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
<<<<<<< HEAD
              <div className={place ? "active" : ""}>
=======
              <div className={togel.place ? "active" : ""}>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
                <div className="me-2 ms-2">{strings.location}</div>
                <div className="me-2 ms-2">{strings.egypt}</div>
              </div>
              <i
                className={
<<<<<<< HEAD
                  place
=======
                  togel.place
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
<<<<<<< HEAD
          {place && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
            <select className="w-100 border-0 p-2"
             style={{ background: "rgb(206, 224, 248)" }}
            >
              {strings.plases.map((item) => (
                <option value="">{item}</option>
              ))}
            </select>
          </div>
          )}

          <div className=" w-100 mt-3 d-flex me-2 rounded theme">
=======
          {togel.place && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
              <select
                className="w-100 border-0 p-2"
                style={{ background: "rgb(206, 224, 248)" }}
              >
                {strings.plases.map((item) => (
                  <option value="">{item}</option>
                ))}
              </select>
            </div>
          )}

          <div
            className=" w-100 mt-3 d-flex me-2 rounded theme"
            onClick={() => setTogel({ ...togel, carMaker: !togel.carMaker })}
          >
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
            <i
              className={`fa-solid fa-car-on iconfont icon
              ${togel.carMaker ? "active" : ""}`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
<<<<<<< HEAD
              <div className="  me-2 ms-2">{strings.carMaker}</div>

              <i className="fa-regular fa-plus m-2 ps-2 pe-2"></i>
            </div>
          </div>
          <div className="w-100 mt-3 d-flex me-2 rounded theme">
=======
              <div className={`me-2 ms-2 ${togel.carMaker ? "active" : ""}`}>
                {strings.carMaker}
              </div>

              <i
                className={
                  togel.carMaker
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {togel.carMaker && (
            <div className="p-4 me-2 w-100 justify-content-center theme">
              <select
                className="w-100 border-0 p-2"
                style={{ background: "rgb(206, 224, 248)" }}
              >
                {strings.carMakerList.map((item) => (
                  <option value="">{item}</option>
                ))}
              </select>
              {/* <Dropdown options={strings.carMakerList} placeHolder="المصنع" /> */}
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 rounded theme"
            onClick={() => SetCarBody(carBody ? false : true)}
          >
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
            <div>
              <i
                className={`fa-solid fa-car-side iconfont icon ${
                  carBody ? "active" : ""
                }`}
              ></i>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center ">
<<<<<<< HEAD
              <div className="  me-2 ms-2 ">{strings.carBody}</div>
              <i className="fa-regular fa-plus m-2 ps-2 pe-2"></i>
=======
              <div className={`me-2 ms-2 ${carBody ? "active" : ""}`}>
                {strings.carBody}
              </div>
              <i
                className={
                  carBody
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
            </div>
          </div>
          {carBody && (
            <div className=" p-3 me-2 w-100 theme ">
              {carBodyList.map((item) => (
                <div className="col-xxl-4 col-6 mt-2 mb-2 ps-2 pe-2 d-inline-flex ">
                  <label className=" h-100" id={item.name_ar}>
                    <input
                      className="checkbox input-pos"
                      type="checkbox"
                      name="bodies[]"
                      value=""
                      onClick={() => active(item.name_ar)}
                    />
                    <div className="input-cont">
                      <div className="catItem bodyType">
                        <div className=" text-center w-100   pt-2 pb-2">
                          <div className="   w-100">
                            <img className="w-75" src={item.img} alt="" />
                          </div>
                          <div>
                            {localLang === "ar" ? item.name_ar : item.name_en}
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 rounded theme"
            onClick={() => setFuel(fuel ? false : true)}
          >
            <i
              className={`fa-solid fa-gas-pump iconfont  icon ${
                fuel ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
<<<<<<< HEAD
              <div className={`me-2 ms-2 ${fuel ? "active" : ""}`}>{strings.carFuel}</div>
=======
              <div className={`me-2 ms-2 ${fuel ? "active" : ""}`}>
                {strings.carFuel}
              </div>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877

              <i
                className={
                  fuel
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {fuel && (
            <div className=" p-3 me-2 w-100 theme ">
<<<<<<< HEAD
              {strings.carFuelList.map((item) => (
=======
              {strings.carFuelList.map((item, index) => (
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
                <label
                  className="d-inline-block checkbox-container  me-2 mt-1"
                  id={item}
                >
                  <input
                    className="ms-1 "
                    type="checkbox"
                    name="transmission[]"
                    value=""
                    onClick={() => active(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 rounded theme"
            onClick={() => setControl(control ? false : true)}
          >
            <i
              style={{ fontSize: "25px" }}
              className={`fa-solid fa-map-pin icon ${control ? "active" : ""}`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${control ? "active" : ""}`}>
<<<<<<< HEAD
              {strings.carTransmission}
=======
                {strings.carTransmission}
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
              </div>

              <i
                className={
                  control
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {control && (
            <div className=" p-3 me-2 w-100 theme ">
              {strings.carTransmissionList.map((item) => (
                <label
                  className="d-inline-block checkbox-container  me-2 mt-1"
                  id={item}
                >
                  <input
                    className="ms-1 "
                    type="checkbox"
                    name="transmission[]"
                    value=""
                    onClick={() => active(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
<<<<<<< HEAD
          <div className="w-100 mt-3 d-flex me-2 rounded theme">
=======
          <div className="w-100 mt-3 d-flex me-2 rounded theme"
          onClick={() => setTogel({ ...togel, color: !togel.color })}
          >
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
            <i
              style={{
                padding: "11px",
              }}
              className={`fa-solid fa-palette icon ${togel.color ? "active" : ""} `}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
<<<<<<< HEAD
              <div className="  me-2 ms-2">{strings.color}</div>

              <i className="fa-regular fa-plus m-2 ps-2 pe-2"></i>
=======
              <div className= {`me-2 ms-2 ${togel.color ? "active" : ""}`}>{strings.color}</div>

              <i className={
                  togel.color
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }></i>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
            </div>
          </div>
         {togel.color&&(
           <div className=" p-3 me-2 w-100 theme ">
           {colorList.map((item)=> 
           <label className="d-inline-block m-2 " id={item.name_ar}>
           <input
             className="input-pos "
             type="checkbox"
             name=""
             value=""
             onClick={() => active(item.name_ar)}
           />
           <div className="input-cont">
             <div className="w-100 colorItem text-center p-3">
               <div className="color" style={{backgroundColor:item.color}}></div>
               <div className="color-title d-block f-small f-w-700">{localLang === "ar"? item.name_ar:item.name_en}</div>
             </div>
           </div>
         </label>
           )}  
           </div>
         )}
          <div
            className="w-100 mt-3 d-flex me-2 theme rounded"
            onClick={() => setDistance(distance ? false : true)}
          >
            <i
              className={`fa-solid fa-gauge-high iconfont icon ${
                distance ? "active" : ""
              } `}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`${distance ? "active" : ""} , me-2 ms-2`}>
<<<<<<< HEAD
             {strings.kilometerage}
=======
                {strings.kilometerage}
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
              </div>

              <i
                className={
                  distance
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {distance && (
            <div className="p-3 me-2 w-100 theme">
              <div className="ps-4 pe-4">
                <label className="mb-3 f-seminormal">{strings.from}</label>
                <div className="input-group ">
                  <input
                    className="form-control grey only-numbers"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="kilometerage_from"
                    placeholder="مثال: 150" 
                    value=""
                  />
                  <span className="input-group-text">{strings.km}</span>
                </div>

                <label className="mb-3 mt-3 f-seminormal">{strings.to}</label>
                <div className="input-group ">
                  <input
                    className="form-control grey only-numbers"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="kilometerage_to"
                    placeholder="مثال: 180"
                    value=""
                  />
                  <span className="input-group-text">{strings.km}</span>
                </div>
              </div>
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 theme rounded"
            onClick={() => setStatus(status ? false : true)}
          >
            <i
              className={`fa-solid fa-car-burst  icon ${
                status ? "active" : ""
              } `}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${status ? "active" : ""} ms-2 me-2`}>
<<<<<<< HEAD
              {strings.carCondition}              </div>
=======
                {strings.carCondition}{" "}
              </div>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877

              <i
                className={
                  status
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {status && (
            <div className=" p-3 me-2 w-100 theme ">
              {strings.carConditionList.map((item) => (
                <label
                  className="d-inline-block checkbox-container  me-2 mt-1"
                  id={item}
                >
                  <input
                    className="ms-1 "
                    type="checkbox"
                    name="transmission[]"
                    value=""
                    onClick={() => active(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 theme rounded"
            onClick={() => setEngine(engine ? false : true)}
          >
            <i
              className={`fa-solid fa-gears rounded icon ${
                engine ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${engine ? "active" : ""}`}>
<<<<<<< HEAD
              {strings.engine} 
=======
                {strings.engine}
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
              </div>

              <i
                className={
                  engine
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {engine && (
            <div className=" p-3 me-2 w-100 theme">
              {strings.engineList.map((item) => (
                <label
                  className="d-inline-block checkbox-container  me-2 mt-1"
                  id={item}
                >
                  <input
                    className="ms-1 "
                    type="checkbox"
                    name="transmission[]"
                    value=""
                    onClick={() => active(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 theme rounded"
            onClick={() => setYear(year ? false : true)}
          >
            <i
              className={`fa-regular fa-calendar-days iconfont icon ${
                year ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
<<<<<<< HEAD
              <div className={`me-2 ms-2 ${year ? "active" : ""} `}>{strings.productionYear} </div>
=======
              <div className={`me-2 ms-2 ${year ? "active" : ""} `}>
                {strings.productionYear}{" "}
              </div>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877

              <i
                className={
                  year
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 pe-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {year && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
              <select className="w-100  p-2">
                {yearList.map((item) => (
                  <option value="">{item}</option>
                ))}
              </select>
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 theme rounded"
            onClick={() => setFeature(feature ? false : true)}
          >
            <i
              className={`fa-regular fa-square-plus iconfont icon ${
                feature ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${feature ? "active" : ""} `}>
<<<<<<< HEAD
              {strings.extraFeatures} 
=======
                {strings.extraFeatures}
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
              </div>

              <i
                className={
                  feature
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 pe-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {feature && (
            <div className=" p-3 me-2 w-100 theme ">
              {strings.extraFeaturesList.map((item) => (
                <label
                  className="d-inline-block checkbox-container  me-2 mt-1"
                  id={item}
                >
                  <input
                    className="ms-1 "
                    type="checkbox"
                    name="transmission[]"
                    value=""
                    onClick={() => active(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 theme rounded"
            onClick={() => setPrice(price ? false : true)}
          >
            <i
              className={`fa-solid fa-hand-holding-dollar icon ${
                price ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
<<<<<<< HEAD
              <div className={`me-2 ms-2 ${price ? "active" : ""} `}>{strings.price} </div>
=======
              <div className={`me-2 ms-2 ${price ? "active" : ""} `}>
                {strings.price}{" "}
              </div>
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877

              <i
                className={
                  price
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
          {price && (
            <div className="p-3 me-2 w-100 theme">
              <div className="ps-4 pe-4">
                <label className="mb-3 f-seminormal">{strings.from} </label>
                <div className="input-group ">
                  <input
                    className="form-control grey only-numbers"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name=""
                    placeholder="0"
                    value=""
                  />
                  <span className="input-group-text">{strings.EGP} </span>
                </div>

                <label className="mb-3 mt-3 f-seminormal">{strings.to}</label>
                <div className="input-group ">
                  <input
                    className=" form-control input"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name=""
                    placeholder="0"
                    value=""
                  />
                  <span className="input-group-text">{strings.EGP}</span>
                </div>
              </div>
            </div>
          )}
          <div
            className="card text-bg-primary p-2 mt-3"
            style={{ textAlign: "center" }}
          >
<<<<<<< HEAD
           {strings.search}
          </div>
          <div className="rounded p-2 mt-2 theme" style={{ textAlign: "center" }}>
          {strings.clear}
=======
            {strings.search}
          </div>
          <div
            className="rounded p-2 mt-2 theme"
            style={{ textAlign: "center" }}
          >
            {strings.clear}
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877
          </div>
        </div>
      </aside>
    </>
  );
}
export default Filter;

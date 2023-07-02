import { useState } from "react";
import "./filter.css";
import strings from '../../localization/localization';
function Filter(props) {
  const [place, setPlace] = useState(false);
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
  
  function active(el) {
    console.log(el);
    var element = document.getElementById(el);
    element.classList.toggle("checkbox-container-active");
  }
  return (
    <>
      <aside className="col-3  display ">
        <div
          className=" p-3 me-2 w-100 border-0 theme "
          style={{ textAlign: "center", }}
        >
          <p>{strings.Keywords}</p>
          <input
            style={{display: "inline-block", width: "80%" }}
          />
        </div>
        <div>
          <div
            className="w-100 mt-3 d-flex me-2   rounded theme"
            onClick={() => setPlace(place ? false : true)}
          >
            <i
              style={{ fontSize: "21px" }}
              className={`fa-sharp fa-solid fa-location-dot  icon ${
                place ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={place ? "active" : ""}>
                <div className="me-2 ms-2">{strings.location}</div>
                <div className="me-2 ms-2">{strings.egypt}</div>
              </div>
              <i
                className={
                  place
                    ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2 pe-2"
                }
              ></i>
            </div>
          </div>
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
            <i
              className={`fa-solid fa-car-on iconfont icon
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className="  me-2 ms-2">{strings.carMaker}</div>

              <i className="fa-regular fa-plus m-2 ps-2 pe-2"></i>
            </div>
          </div>
          <div className="w-100 mt-3 d-flex me-2 rounded theme">
            <div>
              <i className="fa-solid fa-car-side icon"></i>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className="  me-2 ms-2 ">{strings.carBody}</div>
              <i className="fa-regular fa-plus m-2 ps-2 pe-2"></i>
            </div>
          </div>

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
              <div className={`me-2 ms-2 ${fuel ? "active" : ""}`}>{strings.carFuel}</div>

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
              {strings.carFuelList.map((item) => (
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
              {strings.carTransmission}
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
          <div className="w-100 mt-3 d-flex me-2 rounded theme">
            <i
              style={{
                padding: "11px",
              }}
              className="fa-solid fa-palette icon"
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="  me-2 ms-2">{strings.color}</div>

              <i className="fa-regular fa-plus m-2 ps-2 pe-2"></i>
            </div>
          </div>

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
             {strings.kilometerage}
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
              {strings.carCondition}              </div>

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
              {strings.engine} 
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
              <div className={`me-2 ms-2 ${year ? "active" : ""} `}>{strings.productionYear} </div>

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
              {strings.extraFeatures} 
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
              <div className={`me-2 ms-2 ${price ? "active" : ""} `}>{strings.price} </div>

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
           {strings.search}
          </div>
          <div className="rounded p-2 mt-2 theme" style={{ textAlign: "center" }}>
          {strings.clear}
          </div>
        </div>
      </aside>
    </>
  );
}
export default Filter;

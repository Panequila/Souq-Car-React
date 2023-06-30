import { useState } from "react";
import "./filter.css";
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

  const fuelList = ["بنزين", "ديزيل(سولار)", "كهرباء", "الغاز الطبيعى", "أخرى"];
  const controlList = ["أوتوماتيك", "يدوى", "cvt"];
  const statusList = ["جديد", " كسر زيرو", "مستعمل", "خرده"];
  const engineList = [
    "cc 1-999",
    "cc 1000-1399",
    "cc 1400-1599",
    "cc 1600",
    "cc 1601-2000",
    "cc 2001-2800",
    "cc 2800-7500",
    "cc 4000",
    "cc 3000",
    "cc 5700",
    "cc 4400",
    "miles 350",
  ];
  const featureList = [
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
  ];
  const yearList = [];
  for (let year = 2024; year >= 1968; year--) {
    yearList.push(year);
  }
  function active(el) {
    var element = document.getElementById(el);
    element.classList.toggle("checkbox-container-active");
  }
  return (
    <>
      <aside className="col-3  display">
        <div
          className="card p-2 me-2 w-100 border-0 "
          style={{ alignItems: "center" }}
        >
          <p>كلمات مفتاحيه-رقم الاعلان</p>
          <input
            style={{ width: "80%", backgroundColor: "rgb(206, 224, 248)" }}
          />
        </div>
        <div>
          <div
            className="w-100 mt-3 d-flex me-2  bg-white rounded"
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
                <div className="me-2">الموقع</div>
                <div className="me-2">مصر</div>
              </div>
              <i
                className={
                  place
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {place && (
            <div className="p-4 me-2 w-100 bg-white  ">
              <div style={{ textAlign: "center" }}>
                <select
                  name=""
                  id=""
                  className="w-100 border-0 p-2"
                  style={{ background: "rgb(206, 224, 248)" }}
                >
                  <option value="">الجميع</option>
                  <option value="">القاهره</option>
                  <option value="">الجيزه</option>
                  <option value="">الاسكنداريه</option>
                  <option value="audi">بنى سويف</option>
                </select>
              </div>
            </div>
          )}

          <div className=" w-100 mt-3 d-flex me-2 bg-white rounded ">
            <i
              className={`fa-solid fa-car-on iconfont icon
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className="  me-2">مصنع السياره</div>

              <i className="fa-regular fa-plus m-2 ps-2 "></i>
            </div>
          </div>
          <div className="w-100 mt-3 d-flex me-2 bg-white rounded">
            <div>
              <i className="fa-solid fa-car-side icon"></i>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className="  me-2  ">هيكل السياره</div>
              <i className="fa-regular fa-plus m-2 ps-2"></i>
            </div>
          </div>

          <div
            className="w-100 mt-3 d-flex me-2 bg-white rounded "
            onClick={() => setFuel(fuel ? false : true)}
          >
            <i
              className={`fa-solid fa-gas-pump iconfont  icon ${
                fuel ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className={`me-2 ${fuel ? "active" : ""}`}>نوع الوقود</div>

              <i
                className={
                  fuel
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {fuel && (
            <div className=" p-3 me-2 w-100 bg-white ">
              {fuelList.map((item) => (
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
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setControl(control ? false : true)}
          >
            <i
              style={{ fontSize: "25px" }}
              className={`fa-solid fa-map-pin icon ${control ? "active" : ""}`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${control ? "active" : ""}`}>
                ناقل الحركه
              </div>

              <i
                className={
                  control
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {control && (
            <div className=" p-3 me-2 w-100 bg-white ">
              {controlList.map((item) => (
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
          <div className="w-100 mt-3 d-flex me-2 bg-white rounded">
            <i
              style={{
                padding: "11px",
              }}
              className="fa-solid fa-palette icon"
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="  me-2 ">اللون</div>

              <i className="fa-regular fa-plus m-2 ps-2"></i>
            </div>
          </div>

          <div
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setDistance(distance ? false : true)}
          >
            <i
              className={`fa-solid fa-gauge-high iconfont icon ${
                distance ? "active" : ""
              } `}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`${distance ? "active" : ""} , me-2`}>
                المسافه المقطوعه
              </div>

              <i
                className={
                  distance
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {distance && (
            <div className="p-3 me-2 w-100 bg-white">
              <div className="ps-4 pe-4">
                <label className="mb-3 f-seminormal">من</label>
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
                  <span className="input-group-text">كم</span>
                </div>

                <label className="mb-3 mt-3 f-seminormal">الى</label>
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
                  <span className="input-group-text">كم</span>
                </div>
              </div>
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setStatus(status ? false : true)}
          >
            <i
              className={`fa-solid fa-car-burst  icon ${
                status ? "active" : ""
              } `}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${status ? "active" : ""}`}>
                حاله السياره
              </div>

              <i
                className={
                  status
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {status && (
            <div className=" p-3 me-2 w-100 bg-white ">
              {statusList.map((item) => (
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
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setEngine(engine ? false : true)}
          >
            <i
              className={`fa-solid fa-gears rounded icon ${
                engine ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 + ${engine ? "active" : ""}`}>
                سعه المحرك
              </div>

              <i
                className={
                  engine
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {engine && (
            <div className=" p-3 me-2 w-100 bg-white ">
              {engineList.map((item) => (
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
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setYear(year ? false : true)}
          >
            <i
              className={`fa-regular fa-calendar-days iconfont icon ${
                year ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${year ? "active" : ""} `}>سنه التصنيع</div>

              <i
                className={
                  engine
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {year && (
            <div className="p-4 me-2 w-100 bg-white d-flex justify-content-center">
              <select className="w-100  p-2">
                <option value="">الجميع</option>
                {yearList.map((item) => (
                  <option value="">{item}</option>
                ))}
              </select>
            </div>
          )}
          <div
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setFeature(feature ? false : true)}
          >
            <i
              className={`fa-regular fa-square-plus iconfont icon ${
                feature ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${feature ? "active" : ""} `}>
                المميزات الاضافيه
              </div>

              <i
                className={
                  feature
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {feature && (
            <div className=" p-3 me-2 w-100 bg-white ">
              {featureList.map((item) => (
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
            className="w-100 mt-3 d-flex me-2 bg-white rounded"
            onClick={() => setPrice(price ? false : true)}
          >
            <i
              className={`fa-solid fa-hand-holding-dollar icon ${
                price ? "active" : ""
              }`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${price ? "active" : ""} `}>السعر</div>

              <i
                className={
                  price
                    ? "fa-solid fa-minus m-2 ps-2 text-primary"
                    : "fa-regular fa-plus m-2 ps-2"
                }
              ></i>
            </div>
          </div>
          {price && (
            <div className="p-3 me-2 w-100 bg-white">
              <div className="ps-4 pe-4">
                <label className="mb-3 f-seminormal">من</label>
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
                  <span className="input-group-text">ج.م</span>
                </div>

                <label className="mb-3 mt-3 f-seminormal">الى</label>
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
                  <span className="input-group-text">ج.م</span>
                </div>
              </div>
            </div>
          )}
          <div
            className="card text-bg-primary p-2 mt-3"
            style={{ textAlign: "center" }}
          >
            البحث
          </div>
          <div className="card p-2 mt-2" style={{ textAlign: "center" }}>
            البحث
          </div>
        </div>
      </aside>
    </>
  );
}
export default Filter;

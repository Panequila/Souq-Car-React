function Filter(props) {
  return (
    <>
      <aside className="col-3 display">
        <div className="card p-2 border-0" style={{ alignItems: "center" }}>
          <p>كلمات مفتاحيه-رقم الاعلان</p>
          <input style={{ width: "80%", backgroundColor: "rgb(206, 224, 248)" }} />
        </div>
        <div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col">
                <i
                  style={{ backgroundColor: "rgb(177, 177, 177)", padding: "16px" }}
                  className="fa-sharp fa-solid fa-location-dot rounded"
                ></i>
              </div>
              <div className="col-5">
                <p className="m-0">الموقع</p>
                <p className="m-0">مصر</p>
              </div>
              <i className="fa-regular fa-plus col m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "11px" }} className="fa-solid fa-car-on rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">مصنع السياره</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "9px" }} className="fa-solid fa-car-side rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">هيكل السياره</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "10px" }} className="fa-solid fa-gas-pump rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">نوع الوقود</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "11px" }} className="fa-solid fa-map-pin rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">ناقل الحركه</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "9px" }} className="fa-solid fa-palette rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">اللون</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "9px" }} className="fa-solid fa-gauge-high rounded"></i>
              </div>
              <div className="col-7">
                <p className="m-0" style={{ textAlign: "start" }}>
                  المسافه المقطوعه
                </p>
              </div>
              <i className="fa-regular fa-plus col-2 m-1" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "9px" }} className="fa-solid fa-car-burst rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">حاله السياره</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i style={{ background: "rgb(177, 177, 177)", padding: "9px" }} className="fa-solid fa-gears rounded"></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">سعه المحرك</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i
                  style={{ background: "rgb(177, 177, 177)", padding: "10px" }}
                  className="fa-regular fa-calendar-days rounded"
                ></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">سنه التصنيع</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card mt-3 border-0">
            <div className="row">
              <div className="col-2">
                <i
                  style={{ background: "rgb(177, 177, 177)", padding: "9px" }}
                  className="fa-solid fa-hand-holding-dollar rounded"
                ></i>
              </div>
              <div className="col-7" style={{ alignSelf: "center" }}>
                <p className="m-0">السعر</p>
              </div>
              <i className="fa-regular fa-plus col-2 m-2" style={{ textAlign: "end", alignSelf: "center" }}></i>
            </div>
          </div>
          <div className="card text-bg-primary p-2 mt-3" style={{ textAlign: "center" }}>
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

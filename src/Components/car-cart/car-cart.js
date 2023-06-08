function CarCart(props) {

  const { car } = props;

  return (
    <>
      <card className="card mb-3 border-0 ">
        <div className="row g-0">
          <div className="col-lg-3">
            <img
              width="100%"
              src="https://souq.car/storage/posts/ac641631dd2b43df9019e4a7771571a4_20230424052026_main_image.jpg"
              className="img-fluid rounded"
              alt="..."
              style={{ objectFit: "cover", height: "270px" }}
            />
          </div>
          <div className="col-lg-9 p-3">
            <div className="row">
              <div className="col-6">
                <div className="row" style={{ textAlign: "start" }}>
                  <div className="col-4">
                    <img className="w-100" src="https://souq.car/storage/car_makers/14.jpg" alt="" />
                  </div>
                  <div className="col-8">
                    <p>{car.name}</p>
                  </div>
                </div>
              </div>
              <p className="col-6" style={{ textAlign: "end" }}>
                قبل يوم
              </p>
            </div>
            <div className="card-body">
              <h5 className="card-title">سياره لانسر شارك للبيع</h5>
              <div className="row p-3" style={{ textAlign: "start" }}>
                <div className="col">
                  <i className="fa-solid fa-gauge-high"></i>
                  <span>عدد الكيلومترات</span>

                  <h6>{car.kilometers}</h6>
                </div>
                <div className="col">
                  <i className="fa-regular fa-calendar-days"></i>
                  <span>سنه التصنيع </span>

                  <h6>{car.manufactureDate}</h6>
                </div>
                <div className="col">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <span>الموقع</span>

                  <h6>{car.location}</h6>
                </div>
              </div>
              <div className="row ">
                <div className="col-6 ">
                  <div className="row m-1">
                    <div
                      className="col"
                      style={{
                        textAlign: "center",
                        color: "blue",
                        background: "rgb(206, 224, 248)",
                      }}
                    >
                      {car.price}
                    </div>
                    <div className="col">مستعمل</div>
                  </div>
                </div>
                <div className="col-6" style={{ textAlign: "end" }}>
                  <span className="fa-regular fa-heart" style={{ alignItems: "end" }}></span>
                  <span className="display">حفظ الاعلان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </>
  );
}
export default CarCart;

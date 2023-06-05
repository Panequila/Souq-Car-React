import'./view_nav.css'

function ViewNav(props) {
    

    return (
        <>
           <div className="card border-0 p-2 mb-3">
            <div className="row m-2">
              <div className="col-lg-6" style={{textAlign: 'start'}}>
                <div className="row">
                  <i className="fa-solid fa-car mb-1 col "></i>
                  <div
                    className="col-sm-4 col-12 mb-2  filter "
                    style={{textAlign:"center" }}
                  >
                    <div className='card w-100 p-1 ' style={{color:'blue', borderColor:'blue'}}>
                    <div className="row " style={{alignItems:'center'}}>
                      <i
                        className="fa-solid fa-filter col"
                        style={{textAlign:"end"}}
                      ></i>
                      <span className="col" style={{textAlign: 'start'}}>فلتره</span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" style={{textAlign:"end"}}>
                <span>ترتيب</span>
                <select
                  name="cars"
                  id="cars"
                  style={{width: "50%", backgroundColor: "rgb(206, 224, 248)"}}
                >
                  <option value="">من الأحدث للأقدم</option>
                  <option value="">من الأقدم للأحدث</option>
                  <option value="">السعر الأعلى أولا</option>
                  <option value="audi">السعر الأقل أولا</option>
                </select>

                <span className="display m-1">عرض</span>
                <i className="fa-solid fa-list display m-1"></i>
                <i className="fa-solid fa-table-cells display "></i>
              </div>
            </div>
          </div> 
        </>
    )
}
export default ViewNav
import'./view_nav.css'
import strings from '../../localization/localization';
function ViewNav(props) {
    

    return (
        <>
           <div className=" theme  border-0 p-2 mb-3 ">
            <div className="row m-2">
              <div className="col-lg-6" style={{alignSelf: "center"}}>
                <div className="row">
                  <i className="fa-solid fa-car mb-1 col text-primary "></i>
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
                      <span className="col" style={{textAlign: 'start'}}>{strings.filter}</span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 " style={{textAlign:"end"}}>
                <span>{strings.order}</span>
                <select
                className='m-1 p-1'
                  name="cars"
                  id="cars"
                  style={{width: "50%", backgroundColor: "rgb(206, 224, 248)"}}
                >
                  {strings.orderList.map((item) => (
                <option value="">{item}</option>
              ))}
                </select>

                <span className="display m-1">{strings.show}</span>
                <i className="fa-solid fa-list display m-1 p-1"></i>
                <i className="fa-solid fa-table-cells display "></i>
              </div>
            </div>
          </div> 
        </>
    )
}
export default ViewNav
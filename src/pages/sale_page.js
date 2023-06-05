import CarCart from '../Components/car_cart/car_cart'
import Filter from'../Components/filter/filter'
import ViewNav from '../Components/view_nav/view_nav'

function SalePage(props) {
    

    return (
        <>
          <div className="row bg-light">
            <Filter/>
            <div className="col-sm-12 col-lg-9">
                <ViewNav/>
                <CarCart/>
            </div>
            </div>  
        </>
    )
}
export default SalePage
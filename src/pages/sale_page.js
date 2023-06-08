import CarCart from '../Components/car_cart/car_cart'
import Filter from'../Components/filter/filter'
import ViewNav from '../Components/view_nav/view_nav'
import  SliderItems  from '../Components/slider/slider'
import SliderCart from '../Components/slider_card/slider_card.js'
function SalePage(props) {
    

    return (
        <>
      
          <div className="row bg-light">
          <SliderItems 
          cart = {
            <SliderCart/>
           
          }
          
          />
          
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
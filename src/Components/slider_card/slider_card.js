import Card from "react-bootstrap/Card";
import "./slider_cart.css";

const SliderCard = (props) => {
  const { car } = props;

  return (
    <>
      <Card id="theme">
        <Card.Img 
          variant="top"
          id="imagee"
          style={{ objectFit: "cover" }}
          src="https://souq.car/storage/posts/b4433133d4c34a31af2a4c7a905b1871_20230607021246_main_image.jpg"
        />
        
        <Card.Body >
          <Card.Title> {car.name} </Card.Title>
          <Card.Text >
            <span>
              <i class="fa-solid fa-eye"></i> 233
            </span>
            <span style={{ marginInline: "10px" }}>
              <i class="fa-solid fa-phone"></i> 3{" "}
            </span>
            <span style={{ marginRight:"", fontSize: "15px" }}>
              <i class="fa-solid fa-clock" style={{ marginLeft: "5px" }}></i> قبل 3 أشهر
            </span>
            
            <div className="d-flex justify-content-between mt-2">
            <span>
              <a href="">
                <i class="fa-regular fa-heart p-1" ></i>
              </a>
              حفظ إلاعلان
            </span>
            <span  >
              <i class="fa-sharp fa-solid fa-share-nodes p-1" ></i>مشاركة
            </span>
            </div>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </>
  );
};
export default SliderCard;

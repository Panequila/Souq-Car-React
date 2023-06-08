import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./car-card.css";
import Button from "react-bootstrap/Button";

// import { FaPlus } from "react-icons/fa6";

const CarCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="autoNews m-3 imgBackGroundOne">
            <p className="textCard">
              تبحث عن مشتري لسيارتك؟
              <Button variant="outline-warning">
                <span className="m-2">بيع سيارتي </span>
              </Button>
              {/* <Button variant="warning"> بيع سيارتي <FaPlus/> </Button>  */}
            </p>
          </Col>

          <Col className="autoNews m-3 imgBackGroundTwo">
            <p className="textCard">
              تريد معرفة أحدث اخبار السيارات في مصر؟
              <br></br>
              <Button variant="light">
                <span className="m-2">أخبار السيارات</span>
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="cardsRow mt-5">
          {" "}
          <span className="spanClass">
            {" "}
            <span> أحدث المقالات</span>
            <a> كل المقالات </a>
          </span>
        </Row>
        <Row className="mt-4">
          <Col className="articlesCard mx-2">
            <div className="parentImg">
              <img
                src="https://souq.car/storage/posts/1746a2a6be81483abfd69781b39c31d4_20230531095557_main_image.jpg"
                className="w-100 articlesCard-img"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>هل حقا الشركات تبيعنا سيارات رخيصة تفتقر لمعايير السلامة؟ </a>
            </p>
          </Col>
          <Col className="articlesCard mx-2">
            <div className="parentImg">
              <img
                src="https://souq.car/storage/posts/2307074b8bd74d0984b10b6b21916ce6_20230521075001_main_image.jpg"
                className="w-100 articlesCard-img"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>ما مدى صعوبة بناء سيارة من الصفر؟ تعرف على VF8 الفيتنامية </a>
            </p>
          </Col>
          <Col className="articlesCard mx-2">
            <div className="parentImg">
              <img
                src="https://souq.car/storage/posts/82a9723c03a5470facea77421719939c_20230515073124_main_image.jpg"
                className="w-100 articlesCard-img"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>ماذا تعرف عن أنواع ناقل الحركة Transmission؟ </a>
            </p>
          </Col>
          <Col className="articlesCard mx-2">
            <div className="parentImg">
              <img
                src="	https://souq.car/storage/posts/5fe986a71d28415eb4447dee47685f2b_20230507055116_main_image.jpg"
                className="w-100 articlesCard-img"
                alt="imgCard"
              ></img>
            </div>
            <p className="articlesCard-taxt">
              {" "}
              <a>مالكوري الجنوبي يحرز اللقب ويؤكد "لن نستبدل المفاتيح الصلبة بشاشات اللمس"</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CarCard;

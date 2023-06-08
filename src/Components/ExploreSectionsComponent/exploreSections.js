import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./exploreSections.css";
const ExploreSections = () => {
  return (
    <>
      <Container>
        <Row className="my-4">
          <span className="spanClass">استكشف الأقسام</span>
        </Row>
      </Container>
      <Container>
        <Row className="my-4">
          <Col className="expioreCard mx-3">
            <div className="exploreText">
              <img
                src="https://souq.car/storage/post_types/1.jpg"
                className="w-50"
                alt="cardImge"
              />
              <p className="mt-2"> بيع و شراء السيارات </p>
            </div>
          </Col>
          <Col className="expioreCard mx-3">
            <div className="exploreText">
              <img
                src="https://souq.car/storage/post_types/4.jpg"
                className="w-50"
                alt="cardImge"
              />
              <p className="mt-4"> تأجير السيارات   </p>
            </div>
          </Col>
          <Col className="expioreCard mx-3">
            <div className="exploreText">
              <img
                src="https://souq.car/storage/post_types/2.jpg"
                className="w-50"
                alt="cardImge"
              />
              <p className="mt-4"> مراكز الصيانة </p>
            </div>
          </Col>
          <Col className="expioreCard mx-3">
            <div className="exploreText">
              <img
                src="	https://souq.car/storage/post_types/3.jpg"
                className="w-50"
                alt="cardImge"
              />
              <p className="mt-4"> قطع الغيار </p>
            </div>
          </Col>
          <Col className="expioreCard mx-3">
            <div className="exploreText">
              <img
                src="	https://souq.car/storage/post_types/5.jpg"
                className="w-50"
                alt="cardImge"
              />
              <p className="mt-4"> ونش إنقاذ </p>
            </div>
          </Col>
          <Col className="expioreCard mx-3">
            <div className="exploreText">
              <img
                src="https://souq.car/storage/post_types/6.jpg"
                className="w-50"
                alt="cardImge"
              />
                
              <p className="mt-4"> اخبار السيارات </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ExploreSections;

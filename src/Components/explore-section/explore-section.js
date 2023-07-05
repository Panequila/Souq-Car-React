import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./explore-section.css";
import strings from "../../localization/localization";

const ExploreSection = () => {
  return (
    <>
      <div>
        <Row className="my-4">
          <span className="spanClass">{strings.exploreSections} </span>
        </Row>
      </div>
      <div>
        <Row className="my-4" xs={3} md={6}>
          <Col  >
          <div className="expioreCard m-2">
            <div className="exploreText ">
              <img src="https://souq.car/storage/post_types/1.jpg" className="w-50" alt="cardImge" />
              <p className="mt-2"> {strings.buyCars}</p>
            </div>
            </div>
          </Col>
          <Col >
          <div className="expioreCard m-2">
            <div className="exploreText ">
              <img src="https://souq.car/storage/post_types/4.jpg" className="w-50" alt="cardImge" />
              <p className="mt-4"> {strings.carRental} </p>
            </div>
            </div>
          </Col>
          <Col >
          <div className="expioreCard m-2">
            <div className="exploreText ">
              <img src="https://souq.car/storage/post_types/2.jpg" className="w-50" alt="cardImge" />
              <p className="mt-4">  {strings.maintenanceCenters} </p>
            </div>
            </div>
          </Col>
          <Col >
            <div className="expioreCard m-2">
            <div className="exploreText">
              <img src="	https://souq.car/storage/post_types/3.jpg" className="w-50" alt="cardImge" />
              <p className="mt-4"> {strings.spareParts }</p>
            </div>
            </div>
          </Col>
          <Col >
          <div className="expioreCard m-2">
            <div className="exploreText ">
              <img src="	https://souq.car/storage/post_types/5.jpg" className="w-50" alt="cardImge" />
              <p className="mt-4">  {strings.rescueWinch} </p>
            </div>
            </div>
          </Col>
          <Col >
          <div className="expioreCard m-2">
          <div className="exploreText ">
              <img src="https://souq.car/storage/post_types/6.jpg" className="w-50" alt="cardImge" />

              <p className="mt-4">  {strings.carNews} </p>
            </div>
          </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ExploreSection;

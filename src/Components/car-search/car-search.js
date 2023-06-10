import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./car-search.css";
import { Button, Form } from "react-bootstrap";
import Dropdown from "../drop-down/drop-down";



const CarSearch = () => {
  const options = [
    { key: "1", value: " تويوتا" },
    { key: "2", value: " هوينداي" },
    { key: "3", value: " مرسيدس" },
    { key: "4", value: " كيا" },
  ];
  
  const options2 = [
    { key: "5", value: " no resulte found" },
    { key: "6", value: " " },
    { key: '7', value: " " },
    { key: "8", value: " " },
  ];
  const options3 = [
    { key: "9", value: " القاهره" },
    { key: "10", value: " الجيزه" },
    { key: "11", value: " الاسكندريه" },
    { key: "12", value: " سوهاج" },
  ];
  
  const options4 = [
    { key: "13", value:"بيع و شراء السيارات "},
    { key: "14", value: "تاجير السيارات" },
  
  ];

  return (
    <>
      <Container className="parentContainer">
        <Row className="my-3 carouselRow">
          <Col>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item aria-hidden="false">
                <img
                  className="d-block w-100 carouselImge"
                  src="	https://souq.car/imgs/sliders/aftereid-2.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carouselImge"
                  src="	https://souq.car/imgs/sliders/aftereid-3.png"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mb-3 inputRow">
          <Col>
            <div className="titleOfInputs">
              <i class="fa-solid fa-car "></i> <p className="me-2">ابحث عن سيارة</p>{" "}
            </div>
            <div className=" divInput">
              <Row>
                <Col className="mt-3">
                  {" "}
                  <div className=" w-100 buttonClass">جديد</div>
                </Col>
                <Col className="mt-3">
                  <div className=" w-100 buttonClass">كسر زيرو</div>
                </Col>
                <Col className="mt-3">
                  <div className=" w-100 buttonClass">مستعمل</div>
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <div>
                    <Dropdown
                      options={options}
                      placeHolder="المصنع"
                    />
                  </div>
                </Col>
                <Col>
                  <Dropdown
                    options={options2}
                    placeHolder="موديل السياره"
                  />
                </Col>
                <Col>
                  <Dropdown
                    options={options3}
                    placeHolder="اختر المحافظة"
                  />
                </Col>
                <Col>
                  <Dropdown
                    options={options4}
                    placeHolder="بيع و شراء السيارات "
                  />
                </Col>
              </Row>
              <Row className="my-3 ">
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control type="search" placeholder="السعر الأعلى" className="me-2" aria-label="Search" />
                  </Form>
                </Col>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control type="search" placeholder="السعر الأدنى" className="me-2" aria-label="Search" />
                  </Form>
                </Col>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button>Search</Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CarSearch;

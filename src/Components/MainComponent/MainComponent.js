import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./MainComponent.css";
import { Button, Form } from "react-bootstrap";
import DropDownComponent from "../dropDownComponent/dropDownComponent";
const options = [
  { key: 1, value: " for text 1" },
  { key: 2, value: " for text 2" },
  { key: 3, value: " for text 3" },
  { key: 4, value: " for text 4" },
];
const options2=[
  {key: 5 ,value:" for text 1"},
  {key: 6 ,value:" for text 2"},
  {key: 7 ,value:" for text 3"},
  {key: 8 ,value:" for text 4"},
  
  ];
const MainComponent = () => {
  const [selectOptions, setSelectOptions] = useState("");
  const [selectOptions1, setSelectOptions1] = useState("");
  const [selectOptions2, setSelectOptions2] = useState("");
  const [selectOptions3, setSelectOptions3] = useState("");
  const [open, setOpen] = useState(false);
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
              <i class="fa-solid fa-car "></i>{" "}
              <p className="me-2">ابحث عن سيارة</p>{" "}
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
                    <DropDownComponent
                      options={options}
                      onChange={(item) => {
                        setSelectOptions3(item);
                      }}
                      selectedKay={selectOptions3}
                      placeholder
                      open={open}
                      setOpen={setOpen}
                    />
                  </div>
                </Col>
                <Col>
                <DropDownComponent
                      options={options}
                      onChange={(item) => {
                        setSelectOptions1(item);
                      }}
                      selectedKay={selectOptions1}
                      placeholder
                      open={open}
                      setOpen={setOpen}
                    />
                </Col>
                <Col>
                <DropDownComponent
                      options={options}
                      onChange={(item) => {
                        setSelectOptions2(item);
                      }}
                      selectedKay={selectOptions2}
                      placeholder
                      open={open}
                      setOpen={setOpen}
                    />
                </Col>
                <Col>
                <DropDownComponent
                      options={options2}
                      onChange={(item) => {
                        setSelectOptions(item);
                      }}
                      selectedKay={selectOptions}
                      placeholder
                      open={open}
                      setOpen={setOpen}
                    />
                </Col>
              </Row>
              <Row className="my-3">
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="السعر الأعلى"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Col>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="السعر الأدنى"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Col>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
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
export default MainComponent;

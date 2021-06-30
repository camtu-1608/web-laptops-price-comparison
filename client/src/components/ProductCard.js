import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import ImgCarousel from "./ImgCarousel";
import Spinner from "react-bootstrap/Spinner";
import Plotly from "plotly.js-basic-dist";
import { Scrollbars } from "rc-scrollbars";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);
var _ = require("lodash");
const ProductCard = (props, location) => {
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  const [loading, setLoading] = useState(true);
  const [laptop, setLaptop] = useState({});
  const [chartInfor, setChartInfor] = useState({});

  useEffect(() => {
    setLaptop(props.laptop);
    if (Object.keys(laptop).length !== 0) {
      setLoading(false);
    }

    fetch("https://cors-anywhere.herokuapp.com/https://1737c8e6feaa.ngrok.io/rating/" + props.id, {
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        setChartInfor(jsonResponse);
      });
  });

  console.log(chartInfor);

  // console.log(sneaker);
  const value = props.atribute.map((item) => {
    var valuee = item.value;
    return <li>{valuee}</li>;
  });
  const name = props.atribute.map((item) => {
    var namee = item.name;
    return <li>{namee}</li>;
  });
  // var listInfo=_.zipObject(props.InfoName,props.InfoText);

  const listGiaHTTime = props.giaHT.map((item) => {
    var listTime = [];
    listTime = item.DayUpdate;
    return listTime;
  });
  const listGiaHTPrice = props.giaHT.map((item) => {
    var listPrice = [];
    // listPrice=parseInt(item.Price.replace(/[.]/g,""));
    listPrice = item.price;
    return listPrice;
  });

  console.log(props.des.split("\n"));
  // const text = props.des.replace('\r\n', '');
  // console.log(text);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div class="procard">
        <nav class="header">
          <svg
            class="arrow"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            onClick={props.onHide}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
              stroke="#727272"
            />
          </svg>
          <div style={{ cursor: "pointer" }} onClick={props.onHide}>
            {" "}
            BACK TO ALL PRODUCTS{" "}
          </div>
          <svg
            class="heart"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            stroke="#727272"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
              stroke="#727272"
            />
          </svg>
        </nav>
        <div class="photo">
          {loading ? (
            <div class="spinner">
              <Spinner
                animation="border"
                variant="secondary"
                role="status"
              ></Spinner>
            </div>
          ) : (
            <ImgCarousel
              laptop={laptop}
              imageClass={props.imageClass}
              image={props.images}
            ></ImgCarousel>
          )}
        </div>

        <div class="chart">
          <Scrollbars style={{ width: 495, height: 300 }}>
            {props.des.split("\n").map((item) => (
              <span>
                {item}
                <br />
              </span>
            ))}
          </Scrollbars>
        </div>

        <div class="description">
          <h2>{props.name}</h2>
          {props.minPrice ? (
            <div>
              <div class="from-text">From</div>
              <div class="card-price">
                VND {props.minPrice}
                {/* <span class='on-text'> on</span>  */}
                {/* <img class='logo'src={props.logo}></img> */}
              </div>
              <Button
                onClick={() => {
                  window.open(props.minPriceLink, "_blank");
                }}
                class="buy-button"
                variant="secondary"
                size="lg"
              >
                Visit site
              </Button>
              <span class="dayUpdate-text">Day Update: {props.dayUpdate}</span>
            </div>
          ) : (
            <div>Not Available</div>
          )}

          <Tabs defaultActiveKey="description">
            <Tab class="about" eventKey="description" title="Chart">
              <div class="about">
                {/* {props.description} */}
                <Plot
                  data={[
                    {
                      x: listGiaHTTime,
                      y: listGiaHTPrice,
                      type: "scatter",
                      mode: "lines",
                      line: { color: "red" },
                    },
                  ]}
                  layout={
                    ({ width: 720, height: 450, title: "Biểu đồ" },
                    {
                      yaxis: {
                        //title: 'Percent',
                        //showline: false,
                        dtick: 100000,
                      },
                    })
                  }
                />
              </div>
            </Tab>
            <Tab class="pull-right" eventKey="details" title="Details">
              {props.des.split(`\r\n`).map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                );
              })}

              {/* <Scrollbars style={{ width: 756, height: 456 }}>
                    {Object.keys(listInfo).map(key => (
                      <p>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)} </strong>
                        {listInfo[key]}
                      </p>
                    ))}
                  </Scrollbars> */}
            </Tab>
            <Tab class="pull-right" eventKey="test" title="Test">
              <div class="row">
                <div class="col-lg-3 tag details left">{name}</div>
                <div class="col-lg-9 tag details right">{value}</div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Modal>
  );
};

export default ProductCard;

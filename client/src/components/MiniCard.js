import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import sneaksLogo from '../images/Sneaks_Logo.png'
import cellphoneLogo from '../images/cellphones.png'
import fadoLogo from '../images/fadonew.jpg'
import fptLogo from '../images/fptnew.jpg'
import nkLogo from '../images/nknew.jpg'
import pvLogo from '../images/pvnew.jpg'
import vtLogo from '../images/vtnew.jpg'
import tgddLogo from '../images/tgddnew.jpg'
import ProductCard from './ProductCard'
//var _ = require('lodash');
const myHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json"
});

const MiniCard = (props) => {
  const [showProductCard, setShowProductCard] = useState(false);
  const [newLaptop, setNewLaptop] = useState({});
  const [fetchLaptop, triggerFetchLaptop] = useState(false);
  var laptop = props.laptop;
  useEffect(() => {
    if (fetchLaptop) {
      setNewLaptop(props.laptop)
  }
  }, [fetchLaptop]
  );

  const showCard = () => {
    if (showProductCard == false) {
      triggerFetchLaptop(true);
      setShowProductCard(true);
    }
  }
  const hideCard = () => {
    if (showProductCard) {
      setShowProductCard(false);

    }
  }

  var logo 

  if (laptop.Web == 'Cellphones') {
    logo = cellphoneLogo;
  } else if (laptop.Web == 'Fado') {
    logo = fadoLogo;
  } else if (laptop.Web == 'FPT Shop') {
    logo = fptLogo;
  }else if (laptop.Web == 'Nguyễn Kim') {
    logo =nkLogo;
  }
  else if (laptop.Web == 'Phong Vũ') {
    logo = pvLogo;
  }
  else if (laptop.Web == 'Thế Giới Di Động') {
    logo = tgddLogo;
  }
  else if (laptop.Web == 'Viettel Store') {
    logo = vtLogo;
  }
  // if (laptop.image) {
  var imageClass = 'sneaker-image';
  var sneakerImage = 'https://cf.shopee.vn/file/'+laptop.image;
  var sneakerImages = 'https://cf.shopee.vn/file/'+laptop.images;
  // } else {
  //   var imageClass = 'default-image';
  //   var sneakerImage = sneaksLogo;
  // }

  //var tien = "Gia-Tien";
  var len= Object.keys(laptop.review_price).length;
  var price = laptop.review_price[len-1].price;
  var dayupdate=laptop.review_price[len-1].DayUpdate;



  const CardText = () => {
    if (price) {
      return (
         <Card.Text class='mini-card-text'>
           <div>From</div>
           <div class='mini-card-price'>{price} <span class='on-text'> on</span></div>
         </Card.Text>
    );
  }
  else{
    return(
      <Card.Text class='mini-card-text'>
        <div>Not Available</div>
      </Card.Text>

      );
    }

  }

  


    return(
      <a onClick={showCard} style={{ cursor: 'pointer' }} class='card-button'>
        <Card class='mini-card' border="light" tag="a" style={{ cursor: "pointer" }}
          style={{ width: '15rem', height: '20rem' }}>
          <Card.Img class={imageClass} variant="top" src={sneakerImage} />
          <Card.Body class='mini-card-body'>
            <Card.Title class='card-title'>{laptop.name}</Card.Title>
            <CardText />
          </Card.Body>
        </Card>

        {fetchLaptop && <ProductCard laptop={newLaptop} name={laptop.name} 
          // InfoName={laptop.InfoName} InfoText={laptop.InfoText}
           imageClass={imageClass} images={sneakerImages} minPriceLink={laptop.url} minPrice={price} giaHT={laptop.review_price} dayUpdate={dayupdate}
          show={showProductCard} onHide={hideCard}></ProductCard>
        }
      </a>
    );
}
export default MiniCard;
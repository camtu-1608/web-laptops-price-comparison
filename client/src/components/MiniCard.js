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
    //   fetch("https://sneakyapi.herokuapp.com/id/" + sneaker.styleID + '/prices', {
    //       headers: myHeaders,
    //     })
    //     .then(response => response.json())
    //     .then(jsonResponse => {
    //       setNewSneaker(jsonResponse);

    //     });
    // }
    //setNewSneaker(sneaker)
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

  // var minPrice;
  // var minPriceLink;
  var logo //= _.minBy(_.keys(sneaker.lowestResellPrice), function (o) {
  //   return sneaker.lowestResellPrice[o];
  //});

  if (laptop.Web == 'Cellphones') {
    logo = cellphoneLogo;
    // minPrice = sneaker.lowestResellPrice.stockX;
    // minPriceLink = sneaker.resellLinks.stockX;

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
  if (laptop.Img) {
    var imageClass = 'sneaker-image';
    var sneakerImage = laptop.Img[0];
  } else {
    var imageClass = 'default-image';
    var sneakerImage = sneaksLogo;
  }

  //var tien = "Gia-Tien";
  var len= Object.keys(laptop.GiaHT).length;
  var price = laptop.GiaHT[len-1].Price;



  const CardText = () => {
    if (price) {
      return (
         <Card.Text class='mini-card-text'>
           <div>From</div>
           <div class='mini-card-price'>{price} <span class='on-text'> on</span><img class='mini-logo'
               src={logo}></img></div>
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
            <Card.Title class='card-title'>{laptop.Ten}</Card.Title>
            <CardText />
          </Card.Body>
        </Card>

        {fetchLaptop && <ProductCard laptop={newLaptop} name={laptop.Ten} InfoName={laptop.InfoName} InfoText={laptop.InfoText}
           imageClass={imageClass} image={sneakerImage} minPriceLink={laptop.Link} minPrice={price} giaHT={laptop.GiaHT}
          logo={logo}show={showProductCard} onHide={hideCard}></ProductCard>
        }
      </a>
    );
}
export default MiniCard;
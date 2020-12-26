import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
// import stockXLogo from '../images/stockx.png'
// import goatLogo from '../images/goat.png'
// import flightClubLogo from '../images/flightclub.png'
// import stadiumGoodsLogo from '../images/stadiumgoods.png'
import sneaksLogo from '../images/Sneaks_Logo.png'
import cellphoneLogo from '../images/cellphones.png'
import fadoLogo from '../images/fado.png'
import fptLogo from '../images/fpt-shop.png'
import nkLogo from '../images/nguyen-kim.png'
import pvLogo from '../images/phongvu.png'
import vtLogo from '../images/viettelstore.png'
import tgddLogo from '../images/thegioididong.png'
import ProductCard from './ProductCard'
var _ = require('lodash');
const myHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json"
});

const MiniCard = (props) => {
  const [showProductCard, setShowProductCard] = useState(false);
  const [newSneaker, setNewSneaker] = useState({});
  const [fetchSneaker, triggerFetchSneaker] = useState(false);
  var sneaker = props.sneaker;
  useEffect(() => {
    if (fetchSneaker) {
      setNewSneaker(props.sneaker)
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
  }, [fetchSneaker]
  );

  const showCard = () => {
    if (showProductCard == false) {
      triggerFetchSneaker(true);
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

  if (sneaker.Web == 'Cellphones') {
    logo = cellphoneLogo;
    // minPrice = sneaker.lowestResellPrice.stockX;
    // minPriceLink = sneaker.resellLinks.stockX;

  } else if (sneaker.Web == 'Fado') {
    logo = fadoLogo;
  } else if (sneaker.Web == 'FPT Shop') {
    logo = fptLogo;
  }else if (sneaker.Web == 'Nguyễn Kim') {
    logo =nkLogo;
  }
  else if (sneaker.Web == 'Phong Vũ') {
    logo = pvLogo;
  }
  else if (sneaker.Web == 'Thế Giới Di Động') {
    logo = tgddLogo;
  }
  else if (sneaker.Web == 'Viettelstore') {
    logo = vtLogo;
  }
  if (sneaker.Img) {
    var imageClass = 'sneaker-image';
    var sneakerImage = sneaker.Img[0];
  } else {
    var imageClass = 'default-image';
    var sneakerImage = sneaksLogo;
  }

  //var tien = "Gia-Tien";
  var len= Object.keys(sneaker.GiaHT).length;
  var price = sneaker.GiaHT[len-1].Price;


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
            <Card.Title class='card-title'>{sneaker.Ten}</Card.Title>
            <CardText />
          </Card.Body>
        </Card>

        {fetchSneaker && <ProductCard sneaker={newSneaker} name={sneaker.Ten} InfoName={sneaker.InfoName} InfoText={sneaker.InfoText}
           imageClass={imageClass} image={sneakerImage} minPriceLink={sneaker.Link} minPrice={price}
          logo={logo}show={showProductCard} onHide={hideCard}></ProductCard>
        }
      </a>
    );
}
export default MiniCard;
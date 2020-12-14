import React from 'react';
import Table from 'react-bootstrap/Table'
import stockXLogo from '../images/stockx.png'
import goatLogo from '../images/goat.png'
import flightClubLogo from '../images/flightclub.png'
import stadiumGoodsLogo from '../images/stadiumgoods.png'

const PriceTable = (props) =>{
    const sizes = new Set([ '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5']);
    var shoeSizes;
    let sneaker = props.sneaker;
    var resellPrices = props.sneaker.resellPrices;

    for (var size in resellPrices?.stockX) {
        sizes.add(size);
    }
    for (var size in resellPrices?.flightClub) {
        sizes.add(size);
    }
    for (var size in resellPrices?.goat) {
        sizes.add(size);
    }
    for (var size in resellPrices?.stadiumGoods) {
        sizes.add(size);
    }
    shoeSizes = Array.from(sizes).sort(function (a, b) {
        return a - b;
    });
    console.log(sneaker)
    var isMinPrice = (price, size) => {
        var prices = [resellPrices?.stockX&&resellPrices?.stockX[size], resellPrices?.flightClub&&resellPrices?.flightClub[size], resellPrices?.goat&&resellPrices?.goat[size], resellPrices?.stadiumGoods&&resellPrices?.stadiumGoods[size]]
        prices = prices.filter(item => item);
        if (price == Math.min.apply(Math, prices)) {
            console.log('fsdklajf')
            return 'min-price';
        }
    }

    return(
<div class='table-card scroll-bar'>
</div>
    )
}

export default PriceTable
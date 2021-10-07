const utils = require('web3-utils');

function generatePricesArray() {
    const minPriceForSec = utils.toBN(5000000000000000); // magic number
    const charLen = 9;
    
    var data = [];
    data.push(minPriceForSec)
    for(var i=0; i < charLen; i++) {
        data.push(data[i].mul(utils.toBN(2)));
    }
    return data.reverse();
}

var ethPrice = utils.toBN(100000000000000);
var duration = utils.toBN("200000000");

console.log(generatePricesArray().map(e=>utils.fromWei(e.mul(duration.mul(utils.toBN("100000000")).div(ethPrice)).toString())))
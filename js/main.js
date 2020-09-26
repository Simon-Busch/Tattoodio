const DOMstrings = {
    radioBlackAndGrey: '.radio__blackAndGrey',
    radioColor: '.radio__colors',
    radioShades: '.radio__shades',
    radioTraditionnal: '.radio__traditionnal',
    inputHeight: '.popup__input--height',
    inputWidth: '.popup__input--width',
    value: '.popup__value',
    button: '.button__popup'
};


//Calculation controller
const minPrice = 4.5;
const needleCost = 20;
const otherCosts = 25; 


/*
console.log(`the value of radio button for black and grey is ${blackAndGrey}`);
console.log(`the value of radio button for color is ${color}`);
console.log(`the value of radio button for shades is ${shades}`);
console.log(`the value of radio button for traditionnal is ${traditionnal}`);
*/

function getHeight() {
    let height = parseFloat(document.querySelector(DOMstrings.inputHeight).value);
    return height;
}

function getWidth() {
    let width = parseFloat(document.querySelector(DOMstrings.inputWidth).value);
    return width;
}

function getRadio () {

    if (document.querySelector(DOMstrings.radioBlackAndGrey).checked) {
        let blackAndGrey = 1;
        return blackAndGrey;
        //console.log(blackAndGrey);
        
    } else if (document.querySelector(DOMstrings.radioColor).checked) {
        let color = 1.5;
        return color;
        //console.log(color)
    } else if (document.querySelector(DOMstrings.radioShades).checked) {
        let shades = 1.5;
        return shades;
        //console.log(shades);
    } else if (document.querySelector(DOMstrings.radioTraditionnal).checked) {
        let traditionnal = 2;
        return traditionnal;
        //console.log(traditionnal);
    }
}


function calcPrice () {
    let height = (minPrice*1.05) *  (getHeight())/10;
    //console.log(height);
    let width = (minPrice*1.05) * (getWidth()) /10;
    //console.log(width);
    let radio = getRadio();

    let finalPrice = Math.floor((height*width)*(minPrice*radio) + needleCost + otherCosts);
    //console.log(finalPrice);
    return finalPrice;
}


// function clearInput() {
//     document.querySelector('.popup__price--heading').parentElement.removeChild;
//     console.log("test");
// }


function UIupdate() {
    
    let element = DOMstrings.value;
    let newPrice = calcPrice();
    let newHtml = `<span class="popup__value">${newPrice}$</span>`

    document.querySelector('.popup__price--heading').insertAdjacentHTML('afterend',newHtml);
}

let controller = (function () {
    document.querySelector('.btn--UI').addEventListener('click', UIupdate);
    
    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            //console.log('banane');
            UIupdate();
        }
    })
})();

/*
let setupEventListener =  function () {
    document.querySelector(DOMstrings.button).addEventListener('click', UIupdate);
}
*/
/*
class Calc {

    heightPrice (height){
        const price = (minPrice*1.05)*(height/10);
        console.log(price);

    };  

    widthPrice (width){
        const price = (minPrice * 1.05) *(width/10);
        return price;
    }; 

    dimension (h,w) {
        h = heightPrice(h);
        w = widthPrice(w);
        const dimensionPrice = h * w;
        return dimensionPrice;
    };

    finalPrice (h,w) {
    
        //console.log(dimension(h,w));
    
        let price;
    
        if (blackAndGrey) {
            price = (minPrice * (dimension(h,w))) + needleCost + otherCosts;
            console.log(price);
        } else if (color || shades) {
            price = (minPrice * (dimension(h,w)) * 1.5) + needleCost + otherCosts;
            console.log(price);
        } else if (traditionnal) {
            price = (minPrice * (dimension(h,w)) * 2) + needleCost + otherCosts;
            console.log(price);
        }
    
    };
};
*/



const DOMstrings = {
    radioBlackAndGrey: '.radio__blackAndGrey',
    radioColor: '.radio__colors',
    radioShades: '.radio__shades',
    radioTraditionnal: '.radio__traditionnal',
    inputHeight: '.popup__input--height',
    inputWidth: '.popup__input--width',
    price: '.popup__value',
    button: '.button__popup'
};


//Calculation controller
const minPrice = 4.5;
const needleCost = 20;
const otherCosts = 25; 


function getHeight() {
    let height = parseFloat(document.querySelector(DOMstrings.inputHeight).value);
    return height;
};

function getWidth() {
    let width = parseFloat(document.querySelector(DOMstrings.inputWidth).value);
    return width;
};

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
};


function calcPrice () {
    let height = (minPrice*1.05) *  (getHeight())/10;
    //console.log(height);
    let width = (minPrice*1.05) * (getWidth()) /10;
    //console.log(width);
    let radio = getRadio();

    let finalPrice = Math.floor((height*width)*(minPrice*radio) + needleCost + otherCosts);
    //console.log(finalPrice);
    return finalPrice;
};

function clearFields () {
    var fields, fieldsArr;
    fields = document.querySelectorAll(DOMstrings.inputHeight + ', ' + DOMstrings.inputWidth);
    

    fieldsArr = Array.prototype.slice.call(fields);

    fieldsArr.forEach((current,index,array) => {
        current.value="";
    })
};

function clearPrice () {
    //document.querySelector(DOMstrings.price).parentElement.removeChild(DOMstrings.price);
    var priceField = document.querySelector('.popup__price');
    priceField.removeChild(priceField.lastElementChild);
    console.log('banana');
};

function UIupdate() {
    
    let element = DOMstrings.price;
    let newPrice = calcPrice();
    let newHtml = `<span class="popup__value">${newPrice}$</span>`

    document.querySelector('.popup__price--heading').insertAdjacentHTML('afterend',newHtml);

    clearFields();
    
};

let controller = (function () {


    document.querySelector('.btn--UI').addEventListener('click', UIupdate);

    


    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            //console.log('banane');
            UIupdate();
        }
    })

})();



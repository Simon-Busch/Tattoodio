const DOMstrings = {
    radioBlackAndGrey: '.radio__blackAndGrey',
    radioColor: '.radio__colors',
    radioShades: '.radio__shades',
    radioTraditionnal: '.radio__traditionnal',
    inputHeight: '.popup__input--height',
    inputWidth: '.popup__input--width',
    price: '.popup__value',
    button: '.button__popup',
    priceHeading:'.popup__price--heading'
};

let minPrice, needleCost, otherCosts;
minPrice = 4.5;
needleCost = 20;
otherCosts = 25; 


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
        
    } else if (document.querySelector(DOMstrings.radioColor).checked) {
        let color = 1.5;
        return color;

    } else if (document.querySelector(DOMstrings.radioShades).checked) {
        let shades = 1.5;
        return shades;

    } else if (document.querySelector(DOMstrings.radioTraditionnal).checked) {
        let traditionnal = 2;
        return traditionnal;
    }
};


function calcPrice () {
    let height = (minPrice*1.05) *  (getHeight())/10;
    let width = (minPrice*1.05) * (getWidth()) /10;
    let radio = getRadio();

    let finalPrice = Math.floor((height*width)*(minPrice*radio) + needleCost + otherCosts);
    return finalPrice;
};

function clearFields () {
    var fields, fieldsArr;
    fields = document.querySelectorAll(DOMstrings.inputHeight + ', ' + DOMstrings.inputWidth);

    fieldsArr = Array.prototype.slice.call(fields);

    fieldsArr.forEach((current) => {
        current.value="";
    });

};

function UIupdate() {
    
    let html = DOMstrings.price;
    let newPrice = calcPrice();

    if (newPrice>0) {
        document.querySelector(DOMstrings.price).innerHTML = `<span class="popup__value">${newPrice}$</span>`;
        clearFields();
    }

};

let controller = (function () {

    document.querySelector('.btn--UI').addEventListener('click', UIupdate);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            UIupdate();
        }
    })

})();



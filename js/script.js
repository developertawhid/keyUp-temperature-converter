const tempImage = document.querySelector('.tempImage img');
const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
let editValue = 'celsius';


const result = () => {
    if(editValue === 'celsius') {
        fahrenheit.value = Math.floor((+celsius.value * 9/5) + 32);
        kelvin.value = Math.floor(+celsius.value + 273.15);
    }else if(editValue === 'fahrenheit') {
        celsius.value = Math.floor((+fahrenheit.value - 32) * 5/9);
        kelvin.value = Math.floor((+fahrenheit.value - 32) * 5/9 + 273.15);
    }else if(editValue === 'kelvin') {
        celsius.value = Math.floor(+kelvin.value - 273.15);
        fahrenheit.value = Math.floor((+kelvin.value - 273.15) * 9/5 + 32);
    }

    let temp = celsius.value;
    if(temp <= -30){
         tempImage.src = 'https://images.unsplash.com/photo-1584200862681-040f5bdc5984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80';
    }else if(temp > -30 && temp <= -10){
        tempImage.src = 'https://images.unsplash.com/photo-1515008736322-38eadfce9ece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80';
    }else if(temp > -10 && temp <= 0){
        tempImage.src = 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80';
    }else if(temp > 0 && temp <= 15){
        tempImage.src = 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > 15 && temp <= 28){
        tempImage.src = 'https://images.unsplash.com/photo-1597198899201-1903257fb9a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > -28 && temp <= 35){
        tempImage.src = 'https://images.unsplash.com/photo-1556016069-0a64d35719db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';
    }else if(temp > 35 && temp <= 40){
        tempImage.src = 'https://images.unsplash.com/photo-1521223619409-8085d2607891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';
    }else if(temp > 40 && temp <= 100){
        tempImage.src = 'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > 100 && temp <= 500){
        tempImage.src = 'https://images.unsplash.com/photo-1502030818212-8601501607a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    }else if(temp > 500 && temp <= 1000){
        tempImage.src = 'https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
    }else if(temp > 1000) {
        tempImage.src = 'https://bengali.oneindia.com/img/2016/05/04-1462338456-mercury-transit-in-virgo.jpg';
    }else {
        tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
    }
};

(function(){
    celsius.addEventListener('input', ()=> {

        editValue = 'celsius';
        result();

        if(!celsius.value) {
            fahrenheit.value = 0;
            kelvin.value = 0;
            tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
        }else if(fahrenheit.value === 'NaN' ) {
            fahrenheit.value = 0;
            kelvin.value = 0;
            tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
        }
    })
    fahrenheit.addEventListener('input', ()=> {

        editValue = 'fahrenheit';
        result();

        if(!celsius.value) {
            celsius.value = 0;
            kelvin.value = 0;
            tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
        }else if(celsius.value === 'NaN' ) {
            kelvin.value = 0;
            celsius.value = 0;
            tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
        }
    })
    kelvin.addEventListener('input', ()=> {

        editValue = 'kelvin';
        result();

        if(!celsius.value) {
            fahrenheit.value = 0;
            celsius.value = 0;
            tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
        }else if(fahrenheit.value === 'NaN' ) {
            fahrenheit.value = 0;
            celsius.value = 0;
            tempImage.src = 'https://images.unsplash.com/photo-1591644214288-f7758cea7d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80';
        }
    })
})();








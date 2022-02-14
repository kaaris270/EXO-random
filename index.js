let ville = "Lyon";
let ajax = new XMLHttpRequest;
ajax.responseType = "json";

ajax.addEventListener("readystatechange", function(){
    if(ajax.readyState === ajax.DONE){
        monnaie.innerHTML = ajax.response.last;
        console.log(ajax.response.last);
    }
})
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
console.log(url);
let e = document.querySelector(".e");
ajax.open("GET", url);
ajax.send()
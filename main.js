let _hourstest = document.querySelector('.saat');
let _minutest = document.querySelector('.minute');
let _secontest = document.querySelector('.second');

let times = setInterval(()=>{
    let newtime = new Date()
    _hourstest.innerHTML = newtime.getHours();
    _minutest.innerHTML = newtime.getMinutes();
    _secontest.innerHTML = newtime.getSeconds();
    console.log('aktif')
},1000)
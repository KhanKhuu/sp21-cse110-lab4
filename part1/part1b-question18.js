function getTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

window.setInterval(getTime, 1000);
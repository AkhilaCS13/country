//create an object for the class


function gettime(){
const time=new Date()
console.log(time);
 
const hour = time.getHours()
console.log(hour);

const min = time.getMinutes()
console.log(min);

const sec = time.getSeconds()
console.log(sec);

result.innerHTML = `${hour}:${min}:${sec} ${hour>12?`PM`:`AM`}`

setTimeout(() => {
    gettime()
}, 1000);
}

gettime()
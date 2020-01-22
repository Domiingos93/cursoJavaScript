var data = new Date();
console.log(typeof data);
console.log(data);

var dataString = new Date("2017-10-24");
console.log(dataString);

console.log(dataString.getFullYear());
console.log(dataString.getMonth()+1);
console.log(dataString.getDay());
console.log(dataString.getDate());
console.log(data.getHours());
console.log(data.getMinutes());

var dataParam = new Date(2018,04,17);
console.log(dataParam);
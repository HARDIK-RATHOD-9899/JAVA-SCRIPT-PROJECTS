var qty=10;
var rate=100;
var gst=18;
var dis=10;

//qty+rate = total amount
var at=qty*rate;

console.log(at);
//

// for gst
var gs=at*gst/100;

console.log(gs);
//

//grand total
var tt=gs+at;

console.log(tt);

//discount
var d=tt*10/100;

console.log(d);


//final result
var gtt=tt-d;

console.log(gtt);
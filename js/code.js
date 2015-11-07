//var myString = document.getElementsByTagName("p");

var myExp = /t/gim;
var test = "This is a test message."

var result = myExp.exec(test);

result.forEach(function(){
    console.log(arguments[0]);
});

// var matches = /hello \S+/i.exec('This is a Hello world!');
// console.log(matches);

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
doSomething();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var BackgroundColor = Color.Red;
console.log(BackgroundColor);
var message;
message = "abc";
var endsWithC = message.endsWith("c");
var log = function (message) {
    console.log("Hello Log " + message);
};
var doLog = function (message) {
    console.log("Hello " + message);
};

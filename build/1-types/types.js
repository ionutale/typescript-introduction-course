"use strict";
// primitives
const age = 0;
const isMarried = true;
const username = 'ion';
// union types
// userId can be a number in case of an auto incremental id
// or a string in case of uuid
let userId;
userId = 1234;
userId = "8osh7fda87sd8fa0sd87a";
const mapPin = { latitude: 1.1423123, longitude: 1.3413241 };
// enum types
var allowedColors;
(function (allowedColors) {
    allowedColors[allowedColors["RED"] = 0] = "RED";
    allowedColors[allowedColors["YELLOW"] = 1] = "YELLOW";
    allowedColors[allowedColors["BLUE"] = 2] = "BLUE";
})(allowedColors || (allowedColors = {}));
console.log(allowedColors);
const userDario = {
    name: "dario",
    age: 27,
    isMarried: false,
    hasAJob: true,
};
// literal types
const email = "iutale@florence-consulting.it";
// why is usefull the literal type?
const alignment = "center";
// no value primitives
const isSunny = undefined;
const isRaining = null;

let myArray = [
"antiquewhite",
"blanchedalmond",
"cornflowerblue",
"darkgoldenrod",
"darkolivegreen",
"darkslategray",
"lightgoldenrodyellow",
"lightslategray",
"mediumaquamarine",
"mediumslateblue",
"mediumspringgreen",
"mediumturquoise",
"mediumvioletred",
];

function count(array) {
    let count = myArray.forEach(e => console.log(e.length));
    console.log("count", count);
    return count;

}

count(myArray);
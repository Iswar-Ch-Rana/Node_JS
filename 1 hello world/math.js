/*** ***/

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}



// module.exports = add;
// module.exports = sub; // This will override the 1st export

/*** Insted of above use javascript Object ***/

module.exports = { add,sub } ;

/*** similarly we can directly exports a function 

exports.add = (a,b) => a+b ;
exports.sub = (a,b) => a-b ;

***/
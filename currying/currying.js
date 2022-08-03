// doing bind method

let multiply = function(x, y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind();
multiplyByTwo(3,2);

let multiplyByThird = multiply.bind(this,3);
multiplyByThird(5);


// closure method

let currAdd = function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(currAdd(2)(3)(4));
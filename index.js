const obj1 = {
    age: 19,
    city: 'NN',
}

// const obj2 = Object.assign({}, obj1);
const obj2 = {...obj1};

obj2.age = 22;
console.log(obj1, obj2);
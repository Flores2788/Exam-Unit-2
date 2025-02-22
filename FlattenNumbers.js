function flattenNumbers(arr){
    let result = [];

    arr.forEach(Element => {
        if(Array.isArray(Element)){
            result = result.concat(flattenNumbers(Element));
} else {
    result.push(Element);
}
});
return result;
}

const flattenedArray = flattenNumbers(arrays.json);
console.log(flattenedArray);
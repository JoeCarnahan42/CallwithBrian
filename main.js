function largestProduct(array) {
    let prodArray = []
    let largestProd = 0
    for (let i = 0; i < array.length; i++) {
        prodArray.push(array[i] *= array[i + 1])
    }
    prodArray.forEach((element) => {
        if (element > largestProd) {
            largestProd = element
        }
    })
    return largestProd
}    

console.log(largestProduct([1, 3, 5, 8]))
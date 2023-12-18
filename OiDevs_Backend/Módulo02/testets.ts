const num = [1,2,3,4,5,6]

const reducedNum = num.reduce((anterior, atual, index, array) => {
    console.log("anterior: " + anterior)
    console.log("atual:" + atual)
    console.log("index:" + index)
    console.log("array:" + array)
    console.log("======================")
    return anterior + atual
})

console.log(reducedNum)
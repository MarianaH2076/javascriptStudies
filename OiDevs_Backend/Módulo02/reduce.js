const numeros = [1,2,3,4,5,6]

const numerosComReduce = numeros.reduce((anterior, atual, index, array) => {
    console.log("anterior: " + anterior)
    console.log('----')
    console.log("atual:" + atual)
    console.log('----')
    console.log("index:" + index)
    console.log("======================")
    return anterior + atual
})

console.log(numerosComReduce)

/*
anterior: 1
----
atual:2
----
index:1
======================
anterior: 3
----
atual:3
----
index:2
======================
anterior: 6
----
atual:4
----
index:3
======================
anterior: 10
----
atual:5
----
index:4
======================
anterior: 15
----
atual:6
----
index:5
======================
21
*/
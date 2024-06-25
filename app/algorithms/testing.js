let array = [1, 2, 3]

function insert(array) {
    array[3] = array[2]
    return (array)
}

console.log(insert(array))
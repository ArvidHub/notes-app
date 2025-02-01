const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// Destructuring
const { label: productLabel, stock, rating = 5 } = product

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
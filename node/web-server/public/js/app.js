
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const displayForecast = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    displayForecast.textContent = 'Loading...'
    const adress = search.value

    fetch(`http://localhost:3000/weather?adress=${adress}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                displayForecast.textContent = data.error
            } else {
                displayForecast.textContent = `${data.location}: ${data.forecast}`
            }
        })
    })
})
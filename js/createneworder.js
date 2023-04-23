function createOrder() {
    sendPostRequest('https://autookayauto-okay-backend-production.up.railway.app/createOrder', { 
        customerName: document.getElementById("fioInput").value,
        customerPhone: document.getElementById("phoneInput").value,
        carName: document.getElementById("autoInput").value,
        carVinNumber: document.getElementById("vinInput").value,
        carMileage: document.getElementById("mileageInput").value,
        problem: document.getElementById("problemInput").value,
        price: document.getElementById("priceInput").value
    })
        .then(data => {
            alert('Заказ создан')
            window.location.href = 'main.html'
        })
        .catch(error => console.log(error))
}

function sendPostRequest(url, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('POST', url)

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.responseType = 'json'
        
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        
        console.log(JSON.stringify(body))
        xhr.send(JSON.stringify(body))
    })
}
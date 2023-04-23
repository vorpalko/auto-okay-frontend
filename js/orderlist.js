const requestURL = 'https://autookayauto-okay-backend-production.up.railway.app/orderList'

function sendGetRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', url)
        
        xhr.responseType = 'json'
        
        xhr.onload = () => {
            resolve(xhr.response)
            //console.log(JSON.parse(xhr.response))
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        
        xhr.send()
    })
}

sendGetRequest('https://autookayauto-okay-backend-production.up.railway.app/orderList')
    .then(data => console.log(data))
    .catch(error => console.log(error))


var myArray = [
    {'name':'someName', 'age': '30', 'birthdate': '11/20/2212'},
    {'name':'someName2', 'age': '30', 'birthdate': '11/20/2212'},
    {'name':'someName3', 'age': '30', 'birthdate': '11/20/2212'}
]
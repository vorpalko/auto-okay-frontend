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

function sendPostRequest(url, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('POST', url)
        
        xhr.responseType = 'json'
        
        xhr.onload = () => {
            resolve(xhr.response)
            //console.log(JSON.parse(xhr.response))
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        
        xhr.send(JSON.stringify(body))
    })
}
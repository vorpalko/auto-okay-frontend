function login() {
    sendPostRequest('https://autookayauto-okay-backend-production.up.railway.app/login', { 
        login: document.getElementById("login").value,
        password: document.getElementById("password").value
    })
        .then(data => {
            if (JSON.stringify(data) === '{"success":true}') {
                window.location.href = 'main.html'
            } else {
                alert('Некорректный логин или пароль')
            }
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
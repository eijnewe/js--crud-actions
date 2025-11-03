const BASE_URL = 'https://ca47d565dabb0dd6c0a5.free.beeceptor.com/api'

async function getData() {
    try {
        const response = await fetch(`${BASE_URL}/users`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result)
    } catch (error) {
        console.error(error.message)
    }
}

getData()

async function createUser(username, email, password) {
    return fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
    }).then((res) => res.json())
}

// createUser('Bert', 'bert@email.com', 'test1234').then((data) =>
//     console.log(data)
// )

async function updateUser({ id, username, email, password }) {
    return fetch(`${BASE_URL}/users${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ username, email, password }),
    }).then((res) => res.json())
}
updateUser({
    id: '6dbfb8029334ca6d682d',
    username: 'Bert1',
    email: 'bert1@email.com',
}).then((data) => console.log(data))

async function deleteUser({ id }) {
    return fetch(`${BASE_URL}/users${id}`, {
        method: 'DELETE',
    }).then((res) => res.json())
}

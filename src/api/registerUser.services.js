import { api } from './api'

const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/users`

export const registerUser = async (user) => {
  try {
    const response = await fetch(SERVICE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    return response.json()
  } catch {
    throw new Error('could not register user')
  }
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    async function fetchUser() {
      const data = await (fetch('/user').then(res => res.json()));
      setUser(data);
    }
    fetchUser();
  }, [])

  return (
    <div>{user ? JSON.stringify(user) : 'No user'}</div>
  )
}

export default App

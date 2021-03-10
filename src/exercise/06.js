// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

    function handleSubmit(event){
        event.preventDefault()//Previne o recarregamento do Formulário
        // const username = document.querySelector('#username').value
        const username = usernameEl.current.value
        onSubmitUsername(username)
    }

    const usernameEl = React.useRef()
    
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Login:</label>
        <input ref={usernameEl} id="username" type="text"/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}



function App() {
  const onSubmitUsername = username => alert(`Você registrou o nome de usuário: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
export default App

import { useState, useContext } from 'react';
import { mdiAccountConvertOutline, mdiAlertOutline } from '@mdi/js';
import AppContext from '../context/AppContext';
import background from '../assets/background.jpg';
import Icon from '@mdi/react';
import Button from '../components/shared/Button';


function LoginPage() {
  // Load in global context/store
  const { user, updateUser } = useContext(AppContext)
  // Set local variables
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [enableLogin, setEnableLogin] = useState(false)
  const [error, setError] = useState('')

  // Handle login info update events
  const updateUsername = (event) => {
    const newUsername = event.currentTarget.value
    setUsername(event.currentTarget.value)
    setEnableLogin(Boolean(newUsername.length && password.length))
  }

  const updatePassword = (event) => {
    const newPassword = event.currentTarget.value
    setPassword(newPassword)
    setEnableLogin(Boolean(username.length && newPassword.length))
  }

  // Handle the login event
  const handleLogin = (event) => {
    event.preventDefault()
    // Send credentials to backend API for verification and token

    if (1) {
      updateUser({ roleId: 4, token: '1234567890' })
      setPassword('')
      setUsername('')
    } else {
      setError('Your username or password are incorrect. Please try again')
    }

  }


  return (
    <div className='container fill-width mx-0 py-0'>
      <div className='row fill-height'>
        <div className='col-12 col-lg-4 col-xl-3 p-5 mt-5 d-flex justify-content-center'>
          <div className='col text-center' style={{ maxWidth: 400 }}>
            <form onSubmit={ handleLogin }>
              <Icon path={ mdiAccountConvertOutline } color='#EE2722' size={ 4 }/>
              <h1 className="mt-4">Workforce Certify</h1>
              <p className="text-body">Welcome back! Please enter your details.</p>
              <input onChange={ updateUsername } className='my-3 fill-width' type='text' placeholder='Username' required value={ username }/>
              <input onChange={ updatePassword } className='fill-width mb-5' type='password' placeholder='Password' required value={ password }/>
              { error &&
                <div className='errorMessage mb-5'>
                  <Icon path={ mdiAlertOutline } color='#EE2722' size={ 1 } className='m-1'/>{ error }
                </div>
              }
              <Button version='accent' type='submit' isDisabled={ !enableLogin }>Login</Button>
            </form>
          </div>
        </div>
        <div className='col-md-7 col-lg-8 col-xl-9 p-0 d-none d-lg-block'>
          <img src={ background } alt='ADP Canada Co' className='backgroundImg'/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

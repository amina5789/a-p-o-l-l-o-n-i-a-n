import { signIn } from './../../../../api/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './SignIn.module.scss'
import { ROUTER_PATHS } from '../../../../routes/routesPath'
import { useState } from 'react'

export function SignIn({ setHasAccount }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null) 
  const [loading, setLoading] = useState(false) 

  async function handleSubmit(event) {
    event.preventDefault() 

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) {
      setError('All fields are required')
      return
    }

    setLoading(true) 

    try {
      const result = await dispatch(signIn({ email, password })).unwrap() 
console.log(result);
      if (result?.token) {
        localStorage.setItem('user', JSON.stringify(result.user))
        navigate(ROUTER_PATHS.Profile) 
      } else {
        setError('Authorization error') 
      }
    } catch (err) {
      setError('Login error') 
    }

    setLoading(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}> 
      <h1 className={styles.login}>Login </h1>
      <input className={styles.inputName} type="email" name="email" placeholder="email" />
      <input className={styles.inputName} type="password" name="password" placeholder="password" />
      {error && <p className={styles.error}>{error}</p>} 

      <button variant="outlined" className={styles.save} type="button" onClick={() => setHasAccount(false)}>
No Account? Register
      </button>

      <button className={styles.save} disabled={loading} type="submit"> 
        {loading ? '...' : 'Login'}
      </button>
    </form>
  )
}

import { signUp } from '../../../../api/action'

import { useFormState, useFormStatus } from 'react-dom'
import { useDispatch } from 'react-redux'

// import { Button } from 'ui/Button'

import styles from './SignUp.module.scss'
import { useState } from 'react'

export function SignUp({ setHasAccount }) {
  const dispatch = useDispatch()
  const [state, formAction] = useFormState(signUpAction, null)
  const { pending } = useFormStatus()





  function signUpAction(_, formData) {
    const name = formData.get('name')
    const lastName = formData.get('lastName')
    const age = formData.get('age')
    const email = formData.get('email')
    const password = formData.get('password')

    if (!name || !lastName || !age || !email || !password) {
      return { error: 'All fields are required' }
    }

    const userData = { name, lastName, age, email, password }

    dispatch(signUp(userData))

   








    return { success: 'Регистрация успешна' }
  }

  return (
    <form
      className={styles.form}
      action={formAction}
    >
      <h1 className={styles.login}>Регистрация</h1>
      <input type="text"  name="name" placeholder="name" className={styles.inputName}  />
      <input type="text" name="lastName" placeholder="last name"className={styles.inputName}  />
      <input type="number" name="age" placeholder="age"  className={styles.inputName} />
      <input  type="email" name="email" placeholder="email" className={styles.inputName}  />
      <input type="password" name="password" placeholder="password" className={styles.inputName} />

      {state?.error && <p className={styles.error}>{state.error}</p>}
      <button
        variant="outlined"
        className={styles.save}
        onClick={() => setHasAccount(true)}
      >
        Уже есть аккаунт? Войти
      </button>
      <button
        className={styles.save}
        disabled={pending}
      >
        {pending ? 'Сохранение...' : 'Сохранить'}
      </button>
    </form>
  )
}

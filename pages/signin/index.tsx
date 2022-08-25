import { login } from 'store/slices/app';
import classes from './signin.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'

export default function SignIn(props) {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const onSubmit = (e:any) => {
        e.preventDefault();
        // login(form.username, form.password)
        props.setCurrentUser(form.username)
    }

    return (
        <div className={classes.signIn}>
            <form>
                <label>Username
                    <input value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} type={'text'}/>
                </label>
                <label>Password
                    <input value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} type={'password'}/>
                </label>
                <button type={'submit'} onClick={(e) => onSubmit(e)}>
                    Sign In
                </button>
            </form>
        </div>
    )
}
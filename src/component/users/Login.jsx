import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../config/firebase.config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        console.log("Email : ", email)
        console.log("Password : ", password)

        signInWithEmailAndPassword(auth, email, password).then((response) => {
            axios.post("http://localhost:8000/user-check", { email }).then((response) => {
                console.log(response)
                navigate('/show-products')
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div className='w-full max-w-md mx-auto'>
            <form className='mt-6'>
                <p className='text-center font-bold text-slate-900 text-xl mb-6'>EMCKart Login</p>

                <div>
                    <label htmlFor='email'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Email <span className='text-red-600 font-bold text-[20px]'>*</span>
                    </label>
                    <input
                        type='text'
                        id="email"
                        placeholder='Enter Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    >
                    </input>

                </div>

                <div className='mt-4'>
                    <label htmlFor='pswd'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Password<span className='text-red-600 font-bold text-[20px]'>*</span>
                    </label>
                    <input
                        type='password'
                        id="pswd"
                        placeholder='Enter Your Password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    >
                    </input>

                </div>

                <div className='mt-6 text-center'>
                    <span className='text-center text-red-500 font-semibold'>Login Status</span>
                </div>

                <div className='w-full'>
                    <button className='bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
                        type='button'
                        onClick={login}
                    >Login</button>
                </div>

            </form>
        </div>
    )
}

export default Login
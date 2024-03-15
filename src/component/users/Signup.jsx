import React, { useState } from 'react'
import axios from 'axios'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../config/firebase.config'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password).then((response) => {
            axios.post('http://localhost:8000/register', {
                userName, email, phoneNumber, address
            }).then((response) => {
                navigate('/login')
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((error) => {
            console.log(error);
        })
    }



    return (
        <div className='w-full max-w-md mx-auto'>
            <form>
                <p className='text-center font-bold text-slate-900 text-xl mb-6'>EMCKart SignUp</p>
                <div>
                    <label htmlFor='name'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Name <span className='text-red-600 font-bold text-[20px]'>*</span>
                    </label>
                    <input
                        type='text'
                        id="name"
                        placeholder='Enter Your Name'
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setUserName(e.target.value)}
                    >
                    </input>

                </div>


                <div className='mt-4'>
                    <label htmlFor='email'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Email <span className='text-red-600 font-bold text-[20px]'>*</span>
                    </label>
                    <input
                        type='email'
                        id="email"
                        placeholder='Enter Your Email'
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>

                </div>

                <div className='mt-4'>
                    <label htmlFor='phone'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Phone <span className='text-red-600 font-bold text-[20px]'>*</span>
                    </label>
                    <input
                        type='number'
                        id="phone"
                        placeholder='Enter Your Phone Number'
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>

                </div>

                <div className='mt-4'>
                    <label htmlFor='address'
                        className='block text-gray-700 text-sm font-bold mb-2'
                    >
                        Address<span className='text-red-600 font-bold text-[20px]'>*</span>
                    </label>
                    <input
                        type='text'
                        id="address"
                        placeholder='Enter Your Address'
                        className='Shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </input>


                </div>

                <div className='mt-6 text-center'>
                    <span className='text-center text-red-500 font-semibold'>Registration Status</span>
                </div>

                <div className='w-full'>
                    <button className='bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
                        type='button'
                        onClick={register}
                    >Register</button>
                </div>



            </form>
        </div>
    )
}

export default Signup
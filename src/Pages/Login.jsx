import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Login = () => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState("")
  const [error , setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      navigate('/login');
      window.location.reload(); 
      
    } catch (error) {
      setError(error);
      
    }

  }
  return (
    <div className="py-28 max-w-6xl mx-auto h-screen flex flex-col justify-center items-center gap-10 ">
      <div className=''>
        <form onSubmit={handleSignUp} className='flex flex-col gap-10 p-10 border border-green-500 rounded-md shadow-md'>
          <h3 className='text-center font-bold text-green-500 text-xl'>login user</h3>
          <input type="text" 
           placeholder="Enter your email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
           />
          <input type="password" 
           placeholder="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
           />

           {
             error && <p className="text-red-500">{error}</p>

           }
           <button type="submit"  className="bg-green-500 text-white px-4 py-2 rounded-md">login</button>
        </form>
        <p>Don't have an account? <Link to="/signup" className="text-green-500">Create an Account</Link></p>
      </div>
    </div>
  )
}

export default Login
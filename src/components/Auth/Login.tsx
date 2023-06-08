import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../mainStore/user/user-action';
import { useNavigate } from 'react-router-dom';

       const Login = () => {


        const navigate = useNavigate()
        const dispatch: any = useDispatch();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
       console.log(email, password)
       const userInfo = {
        email,
        password
       }
       dispatch(
        loginUser(userInfo,navigate)
      );
      };
    
      return (
        <div className="flex justify-center items-center h-screen">
          <form className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
           <h2 className='text-2xl font-bold mb-4'> Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
               Login
              </button>
            </div>
          </form>
        </div>
      );
    };

export default Login;
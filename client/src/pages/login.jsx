import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
// import axios from 'axios';
// import {asyncWrap} from '../utils/asyncWrap';
// import { useAuth } from "../context/authContext";
export default function Login(){
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
 const history =useNavigate();
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = (e) => {
        
        e.preventDefault()
        const {email ,password} = user
         const x =localStorage.getItem("user_signup")
           const  y= JSON.parse(x);
          if((y[0].email)== email && (y[0].password) == password)
          {
            alert(" Login Succesful")
            history("/")
          }
          else if((y[0].email)!= email)
          {
            alert(" Invalid email ")
          }
          else if((y[0].password)!= password)
          {
            alert(" Invalid password ")
          }
          else{
            alert(" Invalid details ")
          }

         
         
       
     
        
    }
    return(
        
<div class="flex flex-wrap w-full">
    <div class="flex flex-col w-full md:w-1/2">
        
        <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p class="text-3xl text-center">
                <b>Welcome.</b>
            </p>
            <form class="flex flex-col pt-3 md:pt-8">
                <div class="flex flex-col pt-4">
                    <div class="flex relative ">
                        <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                </path>
                            </svg>
                        </span>
                        <input type="text"  name ="email"  value={user.email}   id="design-login-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="flex flex-col pt-4 mb-12">
                        <div class="flex relative ">
                            <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                    </path>
                                </svg>
                            </span>
                            <input type="password"  name="password" value={user.password} onChange={handleChange}  id="design-login-password" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password"/>
                            </div>
                        </div>
                        <button type="submit"  onClick={login} class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2">
                            <span class="w-full">
                                Submit
                            </span>
                        </button>
                    </form>
                    <div class="pt-12 pb-12 text-center">
                        <p>
                            Don&#x27;t have an account?
                            <Link to='/signup' class="font-semibold underline">
                                Register here.
                            </Link>
                        </p>
                        <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>
          </div>
          {/* ....................... */}
                
                    
                </div>
            </div>
            <div className="w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Background"
        />
      </div>
        </div>

      

    )
}
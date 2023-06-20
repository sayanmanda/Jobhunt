import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
// import image from '../assets/image.jpg';
// import { asyncWrap } from '../utils/asyncWrap';
// import axios from "axios";
// import { useAuth } from '../context/authContext';
export default function Signup() {
  const history = useNavigate();
  const [ user, setUser] = useState({
    fname: "",
    lname :" ",
    email:"",
    password:"",
   phone :""
})

const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}

const register = (e) => {
  e.preventDefault()
  const { fname, lname ,email, password, phone } = user
  const data  = [{email :email ,password :password}]
  if( fname && email && password && phone && lname){
    localStorage.setItem("user_signup", JSON.stringify(data))
    history("/login")
    }
 else {
    alert("invlid input")
}

  
}


  return (
    <div className="grid bg-[#F7F7F7] font-[Raleway-Regular]">
      <div className="grid w-[90%] h-[70%] place-self-center lg:grid-cols-[2fr_1fr]">
        
<div class="flex flex-wrap items-center justify-center">
    <div class="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#f3c06b">
            </rect>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#f3c06b">
            </rect>
        </svg>
        <div class="relative flex items-center justify-center px-10 pt-10">
            <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
            </div>
            
            <img class="relative w-40" src="" alt="LearnImage"/>
            {/* <picture>
                <source srcSet="/images/object/5.webp" type="image/webp"/>
                    <source srcSet="/images/object/5.png"/>
                        <img class="relative w-40" src="/images/object/5.png" alt="shopping item"/>
                    </picture> */}
                </div>
                <div class="relative px-6 pb-6 mt-6 text-white">
                    {/* <span class="block -mb-1 opacity-75">
                        Indoor
                    </span> */}
                    <div class="flex justify-between">
                        <span class="block text-xl font-semibold">
                            Learn
                        </span>
                        
                    </div>
                </div>
            </div>
            <div class="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0">
                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#6da3fb">
                    </rect>
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#6da3fb">
                    </rect>
                </svg>
                <div class="relative flex items-center justify-center px-10 pt-10">
                    <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                    </div>
                    <img class="relative w-40" src="/images/object/6.png" alt="shopping"/>
                </div>
                <div class="relative px-6 pb-6 mt-6 text-white">
                    {/* <span class="block -mb-1 opacity-75">
                        Outdoor
                    </span> */}
                    <div class="flex justify-between">
                        <span class="block text-xl font-semibold">
                            Find Job
                        </span>
                       
                    </div>
                </div>
            </div>
            <div class="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#a17cf3">
                    </rect>
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#a17cf3">
                    </rect>
                </svg>
                <div class="relative flex items-center justify-center px-10 pt-10">
                    <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                    </div>
                    <img class="relative w-40" src="/images/object/7.png" alt="shopping"/>
                </div>
                <div class="relative px-6 pb-6 mt-6 text-white">
                    {/* <span class="block -mb-1 opacity-75">
                        Outdoor
                    </span> */}
                    <div class="flex justify-between">
                        <span class="block text-xl font-semibold">
                            Compete
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="block p-6 rounded-lg  bg-[#F7F7F7] max-w-md ">
          <form>
            <div className="grid justify-center h-12 font-sans text-2xl">
              <p>
                <b>Create your account</b>
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="form-group mb-6">
                <input
                  type="text"
                  name="fname" 
                  value={user.fname}
                  onChange={ handleChange }
                  class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="text"
                  name="lname" 
                  value={user.lname}
                  onChange={ handleChange }
                  class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                name="email"
                 value={user.email}
                 onChange={ handleChange }
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="password"
                name="password"
                 value={user.password}
                 onChange={ handleChange }
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Password"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                name="phone" 
                value={user.phone}
                onChange={ handleChange }
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Phone Number"
              />
            </div>

            <button
              type="submit"
              onClick={register}
              class="
      w-full
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Create Account
            </button>

            <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p class="text-center font-semibold mx-4 mb-0">Or</p>
            </div>

            <div class="flex flex-row items-center justify-center lg:justify-center">
              <p class="text-lg mb-0 mr-4">
                <b>Sign in with</b>
              </p>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                {/* <!-- Facebook --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                {/* <!-- Twitter --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </button>
            </div>
            <div className="grid justify-center">
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                Already have an account?
                <Link
                  to="/login"
                  class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

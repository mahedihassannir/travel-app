import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contexM } from '../AuthProvider/ContexProvider';


import { FaEye, FaEyeSlash, FaSlash } from 'react-icons/fa';

const Login = () => {


    const Navigate = useNavigate()

    let location = useLocation()

    console.log("location", location);

    let from = location.state?.form.pathname || "/"


    let { SingIn } = useContext(contexM)

    let [err, SetErr] = useState("")


    let Login = (e) => {
        e.preventDefault()
        let form = e.target

        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        SingIn(email, password)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
                Navigate(from)
            })
            .catch(err => {
                console.log(err);
            })


        if (password.length < 6) {
            SetErr("password not strong and must be 6 charecter")
        }
        else {
            return SetErr("")
        }
    }



    let [show, SetHide] = useState(false)





    return (
        <div className='    h-screen'>


            <form onSubmit={Login} className='w-[570px] mx-auto mt-20 pb-10 border-2 rounded-sm '>

                <h1 className='text-2xl font-bold pt-5 pl-14 pb-10 '>Login</h1>

                <div>
                    <input className=' pl-4 w-[461px] block mx-auto py-3  rounded-sm border-b-2' name='email' type="email" placeholder='Your email' />

                    <div className='relative'>

                        <input className=' pl-4 border-b-2 mx-auto py-3 grid justify-center   rounded-sm w-[461px]  mt-10' name='password' type={show ? "text" : "password"} placeholder='Your password' />

                        {/* here is hide and show btn  */}

                        <div className='absolute top-4 pl-[450px]' onClick={() => SetHide(!show)}>
                            {
                                show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </div>
                        {/* here is hide and show btn ends  */}

                    </div>




                    <div className='flex justify-between px-10 py-10'>
                        <input type="checkbox" name="chacked" id="" />

                        <button>
                            forgot password
                        </button>
                    </div>
                    <div className=''>
                        <input value="Login" className=' bg-orange-400 ml-5 w-11/12 py-5 rounded-md text-black' type="submit" />

                    </div>
                    {/* here is err section of password */}
                    <div>
                        <p className='text-red-600 pt-4 text-center'>{err}</p>
                    </div>
                </div>

                <div>
                    <Link className=" pl-4 pt-3 text-blue-400 link" to="/Register">new to this web</Link>
                </div>
            </form>
            <hr className='w-1/2 mt-5  mx-auto' />


        </div>
    );
};

export default Login;
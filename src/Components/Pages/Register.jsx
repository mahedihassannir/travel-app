import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contexM } from '../AuthProvider/ContexProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'

const Register = () => {
    let { Register } = useContext(contexM)

    
    let [show, SetHide] = useState(false)



    let Register1 = (e) => {
        e.preventDefault()
        let form = e.target

        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        Register(email, password)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);

            })
            .catch(err => {
                console.log(err);
            })




    }



    let [anable, Disible] = useState(false)


    let enableDisable = (e) => {

        let anabled = e.target.checked
        console.log(anable);
        Disible(anabled)


    }

    let clickRes = () => {


        Swal.fire(
            'success!',
            'account created done',
            'success'
        )

    }


    return (
        <div>
            <div className='h-screen'>


                <form onSubmit={Register1} className='w-[570px] mx-auto mt-20 pb-10 border-2 rounded-sm '>

                    <h1 className='text-2xl font-bold pt-5 pl-14 pb-10 '>Register</h1>

                    <div>
                        <input className=' pl-4 w-[461px] block mx-auto py-3  rounded-sm border-b-2' name='email' type="email" placeholder='Your email' />


                        <div className='relative'>
                            <input className=' pl-4 border-b-2 mx-auto py-3 grid justify-center   rounded-sm w-[461px]  mt-10' name='password' type={show ? "text" : "password"} placeholder='Your password' />

                            {/* here is hide and show btn  */}

                            <div className='absolute top-4 pl-[450px] G' onClick={() => SetHide(!show)}>
                                {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </div>
                            {/* here is hide and show btn ends  */}

                        </div>




                        <div className='flex justify-between px-10 py-10'>
                            <input onClick={enableDisable} type="checkbox" name="chacked" id="" />

                            <button>
                                forgot password
                            </button>
                        </div>
                        <div className=''>
                            <input onClick={clickRes}  disabled={!anable} value="Register" className=' cursor-pointer bg-orange-400 ml-5 w-11/12 py-5 rounded-md text-black' type="submit" />

                        </div>


                    </div>

                    <div>
                        <Link className=" pl-4 pt-3 text-blue-400 link" to="/Login">have an account</Link>
                    </div>
                </form>
                <hr className='w-1/2 mt-5  mx-auto' />


            </div>
        </div>
    )

}

export default Register;
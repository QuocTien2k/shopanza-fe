import { useState } from "react"
import login from "../assets/login.png"
const Login = () => {
    const [currState, setCurrState] = useState('Sign up')
    return (
        <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
            {/* Container */}
            <div className="flex h-full w-full">
                {/* Image */}
                <div className="w-1/2 hidden sm:block">
                    <img src={login} alt="loginImg" className="object-cover h-full w-full" />
                </div>
                {/* Form Side */}
                <div className="flexCenter w-full sm:w-1/2 text-[90%]">
                    <form action="" className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5">
                        <div className="w-full mb-4">
                            <h3 className="bold-36">{currState}</h3>
                        </div>
                        {currState === 'Sign Up' && (
                            <div className="w-full">
                                <label htmlFor="name" className="medium-15">Name</label>
                                <input type="text" placeholder="Name..." className="py-1.5 ring-1 ring-slate-900/5 w-full px-3 rounded bg-primary mt-1" />
                            </div>
                        )}
                        <div className="w-full">
                            <label htmlFor="email" className="medium-15">Email</label>
                            <input type="text" placeholder="Email..." className="py-1.5 ring-1 ring-slate-900/5 w-full px-3 rounded bg-primary mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="password" className="medium-15">Password</label>
                            <input type="text" placeholder="Password..." className="py-1.5 ring-1 ring-slate-900/5 w-full px-3 rounded bg-primary mt-1" />
                        </div>
                        <button type="submit" className="btn-dark w-full mt-5 !py-[8px] !rounded">{currState === 'Sign up' ? 'Sign up' : 'Login'}</button>
                        <div className="w-full flex flex-col gap-y-3">
                            <div className="underline medium-15">Forgot your password?</div>
                            {currState === 'Login' ? (
                                <>
                                    <div className="underline medium-15">
                                        Dont have an acccount?
                                        <span onClick={() => setCurrState('Sign up')} className="cursor-pointer pl-1">Create account</span>
                                    </div>
                                </>
                            ) : (
                                <div className="underline medium-15 cursor-pointer py-1.5">
                                    Already have an acccount?
                                    <span onClick={() => setCurrState('Login')} className="cursor-pointer pl-1">Login</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
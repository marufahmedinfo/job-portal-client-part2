import Lottie from "lottie-react";
import animatImg from '../../assets/login.json'
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('');
    const { SignInUser,handleGoogle } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const frm = e.target;
        const email = frm.email.value;
        const password = frm.password.value;
        const log = { email, password }
        console.log(log)
        SignInUser(email, password)
            .then(res => {
                console.log(res.user)
                alert('user SuccessFully Login')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    };
    
    const handlwGooogleSignin = () => {
        handleGoogle()
        .then(res => {
            alert("SuccessFully Google SignIn")
            console.log(res.user)
        })
        .catch(errro => {
            console.log(errro.message)
            setError(errro.message)
        })
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-96">

                    <Lottie animationData={animatImg}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Login</button>
                        </div>
                    </form>
                    <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[230px] right-9'>
                        {
                            showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                        }
                    </button>
                    <div className="divider">or</div>
                    <button onClick={handlwGooogleSignin} className='btn w-6/12 ml-8 mb-8'><FcGoogle size={30} />LogIn With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
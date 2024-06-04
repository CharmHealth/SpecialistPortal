import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginEntry = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        const validUsername = "CathynKashi@gmail.com";
        const validPassword = "password123";
        if (email === validUsername && password === validPassword) {
          navigate('/profile');
          alert("Login successful!");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      };
    return (
        <div className="bg-transparent w-full h-screen">
            <div className='justify-center'>
                <div className="px-6">
                    <h2 className="text-5xl text-[#875F9A] font-extrabold mt-12 text-left">Login to SpeciaList</h2>
                    <h5 className="mt-4 text-really-faded-gray text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                </div>
                <form className='mt-4 flex flex-col items-center'>
                    <div className="flex flex-col w-full p-6">
                        <label class="text-white font-semibold text-left mb-4">
                            Username
                        </label>
                        <input
                            type="email"
                            className="border rounded-test w-full md:w-[24rem] h-16 py-2 px-3"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-full px-6">
                        <label class="text-white font-semibold text-left mb-4">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border rounded-test w-full md:w-[24rem] h-16 py-2 px-3"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="pt-8 mb-6 flex flex-row gap-6 w-full">
                        <div className="ml-[4.75rem]">
                            <input class="mr-4" type="checkbox" />
                            <span class="text-base text-[#875F9A]">
                                Remember Me
                            </span>
                        </div>
                        <div className="">
                            <a class="text-base text-[#875F9A] hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-6">
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="bg-[#875F9A] w-full md:w-[24rem] h-16 mt-2 text-white font-bold py-2 px-4 rounded-test focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginEntry;















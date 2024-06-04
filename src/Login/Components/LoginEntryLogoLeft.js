import Logo from '../Assets/Logo.svg';
import GoogleLogin from '../Assets/Google.svg';

const LoginEntry = () => {
    return (
        <div className="bg-transparent w-3/5">
            {/* <div className="pt-20 pl-20">
                <img src={Logo} alt="Logo"/>
            </div> */}
            <div className='mt-56 justify-center'>
                <h2 className="text-5xl text-white font-semibold mt-12 text-center">Login to your patient portal</h2>
                <form className='mt-32 flex flex-col items-center'>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="border rounded-2xl w-68 h-14 py-2 px-3"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="border rounded-2xl w-68 h-14 py-2 px-3"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-bright-purple w-28 h-14 mt-8 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    
                    <button
                        type="submit"
                        className="bg-lavender w-48 h-16 mt-14 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                    >
                        <img src={GoogleLogin} alt="Logo"/>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginEntry;
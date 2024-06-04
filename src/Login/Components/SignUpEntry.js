import { Outlet, Link } from "react-router-dom";

const SignUpEntry = () => {
    return (
        <div className="w-2/5 flex flex-col bg-domino-gray rounded-3xl items-center ">
            <div className="text-white text-center text-4xl font-semibold mt-48 p-10">
                Not a SpeciaList user yet?
            </div>
            <div className="text-white text-center text-2xl font-semibold mt-20 p-10">
                Sign up now to take advantage of SpeciaList resources!
            </div>
            <Link to="/signup">
                <button
                    type="submit"
                    className="mt-4 w-36 h-16 bg-zinc-500 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                >
                    Sign Up
                </button>
            </Link>
        </div>
    );
}

export default SignUpEntry;
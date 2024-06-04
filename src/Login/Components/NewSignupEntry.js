import MrBig from "../Assets/Vector.svg";
import MrSmall from "../Assets/Vector-2.svg";
import Next from "../Assets/Next.svg"
import {Link } from "react-router-dom";

const SignUpEntry = () => {

    return (
        <div className="w-full bg-transparent items-center relative mt-16 scale-[0.6] md:scale-[0.7] lg:scale-[0.8]">
            <img src={MrBig} alt="Fancy" className="absolute z-10" />
            <img src={MrSmall} alt="CreateAccount" className="absolute top-60 left-56 z-20" />
            <h3 className="absolute top-80 left-72 z-30 bg-transparent text-bold text-xl text-white">New to SpeciaList?</h3>
            <h3 className="absolute top-[22.75rem] left-[16.5rem] z-30 bg-transparent text-bold text-4xl text-white">Create an <br/> account</h3>
            <Link to="/signup">
            <button className="absolute top-[25.5rem] left-[24.5rem] z-30 bg-transparent ">
              <img src={Next} alt="Button"/>
            </button>
            </Link>
        </div>
    );
}

export default SignUpEntry;

import LoginEntry2 from "./Components/NewLoginEntry";
import SignUpEntry from "./Components/NewSignupEntry";
import FooterPlain from "../Elements/Footerplain";

const Login = () => {
    return ( 
        <>
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 ml-20">
            <LoginEntry2/>
            <SignUpEntry/>
        </div>
        <footer class="h-3">
            <FooterPlain/>
        </footer>
        </>

     );
}
 
export default Login;
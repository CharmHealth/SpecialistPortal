import Form from "./Components/Form";
import Side from "./Components/Side";

const SignUp = () => {
    return (
        <section className="background-radial-gradient grid grid-cols-5">
            <div className="col-span-2">
                <Side />
            </div>
            <div className="col-span-3 mr-4">
            <Form />
            </div>

        </section>
    );
}

export default SignUp;
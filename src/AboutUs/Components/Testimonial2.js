import t1 from '../Assets/t1.svg';

const testText = '"I love how convenient it is to book an appointment. Finding proper care is no longer a chore!"';

const Testimonial= () => {
    return (
        <div className="relative bg-light-gray w-full h-96 lg:w-80 lg:h-112 px-8 py-20 flex justify-center items-center rounded-test">
            <img src={t1} alt="t1" className="absolute -top-48 left-1/2 transform -translate-x-1/2" />
            <div className="text-center text-white text-lg md:text-xl lg:text-xl">
                <p>{testText}</p>
            </div>
        </div>
    );
};

export default Testimonial;
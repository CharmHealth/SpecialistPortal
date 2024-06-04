import t3 from '../Assets/t3.svg';

const testText = '"I was able to find a new therapist for my depression in just a couple days, compared to months before! I highly recommend SpeciaList!"';

const Testimonial3 = () => {
    return (
        <div className="relative bg-light-gray w-full h-96 lg:w-80 lg:h-112 px-8 py-20 flex justify-center items-center rounded-test ">
            <img src={t3} alt="t1" className="absolute -top-48 left-1/2 transform -translate-x-1/2" />
            <div className="text-center text-white text-lg md:text-xl lg:text-xl">
                <p>{testText}</p>
            </div>
        </div>
    );
};

export default Testimonial3;
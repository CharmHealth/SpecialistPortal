import t2 from '../Assets/t2.svg';

const testText = '"SpeciaList helped me get opionions from several specialists regarding my tremors. It was so reassuring when 2 different doctors agreed that it was only a temporary side effect."';

const Testimonial2 = () => {
    return (
        <div className="relative bg-light-gray w-full h-96 lg:w-80 lg:h-112 px-8 py-20 flex justify-center items-center rounded-test">
            <img src={t2} alt="t2" className="absolute -top-48 left-1/2 transform -translate-x-1/2" />
            <div className="text-center text-white text-lg md:text-xl lg:text-xl">
                <p>{testText}</p>
            </div>
        </div>
    );
};

export default Testimonial2;
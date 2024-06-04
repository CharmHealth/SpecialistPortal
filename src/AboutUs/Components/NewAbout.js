import BigPic from '../Assets/BigPic.svg'
const about = 'About Us';
const info = 'SpeciaList is a cutting edge platform dedicated to revolutionizing specialist accessibility. Our mission is to seamlessly connect patients from around the world with some of the best specialists, ensuring they receive the highest quality of medical attention and care. ';


const About = () => {
    return (
        <div className="flex flex-col p-6 xl:flex-row md:mb-8 xl:p-40">
            <div className="order-2 pt-4 xl:ml-12 xl:w-2/3 xl:order-1">
                <p className="text-4xl text-[hsl(280,100%,81%)] font-bold mb-4 text-left pb-4 md:text-4xl lg:text-5xl xl:text-6xl xl:pb-14">{about}</p>
                <p className="text-base font-light text-[hsl(280,50%,95%)] text-left md:text-base lg:text-lg xl:text-xl xl:w-4/5">{info}</p>
            </div>
            <div className="max-w-xs order-1 md:max-w-md lg:max-w-lg xl:max-w-xl xl:order-2 xl:mt-2 xl:-ml-8 mx-auto">
                <img src={BigPic} alt="Doctor" />
            </div>
        </div>
    );
}


export default About;


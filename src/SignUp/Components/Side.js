import React from 'react';
import Head from '../Assets/Head.svg';
import EditHead from '../Assets/EditHead.svg';

const Side = () => {
    return (
        <div className="w-full relative grid place-items-center">
            <div className="mt-24 p-4 text-center">
                <img src={Head} alt="InPerson" />
            
                <button className="absolute -mt-20 left-[26rem]">
                    <img src={EditHead} alt="EditHead" />
                </button>

                <p className="text-white text-6xl mt-12 text-right">
                    Tell us a bit <br/>more about <br/> you!
                </p>
            </div>
        </div>
    );
}

export default Side;

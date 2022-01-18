import React , {useContext} from 'react';
import {BackStateContext} from './Context/StateManagement';

export default function Start() {
    const {setplace , setCount} = useContext(BackStateContext);

    const ChangePlace = () => {
        setplace("question");
        setCount(50);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            
            <main className='border-2 border-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.3)] rounded-3xl px-9 py-12 '>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Coding Quiz Challenge
                </h1>
                <p className='text-md'>
                    Try to answer the following code-related questions within the time limit.
                    <br/>
                    Keep in mind that incorrect answers will penalize your scoretime by ten seconds.
                </p>
                <input type="button" value="Start Quiz" className='rounded-lg bg-[#218380] text-white mt-3 px-4 py-2 active:bg-[#0d6461] cursor-pointer' onClick={ChangePlace} />
            </main>
        </div>
    )
}
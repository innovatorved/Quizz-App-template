import React, { useContext, useState } from 'react'
import { BackStateContext } from './Context/StateManagement';


export default function EachQuestion() {
    const { questions, falseAnswer  , setCount , score, setscore , forWrongAnswer , forTrueAnswer} = useContext(BackStateContext);
    const [qusNo, setqusNo] = useState(0);
    const [show, setshow] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [disableit , setdisable] = useState(false);

    const Submitted = (e) => {
        
        const userAnswer = e.target.value;
        setshow(true);
        setdisable(true);
        if (userAnswer !== questions[qusNo].answer) {
            falseAnswer();
            setAnswer(false);
            setscore(score-forWrongAnswer);
        } else {
            setAnswer(true);
            setscore(score+forTrueAnswer);
        }

        setTimeout(() => {
            if (qusNo === questions.length-1){
                setshow(false);
                setAnswer(null);
                setdisable(false);
                setqusNo(0);
                setCount(0);
            }
            else if (qusNo < questions.length) {
                setdisable(false);
                setqusNo(qusNo + 1);
                setshow(false);
                setAnswer(null);
            }
        }, 1000);
        
    }

    return (
        <div>
            <main className='border-2 border-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.3)] rounded-3xl px-9 py-12 w-96 '>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">

                </h1>
                {/* design a form with 4 radio buttons and form automatic submitted */}
                <form className="flex flex-col" onChange={Submitted}>
                    <div className="flex flex-col">
                        <label className="text-gray-800 font-bold mb-2">
                            {questions[qusNo].questionText}
                        </label>
                        <div className="flex flex-col" key={qusNo}>
                            {questions[qusNo].options.map((option, index) => (
                                <div key={index} className="flex flex-col mt-1" >
                                    <input type="radio" id={index} name="option" value={option} className='sr-only peer' disabled={disableit}/>
                                    <label htmlFor={index} className="peer-checked:bg-green-700 rounded-lg bg-[#218380] text-white mt-3 px-4 py-2 active:bg-[#0d6461] cursor-pointer">{option}</label>
                                </div>
                            ))}
                            <div className={`${show ? "" : "invisible"} inline-block rounded-lg  ${answer === false ? "bg-red-700" : "bg-green-700"} h-10 text-white px-4 py-2 cursor-pointer mt-10`}>
                                {
                                    answer === true ? "Correct answer!!" : `${questions[qusNo].answer} is Right answer`
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

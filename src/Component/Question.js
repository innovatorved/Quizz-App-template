import React, { useContext } from 'react';
import { BackStateContext } from './Context/StateManagement';
import EachQuestion from './EachQuestion';

export default function Question() {
    const { count, score, setscore, addScore , setplace } = useContext(BackStateContext);

    const ScoreSubmited = (e) => {
        e.preventDefault();
        let name = e.target.elements.name.value;
        // alert(name + " is the name" + " " + score);
        document.getElementById("inputElementName").value = "";
        addScore({
            "name": name,
            "score": score
        })
        setplace("highscore");
        setscore(0);

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {
                count > 0 ?
                    <EachQuestion/>
                    :
                    <div>
                        <main className='border-2 border-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.3)] rounded-3xl px-9 py-12 w-96 '>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                All done!
                            </h1>
                            <p className='text-md'>
                                Your Final score is :  {score}
                            </p>
                               <form className='flex mt-10' onSubmit={ScoreSubmited}>
                                    <label className='text-sm'>Enter Initials : </label>
                                    <input type="text" name="name" id='inputElementName' className='rounded-lg text-sm border-2 border-[#218380] w-40 pl-2 ml-2' autoComplete="off" required={true}/>
                                    <input type="submit" value="Submit" className='rounded-lg bg-[#218380] text-white ml-2 active:bg-[#0d6461] cursor-pointer px-2 py-1' />
                                </form>
                        </main>
                    </div>
            }
        </div>
    )
}

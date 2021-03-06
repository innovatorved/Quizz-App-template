import React , {useContext , useEffect , useState} from 'react';
import { BackStateContext } from './Context/StateManagement';

export default function Highscore() {
    const {allscore , setplace , clearAllscore} = useContext(BackStateContext);

    const ChangePlace = () => {
        setplace("home");
    };

    const [values, setvalues] = useState([]);
    useEffect(() => {
        const temp = allscore;
        temp.sort((a,b) => b.score - a.score);
        setvalues(temp);
    }, [allscore])

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <main className='border-2 border-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.3)] rounded-3xl px-9 py-12 w-96 '>
                <h1 className="text-3xl font-bold text-gray-800">
                HighScore
                </h1>
                <div className='table w-full mt-7'>
                    <div className="table-header-group">
                        <div className="table-row">
                        <div className="table-cell text-left font-bold">S.No</div>
                        <div className="table-cell text-left font-bold">Name</div>
                        <div className="table-cell text-left font-bold">Score</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {values.map((score,index) => {
                            return (
                                <div className="table-row p-2" key={index}>
                                    <div className="pl-2 table-cell text-left">{index+1}</div>
                                    <div className="table-cell text-left">{score.name}</div>
                                    <div className="table-cell text-left">{score.score}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

                <input type="button" value="Go back" className='rounded-lg bg-[#218380] text-white mt-5 px-4 py-2 active:bg-[#0d6461] cursor-pointer' onClick={ChangePlace}/>
                <input type="button" value="Clear Highscore" className='mx-2 rounded-lg bg-[#218380] text-white mt-5 px-4 py-2 active:bg-[#0d6461] cursor-pointer' onClick={clearAllscore}/>
            </main>
        </div>
    )
}

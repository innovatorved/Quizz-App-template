import React , {useContext} from 'react';
import {BackStateContext} from './Context/StateManagement';

const Navbar =()=> {
    
    const {place , setplace , count} = useContext(BackStateContext);

    return (
        <nav className='fixed top-0 right-0 left-0 z-10 flex justify-between bg-[#218380] text-white p-4 font-serif'>
            <ul className='flex space-x-4'>
                <li id="leaderboard" className='cursor-pointer'>{
                    place === "home"
                    ?<span onClick={()=>{setplace("highscore")}}>View Highscores</span>:<span onClick={()=>{setplace("home")}}>Home</span>
                }
                &nbsp;
                <i className="fas fa-hand-point-left fa-lg"></i>
                </li> 
            </ul >
        <ul className='flex space-x-4'>
            <li>Time : </li>
            <li className='inline-block w-12'>{count}</li>
        </ul>
        </nav>
    )
}

export default Navbar;
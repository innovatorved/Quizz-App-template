import React , {useContext} from 'react';
import {BackStateContext} from './Context/StateManagement';

import Start from './Start';
import Highscore from './Highscore';
import Question from './Question';

export default function Home() {
    const {place} = useContext(BackStateContext);
    
    const decidePlace = () => {
        switch(place){
            case "home":
                return <Start />
            case "highscore":
                return <Highscore />
            case "question":
                return <Question />
            default:
                return <h1>HEllo</h1>
  
        }
    };

    return (
        <div>
            {
                decidePlace()
            }
        </div>
    )
}

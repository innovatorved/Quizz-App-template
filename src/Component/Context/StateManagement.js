import React , {createContext , useState , useEffect} from 'react';



const BackStateContext = createContext();

const BackStateProvider = (props) => {
  const forWrongAnswer = 5; // -5points for every wrong anwer
  const forTrueAnswer = 10; // +10points for correct answer
  const totalTime = 50; // Total time quiz to be run
  const cutTime = 10; // cut time if user select incorrect answer

  const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

  const [count , setCount] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
          if(count > 0){
              setCount(count - 1);
          }else{
              clearInterval(interval);
          }
      },1000);
      return () => clearInterval(interval);
  },[count]);
  
  const falseAnswer = () => {
      if (count > cutTime) {
          setCount(count - cutTime);
      }
      else{
          setCount(0);
      }
  }

    const [place, setplace] = useState("home");

      const [allscore , setAllscore] = useState([]);

      const addScore=(newscore)=>{
        setAllscore([...allscore , newscore]);
      }

      const clearAllscore=()=>{
        setAllscore([]);
      }

      const [score, setscore] = useState(0);

    return (
        <BackStateContext.Provider value={{forWrongAnswer , forTrueAnswer, totalTime, place , setplace , questions , count , setCount , score, setscore , allscore , addScore , falseAnswer , clearAllscore}}>
            {props.children}
        </BackStateContext.Provider>
    )
}

export default BackStateProvider ;
export {
    BackStateContext
};
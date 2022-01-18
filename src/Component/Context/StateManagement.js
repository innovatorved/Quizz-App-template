import React , {createContext , useState , useEffect} from 'react';



const BackStateContext = createContext();

const BackStateProvider = (props) => {

  const [count , setCount] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
          if(count > 0){
              setCount(count - 1);
          }else{
              clearInterval(interval);
          }
      },1000);
      console.log(count);
      return () => clearInterval(interval);
  },[count]);

    const [place, setplace] = useState("home");

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

      const Scores = [
        {
          "name" : "Ved",
          "score" : 120
        },
        {
          "name" : "Dev",
          "score" : 220
        }
      ]

    return (
        <BackStateContext.Provider value={{place , setplace , questions , Scores , count , setCount}}>
            {props.children}
        </BackStateContext.Provider>
    )
}

export default BackStateProvider ;
export {
    BackStateContext
};
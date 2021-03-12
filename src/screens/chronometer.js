import React, { useState, useEffect } from "react";

function pad(num) {
  num = num.toString();
  if (num.length === 1) num = "0" + num;
  return num;
}

const Counter = (props) => (
    <h1 class="my-title">{props.minutes}:{pad(props.seconds)}</h1>
)


const  Chronometer = (props) =>  {
    const { youLose } = props;
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(2);

    const setTime = () => {
        if (seconds === 0 && minutes === 0){
            youLose()
        }
        else if (seconds === 0){
            setSeconds(59);
            setMinutes(minutes - 1);
        } else {
            setSeconds(seconds - 1);
        }
    }

    useEffect(() => {
        setTimeout(() => {
          setTime();
        }, 1000);
      });
    
    return (
      <div>
        <Counter minutes={minutes} seconds={seconds} />
      </div>
    );
}

export default Chronometer;
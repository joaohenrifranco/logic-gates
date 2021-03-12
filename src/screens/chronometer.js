import React, { useState, useEffect } from "react";

const Counter = (props) => (
    <h1 class="my-title">{props.minutes}:{props.seconds}</h1>
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


'use client';

import { useRef, useState } from "react"
import { nanoid } from 'nanoid';

const TaskManager = () => {

    const [tasks, setTasks] = useState([])
    
    const inputReference = useRef()
    


    const handleAddTask = () => {
    
        const inputValue = inputReference.current.value
        setTasks([{title: inputValue , id: nanoid()} , ...tasks])
        if (inputReference.current) {
            inputReference.current.value = '';
        }
      
        

    }


    const handleOnKeyDown = (My_key) : void => {

        console.log(My_key.key.value);
        
        if (My_key.key === 'h' || My_key.key === 'Enter') {
            handleAddTask()
        }
    


    }
    
        



    return(
        

        <>
        <div className="ml-14 mt-10">
                <input
                    onKeyDown={handleOnKeyDown}
                    ref={inputReference} type="text" placeholder="Add Task"
                    className="bg-slate-600 h-10 text-green-300" />
          <button   onClick={handleAddTask}    className="w-32 rounded-md h-12 bg-blue-500 text-white ml-10">Add Task</button>      



        </div>
        

            <ol>
                {tasks.map((elem) => {
                    return <li key={elem.id}>{elem.title}</li>
                    
            })}
            </ol>           
        
        </>


    )

}


export default TaskManager;
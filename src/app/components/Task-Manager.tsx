
'use client';

import { useState } from "react"


const TaskManager = () => {

    const [tasks, setTasks] = useState()
    
    const handleAddTask = () => {
        console.log('Clicked');
        

    }










    return(
        

        <>
        <div className="ml-14 mt-10">
                <input type="text" placeholder="Add Task"  className="bg-slate-600 h-10 text-green-300"/>
          <button   onClick={handleAddTask}    className="w-32 rounded-md h-12 bg-blue-500 text-white ml-10">Add Task</button>      



        </div>
        
        
        
        </>


    )

}


export default TaskManager;
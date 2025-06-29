import { useEffect, useState } from "react"
import Card from "./Card.jsx"
import Input from "./Input.jsx" 

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = async (newTask) => {
       const body = {
            task_id: Math.random(),
            task_name: newTask
       }
       try{
        await fetch("http://localhost:4050/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
       })
        await getTasks();
       } catch (error) {
           alert("Error adding task:", error.message);
       }    
    }

    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:4050/${id}`, {
            method: "DELETE"
        })
         await getTasks();
        } catch (error) {
            alert("Error deleting task:", error.message);
        }
    }

    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:4050");
            const data = await response.json();
            if(data){
                setTasks(data);
            }
        } catch (error) {
            alert("Error fetching tasks:", error.message);
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div id="tasks">
            <h1>To-Do List</h1>
            <Input onAddTask={addTask} />
            {
            tasks.map((task) => (
                <Card onCompleteTask={deleteTask} id={task.task_id} text={task.task_name} />
            ))
            }
        </div>
    )
}

export default Tasks;
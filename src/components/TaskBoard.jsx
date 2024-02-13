import { useState } from "react";
import Search from "./Tasks/Search";
import TaskAction from "./Tasks/TaskAction";
import TasksList from "./Tasks/TasksList";
import AddModalTask from "./Tasks/AddModalTask";


export default function TaskBoard() {


    let taskDefulData = {
        id : crypto.randomUUID(),
        title : "Integration API",
        description : "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags : ['Web', 'Javascript', 'React'],
        priority : "High",
        isFavorite : "false",
    };

    let [tasks, setTasks] = useState([taskDefulData]);
    let [addTaskShow, setAddTaskShow] = useState(false)
    let [taskEditData, setTaskEditData] = useState(null)

    let handleAddTasks = ()=>{
        setAddTaskShow(true)
    }

    let handleAddValueCatch = (newTaskData, addmin)=>{
        if(addmin){
            setTasks([...tasks, newTaskData])
        }else{
            setTasks(
                tasks.map((task)=>{
                    if(task.id === newTaskData.id){
                        return newTaskData
                    }
                    return task
                })
            )
        }
        setAddTaskShow(false)
        setTaskEditData(null)
        
    }

    let handleEditeData = (editCatch)=>{
        setTaskEditData(editCatch)
        setAddTaskShow(true)
    }

    let handleSingleDelete = (deleteId)=>{
        let deleteItem = tasks.filter((item)=> item.id !== deleteId)
        setTasks(deleteItem)
    }

    let handleAllDelete = ()=>{
        console.log("ami")
    }

  return (
    <>
        <section className="mb-20 flex justify-center flex-col items-center" id="tasks">
            
            {addTaskShow && <AddModalTask onSendData={handleAddValueCatch} onEditData={taskEditData}/>}
            
            <div className="container">
                
            <div className="p-2 flex justify-end">
                <Search/>
            </div>
          
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onAddTask={handleAddTasks} onAllDelete={handleAllDelete}/>
                    <TasksList tasks={tasks} onEdit={handleEditeData} onSingleDeleteData={handleSingleDelete}/>
                </div>
            </div>
        </section>
    </>
  )
}

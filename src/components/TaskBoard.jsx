import Search from "./Tasks/Search";
import TaskAction from "./Tasks/TaskAction";
import TasksList from "./Tasks/TasksList";


export default function TaskBoard() {
  return (
    <>
        <section className="mb-20 flex justify-center flex-col items-center" id="tasks">
            
            <div className="container">
                
            <div className="p-2 flex justify-end">
                <Search/>
            </div>
          
                <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction/>
                    <TasksList/>
                </div>
            </div>
        </section>
    </>
  )
}

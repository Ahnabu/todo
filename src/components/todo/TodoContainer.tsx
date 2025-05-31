import type { JSX } from "react/jsx-runtime"
import { useAppSelector } from "../../redux/hook"
import TodoCard from "./TodoCard"
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter"

function TodoContainer() {
    const { todos } = useAppSelector((state) => state.todos)
    return (
        <div className="mx-auto text-center ">
            <div className="flex justify-between items-center p-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="w-full h-full rounded-xl p-2
            space-y-3 bg-[linear-gradient(to_right,_#DC02C3,_#5C53FE)]">
                <div className=" p-3 h-full rounded-xl space-y-3 w-full">
                    <div className="flex bg-gray-800 rounded-xl font-semibold justify-between p-5 ">
                        <p>Mark</p>
                        <p className="mx-auto">Todo Title</p>
                        <p className="mx-auto">Time</p>
                        <p className="mx-auto">Description</p>
                        <p className="mx-auto">Actions</p>
                    </div>
                    {
                        todos.map((item: JSX.IntrinsicAttributes & { id: string; title: string; description: string; isCompleted?: boolean }) => {
                            return (
                                <TodoCard
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })
                    }
                </div>

                {/* <div className="text-2xl rounded-md font-bold p-5 flex justify-center items-center">There is no task pending</div> */}

            </div>
        </div>
    )
}

export default TodoContainer
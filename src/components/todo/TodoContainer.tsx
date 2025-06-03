import type { JSX } from "react/jsx-runtime"
// import { useAppSelector } from "../../redux/hook"
import TodoCard from "./TodoCard"
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter"
import { useGetTodosQuery } from "../../redux/api/api"

function TodoContainer() {
    //form local
    // const { todos } = useAppSelector((state) => state.todos)

    //from server

    const { data: todos, isLoading, isError } = useGetTodosQuery(undefined)
    if (isLoading) {
        return <div className="text-2xl rounded-md font-bold p-5 flex justify-center items-center">Loading...</div>
    }
    if (isError) {
        return <div className="text-2xl rounded-md font-bold p-5 flex justify-center items-center">Something went wrong</div>
    }
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
                        <p className="flex-1">Todo Title</p>
                        <p className="flex-1">Time</p>
                        <p className="flex-1">Description</p>
                        <p className="flex-1">Actions</p>
                    </div>
                    {
                        todos?.data?.map((item: JSX.IntrinsicAttributes & { id: string; title: string; description: string; isCompleted?: boolean }) => {
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
import { Button } from "../ui/button"
import TodoCard from "./TodoCard"

function TodoContainer() {
    return (
        <div className="mx-auto text-center ">
            <div className="flex justify-between items-center p-5">
                <Button>
                    Add Todo
                </Button>
                <Button>
                    Filter
                </Button>
            </div>
            <div className="w-full h-full rounded-xl p-4
            space-y-3 bg-[linear-gradient(to_right,_#DC02C3,_#5C53FE)]">
                <div className="bg-gray-800 p-5 h-full rounded-xl space-y-3 w-full">
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                </div>

                {/* <div className="text-2xl rounded-md font-bold p-5 flex justify-center items-center">There is no task pending</div> */}
                TodoContainer
            </div>
        </div>
    )
}

export default TodoContainer
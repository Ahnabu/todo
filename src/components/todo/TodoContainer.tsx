import { Button } from "../ui/button"
import TodoCard from "./TodoCard"

function TodoContainer() {
    return (
        <div className="mx-auto text-center">
            <div>
                <Button>
                    Add Todo
                </Button>
                <Button>
                    Filter
                </Button>
            </div>
            <div className="w-full h-full rounded-xl p-4
            space-y-3">
                <TodoCard />
                {/* <div className="text-2xl rounded-md font-bold p-5 flex justify-center items-center">There is no task pending</div> */}

            </div>
            TodoContainer</div>
    )
}

export default TodoContainer
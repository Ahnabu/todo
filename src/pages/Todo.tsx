import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/container";

export default function Todo() {
    return (
        <Container>
            <h1 className=" text-center text-3xl font-semibold my-8">
                Todo
            </h1>
            <TodoContainer />
        </Container>
    )
}

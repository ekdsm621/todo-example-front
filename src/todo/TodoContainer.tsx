import {Container} from "@mui/material";
import {TodoForm, TodoList} from "./view";

const TodoContainer = () => {

    return (
        <Container maxWidth="xl">
            <TodoForm />
            <TodoList />
        </Container>
    )
}
export default TodoContainer;
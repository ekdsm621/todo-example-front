import {Box, Container} from "@mui/material";
import {TodoForm, TodoList, TodoType} from "./view";
import Api from "./api/Api";
import {useCallback, useEffect} from "react";
import {Store} from "./store/Store";
import {observer} from "mobx-react";

const TodoContainer = () => {
    const api = Api.instance;
    const store = Store.instance;

    const {list} = store;

    useEffect(() => {
        api.getList().then(res => {
            if(res.length === 0) return;
            store.changeList(res);
            store.initId(res.at(-1)!.id);
        });
    },[])

    const handleClickDelete = useCallback((item:TodoType) => {
        api.delete(item).then(() => store.deleteListItem(item.id));
    }, []);

    const handleClickComplete = useCallback((item:TodoType) => {
        item.completed = true;
        api.update(item).then(() => store.completeListItem(item.id));
    },[]);

    const handleAddData = useCallback((title:string, date:string) => {
        const today = new Date();
        const todayString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        const data = {
            id: (store.id),
            registerDate: todayString,
            expiredDate: date,
            title: title,
            completed: false
        }
        api.create(data).then(() => store.createListItem(data));
    },[]);

    return (
        <Container  maxWidth="sm">
            <Box mt={10}>
                <TodoForm
                    handleAddData={handleAddData}
                />
                <TodoList
                    list={list}
                    handleClickDelete={handleClickDelete}
                    handleClickComplete={handleClickComplete}
                />
            </Box>
        </Container>
    )
}
export default observer(TodoContainer);
import {Grid, IconButton, List, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import {TodoType} from "../api/TodoType";
import {useMemo} from "react";
import {observer} from "mobx-react";

interface Props{
    list: TodoType[];
    handleClickDelete:(item:TodoType) => void;
    handleClickComplete:(item:TodoType) => void;
}

const TodoList = ({ list, handleClickDelete, handleClickComplete }:Props) => {
    const completedColor = '#a2cf6e';
    const color = '#e8eaf6';

    const listRender = useMemo(() => {
        return(
            list.map((item, key) => {
                const date = item.registerDate.concat(' ~ ',item.expiredDate);
                return (
                    <ListItem sx={{ width: '100%'}} key={key} style={{backgroundColor: item.completed? completedColor : color}}>
                        <Grid container>
                            <Grid item xs={9}>
                                <ListItemText primary={item.title} secondary={date} />
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() => handleClickDelete(item)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="complete"
                                    size="large"
                                    onClick={() => handleClickComplete(item)}
                                    disabled={item.completed}
                                >
                                    <CheckIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                )
            })
        )
    },[list])

    return (
        <List sx={{ width: '100%' }}>
            {listRender}
        </List>
    )

}

export default observer(TodoList);
import {Button, Grid, TextField} from "@mui/material";
import {observer} from "mobx-react";
import {useCallback, useState} from "react";

interface Props {
    handleAddData:(title:string, date:string) => void;
}

const TodoForm = ({handleAddData}:Props) => {

    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');

    const handleChangeTitle = useCallback((e:any) => {
        setTitle(e.target.value);
    },[]);

    const handleChangeDate = useCallback((e:any) => {
        setDate(e.target.value);
    },[]);

    const handleClickAdd = useCallback(() => {
        handleAddData(title, date);
    },[handleAddData, title, date]);


    return (
        <Grid container>
            <Grid item sm={6}>
                <TextField
                    id="standard-basic"
                    placeholder="TODO"
                    variant="standard"
                    fullWidth
                    value={title}
                    onChange={handleChangeTitle}
                />
            </Grid>
            <Grid item sm={1} />
            <Grid item sm={2}>
                <TextField
                    id="standard-basic"
                    variant="standard"
                    type="date"
                    value={date}
                    onChange={handleChangeDate}
                />
            </Grid>
            <Grid item sm={1} />
            <Grid item sm={2}>
                <Button variant="contained" onClick={handleClickAdd} fullWidth>ADD</Button>
            </Grid>
        </Grid>
    )
}

export default observer(TodoForm);

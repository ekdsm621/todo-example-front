import {Button, Grid, TextField} from "@mui/material";

const TodoForm = () => {
    return (
        <Grid container>
            <Grid item sm={6}>
                <TextField id="standard-basic" placeholder="TODO" variant="standard" fullWidth/>
            </Grid>
            <Grid item sm={1} />
            <Grid item sm={3}>
                <TextField id="standard-basic" variant="standard" type="datetime-local"/>
            </Grid>
            <Grid item sm={1} />
            <Grid item sm={1}>
                <Button variant="contained">ADD</Button>
            </Grid>
        </Grid>
    )
}

export default TodoForm;

import {Grid, IconButton, List, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const TodoList = () => {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <Grid container>
                    <Grid item xs={8}>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton aria-label="delete" size="large">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="complete" size="large">
                            <CheckIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </ListItem>
        </List>
    )

}

export default TodoList;
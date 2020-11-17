import React,{useState,useEffect} from 'react'
import {Grid, TextField,makeStyles} from '@material-ui/core'
import { clsx } from 'clsx';

const initialFValues={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false,
}
const useStyle = makeStyles((theme) => ({
  root: {
    paddingLeft: "320px",
  },
  "& .MuiForm-root": {
    marginRight: theme.spacing(1),
  },
}));

function EmployeesForm() {
    const [values, setValues] = useState(initialFValues)
    const classes = useStyle()

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}  />
                    <TextField variant="outlined" label="Email" value={values.email} />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    )
}

export default EmployeesForm

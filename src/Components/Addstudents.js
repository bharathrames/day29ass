import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Addstudents = ({students, setStudents}) => {
  const history = useHistory()
 const [name, setName] = useState("")
 const [batch, setBatch] = useState("")
 const [gender, setGender] = useState("")
 const [qualification, setQualification] = useState("")

 function createstudents(){
const newStudents ={
    name,
    batch,
    gender,
    qualification
}
setStudents([...students, newStudents])
history.push("/student")
 }
  return (
    <Base
    title={"Add New Students"}
    description={"We can add new students data here"}
    >
    <div className='addTextField'>
        <TextField id="outlined-basic" label="Enter Name" variant="outlined"
        type='text'
        value={name}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Enter Batch" variant="outlined"
        type='text'
        value={batch}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setBatch(e.target.value)}
        />
        <TextField id="outlined-basic" label="Enter Gender" variant="outlined"
        type='text'
        value={gender}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setGender(e.target.value)}
        />
        <TextField id="outlined-basic" label="Enter Qualification" variant="outlined"
        type='text'
        value={qualification}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setQualification(e.target.value)}
        />{" "}
       <Button variant="contained" onClick={createstudents}>Add Students</Button>
    </div>
    </Base>
  )
}

export default Addstudents
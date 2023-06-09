import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Addteacher = ({teachers, setTeachers}) => {
    const history = useHistory()
 const [tname, setTName] = useState("")
 const [tbatch, setTBatch] = useState("")
 const [tgender, setTGender] = useState("")
 const [jobrole, setJobrole] = useState("")

 function createteachers(){
    const newStudents ={
        tname,
        tbatch,
        tgender,
        jobrole
    }
    setTeachers([...teachers, setTeachers])
    history.push("/teacher")
 }
  return (
    <Base
    title={"Add New Teachers"}
    description={"We can add new Teachers data here"}
    >
    <div className='addTextField '>
        <TextField   id="filled-basic" label="Enter Name" variant="filled"
        type='text'
        value={tname}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setTName(e.target.value)}
        />
        <TextField  id="filled-basic" label="Enter Batch" variant="filled"
        type='text'
        value={tbatch}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setTBatch(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Gender" variant="filled"
        type='text'
        value={tgender}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setTGender(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Jobrole" variant="filled"
        type='text'
        value={jobrole}
        fullWidth sx={{ m: 1 }}
        onChange={(e)=>setJobrole(e.target.value)}
        />{" "}

        <Button variant="contained"
        onClick={createteachers}
        >Add Teachers</Button>
    </div>
    </Base>
  )
}

export default Addteacher
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const UpdateStudents = ({students, setStudents, editidx}) => {
  const history = useHistory()
    const {id} = useParams()
    const editstudent = students[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

    useEffect(()=>{
       setName(editstudent.name)
       setBatch(editstudent.batch)
       setGender(editstudent.gender)
       setQualification(editstudent.qualification)
    },[editstudent])

    function updatestudent(){
     const updatedobj = {
      name,
      batch,
      gender,
      qualification
     }
     students[id] = updatedobj
     setStudents([...students])
     history.push("/student")
    }
  return (
    <Base
    title={"Edit a Students"}
    description={"We can Edit a Student data"}
    >
    <div className='addTextField'>
    <TextField id="outlined-basic" label="Enter Name" variant="outlined"
    placeholder='Enter Name'
    type='text'
    value={name}
    fullWidth sx={{ m: 1 }}
    onChange={(e)=>setName(e.target.value)}
    />
    <TextField id="outlined-basic" label="Enter Batch" variant="outlined"
    placeholder='Enter Batch'
    type='text'
    value={batch}
    fullWidth sx={{ m: 1 }}
    onChange={(e)=>setBatch(e.target.value)}
    />
    <TextField id="outlined-basic" label="Enter Gender" variant="outlined"
    placeholder='Enter Gender'
    type='text'
    value={gender}
    fullWidth sx={{ m: 1 }}
    onChange={(e)=>setGender(e.target.value)}
    />
    <TextField id="outlined-basic" label="Enter Qualification" variant="outlined"
    placeholder='Enter Qualification'
    type='text'
    value={qualification}
    fullWidth sx={{ m: 1 }}
    onChange={(e)=>setQualification(e.target.value)}
    />{" "}

    <Button variant="contained" color="success"
    onClick={updatestudent}
    >Update Students</Button>
</div>
</Base>
  )
}

export default UpdateStudents
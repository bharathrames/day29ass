import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Updateteacher = ({ teachers, setTeachers, edittidx }) => {
  const history = useHistory()
  const { idx } = useParams()
  const editteacher = teachers[idx]
  const [tname, setTName] = useState("")
  const [tbatch, setTBatch] = useState("")
  const [tgender, setTGender] = useState("")
  const [jobrole, setJobrole] = useState("")

  useEffect(() => {
    setTName(editteacher.tname)
    setTBatch(editteacher.tbatch)
    setTGender(editteacher.tgender)
    setJobrole(editteacher.jobrole)
  }, [editteacher])
  function Updateteacher() {
    const updatedobjt = {
      tname,
      tbatch,
      tgender,
      jobrole
    }
    teachers[idx] = updatedobjt
    setTeachers([...teachers])
    history.push("/teacher")
  }
  return (
    <Base
      title={"Edit a Teachers"}
      description={"We can Edit a Teachers data"}
    >
      <div className='addTextField'>
        <TextField   id="filled-basic" label="Enter Name" variant="filled"
          type='text'
          value={tname}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setTName(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Batch" variant="filled"
          type='text'
          value={tbatch}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setTBatch(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Gender" variant="filled"
          type='text'
          value={tgender}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setTGender(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Jobrole" variant="filled"
          type='text'
          value={jobrole}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setJobrole(e.target.value)}
        />{" "}

        <Button variant="contained" color='success'
          onClick={Updateteacher}
        >Update Teachers</Button>
      </div>
    </Base>
  )
}

export default Updateteacher
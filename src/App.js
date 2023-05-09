import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import Addstudents from './Components/Addstudents';
import Addteacher from './Components/Addteacher';
import UpdateStudents from './Components/UpdateStudents';
import Updateteacher from './Components/Updateteacher';
import data from './Data/Data';
import { useState } from 'react';
import Nopage from './Components/Nopage';
import Dashboard from './Components/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import teacherdata from './Data/Teacherdata';


function App() {
  const [students, setStudents] = useState(data)
  const [teachers, setTeachers] = useState(teacherdata)
  return (
    <div className="App">
      <BrowserRouter>
     <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route >

      <Route path="/student">
      <Students
         students = {students}
         setStudents = {setStudents}/>
      </Route>

      <Route  path="/add">
         <Addstudents
         students = {students}
         setStudents = {setStudents}
         />
      </Route>

      <Route  path="/edit/:id">
         <UpdateStudents
         students = {students}
         setStudents = {setStudents}
         />
      </Route>

      <Route path="/987">
        <Nopage/>
      </Route>

      <Route path="/teacher">
        <Teachers
        teachers = {teachers}
        setTeachers = {setTeachers}
        />
      </Route>

      <Route  path="/tadd">
         <Addteacher
         teachers = {teachers}
         setTeachers = {setTeachers}
         />
      </Route>
      
      <Route  path="/tedit/:idx">
         <Updateteacher
         teachers = {teachers}
         setTeachers = {setTeachers}
         />
      </Route>

     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

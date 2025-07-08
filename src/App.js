import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmpTable from './EmpTable';
import CreateEmp from './CreateEmp';
import EditEmp from './EditEmp';
import ViewDetails from './ViewDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<EmpTable/>}></Route>
      <Route path="/employee/create" element={<CreateEmp/>}></Route>
      <Route path="/employee/edit/:employee_id" element={<EditEmp/>}></Route>
      <Route path="/employee/view/:employee_id" element={<ViewDetails/>}></Route>

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;

import Header from './pages/header/header';
import './App.css';
import NoMatch from './pages/noMatch/NoMatch';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';


function App() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="*" element={<NoMatch />} />  
       <Route path="/employee" element={<PostUser />} />
        <Route path="/employee/:id" element={<UpdateUser />} />
    </Routes>
    </>
  );
}

export default App;

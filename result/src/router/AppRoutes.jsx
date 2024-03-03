import { createBrowserRouter, Route, Routes } from 'react-router-dom';
// import Analytics from '../containers/Analytics/Analytics';
import ListStudent from '../containers/Analytics/ListStudent';
import Dashboard from '../containers/Dashboard';
import StudentForm from '../containers/Inscription';

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/voirplus' element={<ListStudent/>} />
        <Route path='/inscription' element={<StudentForm />} />
    </Routes>
};

export default AppRoutes;
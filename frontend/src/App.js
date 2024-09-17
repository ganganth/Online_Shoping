import { Routes, Route } from 'react-router-dom';
import Layout from './shared/Layout';
import PersistAuth from './utils/PersistAuth';
import RequireAuth from './utils/RequireAuth';
import Home from './shared/Home';
import Login from './shared/Login';
import Register from './shared/Register';
import DashLayout from './shared/DashLayout';
import CustomerDashboard from './components/customer/CustomerDashboard';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<PersistAuth />}>
          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']} />}>
            {/* Admin page */}
            <Route path="/dash" element={<DashLayout />}>

            </Route>
            <Route path="/customerDashboard" element={<CustomerDashboard />}></Route>
          </Route>

        </Route>
      </Route>
    </Routes>
  );
}


export default App;

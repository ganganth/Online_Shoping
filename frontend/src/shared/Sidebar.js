import { useDispatch } from 'react-redux';
import { logoutAuthUser } from '../app/auth/authSlice';
import { Link } from 'react-router-dom';
import { MdDashboard, MdAccountCircle, MdOutlinePowerSettingsNew, MdSupervisedUserCircle} from "react-icons/md";



const Sidebar = () => {

    const dispatch = useDispatch();

    const currentPath = window.location.pathname;

    return (
        <aside className="dash-layout-sidebar">

            <button className='logout-btn' style={{ backgroundColor: "#232955" }} onClick={() => dispatch(logoutAuthUser())}>
                <MdOutlinePowerSettingsNew />
                Logout
            </button>

            {/* <div className='sidebar-logo' >
                <img src='/img/logo.jpg' alt='logo' style={{ borderRadius: 50, height: "100px", width: "100px" }}></img>
            </div> */}

            <nav className='sidebar-nav'>
                <ul>
                    <li>
                        <Link to='/dash'>
                            <MdDashboard />
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to='/dash/profile' className={`${currentPath === '/dash/profile' ? 'bg-white text-dark' : ''}`}>
                            <MdAccountCircle />
                            My Profile
                        </Link>
                    </li>

                    
                    <li>
                        <Link to='/dash/' className={`${currentPath === '/dash/' ? 'bg-white text-dark' : ''}`}>
                            <MdSupervisedUserCircle />
                            Product Management
                        </Link>
                    </li>
                </ul>
            </nav>

        </aside>
    );
}

export default Sidebar;
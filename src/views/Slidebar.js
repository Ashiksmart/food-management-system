import '../css/Slidebar.css';
import 'boxicons';
import { Link ,Outlet} from 'react-router-dom';

function Slidebar(props) {

    return (
<>
        <nav className='maincontent'>

            <header className="titlecontent">
                <h3>
                    Food Management System
                </h3>
                <hr />
            </header>
            <div className='listitem'>
                <div>
                    <div>
                        <Link to="/">
                            <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                            <h5>
                                Dashboard
                            </h5></Link>
                    </div>
                    <div>
                        <Link to="foods">
                            <box-icon type='solid' name='bowl-rice' color='#ffffff' ></box-icon>
                            <h5> Foods</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="favourite">
                            <box-icon name='heart-circle' color='#ffffff' ></box-icon>
                            <h5> Favourite</h5>
                        </Link>

                    </div>
                    <div>
                        <Link to="reports">
                            <box-icon name='report' type='solid' color='#ffffff' ></box-icon>
                            <h5> Reports</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="profile">
                            <box-icon name='user-detail' type='solid' color='#ffffff' ></box-icon>
                            <h5> Profile</h5>
                        </Link>

                    </div>
                    <div>
                        <Link to="order_history">
                            <box-icon name='history' color='#ffffff' ></box-icon>
                            <h5> Order History</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="notification">
                            <box-icon name='notification' type='solid' color='#ffffff' ></box-icon>
                            <h5> Notification</h5>
                        </Link>

                    </div>
                    <div>
                        <Link to="settings">
                            <box-icon name='jquery' type='logo' color='#ffffff' ></box-icon>
                            <h5> Settings</h5>
                        </Link>

                    </div>
                </div>
            </div>
            <footer>
                <hr />
                <div className='footercontent'>

                    <div>
                        User
                    </div>
                    <box-icon name='log-out-circle' color='#ffffff' ></box-icon>

                </div>
            </footer>
           
        </nav>
         <Outlet />
         </>
    )
}

export default Slidebar;
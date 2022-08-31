import '../css/Slidebar.css';
import 'boxicons';

function Slidebar(props) {

    return (

        <nav style={{  width: props.width }} className='maincontent'>

            <header className="titlecontent">
                <h3>
                    Food Management System
                </h3>
                <hr />
            </header>
            <div className='listitem'>
                <div>
                    <div>
                        <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                        <h5> Dashboard</h5>
                    </div>
                    <div>
                    <box-icon type='solid' name='bowl-rice' color='#ffffff' ></box-icon>
                        <h5> Foods</h5>
                    </div>
                    <div>
                    <box-icon name='heart-circle' color='#ffffff' ></box-icon>
                        <h5> Favourite</h5>
                    </div>
                    <div>
                    <box-icon name='report' type='solid' color='#ffffff' ></box-icon>
                        <h5> Reports</h5>
                    </div>
                    <div>
                    <box-icon name='user-detail' type='solid' color='#ffffff' ></box-icon>
                        <h5> Profile</h5>
                    </div>
                    <div>
                    <box-icon name='history' color='#ffffff' ></box-icon>
                        <h5> Order History</h5>
                    </div>
                    <div>
                        <box-icon name='notification' type='solid' color='#ffffff' ></box-icon>
                        <h5> Notification</h5>
                    </div>
                    <div>
                    <box-icon name='jquery' type='logo' color='#ffffff' ></box-icon>
                        <h5> Settings</h5>
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
    )
}

export default Slidebar;
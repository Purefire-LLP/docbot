import "./sidebar.scss"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupIcon from '@mui/icons-material/Group';
import AccessibleIcon from '@mui/icons-material/Accessible';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom"


export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">docbot</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
            <p className="title">Main</p>
                <li>
                    <DashboardCustomizeIcon className="icon"/>
                    <Link to="/" style={{ textDecoration: "none" }}><span>Dashboard</span></Link>
                </li>
                <p className="title">Users</p>
                <li>
                    <GroupIcon className="icon"/>
                    <Link to="/users" style={{ textDecoration: "none" }}><span>Users</span></Link>
                </li>
                <li>
                    <AccessibleIcon className="icon"/>
                    <Link to="/patients" style={{ textDecoration: "none" }}><span>Patients</span></Link>
                </li>
                <p className="title">Useful Links</p>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <CalendarMonthIcon className="icon"/>
                    <span>Calandar</span>
                </li>
                <li>
                    <NotificationsIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <li>
                    <AddToQueueIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <p className="title">Services</p>
                <li>
                    <MonitorHeartIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <SettingsSuggestIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <li>
                    <PersonIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

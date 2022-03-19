import "./sidebar.scss";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PieChartIcon from '@material-ui/icons/PieChart';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top"><DashboardOutlinedIcon color="primary"/><span className="dashboard" >Dashboard</span></div>
      <div className="center">
        <ul>
          <li>
            <PieChartIcon className="icons"/>
            <span>Overview</span>
          </li>
          <li>
          <ConfirmationNumberIcon className="icons"/>
            <span>Tickets</span>
          </li>
          <li>
            <WbIncandescentIcon className="icons"/>
            <span>Ideas</span>
          </li>
          <li>
            <PeopleAltSharpIcon className="icons"/>
            <span>Contacts</span>
          </li>
          <li>
            <PersonSharpIcon className="icons"/>
            <span>Agents</span>
          </li>
          <li>
            <DescriptionSharpIcon className="icons"/>
            <span>Articles</span>
          </li>
          <hr className="hr"/>
          <li>
            <SettingsIcon className="icons"/>
            <span>Settings</span>
          </li>
          <li>
            <SubscriptionsIcon className="icons"/>
            <span>Subscription</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar;
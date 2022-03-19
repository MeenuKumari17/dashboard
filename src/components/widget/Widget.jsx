import React from 'react';
import "./widget.scss";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssessmentIcon from '@material-ui/icons/Assessment';
import StoreIcon from '@material-ui/icons/Store';
import PersonAddIcon from '@material-ui/icons/PersonAdd';




const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "booking":
      data = {
        icon: <AccountBoxIcon className='booking'/>,
        title: "BOOKINGS",
        counter: "281",
        
        text: "+55%",
        sentence: "than last week"
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "user":
      data = {
        icon: <AssessmentIcon className='user'/>,
        title: "TODAY'S USERS",
        counter: "2,300",
        
        text: "+3%",
        sentence: "than last week"
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "revenue":
      data = {
        icon: <StoreIcon className='revenue'/>,
        title: "REVENUE",
        counter: "34K",
        text: "+1%",
        sentence: "than yesterday"
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "follower":
      data = {
        icon: <PersonAddIcon className='follower'/>,
        title: "FOLLOWERS",
        counter: "+91",
        text: false,
        sentence: "Just updated"
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        {data.icon}
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
      </div>
      <hr className='hr'/>
      <div className="right">
        <div className="percentage">
          <p className='text'> {data.text} </p> <p className='sentence'> {data.sentence} </p>
        </div>
      </div>
    </div>
  )
}

export default Widget;

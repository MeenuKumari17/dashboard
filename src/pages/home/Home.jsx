import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';


const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Header/>
          <div className="widgets">
            <Widget type="booking"/>
            <Widget type="user"/>
            <Widget type="revenue"/>
            <Widget type="follower"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">All Orders 442 
            <Table className="table"/>
            </div>
          </div>
          <div className="charts">
            <Featured />
            <Chart/>
          </div>
        </div>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import "./table.scss";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Users } from '../../dummyData';


const List = () => {
    

   
    
  return (
    <TableContainer component={Paper} className='table'>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'><input type="checkbox"/></TableCell>
            <TableCell className='tableCell'>ORDER</TableCell>
            <TableCell className='tableCell'>DATE</TableCell>
            <TableCell className='tableCell'>CUSTOMER</TableCell>
            <TableCell className='tableCell'>TOTAL</TableCell>
            <TableCell className='tableCell'>STATUS</TableCell>
            <TableCell className='tableCell'>ITEMS</TableCell>
            <TableCell className='tableCell'>LOCATION</TableCell>
            <TableCell className='tableCell'>PAYMENT </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Users.map((user) => (
            <TableRow key={user.order}>
              <TableCell className='checkbox'><input type="checkbox"/></TableCell>
              <TableCell className='order'>
                  <span className= {`number ${user.order}`}>{user.order}</span>
                </TableCell>
              <TableCell className='date'>{user.date}</TableCell>
              <TableCell className='customer'>
                  <span className={`name ${user.customer}`}>{user.customer}</span>
              </TableCell>
              <TableCell className='total'>
                  <span className={`bill ${user.total}`}>{user.total}</span>
              </TableCell>
              <TableCell className='status'>
                  <span className={`color ${user.status}`}>{user.status}</span>
              </TableCell>
              <TableCell className='item'>{user.items}</TableCell>
              <TableCell className='location'>
                  <div className="flag">
                      <img src={user.img} alt="" srcset="" className='image'/>
                      {user.location}
                  </div>
              </TableCell>
              <TableCell className='payment'>{user.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;

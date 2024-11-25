import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Tableanother = () => {
     const[table,setTable]=useState([])
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        setTable(resp.data)
    }).catch((err)=>{
        console.log('Error',err)
    })
},[])
  return (
    <div style={{marginTop:'40px'}}>
      <h2>Table Creation</h2>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableBody>
          {table.map((info) => (
            <TableRow
              key={info.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{info.id}</TableCell>
              <TableCell align="right">{info.name}</TableCell>
              <TableCell align="right">{info.email}</TableCell>
              <TableCell align="right">{info.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Tableanother

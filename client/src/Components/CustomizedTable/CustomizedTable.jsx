import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './CustomizedTable.css';
import cross from './cross.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, time, fat, carbs, protein, cross) {
  return { name, calories, time, fat, carbs, protein, cross };
}

const rows = [
  createData('Frozen yoghurt', 159, '5:00PM', 6.0, 'Mumbai', 'cross'),
  createData('Ice cream sandwich', 237, '5:00PM', 9.0, 'Mumbai', 'cross'),
  createData('Eclair', 262, '5:00PM', 16.0, 'Mumbai', 'cross'),
  createData('Cupcake', 305, '5:00PM', 3.7, 'Mumbai', 'cross'),
  createData('Gingerbread', 356, '5:00PM', 16.0, 'Mumbai', 'cross'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ border: 'none' }} className="tablecontainer">
      <Table className="tablechild" sx={{ minWidth: '99%', maxWidth: '100%', height: '60vh', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', border: 'none', backgroundColor: 'Whitesmoke' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Appointment</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Cost(g)</StyledTableCell>
            <StyledTableCell className="locationtable" align="right">Location(g)</StyledTableCell>
            <StyledTableCell className="crosstable crossdiv" align="center">Cancel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow className="apptrow" key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center" className="crossdiv"><img className="cross" src={cross}></img>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
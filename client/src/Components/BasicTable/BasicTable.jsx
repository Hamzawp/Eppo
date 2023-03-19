import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FaStar } from 'react-icons/fa'

const columns = [
  { field: 'id', headerName: 'Sr. No', width: 110 },
  {
    field: 'firstName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  { field: 'date', headerName: 'Date', width: 150 },
  {
    field: 'number',
    headerName: 'Number',
    type: 'number',
    width: 130,
  },

];

const rows = [
  { id: 1, date: '15 Jan', firstName: 'Jon', number: 35 },
  { id: 2, date: '15 Jan', firstName: 'Cersei', number: 42 },
  { id: 3, date: '15 Jan', firstName: 'Jaime', number: 45 },
  { id: 4, date: '15 Jan', firstName: 'Arya', number: 16 },
  { id: 5, date: '15 Jan', firstName: 'Daenerys', number: 21 },
  { id: 6, date: '15 Jan', firstName: 'null', number: 150 },
  { id: 7, date: '15 Jan', firstName: 'Ferrara', number: 44 },
  { id: 8, date: '15 Jan', firstName: 'Rossini', number: 36 },
  { id: 9, date: '15 Jan', firstName: 'Harvey', number: 65 },
];

export default function BasicTable() {
  return (
    <div style={{ height: 400, width: '55%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pnumberSize={5}
        rowsPerPnumberOptions={[5]}
      // checkboxSelection
      />
    </div>
  );
}

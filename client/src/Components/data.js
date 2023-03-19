import { FaCheck } from 'react-icons/fa'

export const columns = [
    {
        id: 1,
        name: 'Sr. No',
        selector: row => row.srno,
        sortable: true
    },
    {
        id: 2,
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    {
        id: 3,
        name: 'Date',
        selector: row => row.date,
        sortable: true
    },
    {
        id: 4,
        name: 'Number',
        selector: row => row.number,
        sortable: true
    },
    {
        id: 5,
        name: 'Checked',
        cell: (row) => (
            <div className="accDecBtn">
            <button className='accbtn'><FaCheck /></button>
            <button className='decbtn'>X</button>
            </div>

      )
    },
  ]

export const column = [
    {
        id: 1,
      name: 'Sr. No',
      selector: row => row.srno,
      sortable: true
    },
    {
        id: 2,
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
        id: 3,
      name: 'Date',
      selector: row => row.date,
      sortable: true
    },
    {
        id: 4,
      name: 'Number',
      selector: row => row.number,
      sortable: true
    },
    {
        id:5,
      name: 'Checked',
      cell: (row) => (
        <div className="accDecBtn">
          <button className='decbtn'>X</button>
        </div>

      )
    },
  ]

export const data = [
    {
      id: 1,
      srno: 15,
      name: 'test',
      date: '15 Jan',
      number: '784523'
    },
    {
      id: 2,
      srno: 11,
      name: 'test',
      date: '15 Jan',
      number: '784523'
    },
    {
      id: 3,
      srno: 26,
      name: 'test',
      date: '15 Jan',
      number: '784523'
    },
    {
      id: 4,
      srno: 37,
      name: 'test',
      date: '15 Jan',
      number: '784523'
    },
    {
      id: 5,
      srno: 45,
      name: 'test',
      date: '15 Jan',
      number: '784523'
    },
  ]
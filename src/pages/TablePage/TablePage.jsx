import React from 'react';
import './TablePage.css';
import { DataGrid } from '@material-ui/data-grid';

function TablePage() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 150,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 300,
        },
        {
          field: 'position',
          headerName: 'Work Designation',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 300,
        },
        {
          field: 'hobby',
          headerName: 'Hobbies',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 300,
        },
      ];

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,position:'Intern' ,hobby:'Story writing'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,position:'Deputy-Manager' ,hobby:'Story writing'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,position:'Sales-Manager' ,hobby:'Story writing'},
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,position:'Marketing Head',hobby:'Sports'},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 22 ,position:'Intern' ,hobby:'Sports'},
        { id: 6, lastName: 'Melisandre', firstName: 'Dorthi', age: 150 ,position:'CEO',hobby:'Sports'},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,position:'Marketing Head',hobby:'Story writing'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,position:'Intern',hobby:'Sports'},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,position:'Director',hobby:'Story writing'},
        { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 ,position:'Deputy-Manager',hobby:'Sports'},
        { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,position:'Sales-Manager',hobby:'Sports'},
        { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,position:'Intern',hobby:'Sports'},
        { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 ,position:'Marketing Head',hobby:'Story writing'},
        { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: 22 ,position:'Sales-Manager',hobby:'Sports'},
        { id: 15, lastName: 'Melisandre', firstName: 'Dorthi', age: 150 ,position:'Deputy-Manager',hobby:'Story writing'},
        { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,position:'Director',hobby:'Sports'},
        { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 ,position:'Intern',hobby:'Story writing'},
        { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,position:'Deputy-Manager',hobby:'Story writing'},
      ];

    return (
        <div>
            <div className="homeTitle">
                <h2 className="dashboardTitle">Tables</h2>
            </div>
            <div className="tableWrapper">
            <div className="tableTitle">DATATABLES EXAMPLE</div>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
            />
            </div>
        </div>
    )
}

export default TablePage;

import react from 'react';
import MaterialTable from 'material-table';
//import { useGetResearch } from '../hooks/useGetResearch';
import Button from '@material-ui/core/Button';
//import reporte from './pdfreport';

export default function ListHtsTable() {

    const idcliente = "abcdef"
   // const { data, loading } = useGetResearch(idcliente)


    const columnas = [

        {
            title: 'HTS Number',
            field: 'keyword'
        },
        {
            title: 'Description',
            field: 'fecha'
        },
        {
            title: 'Duties',
            field: 'fecha'
        },
        {
            title: 'Country Origin',
            field: 'fecha'
        },
        {
            title: 'Date Creation',
            field: 'keyword',
            render: rowData => <Button  variant="contained" color="secondary">Generate Report</Button>
        },
        {
            title: 'Details',
            field: 'fecha'
        },
            
  
        
    
    ];

    const data =[];

    return (


        <> 

          <MaterialTable
          
             title = ""
             columns = {columnas}
             data = {data}
          >

          </MaterialTable>

        </>




    );


}
import react from 'react';
import MaterialTable from 'material-table';
import { useGetResearch } from '../hooks/useGetResearch';
import Button from '@material-ui/core/Button';
//import reporte from './pdfreport';

export default function ListResearchApp() {

    const idcliente = "abcde"
    const { data, loading } = useGetResearch(idcliente)


    const columnas = [

        {
            title: 'KeyWord',
            field: 'keyword'
        },
        {
            title: 'Date Creation',
            field: 'fecha'
        },
        {
            title: 'Date Creation',
            field: 'keyword',
            render: rowData => <Button onClick={reporte()} variant="contained" color="secondary">Generate Report</Button>
        }
            
  
        
    
    ];

    const dato =[];

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
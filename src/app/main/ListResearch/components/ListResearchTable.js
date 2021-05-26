import react from 'react';
import MaterialTable from 'material-table';
import { useGetResearch } from '../hooks/useGetResearch';


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
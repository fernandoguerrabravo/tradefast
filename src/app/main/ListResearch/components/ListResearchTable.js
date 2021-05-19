import react from 'react';
import MaterialTable from 'material-table';

export default function ListResearchApp() {

    const columnas = [

        {
            title: 'KeyWord',
            field: 'Keword'
        },
        {
            title: 'Date Creation',
            field: 'date'
        },
        {
            title: 'Details',
            field: 'details'
        },
        
    ];

    const data =[];

    return (



        <> 

          <MaterialTable

             columns = {columnas}
             data = {data}
          >

          </MaterialTable>

        </>




    );


}
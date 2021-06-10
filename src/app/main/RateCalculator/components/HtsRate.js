import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import react from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';





const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },



}));

export default function HtsRate({ setencabezado }) {

    /*  const idcliente = "abcde"
      const { data, loading } = useGetQuoation(idcliente)
      const classes = useStyles();
  
      const [datos, setDatos] = useState({
  
          country: '',
          hts: '',
  
  
      }); */

    const columnas = [

        {
            title: 'Reference',
            field: 'keyword'
        },

        {
            title: 'Destination',
            field: 'fecha'
        },
        {
            title: 'Total FOB',
            field: 'keyword',

        },
        {
            title: 'Total Kg',
            field: 'keyword',

        },
        {
            title: 'Volume (M3)',
            field: 'keyword',

        },
        {
            title: 'Shipping Cost',
            field: 'keyword',

        },

    ];

    const data = [];

    const actions = [
        {
            icon: () => <SaveOutlinedIcon color="primary" fontSize="large" />,
            tooltip: 'Select HTS Number',
            onClick: (event, rowData) => detailhts(rowData.htsno, rowData.general, rowData.special)
        }
    ];

    return (

        <>

            <MaterialTable
                columns={columnas}
                data={data}
                title="Select a HTS Classification"
                components={{
                    Toolbar: props => (
                        <div style={{ backgroundColor: 'primary' }}>
                            <MTableToolbar {...props} />
                            <div style={{ padding: '20px 20px' }}>
                                <Button variant="contained" color="secondary">+ New Classification</Button>
                            </div>
                        </div>
                    )
                }}
            >
            </MaterialTable>

        </>


    )
}





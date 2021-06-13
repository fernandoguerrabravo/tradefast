
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import react from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { useGetQuotations } from '../hooks/useGetQuotations';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { useGetQuotationsbyid } from '../hooks/useGetQuotationsbyid';
import { GetQuotationsbyid } from '../helpers/GetQuotationsbyid';


const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },


}));

export default function InfoRate({ setquotation }) {

    const idcliente = "abcdef";

    const { data } = useGetQuotations(idcliente)

    const classes = useStyles();

    const detailrates = (e) => {


        setquotation({

            id_details: e,
            hidden3: true

        })

    }


    const columnas = [

        {
            title: 'Reference',
            field: 'ref'
        },

        {
            title: 'Origin',
            field: 'origin'
        },

        {
            title: 'Destination',
            field: 'destination'
        },
        {
            title: 'Carrier',
            field: 'carrier'
        },
        {
            title: 'FOB (USD)',
            field: 'final_quotation.total_fob'
        }, {
            title: 'Boxes',
            field: 'final_quotation.total_packages'
        },

        {
            title: 'Kg',
            field: 'final_quotation.total_kg'
        },
        {
            title: 'Vol (m3)',
            field: 'final_quotation.total_volume'
        },
        {
            title: 'Shipping Cost',
            field: 'final_quotation.final_rate'
        }

    ];

    const actions = [
        {
            icon: () => <RemoveRedEyeIcon color="primary" fontSize="large" />,
            tooltip: 'Select Quotation',
            onClick: (event, rowData) => detailrates(rowData._id)
        }
    ];

    return (

        <>
            <MaterialTable
                columns={columnas}
                data={data}
                actions={actions}
                title="Select a Shipping Quotation"
                components={{
                    Toolbar: props => (
                        <div style={{ backgroundColor: 'primary' }}>
                            <MTableToolbar {...props} />
                            <div style={{ padding: '20px 20px' }}>
                                <Button variant="contained" color="secondary">+ New Quotation</Button>
                            </div>
                        </div>
                    )
                }}
            >
            </MaterialTable>
        </>

    )
}





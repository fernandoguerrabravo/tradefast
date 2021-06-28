import react from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import { useGetSku } from '../hooks/useGetSku';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link, Redirect } from 'react-router-dom'



export default function SkuListTable({ setskudetails }) {

    const idcliente = "abcdef"
    // const { data, loading } = useGetResearch(idcliente)


    const details = (event) => {

        setskudetails({

            skunumber: event,
            hidden: false
        })

    }


    const { data } = useGetSku(idcliente)

    console.log("datos para tabla:", data);

    const columnas = [

        {
            title: 'SKU',
            field: 'sku'
        },
        {
            title: 'Short Description',
            field: 'shortdescription'
        },
        {
            title: 'Country Origin',
            field: 'country_origin'

        },


        {
            title: 'Date Creation',
            field: 'fecha_creacion'

        },


    ];

    const actions = [

        {
            icon: () => <RemoveRedEyeIcon color="primary" fontSize="large" />,
            tooltip: 'View Details',
            onClick: (event, rowData) => details(rowData.sku)
        }
    ];

    //const dato = [];

    return (


        <>

            <MaterialTable

                title="Products Details"
                columns={columnas}
                data={data}
                actions={actions}
                components={{
                    Toolbar: props => (
                        <div style={{ backgroundColor: 'primary' }}>
                            <MTableToolbar {...props} />
                            <div style={{ padding: '20px 20px' }}>
                                <Link
                                    role="button"
                                    to="/skustore"
                                >
                                    <Button variant="contained" color="secondary">+ New Product</Button>
                                </Link>
                            </div>
                        </div>
                    )
                }}
            >

            </MaterialTable>

        </>




    );


}
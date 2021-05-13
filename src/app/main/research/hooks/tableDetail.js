import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function BasicTable({detalle, detalle_2}) {
    
    console.log("DETALLES:");
    console.log(detalle_2);
   
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>Rank:</TableCell>
              <TableCell>{detalle.rank}<br></br>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Model:</TableCell>
              <TableCell> {detalle.model}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Estimated Monthly Sales / Revenue:</TableCell>
              <TableCell>  {detalle_2.estimada} Units //  USD {detalle_2.revenue}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Brand:</TableCell>
              <TableCell> {detalle.brand}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight/Dimensions</TableCell>
              <TableCell>{detalle.dimensions}/{detalle.peso}<b></b>
                          
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Avialable Since</TableCell>
              <TableCell> {detalle.desde}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


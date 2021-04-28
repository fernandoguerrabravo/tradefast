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

export default function BasicTable(event) {
    
    console.log("DETALLES:");
    console.log(event);
   
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
              <TableCell> # {event.details.event.rank_0} in {event.details.event.category_0}<br></br>
              {event.details.event.rank_1 ? '#' : ""} {event.details.event.rank_1} {event.details.event.rank_1 ? "in " : ""} {event.details.event.category_1}<br></br>
              {event.details.event.rank_2 ? '#' : ""} {event.details.event.rank_2} {event.details.event.rank_2 ? "in " : ""} {event.details.event.category_2}<br></br>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Model:</TableCell>
              <TableCell> {event.details.event.model}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Manufacturer:</TableCell>
              <TableCell> {event.details.event.manufacturer}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Brand:</TableCell>
              <TableCell> {event.details.event.brand}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight/Dimensions</TableCell>
              <TableCell> {event.details.event.weight}<b></b>
                          {event.details.event.dimensions}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Avialable Since</TableCell>
              <TableCell> {event.details.event.available}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


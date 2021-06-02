import react from 'react';
import MaterialTable from 'material-table';
import {PDFViewer, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const MyDoc = () => (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const Reporte = () => (
  
  <PDFViewer>
    <MyDocument />
  </PDFViewer>

);

ReactDOM.render(<Reporte />, document.getElementById('root'));



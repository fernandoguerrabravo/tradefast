import React, { useState } from 'react';
import { Document, Page, View, Text, StyleSheet, Image, Canvas } from "@react-pdf/renderer";
import { makeStyles } from '@material-ui/core/styles';


// Create styles


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {

    margin: 3,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Helvetica'
  },

  image: {

    width: 140,
    height: 60,
    marginLeft: 180,
    marginBottom: 20,

  },
  header: {
    fontSize: 12,
    marginBottom: 2,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  emphasis: { fontFamily: 'Helvetica-Bold', color: '#EB9E4B' },

  border: {

    border: 1,
    padding: 8,
    borderColor: '#EB9E4B',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },

  border2: {

    border: 1,
    padding: 8,
    borderColor: '#242F3C',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },

  image2: {

    width: 80,
    height: 80,

  },

  text2: {

    fontSize: 8,
    textAlign: 'justify',
    fontFamily: 'Helvetica'
   
  },
  text3: {

    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,

  },
  row: { display: "flex", flexDirection: "row", fontSize: 10, width: 550 },
  column: { display: "flex", flexDirection: "column", flexGrow: 2 },

});




const SampleDocument = ({ contenido, pdf }) => {

  console.log("contenido", contenido)

  const min = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(pdf.min)
  const average = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(pdf.average)
  const max = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(pdf.max)

  const image = {
    uri: 'https://fotos-ecl.s3.amazonaws.com/logos-global-selling/logo_white_background.jpg',
    method: 'GET',
    headers: {},
    body: ''
  };


  return (

    <Document>
      <Page style={styles.body} wrap>

        <Text style={styles.header} fixed>
          ~ Product Research Tools ~ </Text>
        <Image style={styles.image} src={image} fixed />

        <View style={styles.border}>
          <Text style={styles.text}><Text style={styles.emphasis}>SKU Reference: </Text> {pdf.sku}</Text>
          <Text style={styles.text}><Text style={styles.emphasis}>Min Sell Price: </Text> {min}</Text>
          <Text style={styles.text}><Text style={styles.emphasis}>Average Sell Price: </Text> {average}</Text>
          <Text style={styles.text}><Text style={styles.emphasis}>Max Sell Price: </Text> {max}</Text>
        </View>


        {contenido.map(

          (image, key) =>

            <View style={styles.border2} key={key} wrap={false}>

              <Text style={styles.text3}>{image.detalles.title}</Text>

              <View style={styles.row}>
                <View style={styles.column}>
                  <Image style={styles.image2} src={image.detalles.imagen} />
                </View>
                <View style={styles.column}>
                  <Text style={styles.text2}>{image.asin}</Text>
                  <Text style={styles.text2}>{image.detalles.model}</Text>
                  <Text style={styles.text2}>{image.detalles.brand}</Text>
                  <Text style={styles.text2}>{image.detalles.seller}</Text>
                  <Text style={styles.text2}>{image.detalles.peso}</Text>
                  <Text style={styles.text2}>{image.detalles.dimensions}</Text>
                  <Text style={styles.text2}>{image.detalles.precio}</Text>
                </View>
              </View>


            </View>

        )}


      </Page>
    </Document>

  );
};

export default SampleDocument;
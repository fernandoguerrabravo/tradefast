import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const SampleDocument = () => {

  const image = {
    uri: 'https://images-na.ssl-images-amazon.com/images/I/71v2R4QZ-UL.jpg',
    method: 'GET',
    headers: { },
    body: ''
  };

  return (
      
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <View>
          <Image
            src={image} />
        </View>
      </Page>
    </Document>
  );
};

export default SampleDocument;
// Import dependency.
const { connectToDatabase } = require('./connect-to-mongodb')
const fetch = require('node-fetch');

var myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");

const getAsins = async (event) => {
  const { id_cliente, sku } = event
  const client = await connectToDatabase()
  const db = await client.db('globalselling')
  const research = db.collection('sku_sellers')
  const filter = { id_cliente, sku}
  return new Promise((resolve, reject) => {
    research.find(filter).toArray((err, results) => {
      if (err) {
        reject(err)
      } else {
        const asins = results[0].research.map(o => o.id)
        resolve(asins)
      }
    })
  })
}

function addObject(collection, object) {
    
     collection.insert(object, function(err,result) {
          if(!err) {
             console.log("inserted : ");
             console.log(result);
          }

     });
 } 

import json
import pymongo
from pymongo import MongoClient
from bson import json_util

def lambda_handler(event, context):
  
    cliente = event['idcliente']
    sku = event['sku']
    # conexión
    con = MongoClient('mongodb://root:zZYGZg1Mqc7G@ip-172-31-66-65.ec2.internal',27017)
    db = con.globalselling
     
    # colección
    cuentas = db.sku_sellers

    projection = {
        
            "average" : 1, 
            "min" : 1, 
            "max" : 1,
            "average": 1,
            "keyword" : 1,
            "sku": 1,
            "research" : 1,
            "report": 1,
            "_id" : 0
            
            
        
    }
     
    resultado = cuentas.find({"id_cliente":cliente, "res": True }, projection)
    res = []
    salida = json.loads(json_util.dumps(resultado))
    
    for i in range(0,len(salida)):
        
         res.append(salida[i])
    
    return  res
        
    

    import json
import boto3
 
# Define the client to interact with AWS Lambda
client = boto3.client('lambda')
 
def lambda_handler(event,context):
 
    # Define the input parameters that will be passed
    # on to the child function
    inputParams = {
       "asin": "B08D75P512"
    }
        

    response = client.invoke(
        FunctionName = 'arn:aws:lambda:us-east-1:850033265654:function:amazon_api2_details',
        InvocationType = 'RequestResponse',
        Payload = json.dumps(inputParams)
    )
 
    responseFromChild = json.load(response['Payload'])
 
    print('\n')
    print(responseFromChild)




// Import dependency.
const { connectToDatabase } = require('./connect-to-mongodb')
const fetch = require('node-fetch');

var myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");

const getAsins = async (event) => {
  const { id_cliente, sku } = event
  const client = await connectToDatabase()
  const db = await client.db('globalselling')
  const research = db.collection('sku_sellers')
  const filter = { id_cliente, sku}
  return new Promise((resolve, reject) => {
    research.find(filter).toArray((err, results) => {
      if (err) {
        reject(err)
      } else {
        const asins = results[0].research.map(o => o.id)
        resolve(asins)
      }
    })
  })
}

function addObject(collection, object) {
    
     collection.insert(object, function(err,result) {
          if(!err) {
             console.log("inserted : ");
             console.log(result);
          }

     });
 } 



module.exports.handler = async function(event, context) {
 
 
const asins = await getAsins(event);
 
context.callbackWaitsForEmptyEventLoop = false;
// Conexion a la base de datos 
const client = await connectToDatabase();
// Nos conectamos a la base de datos requerida
const db = await client.db("globalselling");
// Agrega una true en que define que el sku ya se generó el reporte de detalles
 
 var myquery = { sku : event.sku };
 var newvalues = { $set: {report: true} };
 await db.collection("sku_sellers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    
  }); 
 
 //--------- //
 
// nos conectamos a la coleccion de los datos que queremos manejar
  
  const detalle = db.collection("researchdetails");

for (const asin of asins) {
   
    const response = await fetch(
      'https://210eostkx0.execute-api.us-east-1.amazonaws.com/dev/miapi',
      {
        method: 'POST',
        headers: myHeaders,
        body:  JSON.stringify({ asin }),
        redirect: 'follow'
      }
    );
    const dataToReturn = await response.json();
    console.log(dataToReturn)
    const object = {
      
        "id_cliente" : event.id_cliente,
        "sku" : event.sku,
        "asin" : asin,
        "detalles":dataToReturn
    }
    
    await addObject(detalle, object);
    
  }  
  
  return asins
  
};


myquery = { "address": "Valley 345" }
newvalues = { "$set": { "address": "Canyon 123" } }

mycol.update_one(myquery, newvalues)
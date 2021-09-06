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
            "report": 1      
        
    }
     
    resultado = cuentas.find({"id_cliente":cliente, "res": True }, projection)
    res = []
    salida = json.loads(json_util.dumps(resultado))
    
    for i in range(0,len(salida)):
        
         res.append(salida[i]['id'])
    
    return  res
        
        
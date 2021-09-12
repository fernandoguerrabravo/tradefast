import json
import pymongo
from pymongo import MongoClient
from bson import json_util



def lambda_handler(event, context):
    
    # conexión base de datos
    con = MongoClient('mongodb://root:zZYGZg1Mqc7G@ip-172-31-66-65.ec2.internal',27017)
    db = con.globalselling
    
    # colección
    collection = db.sku_sellers
    
    # Buscar por el filtro los SKUS ya con su clasificacion realizada
    
    myquery = { "hts" : True , "id_cliente" : event['id_cliente']}
    
    # Muestra solo los campos que necesitamos
    
    projection = {
        
            "shortdescription" : 1, 
            "sku" : 1,
            "country_origin": 1,
            "sku": 1,
            "htsclas" : 1,
            "_id" : 0
      
    }
    
    resultado = collection.find(myquery, projection)

    salida = json.loads(json_util.dumps(resultado))

    res = []

    for i in range(0,len(salida)):
        
         res.append(salida[i])
    
    return  res
   



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
    
    # insertar en la base de datos el true al sku 
    myquery = { "sku" : event['sku'], "id_cliente" : event['idcliente']}
    newvalues = { "$set": {"htsclas": event['htsdetails'] , "hts": True}}

    resultado = collection.update_one(myquery,newvalues)
    
    return  event['htsdetails']
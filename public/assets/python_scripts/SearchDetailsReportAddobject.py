import json
import pymongo
from pymongo import MongoClient
from bson import json_util


def lambda_handler(event, context):
     # conexión base de datos
    con = MongoClient('mongodb://root:zZYGZg1Mqc7G@ip-172-31-66-65.ec2.internal',27017)
    db = con.globalselling
    # colección
    collection = db.researchdetails
    
    # insertar en la base de datos objeto
    
    salida = json.loads(json_util.dumps(event))

    resultado = collection.insert_one(salida)
    
    return  event


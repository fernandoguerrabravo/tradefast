# importar librerias
import json
import mysql.connector
import math

def lambda_handler(event, context):
    
    mydb = mysql.connector.connect(
        
        host="database-2.cevryruqktgv.us-east-1.rds.amazonaws.com",
        user="admin",
        password="danilo$123$",
        port = "3306",
        database = 'globalselling'
        
        )
   
      
    ## Calculo de ultima mila
    
    ## Obtencion de la zona considerando el ZIP de destino para calcular tarifa ultima milla 
    
    parametro = 'Vitamin'
    
    
    mycursor = mydb.cursor()
     
    sql = "SELECT * FROM hts8 WHERE brief_description LIKE %s"
    code = ('%' + parametro + '%',)
    mycursor.execute(sql, code)
    res = []
    myresult = mycursor.fetchall()
      
    for x in myresult:
        
           res.append({'hts8': x[0],'description': x[1], 'general' : x[5], 'advrate': x[8], 'specific':x[9], 'fta': x[11]})
           
    
    return myresult
    
      
    

resultado = lambda_handler({"text":"vitamin c"},"test")
print(resultado)



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
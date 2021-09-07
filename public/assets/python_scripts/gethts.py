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
    
    parametro = 'Mule'
    
    
    mycursor = mydb.cursor()
    
    sql = "SELECT * FROM hts8 WHERE brief_description LIKE %s"
    code = ('%' + parametro + '%',)
    mycursor.execute(sql, code)
    res = []
    myresult = mycursor.fetchall()
      
    for x in myresult:
        
           res.append({'hts8': x[0],'description': x[1], 'general' : x[5], 'advrate': x[8], 'specific':x[9], 'fta': x[11]})
           
    
    return res
    
      
    

resultado = lambda_handler({"text":"vitamin c"},"test")
print(resultado)
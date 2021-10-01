# importar librerias
import json
import mysql.connector
import math

def lambda_handler(event, context):
    
    
    ## Conexion a la base de datos Mysql
    
    mydb = mysql.connector.connect(
        
        host="database-2.cevryruqktgv.us-east-1.rds.amazonaws.com",
        user="admin",
        password="danilo$123$",
        port = "3306",
        database = 'globalselling'
        
        )
     
    ## Calculo de la Primera Pierna
    
    codigo_fba = "PHX5"
    fedex_warehouse = '2300'
    qty_pallets = 1
    
    
    mycursor = mydb.cursor()
     
    sql = "SELECT * FROM MXLeg1 WHERE ZIP = %s"
    code = (fedex_warehouse, )

    mycursor.execute(sql, code)
    ##res = []
    myresult0 = mycursor.fetchall()
     
    for x in myresult0:
            
            rates = (x[qty_pallets + 3])
           
   
    ## Calculos de Transbordo
    
    sql = "SELECT * FROM MXSpecial"
    mycursor.execute(sql)
    res = []
    myresult = mycursor.fetchall()
    
    # Calculos de Ultima Milla
    
    sql = "SELECT * FROM MXLeg2 WHERE FBA = %s"
    code = (codigo_fba, )
    mycursor.execute(sql,code)
    res = []
    myresult1 = mycursor.fetchall()
    for x in myresult1:
            
            rates2leg = (x[qty_pallets + 6])
    
    
    data = {
        
        "First_Leg " : rates,
        "Second_Leg":  rates2leg,
        "Handling_In" : myresult[0][1]*qty_pallets,
        "Handling_Out": myresult[1][1]*qty_pallets,
        "Order_Proccesing": myresult[2][1]*qty_pallets,
        "MX_Customsr" : myresult[9][1],
        "US_Customs" : myresult[10][1]
        
        }
    
    print(data)
    

resultado = lambda_handler("test","test")
print(resultado)          
    
    
      
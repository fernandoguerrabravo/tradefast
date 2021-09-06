import json
import boto3

# Define the client to interact with AWS Lambda
client = boto3.client('lambda')
# Function to obtain asins of specific sku


def getasins(event):
    idcliente = event['idcliente']
    sku = event['sku']
    inputParams = {
        "id_cliente": idcliente,
        "sku": sku
    }
    response = client.invoke(
        FunctionName='arn:aws:lambda:us-east-1:850033265654:function:asin_search',
        InvocationType='RequestResponse',
        Payload=json.dumps(inputParams)
    )
    responseFromChild = json.load(response['Payload'])
    return responseFromChild


def addObject(event):
    response = client.invoke(
        FunctionName='arn:aws:lambda:us-east-1:850033265654:function:SearchDetailsReportAddobject-python',
        InvocationType='RequestResponse',
        Payload=json.dumps(event)
    )
    responseFromChild = json.load(response['Payload'])
    return responseFromChild


def lambda_handler(event, context):
    
    #llama a la funcion asins para obtener todos los asin del research del sku que a buscar 
    asins = getasins(event)
    #asigna el valor tru a la variable report para indicar que se realizo la gneracion de detalles para este sku
    response = client.invoke(
        FunctionName='arn:aws:lambda:us-east-1:850033265654:function:SearchDetailReportAddTrue-python',
        InvocationType='RequestResponse',
        Payload=json.dumps({"sku": event['sku']})
    )
    #con los asin buscamos uno por uno al detalle y los metemos a la base de datos para guardarlos
    for x in asins:
      response = client.invoke(
        FunctionName='arn:aws:lambda:us-east-1:850033265654:function:product_details',
        InvocationType='RequestResponse',
        Payload=json.dumps({"asin": x})
      )
      responseFromChild = json.load(response['Payload'])
      #guardo los resultados en la base de datos de cada detalle
      object = {
        "idcliente" : event['idcliente'],
        "sku" : event['sku'],
        "asin" : x,
        "detalles": responseFromChild
      }
      addObject(object)

    return asins



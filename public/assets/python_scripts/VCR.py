#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Nov  4 14:26:40 2021

@author: fernandoguerra
"""


#Variables

vcr=0  #Valor del contenido regional expresado como porcentaje
vt = 0 #valor de transaccion del bien, ajustado sobre la base de LAB
vmn = 0 #valor de los materiales no originarios utilizados por el productor en la produccion del bien
cn = 0 #costos neto del bien



#Metodo del valor de Transaccion

vcr = (vt-vmn)/vt

#metodo del valor de Costo Neto

vcr = (cn - vmn)/cn



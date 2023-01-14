'''Diseña un algoritmo en el que se ingrese 2 digitos para restarlos
y el programa los contabilice y los acumule usando el while. Ingresar la letra s para salir del bucle.'''
cont=0
acum=0
n="a"
while(n!="s"):
    num1=int(input("Ingrese Primer numero: "))
    num2=int(input("Ingrese Segundo numero: "))
    resta=num1-num2
    cont=cont+1
    acum=acum+resta
    print("la resta es: ",resta)
    n=input("¿desea continuar? si[a]  No[s]: ")
    print("")

print("Se han realizado ",cont," restas")
print("La suma de las restas es:",acum)
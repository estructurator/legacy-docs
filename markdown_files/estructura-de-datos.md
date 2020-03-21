# Estructuras de datos

Los tipos de datos abstractos son una colección de datos cuya organización se caracteriza por las funciones definidas utilizadas para almacenar y acceder a elementos individuales de datos [(Fernandez y Fernandez, pág. 5)](http://www.utm.mx/~caff/doc/Notas%20de%20Estructura%20de%20datos.pdf).


## Listas Simples

>Atajo en el Editor: <code>ls</code> + <kbd>TAB</kbd> 

Una lista simple es una secuencia de nodos, donde el primer nodo tiene un campo donde almacena la dirección de un _siguiente_ nodo, de su mismo tipo, y así sucesivamente hasta el último nodo, el cual almacena NULO en su campo. El primer nodo de una lista simple es comúnmente llamado _cabeza_, y puede ser accedido desde un __apuntador__ (llamado comúnmente PTR), que debe almacenar siempre la direción de memoria de dicha cabeza.

Gráficamente, la lista simple se peude ver, de forma abstracta, así:

![ListaSimple](http://i.imgur.com/0F8WpLe.png)

Y así es comúnmente como lo vemos en los textos.

## Lista Doble

>Atajo en el Editor: <code>ld</code> + <kbd>TAB</kbd> 

Una lista doble tiene las mismas caracterízticas que una lista simple, la diferencia aquí es que cada nodo no solo almacena la información al _siguiente_ nodo, sino también al _anterior_. Cabe resaltar que el nodo _cabeza_ apunta en _anterior_ hacia NULO, así como lo hace normalmente en la lista simple el _siguiente_ del último nodo.

![ListaDoble](http://i.imgur.com/UW1O0Yf.png)


## Lista Circular

>Atajo en el Editor: <code>lc</code> + <kbd>TAB</kbd> 

La lista circular es igual que la lista simple, pero cambia el hecho de que, el ultimo nodo apunta hacia el nodo cabeza:

![ListaCircular](http://i.imgur.com/O4uh2LS.png)

Nótese que ningún nodo apunta en __siguiente__ a NULO. 


## Lista Circular Doble

>Atajo en el Editor: <code>lcd</code> + <kbd>TAB</kbd> 

La lista circular doble es la implementación de lista doble en la lista circular:

![ListaCircularDoble](http://i.imgur.com/v54nAkq.png)








EN CONSTRUCCIÓN...
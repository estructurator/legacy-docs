
ESTRUCTURATOR© interpreta un pseudolenguaje en español, basado fuertemente en el pseudolenguaje utilizado en [PSEInt](http://pseint.sourceforge.net/).

##Caracteristicas

* Está en Español
* Fácil de entender
* Puedes usar estructuras condicionales, cíclicas
* Definición de funciones
* Arreglos 
* Tipado dinámico

 
## Salida/impresión

>Atajo en el Editor: <code>imp</code> + <kbd>TAB</kbd> 


la instrucción `imprimir` permite hacer salida de textos y/o variables a la _terminal_:

```ed1
imprimir "Hola mundo"
```

Para concatenar puedes usar `+`  (en la sentencia `imprimir` tambien puedes concatenar con `,`):

```ed1
imprimir "Tu nombre es " + nombre
imprimir "Tu edad es " , edad
```

__NOTA__: La impresión anterior va a salir en una sola línea. Para hacer saltos de línea debes usar el caracter `\n`


```ed1
imprimir "Tu nombre es " + nombre + "\n"
imprimir "Tu edad es " , edad , "\n"
```

## Entrada/lectura

>Atajo en el Editor: <code>leer</code> + <kbd>TAB</kbd> 

la instrucción `leer` permita solicitar al usuario que ingrese una entrada del teclado. Puede ingresar números o texto:

```ed1
leer nombre
```

![Leer variable](http://i.imgur.com/mLOgFvL.png)

## Asignación

Para asignar un valor a una variable, basta con:

```ed1
nombre = "Eddard Stark"
edad = 35
```

No se requiere definir las variables con anticipación.
Como dije antes, el pseudolenguaje es de tipado dinámico.

## Asignación con operación

Aquí no existen los famosos operadores de incremento/decremento (Ej: `a++`, `--edad`, etc), pero puedes realizar un incremento o un decremento usando la asignación con un simbolo de operación antes:

```ed1
edad += 1 // ó edad = edad + 1
vida -= 1 // ó vida = vida - 1
hijos /= 2 // ó hijos = hijos / 2
caminos *= 2 // ó caminos = caminos * 2
par %= 2 // ó par = par%2
```

## Vectores

```ed1
hijos = vector(6)
```

Ésto, crea la variable `hijos` con valor `0` en cada uno de sus `5` posiciones.

Los vectores en nuestro pseudocódigo comienzan con el índice `1`, no en `0`, como lo suelen hacer
los lenguajes de programación comúnmente:

```ed1
hijos[1] = "Robb"
hijos[2] = "Jon Snow"
hijos[3] = "Sansa"
hijos[4] = "Arya"
hijos[5] = "Brandon"
hijos[6] = "Rickon"
```



## Matrices

```ed1
cuadrado_magico = matriz(3,3)
```

Ésto, crea la variable `cuadrado_magico` con valor `0` en cada uno de sus `9` posiciones,
pero esta vez no es lineal (una dimensión), sino de 2 dimensiones: una matriz.

Al igual que los vectores, comienzan con el índice `1`:

```ed1
cuadrado_magico[1][1] = 4
cuadrado_magico[1][2] = 9
cuadrado_magico[1][3] = 2
cuadrado_magico[2][1] = 3
cuadrado_magico[2][2] = 5
cuadrado_magico[2][3] = 7
cuadrado_magico[3][1] = 8
cuadrado_magico[3][2] = 1
cuadrado_magico[3][3] = 6
```

## Condicionales (Si, Sino)

Las condicionales son las estructuras que nos permitirán ejecutar un codigo u otro dependiendo
de una condición lógica:

>Atajo en el Editor: <code>sis</code> + <kbd>TAB</kbd> 
```ed1
si edad >= 18 entonces
    imprimir "Usted es mayor de edad"
sino
    imprimir "Usted es aun menor de edad!"
fin si
```
No es obligatorio que se defina el `sino`:

>Atajo en el Editor: <code>si</code> + <kbd>TAB</kbd> 
```ed1
si edad >= 18 entonces
    imprimir "Usted es mayor de edad"
fin si
```


## Multiples opciones (Segun)

>Atajo en el Editor: <code>segun</code> + <kbd>TAB</kbd> 

La secuencia de instrucciones ejecutada por una instrucción `Segun` depende del valor de una variable.
Si la variable no cumple con ninguno de los pasos, ejecutará el caso `por defecto`, siempre y cuando
esté definida:

```ed1
segun libro hacer
    caso 1:
        imprimir "Juego de tronos (1996)"
    caso 2:
        imprimir "Choque de reyes (1998)"
    caso 3:
        imprimir "Tormenta de espadas (2000)"
    caso 4:
        imprimir "Festín de cuervos (2005)"
    caso 5:
        imprimir "Danza de dragones (2011)"
    por defecto: 
        imprimir "[En desarrollo]"
fin segun
```

## Ciclo MIENTRAS

La instrucción `mientras` ejecuta una secuencia de instrucciones _mientras_ una condición sea verdadera. 

>Atajo en el Editor: <code>mq</code> + <kbd>TAB</kbd> 

```ed1
mientras edad < 18 hacer
    imprimir "Aún eres menor de edad, espera otro año"
    edad = edad + 1
fin mientras
```

Si en un principio es verdadera, se ejecuta, y seguirá ejecutandose una y otra vez hasta que la condicion dada sea falsa. Por eso, la variable que está en la condición debe alterarse en cada iteración del ciclo, para tener seguridad de que el ciclo no se ejecutará infinitamente.

El ciclo `mientras` es comúnmente usado para recorrer estructuras de datos enlazadas:

>Atajo en el Editor: <code>mqp</code> + <kbd>TAB</kbd> 
```ed1
mientras p != NULO hacer
    /* codigo */
    p = p->sig
fin mientras
```

## Ciclo REPETIR

>Atajo en el Editor: <code>rep</code> + <kbd>TAB</kbd> 

La instrucción `repetir` funciona igual que el ciclo MIENTRAS, la diferencia es que, la condición es evaluada al final de la ejecución del código, por lo tanto, siempre va a garantizarse que por lo menos 1 vez se va a ejecutar el código que está dentro del ciclo. __Útil para cuando se desean recorrer estructuras cíclicas, y es necesario que acabe donde comienza__.

```ed1
repetir
    imprimir "Tu edad es ", edad
    edad = edad + 1
hasta que edad >= 18
```

Note que _la ejecución del código acabará HASTA que se cumpla la condición_.

Recuerde además que la variable que está en la condición debe alterarse en cada iteración del ciclo, para tener seguridad de que el ciclo no se ejecutará infinitamente.

## Ciclo PARA

El ciclo `para` realiza un número determinado de ejecuciones de un código. Tiene 2 formas de usarse, convirtiéndose en realidad en 2 estructuras cíclicas:

### Ciclo PARA común

>Atajo en el Editor: <code>para</code> + <kbd>TAB</kbd> 

```ed1
imprimir "Tabla del 9: "
para i = 1 hasta 10 hacer
    n = 9*i
    imprimir "9x" , i , "=" , n
fin para
```

Ejecuta el ciclo iterando el valor de `i` del 1 al 10, aumentando __siempre__ de 1 en 1.

### Ciclo PARA en vectores ó cadenas

>Atajo en el Editor: <code>parac</code> + <kbd>TAB</kbd> 

```ed1
para cada hijo , hijos hacer
    imprimir hijo , " es hijo de Eddard Stark"
fin para
```

Ejecutará el ciclo para cada elemento del vector `hijos`, y cada uno de esos elementos los almacena en `hijo`.

Si se trata de una cadena (ej: "hola"), la variable iteradora va a tomar el valor de cada caracter hasta acabar.

## Detener un ciclo/Pasar a siguiente iteración 

Puedes detener la ejecución de un ciclo usando la palabra `romper`, o si necesitas acabar la iteracción actual y seguir con la siguiente, puedes usar `continuar`.


## Funciones

Una función es una porción del algoritmo al cual le podemos dar una entrada y él nos devolverá una salida. También suele ser llamado subprograma ó subrutina:

>Atajo en el Editor: <code>fun</code> + <kbd>TAB</kbd> 

```ed1
funcion sumar (a,b) hacer
    suma = a + b
    devolver suma
fin funcion

//Ahora la llamamos (podemos hacerlo varias veces!)
imprimir sumar(12,38) // La salida será 40
```

La palabra reservada `devolver` se encarga de enviar el valor al lugar del código donde se hizo la llamada de la función. No todas las funciones tienen que pedir parámetros de entrada, ni todas tienen que devolver un valor.


## Operadores y Funciones

Este pseudolenguaje dispone de un conjunto básico de operadores y funciones que pueden ser utilizados para la construcción de expresiones más o menos complejas.

Las siguientes tablas exhiben la totalidad de los operadores de este lenguaje reducido:

| Operador     | Significado                          | Ejemplo                     |
|--------------|--------------------------------------|-----------------------------|
| Relacionales |                                      |                             |
| >            | Mayor que                            | 3>2                         |
| <            | Menor que                            | edad<18                     |
| ==           | Igual que                            | 8 == 3                      |
| <=           | Menor o igual que                    | a<=b                        |
| >=           | Mayor o igual que                    | 4>=5                        |
| != ó <>      | Diferente                            | 8 != 7                      |
| Logicos      |                                      |                             |
| &&           | Conjunción (y).                      | (7>4) && (2==1) //falso     |
| &#124;&#124; | Disyunción (o).                      | (1==1 &#124;&#124; 2==1) //verdadero    |
| !            | Negación                             | !(4<2) //verdadero          |
| Algebraicos  |                                      |                             |
| +            | Suma                                 | total = cant1 + cant2       |
| -            | Resta                                | stock = disp - venta        |
| *            | Multiplicación                       | area = base * altura        |
| /            | División                             | porc = 100 * parte / total  |
| ^ ó **       | Potenciación                         | sup = 3.41 * radio ^ 2      |
| % ó MOD      | Módulo (resto de la división entera) | resto = num %div            |


La jerarquía de los operadores matemáticos es igual a la del álgebra, aunque puede alterarse mediante el uso de paréntesis.

A continuación se listan las funciones integradas disponibles:


| Funcion               | Significado                                    | Ejemplo                                        |
|-----------------------|------------------------------------------------|------------------------------------------------|
| RAIZ(X)               | Raiz cuadrada de X                             | raiz(2) // 1.4142135623730951
| ABS(X)                | Valor absoluto de X                            | abs(-10) // 10
| LN(X)                 | Logaritmo Natural de X                         | ln(23) // 3.1354942159291497
| EXP(X)                | Funcion exponencial de X                       | exp(3) // 20.085536923187668
| SEN(X)	            | Seno de X                                      | sen(0) // 0
| COS(X)	            | Coseno de X                                    | cos(0) // 1
| ATAN(X)           	| Arcotangente de X                              | atan(90) // 1.5596856728972892
| ENTERO(X)	            | Conversión a entero de X.                      | entero("90") // 90
| CADENA(X)             | Conversión a Cadena de Texto de X              | cadena(90)  // "90"
| ALEATORIO(X)          | Entero aleatorio entre 0 y X                   | aleatorio(1,100) // 87
| NUEVO() ó MALLOC()    | Nuevo espacio de memoria                       | nuevo() // [NUEVO NODO EN TABLERO]
| LIBERAR(P) ó FREE(P)  | Libera espacio de memoria apuntado por P       | liberar(p) // [BORRA NODO APUNTADO POR p]
| LONGITUD(X)           | Longitud de X (vector/matriz/cadena)           | longitud(v) // longitud de v
| LIMPIAR(X)            | Limpia la  sección X ("terminal" ó "tablero")  | limpiar("terminal") // [BORRA CONTENIDO DE AL TERMINAL]
| MAYUSCULAS(X)         | Convierte las letras a Mayúsculas              | mayusculas("hola") // "HOLA"
| MINUSCULAS(X)         | Convierte las letras a Minúsculas              | minusculas("HOLA") // "hola"

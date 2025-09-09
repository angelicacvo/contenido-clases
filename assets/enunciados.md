## 1. Ejercicio de lógica (JS -> logic.js)
Crear una funcion en js que reciba un string y devolver un str con los caracteres que hay reordenados por el numero de ocurrencias (sin métodos de array (push, sort, etc))

## 2. Reto de Tipos Avanzados en TypeScript 
**Motor de Reglas de Validación en Tipos Enunciado(TS -> motor.ts)**
Tu reto consiste en construir un sistema de validación estática únicamente con tipos de TypeScript. No puedes usar funciones ejecutables de JavaScript/TypeScript, ni enums, ni generics, ni map types.

El objetivo es que, dado un objeto y un conjunto de reglas declaradas como tipos literales, el sistema pueda decidir si el objeto es "VALIDO" o "INVALIDO" — únicamente a nivel de tipos.

Requisitos

Reglas básicas:

"string_no_vacio" → El campo debe ser un string distinto de "".

"mayor_18" → El campo debe ser un number estrictamente mayor que 18.

"boolean_true" → El campo debe ser true.

Combinadores de reglas:

AND → Todas las reglas deben cumplirse.

OR → Al menos una regla debe cumplirse.

NOT → La regla debe no cumplirse.
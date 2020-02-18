# HITO 1

Para poder probar las librerías que usted hizo en el primer hito debe seguir los siguientes pasos:

1. Bajar este repositorio
2. Copiar el codigo de sus funciones en los archivos `services.js` y `utils.js`. Tenga cuidado de SOLO cambiar el código dentro de la función y no su definición ni como se exporta.
3. En la terminal escriba: `npm install` (no olvidar estar parado en el directorio correspondiente a esta carpeta en la terminal)
4. Y luego: `node test`

ACLARACIONES:

- Los test de services solo funcionan si usted utilizó la librería axios, para probar los servicios hechos con fetch tendrá que probar en el browser directamente
- Todos los test tienen una linea comentada que tiene el resultado de correr la función que se utiliza en el test, puede sacar el comentario y ver el resultado en la terminal
- Este test se hizo utilizando **_NODE.js_** a eso se debe el cambio en los exports e imports (no copiar esto en el proyecto react).
- Se asume que el carrito es una lista del estilo:

```[{
  "_id": "5e40b0ee97fef18946b150e4",
  "count": 2,
  "name": "Mermelada de Arándanos",
  "description": "Mermelada de arándanos cosechados en el Himalaya, recolectadas manualmente.",
  "price": 1000,
  "photo": "http://tiendaonline2020.herokuapp.com/img/mermarandanos.jpg"
  }]
```

**_Si usted utilizó un atributo diferente para la cantidad de items de un mismo tipo deberá cambiar el test para que funcione correctamente._**

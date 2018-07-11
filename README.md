#Platzom
- Platzom es un idioma inventado para el [Curso de fundamentos de Javascript](https://platzi.com/js)

## Descripción del idioma

- Si la palabra termina con 'ar', se le quitan esas dos letras.
- Si la palabra inicia con 'z' se le añade 'pe' al final.
- Si la palabra traducida tiene mas de 10 o más letras se debe partir a la mitad y unir con un guíon.
- Si la palabra original es un palíndromo. **Ninguna** regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación 
```
npm i @eddybag/platzom
```

## Uso
```
import platzom from 'platzom'

platzom('Programar') // Program 
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('abecedario') // abecedario
platzom('sometemos') // SoMeTeMoS
```

## Para crear una paquete en npm

- Tener una cuenta en el sitio de npm
- Configurar npm en la terminal con los siguientes comandos

```
npm set init.autor.name "nombre-del-autor"
npm set init.autor.email "email-del-autor"
npm set init.autor.url "url-del-usuario" // puede ser la url de twitter o facebook
npm login
npm init // Este comando nos hará llenar las opciones básicas para crear nuestro package.json
         // La nomenclatura de las versiones es la siguiente
         // 1.0.0 el primer valor llega a uno cuando ya está madura y probado el paquete y sólo 
         // se incrementa cuando es un cambio grande de funcionalidad
         // el valor 0 del medio representa sólo cambios que no hacen que el paquete se use de otra manera
         // y el último 0 representa bug-fixes. mas información en https://semver.org/
 ```
## Cómo instalar babel
- Instalar babel corriendo siguiente comando
```
npm install -D babel-cli babel-preset-env babel-preset-minify
```
- Luego crear el archivo `.babelrc` con el siguiente contenido
```
{ "presets": ["env", "minify"] }
```
- Este código considera el plugin básico, además del minify para compactar la versión de distribución
- Se especifica en package.json el comando `build` en scripts de la siguiente manera
```
"build": "babel src/platzom.js -d dist"
```
- Se especifica en package.json el archivo main en este caso `"main": "dist/src/platzom.js"`
- Por último se corre el comando `npm run build` para crear la versión de destribución.

## Testear el paquete
- Instalar las librerías mocha y chai
```
npm install -D mocha chai
```
- Crear una carpeta llamada test
- Dentro de ésta definir los test en test.js

## Subir a npm 
- Cuando ya esté probado el desarrollo el siguiente paso es subir un tag a github
```
git add -A
git commit -m "Commit inicial"
git tag x.x.x
git push origin master
git push origin master --tags
```
- Después subir a npm con el siguiente comando
```
npm publish --access=public 
```
- Npm no permite actualizar con la misma versión, por ende tienes que subirla. 

## Créditos 
- [Edgardo Velásquez Gutiérrez](https://twitter.com/eddybag)


## Licencia
- [MIT](https://es.wikipedia.org/wiki/Licencia_MIT)




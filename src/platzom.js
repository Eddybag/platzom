// Se exporta de manera default la función platzom
export default function platzom (str) {
  let translation = str

  // Si la palabra original es un palíndromo
  // Ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  const reverse = (str) => str.split('').reverse().join('')
  const minMay = (str) => {
    return str.split('').map((value, key) => {
    // preguntamos si el indice es par o impar para realizar el intercambio de mayusculas y minusculas
      return key % 2 === 0 ? value.toUpperCase() : value.toLowerCase()
    }).join('')
  }

  if (str === reverse(str)) {
    return minMay(str)
  }

  // Si la palabra termina en 'ar' se eliminan esos caracteres
  if (str.toLowerCase().endsWith('ar')) {
  // 0 comprende el principio de la cadena de texto, y el -2 los 2 últimos caracteres
    translation = str.slice(0, -2)
  }
  // Si la palabra inicia con z, se le añade 'pe' al final
  if (str.toLowerCase().startsWith('z')) {
  // funciona el clásico acomulador
    translation += 'pe'
  }
  // Si la palabra traducida tiene 10 o mas letras
  // Se debe partir a la mitad y unir con un guión del medio

  if (translation.length >= 10) {
    const firstHalf = translation.slice(0, Math.round(translation.length / 2))
    const secondHalf = translation.slice(Math.round(translation.length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }
  return translation
}

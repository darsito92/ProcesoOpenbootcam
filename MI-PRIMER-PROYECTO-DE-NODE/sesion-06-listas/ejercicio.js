const compras =["arroz","tomate","tallarines","pollo","lechuga"]
compras.push("Aceite de Girazol")
compras.pop()

const peliculas = [
    {titulo:"Troya",director:"Wolfgang Petersen",fecha:new Date (2004,4,14)},
    {titulo:"Interestelar",director:"Christopher Nolan",fecha:new Date(2014,10,6)},
    {titulo:"Todo Poderoso",director:"Tom Shadyac",fecha:new Date(2003, 4, 23)  }
]

const listPel = peliculas.filter(pelicula => pelicula.fecha> new Date(2010,0,1))
const lisD = peliculas.map(pelicula => pelicula.director)
const lisP = peliculas.map(pelicula => pelicula.titulo)
const list3 = lisD.concat(lisP)
const list4 = [...lisD,...lisP]



# rickymorty

Aplicación escrita en el lenguaje Nodejs, que interactua con la API de rickandmorty, en la que hay datos, de los caracteres, episodios y localizaciones que aparecen en la serie de Rick and Morty.

Documentación de la API: 
https://rickandmortyapi.com/documentation/#rest

En esta aplicación hay 5 funciones que usan las librerias de npm, yargs y request, que se usan para darle utilidad a las funciones, a las que se accede mediante los siguientes comandos : 

Buscar personajes a partir de un nombre : 

--view --name = "Cualquier Nombre"

Obtener los datos de un personaje, a partir de un Id(número) :

--view --name = "Cualquie Nombre" --id= 'Cualquier Id'

Listar los nombres de todos los personajes : 

--list 

Listar los personajes de una página, dado que al ser tantos datos, estan paginados : 

--list --page

Listar los personajes según su estado, Vivo o Muerto, "Alive" o "Dead"

--list --status

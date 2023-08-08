/**
 *14
 Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
 Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
 y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
 numero de páginas 
 */


function Libro (ISBN, titulo, autor, paginas){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}
var arregloLibro = new Array();

function guardarLibro(){   
    
    var ISBN_input = parseInt(document.getElementById("ISBN").value);
    var titulo_input = document.getElementById("titulo").value;
    var autor_input = document.getElementById("autor").value;
    var paginas_input = parseInt(document.getElementById("pagina").value);
    var libro = new Libro (ISBN_input, titulo_input, autor_input, paginas_input);
    arregloLibro.push(libro);
}


function verLista() {
    var contenido = document.getElementById("lista");
    
    arregloLibro.forEach(objeto => {
        let parrafo = document.createElement('p');
        parrafo.textContent = `ISBN: ${objeto.ISBN}, 
                              título: ${objeto.titulo}, 
                              autor: ${objeto.autor}, 
                              páginas: ${objeto.paginas}`;
        contenido.appendChild(parrafo);
    });
}

function borrar(){
document.getElementById("ISBN").value="";
document.getElementById("titulo").value="";
document.getElementById("autor").value="";
document.getElementById("pagina").value="";
}

document.getElementById("reset").onclick = borrar ;
document.getElementById("submit").onclick =  guardarLibro ;
document.getElementById("ver-lista").onclick = verLista ;
function ingresar()
{

    var usuario="cristian";
    var contraseña="examen";

    if(document.foringreso.usuario.value==usuario &&
        document.foringreso.contraseña.value==contraseña)
        {
            document,location="html/inicio.html"
        }
        else
        {
            alert("ingrese usuario y contraceña correctamente")
        }
}
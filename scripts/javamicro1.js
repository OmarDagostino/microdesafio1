let nombre1 = prompt ("Ingresa tu nombre")
let apellido1 = prompt ("Ingresa tu apellido")
let nombre=nombre1.trim()
let apellido=apellido1.trim()
if (nombre=='' && apellido=='')
    {
        nombre="usuario" 
        apellido="anónimo"
    }
alert ("Hola" + " " + nombre + " ! ")
let dia_de_nacimiento = parseInt (prompt ("ingresa el numero de tu día de nacimiento"))
let mes_de_nacimiento = parseInt (prompt ("ingresa el número de mes de tu nacimiento"))
let anio_de_nacimiento = parseInt (prompt ("ingresa el año de nacimiento en 4 digitos aaaa"))
let fecha_de_nacimiento = (anio_de_nacimiento+"-"+mes_de_nacimiento+"-"+dia_de_nacimiento)
let ms_fecha = Date.parse (fecha_de_nacimiento)
let ahora = new Date ()
let ms_ahora = Date.parse (ahora)
let ms_vividos = ms_ahora-ms_fecha
let segundos_vividos = ms_vividos / 1000
let minutos_vividos = segundos_vividos / 60
let horas_vividas = minutos_vividos / 60
let dias_vividos = horas_vividas / 24
let anios_vividos = dias_vividos /365.25
console.log (ms_vividos)
console.log (segundos_vividos)
console.log (minutos_vividos)
console.log (horas_vividas)
console.log (dias_vividos)
console.log (anios_vividos)
alert ( "Estimado "+ nombre + " " + apellido + "! Has vivido mas de "
        + parseInt(anios_vividos)+ " años, también más de " 
        + parseInt (dias_vividos) + " dias , también más de "
        + parseInt(horas_vividas) + " horas , también más de "
        + parseInt (minutos_vividos) + " minutos, también más de "
        + parseInt (segundos_vividos) + "segundos")
alert ("SIN EMBARGO HOY PUEDE SER UN GRAN DIA")
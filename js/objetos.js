var rectangulo = {
    alto: 25,
    ancho:69,
    calcularPerimetro : function(){
        return (this.alto + this.ancho)*2;
    },
    calcularArea : function(){
        return (this.alto * this.ancho);
    },
    calcularDiagonal : function(){
        return Math.sqrt(this.alto**2 + this.ancho**2);
    }
}

var planta = {
    especie: 'duraznero',
    origen:'china',
    edad: 15,
    flor: false,
    fruto: true,
    enfermo: false,
    verDatosPlanta : function(){
        return `La planta es una especie de ${this.especie}, de ${this.edad} años de edad, originaria de ${this.origen}`;
    },
    isFructificacion: function(){
        return this.fruto ?`La planta está en fructificación`: `La planta no está en fructificación`;
    },
    isFloración: function(){
        return this.flor ?`La planta está en floración`: `La planta no está en floración`;
    },
    setEnfermo: function(){
        this.enfermo = true;
    },
    setNoEnfermo: function(){
        this.enfermo = false;
    },
}

var zoologico = {
    pais: 'Rusia',
    ciudad: 'Moscú',
    direccion: 'Bolshaya Gruzinskaya St, 1',
    telefono:'+7 499 252-29-51',
    anoFundación: 1864,
    superficie: 21,
    numeroAnimales: 6000,
    numeroEspecies:1000,
    calcularAnos: function(){
        var anoActual = new Date().getFullYear();
        return anoActual-this.anoFundación;
    }, 
    verDatosContacto: function(){
       return `El zoológico se localiza en ${zoologico.direccion}, ${zoologico.ciudad}, ${zoologico.pais}. Su teléfono es ${zoologico.telefono}.`;
    },
    addAnimales: function(addedAnimals){
        zoologico.numeroAnimales += addedAnimals; 
    },
    addEspecies: function(addedSpecies){
        zoologico.numeroEspecies += addedSpecies; 
    }
}
var ann = [];
var prov = [];

fetch('https://www.datos.gov.co/resource/3ebi-d83g.json')

.then(obtenidos => obtenidos.json())

.then(function transformar(obtenidos){

x = 0
obtenidos.forEach(function agregar (obtenidos)
{
    if(obtenidos.dpto != undefined && obtenidos.anio != undefined)
    {
        ann.push(obtenidos.anio);
        prov.push(obtenidos.dpto);
    }
});

var graf2={
  values: ann,
  labels: prov,
  type: 'pie',
};

var datosgraf= [graf2];

var layout={
    title: 'Numero De Suscriptores Por Proveedor',
    showlegend: true,
    height: 1500,
    width: 1500,
    grid: {columns: 2}

};
Plotly.newPlot("grafica",datosgraf,layout);
});

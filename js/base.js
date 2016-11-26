$(document).ready(function(){

    var cuerpo = '';
    for(var m = 0; m < funcionarios.length; m++){
        cuerpo += "<tr><td>"+funcionarios[m].anho+"</td>"+
        "<td>"+funcionarios[m].mes+"</td>"+
        "<td>"+funcionarios[m].descripcionOee+"</td>"+
        "<td>"+funcionarios[m].documento+"</td>"+
        "<td>"+funcionarios[m].nombres+"</td>"+
        "<td>"+funcionarios[m].apellidos+"</td>"+
        "<td>"+funcionarios[m].presupuestado+"</td>"+
        "<td>"+funcionarios[m].devengado+"</td>"+
        "<td>"+funcionarios[m].sexo+"</td>"+
        "<td>"+funcionarios[m].estado+"</td>"+
        "<td>"+funcionarios[m].anhoIngreso+"</td>"+
        "<td>"+funcionarios[m].discapacidad+"</td>"+
        "<td>"+funcionarios[m].cargaHoraria+"</td></tr>";
    }
    $('#cuerpoFuncionarios').append(cuerpo);
    $('#datatableFuncionarios').dataTable();
});

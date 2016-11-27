$(document).ready(function(){

    var cuerpo = '';
    for(var m = 0; m < funcionarios.length; m++){
        cuerpo += "<tr><td>"+funcionarios[m].anho+"</td>"+
        "<td>"+funcionarios[m].mes+"</td>"+
        "<td>"+funcionarios[m].descripcionOee+"</td>"+
        "<td>"+funcionarios[m].documento+"</td>"+
        "<td>"+funcionarios[m].nombres+"</td>"+
        "<td>"+funcionarios[m].apellidos+"</td>"+
        "<td>"+funcionarios[m].sexo+"</td>"+
        "<td>"+funcionarios[m].presupuestado+"</td>"+
        "<td>"+funcionarios[m].devengado+"</td>"+        
        "<td>"+funcionarios[m].estado+"</td>"+
        "<td>"+funcionarios[m].anhoIngreso+"</td>"+
        "<td>"+funcionarios[m].discapacidad+"</td>";
        if(funcionarios[m].cargaHoraria == null){
        	 cuerpo += "<td></td>";

        }else{
        	 cuerpo += "<td>"+funcionarios[m].cargaHoraria+"</td>";

        }
        cuerpo += "<td>"+funcionarios[m].objetoGasto+" - "+funcionarios[m].concepto+"</td>";
        if(funcionarios[m].cargo == null){
       	 cuerpo += "<td></td>";
       }else{
       	 cuerpo += "<td>"+funcionarios[m].cargo+"</td>";
       }
   }
    $('#cuerpoFuncionarios').append(cuerpo);
    $('#datatableFuncionarios').dataTable();
    
    var cuerpoFuncionariosDobleRemunerados = '';
    for(var k = 100; k <= 500; k=k+100){
    	cuerpoFuncionariosDobleRemunerados += "<tr><td>"+funcionarios[k].documento+"</td>"+
    	"<td>"+funcionarios[k].nombres+"</td>"+
        "<td>"+funcionarios[k].apellidos+"</td>"+
        "<td>"+funcionarios[k].sexo+"</td></tr>";
   }
    $('#cuerpoFuncionariosDobleRemunerados').append(cuerpoFuncionariosDobleRemunerados);
    $('#funcionariosDobleRemunerados').dataTable();
    $('#todosLosMunicipios').dataTable();

});

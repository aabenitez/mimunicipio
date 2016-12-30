$(document).ready(function(){
	
	function numeroEntero(numero){
		return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
	
	var funcionarios = $.ajax({
		  url: '/hackathon2016/php/funcionarios.php',
	      type:'get',
	      dataType:'json',
	      async:false  
	    }).responseText;
		funcionarios = JSON.parse(funcionarios);

    var cuerpo = '';
    for(var m = 0; m < funcionarios.length; m++){
        cuerpo += "<tr><td class='dt-body-center'>"+funcionarios[m].anho+"</td>"+
        "<td class='dt-body-center'>"+funcionarios[m].mes+"</td>"+
        "<td>"+funcionarios[m].descripcionOee+"</td>"+
        "<td class='dt-body-right'>"+numeroEntero(funcionarios[m].documento)+"</td>"+
        "<td>"+funcionarios[m].nombres+"</td>"+
        "<td>"+funcionarios[m].apellidos+"</td>"+
        "<td class='dt-body-center'>"+funcionarios[m].sexo+"</td>"+
        "<td class='dt-body-right'>"+numeroEntero(funcionarios[m].presupuestado)+"</td>"+        
        "<td class='dt-body-right'>"+numeroEntero(funcionarios[m].devengado)+"</td>"+        
        "<td class='dt-body-center'>"+funcionarios[m].estado+"</td>"+
        "<td class='dt-body-right'>"+funcionarios[m].anhoIngreso+"</td>"+
        "<td class='dt-body-center'>"+funcionarios[m].discapacidad+"</td>";
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
    $('#datatableFuncionarios').dataTable(
//    {
//		"formatNumber": function ( toFormat ) {
//		    return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
//		};
//    }
    );
    
//    var cuerpoFuncionariosDobleRemunerados = '';
//    for(var k = 100; k <= 500; k=k+100){
//    	cuerpoFuncionariosDobleRemunerados += "<tr><td>"+funcionarios[k].documento+"</td>"+
//    	"<td>"+funcionarios[k].nombres+"</td>"+
//        "<td>"+funcionarios[k].apellidos+"</td>"+
//        "<td>"+funcionarios[k].sexo+"</td></tr>";
//    }
//    
//    $('#cuerpoFuncionariosDobleRemunerados').append(cuerpoFuncionariosDobleRemunerados);
//    $('#funcionariosDobleRemunerados').dataTable();    

});

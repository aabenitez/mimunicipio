
<?php
	//include connection file 
	include_once("connection.php");
	 
	// initilize all variable
	$params = $columns = $totalRecords = $data = array();

	$params = $_REQUEST;

	//define index of column
	$columns = array( 
		0 =>'anho',
		1 =>'mes', 
		2 => 'descripcionOee',
		3 => 'documento',
		4 => 'nombres',
		5 => 'apellidos',
		6 => 'sexo',
		7 => 'presupuestado',
		8 => 'devengado',
		9 => 'estado',
		10 => 'anhoIngreso',
		11 => 'discapacidad',
		12 => 'cargaHoraria',
		13 => 'objetoGasto',
		14 => 'cargo',
		15 => 'funcion'	
		
	);

	$where = $sqlTot = $sqlRec = "";

	// check search value exist
	if( !empty($params['search']['value']) ) {   
		$where .=" WHERE ";
		$where .=" ( anho LIKE '".$params['search']['value']."%' ";    
		$where .=" OR mes LIKE '".$params['search']['value']."%' ";

		$where .=" OR descripcionOee LIKE '%".$params['search']['value']."%' ";
		$where .=" OR documento LIKE '%".$params['search']['value']."%' ";
		$where .=" OR nombres LIKE '%".$params['search']['value']."%' ";
		$where .=" OR apellidos LIKE '%".$params['search']['value']."%' ";
		$where .=" OR sexo LIKE '".$params['search']['value']."%' ";
		$where .=" OR presupuestado LIKE '%".$params['search']['value']."%' ";
		$where .=" OR devengado LIKE '%".$params['search']['value']."%' ";
		$where .=" OR estado LIKE '".$params['search']['value']."%' ";
		$where .=" OR anhoIngreso LIKE '".$params['search']['value']."%' ";
		$where .=" OR discapacidad LIKE '".$params['search']['value']."%' ";
		$where .=" OR cargaHoraria LIKE '%".$params['search']['value']."%' ";
		$where .=" OR objetoGasto LIKE '%".$params['search']['value']."%' ";
		$where .=" OR cargo LIKE '%".$params['search']['value']."%' ";
		$where .=" OR funcion LIKE '%".$params['search']['value']."%' )";		
	}

	// getting total number records without any search
	$sql = "SELECT  anho,
					mes, 
					descripcionOee,
					documento,
					nombres,
					apellidos,
					sexo,
					presupuestado,
					devengado,
					estado,
					anhoIngreso,
					discapacidad,
					cargaHoraria,
					objetoGasto,
					cargo,
					funcion	 
			FROM `funcionarios` ";
	$sqlTot .= $sql;
	$sqlRec .= $sql;
	//concatenate search sql if value exist
	if(isset($where) && $where != '') {

		$sqlTot .= $where;
		$sqlRec .= $where;
	}


 	$sqlRec .=  " ORDER BY ". $columns[$params['order'][0]['column']]."   ".$params['order'][0]['dir']."  LIMIT ".$params['start']." ,".$params['length']." ";

	$queryTot = mysqli_query($conn, $sqlTot) or die("database error:". mysqli_error($conn));


	$totalRecords = mysqli_num_rows($queryTot);

	$queryRecords = mysqli_query($conn, $sqlRec) or die("error to fetch employees data");

	//iterate on results row and create new index array of data
	while( $row = mysqli_fetch_row($queryRecords) ) { 
		$data[] = $row;
	}	

	$json_data = array(
			"draw"            => intval( $params['draw'] ),   
			"recordsTotal"    => intval( $totalRecords ),  
			"recordsFiltered" => intval($totalRecords),
			"data"            => $data   // total data array
			);

	echo json_encode($json_data);  // send data as json format
?>
	
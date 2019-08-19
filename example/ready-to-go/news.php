<?php

//- resp data container
$respData = array();

//- data preparing
$newsList = array(
	array("id"=>12, "title"=>"Hanjst is releasing to pulic."),
	array("id"=>34, "title"=>"Hanjst Ready-to-go."),
	array("id"=>56, "title"=>"Hanjst has outpaced all other jst.")
);
$respData['newsList'] = $newsList;
$jsonDataStr = json_encode($respData);

//- template contents processing
$tplFile = "news.html";
$jsonDataPlaceHolder = "HANJST_JSON_DATA";
$tplContent = file_get_contents($tplFile);
$tplContent = str_replace($jsonDataPlaceHolder, $jsonDataStr, $tplContent);

//- output
print($tplContent);

?>
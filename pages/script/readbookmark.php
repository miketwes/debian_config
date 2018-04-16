<?php


$files = glob('*.{json}', GLOB_BRACE);
foreach($files as $file) {
$menu = json_decode(file_get_contents($file))->children;
foreach($menu as $v){
  echo $v->title.'<br /><br />';
  foreach($v->children as $v1){
	if($v1->children !== NULL){ 
		echo '<P>'.$v1->title.'</P>';
		foreach($v1->children as $v2){
		echo $v2->title.'<br />';
		echo $v2->uri.'<br />';
		echo '<br />';
	        }
        echo '<br />';
        }
        else{echo $v1->title.'<br />';}
        echo $v1->uri.'<br />';
        echo '<br />';
  }
  echo '<br />';
}
unset($menu);
}


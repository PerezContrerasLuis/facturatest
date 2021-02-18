<?php

//estructura para arreglo de inserccion de datos del emisor de factura 

$params = [
    "ID" => 1,
    "FiscalRegime" => "601",
    "Rfc" => "AAA010101AAA",
    "Name" => "EXPRESION EN SOFTWARE",
    'Certificate' => 'csdCRT',
    'PrivateKey' => 'csdPK',
    'PrivateKeyPassword' => '12345678a'
];


print_r($params);

echo "</br>";
echo "</br>";
$temporal = json_encode($params);
echo "</br>";
echo "</br>";
echo $temporal;
echo "</br>";
echo "</br>";
$temporaldos =  (array)$params;

print_r($temporaldos. true);
echo "</br>";
echo "</br>";
echo "==================================================================================";
echo $temporaldos['FiscalRegime'];   

/// query para inserta registro 
/* INSERT INTO imp1.phppos_app_config
(`key`, value) VALUES('imp1csd', '{"ID":1,"FiscalRegime":"601","Rfc":"AAA010101AAA","Name":"EXPRESION EN SOFTWARE","Certificate":"csdCRT","PrivateKey":"csdPK","PrivateKeyPassword":"12345678a"}');

select * from  phppos_app_config where `key` like'%mp1%';

select * from  phppos_app_config where `key` = 'imp1csd';


{"ID":1,"FiscalRegime":"612","Rfc":"LIZH770805FRA","Name":"Youyi","Certificate":"csdCRT","PrivateKey":"csdPK","PrivateKeyPassword":"7708LIUZ"}


{"ID":1,"FiscalRegime":"601","Rfc":"AAA010101AAA","Name":"EXPRESION EN SOFTWARE","Certificate":"csdCRT","PrivateKey":"csdPK","PrivateKeyPassword":"12345678a"} */

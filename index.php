<?php 

/*
 * This file is part of Facturama PHP SDK.
 *
 * (c) Facturama <dev@facturama.com>
 *
 * This source file is subject to a MIT license that is bundled
 * with this source code in the file LICENSE.
 */

require __DIR__.'/vendor/autoload.php';
include "InvoiceFactory.php";

/* $facturama = new Facturama\Client('pruebas', 'pruebas2011');

// $facturama = new Facturama\Client('chinamayoreo', 'Gameofthrones1');

$CfdiId = 'sniJoQdMCaa1c3M_7TLjIQ2';

$params = [
    'type' => 'issued',
];

$result = $facturama->get('Cfdi/'.$CfdiId, $params);

printf('<pre>%s<pre>', var_export($result, true)); */



$facChinMay = new InvoiceFactory();
// $resultado = $facChinMay->crtSnglIssuerInvoice(); 

//1.-creacion de factura 
//$resultado = $facChinMay->createInvoice(); 

//2.-obtencion de factura 
/* $resultado = $facChinMay->getInvoice();
echo " RESULTAADO DE LA FACTURA POR ID"; */

//  printf('<pre>%s<pre>', var_export($resultado, true));

//3.-obtencion de PDF 
// $resultado = $facChinMay->getPDF();
$resultado = $facChinMay->getXML();

$base64 = $resultado->Content;
$decoded = base64_decode($base64);

// $file = "invoice.pdf";
$file = "invoice.xml";

file_put_contents($file, $decoded);

if (file_exists($file)) {
    header("Content-Description: File Transfer");
    header("Content-Type: application/octet-stream");
    header("Content-Disposition: attachment; filename=".$file);
    header("Expires: 0");
    header("Cache-Control: must-revalidate");
    header("Pragma: public");
    header("Content-Length: " . filesize($file));
    readfile($file);
    exit;
    }


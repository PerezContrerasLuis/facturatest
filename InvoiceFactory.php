<?php

require __DIR__ . '/vendor/autoload.php';


class InvoiceFactory
{

    private $facturama;

    function __construct()
    {
        //creamos instancia para SDK facturama 
        $this->facturama = new Facturama\Client('chinamayoreo', 'Gameofthrones1');
    }


    /**
     * Metodo para crear factura CFDI con un solo RFC emisor [ create single issuer invoice ]
     * @author Luis Perez | luisperezcontreras@gmail.com
     * @param   string  PENDIENTE 
     * @return array 
     */
    public function crtSnglIssuerInvoice()
    {
        //creamos arrego con parametros a facturar 
        $params = [
            'ExpeditionPlace' => '12345',
            //'serie' => '',
            'Folio' => '100',
            'Currency' => 'MXN',
            'PaymentConditions' => 'CREDITO A SIETE DIAS',
            'CfdiType' => 'I',
            'PaymentForm' => '03',
            'PaymentMethod' => 'PUE',
            'Receiver' => [
                'Rfc' => 'XAXX010101000',
                'Name' => 'RADIAL SOFTWARE SOLUTIONS',
                'CfdiUse' => 'P01',
            ],
            'Items' => [
                [
                    'ProductCode' => '10101504',
                    'IdentificationNumber' => 'EDL',
                    'Description' => 'Estudios de viabilidad',
                    'Unit' => 'NO APLICA',
                    'UnitCode' => 'MTS',
                    'UnitPrice' => 50.0,
                    'Quantity' => 2.0,
                    'Subtotal' => 100.0,

                    'Taxes' => [
                        [
                            'Total' => 16.0,
                            'Name' => 'IVA',
                            'Base' => 100.0,
                            'Rate' => 0.16,
                            'IsRetention' => false,
                        ],
                    ],
                    'Total' => 116.0,
                ],
            ],
        ];

        $result = $this->facturama->post('2/cfdis', $params);
        return $result;
    }


    /**
     * Metodo para crear factura CFDI con diferentes RFC
     * @author Luis Perez | luisperezcontreras@gmail.com
     * @param   string  PENDIENTE 
     * @return array 
     */
    public function createInvoice()
    {
        //seccion para registrar certificaos relacionados con un RFC 
        /* $params = [     
            'Rfc' => 'AAA010101AAA',
            'Certificate' => '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',
            'PrivateKey' => 'MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIAgEAAoIBAQACAggAMBQGCCqGSIb3DQMHBAgwggS9AgEAMASCBMh4EHl7aNSCaMDA1VlRoXCZ5UUmqErAbucRBAKNQXH8tz2zJ7hdZaOZx7PEfMiWh5Nh6e8G8kxY+GW4YCSbLxslkhBtfTR6v5JYv3vhgH7XzMCwJPOfX6gxeeCYZ4HTdDNAyBVCjTbJpqbo778ri33o+I4yx7zgMqA3mzVE61re6MPrGXh1YT/K9zZeEdmwvXQfPs9VnioKUhiswoMcJ3kc3FxGLrEAsjQqv/ZVOHPY3NrbcfpQUyprsCKv3rRdxkIRdMPY4eiA720mffzvDqyzeQ8xfwHTE8Xjunja4KXvW/mV7ItTH0vRXHc3HJQ0dNnyawXmbC1FiYbCVdswoYuVQmslvq3QEXUGwP3KYfxQzKatnU7nprkmsipPqPBqDrzqc6NSN/8rxIc5zTAL4bFul+CEKz9VybwdavgewEy7u3fPnKPN+y4HilNgmlbtS7seWpbIgVPA+woG2Ph5hsgREXZCjGKSRuI77/FLcI5CMrZR+FvbnaqG+gXDBTz2lWhK9pmWlVawT2pvfiHOLzYRf2YyuVbJ79D2EgbUKyp3kCQ6fddMzspPhD/pvLQizExeyIxImb/kQXs2mmtDnyFIsj4Hcn5wCcs+SDIj+FJnwRiKB6YfdzjIig/ZMfpgMpl0u69LX649uL318o+Hy3d5t3wxgSkTaJ5McKhWyh9x9vlHZhYyM6HArBNfP9cGF86M3GwAMHAiJQl9UevyKe6rlvAIDlop6l3M02m5hHUXUpPjz4j7inFXZzvSv0tFoSbEqGgno0Pa+0gWHqRwBEGLGEwHVfyEy+Of8g4+0jzo0jNPIcurA5xRh9HSRSAd3kdEhx75eeVL7lBdLjRUkbtRtg7nelSjqAX7tQZK6Awp5C/17W96+f/vtjB+Y+ZgrSUjnQDADnZCnapIrzHgE3ZanhGAtnMMl+o4aLd1+74inG4jht/GJB60raSQfYrDrM3kBs0oyfpbEk5TI8ISzRlRmejv+mqpTogJaAqhnLP7rAli3d4pRhUjbACn/xQSFKxl2OURdmnMlvlbb6pleXviJHRxzPPQ25NVdWvmCYWrDfAZYn8X1sABOdyrth38BfmAVsyyPATYFB+5cXuNIZkPz1swz3859iZWTn5JRfPEAGICu5G6w6nrgOLYM9UqOPmxofzEdiEPafLQ5orMxdSWF6+3mD2Yw/VP+B43B/oYehgfrYjBUJt2D04VU/v8XK1ZUVgX/Co0odcdcszAP+ljQ7UVhW+uxVMd2sEprwepPPjYT3HvdI6RBB94yYBWfkoCSo/jsrrRpw2DVEyvoDp/hOXKyt8Y/8UGLCxJUhhv5fEiezYnlUAmwAGjgZfzfAErx0gkQFBgNKglEA7jz0Dqc2Z92pGVGTyPtXqRsqX3IYX5WsZVUoJim0wI7+LNmKpu147ePC0G4Sf4AGoZyPWVXq2SZSPpN261pIKSoLEDeA8WIKj2U5JG2DMMYokV0bZ1TsabrwHvwsp3muLnaP8L+n2fBplbhAEE2buBXvsATixMGu57ZI5WKFLnHn4KIBrZzALCtGehfFbCsdf1nBR6aAt+BpWhhZki54fZTurgMr6zuC5hAaP4rExW+LCc3upHMW7R9DcHWaZuZIfwnVDImnAQ9UOsz+A=',
            'PrivateKeyPassword' => '12345678a'
        ];
         $lstNameIds = $this->facturama->post('api-lite/csds', $params ); */


        $params = [
            "Issuer" => [
                "FiscalRegime" => "601",
                "Rfc" => "AAA010101AAA",
                "Name" => "EXPRESION EN SOFTWARE"
            ],
            "Receiver" => [
                "Name" => "Entidad receptora",
                "CfdiUse" => "P01",
                "Rfc" => "AAA010101AAA"
            ],
            //agregado NO 
            'Folio' => '102',
            "CfdiType" => "I",
            "NameId" => "1",
            "ExpeditionPlace" => "12345",
            "PaymentForm" => "03",
            "PaymentMethod" => "PUE",
            "Currency" => "MXN",
            "Date" => "2021-01-19T09:51:39",
            "Items" => [
                [
                    "Quantity" => "100",
                    "ProductCode" => "84111506",
                    "UnitCode" => "E48",
                    "Unit" => "Unidad de servicio",
                    "Description" => " API folios adicionales",
                    "IdentificationNumber" => "23",
                    "UnitPrice" => "0.50",
                    "Subtotal" => "50.00",
                    "Discount" => "10",
                    "DiscountVal" => "10",
                    "Taxes" => [
                        [
                            "Name" => "IVA",
                            "Rate" => "0.16",
                            "Total" => "6.4",
                            "Base" => "40",
                            "IsRetention" => "false"
                        ]
                    ],
                    "Total" => "46.40"
                ],
                [
                    "Quantity" => "1",
                    "ProductCode" => "84111506",
                    "UnitCode" => "E48",
                    "Unit" => "Unidad de servicio",
                    "Description" => " API Implementación ",
                    "IdentificationNumber" => "21",
                    "UnitPrice" => "6000.00",
                    "Subtotal" => "6000.00",
                    "Taxes" => [
                        [
                            "Name" => "IVA",
                            "Rate" => "0.16",
                            "Total" => "960",
                            "Base" => "6000",
                            "IsRetention" => "false"
                        ]
                    ],
                    "Total" => "6960.00"
                ]
            ]
        ];

        // $result = $this->facturama->post('2/cfdis', $params);
        // api-lite
        $result = $this->facturama->post('api-lite/2/cfdis', $params);
        return $result;
    }

    /**
     * Metodo que obtiene una factura por medio del ID
     * @author Luis Perez | luisperezcontreras@gmail.com
     * @param   string  PENDIENTE 
     * @return array 
     */
    public function getInvoice()
    {

        $CfdiId = 'ab9PC44sxbs2LUYaGCTm-g2';

        $params = [
            'type' => 'issued',
        ];

        $result = $this->facturama->get('Cfdi/' . $CfdiId, $params);
        return $result;
    }


    public function getPDF()
    {
        /*  https://apisandbox.facturama.mx/api/Cfdi/{format}/{type}/{id}
         en la documentacion define type como : issuedLite  pero ni funciona (issued)
        https://apisandbox.facturama.mx/Docs-multi */
        $CfdiId = 'bKUkTopO8a5V1mPJQqxMBg2';
        $result = $this->facturama->get('cfdi/pdf/issuedLite/' . $CfdiId);
        return $result;
    }

    public function getXML(){
        $CfdiId = 'bKUkTopO8a5V1mPJQqxMBg2';
        $result = $this->facturama->get('Cfdi/xml/issuedLite/' . $CfdiId);
        return $result;
    }


    public function test()
    {
        return ['hola' => 'test e facturacion v1'];
    }
}
// $value[''],
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
    'Folio' => '103',
    "CfdiType" => "I",
    "NameId" => "1",
    "ExpeditionPlace" => "12345",
    "PaymentForm" => "03",
    "PaymentMethod" => "PUE",
    "Currency" => "MXN",
    "Date" => "2021-01-22T09:51:39",
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
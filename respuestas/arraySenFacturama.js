$params = [
    "Issuer" => [
        "FiscalRegime" => "601",
        "Rfc" => $data['biller']['rfc'],
        "Name" => "EXPRESION EN SOFTWARE"
    ],
    "Receiver" => [
        "Name" => $data['bussines'],
        "CfdiUse" => $data['CfdiUse'],
        "Rfc" => $data['rfc']
    ],
    //agregado NO 
    'Folio' => $data['sale_id'],
    "CfdiType" => "I",
    "NameId" => "1",
    "ExpeditionPlace" => $data['zip'],
    "PaymentForm" => $data['PaymentMethod'],
    "PaymentMethod" => $data['PaymentForm'],
    "Currency" => "MXN",
    "Date" => "2021-01-22T09:51:39",
    "Items" => [ //$data['products']
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
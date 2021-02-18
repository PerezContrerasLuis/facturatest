// 0 
$report = detailed_sales;

//1
$report_model: [{
        CI: "",
        params: {},
        settings: {
            permission_action: "view_sales",
            display: "tabular"
        },
        report_limit: "50",
        report_key: "detailed_sales",
        has_profit_permission: "1",
        has_cost_price_permission: "1",
        decimals: "2"
    },
    "</text>"
]

//despuest de setParams  a $report_model
[{
        CI: "",
        params: {
            report_type: "simple",
            report_date_range_simple: "LAST_30",
            start_date_formatted: "30-01-2021 12:00 am",
            start_date: "2021-01-01 00:00:00",
            end_date_formatted: "30-01-2021 11:59 pm",
            end_date: "2021-01-30 23:59:59",
            with_time: "1",
            end_date_end_of_day: "0",
            sale_type: "all",
            cfdi: "all",
            ecommerce: "all",
            export_excel: "0"
        },
        settings: {
            permission_action: "view_sales",
            display: "tabular"
        },
        report_limit: "50",
        report_key: "detailed_sales",
        has_profit_permission: "1",
        has_cost_price_permission: "1",
        decimals: "2"
    },
    "</text>"
]


//2 
get: [{
        report_type: "simple",
        report_date_range_simple: "LAST_30",
        start_date_formatted: "30-01-2021 12:00 am",
        start_date: "2021-01-30 00:00",
        end_date_formatted: "30-01-2021 11:59 pm",
        end_date: "2021-01-30 23:59",
        with_time: "1",
        end_date_end_of_day: "0",
        sale_type: "all",
        cfdi: "all",
        ecommerce: "all",
        export_excel: "0"
    },
    "</text>"
]

//3 
$output_data: [{
        view: "tabular_details_lazy_load",
        title: "Ventas detalladas",
        subtitle: "01-01-2021-30-01-2021",
        headers: {
            summary: {
                0: {
                    data: "Id. de venta",
                    align: "left"
                },
                1: {
                    data: "</text><a href="
                    " target="
                    _blank " id="
                    btn - CFDI " valoresid="
                    " class="
                    btn btn - primary text - white ">Crear CFDI</a> <i class="
                    slectedAll ionicons ion - checkmark - round " selectactive="
                    0 " data-toggle="
                    tooltip " title="
                    Seleccionar Todo "></i>",
                    align: "left"
                },
                2: {
                    data: "Fecha",
                    align: "left"
                },
                3: {
                    data: "Caja registradora",
                    align: "left"
                },
                4: {
                    data: "Artículos comprados",
                    align: "left"
                },
                5: {
                    data: "Vendido por",
                    align: "left"
                },
                6: {
                    data: "Vendido a",
                    align: "left"
                },
                7: {
                    data: "Total parcial",
                    align: "right"
                },
                8: {
                    data: "Totales",
                    align: "right"
                },
                9: {
                    data: "Impuesto",
                    align: "right"
                },
                10: {
                    data: "Ganancia",
                    align: "right"
                },
                11: {
                    data: "Costo de los bienes vendidos",
                    align: "right"
                },
                12: {
                    data: "% Utilidad",
                    align: "right"
                },
                13: {
                    data: "Tipo de pago",
                    align: "right"
                },
                14: {
                    data: "Comentarios",
                    align: "right"
                },
                15: {
                    data: "Motivo de descuento",
                    align: "right"
                },
                16: {
                    data: "PDF Ventas",
                    align: "right"
                },
                17: {
                    data: "Estatus",
                    align: "right"
                },
                18: {
                    data: "Pago",
                    align: "right"
                },
                19: {
                    data: "Fecha de Entrega",
                    align: "right"
                },
                20: {
                    data: "Pago Ecommerce",
                    align: "right"
                },
                21: {
                    data: "Guia",
                    align: "right"
                },
                22: {
                    data: "Folio Factura",
                    align: "right"
                },
                23: {
                    data: "Fecha Factura",
                    align: "right"
                },
                24: {
                    data: "Factura",
                    align: "right"
                },
                25: {
                    data: "Origen",
                    align: "right"
                },
                26: {
                    data: "",
                    align: "right"
                }
            },
            details: {
                0: {
                    data: "Número de artículo",
                    align: "left"
                },
                1: {
                    data: "Identificador del producto",
                    align: "left"
                },
                2: {
                    data: "Nombre",
                    align: "left"
                },
                3: {
                    data: "Categoría",
                    align: "left"
                },
                4: {
                    data: "Tamaño",
                    align: "left"
                },
                5: {
                    data: "Proveedor",
                    align: "left"
                },
                6: {
                    data: "Serie #",
                    align: "left"
                },
                7: {
                    data: "Descripción",
                    align: "left"
                },
                8: {
                    data: "Precio actual de venta",
                    align: "left"
                },
                9: {
                    data: "Cantidad comprada",
                    align: "left"
                },
                10: {
                    data: "Total parcial",
                    align: "right"
                },
                11: {
                    data: "Totales",
                    align: "right"
                },
                12: {
                    data: "Impuesto",
                    align: "right"
                },
                13: {
                    data: "Ganancia",
                    align: "right"
                },
                14: {
                    data: "Costo de los bienes vendidos",
                    align: "right"
                },
                15: {
                    data: "Descuento",
                    align: "right"
                }
            }
        },
        summary_data: {
            0: {
                0: {
                    data: "<a href="
                    HTTPS: //localhost/importer/pos/index.php/sales/receipt/48" target="_blank" class="hidden-print"><i class="ion-printer"></i></a><span class="visible-print">48</span><a href="HTTPS://localhost/importer/pos/index.php/sales/edit/48" target="_blank"><i class="ion-document-text"></i></a> <a href="HTTPS://localhost/importer/pos/index.php/sales/edit/48" target="_blank" class="hidden-print">Editar 48</a>",
                        align: "left",
                    detail_id: "48"
                },
                1: {
                    data: "<i class="
                    slectedID ionicons ion - checkmark - round " select="
                    0 " idsale="
                    48 "></i>",
                    align: "center"
                },
                2: {
                    data: "23-01-2021-01:11 pm",
                    align: "left"
                },
                3: {
                    data: "Default",
                    align: "left"
                },
                4: {
                    data: "1",
                    align: "left"
                },
                5: {
                    data: "John Doe",
                    align: "left"
                },
                6: {
                    data: "<a href="
                    HTTPS: //localhost/importer/pos/index.php/reports/generate/specific_customer?report_type=complex&amp;start_date=2021-01-01 00:00:00&amp;start_date_formatted=01-01-2021 12:00 am&amp;end_date=2021-01-30 23:59:59&amp;end_date_formatted=30-01-2021 11:59 pm&amp;customer_id=10&amp;sale_type=all&amp;export_excel=0" target="_blank">Fernando Ponce (AAA010101AAA)</a>",
                        align: "left"
                },
                7: {
                    data: "$100.00",
                    align: "right"
                },
                8: {
                    data: "$100.00",
                    align: "right"
                },
                9: {
                    data: "$0.00",
                    align: "right"
                },
                10: {
                    data: "$10.00",
                    align: "right"
                },
                11: {
                    data: "$90.00",
                    align: "right"
                },
                12: {
                    data: "0.10%",
                    align: "right"
                },
                13: {
                    data: "Efectivo: $100.00<br>",
                    align: "right"
                },
                14: {
                    data: "",
                    align: "right"
                },
                15: {
                    data: "",
                    align: "right"
                },
                16: {
                    data: "<a href="
                    index.php / sales / PDF_Ventas / 48 " target="
                    _blank " class="
                    btn btn - primary text - white ">Generar PDF</a>",
                    align: "left"
                },
                17: {
                    data: "",
                    align: "right"
                },
                18: {
                    data: "Pagado",
                    align: "right"
                },
                19: {
                    data: "24-01-2021",
                    align: "right"
                },
                20: {
                    data: "Efectivo",
                    align: "right"
                },
                21: {
                    data: "G-123456789FR",
                    align: "right"
                },
                22: {
                    data: "-5",
                    align: "left"
                },
                23: {
                    data: "",
                    align: "left"
                },
                24: {
                    data: "<a href="#
                    " onclick="
                    return false;
                    " class="
                    btn btn - success text - white ">Facturada</a>",
                    align: "left"
                },
                25: {
                    data: "BLUEPOS",
                    align: "left"
                },
                26: {
                    data: "",
                    align: "left"
                }
            },
            1: {
                0: {
                    data: "<a href="
                    HTTPS: //localhost/importer/pos/index.php/sales/receipt/47" target="_blank" class="hidden-print"><i class="ion-printer"></i></a><span class="visible-print">47</span><a href="HTTPS://localhost/importer/pos/index.php/sales/edit/47" target="_blank"><i class="ion-document-text"></i></a> <a href="HTTPS://localhost/importer/pos/index.php/sales/edit/47" target="_blank" class="hidden-print">Editar 47</a>",
                        align: "left",
                    detail_id: "47"
                },
                1: {
                    data: "<i class="
                    slectedID ionicons ion - checkmark - round " select="
                    0 " idsale="
                    47 "></i>",
                    align: "center"
                },
                2: {
                    data: "22-01-2021-12:15 pm",
                    align: "left"
                },
                3: {
                    data: "Default",
                    align: "left"
                },
                4: {
                    data: "3",
                    align: "left"
                },
                5: {
                    data: "John Doe",
                    align: "left"
                },
                6: {
                    data: "<a href="
                    HTTPS: //localhost/importer/pos/index.php/reports/generate/specific_customer?report_type=complex&amp;start_date=2021-01-01 00:00:00&amp;start_date_formatted=01-01-2021 12:00 am&amp;end_date=2021-01-30 23:59:59&amp;end_date_formatted=30-01-2021 11:59 pm&amp;customer_id=10&amp;sale_type=all&amp;export_excel=0" target="_blank">Fernando Ponce (AAA010101AAA)</a>",
                        align: "left"
                },
                7: {
                    data: "$400.00",
                    align: "right"
                },
                8: {
                    data: "$400.00",
                    align: "right"
                },
                9: {
                    data: "$0.00",
                    align: "right"
                },
                10: {
                    data: "$110.00",
                    align: "right"
                },
                11: {
                    data: "$290.00",
                    align: "right"
                },
                12: {
                    data: "0.28%",
                    align: "right"
                },
                13: {
                    data: "Efectivo: $400.00<br>",
                    align: "right"
                },
                14: {
                    data: "segunda compra",
                    align: "right"
                },
                15: {
                    data: "",
                    align: "right"
                },
                16: {
                    data: "<a href="
                    index.php / sales / PDF_Ventas / 47 " target="
                    _blank " class="
                    btn btn - primary text - white ">Generar PDF</a>",
                    align: "left"
                },
                17: {
                    data: "",
                    align: "right"
                },
                18: {
                    data: "Pagado",
                    align: "right"
                },
                19: {
                    data: "23-01-2021",
                    align: "right"
                },
                20: {
                    data: "Efectivo",
                    align: "right"
                },
                21: {
                    data: "G-1234567890",
                    align: "right"
                },
                22: {
                    data: "-3",
                    align: "left"
                },
                23: {
                    data: "",
                    align: "left"
                },
                24: {
                    data: "<a href="#
                    " onclick="
                    return false;
                    " class="
                    btn btn - success text - white ">Facturada</a>",
                    align: "left"
                },
                25: {
                    data: "BLUEPOS",
                    align: "left"
                },
                26: {
                    data: "",
                    align: "left"
                }
            },
            2: {
                0: {
                    data: "<a href="
                    HTTPS: //localhost/importer/pos/index.php/sales/receipt/46" target="_blank" class="hidden-print"><i class="ion-printer"></i></a><span class="visible-print">46</span><a href="HTTPS://localhost/importer/pos/index.php/sales/edit/46" target="_blank"><i class="ion-document-text"></i></a> <a href="HTTPS://localhost/importer/pos/index.php/sales/edit/46" target="_blank" class="hidden-print">Editar 46</a>",
                        align: "left",
                    detail_id: "46"
                },
                1: {
                    data: "<i class="
                    slectedID ionicons ion - checkmark - round " select="
                    0 " idsale="
                    46 "></i>",
                    align: "center"
                },
                2: {
                    data: "20-01-2021-04:41 pm",
                    align: "left"
                },
                3: {
                    data: "Default",
                    align: "left"
                },
                4: {
                    data: "3",
                    align: "left"
                },
                5: {
                    data: "John Doe",
                    align: "left"
                },
                6: {
                    data: "<a href="
                    HTTPS: //localhost/importer/pos/index.php/reports/generate/specific_customer?report_type=complex&amp;start_date=2021-01-01 00:00:00&amp;start_date_formatted=01-01-2021 12:00 am&amp;end_date=2021-01-30 23:59:59&amp;end_date_formatted=30-01-2021 11:59 pm&amp;customer_id=10&amp;sale_type=all&amp;export_excel=0" target="_blank">Fernando Ponce (AAA010101AAA)</a>",
                        align: "left"
                },
                7: {
                    data: "$400.00",
                    align: "right"
                },
                8: {
                    data: "$400.00",
                    align: "right"
                },
                9: {
                    data: "$0.00",
                    align: "right"
                },
                10: {
                    data: "$110.00",
                    align: "right"
                },
                11: {
                    data: "$290.00",
                    align: "right"
                },
                12: {
                    data: "0.28%",
                    align: "right"
                },
                13: {
                    data: "Efectivo: $400.00<br>",
                    align: "right"
                },
                14: {
                    data: "venta de prueba luis ",
                    align: "right"
                },
                15: {
                    data: "",
                    align: "right"
                },
                16: {
                    data: "<a href="
                    index.php / sales / PDF_Ventas / 46 " target="
                    _blank " class="
                    btn btn - primary text - white ">Generar PDF</a>",
                    align: "left"
                },
                17: {
                    data: "",
                    align: "right"
                },
                18: {
                    data: "Pagado",
                    align: "right"
                },
                19: {
                    data: "21-01-2021",
                    align: "right"
                },
                20: {
                    data: "Efectivo",
                    align: "right"
                },
                21: {
                    data: "G-1234567890",
                    align: "right"
                },
                22: {
                    data: "",
                    align: "left"
                },
                23: {
                    data: "",
                    align: "left"
                },
                24: {
                    data: "<a href="#
                    " onclick="
                    return false;
                    " class="
                    btn btn - danger text - white ">Sin Factura</a>",
                    align: "left"
                },
                25: {
                    data: "BLUEPOS",
                    align: "left"
                },
                26: {
                    data: "",
                    align: "left"
                }
            }
        },
        overall_summary_data: {
            subtotal: "900",
            total: "900",
            tax: "0",
            profit: "230",
            cogs: "670"
        },
        export_excel: "0",
        pagination: "",
        report_model: "Detailed_sales"
    },
    "</i></i></i></i></i></i>"
]

//4
categories: [{
        1: {
            depth: "0",
            name: "Default",
            hide_from_grid: "0",
            parent_id: ""
        }
    },
    "</text>"
]

//5
$data: [{
        input_data: {
            report_date_range_simple: {
                TODAY: "Hoy",
                YESTERDAY: "Ayer",
                LAST_7: "Últimos 7 días",
                LAST_30: "Últimos 30 días",
                THIS_WEEK: "Esta semana",
                LAST_WEEK: "La semana pasada",
                THIS_MONTH: "Este mes",
                LAST_MONTH: "Mes pasado",
                THIS_QUARTER: "Este trimestre",
                LAST_QUARTER: "Último trimestre",
                THIS_YEAR: "Este año",
                LAST_YEAR: "Año pasado",
                ALL_TIME: "Todos",
                CUSTOM: "Intervalo de fechas personalizado"
            },
            report_date_range_simple_compare: {
                NEXT_PERIOD: "Periodo siguiente",
                PREVIOUS_PERIOD: "Periodo anterior",
                SAME_DATE_LAST_YEAR: "Mismas fechas del año anterior",
                TODAY: "Hoy",
                YESTERDAY: "Ayer",
                LAST_7: "Últimos 7 días",
                LAST_30: "Últimos 30 días",
                THIS_WEEK: "Esta semana",
                LAST_WEEK: "La semana pasada",
                THIS_MONTH: "Este mes",
                LAST_MONTH: "Mes pasado",
                THIS_QUARTER: "Este trimestre",
                LAST_QUARTER: "Último trimestre",
                THIS_YEAR: "Este año",
                LAST_YEAR: "Año pasado",
                ALL_TIME: "Todos",
                CUSTOM: "Intervalo de fechas personalizado"
            },
            months: {
                10: "Octubre",
                11: "Noviembre",
                12: "Diciembre",
                01: "Enero",
                02: "Febrero",
                03: "Marzo",
                04: "Abril",
                05: "Mayo",
                06: "Junio",
                07: "Julio",
                08: "Agosto",
                09: "Septiembre"
            },
            days: {
                10: "10",
                11: "11",
                12: "12",
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
                19: "19",
                20: "20",
                21: "21",
                22: "22",
                23: "23",
                24: "24",
                25: "25",
                26: "26",
                27: "27",
                28: "28",
                29: "29",
                30: "30",
                31: "31",
                01: "1",
                02: "2",
                03: "3",
                04: "4",
                05: "5",
                06: "6",
                07: "7",
                08: "8",
                09: "9"
            },
            years: {
                2012: "2012",
                2013: "2013",
                2014: "2014",
                2015: "2015",
                2016: "2016",
                2017: "2017",
                2018: "2018",
                2019: "2019",
                2020: "2020",
                2021: "2021"
            },
            hours: {
                0: "12 am",
                1: "01 am",
                2: "02 am",
                3: "03 am",
                4: "04 am",
                5: "05 am",
                6: "06 am",
                7: "07 am",
                8: "08 am",
                9: "09 am",
                10: "10 am",
                11: "11 am",
                12: "12 pm",
                13: "01 pm",
                14: "02 pm",
                15: "03 pm",
                16: "04 pm",
                17: "05 pm",
                18: "06 pm",
                19: "07 pm",
                20: "08 pm",
                21: "09 pm",
                22: "10 pm",
                23: "11 pm"
            },
            minutes: {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
                19: "19",
                20: "20",
                21: "21",
                22: "22",
                23: "23",
                24: "24",
                25: "25",
                26: "26",
                27: "27",
                28: "28",
                29: "29",
                30: "30",
                31: "31",
                32: "32",
                33: "33",
                34: "34",
                35: "35",
                36: "36",
                37: "37",
                38: "38",
                39: "39",
                40: "40",
                41: "41",
                42: "42",
                43: "43",
                44: "44",
                45: "45",
                46: "46",
                47: "47",
                48: "48",
                49: "49",
                50: "50",
                51: "51",
                52: "52",
                53: "53",
                54: "54",
                55: "55",
                56: "56",
                57: "57",
                58: "58",
                59: "59"
            },
            selected_month: "01",
            selected_day: "30",
            selected_year: "2021",
            intervals: {
                1800: "30 Minutos",
                3600: "60 Minutos",
                5400: "90 Minutos",
                7200: "120 Minutos",
                9000: "150 Minutos",
                10800: "180 Minutos"
            },
            input_report_title: "Opciones de informe",
            input_params: {
                0: {
                    view: "date_range",
                    with_time: "1"
                },
                1: {
                    view: "dropdown",
                    dropdown_label: "Tipo de venta",
                    dropdown_name: "sale_type",
                    dropdown_options: {
                        all: "Todo",
                        sales: "Ventas",
                        returns: "Devoluciones",
                        abono: "Abono"
                    },
                    dropdown_selected_value: "all"
                },
                2: {
                    view: "dropdown",
                    dropdown_label: "Con CFDI",
                    dropdown_name: "cfdi",
                    dropdown_options: {
                        all: "Todo",
                        Si: "Si",
                        No: "No"
                    },
                    dropdown_selected_value: "all"
                },
                3: {
                    view: "dropdown",
                    dropdown_label: "Ecommerce",
                    dropdown_name: "ecommerce",
                    dropdown_options: {
                        all: "Todo",
                        Si: "Si",
                        No: "No"
                    },
                    dropdown_selected_value: "all"
                },
                4: {
                    view: "checkbox",
                    checkbox_label: "Mostrar solo el resumen",
                    checkbox_name: "show_summary_only"
                },
                5: {
                    view: "excel_export"
                },
                6: {
                    view: "locations"
                },
                7: {
                    view: "submit"
                }
            }
        },
        output_data: {
            view: "tabular_details_lazy_load",
            title: "Ventas detalladas",
            subtitle: "01-01-2021-30-01-2021",
            headers: {
                summary: {
                    0: {
                        data: "Id. de venta",
                        align: "left"
                    },
                    1: {
                        data: "</text><a href="
                        " target="
                        _blank " id="
                        btn - CFDI " valoresid="
                        " class="
                        btn btn - primary text - white ">Crear CFDI</a> <i class="
                        slectedAll ionicons ion - checkmark - round " selectactive="
                        0 " data-toggle="
                        tooltip " title="
                        Seleccionar Todo "></i>",
                        align: "left"
                    },
                    2: {
                        data: "Fecha",
                        align: "left"
                    },
                    3: {
                        data: "Caja registradora",
                        align: "left"
                    },
                    4: {
                        data: "Artículos comprados",
                        align: "left"
                    },
                    5: {
                        data: "Vendido por",
                        align: "left"
                    },
                    6: {
                        data: "Vendido a",
                        align: "left"
                    },
                    7: {
                        data: "Total parcial",
                        align: "right"
                    },
                    8: {
                        data: "Totales",
                        align: "right"
                    },
                    9: {
                        data: "Impuesto",
                        align: "right"
                    },
                    10: {
                        data: "Ganancia",
                        align: "right"
                    },
                    11: {
                        data: "Costo de los bienes vendidos",
                        align: "right"
                    },
                    12: {
                        data: "% Utilidad",
                        align: "right"
                    },
                    13: {
                        data: "Tipo de pago",
                        align: "right"
                    },
                    14: {
                        data: "Comentarios",
                        align: "right"
                    },
                    15: {
                        data: "Motivo de descuento",
                        align: "right"
                    },
                    16: {
                        data: "PDF Ventas",
                        align: "right"
                    },
                    17: {
                        data: "Estatus",
                        align: "right"
                    },
                    18: {
                        data: "Pago",
                        align: "right"
                    },
                    19: {
                        data: "Fecha de Entrega",
                        align: "right"
                    },
                    20: {
                        data: "Pago Ecommerce",
                        align: "right"
                    },
                    21: {
                        data: "Guia",
                        align: "right"
                    },
                    22: {
                        data: "Folio Factura",
                        align: "right"
                    },
                    23: {
                        data: "Fecha Factura",
                        align: "right"
                    },
                    24: {
                        data: "Factura",
                        align: "right"
                    },
                    25: {
                        data: "Origen",
                        align: "right"
                    },
                    26: {
                        data: "",
                        align: "right"
                    }
                },
                details: {
                    0: {
                        data: "Número de artículo",
                        align: "left"
                    },
                    1: {
                        data: "Identificador del producto",
                        align: "left"
                    },
                    2: {
                        data: "Nombre",
                        align: "left"
                    },
                    3: {
                        data: "Categoría",
                        align: "left"
                    },
                    4: {
                        data: "Tamaño",
                        align: "left"
                    },
                    5: {
                        data: "Proveedor",
                        align: "left"
                    },
                    6: {
                        data: "Serie #",
                        align: "left"
                    },
                    7: {
                        data: "Descripción",
                        align: "left"
                    },
                    8: {
                        data: "Precio actual de venta",
                        align: "left"
                    },
                    9: {
                        data: "Cantidad comprada",
                        align: "left"
                    },
                    10: {
                        data: "Total parcial",
                        align: "right"
                    },
                    11: {
                        data: "Totales",
                        align: "right"
                    },
                    12: {
                        data: "Impuesto",
                        align: "right"
                    },
                    13: {
                        data: "Ganancia",
                        align: "right"
                    },
                    14: {
                        data: "Costo de los bienes vendidos",
                        align: "right"
                    },
                    15: {
                        data: "Descuento",
                        align: "right"
                    }
                }
            },
            summary_data: {
                0: {
                    0: {
                        data: "<a href="
                        HTTPS: //localhost/importer/pos/index.php/sales/receipt/48" target="_blank" class="hidden-print"><i class="ion-printer"></i></a><span class="visible-print">48</span><a href="HTTPS://localhost/importer/pos/index.php/sales/edit/48" target="_blank"><i class="ion-document-text"></i></a> <a href="HTTPS://localhost/importer/pos/index.php/sales/edit/48" target="_blank" class="hidden-print">Editar 48</a>",
                            align: "left",
                        detail_id: "48"
                    },
                    1: {
                        data: "<i class="
                        slectedID ionicons ion - checkmark - round " select="
                        0 " idsale="
                        48 "></i>",
                        align: "center"
                    },
                    2: {
                        data: "23-01-2021-01:11 pm",
                        align: "left"
                    },
                    3: {
                        data: "Default",
                        align: "left"
                    },
                    4: {
                        data: "1",
                        align: "left"
                    },
                    5: {
                        data: "John Doe",
                        align: "left"
                    },
                    6: {
                        data: "<a href="
                        HTTPS: //localhost/importer/pos/index.php/reports/generate/specific_customer?report_type=complex&amp;start_date=2021-01-01 00:00:00&amp;start_date_formatted=01-01-2021 12:00 am&amp;end_date=2021-01-30 23:59:59&amp;end_date_formatted=30-01-2021 11:59 pm&amp;customer_id=10&amp;sale_type=all&amp;export_excel=0" target="_blank">Fernando Ponce (AAA010101AAA)</a>",
                            align: "left"
                    },
                    7: {
                        data: "$100.00",
                        align: "right"
                    },
                    8: {
                        data: "$100.00",
                        align: "right"
                    },
                    9: {
                        data: "$0.00",
                        align: "right"
                    },
                    10: {
                        data: "$10.00",
                        align: "right"
                    },
                    11: {
                        data: "$90.00",
                        align: "right"
                    },
                    12: {
                        data: "0.10%",
                        align: "right"
                    },
                    13: {
                        data: "Efectivo: $100.00<br>",
                        align: "right"
                    },
                    14: {
                        data: "",
                        align: "right"
                    },
                    15: {
                        data: "",
                        align: "right"
                    },
                    16: {
                        data: "<a href="
                        index.php / sales / PDF_Ventas / 48 " target="
                        _blank " class="
                        btn btn - primary text - white ">Generar PDF</a>",
                        align: "left"
                    },
                    17: {
                        data: "",
                        align: "right"
                    },
                    18: {
                        data: "Pagado",
                        align: "right"
                    },
                    19: {
                        data: "24-01-2021",
                        align: "right"
                    },
                    20: {
                        data: "Efectivo",
                        align: "right"
                    },
                    21: {
                        data: "G-123456789FR",
                        align: "right"
                    },
                    22: {
                        data: "-5",
                        align: "left"
                    },
                    23: {
                        data: "",
                        align: "left"
                    },
                    24: {
                        data: "<a href="#
                        " onclick="
                        return false;
                        " class="
                        btn btn - success text - white ">Facturada</a>",
                        align: "left"
                    },
                    25: {
                        data: "BLUEPOS",
                        align: "left"
                    },
                    26: {
                        data: "",
                        align: "left"
                    }
                },
                1: {
                    0: {
                        data: "<a href="
                        HTTPS: //localhost/importer/pos/index.php/sales/receipt/47" target="_blank" class="hidden-print"><i class="ion-printer"></i></a><span class="visible-print">47</span><a href="HTTPS://localhost/importer/pos/index.php/sales/edit/47" target="_blank"><i class="ion-document-text"></i></a> <a href="HTTPS://localhost/importer/pos/index.php/sales/edit/47" target="_blank" class="hidden-print">Editar 47</a>",
                            align: "left",
                        detail_id: "47"
                    },
                    1: {
                        data: "<i class="
                        slectedID ionicons ion - checkmark - round " select="
                        0 " idsale="
                        47 "></i>",
                        align: "center"
                    },
                    2: {
                        data: "22-01-2021-12:15 pm",
                        align: "left"
                    },
                    3: {
                        data: "Default",
                        align: "left"
                    },
                    4: {
                        data: "3",
                        align: "left"
                    },
                    5: {
                        data: "John Doe",
                        align: "left"
                    },
                    6: {
                        data: "<a href="
                        HTTPS: //localhost/importer/pos/index.php/reports/generate/specific_customer?report_type=complex&amp;start_date=2021-01-01 00:00:00&amp;start_date_formatted=01-01-2021 12:00 am&amp;end_date=2021-01-30 23:59:59&amp;end_date_formatted=30-01-2021 11:59 pm&amp;customer_id=10&amp;sale_type=all&amp;export_excel=0" target="_blank">Fernando Ponce (AAA010101AAA)</a>",
                            align: "left"
                    },
                    7: {
                        data: "$400.00",
                        align: "right"
                    },
                    8: {
                        data: "$400.00",
                        align: "right"
                    },
                    9: {
                        data: "$0.00",
                        align: "right"
                    },
                    10: {
                        data: "$110.00",
                        align: "right"
                    },
                    11: {
                        data: "$290.00",
                        align: "right"
                    },
                    12: {
                        data: "0.28%",
                        align: "right"
                    },
                    13: {
                        data: "Efectivo: $400.00<br>",
                        align: "right"
                    },
                    14: {
                        data: "segunda compra",
                        align: "right"
                    },
                    15: {
                        data: "",
                        align: "right"
                    },
                    16: {
                        data: "<a href="
                        index.php / sales / PDF_Ventas / 47 " target="
                        _blank " class="
                        btn btn - primary text - white ">Generar PDF</a>",
                        align: "left"
                    },
                    17: {
                        data: "",
                        align: "right"
                    },
                    18: {
                        data: "Pagado",
                        align: "right"
                    },
                    19: {
                        data: "23-01-2021",
                        align: "right"
                    },
                    20: {
                        data: "Efectivo",
                        align: "right"
                    },
                    21: {
                        data: "G-1234567890",
                        align: "right"
                    },
                    22: {
                        data: "-3",
                        align: "left"
                    },
                    23: {
                        data: "",
                        align: "left"
                    },
                    24: {
                        data: "<a href="#
                        " onclick="
                        return false;
                        " class="
                        btn btn - success text - white ">Facturada</a>",
                        align: "left"
                    },
                    25: {
                        data: "BLUEPOS",
                        align: "left"
                    },
                    26: {
                        data: "",
                        align: "left"
                    }
                },
                2: {
                    0: {
                        data: "<a href="
                        HTTPS: //localhost/importer/pos/index.php/sales/receipt/46" target="_blank" class="hidden-print"><i class="ion-printer"></i></a><span class="visible-print">46</span><a href="HTTPS://localhost/importer/pos/index.php/sales/edit/46" target="_blank"><i class="ion-document-text"></i></a> <a href="HTTPS://localhost/importer/pos/index.php/sales/edit/46" target="_blank" class="hidden-print">Editar 46</a>",
                            align: "left",
                        detail_id: "46"
                    },
                    1: {
                        data: "<i class="
                        slectedID ionicons ion - checkmark - round " select="
                        0 " idsale="
                        46 "></i>",
                        align: "center"
                    },
                    2: {
                        data: "20-01-2021-04:41 pm",
                        align: "left"
                    },
                    3: {
                        data: "Default",
                        align: "left"
                    },
                    4: {
                        data: "3",
                        align: "left"
                    },
                    5: {
                        data: "John Doe",
                        align: "left"
                    },
                    6: {
                        data: "<a href="
                        HTTPS: //localhost/importer/pos/index.php/reports/generate/specific_customer?report_type=complex&amp;start_date=2021-01-01 00:00:00&amp;start_date_formatted=01-01-2021 12:00 am&amp;end_date=2021-01-30 23:59:59&amp;end_date_formatted=30-01-2021 11:59 pm&amp;customer_id=10&amp;sale_type=all&amp;export_excel=0" target="_blank">Fernando Ponce (AAA010101AAA)</a>",
                            align: "left"
                    },
                    7: {
                        data: "$400.00",
                        align: "right"
                    },
                    8: {
                        data: "$400.00",
                        align: "right"
                    },
                    9: {
                        data: "$0.00",
                        align: "right"
                    },
                    10: {
                        data: "$110.00",
                        align: "right"
                    },
                    11: {
                        data: "$290.00",
                        align: "right"
                    },
                    12: {
                        data: "0.28%",
                        align: "right"
                    },
                    13: {
                        data: "Efectivo: $400.00<br>",
                        align: "right"
                    },
                    14: {
                        data: "venta de prueba luis ",
                        align: "right"
                    },
                    15: {
                        data: "",
                        align: "right"
                    },
                    16: {
                        data: "<a href="
                        index.php / sales / PDF_Ventas / 46 " target="
                        _blank " class="
                        btn btn - primary text - white ">Generar PDF</a>",
                        align: "left"
                    },
                    17: {
                        data: "",
                        align: "right"
                    },
                    18: {
                        data: "Pagado",
                        align: "right"
                    },
                    19: {
                        data: "21-01-2021",
                        align: "right"
                    },
                    20: {
                        data: "Efectivo",
                        align: "right"
                    },
                    21: {
                        data: "G-1234567890",
                        align: "right"
                    },
                    22: {
                        data: "",
                        align: "left"
                    },
                    23: {
                        data: "",
                        align: "left"
                    },
                    24: {
                        data: "<a href="#
                        " onclick="
                        return false;
                        " class="
                        btn btn - danger text - white ">Sin Factura</a>",
                        align: "left"
                    },
                    25: {
                        data: "BLUEPOS",
                        align: "left"
                    },
                    26: {
                        data: "",
                        align: "left"
                    }
                }
            },
            overall_summary_data: {
                subtotal: "900",
                total: "900",
                tax: "0",
                profit: "230",
                cogs: "670"
            },
            export_excel: "0",
            pagination: "",
            report_model: "Detailed_sales"
        },
        key: "",
        report: "detailed_sales",
        categories: {
            categories: {
                1: "Default"
            }
        },
        payment_types: {
            payment_types: {
                Efectivo: "Efectivo",
                Cheque: "Cheque",
                Saldo a favor: "Saldo a favor",
                Tarjeta de débito: "Tarjeta de débito",
                Tarjeta de crédito: "Tarjeta de crédito",
                Línea de crédito: "Línea de crédito",
                Puntos: "Puntos",
                Transferencia: "Transferencia",
                Deposito: "Deposito",
                En linea: "En linea"
            }
        }
    },
    "</i></i></i></i></i></i>"
]
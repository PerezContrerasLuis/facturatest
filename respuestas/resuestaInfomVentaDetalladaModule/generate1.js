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

//2 
get: '';

//3 
$output_data: '';

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
        output_data: {},
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
    "</text>"
]
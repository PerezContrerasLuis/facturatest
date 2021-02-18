[{
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
            months: {},
            days: {},
            years: {},
            hours: {},
            minutes: {},
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
                summary: {},
                details: {}
            },
            summary_data: {
                0: {},
                1: {},
                2: {}
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
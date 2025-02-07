import spanishMessages from "ra-language-spanish";

console.log({spanishMessages});
export const spanish = {
    ...spanishMessages,
    resources: {
        patients: {
            name: 'Pacientes',
            singularName: 'Paciente',
        },
        turns: {
            name: 'Turnos',
            singularName: 'Turno',
        }
    },
    ra: {
        ...spanishMessages.ra,
        action: {
            ...spanishMessages.ra?.action,
            delete: "Eliminar",
            show: "Mostrar",
            list: "Lista",
            save: "Confirmar",
            create: "Nuevo",
            edit: "Editar",
            cancel: "Cancelar",
            search: "Buscar",
            export: "Exportar",
            select_columns: "Columnas",
            confirm: "Confirmar"
        },
        navigation: {
            ...spanishMessages.ra?.navigation,
            page_rows_per_page: "Registros por página",
            home: "Inicio",
            skip_nav: "Abrir / Cerrar menú"
        }
    },
    custom: {
        states: {
            pending: "Pendiente",
            completed: "Completado",
            cancelled: "Cancelado"
        }
    }
};

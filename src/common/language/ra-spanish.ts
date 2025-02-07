import spanishMessages from "ra-language-spanish";

export const spanish = {
    ...spanishMessages,
    resources: {
        'clinical-stories': {
            name: 'Historias Clínicas',
            singularName: 'Historia Clínica'
        },
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
        auth: {
            ...spanishMessages.ra.auth,
            auth_check_error: "Error de autenticación",
        },
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
        },
        page: {
            empty: "No hay registros",
            invite: "Crear nuevo"
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

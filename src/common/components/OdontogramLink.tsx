type OdontogramLinkProps = {
    odontogramUrl: string;
};

export const OdontogramLink = ({odontogramUrl}: OdontogramLinkProps) => {
    return (
        <a href={`${import.meta.env.VITE_SIMPLE_REST_URL}${odontogramUrl}`} target="_blank" rel="noopener noreferrer">
            Ver Odontograma
        </a>
    );
}

import React from 'react';
import { useImagenes } from '../hooks/useBuscador'
import { BuscarImagen } from './BuscarImagen'
import { ContenedorImagen } from './ContenedorImagen'

export const BuscadorImagenesApp = () => {
    const { handleGetImagenes, imagenes, nombreImagen, setNombreImagen, pagina, totalPaginas, handlePageChange } = useImagenes();

    return (
        <div className="min-vh-100 ">
            <BuscarImagen
                handleGetImagenes={handleGetImagenes}
                nombreImagen={nombreImagen}
                setNombreImagen={setNombreImagen}
            />
            <ContenedorImagen
                imagenes={imagenes}
                pagina={pagina}
                totalPaginas={totalPaginas}
                handlePageChange={handlePageChange}
            />
        </div>
    )
}



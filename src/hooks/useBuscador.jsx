import { useState } from 'react'
import { reqImagen } from '../service/imagenes'

export const useImagenes = () => {
    const [imagenes, setImagenes] = useState([]);
    const [nombreImagen, setNombreImagen] = useState('');
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const handleGetImagenes = async (e) => {
        if (e) e.preventDefault();  // Solo prevenir el comportamiento predeterminado si e está definido

        try {
            const data = await reqImagen(nombreImagen, pagina);
            setImagenes(data.results);
            setTotalPaginas(data.total_pages);
        } catch (err) {
            console.error('Error al obtener las imágenes:', err);
        }
    }

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPaginas) {
            setPagina(newPage);
            handleGetImagenes();
        }
    }

    return {
        handleGetImagenes,
        imagenes,
        nombreImagen,
        setNombreImagen,
        pagina,
        totalPaginas,
        handlePageChange
    }
}




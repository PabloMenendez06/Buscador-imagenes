import React from 'react'

export const BuscarImagen = ({ handleGetImagenes, nombreImagen, setNombreImagen }) => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Buscador de Imágenes</h1>
            <form onSubmit={handleGetImagenes} className="d-flex flex-column align-items-center mb-4">
                <div className="form-group w-75">
                    <label htmlFor="searchInput" className="form-label">Nombre de la Imagen</label>
                    <input
                        type="text"
                        id="searchInput"
                        className="form-control"
                        placeholder="Ingrese el nombre de la imagen"
                        value={nombreImagen}
                        onChange={(e) => setNombreImagen(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark mt-3">Buscar Imágenes</button>
            </form>
        </div>
    )
}



 
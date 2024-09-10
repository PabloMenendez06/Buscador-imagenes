import React from 'react'

export const ContenedorImagen = ({ imagenes, pagina, totalPaginas, handlePageChange }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {imagenes.map(imagen => (
                    <div key={imagen.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src={imagen.url} alt={imagen.description} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">ID: {imagen.id}</h5>
                                <p className="card-text">Descripcion: {imagen.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPaginas > 1 && (
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mt-4">
                        <li className={`page-item ${pagina === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(pagina - 1)}>Anterior</button>
                        </li>
                        {[...Array(Math.min(5, totalPaginas)).keys()].map(num => {
                            const pageNumber = Math.max(1, pagina - 2) + num;
                            return pageNumber <= totalPaginas ? (
                                <li key={pageNumber} className={`page-item ${pagina === pageNumber ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                                </li>
                            ) : null;
                        })}
                        <li className={`page-item ${pagina === totalPaginas ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(pagina + 1)}>Siguiente</button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    )
}





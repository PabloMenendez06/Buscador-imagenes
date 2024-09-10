const clientId = 'U6h8eAlXYafq8MvRqKQFJSBZKtCDqL2rco9lG79Lxqc'

export const reqImagen = async (nombre, pagina = 1) => {
    try {
        const perPage = 30;
        const resp = await fetch(`https://api.unsplash.com/search/photos?query=${nombre}&page=${pagina}&per_page=${perPage}&client_id=${clientId}&lang=es`);
        const data = await resp.json();
        console.log(data);

        return {
            results: data.results.map(imagen => ({
                id: imagen.id,
                url: imagen.urls.regular,
                description: imagen.alt_description || imagen.alternative_slugs?.es
            })),
            total_pages: data.total_pages
        }
        
    } catch (err) {
        console.error('Error al obtener las imágenes:', err);
        throw err; 
    }
}


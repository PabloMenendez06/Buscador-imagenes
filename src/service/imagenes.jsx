const clientId = 'bmaEx_S5_1kC2wa57bUD7FTCttaMhue6Pg_q3d5oQCY'
export const reqImagen = async (nombre) => {
    try {
        const resp = await fetch(`https://api.unsplash.com/search/photos?query=${nombre}&client_id=${clientId}`);
        const data = await resp.json();

        const imagen = {
            id: data.id
        };

        console.log(imagen);
        return imagen;
        
    } catch (err) {
        console.error(err);
        throw err; 
    }
};
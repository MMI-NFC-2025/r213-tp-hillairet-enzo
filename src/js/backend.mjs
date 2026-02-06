import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    try {
        let data = await pb.collection('Maison').getFullList({
            sort: '-created',
        });
        
        data = data.map((maison) => {
            maison.imgUrl = pb.files.getURL(maison, maison.images);
            return maison;
        });

        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getOffre(id) {
    try {
        let data = await pb.collection('Maison').getOne(id);
        data.imgUrl = pb.files.getURL(data, data.images);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function filterBySurface(surfaceMin) {
    try {
        const s = parseInt(surfaceMin);
        
        const records = await pb.collection('Maison').getFullList({
            filter: `surface > ${s}`, 
            sort: '-created',
        });

        const recordsWithImages = records.map((maison) => {
            maison.imgUrl = pb.files.getURL(maison, maison.images);
            return maison;
        });

        return recordsWithImages;

    } catch (error) {
        console.log('Erreur filterBySurface :', error);
        return [];
    }
}

export function getImageUrl(record, filename) {
    if (filename) {
        return pb.files.getURL(record, filename);
    }
    return null;
}
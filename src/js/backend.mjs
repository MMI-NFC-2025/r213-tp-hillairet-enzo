import PocketBase from 'pocketbase';

const db = new PocketBase('http://localhost:8090');
export async function getOffres() {
    
    try {
        let data = await db.collection('Maison').getFullList({
            sort: '-created', 
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    const url = db.files.getUrl(record, recordImage);
    return url;
}


export async function getOffre(id) {
    try {
        let data = await pb.collection('Maison').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.images);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function filterBySurface(surfaceMin) {
    try {
        console.log("--- TEST FORCE ---");
        
        const records = await pb.collection('Maison').getFullList({
            filter: 'surface > 0', 
        });

        console.log("Résultats trouvés avec surface > 0 :", records.length);
        return records;

    } catch (error) {
        console.log('Erreur :', error);
        return [];
    }
}
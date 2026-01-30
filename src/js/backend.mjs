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
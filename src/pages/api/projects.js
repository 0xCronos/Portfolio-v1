import firebase from '../../../firebase';

export default async (req, res) => {
    if (req.method !== 'GET'){
        res.status(405).json({
            error: true,
            message: 'invalid method'
        });
        return;
    }

    const snapshot = await firebase.db.collection('projects').get();
    const data = snapshot.docs.map( doc => {
        return {
            id: doc.id,
            ...doc.data(),
        }
    });

    res.status(200).json({
        projects: data
    });
};
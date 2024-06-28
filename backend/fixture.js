const { MongoClient } = require('mongodb');

async function main() {
    const uri = process.env.MONGODB_CONNECTION_URI; 
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('nom_de_votre_base_de_donnees');
        const collection = database.collection('nom_de_votre_collection');

        const fixtures = [
            {
                name: 'John Doe',
                email: 'johndoe@example.com',
                age: 28
            },
            {
                name: 'Jane Smith',
                email: 'janesmith@example.com',
                age: 34
            }
        ];

        const result = await collection.insertMany(fixtures);
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

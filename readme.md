# Readme

## Fonctionnalités

    - Initialisation de la BDD
        Bastien

    - Possibilité d'enregistrer la voix du client et de générer une retranscription automatique :
        Benoît, Raphael

    - Envoie les données enregistrées (à la fois la retranscription et le fichier audio).
        Bastien

    - Génère un résumé concis de la retranscription grâce à Mistral.
        Nicolas

    - Affiche un tableau contenant toutes les données des clients.
        Benoît, Bastien, Raphael, Nicolas

    - Affiche les messages reçus (SMS ou audio/résumé) et permet d'envoyer des messages personnalisés.
        Benoît, Raphael, Nicolas

    - Mistral estime la priorité du client et fournit une évaluation de l'état du patient basé sur l'audio.
        Nicolas

    - Authentification nécessaire pour accéder au tableau de bord des clients.
        Bastien, Clément

## Installation

```bash
git clone
```

### Back :

Dans le .env mettre une cle API Mistral et une BDD Mongo

```bash
cd backend
yarn install
yarn start
```

### Front :

```bash
cd frontend
yarn install
yarn dev
```

## Contributors

- SELWA Raphael : RSelwa
- CAPELLA Nicolas : xxcolas
- PIEDALLU Bastien : Stabien
- BILLIEN Clement : cbillien
- DE CARLI Benoît : BenoitApps

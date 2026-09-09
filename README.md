# Travel Explorer

Application web permettant d'explorer des pays et de rechercher des informations sur ceux-ci.

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- React Hook Form
- Zod
- Firebase
- REST Countries API

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/MansTom1/explorer-pays.git
cd explorer-pays
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer le fichier `.env.local` à partir du fichier `.env.example` :

```bash
cp .env.example .env.local
```

Puis renseigner les valeurs nécessaires dans `.env.local` :

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_REST_COUNTRIES_API_KEY=
```

Les valeurs Firebase doivent correspondre à une application Web Firebase configurée pour le projet.

La clé REST Countries doit également être configurée pour autoriser l'utilisation depuis `localhost`.

### 4. Lancer l'application

```bash
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite dans le terminal.

## Build

Pour vérifier que le projet peut être compilé :

```bash
npm run build
```

## Fonctionnalités actuelles

- Inscription
- Connexion
- Déconnexion
- Réinitialisation du mot de passe
- Protection de la page profil
- Récupération des pays depuis REST Countries
- Recherche de pays
- Suggestions pendant la saisie
- Affichage des informations principales d'un pays
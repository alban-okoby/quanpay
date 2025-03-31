## Quanpay
Quanpay est une application sectionnée en architecture ```LIENT-SERVER```

### Structure du projet 
Voici la structure de répertoires de l'application
<img src="https://github.com/alban-okoby/quanpay/blob/main/webapp/public/assets/img/structure.PNG" />

## Lancement de l'application Quanpay
Prérequis

Avant de commencer, assurez-vous d'avoir *Docker* et *Docker compose* installés sur votre machine :

### Étapes pour Lancer l'Application avec Docker Compose
- 1. Construire les images Docker
La première étape consiste à construire les images Docker pour tous les services définis dans le fichier ```compose.yml```. Pour ce faire, dans votre terminal, exécutez la commande suivante :
```
docker compose up
```
Cela va démarrer tous les services définis dans le fichier *compose.yml* :

- Le backend (API) sera accessible sur http://localhost:8000.

- Le frontend (webapp) sera accessible sur http://localhost:4200.

La base de données PostgreSQL sera accessible via l'adresse interne du réseau Docker, au sein du service db (port 5432).

### Accéder à l'Application
Une fois les conteneurs démarrés comme sur la capture ci-dessous 
<img src="https://github.com/alban-okoby/quanpay/blob/main/webapp/public/assets/screensshots/frontend_success.PNG" />

A la fin du démarrage des applications, un utilisateur est auto-créer pour vous permettre d'accéder à l'interface principale (dashbord)
- identifiant : albanokoby225@gmail.com
- password: strong@1234

Ouvrez un navigateur et allez sur http://localhost:4200 pour accéder à l'interface utilisateur.

<img src="https://github.com/alban-okoby/quanpay/blob/main/webapp/public/assets/screensshots/login_page.png" />


Si les informations sont bien renseignées, vous aller voir la page d'acceuil suivante : 
<img src="https://github.com/alban-okoby/quanpay/blob/main/webapp/public/assets/screensshots/dash.png" />


### Arrêter et Supprimer les Conteneurs
Lorsque vous avez terminé, vous pouvez arrêter tous les conteneurs en exécutant la commande suivante :
```
docker-compose down
```
Pour ce projet, j'ai choisi *Angular* pour le frontend car il me permet de créer des interfaces réactives et modulaires rapidement, avec TypeScript pour plus de typage. Le Lazy Loading améliore encore les performances.

Pour le backend, Spring Boot est parfait pour me développer des API REST rapidement, avec une configuration minimale, il offre des outils de sécurité robustes via Spring Security. Il s'intègre bien plusieurs bases de données, j'ai donc pris PostgreSQL qui est un choix populaire dans le Relationnel.

Le projet n'est pas terminé et j'aurai aimé faire plus. Je conclus par dire que ces deux technologies sont facilement déployables et extensible pour des projets de toute taille. Et vu que j'ai une expérience avec, ce qui m'a simplifier le développement et le déploiement dans un container Docker dans un délai serré.

Have a nice day ! 

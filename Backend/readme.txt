1. Créer un nouvel environnement virtuel "env" : python3 -m venv env
2. Activer l'environnement virtuel "env" : source env/bin/activate
3. Installer les dépendances du fichier requirement.txt : pip install -r requirements.txt
4. Configurer la base de donnée dans Django :
    Modifier les paramètres de la base de données dans main/settings.py -> Section DATABASES -> Modifier les variables d'environnements pour correspondre à la base de donnée






• Créer une application Django : python manage.py startapp nom_application
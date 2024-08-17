Changer l'origine du dépôt :

	git remote remove origin
	git remote add origin chemin_nouveau_depot

Installer les dépendance :
	Frontend :
		npm install
		npm ci

	Backend :
		Créer un nouvel environnement virtuel : python3 -m venv env
		Activer le nouvel environnement virtuel : source env/bin/activate
		Installer les dépendances : pip install -r requirements.txt

		Initialiser un fichier .env a la racine de backend : 

		DB_NAME=BDDname
		DB_USER=username
		DB_PASSWORD=password
		DB_HOST=172.31.215.127
		DB_PORT=5432

        appliquer les migrations : 

        python manage.py migrate
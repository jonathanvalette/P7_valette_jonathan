# groupomania

## Copier le depot
git clone https://github.com/jonathanvalette/P7_valette_jonathan.git  <br>


## Project setup se positionner dans le repertoire back 
```
npm install
```

### Editer le fichier .env dans le repertoire back
```
DB_HOST=yourlocation
DB_USER=yourusername
DB_PASS=yourpass
```

### creer la database mysql
```
mysql -u root -p
CREATE DATABASE groupomania; 
or change the configurration in back/model/db.js
const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'groupomania' or whatever you want
});

```

### Run back
```
node server
```

## Project setup se positionner dans le repertoire front
```
npm install
```

### Run front
```
npm run serve
```


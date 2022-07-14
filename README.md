# API-Express-DB.
This project is to create a Web API using JavaScript, DB (Postgresql), Express JS and Prisma.
The project uses the following dependencies :
- Express JS 
- Prisma
- Cors
# Step #1 -> Creating the  ``` explorers_api ``` Database in Postgresql.

1. Create a db in postgresql with the name **explorers_api**

# Step #2 -> Postgresql Database Connection.
1.  In the project, add the Express and Prisma dependencies with:
```  npm install ``` , this command downloads dependencies defined in the **package.json**, or manually using:
	``` 
	npm install express --save-dev
	npm install prisma --save-dev 
  	``` 
2. Initializing Prisma using ``` npx prisma init ```  -> with this command we'll get the **.env** file and the **Prisma** folder.
3.  Modify the **.env** file with your Postgresql user and password.

Example: 
``` DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/explorers_api?schema=public" ``` 
This file is the one that will make possible the connection to the db.

# Step #3 -> Models to create tables into the db using  Prisma. 
In the file ``` prisma/schema.prisma```  we have the declaration models to insert tables into the db **explorers_api**.
To apply these changes, it's necessary to do a migration using prisma with the following command:  
``` npx prisma migrate dev --name init ``` 
With this command the tables will be created.

# Step #4 -> Models to create tables into the db using  Prisma. 
Using the files ```prisma/seed.js```  and ```prisma/commanderSeed.js```  to insert data into the db in an automated way.
To apply these changes into the db use:

``` node prisma/seed.js``` 
``` node prisma/commanderSeed.js``` 

## 'Readme' development documentation in progress ...

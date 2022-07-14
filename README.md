# API-Express-DB.
This project is to create a Web API using JavaScript, DB (Postgresql), Express JS and Prisma.
The project uses the following dependencies :
- Express JS 
- Prisma
- Cors
# Step #1 -> Creating the  ``` explorers_api ``` Database in Postgresql.

1. Create a db in postgresql with the name **explorers_api**

![img1](https://user-images.githubusercontent.com/92350521/179082565-732ba9fb-2e9c-4c3b-ba54-539772f41c2a.png)


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


![img2](https://user-images.githubusercontent.com/92350521/179084922-7881c180-73e0-4f43-aed7-4c83724da8d3.png)
![img3](https://user-images.githubusercontent.com/92350521/179084931-8149f3eb-25e0-433b-bf0e-f1d2e2fbd137.png)



# Step #4 -> Insert data into the tables. 
Use the files ```prisma/seed.js```  and ```prisma/commanderSeed.js```  to insert data into the db in an automated way.

To apply these changes into the db use:

``` node prisma/seed.js``` 
``` node prisma/commanderSeed.js``` 

![img4](https://user-images.githubusercontent.com/92350521/179087754-88a31361-f711-4ddb-b61c-1ec67f46b14a.png)

![img5](https://user-images.githubusercontent.com/92350521/179087781-1c7d6c7f-1c68-4e8f-9f09-15cda7710844.png)

# Step #5 -> CRUD.
In the file ``` server.js```  is all the code to run the server  and use  the **endpoints ** using  **Express**.

Run the server using  ``` node server.js``` 

The request to the server are following ones:

## GET
To return all the records
- ``` localhost:3000/explorers```  -> return all the explorers.
- ``` localhost:3000/explorers/:id```  -> return the explorer by id using query params.

Example
**localhost:3000/explorers/1**

- ``` localhost:3000/commanders```  -> return all the commanders
- ``` localhost:3000/commanders/:id```  -> return the commanders by id using query params.

Example
**localhost:3000/commanders/1**

## 'Readme' development documentation in progress ...

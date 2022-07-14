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


![img0](https://user-images.githubusercontent.com/92350521/179089105-216bf213-ed19-4127-ac46-805cbaf1dc0f.png)

The request to the server are following ones:

## GET

- ``` localhost:3000/explorers```  -> return all the explorers.
- ``` localhost:3000/explorers/:id```  -> return the explorer by id using query params.

Example

**localhost:3000/explorers/1**

![img8](https://user-images.githubusercontent.com/92350521/179090452-7621cfb9-c011-419e-ad47-c86b23c5e236.png)


- ``` localhost:3000/commanders```  -> return all the commanders
- ``` localhost:3000/commanders/:id```  -> return the commanders by id using query params.

Example

**localhost:3000/commanders/1**

![img9](https://user-images.githubusercontent.com/92350521/179090564-f844abd2-662c-4875-865c-91b1d6e94a2c.png)

### The following endpoints can be proved using a tool like **Postman**.

## POST

- ``` localhost:3000/explorers```   -> To create an explorer.
- ``` localhost:3000/commanders```   -> To create a commander

Example -> Creating an explorer using **Postman** to prove the endpoint.

![img4](https://user-images.githubusercontent.com/92350521/179089316-a10609c4-1a26-4f5d-86de-2446866d5727.png) 

![Screenshot from 2022-07-14 16-25-59](https://user-images.githubusercontent.com/92350521/179089344-180f7e75-6312-4554-9088-f1ee6c5c9135.png)

![img6](https://user-images.githubusercontent.com/92350521/179089493-c368eb17-6d74-4213-bf30-957649d2658c.png)

![img7](https://user-images.githubusercontent.com/92350521/179089716-b3479f61-594a-4052-a533-57fd0a8b6606.png)

## PUT
``` localhost:3000/explorers/:id``` -> Update an explorer by id   
``` localhost:3000/commanders/:id``` -> Update a commander by id   

Example using **Postman**

![img4](https://user-images.githubusercontent.com/92350521/179091050-e34cafc7-1969-4459-830d-8f721d9fee57.png)

![img10](https://user-images.githubusercontent.com/92350521/179091187-f4f65ec7-6a94-48c6-a275-d8403418f939.png)

![img11](https://user-images.githubusercontent.com/92350521/179091301-0773994b-908c-4f5c-8b2e-749f0df5038c.png)

## DELETE
``` localhost:3000/explorers/:id``` -> Delete an explorer by id.  
``` localhost:3000/commanders/:id``` -> Delete a commander by id.

Example using **Postman**

![img11](https://user-images.githubusercontent.com/92350521/179091646-da30bd15-ccde-46e3-9972-25b1920ac05e.png)

![img12](https://user-images.githubusercontent.com/92350521/179091781-642afaa5-7e56-495f-b264-fbaa28a6fcf2.png)

![img13](https://user-images.githubusercontent.com/92350521/179091881-987db426-ece9-4735-a322-5d6760bf038b.png)

# Step #5 -> Client - Server

### Installing Cors dependencie

Install  ``` npm install cors --save ``` , this is not necessary if you executed ``` npm install```.

- Fork the following repo: https://github.com/DiegoCantarell/client-launchxPractice
- Execute ``` npm run serve```,  the app must be on ``` http://localhost:8081/``` 

## 'Readme' development documentation in progress ...

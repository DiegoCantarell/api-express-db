# API-Express-DB
This project is to create a Web API using JavaScript, DB (Postgresql), Express JS and Prisma.
The project uses the following dependencies :
- Express JS 
- Prisma
- Cors

# Step #1 -> Postgresql Database Connection
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
## 'Readme' development documentation in progress ...

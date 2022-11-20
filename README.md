<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in development environment

1. Clone repository
2. Run
    
   ```
   npm install
   ```
3. Must have Nest CLI installed
   
   ```
   npm i -g @nestjs/cli
   ```
4. Build DB
   
   ```
   docker-compose up -d
   ```

5. Cone file ```.env.template``` and rename this copy to ```.env```

6. Set defined eviroment varibles on ```.env```

7. Run application on dev:

   ```
   npm run start:dev
   ```

8. Populate DB with seed
   ```
   http://localhost:3000/api/v2/seed
   ```

   ## Stack used
   * MongoDB
   * Nest

# Production Build
1. Create file ```.env.prod```
2. Set prod enviroment variables
3. Create new image

   ```
   docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
   ```
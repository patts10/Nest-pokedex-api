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

5. Populate DB with seed
   ```
   http://localhost:3000/api/v2/seed
   ```

   ## Stack used
   * MongoDB
   * Nest
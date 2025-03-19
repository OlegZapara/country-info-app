# How to Run

1. Create a `.env` file with values from `.env.example`.
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Set up the database:
   - Ensure that your database is created.
   - Run the Prisma migrations using:
     ```sh
     yarn prisma migrate dev
     ```
4. Start the application:
   ```sh
   yarn start
   ```

You can access the API documentation at: `http://localhost:<PORT>/swagger`.

## API Explanation

### Countries
This section provides a list of endpoints to retrieve information about a list of countries or a single country. Data is fetched from the following APIs:
- `https://date.nager.at/api/v3`
- `https://countriesnow.space/api/v0.1`

### Users and Holidays
For testing purposes, a user controller was created. It allows you to:
- Get, create, and delete users.
- After creating a user, you can use the user's ID to create and view a list of holidays.

Holiday data is fetched from:
- `https://date.nager.at/api/v3`
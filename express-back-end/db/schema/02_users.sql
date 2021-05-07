DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  phone_number VARCHAR(25) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
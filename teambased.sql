DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;

CREATE TABLE users (

  id SERIAL PRIMARY KEY,
  first VARCHAR(300) NOT NULL,
  last VARCHAR(300) NOT NULL,
  email VARCHAR(300) UNIQUE NOT NULL,
  password CHAR(60) NOT NULL,
  imgurl VARCHAR(300),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    taskName TEXT NOT NULL,
    day TEXT NOT NULL,
    status INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE archives (
    id SERIAL PRIMARY KEY UNIQUE,
    taskName TEXT NOT NULL,
    day TEXT NOT NULL,
    status INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

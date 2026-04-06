// this is the schema that I have made in postgre hosted on supapase I used their editor to make the schema 

// this is just for refrence



// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// CREATE TABLE users (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(150) UNIQUE NOT NULL
// );



// CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high');

// CREATE TYPE task_status AS ENUM ('pending', 'done');

// CREATE TABLE tasks (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     title VARCHAR(255) NOT NULL,
    
//     assigned_to UUID NOT NULL,
    
//     priority task_priority NOT NULL,
    
//     status task_status DEFAULT 'pending',
    
//     due_date TIMESTAMP NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
//     CONSTRAINT fk_user
//         FOREIGN KEY (assigned_to)
//         REFERENCES users(id)
//         ON DELETE CASCADE
// );



// INSERT INTO users (name, email) VALUES
// ('Alice Johnson', 'alice@example.com'),
// ('Bob Smith', 'bob@example.com'),
// ('Charlie Brown', 'charlie@example.com'),
// ('David Wilson', 'david@example.com'),
// ('Emma Davis', 'emma@example.com'),
// ('Frank Miller', 'frank@example.com'),
// ('Grace Lee', 'grace@example.com'),
// ('Henry Walker', 'henry@example.com'),
// ('Ivy Hall', 'ivy@example.com'),
// ('Jack Allen', 'jack@example.com'),
// ('Karen Young', 'karen@example.com'),
// ('Leo King', 'leo@example.com'),
// ('Mia Scott', 'mia@example.com'),
// ('Noah Green', 'noah@example.com'),
// ('Olivia Adams', 'olivia@example.com'),
// ('Paul Baker', 'paul@example.com'),
// ('Quinn Nelson', 'quinn@example.com'),
// ('Ruby Carter', 'ruby@example.com'),
// ('Sam Mitchell', 'sam@example.com'),
// ('Tina Perez', 'tina@example.com');


// INSERT INTO tasks (title, assigned_to, priority, status, due_date) VALUES

// ('Setup project repo',
//  (SELECT id FROM users WHERE email='alice@example.com'),
//  'high', 'done', NOW() - INTERVAL '2 days'),

// ('Design database schema',
//  (SELECT id FROM users WHERE email='bob@example.com'),
//  'high', 'done', NOW() - INTERVAL '3 days'),

// ('Build auth module',
//  (SELECT id FROM users WHERE email='charlie@example.com'),
//  'medium', 'pending', NOW() + INTERVAL '2 days'),

// ('Create API structure',
//  (SELECT id FROM users WHERE email='david@example.com'),
//  'medium', 'pending', NOW() + INTERVAL '1 day'),

// ('Implement task creation',
//  (SELECT id FROM users WHERE email='emma@example.com'),
//  'high', 'pending', NOW() + INTERVAL '3 days'),

// ('Fix login bug',
//  (SELECT id FROM users WHERE email='frank@example.com'),
//  'high', 'done', NOW() - INTERVAL '1 day'),

// ('Write unit tests',
//  (SELECT id FROM users WHERE email='grace@example.com'),
//  'low', 'pending', NOW() + INTERVAL '5 days'),

// ('Update documentation',
//  (SELECT id FROM users WHERE email='henry@example.com'),
//  'low', 'pending', NOW() + INTERVAL '4 days'),

// ('Optimize queries',
//  (SELECT id FROM users WHERE email='ivy@example.com'),
//  'medium', 'pending', NOW() + INTERVAL '2 days'),

// ('Fix API errors',
//  (SELECT id FROM users WHERE email='jack@example.com'),
//  'high', 'done', NOW() - INTERVAL '2 days'),

// ('Add pagination',
//  (SELECT id FROM users WHERE email='karen@example.com'),
//  'medium', 'pending', NOW() + INTERVAL '3 days'),

// ('Refactor controllers',
//  (SELECT id FROM users WHERE email='leo@example.com'),
//  'low', 'pending', NOW() + INTERVAL '6 days'),

// ('Implement filters',
//  (SELECT id FROM users WHERE email='mia@example.com'),
//  'medium', 'pending', NOW() + INTERVAL '2 days'),

// ('Fix overdue logic',
//  (SELECT id FROM users WHERE email='noah@example.com'),
//  'high', 'pending', NOW() - INTERVAL '1 day'),

// ('Test API endpoints',
//  (SELECT id FROM users WHERE email='olivia@example.com'),
//  'medium', 'done', NOW() - INTERVAL '2 days'),

// ('Deploy to staging',
//  (SELECT id FROM users WHERE email='paul@example.com'),
//  'high', 'pending', NOW() + INTERVAL '1 day'),

// ('Fix UI bugs',
//  (SELECT id FROM users WHERE email='quinn@example.com'),
//  'low', 'pending', NOW() + INTERVAL '4 days'),

// ('Integrate frontend',
//  (SELECT id FROM users WHERE email='ruby@example.com'),
//  'high', 'pending', NOW() + INTERVAL '3 days'),

// ('Code review',
//  (SELECT id FROM users WHERE email='sam@example.com'),
//  'medium', 'done', NOW() - INTERVAL '1 day'),

// ('Prepare release notes',
//  (SELECT id FROM users WHERE email='tina@example.com'),
//  'low', 'pending', NOW() + INTERVAL '2 days');



//  select * from tasks
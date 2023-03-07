DROP TABLE IF EXISTS flashcards;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_account(user_id)
);

CREATE TABLE categories (
    category_name VARCHAR(100) PRIMARY KEY
);

CREATE TABLE flashcards (
    flashcard_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    question VARCHAR(300),
    answer VARCHAR(300),
    category_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_account(user_id),
    FOREIGN KEY (category_name) REFERENCES categories(category_name)
);

INSERT INTO user_account (username, password)
VALUES ('user1', 'password1'),
       ('user2', 'password2'),
       ('user3', 'password3'),
       ('user4', 'password4'),
       ('user5', 'password5');

INSERT INTO token (user_id, token)
SELECT user_id, md5(random()::text)
FROM user_account;

INSERT INTO categories (category_name)
VALUES ('Geography'),
       ('History');

INSERT INTO flashcards (user_id, question, answer, category_name)
SELECT 1, 'What is the capital city of France?', 'Paris', 'Geography'
UNION ALL SELECT 1, 'What is the largest ocean in the world?', 'Pacific Ocean', 'Geography'
UNION ALL SELECT 2, 'What is the significance of the Magna Carta?', 'It established the principle that everyone is subject to the law, even the king, and guarantees the rights of individuals, the right to justice and the right to a fair trial.', 'History'
UNION ALL SELECT 2, 'Who was the first President of the United States?', 'George Washington', 'History'
UNION ALL SELECT 3, 'What is the tallest mountain in the world?', 'Mount Everest', 'Geography'
UNION ALL SELECT 3, 'What was the name of the Roman emperor who famously built a wall in northern Britain?', 'Hadrian', 'History'
UNION ALL SELECT 4, 'What is the most populous country in the world?', 'China', 'Geography'
UNION ALL SELECT 4, 'What event marked the beginning of World War II?', 'The invasion of Poland by Germany', 'History'
UNION ALL SELECT 5, 'What is the name of the body of water that separates Europe and Africa?', 'Mediterranean Sea', 'Geography'
UNION ALL SELECT 5, 'Who was the first female prime minister of the United Kingdom?', 'Margaret Thatcher', 'History';

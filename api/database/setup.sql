DROP TABLE IF EXISTS flashcards;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;

CREATE TABLE flashcards (
    flashcard_id INT GENERATED ALWAYS AS IDENTITY,
    question VARCHAR(300),
    answer VARCHAR(300),
    category_name VARCHAR(100) NOT NULL
);


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




INSERT INTO user_account (username, password)
VALUES ('user1', 'password1'),
       ('user2', 'password2'),
       ('user3', 'password3'),
       ('user4', 'password4'),
       ('user5', 'password5');

INSERT INTO token (user_id, token)
SELECT user_id, md5(random()::text)
FROM user_account;


INSERT INTO flashcards (question, answer, category_name)
SELECT 'What is the capital city of France?', 'Paris', 'Geography'
UNION ALL SELECT 'What is the largest ocean in the world?', 'Pacific Ocean', 'Geography'
UNION ALL SELECT 'What is the significance of the Magna Carta?', 'It established the principle that everyone is subject to the law, even the king, and guarantees the rights of individuals, the right to justice and the right to a fair trial.', 'History'
UNION ALL SELECT 'Who was the first President of the United States?', 'George Washington', 'History'
UNION ALL SELECT 'What is the tallest mountain in the world?', 'Mount Everest', 'Geography'
UNION ALL SELECT 'What was the name of the Roman emperor who famously built a wall in northern Britain?', 'Hadrian', 'History'
UNION ALL SELECT 'What is the most populous country in the world?', 'China', 'Geography'
UNION ALL SELECT 'What event marked the beginning of World War II?', 'The invasion of Poland by Germany', 'History'
UNION ALL SELECT 'What is the name of the body of water that separates Europe and Africa?', 'Mediterranean Sea', 'Geography'
UNION ALL SELECT 'Who was the first female prime minister of the United Kingdom?', 'Margaret Thatcher', 'History'
UNION ALL SELECT 'What is the formula for finding the area of a triangle?', 'A = (b * h) / 2', 'Math'
UNION ALL SELECT 'What is the difference between a scalar and a vector?', 'A scalar is a quantity that has magnitude only, while a vector has both magnitude and direction.', 'Math'
UNION ALL SELECT 'What is the difference between a rational and irrational number?', 'A rational number can be expressed as a ratio of two integers, while an irrational number cannot be expressed as a ratio of two integers.', 'Math'
UNION ALL SELECT 'What is the order of operations in math?', 'Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right)', 'Math'
UNION ALL SELECT 'What is the Pythagorean theorem?', 'In a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.', 'Math'
UNION ALL SELECT 'What is the slope-intercept form of a linear equation?', 'y = mx + b', 'Math'
UNION ALL SELECT 'What is the difference between discrete and continuous data?', 'Discrete data can only take certain values, while continuous data can take any value within a range.', 'Math'
UNION ALL SELECT 'What is a function in math?', 'A function is a relation between two sets of numbers, where each input corresponds to exactly one output.', 'Math'
UNION ALL SELECT 'What is a polynomial?', 'A polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, and multiplication, and in which the variables are raised to whole number powers.', 'Math'
UNION ALL SELECT 'What is the difference between a median and a mode?', 'The median is the middle value in a set of numbers when they are ordered, while the mode is the value that appears most frequently in a set of numbers.', 'Math'
UNION ALL SELECT 'What is the difference between a phrase and a clause in grammar?', 'A phrase is a group of words that function as a single unit within a sentence, while a clause is a group of words that contains a subject and a verb and can stand alone as a sentence or be part of a larger sentence.', 'Language'
UNION ALL SELECT 'What is the difference between active and passive voice?', 'In active voice, the subject performs the action of the verb, while in passive voice, the subject receives the action of the verb.', 'Language'
UNION ALL SELECT 'What is a preposition?', 'A preposition is a word that shows the relationship between a noun or pronoun and other words in a sentence.', 'Language'
UNION ALL SELECT 'What is the difference between a synonym and an antonym?', 'A synonym is a word that has the same or a similar meaning as another word, while an antonym is a word that has the opposite meaning of another word.', 'Language'
UNION ALL SELECT 'What is a gerund?', 'A gerund is a verb form ending in "-ing" that functions as a noun in a sentence.', 'Language'
UNION ALL SELECT 'What is the Pythagorean theorem?', 'In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides.', 'Math'
UNION ALL SELECT 'What is the value of pi?', 'Pi is the ratio of the circumference of a circle to its diameter. Its approximate value is 3.14159.', 'Math'
UNION ALL SELECT 'What is the difference between a simile and a metaphor?', 'A simile compares two things using "like" or "as", while a metaphor directly states that one thing is another.', 'Language'
UNION ALL SELECT 'What is an oxymoron?', 'An oxymoron is a figure of speech that combines contradictory terms, such as "jumbo shrimp" or "deafening silence".', 'Language'
UNION ALL SELECT 'Who painted the Mona Lisa?', 'Leonardo da Vinci', 'Art'
UNION ALL SELECT 'What is the style of art characterized by bold colors and simple shapes?', 'Pop Art', 'Art'
UNION ALL SELECT 'What is the quadratic formula?', 'The quadratic formula is a formula used to solve quadratic equations of the form ax² + bx + c = 0. It is: x = (-b ± sqrt(b² - 4ac)) / 2a', 'Math'
UNION ALL SELECT 'What is a rational number?', 'A rational number is a number that can be expressed as the ratio of two integers, such as 3/4 or -5/7.', 'Math'
UNION ALL SELECT 'What is the difference between a sonnet and a haiku?', 'A sonnet is a 14-line poem with a specific rhyme scheme, while a haiku is a three-line poem with a 5-7-5 syllable count.', 'Language'
UNION ALL SELECT 'What is alliteration?', 'Alliteration is the repetition of the same sound or letter at the beginning of adjacent or closely connected words, such as "Peter Piper picked a peck of pickled peppers".', 'Language'
UNION ALL SELECT 'Who painted the Starry Night?', 'Vincent van Gogh', 'Art'
UNION ALL SELECT 'What is the style of art characterized by distorted and exaggerated shapes?', 'Expressionism', 'Art';

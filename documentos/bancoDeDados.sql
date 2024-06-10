CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    id_register_user INTEGER,
    teamName TEXT,
    color VARCHAR,
    universe INTEGER,
    FOREIGN KEY (id_register_user) REFERENCES register_user(id)
);

CREATE TABLE register_user (
    id SERIAL PRIMARY KEY,
    id_login_user INTEGER,
    firstname VARCHAR,
    lastname VARCHAR,
    birthday DATE,
    phonenumber TEXT,
    pronouns VARCHAR,
    nationality VARCHAR,
    type VARCHAR,
    FOREIGN KEY (id_login_user) REFERENCES login_user(id)
);

CREATE TABLE self_assessment_dm (
    id SERIAL PRIMARY KEY,
    question VARCHAR,
    optionA TEXT,
    optionB VARCHAR
);

CREATE TABLE education_user (
    id SERIAL PRIMARY KEY,
    id_register_user INTEGER,
    university VARCHAR,
    country VARCHAR,
    majorName VARCHAR,
    educationLevel VARCHAR,
    FOREIGN KEY (id_register_user) REFERENCES register_user(id)
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    id_evaluated_peer INTEGER,
    id_who_evaluated INTEGER,
    feedback CHAR,
    round INTEGER,
    FOREIGN KEY (id_who_evaluated) REFERENCES register_user(id)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    id_mentioned_people INTEGER,
    id_who_posted INTEGER,
    subject CHAR,
    description CHAR,
    category VARCHAR,
    date DATE,
    FOREIGN KEY (id_who_posted) REFERENCES register_user(id)
);

CREATE TABLE self_assessment_collab (
    id SERIAL PRIMARY KEY,
    question TEXT,
    optionA VARCHAR,
    optionB VARCHAR,
    optionC VARCHAR,
    optionD VARCHAR,
    optionE VARCHAR
);

CREATE TABLE login_user (
    id SERIAL PRIMARY KEY,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    result VARCHAR,
    type_of_evaluation VARCHAR,
    id_who_evaluated INTEGER,
    id_evaluated_peer INTEGER,
    round INTEGER,
    FOREIGN KEY (id_who_evaluated) REFERENCES register_user(id)
);

CREATE TABLE user_answer_collab (
    id SERIAL PRIMARY KEY,
    id_who_answered_collab INTEGER,
    answer1 CHAR,
    answer2 CHAR,
    answer3 CHAR,
    answer4 CHAR,
    answer5 CHAR,
    answer6 CHAR,
    answer7 INTEGER,
    round INTEGER
);

CREATE TABLE user_answer_dm (
    id SERIAL PRIMARY KEY,
    id_who_answered_dm INTEGER,
    answer1 CHAR,
    answer2 CHAR,
    answer3 CHAR,
    answer4 CHAR,
    answer5 CHAR,
    answer6 CHAR,
    round INTEGER
);

CREATE TABLE happiness_meter (
    id SERIAL PRIMARY KEY,
    id_user INTEGER,
    id_team INTEGER,
    level_happiness INTEGER,
    round INTEGER,
    FOREIGN KEY (id_user) REFERENCES register_user(id),
    FOREIGN KEY (id_team) REFERENCES team(id)
);

CREATE TABLE type_profile_description (
    id SERIAL PRIMARY KEY,
    type_of_profile VARCHAR,
    description VARCHAR,
    strengths VARCHAR,
    weaknesses VARCHAR
);

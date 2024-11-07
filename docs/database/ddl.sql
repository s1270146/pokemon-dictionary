DROP TABLE IF EXISTS pokemon_types;
DROP TABLE IF EXISTS pokemon_descriptions;
DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS types;

CREATE TABLE types (
    type_id INT,
    type_name VARCHAR(30) NOT NULL,
    img_url TEXT,
    PRIMARY KEY (type_id)
);

CREATE TABLE properties (
    property_id INT,
    property_name VARCHAR(60) NOT NULL,
    description TEXT,
    PRIMARY KEY (property_id)
);

CREATE TABLE pokemon (
    pokemon_no INT NOT NULL,
    pokemon_name VARCHAR(60) NOT NULL,
    img_url TEXT,
    sex INT,
    category VARCHAR(60),
    weight FLOAT,
    height FLOAT,
    hp SMALLINT,
    attack SMALLINT,
    defense SMALLINT,
    special_attack SMALLINT,
    special_defense SMALLINT,
    speed SMALLINT,
    evolved_pokemon_no INT,
    PRIMARY KEY (pokemon_no),
    FOREIGN KEY (evolved_pokemon_no) REFERENCES pokemon(pokemon_no)
);

CREATE TABLE pokemon_descriptions (
    pokemon_no INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (pokemon_no) REFERENCES pokemon(pokemon_no)
);

CREATE TABLE pokemon_types (
    pokemon_no INT NOT NULL,
    type_id INT NOT NULL,
    PRIMARY KEY (pokemon_no, type_id),
    FOREIGN KEY (pokemon_no) REFERENCES pokemon(pokemon_no),
    FOREIGN KEY (type_id) REFERENCES types(type_id)
);

CREATE TABLE pokemon_properties (
    pokemon_no INT NOT NULL,
    property_id INT NOT NULL,
    PRIMARY KEY (pokemon_no, property_id),
    FOREIGN KEY (pokemon_no) REFERENCES pokemon(pokemon_no),
    FOREIGN KEY (property_id) REFERENCES properties(property_id)
);
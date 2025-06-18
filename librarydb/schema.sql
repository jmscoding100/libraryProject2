DROP DATABASE IF EXITSTS librarydb;
CREATE DATABASE librarydb;
USE librarydb;

CREATE TABLE author(
    author_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULl,
    author_name VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_author PRIMARY KEY (author_id)
);

CREATE TABLE publishing_company(
    pub_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULl,
    company_name VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_publishing_company PRIMARY KEY (pub_id)
);


CREATE TABLE format(
    format_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULl,
    format VARCHAR(10),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_format PRIMARY KEY (format_id)
);

CREATE TABLE book(
    book_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(70),
    author_id TINYINT UNSIGNED NOT NULL,
    pub_id TINYINT UNSIGNED NOT NULL,
    copyright_year CHAR(4),
    edition TINYINT,
    edition_year CHAR(4),
    format_id TINYINT UNSIGNED,
    binding ENUM('paperback', 'hardback'),
    rating ENUM('Primary', 'Juvenile', 'Pre-adolescent', 'Adolescent', 'Adult'),
    language TINYTEXT,
    num_pages SMALLINT,
    cover_image MEDIUMTEXT,
    qty TINYINT,
    CONSTRAINT pk_book PRIMARY KEY (book_id),
    CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES author (author_id),
    CONSTRAINT fk_publishing_company FOREIGN KEY (pub_id) REFERENCES publishing_company (pub_id),
    CONSTRAINT fk_format FOREIGN KEY (format_id) REFERENCES format (format_id)
);


CREATE TABLE genre(
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);


CREATE TABLE book_to_genre(
    book_id SMALLINT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_book_btg FOREIGN KEY (book_id) REFERENCES book (book_id),
    CONSTRAINT fk_genre_bg FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);




--Alter
ALTER TABLE book
    MODIFY title VARCHAR (100);

AlTER TABLE book
    add date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    add last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE book
    MODIFY binding ENUM('paperback', 'hardback', 'non-physical');
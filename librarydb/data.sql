--Author
INSERT INTO author (author_name)VALUES('Pilkey, Dav');

INSERT INTO author (author_name)
VALUES
('Hannah, Kristin'),
('Telgemeier, Raina'),
('Rowling, J.K'),
('Kinney, Jeff'),
('Capucilli, Alyssa Satin'),
('Peirce, Lincoln'),
('Lewis, C.S.'),
('Dave, Laura'),
('Galligan, Gale'),
('Collins, Suzanne');

--Publishing Company
INSERT INTO publishing_company (company_name)VALUES('Blue Sky Press');

INSERT INTO publishing_company (company_name)VALUES
('Graphix'),
("St. Martin's Press"),
('A.A. Levine Book'),
('Amulet Books'),
('HarperCollins'),
('Simon & Schuster'),
('Scholastic Press');

--Format
INSERT INTO format (format)VALUES('physical');

INSERT INTO format (format)VALUES
('audio'),
('dital'),
('video');


--Book
INSERT INTO book(
    title,
    author_id,
    pub_id,
    copyright_year,
    edition,
    edition_year,
    format_id,
    binding,
    rating,
    language,
    num_pages,
    cover_image,
    qty
)
VALUES
('Captain Underpants and the preposterous plight of the purple potty people : The eighth epic novel', 1, 1, '2006', 1, '2006', 1, 'hardback', 'pre-adolescent', 'en', 172, 'image_1', 2);


INSERT INTO book(
    title,
    author_id,
    pub_id,
    copyright_year,
    edition,
    edition_year,
    format_id,
    binding,
    rating,
    language,
    num_pages,
    cover_image,
    qty
)
VALUES
('Dog Man: Lord of the Fleas', 1, 2, '2018', 1, '2018', 1, 'paperback', 'pre-adolescent', 'en', 251, 'image_2', 1),
('The Four Winds', 2, 3, '2021', 1, '2021', 1, 'hardback', 'adult', 'en', 454, 'image_3', 3),
('Smile', 3, 2, '1998', 1, '1998', 3, null, 'pre-adolescent', 'en', 309, 'image_4', 1),
("Harry Potter and the sorcerer's stone", 4, 4, '2010', 1, '2010', 1, 'paperback', 'pre-adolescent', 'en', 213, 'image_5', 2),
('Dog Man: Mothering Heights', 1, 2, '2021', 1, '2021', 4, null, 'juvenile', 'en', 221, 'image_6', 2),
('Diary of a Wimpy Kid: Double Down', 5, 5, '2016', 1, '2016', 1, 'hardback', 'pre-adolescent', 'en', 217, 'image_7', 5),
('Diary of a Wimpy Kid', 5, 5, '2007', 1, '2007', 1, 'hardback', 'pre-adolescent', 'en', 217, 'image_8', 5),
('Biscuit wins a prize', 6, 6, '2004', 1, '2004', 3, null, 'primary', 'en', 24, 'image_9', 1),
('Dog Man: for Whom the Ball Rolls ', 1, 2, '2019', 1, '2019', 1, 'paperback', 'pre-adolescent', 'en', 236, 'image_10', 4),
('Big Nate on a roll', 7, 6, '2011', 1, '2011', 2, null, 'pre-adolescent', 'en', 216, 'image_11', 3),
('Dog Man and Cat Kid', 1, 2, '2018', 1, '2018', 1, 'hardback', 'pre-adolescent', 'en', 253, 'image_12', 2),
('The Chronicles of Narnia : The lion, the witch and the wardrobe', 8, 6, '1950', 1, '1950', 1, 'paperback', 'primary', 'en', 189, 'image_13', 5),
('The last thing he told me', 9, 7, '2021', 1, '2021', 2, null, 'adult', 'en', 306, 'image_14', 2),
("The Baby-sitters club : Kristy's Big Day", 10, 2, '2018', 1, '2018', 1, 'paperback', 'pre-adolescent', 'en', 148, 'image_15', 4),
('Baby-sitters club : Claudia and Mean Janine', 3, 2, '2016', 1, '2016', 3, null, 'pre-adolescent', 'en', 160, 'image_16', 1),
('The Baby-sitters club : Dawn and the impossible three', 10, 2, '2017', 1, '2017', 1, 'paperback', 'pre-adolescent', 'en', 145, 'image_17', 2),
('Dog Man : a tale of two kitties', 1, 2, '2017', 1, '2017', 3, null, 'pre-adolescent', 'en', 253, 'image_18', 1),
('The ballad of songbirds and snakes', 11, 8, '2020', 1, '2020', 1, 'hardback', 'adolescent', 'en', 517, 'image_19', 3),
('Diary of a wimpy kid : old school', 5, 5, '2015', 1, '2015', 1, 'hardback', 'pre-adolescent', 'en', 217, 'image_20', 4)
;


--Genre
INSERT INTO genre(genre)
VALUES('fiction');

INSERT INTO genre(genre)
VALUES
('graphic novel'),
('fantasy'),
('science fiction'),
('adventure'),
('historical fiction'),
('novel'),
('humor'),
('thriller')
;

--Book_to_Genre
INSERT INTO book_to_genre(book_id, genre_id)
VALUES
(1, 4),
(1, 8);

INSERT INTO book_to_genre(book_id, genre_id)
VALUES
(2, 1),
(2, 2),
(2, 5),
(3, 1),
(3, 7),
(3, 6),
(4, 2),
(5, 3),
(6, 2),
(6, 5),
(6, 8),
(7, 1),
(7, 8),
(8, 1),
(8, 8),
(9, 1),
(10, 1),
(10, 2),
(10, 5),
(10, 8),
(11, 1),
(11, 8),
(12, 1),
(12, 2),
(12, 5),
(12, 8),
(13, 1),
(13, 3),
(14, 1),
(14, 7),
(14, 9),
(15, 1),
(15, 2),
(16, 2),
(17, 1),
(17, 2),
(18, 1),
(18, 8),
(19, 1),
(19, 4),
(20, 1),
(20, 8)
;

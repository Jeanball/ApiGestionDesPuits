use puit;

CREATE TABLE donnees (
    donnee_id int auto_increment,
    volume float NOT NULL,
    pression float NULL,
    profondeur float NULL,
    update_at DATETIME NULL ,
    created_at DATETIME NOT NULL,
    primary key (donnee_id)
);

INSERT INTO donnees (volume, pression, profondeur, update_at, created_at)
VALUES
(3.20, 0.23 , 1000, NULL ,'2022-08-15 17:24:03'),
(4.40, 0.22 , 2000, NULL ,'2022-08-15 14:54:03'),
(6.20, 1.23 , 1464, NULL ,'2022-08-15 02:24:03'),
(15.21, 0.65 , 1547, NULL ,'2022-08-15 08:14:03'),
(13.23, 1.20 , 2045, '2022-08-15' ,'2022-08-15 06:54:03'),
(2.48, 4.62 , 3658, NULL ,'2022-08-15 05:54:03'),
(2.69, 3.21 , 2788, '2022-08-15' ,'2022-08-15 08:54:03');

select * from donnees;
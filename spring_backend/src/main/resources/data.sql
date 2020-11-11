INSERT INTO ARTIST(ID, NAME, PHOTO_URL)
VALUES(1, 'John Mayer', 'https://media.gettyimages.com/photos/john-mayer-performs-onstage-during-mac-miller-a-celebration-of-life-picture-id1062205076?k=6&m=1062205076&s=612x612&w=0&h=fTcSaycu5ghOr9L3Gv7tmrslpYvB7ehn-rXcI04kFzY=');
INSERT INTO ARTIST(ID, NAME, PHOTO_URL)
VALUES(2, 'Prateek Kuhad', 'https://media.gettyimages.com/photos/indian-musician-prateek-kuhad-performs-during-the-reverie-fest-2019-picture-id1163141955?k=6&m=1163141955&s=612x612&w=0&h=pRAkDFLin8vQpwnl_nzlfs3xO6wm-etBMdLuNpJFwdU=');
INSERT INTO ARTIST(ID, NAME, PHOTO_URL)
VALUES(3, 'Adele', 'https://media.gettyimages.com/photos/singer-adele-performs-onstage-at-the-54th-annual-grammy-awards-held-picture-id138859453?k=6&m=138859453&s=612x612&w=0&h=yJXH0Gu-vp83LoK5pJZ6gn9_iX-uNLe_shD2nIYM_fo=');
INSERT INTO ARTIST(ID, NAME, PHOTO_URL)
VALUES(4, 'Linkin Park', 'https://media.gettyimages.com/photos/singer-chester-bennington-of-linkin-park-performs-onstage-during-rock-picture-id472820584?k=6&m=472820584&s=612x612&w=0&h=LKI32zddqfn69nz0zT83fJa853rFK2cJoqC4-_gnJSU=');
INSERT INTO ARTIST(ID, NAME, PHOTO_URL)
VALUES(5, 'Coldplay', 'https://media.gettyimages.com/photos/chris-martin-of-coldplay-performs-live-on-stage-at-allianz-parque-on-picture-id871615228?k=6&m=871615228&s=612x612&w=0&h=qw7cOp8NdbJ89TmTWmcDCkP6NONagGCT6Pk5_S1hswQ=');

INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (1, 'Continuum', 1, 'https://i.ebayimg.com/images/g/v14AAOSwkiVeQmnq/s-l500.jpg');
INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (2, 'Battle Studies', 1, 'https://images-na.ssl-images-amazon.com/images/I/71nzMGEA1IL._AC_SL1500_.jpg');
INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (3, 'cold/mess', 2, 'https://i1.sndcdn.com/artworks-000372859662-8tl6lh-t500x500.jpg');
INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (4, '25', 3, 'https://images-na.ssl-images-amazon.com/images/I/81q0mwIoc0L._SL1500_.jpg');
INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (5, 'Meteora', 4, 'https://i.pinimg.com/originals/f0/e2/d8/f0e2d85aae33baedcce59b15e4d41289.jpg');
INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (6, 'Death and All His Friends', 5, 'https://static.stereogum.com/uploads/2018/06/viva-la-vida-1528839281-compressed.jpg');
INSERT INTO ALBUM(ID, NAME, ARTIST_ID, ALBUM_ART_URL)
VALUES (7, 'X&Y', 5, 'https://upload.wikimedia.org/wikipedia/en/2/28/Coldplay_X%26Y.svg');

INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (1, 'Gravity', 1, 1, 'https://www.youtube.com/watch?v=7VBex8zbDRs&ab_channel=nantucketgal');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (2, 'Slow Dancing in a Burning Room', 1, 1, 'https://www.youtube.com/watch?v=5MkfBNl_3pw&ab_channel=JohnMayer-Topic');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (3, 'Edge of Desire', 1, 2, 'https://www.youtube.com/watch?v=5GTbM5-ku-M&ab_channel=ahumbleperspective');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (4, 'Who Says', 1, 2, 'https://www.youtube.com/watch?v=4qyrBRn1s3I&ab_channel=ahumbleperspective');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (5, 'cold/mess', 2, 3, 'https://www.youtube.com/watch?v=DWagZiMA3LE&ab_channel=JioSaavn');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (6, '100 words', 2, 3, 'https://www.youtube.com/watch?v=xm-uFsZPs0A&ab_channel=JioSaavn');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (7, 'Hello', 3, 4, 'https://www.youtube.com/watch?v=VKIiCOZ2Eo4&ab_channel=KhansLyrics');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (8, 'When We Were Young', 3, 4, 'https://www.youtube.com/watch?v=a1IuJLebHgM&ab_channel=Adele-Topic');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (9, 'Numb', 4, 5, 'https://www.youtube.com/watch?v=6M_DJgF2Qks&ab_channel=LinkinParkUploaderLP');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (10, 'Breaking the Habit', 4, 5, 'https://www.youtube.com/watch?v=GLQs0OrHiPY&ab_channel=d4rk3rst4r');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (11, 'Viva la Vida', 5, 6, 'https://www.youtube.com/watch?v=opPV1-IUmGw&ab_channel=SceneCut3');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (12, 'Violet Hill', 5, 6, 'https://www.youtube.com/watch?v=7ENiDNrBj2g&ab_channel=Coldplay-Topic');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (13, 'Fix You', 5, 7, 'https://www.youtube.com/watch?v=Oncu0bgdcXU&ab_channel=Coldplay-Topic');
INSERT INTO SONG(ID, NAME, ARTIST_ID, ALBUM_ID, LINK)
VALUES (14, 'Twisted Logic', 5, 7, 'https://www.youtube.com/watch?v=jLedhA6rMBg&ab_channel=Coldplay-Topic');

INSERT INTO GENRE(ID, NAME, PHOTO_URL)
VALUES (1, 'Rock', 'https://www.thousandfoldecho.com/wp-content/uploads/2017/09/musician-2708190_1280-860x450.jpg');
INSERT INTO GENRE(ID, NAME, PHOTO_URL)
VALUES (2, 'Alternative', 'https://media.gettyimages.com/photos/photo-of-rolling-stones-and-keith-richards-with-the-rolling-stones-picture-id85347079?k=6&m=85347079&s=612x612&w=0&h=lNrVrmD9jBEqDpDRhVBpUNlojiyZMlYJlHgpWm6bQcU=');
INSERT INTO GENRE(ID, NAME, PHOTO_URL)
VALUES (3, 'Indie Folk', 'https://media.gettyimages.com/photos/portrait-of-canadian-musician-joni-mitchell-seated-on-the-floor-picture-id474081435?k=6&m=474081435&s=612x612&w=0&h=p-BinUTt2SN-Heocbk2IZoYHc3SBBmZY5xuKJYgmkcU=');
INSERT INTO GENRE(ID, NAME, PHOTO_URL)
VALUES (4, 'Pop', 'https://media.gettyimages.com/photos/psy-performs-onstage-during-the-2012-iheartradio-music-festival-at-picture-id152558482?k=6&m=152558482&s=612x612&w=0&h=2mx-QFO5sPYzf7u3UTSCHLBb5BG2lrPma1ssGBDjfAs=');
INSERT INTO GENRE(ID, NAME, PHOTO_URL)
VALUES (5, 'Blues', 'https://media.gettyimages.com/photos/blues-musician-bb-king-poses-for-a-bluesway-records-portrait-with-his-picture-id74279176?k=6&m=74279176&s=612x612&w=0&h=lit9MvPxLq2iJn1vbvcLMMND58nUbG0KPYjk32TAnso=');

INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(1, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(1, 4);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(1, 5);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(2, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(2, 5);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(3, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(3, 3);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(4, 3);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(4, 4);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(5, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(5, 3);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(5, 5);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(6, 3);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(7, 4);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(8, 4);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(9, 1);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(10, 1);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(10, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(11, 3);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(11, 4);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(12, 1);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(12, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(13, 2);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(13, 4);
INSERT INTO SONG_GENRE(SONG_ID, GENRE_ID)
VALUES(14, 2);

INSERT INTO USER(ID, USERNAME, PASSWORD, FULL_NAME, CREATED_AT, UPDATED_AT)
VALUES(1, 'theavicaster', '$2a$10$Wyz8Jb3yNMVfE2G/q1oF2.fgQzeYqtfHxnUyWfOGcsEsaqYdP70Y.', 'Avinandan Banerjee', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO USER(ID, USERNAME, PASSWORD, FULL_NAME, CREATED_AT, UPDATED_AT)
VALUES(2, 'dolan', '$2a$10$pwkvDFEGIogPvBvWa2.pXu5W.87/bIIe3LHdZwBbvz0K2Ip8akBQK', 'Dolan Ronaldo', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(2, 1);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(5, 1);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(9, 1);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(11, 1);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(13, 1);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(1, 2);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(2, 2);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(7, 2);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(9, 2);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(11, 2);
INSERT INTO LIKED(SONG_ID, USER_ID)
VALUES(13, 2);

INSERT INTO COMMENT(ID, SONG_ID, USER_ID, CONTENT, CREATED_AT, UPDATED_AT)
VALUES(1, 2, 1, 'John Mayer is one of the few artists still making blues relevant today.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO COMMENT(ID, SONG_ID, USER_ID, CONTENT, CREATED_AT, UPDATED_AT)
VALUES(2, 1, 2, 'I absolutely agree with you!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO PLAYLIST(ID, USER_ID, NAME, CREATED_AT, UPDATED_AT)
VALUES(1, 1, 'Go-to music', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO SONG_PLAYLIST(PLAYLIST_ID, SONG_ID)
VALUES(1, 3);
INSERT INTO SONG_PLAYLIST(PLAYLIST_ID, SONG_ID)
VALUES(1, 5);
INSERT INTO SONG_PLAYLIST(PLAYLIST_ID, SONG_ID)
VALUES(1, 7);
INSERT INTO SONG_PLAYLIST(PLAYLIST_ID, SONG_ID)
VALUES(1, 12);
INSERT INTO SONG_PLAYLIST(PLAYLIST_ID, SONG_ID)
VALUES(1, 13);
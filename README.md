### Database Design

---

![](snapshots/database_design.png?raw=true "ER Diagram")


### REST API Endpoints

---

| Endpoint                           | HTTP Method | Access  | Description                         | Sample Request Body                                                                             | Sample Response |
|------------------------------------|-------------|---------|-------------------------------------|-------------------------------------------------------------------------------------------------|-----------------|
| **/api/songs**                     | GET         | Public  | Read all songs                      |                                                                                                 |                 |
| **/api/songs/:song_id**            | GET         | Public  | Read song by ID                     |                                                                                                 |                 |
| **/api/songs?name=Gravity**        | GET         | Public  | Read song by name                   |                                                                                                 |                 |
| **/api/albums**                    | GET         | Public  | Read all albums                     |                                                                                                 |                 |
| **/api/albums/:album_id**          | GET         | Public  | Read album by ID                    |                                                                                                 |                 |
| **/api/albums?name=Continuum**     | GET         | Public  | Read album by name                  |                                                                                                 |                 |
| **/api/artists**                   | GET         | Public  | Read all artists                    |                                                                                                 |                 |
| **/api/artists/:artist_id**        | GET         | Public  | Read artist by ID                   |                                                                                                 |                 |
| **/api/artists?name=John%20Mayer** | GET         | Public  | Read artist by name                 |                                                                                                 |                 |
| **/api/genres**                    | GET         | Public  | Read all genres                     |                                                                                                 |                 |
| **/api/genres/:genre_id**          | GET         | Public  | Read genre by ID                    |                                                                                                 |                 |
| **/api/genres?name=Blues**         | GET         | Public  | Read genre by name                  |                                                                                                 |                 |
| **/api/register**                  | POST        | Public  | Register user                       | `{"username":"bruceW","fullName":"Bruce Wayne","password":"alfred","confirmPassword":"alfred"}` |                 |
| **/api/login**                     | POST        | Public  | Login as user                       | `{"username":"bruceW","password":"alfred"}`                                                     |                 |
| **/api/likes/songs**               | GET         | Private | Read all songs liked by a user      |                                                                                                 |                 |
| **/api/likes/songs/:song_id**      | GET         | Private | Read like/unlike status of a song   |                                                                                                 |                 |
| **/api/likes/songs**               | PUT         | Private | Update like/unlike status of a song | `{"songId":"5"}`                                                                                |                 |
| **/api/playlists**                 | GET         | Private | Read all playlists by a user        |                                                                                                 |                 |
| **/api/playlists/:playlist_id**    | GET         | Private | Read playlist by ID                 |                                                                                                 |                 |
| **/api/playlists?name=My%20Music** | GET         | Private | Read playlist by name               |                                                                                                 |                 |
| **/api/playlists**                 | POST        | Private | Create playlist                     | `{"name":"My Music"}`                                                                           |                 |
| **/api/playlists**                 | DELETE      | Private | Delete playlist by ID               | `{"playlistId":"10"}`                                                                           |                 |
| **/api/playlists**                 | PUT         | Private | Add song to playlist                | `{"playlistId":"10","songId":"5"}`                                                              |                 |
| **/api/playlists**                 | DELETE      | Private | Delete song from playlist           | `{"playlistId":"10","songId":"5"}`                                                              |                 |
| **/api/comments/:song_id**         | GET         | Public  | Get all comments on a song          |                                                                                                 |                 |
| **/api/comments/:comment_id**      | GET         | Public  | Get comment by ID                   |                                                                                                 |                 |
| **/api/comments**                  | POST        | Private | Create comment on a song            | `{"songId":"5"}`                                                                                |                 |
| **/api/comments**                  | PUT         | Private | Update comment by ID                | `{"commentId":"2"}`                                                                             |                 |
| **/api/comments**                  | DELETE      | Private | Delete comment by ID                | `{"commentId":"2"}`                                                                             |                 |
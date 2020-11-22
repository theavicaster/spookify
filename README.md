
**API is deployed to [`https://spookify-music.herokuapp.com`](https://spookify-music.herokuapp.com)**

### Architecture

---

![Architecture](snapshots/flowchart.svg?raw=true "Flow Diagram")



### Database Design

---

![ER Diagram](snapshots/database_design.png?raw=true "ER Diagram")


### REST API Specification

---

All protected endpoints return only data relevant to the currently logged in user.
They require user ID, decoded from a claim within JWT from the request header sent by the client.

<details><summary><b>Endpoint Details</b></summary>


| Endpoint                                      | HTTP Method | Access    | Description                         | Request Body                                                                                    |
|-----------------------------------------------|-------------|-----------|-------------------------------------|-------------------------------------------------------------------------------------------------|
| **/api/songs**                                | GET         | Public    | Read all songs                      |                                                                                                 |
| **/api/songs/:song_id**                       | GET         | Public    | Read song by ID                     |                                                                                                 |
| **/api/songs/name/:song_name**                | GET         | Public    | Search songs by name                |                                                                                                 |
| **/api/albums**                               | GET         | Public    | Read all albums                     |                                                                                                 |
| **/api/albums/:album_id**                     | GET         | Public    | Read album by ID                    |                                                                                                 |
| **/api/albums/name/:album_name**              | GET         | Public    | Search albums by name               |                                                                                                 |
| **/api/artists**                              | GET         | Public    | Read all artists                    |                                                                                                 |
| **/api/artists/:artist_id**                   | GET         | Public    | Read artist by ID                   |                                                                                                 |
| **/api/artists/name/:artist_name**            | GET         | Public    | Search artists by name              |                                                                                                 |
| **/api/genres**                               | GET         | Public    | Read all genres                     |                                                                                                 |
| **/api/genres/:genre_id**                     | GET         | Public    | Read genre by ID                    |                                                                                                 |
| **/api/genres/name/:genre_name**              | GET         | Public    | Search genres by name               |                                                                                                 |
| **/api/users/register**                       | POST        | Public    | Register user                       | `{"username":"bruceW","fullName":"Bruce Wayne","password":"alfred","confirmPassword":"alfred"}` |
| **/api/users/login**                          | POST        | Public    | Login as user                       | `{"username":"bruceW","password":"alfred"}`                                                     |
| **/api/likes/songs**                          | GET         | Protected | Read all songs liked by a user      |                                                                                                 |
| **/api/likes/songs/:song_id**                 | PUT         | Protected | Toggle like/unlike status of a song |                                                                                                 |
| **/api/playlists**                            | GET         | Protected | Read all playlists                  |                                                                                                 |
| **/api/playlists/:playlist_id**               | GET         | Protected | Read playlist by ID                 |                                                                                                 |
| **/api/playlists/name/:playlist_name**        | GET         | Protected | Search playlists by name            |                                                                                                 |
| **/api/playlists**                            | POST        | Protected | Create playlist                     | `{"name":"My Music"}`                                                                           |
| **/api/playlists/:playlist_id**               | DELETE      | Protected | Delete playlist by ID               |                                                                                                 |
| **/api/playlists/:playlist_id**               | PATCH       | Protected | Update playlist by ID               | `{"name":"My New Music"}`                                                                       |
| **/api/playlists/:playlist_id/song/:song_id** | PATCH       | Protected | Add song to playlist                |                                                                                                 |
| **/api/playlists/:playlist_id/song/:song_id** | DELETE      | Protected | Delete song from playlist           |                                                                                                 |
| **/api/comments/song/:song_id**               | GET         | Public    | Get all comments on a song          |                                                                                                 |
| **/api/comments/:comment_id**                 | GET         | Public    | Get comment by ID                   |                                                                                                 |
| **/api/comments/song/:song_id**               | POST        | Protected | Create comment on a song            | `{"content":"This is an amazing song!"}`                                                        |
| **/api/comments/:comment_id**                 | PATCH       | Protected | Update comment by ID                | `{"content":"This is not so good after all."}`                                                  |
| **/api/comments/:comment_id**                 | DELETE      | Protected | Delete comment by ID                |                                                                                                 |

</details>


### JSON Responses

---

<details><summary><b>Song</b></summary>

```json
[
    {
        "id": 2,
        "name": "Slow Dancing in a Burning Room",
        "link": "https://www.youtube.com/watch?v=5MkfBNl_3pw&ab_channel=JohnMayer-Topic",
        "artist": {
            "id": 1,
            "name": "John Mayer",
            "photo_url": "https://media.gettyimages.com/photos/john-mayer-performs-onstage-during-mac-miller-a-celebration-of-life-picture-id1062205076?k=6&m=1062205076&s=612x612&w=0&h=fTcSaycu5ghOr9L3Gv7tmrslpYvB7ehn-rXcI04kFzY=",
            "albums": [
                1,
                2
            ],
            "songs": [
                1,
                2,
                3,
                4
            ]
        },
        "album": {
            "id": 1,
            "name": "Continuum",
            "album_art_url": "https://i.ebayimg.com/images/g/v14AAOSwkiVeQmnq/s-l500.jpg",
            "artist": {
                "id": 1,
                "name": "John Mayer",
                "photo_url": "https://media.gettyimages.com/photos/john-mayer-performs-onstage-during-mac-miller-a-celebration-of-life-picture-id1062205076?k=6&m=1062205076&s=612x612&w=0&h=fTcSaycu5ghOr9L3Gv7tmrslpYvB7ehn-rXcI04kFzY=",
                "albums": [
                    1,
                    2
                ],
                "songs": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            "songs": [
                1,
                2
            ]
        },
        "genres": [
            2,
            5
        ],
        "likedUsers": [
            1,
            2
        ],
        "playlists": [],
        "comments": [
            1
        ]
    }
]
```

</details>

<details><summary><b>Artist</b></summary>

```json
[
    {
        "id": 3,
        "name": "Adele",
        "photo_url": "https://media.gettyimages.com/photos/singer-adele-performs-onstage-at-the-54th-annual-grammy-awards-held-picture-id138859453?k=6&m=138859453&s=612x612&w=0&h=yJXH0Gu-vp83LoK5pJZ6gn9_iX-uNLe_shD2nIYM_fo=",
        "albums": [
            4
        ],
        "songs": [
            7,
            8
        ]
    }
]
```

</details>

<details><summary><b>Album</b></summary>

```json
[
    {
        "id": 5,
        "name": "Meteora",
        "album_art_url": "https://i.pinimg.com/originals/f0/e2/d8/f0e2d85aae33baedcce59b15e4d41289.jpg",
        "artist": {
            "id": 4,
            "name": "Linkin Park",
            "photo_url": "https://media.gettyimages.com/photos/singer-chester-bennington-of-linkin-park-performs-onstage-during-rock-picture-id472820584?k=6&m=472820584&s=612x612&w=0&h=LKI32zddqfn69nz0zT83fJa853rFK2cJoqC4-_gnJSU=",
            "albums": [
                5
            ],
            "songs": [
                9,
                10
            ]
        },
        "songs": [
            9,
            10
        ]
    }
]
```

</details>

<details><summary><b>Genre</b></summary>

```json
[
    {
        "id": 3,
        "name": "Indie Folk",
        "photo_url": "https://media.gettyimages.com/photos/portrait-of-canadian-musician-joni-mitchell-seated-on-the-floor-picture-id474081435?k=6&m=474081435&s=612x612&w=0&h=p-BinUTt2SN-Heocbk2IZoYHc3SBBmZY5xuKJYgmkcU=",
        "songs": [
            3,
            4,
            5,
            6,
            11
        ]
    }
]
```

</details>

<details><summary><b>Comment</b></summary>

```json
{
    "id": 1,
    "createdAt": "2020-11-13 06:27:27",
    "updatedAt": "2020-11-13 06:27:27",
    "content": "John Mayer is one of the few artists still making blues relevant today.",
    "user": {
        "id": 1,
        "username": "theavicaster",
        "fullName": "Avinandan Banerjee",
        "createdAt": "2020-11-13 06:27:27",
        "updatedAt": "2020-11-13 06:27:27",
        "likedSongs": [
            2,
            5,
            9,
            11,
            13
        ],
        "playlists": [
            1
        ],
        "comments": [
            1
        ]
    },
    "song": {
        "id": 2,
        "name": "Slow Dancing in a Burning Room",
        "link": "https://www.youtube.com/watch?v=5MkfBNl_3pw&ab_channel=JohnMayer-Topic",
        "artist": {
            "id": 1,
            "name": "John Mayer",
            "photo_url": "https://media.gettyimages.com/photos/john-mayer-performs-onstage-during-mac-miller-a-celebration-of-life-picture-id1062205076?k=6&m=1062205076&s=612x612&w=0&h=fTcSaycu5ghOr9L3Gv7tmrslpYvB7ehn-rXcI04kFzY=",
            "albums": [
                1,
                2
            ],
            "songs": [
                1,
                2,
                3,
                4
            ]
        },
        "album": {
            "id": 1,
            "name": "Continuum",
            "album_art_url": "https://i.ebayimg.com/images/g/v14AAOSwkiVeQmnq/s-l500.jpg",
            "artist": {
                "id": 1,
                "name": "John Mayer",
                "photo_url": "https://media.gettyimages.com/photos/john-mayer-performs-onstage-during-mac-miller-a-celebration-of-life-picture-id1062205076?k=6&m=1062205076&s=612x612&w=0&h=fTcSaycu5ghOr9L3Gv7tmrslpYvB7ehn-rXcI04kFzY=",
                "albums": [
                    1,
                    2
                ],
                "songs": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            "songs": [
                1,
                2
            ]
        },
        "genres": [
            2,
            5
        ],
        "likedUsers": [
            1,
            2
        ],
        "playlists": [],
        "comments": [
            1
        ]
    }
}
```

</details>

<details><summary><b>Playlist</b></summary>

```json
{
    "id": 1,
    "name": "Go-to Music",
    "createdAt": "2020-11-13 13:30:32",
    "updatedAt": "2020-11-13 13:30:32",
    "user": {
        "id": 1,
        "username": "theavicaster",
        "fullName": "Avinandan Banerjee",
        "createdAt": "2020-11-13 13:30:32",
        "updatedAt": "2020-11-13 13:30:32",
        "likedSongs": [
            2,
            5,
            9,
            11,
            13
        ],
        "playlists": [
            1
        ],
        "comments": [
            1
        ]
    },
    "songs": [
        3,
        5,
        7,
        12,
        13
    ]
}
```

</details>


### Swagger API Documentation

---

Swagger documentation can be found at `localhost:8080/swagger-ui/`

![Swagger Documentation](snapshots/swagger_docs.png?raw=true "Swagger Documentation")

### Local Usage

---

#### Set up PostgreSQL

- Ensure that there is a database named `spookify` created
- Ensure that there is a user with DDL permissions

#### Set environment variables

- On Linux, open the file `/etc/environment` using a text editor 
- Add the lines 
  ```
  export JWT_SECRET=YourJWTSecret
  export DB_HOST=YourDBHost
  export DB_PORT=YourDBPort
  export DB_USER=YourDBUsername
  export DB_NAME=YourDBName
  export DB_PASSWORD=YourDBPassword
  export REDIS_URL=YourRedisURL
  ``` 
  to set system environment variables for the production environment
- Run `source /etc/environment` or login again for changes to take effect

#### Run the server

- (Optional) Build the Uber JAR with
  ```
    cd spring_backend
    mvn clean package
  ```
- Use either the generated JAR in `spring_backend/target/spookify-backend-0.0.1-SNAPSHOT.jar`, or the provided JAR in the repository releases
- Run `java -jar spookify-backend-0.0.1-SNAPSHOT.jar`
- Tomcat server is running at `localhost:8080`

#### Bootstrap data

- Populate the tables with initial data from the DML in `spring_backend/src/main/resources/data-h2.sql`, after the app is running

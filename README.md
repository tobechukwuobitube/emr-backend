# emr backend

"A simple data entry api 👍🏼 🌍 ⚡️ 🥂 🏆"

## Technologies Used

- Nestjs: an open source server framework that allows you to run JavaScript on the server.

## How to test the API

1. Clone the repository
2. On your terminal run 'yarn install'
3. Start the Api with 'yarn start:dev'
4. Use any client of your choice (Postman, Insomnia) and navigate to the Base URL as shown below.
5. Access the available endpoints as shown below.

## Base URL:

http://localhost:3001

## Available endpoints

POST /teachers

input: request body

```
{
  "nationalId": 321,
  "title": "Miss",
  "name": "Dove",
  "surname": "Briggs",
  "dateOfBirth": "24-02-2001",
  "teacherNumber": "34",
  "salary": ""
}
```

response body:

```
{
  "nationalId": 321,
  "title": "Miss",
  "name": "Dove",
  "surname": "Briggs",
  "dateOfBirth": "24-02-2001",
  "teacherNumber": "34",
  "salary": "",
  "id": 1687966218328
}

```

GET /teachers

response body

```
[
  {
  "nationalId": 321,
  "title": "Miss",
  "name": "Dove",
  "surname": "Briggs",
  "dateOfBirth": "24-02-2001",
  "teacherNumber": 34,
  "salary": "",
  "id": 1687966218328
},
{
  "nationalId": 221,
  "title": "Dr",
  "name": "Barry",
  "surname": "White",
  "dateOfBirth": "07-02-1981",
  "teacherNumber": 322,
  "salary": 500,
  "id": 1687966218328
}
]
```

POST /students

input: request body

```
{
  "nationalId": 321,
  "name": "Dove",
  "surname": "Briggs",
  "dateOfBirth": "24-02-2001",
  "studentrNumber": "34",
}
```

response body:

```
{
  "nationalId": 321,
  "name": "Dove",
  "surname": "Briggs",
  "dateOfBirth": "24-02-2001",
  "teacherNumber": "34",
  "id": 1687966218328
}

```

GET /teachers

response body

```
[
  {
  "nationalId": 321,
  "name": "Dove",
  "surname": "Briggs",
  "dateOfBirth": "24-02-2001",
  "teacherNumber": 34,
  "id": 1687966218328
},
{
  "nationalId": 221,
  "name": "Barry",
  "surname": "White",
  "dateOfBirth": "07-02-1981",
  "teacherNumber": 322,
  "id": 1687966218328
}
]
```

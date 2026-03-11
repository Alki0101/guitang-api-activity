 Markdown
 # RESTful API ACtivity -  Guitang Alkimar S. 
 ## Best Practices Implementation

### 1. Environment Variables
**Why did we put `BASE_URI` in `.env` instead of hardcoding it?**

**Answer:**  
We placed `BASE_URI` in the `.env` file to follow best practices in environment configuration. 

### 2. Resource Modeling
**Why did we use plural nouns (e.g., `/rooms`) for our routes?**

**Answer:**  
Plural nouns are used in RESTful APIs because as we inserted more data it became a collection of data, example the `/rooms` refers to a collection of transaction resources rather than a single transactions.


### 3. Status Codes
**When do we use `201 Created` vs `200 OK`?**

**Answer:**  
`201 Created` is used when a new resource is successfully created, like example when adding a new transaction. 
`200 OK` is used when a request is successfully processed like updating or altering a certain data.

**Why is it important to return `404` instead of just an empty array or a generic error?**

**Answer:**  
Returning a `404 Not Found` status code clearly informs the client that the requested resource does not exist. 


### 4. Testing
**Successful GET Request Screenshot:**  

### Activity #01

<img width="634" height="750" alt="transactions" src="https://github.com/user-attachments/assets/7c487ea9-9911-40fa-8893-acf3abc1ed70" />

### Activity #02
<img width="1255" height="1061" alt="api" src="https://github.com/user-attachments/assets/f33a90d5-214c-49b7-81cd-5d3ff14b87ef" />

### Activity #04

### 1. Authentication vs Authorization:
**What is the difference between Authentication and Authorization in our code?

### - Authentication is the process of checking if the user is really who they say they are weather what thier roles logging in using thier email and password.

### - Authorization happens after when authentication works and decides if that user is authorized and allowed to do in the system.

### 2. Security (bcrypt):
**Why did we use bcryptjs instead of saving passwords as plain text in MongoDB?

### - We used bcryptjs because saving plain text passwords in MongoDB is unsafe. If the database gets hacked, attackers would see the raw passwords easy for them to exploit . Hashing with bcrypt makes the passwords unreadable and adds extra protection by using salt, so even similar passwords don’t look the same in the database they became long or encrypted.

### 3. JWT Structure:
**What does the protect middleware do when it receives a JWT from the client?

### - When the protect middleware receives a JWT from the client, it verifies if the token is valid. If valid, it decodes the token to get the user’s ID and attaches that user info to the request object. This ensures only authenticated users can access protected routes.

<img width="1919" height="1008" alt="Screenshot 2026-03-11 122652" src="https://github.com/user-attachments/assets/0dcd89de-910a-4cea-8832-a9d98feaec01" />

<img width="1520" height="1075" alt="Screenshot 2026-03-11 122731" src="https://github.com/user-attachments/assets/1a94f2a2-8d62-4522-828f-b9a905fee812" />






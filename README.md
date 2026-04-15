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

## 1. Authentication vs Authorization:
What is the difference between Authentication and Authorization in our code?

### - Authentication is the process of checking if the user is really who they say they are weather what thier roles logging in using thier email and password.

### - Authorization happens after when authentication works and decides if that user is authorized and allowed to do in the system.

## 2. Security (bcrypt):
Why did we use bcryptjs instead of saving passwords as plain text in MongoDB?

### - We used bcryptjs because saving plain text passwords in MongoDB is unsafe. If the database gets hacked, attackers would see the raw passwords easy for them to exploit . Hashing with bcrypt makes the passwords unreadable and adds extra protection by using salt, so even similar passwords don’t look the same in the database they became long or encrypted.

## 3. JWT Structure:
What does the protect middleware do when it receives a JWT from the client?

### - When the protect middleware receives a JWT from the client, it verifies if the token is valid. If valid, it decodes the token to get the user’s ID and attaches that user info to the request object. This ensures only authenticated users can access protected routes.

<img width="1919" height="1008" alt="Screenshot 2026-03-11 122652" src="https://github.com/user-attachments/assets/0dcd89de-910a-4cea-8832-a9d98feaec01" />

<img width="1520" height="1075" alt="Screenshot 2026-03-11 122731" src="https://github.com/user-attachments/assets/1a94f2a2-8d62-4522-828f-b9a905fee812" />


### Activity #05

## Unit Test Specification

| Test ID | Module                | Function           | Scenario Description                        | Expected Output / Status                | Status |
|---------|----------------------|--------------------|---------------------------------------------|-----------------------------------------|--------|
| UT-001  | TransactionController | getTransactions    | Fetch all transactions successfully         | HTTP 200, Array of Transaction Objects  | Pass   |
| UT-002  | TransactionController | getTransactions    | Database throws a connection error          | HTTP 500, { message: ... } JSON         | Pass   |
| UT-003  | TransactionController | createTransaction  | Create a new transaction                    | HTTP 201, Transaction Object            | Pass   |
| UT-004  | AuthMiddleware        | protect            | Request missing Authorization header         | HTTP 401, { message: ... } JSON         | Pass   |
| UT-005  | AuthMiddleware        | protect            | Valid Bearer token provided                 | next() function is called               | Pass   |

### Essay Questions

1. **Mocking:**
   - **Explain in your own words why we mocked Dish.find and jwt.verify. What specific problem does mocking solve in Unit Testing?**
   - **Answer:**
     Mocking allows us to replace real functions  with fake versions that return controlled results. This isolates the code we want to test from external dependencies like the database or authentication system. By mocking, we ensure our unit tests only test the logic of our code, not the behavior or availability of outside systems. This makes tests more reliable, faster, and easier to write.

2. **Code Coverage:**
   - **Look at your Jest Coverage report. Explain what % Branch coverage means. If your Branch coverage is at 50%, what does that tell you about your tests? (Hint: Think about if/else statements).**
   - **Answer:**
     my your branch coverage is 50%, it means only half of the possible decision paths  have been tested. To improve this

3. **Testing Middleware:**
   - **In our authMiddleware.test.js, why did we use jest.fn() for the next variable, and why did we assert expect(next).not.toHaveBeenCalled() in the failure scenario?**
   - **Answer:**
     We use jest.fn() to create a mock function for next so we can track if it was called. In the failure scenario, we assert expect(next).not.toHaveBeenCalled() to make sure the middleware correctly blocks unauthorized requests and does not proceed to the next middleware or route handler. This verifies that our authentication logic is working as intended.






 Markdown
 # RESTful API ACtivity - [ Guitang Alkimar S. ]
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

## WebAPI Documentation

### Home Page endpoint
- **Address:** `/`
- **Method:** `GET`
- **Headers:** Not applicable
- **Body:** Not applicable
- **Responses:**
  - Success (200 OK)
    ```http
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```
  - Error - Not Found (404 Not Found)
    ```http
    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```

### Home Page endpoint (specific)
- **Address:** `/homepage`
- **Method:** `GET`
- **User Storie:** 08
- **Headers:** Not applicable
- **Body:** Not applicable
- **Responses:**
  - Success (200 OK)
    ```http
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```
  - Error - Not Found (404 Not Found)
    ```http
    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```

### Profile Page endpoint
- **Address:** `/profile`
- **Method:** `GET`
- **User Storie:** 07
- **Headers:** Not applicable
- **Body:** Not applicable
- **Responses:**
  - Success (200 OK)
    ```http
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```
  - Error - Not Found (404 Not Found)
    ```http
    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```

### Log-In Page endpoint
- **Address:** `/login`
- **Method:** `GET`
- **User Storie:** 02
- **Headers:** Not applicable
- **Body:** Not applicable
- **Responses:**
  - Success (200 OK)
    ```http
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```
  - Error - Not Found (404 Not Found)
    ```http
    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```

### Sign-Up Page endpoint
- **Address:** `/signup`
- **Method:** `GET`
- **User Storie:** 01
- **Headers:** Not applicable
- **Body:** Not applicable
- **Responses:**
  - Success (200 OK)
    ```http
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```
  - Error - Not Found (404 Not Found)
    ```http
    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Content-Length: [content length in bytes]
    Date: [date and time]
    ```

### Create User endpoint
- **Address:** `/signup`
- **Method:** `POST`
- **User Storie:** 01
- **Headers:** 
  - Content-Type: application/json
- **Body:** 
```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
```
- **Responses:**
  - Success (201 Created)
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
Location: /user/[user id]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Conflict (409 Conflict)
```http
HTTP/1.1 409 Conflict
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```

### Read User endpoint
- **Address:** `/user/:id`
- **Method:** `GET`
 - **Headers:**
  - Authorization: Bearer [token]
 - **Body:** Not applicable
 - **Responses:**
  - Success (200 OK)
```http
  HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Unauthorized (401 Unauthorized)
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Not Found (404 Not Found)
```http
HTTP/1.1 404 Not Found
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
### Log-in endpoint
- **Address:** `/login`
- **Method:** `POST`
 - **Headers:**
  - Content-Type: application/json
 - **Body:**
```json
 {
  "username": "string",
  "password": "string"
}
```
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Unauthorized (401 Unauthorized)
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
### Log-out endpoint
- **Address:** `/logout`
- **Method:** `GET`
 - **Headers:**
  - Not applicable
 - **Body:**
  - Not applicable
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Not Found (404 Not Found)
```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```

## Update Happiness endpoint
**Address:** `/profile/update-happiness`
**Method:** `POST` 
**Headers:**
Content-Type: application/json
 - **Body:**
```json
{
  "happiness": "number"
}
```
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```

## Evaluation endpoint
**Address:** `/evaluation`
**Method:** `POST`  
**Headers:**
Content-Type: application/json
 - **Body:**
```json
{
  "evaluation": "string"
}
```
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```

### Admin page endpoint
- **Address:** `/admin`
- **Method:** `GET`
 - **Headers:**
  - Not applicable
 - **Body:**
  - Not applicable
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Not Found (404 Not Found)
```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```

## Assign User to Team endpoint
**Address:** `/admin/assign-user`
**Method:** `POST`  
**Headers:**
Content-Type: application/json
 - **Body:**
```json
{
  "userId": "number",
  "teamId": "number"
}
```
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```

### Create Team endpoint
- **Address:** `/admin/create-team`
- **Method:** `POST`
- **Headers:** 
  - Content-Type: application/json
- **Body:** 
```json
{
  "teamName": "string"
}
```  
- **Responses:**
  - Success (201 Created)
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
Location: /user/[user id]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Conflict (409 Conflict)
```http
HTTP/1.1 409 Conflict
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```

### Create Task endpoint
- **Address:** `/task`
- **Method:** `POST`
- **Headers:** 
  - Content-Type: application/json
- **Body:** 
```json
{
  "task": "string"
}
```  
- **Responses:**
  - Success (201 Created)
```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
Location: /user/[user id]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```

### Fetch Tasks endpoint
- **Address:** `/task`
- **Method:** `GET`
 - **Headers:**
  - Not applicable
 - **Body:**
  - Not applicable
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Not Found (404 Not Found)
```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```

### Delete Task endpoint
- **Address:** `/task`
- **Method:** `DELETE`
 - **Headers:**
  - Not applicable
 - **Body:**
  - Not applicable
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Not Found (404 Not Found)
```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```

### Update Task endpoint
- **Address:** `/task`
- **Method:** `PUT`
 - **Headers:**
  - Content-Type: application/json
- **Body:** 
```json
{
  "task": "string"
}
```  
 - **Responses:**
   - Success (200 OK)
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Bad Request (400 Bad Request)
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: [content length in bytes]
Date: [date and time]
```
  - Error - Not Found (404 Not Found)
```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: [content length in bytes]
Date: [date and time]
```

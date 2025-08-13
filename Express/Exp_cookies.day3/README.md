# Cookies in Backend

- react server is state less the dese't store the state....
- this is short of problem or missing feature in backend....

## What are Cookies?
Cookies are small pieces of data stored in the client's browser, sent from the server. They allow stateful sessions over the stateless HTTP protocol.

## Why Use Cookies?
- Authentication (session IDs, tokens)
- User preferences (theme, language)
- Temporary storage (shopping cart)
- Tracking user behavior

## How Cookies Work
1. Server sends a `Set-Cookie` header in the HTTP response.
2. Browser stores the cookie.
3. Browser sends the cookie in every request to the same domain.
4. Server reads the cookie and uses the data.

## Example (Express.js)
```javascript
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Ajay", { httpOnly: true, maxAge: 3600000 });
  res.send("Cookie set!");
});

app.get("/get-cookie", (req, res) => {
  res.send(`Hello ${req.cookies.username}`);
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie cleared");
});

app.listen(3000);

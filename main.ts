import * as express from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { books, Book } from "./bookStore.ts";

const app = new express.App(); // new instance of Express()
app.use(express.bodyParser.json()); //using of bodyParser() middleware

// starting routes

app.get("/books", async (req, res) => {
  return await res.json(books);
});

app.get("/books/{id}", async (req, res): Promise<void> => {
  const book = await books.filter((book) => book.id === Number(req.params.id));
  if (book.length) return await res.json(book);
  else {
    res.status = 404;
    return res.json({ message: "Book not found!" });
  }
});

app.post("/books", async (req, res): Promise<void> => {
  const book = await books.find((book) => book.title === req.data.title);
  if (!book) {
    const newBook: Book = req.data;
    books.push(newBook);
    return await res.json(newBook);
  } else {
    res.status = 404;
    return res.json({ message: "This Book exist. Impossible to add it!" });
  }
});

app.delete("/books/{id}", async (req, res): Promise<void> => {
  const indexBook = await books.findIndex((book) =>
    Number(req.params.id) === book.id
  );
  if (indexBook > 0) {
    books.splice(indexBook, 1);
    return await res.json({ message: "Book deleted!" });
  } else {
    res.status = 404;
    return await res.json(
      { message: "Book not found! Impossible to delete it." },
    );
  }
});

app.put("/books/{id}", async (req, res): Promise<void> => {
  const indexBook = await books.findIndex((book) =>
    Number(req.params.id) === book.id
  );
  if (indexBook > 0) {
    const book: Book = req.data;
    books.splice(indexBook, 1, book);
    return await res.json(req.data);
  } else {
    res.status = 404;
    return await res.json(
      { message: "Impossible to update! Book not found." },
    );
  }
});

// end of routes

const PORT = 4000;
const server = await app.listen(PORT);
console.log(`🚀 server listen at http://127.0.0.1:${server.port}`);

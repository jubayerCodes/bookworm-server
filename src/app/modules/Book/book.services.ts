import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (bookData: IBook) => {
  const book = await Book.create(bookData);
  return book;
};

const getAllBooks = async () => {
  const books = await Book.find();
  return books;
};

const getBookById = async (id: string) => {
  const book = await Book.findById(id);
  return book;
};

const updateBookById = async (id: string, bookData: IBook) => {
  const book = await Book.findByIdAndUpdate(id, bookData, { new: true });
  return book;
};

const deleteBookById = async (id: string) => {
  const book = await Book.findByIdAndDelete(id);
  return book;
};

export const BookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};

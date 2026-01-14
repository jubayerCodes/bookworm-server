import { Request, Response } from "express";
import { IBook } from "./book.interface";
import { catchAsync } from "../../utils/catchAsync";
import { BookServices } from "./book.services";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const payload: IBook = {
    ...req.body,
    coverImage: req.file?.path,
  };
  const book = await BookServices.createBook(payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book Created Successfully",
    data: book,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const books = await BookServices.getAllBooks();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Books Retrieved Successfully",
    data: books,
  });
});

export const BookControllers = {
  createBook,
  getAllBooks,
};

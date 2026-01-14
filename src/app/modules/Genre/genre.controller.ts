import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { GenreServices } from "./genre.services";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createGenre = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const genreData = req.body;
  const genre = await GenreServices.createGenre(genreData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Genre Created Successfully",
    data: genre,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllGenres = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const genres = await GenreServices.getAllGenres();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Genres Retrieved Successfully",
    data: genres,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getGenreById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  const genre = await GenreServices.getGenreById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Genre Retrieved Successfully",
    data: genre,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateGenreById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  const genre = await GenreServices.updateGenreById(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Genre Updated Successfully",
    data: genre,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteGenreById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  const genre = await GenreServices.deleteGenreById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Genre Deleted Successfully",
    data: genre,
  });
});

export const GenreControllers = {
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenreById,
  deleteGenreById,
};

import { IGenre } from "./genre.interface";
import { Genre } from "./genre.model";

const createGenre = async (genreData: IGenre) => {
  const genre = await Genre.create(genreData);
  return genre;
};

const getAllGenres = async () => {
  const genres = await Genre.find();
  return genres;
};

const getGenreById = async (id: string) => {
  const genre = await Genre.findById(id);
  return genre;
};

const updateGenreById = async (id: string, genreData: IGenre) => {
  const genre = await Genre.findByIdAndUpdate(id, genreData, { new: true });
  return genre;
};

const deleteGenreById = async (id: string) => {
  await Genre.findByIdAndDelete(id);
  return null;
};

export const GenreServices = {
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenreById,
  deleteGenreById,
};

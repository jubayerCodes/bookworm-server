import { model, Schema } from "mongoose";
import { IGenre } from "./genre.interface";

const GenreSchema = new Schema<IGenre>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Genre = model<IGenre>("Genre", GenreSchema);

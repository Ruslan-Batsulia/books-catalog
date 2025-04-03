import { BooksResponse } from "./types";

const API_URL = "https://gnikdroy.pythonanywhere.com/api" as const;

export async function getBooks() {
  try {
    const response = await fetch(`${API_URL}/book/`);

    if (!response.ok) {
      throw new Error(`Error fetching books: ${response.statusText}`);
    }

    const data: BooksResponse = await response.json();
    return data;
  } catch (error: unknown) {
    console.error("Error fetching books:", error);
    return null;
  };
};

import { prisma } from "@/prisma/client";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const rootDirectory = path.join(process.cwd(), "content", "notes");

export const getNotesMetadata = async (limit?: number) => {
  const files = fs.readdirSync(rootDirectory);
  const markdownFiles = files.filter((file) => file.endsWith(".mdx"));
  const notes = await Promise.all(
    markdownFiles.map(async (file) => {
      /** create slug */
      const slug = file.replace(".mdx", "");
      /** get formatter */
      const markdownWithMetadata = fs.readFileSync(
        path.join(rootDirectory, file),
        "utf-8",
      );
      const { data } = matter(markdownWithMetadata);
      const views = await prisma.noteViews.findUnique({
        where: {
          slug: slug,
        },
      });
      data.views = views?.count || 0;
      data.slug = slug;
      return data as NoteMetadata;
    }),
  );
  const sortNotes = notes.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  if (limit) {
    return sortNotes.slice(0, limit);
  }
  return sortNotes;
};

export const getNoteBySlug = async (slug: string) => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContent);
    const noteViews = await prisma.noteViews.findUnique({
      where: {
        slug: slug,
      },
    });
    const views = noteViews?.count || 0;
    return { metadata: { ...data, slug, views }, content } as Note;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllNotes = async () => {
  const files = fs.readdirSync(rootDirectory);
  const notes = await Promise.all(
    files.map((file) => getNoteBySlug(file.replace(".mdx", ""))),
  );
  // Filter out nulls if any file failed to load
  const filteredNotes = notes.filter((note) => note !== null) as Note[];
  return filteredNotes.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
};

export const getRelatedNotes = async ({
  category,
  limit,
}: {
  category: string;
  limit: number;
}): Promise<NoteMetadata[]> => {
  try {
    const notes = await getNotesMetadata(limit);
    const relatedNotes = notes.filter((note) => note.category === category);
    return relatedNotes;
  } catch (error) {
    console.log(error);
    return [];
  }
};

type NoteMetadata = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  tags: string[];
  thumbnail: string;
  readingTime?: string;
  views: number;
};

type Note = {
  metadata: NoteMetadata;
  content: string;
};

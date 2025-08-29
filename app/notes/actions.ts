"use server";

import { prisma } from "@/prisma/client";

export async function incrementNoteViews(slug: string) {
  // Check if post visit exists, create if not
  const postVisit = await prisma.noteViews.findUnique({
    where: { slug: slug },
  });
  if (postVisit) {
    await prisma.noteViews.update({
      where: { slug: slug },
      data: { count: { increment: 1 } },
    });
  } else {
    await prisma.noteViews.create({
      data: {
        slug: slug,
        count: 1,
      },
    });
  }
}

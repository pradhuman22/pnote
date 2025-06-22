'use server';

import { prisma } from '@/prisma/client';

export async function incrementNoteViews(slug: string) {
  // Check if post visit exists, create if not
  const postVisit = await prisma.views.findUnique({
    where: { slug: slug },
  });
  if (postVisit) {
    await prisma.views.update({
      where: { slug: slug },
      data: { count: { increment: 1 } },
    });
  } else {
    await prisma.views.create({
      data: {
        slug: slug,
        count: 1,
      },
    });
  }
}

import type { APIRoute } from "astro";
import { getArticles } from "../../lib/articles";

export const GET: APIRoute = async ({ params }) => {
  const articles = await getArticles();
  const article = articles.find((a) => a.key === params.id);

  if (!article) {
    return new Response("Not found", { status: 404 });
  }

  const response = await fetch(article.imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status}`);
  }

  return new Response(await response.arrayBuffer(), {
    headers: {
      "Content-Type": response.headers.get("Content-Type") ?? "image/jpeg",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
};
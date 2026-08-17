import type { APIRoute } from "astro";
import { getArticles } from "../../lib/articles";

export const prerender = true;

export async function getStaticPaths() {
  const articles = await getArticles();

  return articles.map((article) => ({
    params: {
      id: article.key,
      ext: article.imageUrl.replace(/\?.*/, "").split(".").pop()!,
    },
    props: {
      imageUrl: article.imageUrl,
    },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const response = await fetch(props.imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status}`);
  }

  return new Response(await response.arrayBuffer(), {
    headers: {
      "Content-Type":
        response.headers.get("Content-Type") ?? "image/jpeg",
    },
  });
};

interface apiResp {
  data: {
    contents: {
      type: string;
      name: string;
      description: string | null; // nullの場合がほとんど？
      key: string;
      publishAt: string;
      eyecatch: string;
      body: string;
      isPinned: boolean;
      [key: string]: unknown;
    }[];
    isLastPage: boolean;
    totalCount: number;
  }
}

interface Post {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  imageExt: string;
  noteUrl: string;
  isPinned: boolean;
  key: string;
}

const username = process.env.NOTE_USERNAME || "nexusspark";

export async function getArticles(maxPage: number = 2) {
  const posts: Post[] = [];
  // 現状1ページにつき6件のノート
  for (let page = 1; page <= maxPage; page++) {
    const resp = await fetch(`https://note.com/api/v2/creators/${username}/contents?kind=note&page=${page}`);
    const data: apiResp = await resp.json();
    if (!data || !data.data || !data.data.contents) {
      throw new Error("Failed to fetch posts data from the API.");
    }

    posts.push(...data.data.contents.map((content) => ({
      title: content.name,
      description: content.body,
      date: new Date(content.publishAt).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
      imageUrl: content.eyecatch || "https://placehold.jp/640x335.png",
      imageExt: (content.eyecatch || "https://placehold.jp/640x335.png").replace(/\?.*/, "").split(".").pop()!,
      noteUrl: `https://note.com/${username}/n/${content.key}`,
      isPinned: content.isPinned,
      key: content.key
    })));
    if (data.data.isLastPage) {
      break;
    }
  }
  return posts;
}

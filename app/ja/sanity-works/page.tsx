import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '2jvxj72p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

type SanityWork = {
  _id: string;
  workId?: string;
  titleJa?: string;
  titleEn?: string;
  commentJa?: string;
  commentEn?: string;
  sortOrder?: number;
  published?: boolean;
  series?: {
    titleJa?: string;
    titleEn?: string;
    seriesId?: string;
  };
};

const worksQuery =
  "*[_type == 'work' && published == true] | order(sortOrder asc) {_id, workId, titleJa, titleEn, commentJa, commentEn, sortOrder, published, series->{titleJa, titleEn, seriesId}}";

export default async function JapaneseSanityWorksPage() {
  const works = await client.fetch<SanityWork[]>(worksQuery);

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#050504',
        color: '#efe7d8',
        padding: '80px 7vw',
        fontFamily: 'serif',
      }}
    >
      <h1 style={{ fontSize: 56, fontWeight: 400 }}>
        管理画面から登録した作品
      </h1>

      <p style={{ color: 'rgba(239,231,216,.72)', lineHeight: 1.9 }}>
        このページは、Sanityの管理画面に登録した作品データを読み込んで表示しています。
      </p>

      <p style={{ color: '#c9a86a', marginTop: 32 }}>
        登録作品数：{works.length}
      </p>

      <div style={{ display: 'grid', gap: 20, maxWidth: 900, marginTop: 32 }}>
        {works.map((work) => (
          <article
            key={work._id}
            style={{
              border: '1px solid rgba(239,231,216,.18)',
              padding: 24,
              background: 'rgba(255,255,255,.02)',
            }}
          >
            <p style={{ color: '#c9a86a', margin: '0 0 10px' }}>
              {work.workId || '作品IDなし'}
            </p>

            <h2 style={{ fontSize: 30, fontWeight: 400, margin: '0 0 14px' }}>
              {work.titleJa || work.titleEn || 'タイトルなし'}
            </h2>

            <p style={{ lineHeight: 1.9, color: 'rgba(239,231,216,.78)' }}>
              {work.commentJa || work.commentEn || 'コメントなし'}
            </p>

            <p style={{ color: 'rgba(239,231,216,.58)', marginTop: 20 }}>
              シリーズ：{work.series?.titleJa || work.series?.titleEn || '未設定'}
            </p>

            <p style={{ color: 'rgba(239,231,216,.58)' }}>
              表示順：{typeof work.sortOrder === 'number' ? work.sortOrder : '未設定'}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
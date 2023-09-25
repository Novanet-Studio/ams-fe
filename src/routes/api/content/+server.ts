import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const key = url.searchParams.get('key') ?? '';

  if (!key) {
    throw error(400, 'No key provided');
  }

  // const modules = import.meta.glob(`../../${key}/*.md`);
  const modules = import.meta.glob([
    '../../../content/homepage/*.md',
    '../../../content/about/*.md',
  ]);
  const promises = [];

  for (const [path, resolver] of Object.entries(modules)) {
    const promise = resolver().then((content: { metadata: object }): any => {
      const title = path.match(/([\w-]+)(\.)/i)?.[1] ?? null;

      console.log(content.metadata)

      return {
        title,
        ...content.metadata,
      }
    });

    promises.push(promise);
  }

  const data = await Promise.all(promises);

  return new Response(JSON.stringify(data));
}

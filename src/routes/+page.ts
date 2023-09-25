export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('/api/content?key=homepage');

  if (res.ok) {
    const content = await res.json();
    content.shift();

    return {
      content,
    };
  }

  return {
    content: [],
  };
}

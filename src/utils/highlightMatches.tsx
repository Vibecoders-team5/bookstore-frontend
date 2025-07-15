export function highlightMatches(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ?
      <span key={i} className="bg-yellow-200 dark:text-black font-semibold">
        {part}
      </span>
    : part,
  );
}

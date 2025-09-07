export const formatListeningLength = (ms: number) => {
  const totalMinutes = Math.floor(ms / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hoursPart = hours > 0 ? `${hours} hour${hours === 1 ? '' : 's'}` : '';
  const minutesPart =
    minutes > 0 ? `${minutes} minute${minutes === 1 ? ' ' : 's'}` : '';

  return [hoursPart, minutesPart].filter(Boolean).join(' ');
};

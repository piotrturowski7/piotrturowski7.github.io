export type VideoInfo = { provider: 'youtube' | 'vimeo'; id: string; embed: string };

/** Zamienia zwykły link YouTube/Vimeo na adres do osadzenia. Zwraca null dla pustego lub nieznanego linku. */
export function parseVideo(url: string | undefined): VideoInfo | null {
  if (!url) return null;
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (yt) {
    return {
      provider: 'youtube',
      id: yt[1],
      embed: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1`,
    };
  }
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/);
  if (vm) {
    const hash = vm[2] ? `&h=${vm[2]}` : '';
    return {
      provider: 'vimeo',
      id: vm[1],
      embed: `https://player.vimeo.com/video/${vm[1]}?autoplay=1&dnt=1${hash}`,
    };
  }
  return null;
}

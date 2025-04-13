export default function customImageLoader({ src }) {
  // Wenn der Pfad mit http oder https beginnt, gib ihn direkt zurück
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Wenn der Pfad bereits mit / beginnt, entferne den führenden /
  if (src.startsWith('/')) {
    return src.slice(1);
  }
  
  // Andernfalls gib den Pfad direkt zurück
  return src;
} 
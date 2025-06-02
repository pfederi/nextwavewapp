export default function customImageLoader({ src }) {
  // Wenn der Pfad mit http oder https beginnt, gib ihn direkt zurück
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Entferne führende Slashes
  const cleanPath = src.replace(/^\/+/, '');
  
  // Konstruiere den vollständigen Pfad
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  return `${baseUrl}/${cleanPath}`;
} 
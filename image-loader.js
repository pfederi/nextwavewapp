export default function customImageLoader({ src }) {
  return src.startsWith('/') ? src : `/${src}`
} 
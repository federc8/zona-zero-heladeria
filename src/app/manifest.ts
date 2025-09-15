import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zona Zero Heladería',
    short_name: 'Zona Zero',
    description: 'Los mejores helados de yogurt, obleas, ensaladas de frutas y postres',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#54c7ee',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/Helado.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/Helado.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['food', 'lifestyle'],
    lang: 'es',
    orientation: 'portrait-primary',
  }
}

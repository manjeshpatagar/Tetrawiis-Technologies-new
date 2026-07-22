import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tetrawiis Technologies',
    short_name: 'Tetrawiis',
    description: 'Digital engineering and technology solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#061728',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}

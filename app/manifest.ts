import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QuantaLabs — Post-Quantum Cryptography Migration',
    short_name: 'QuantaLabs',
    description: 'QuantaLabs helps Indian fintechs and crypto companies complete CBOM audits and migrate to NIST post-quantum standards.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

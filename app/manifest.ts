import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QuantaLabs - Post-Quantum Cryptography Migration',
    short_name: 'QuantaLabs',
    description: 'QuantaLabs engineers sovereign infrastructure for the autonomous AI economy. Enterprise AI Integrations and QuantaChain PQC blockchain.',
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

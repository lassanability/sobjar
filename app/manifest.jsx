export default function manifest() {
  return {
    name: 'Sobjar',
    short_name: 'Sobjar',
    description: 'Taking care of our youths',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    
    background_color: '#F0F6F4',
    theme_color: '#009077',
    categories: ['youth', "community", "ngo", 'sports'],
    
    icons: [
      {
        src: '/assets/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/assets/logo.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/assets/logo.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    
    prefer_related_applications: false,
    
    lang: 'en',
    dir: 'ltr',
    
    related_applications: [],
    shortcuts: [
      {
        name: 'Sobjar',
        short_name: 'Sobjar',
        description: 'Taking care of our youths',
        url: '/',
        icons: [{ src: '/assets/logo.png', sizes: '96x96' }]
      },

    ],
    
    screenshots: [
      {
        src: '/assets/banner.png',
        sizes: '1280x720',
        type: 'image/png',
        platform: 'wide',
        label: 'Home Screen'
      }
    ]
  }
}
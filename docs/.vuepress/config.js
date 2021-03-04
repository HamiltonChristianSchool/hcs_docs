module.exports = {
  title: 'HCS Intranet',
  description: 'HCS internal docs for Staff',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    title: 'HCS Intranet',
    description: 'HCS internal docs for Staff',
    docsDir: 'docs',
    repo: 'HamiltonChristianSchool/hcs_docs',
    displayAllHeaders: true,
    sidebar: [
      ['/', 'Home'],
      ['/helpdesk', 'Help Desk'],
      ['/staff_hand_book', 'Staff Handbook'],
      {
        title: 'Quick Setups',   // required
        path: '/quick_setups/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/quick_setups/printers', 'Printers'],
          ['/quick_setups/google_profile', 'Google Profile']
        ]
      },
      {
        title: 'Staff Apps',   // required
        path: '/staff_apps/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/staff_apps/alarm_apps', 'Alarm Apps'],
          ['/staff_apps/phone_app', 'Phone App']
        ]
      },
      {
        title: 'Google',   // required
        path: '/google/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/google/calendars', 'Calendar'],
          ['/google/chat', 'Chat'],
          ['/google/hcs_forms', 'HCS Forms']
        ]
      },
      {
        title: 'Contacts',   // required
        path: '/contacts/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/contacts/email_list', 'Email List'],
          ['/contacts/phone_list', 'Phone List']
        ]
      },
      {
        title: 'Need to Knows',   // required
        path: '/need_to_knows/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/need_to_knows/onboarding', 'Onboarding'],
          ['/need_to_knows/apple_id', 'Apple ID'],
          ['/need_to_knows/schoolpoint', 'SchoolPoint'],
          ['/google/hcs_forms', 'HCS Forms']
        ]
      }
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ],
    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],

    nextLinks: true,
    prevLinks: true,
  
    markdown: {
      lineNumbers: true
    }
  }
}
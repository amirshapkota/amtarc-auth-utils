module.exports = [
  {
    name: '@amtarc/auth-utils (full)',
    path: 'packages/core/dist/index.js',
    limit: '15 KB',
    ignore: ['crypto'],
  },
  {
    name: '@amtarc/auth-utils/session',
    path: 'packages/core/dist/session/index.js',
    limit: '5 KB',
    ignore: ['crypto'],
  },
];

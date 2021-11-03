import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Compverse',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  description: 'Compverse Documents',
  exportStatic: {},
  base: '/',
  publicPath: '/',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    // 多语言 key 值需与 locales 配置中的 key 一致
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/compverse/compverse-chain',
      },
      {
        title: 'Website',
        path: 'https://compverse.io',
      },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/guide': [
      {
        title: 'Introduction',
        children: ['guide/index', 'guide/getting-started'],
      },
      {
        title: 'Concepts',
        children: ['guide/consensus', 'guide/genesis'],
      },
      {
        title: 'Explorer',
        children: ['guide/explorer'],
      },
      {
        title: 'Wallet',
        children: ['guide/metamask'],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    '/developer': [
      {
        title: 'Deploy',
        children: [
          'developer/install',
          'developer/fullnode',
          'developer/docker',
          'developer/mainnet',
          'developer/testnet',
          'developer/sdk',
          'developer/remix',
          'developer/truffle',
          'developer/blockscout',
          'developer/verify',
          'developer/local',
          'developer/txpool',
        ],
      },
      {
        title: 'Geth CLI Client',
        children: [
          'developer/cli/account',
          'developer/cli/attach',
          'developer/cli/console',
          'developer/cli/dump',
          'developer/cli/dumpconfig',
          'developer/cli/dumpgenesis',
          'developer/cli/export',
          'developer/cli/import',
          'developer/cli/init',
          'developer/cli/inspect',
          'developer/cli/js',
          'developer/cli/license',
          'developer/cli/removedb',
          'developer/cli/version',
        ],
      },
      {
        title: 'Tool',
        children: ['developer/tool'],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
  },
});

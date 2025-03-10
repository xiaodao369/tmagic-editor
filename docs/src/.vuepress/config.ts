import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import path from 'path';

const sidebar = {
  guide: [
    {
      text: '使用指南',
      children: [
        '/guide/introduction',
        '/guide/installation',
        '/guide/conception',
      ]
    }, {
      text: '进阶指南',
      children: [
        '/guide/advanced/js-schema.md',
        '/guide/advanced/layout.md',
        '/guide/advanced/page.md',
        '/guide/advanced/high-level-function.md',
        '/guide/advanced/magic-ui.md',
        '/guide/advanced/magic-form.md',
        '/guide/advanced/coupling.md',
      ]
    }
  ],
  page: [
    {
      text: '页面发布',
      sidebarDepth: 2,
      children: [
        '/page/introduction',
        '/page/advanced',
      ]
    }
  ],
  admin: [
    {
      text: '管理端Demo',
      children: [
        '/admin/introduction',
      ]
    }
  ],
  component: [
    {
      text: '组件开发',
      children: [
        '/component/introduction',
      ]
    }
  ],
  editorApi: [
    {
      text: '编辑器',
      children: [
        '/api/editor/editor',
        '/api/editor/services',
      ]
    },
  ],
  formApi: [
    {
      text: '表单',
      children: [
        '/api/form/form',
      ]
    },
  ],
  formConfig: [
    {
      text: '表单配置',
      children: [
        '/api/form-config/layout',
      ]
    },
    {
      text: 'field配置',
      children: [
        '/api/form-config/fields/cascader',
        '/api/form-config/fields/checkbox',
        '/api/form-config/fields/color-picker',
        '/api/form-config/fields/date-picker',
        '/api/form-config/fields/datetime-picker',
        '/api/form-config/fields/display',
        '/api/form-config/fields/hidden',
        '/api/form-config/fields/number',
        '/api/form-config/fields/input',
        '/api/form-config/fields/link',
        '/api/form-config/fields/redio',
        '/api/form-config/fields/select',
        '/api/form-config/fields/switch',
        '/api/form-config/fields/textarea',
        '/api/form-config/fields/time-picker',
      ]
    },
    {
      text: '联动配置',
      children: [
        '/api/form-config/relate',
      ]
    },
  ]
};

export default defineUserConfig<DefaultThemeOptions>({
  title: 'tmagic-editor',
  description: 'magic',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  themeConfig: {
    logo: 'https://vfiles.gtimg.cn/vupload/20210811/388ed01628667545737.png',
    navbar: [
      {
        text: '文档',
        children: [
          {
            text: '使用指南',
            link: '/guide/introduction'
          },
          {
            text: '组件开发',
            link: '/component/introduction'
          },
          {
            text: '页面发布',
            link: '/page/introduction'
          },
          {
            text: '管理端Demo',
            link: '/admin/introduction'
          },
        ]
      },
      {
        text: 'API参考',
        children: [
          {
            text: '编辑器',
            link: '/api/editor/editor'
          },
          {
            text: '表单',
            link: '/api/form/form'
          },
          {
            text: '表单配置',
            link: '/api/form-config/layout'
          },
        ],
      }, {
        text: '查看源码',
        link: 'https://github.com/Tencent/tmagic-editor'
      }, {
        text: 'Playground',
        link: 'https://tencent.github.io/tmagic-editor/playground/index.html'
      }
    ],
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      '/guide/': sidebar.guide,
      '/page/': sidebar.page,
      '/component/': sidebar.component,
      '/api/editor': sidebar.editorApi,
      '/api/form': sidebar.formApi,
      '/api/form-config': sidebar.formConfig,
    },
    smoothScroll: false,
    lastUpdated: false,
    contributors: false,

  },
  base: '/tmagic-editor/docs/',
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: {
            loading: () => {
              return {
                props: [],
                needRuntime: true,
              };
            },
          },
        },
      },
    },
    viteOptions: {
      resolve: {
        alias:[
          { find: /^@tmagic\/form/, replacement: path.join(__dirname, '../../../packages/form/src/index.ts') },
          { find: /^@tmagic\/utils/, replacement: path.join(__dirname, '../../../packages/utils/src/index.ts') },
          { find: /^lodash-es$/, replacement: 'lodash' },
        ]
      },
    },
  },
});

// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/workbench/Rabbit937.github.io/node_modules/.pnpm/@sugarat+theme@0.1.42_vitepress@1.0.0-rc.4_vue@3.3.4/node_modules/@sugarat/theme/node.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///D:/workbench/Rabbit937.github.io/node_modules/.pnpm/@sugarat+theme@0.1.42_vitepress@1.0.0-rc.4_vue@3.3.4/node_modules/@sugarat/theme/node.js";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 文章默认作者
  author: "hackrabbit",
  // 友链
  friend: [
    {
      nickname: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
      des: "\u4F60\u7684\u6307\u5C16\u7528\u4E8E\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF",
      avatar: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top"
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/"
    }
  ],
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: "pagefind"
  // popover: {
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'text',
  //       content:
  //         'QQ交流群：681489336 🎉🎉',
  //     },
  //     {
  //       type: 'text',
  //       content:
  //         '👇公众号👇---👇 微信 👇',
  //     },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210',
  //     },
  //     {
  //       type: 'text',
  //       content:
  //         '欢迎大家加群&私信交流',
  //     },
  //     {
  //       type: 'button',
  //       content: '博客',
  //       link: 'https://sugarat.top',
  //     },
  //   ],
  //   duration: 0,
  // },
});

// docs/.vitepress/config.mts
var config_default = defineConfig({
  // 继承博客主题配置
  extends: blogTheme,
  lang: "zh-cn",
  title: "hackrabbit",
  description: "\u4F7F\u7528\u7CA5\u91CC\u6709\u52FA\u7CD6\u7684\u535A\u5BA2\u4E3B\u9898\uFF0C\u57FA\u4E8E vitepress \u5B9E\u73B0",
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
      exclude: ["@sugarat/theme"]
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    footer: {
      message: "\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9",
      copyright: 'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>'
    },
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      // { text: '首页', link: '/' },
      // { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
    ],
    socialLinks: [
      // {
      //   icon: 'github',
      //   link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      // }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrYmVuY2hcXFxcUmFiYml0OTM3LmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtiZW5jaFxcXFxSYWJiaXQ5MzcuZ2l0aHViLmlvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3JrYmVuY2gvUmFiYml0OTM3LmdpdGh1Yi5pby9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnXHJcbmltcG9ydCB7IGJsb2dUaGVtZSB9IGZyb20gJy4vYmxvZy10aGVtZSdcclxuXHJcblxyXG4vLyBWaXRlcHJlc3MgXHU5RUQ4XHU4QkE0XHU5MTREXHU3RjZFXHJcbi8vIFx1OEJFNlx1ODlDMVx1NjU4N1x1Njg2M1x1RkYxQWh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBcdTdFRTdcdTYyN0ZcdTUzNUFcdTVCQTJcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcclxuICBleHRlbmRzOiBibG9nVGhlbWUsXHJcbiAgbGFuZzogJ3poLWNuJyxcclxuICB0aXRsZTogJ2hhY2tyYWJiaXQnLFxyXG4gIGRlc2NyaXB0aW9uOiAnXHU0RjdGXHU3NTI4XHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2XHU3Njg0XHU1MzVBXHU1QkEyXHU0RTNCXHU5ODk4XHVGRjBDXHU1N0ZBXHU0RThFIHZpdGVwcmVzcyBcdTVCOUVcdTczQjAnLFxyXG4gIHZpdGU6IHtcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICBpbmNsdWRlOiBbJ2VsZW1lbnQtcGx1cyddLFxyXG4gICAgICBleGNsdWRlOiBbJ0BzdWdhcmF0L3RoZW1lJ11cclxuICAgIH1cclxuICB9LFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdcdTgxRUFcdTVCOUFcdTRFNDlcdTVFOTVcdTkwRThcdTUxODVcdTVCQjknLFxyXG4gICAgICBjb3B5cmlnaHQ6XHJcbiAgICAgICAgJ01JVCBMaWNlbnNlZCB8IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3RoZW1lLnN1Z2FyYXQudG9wL1wiPiBAc3VnYXJhdC90aGVtZSA8L2E+J1xyXG4gICAgfSxcclxuICAgIGxvZ286ICcvbG9nby5wbmcnLFxyXG4gICAgLy8gZWRpdExpbms6IHtcclxuICAgIC8vICAgcGF0dGVybjpcclxuICAgIC8vICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FUUVEvc3VnYXItYmxvZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9ncHJlc3MvOnBhdGgnLFxyXG4gICAgLy8gICB0ZXh0OiAnXHU1M0JCIEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTUxODVcdTVCQjknXHJcbiAgICAvLyB9LFxyXG4gICAgbmF2OiBbXHJcbiAgICAgIC8vIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxyXG4gICAgICAvLyB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTRGNUNcdTgwMDUnLCBsaW5rOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcC9hYm91dG1lLmh0bWwnIH1cclxuICAgIF0sXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgaWNvbjogJ2dpdGh1YicsXHJcbiAgICAgIC8vICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BVFFRL3N1Z2FyLWJsb2cvdHJlZS9tYXN0ZXIvcGFja2FnZXMvdGhlbWUnXHJcbiAgICAgIC8vIH1cclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd29ya2JlbmNoXFxcXFJhYmJpdDkzNy5naXRodWIuaW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3JrYmVuY2hcXFxcUmFiYml0OTM3LmdpdGh1Yi5pb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya2JlbmNoL1JhYmJpdDkzNy5naXRodWIuaW8vZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHNcIjsvLyBcdTRFM0JcdTk4OThcdTcyRUNcdTY3MDlcdTkxNERcdTdGNkVcclxuaW1wb3J0IHsgZ2V0VGhlbWVDb25maWcgfSBmcm9tICdAc3VnYXJhdC90aGVtZS9ub2RlJztcclxuXHJcbi8vIFx1NUYwMFx1NTQyRlJTU1x1NjUyRlx1NjMwMVxyXG4vLyBpbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUnXHJcblxyXG4vLyBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vc3VnYXJhdC50b3AnXHJcbi8vIGNvbnN0IFJTUzogVGhlbWUuUlNTT3B0aW9ucyA9IHtcclxuLy8gICB0aXRsZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXHJcbi8vICAgYmFzZVVybCxcclxuLy8gICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcclxuLy8gICBkZXNjcmlwdGlvbjogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcdUZGMDhcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcdUZGMDknLFxyXG4vLyAgIGxhbmd1YWdlOiAnemgtY24nLFxyXG4vLyAgIGltYWdlOiAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcclxuLy8gICBmYXZpY29uOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcC9mYXZpY29uLmljbycsXHJcbi8vIH1cclxuLy8gXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzOiBodHRwczovL3RoZW1lLnN1Z2FyYXQudG9wL1xyXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XHJcbiAgLy8gXHU1RjAwXHU1NDJGUlNTXHU2NTJGXHU2MzAxXHJcbiAgLy8gUlNTLFxyXG4gIC8vIFx1NjU4N1x1N0FFMFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVxyXG4gIGF1dGhvcjogJ2hhY2tyYWJiaXQnLFxyXG4gIC8vIFx1NTNDQlx1OTRGRVxyXG4gIGZyaWVuZDogW1xyXG4gICAge1xyXG4gICAgICBuaWNrbmFtZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXHJcbiAgICAgIGRlczogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNlx1NzUyOFx1NEU4RVx1NjUzOVx1NTNEOFx1NEUxNlx1NzU0Q1x1NzY4NFx1NTI5Qlx1OTFDRicsXHJcbiAgICAgIGF2YXRhcjpcclxuICAgICAgICAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuaWNrbmFtZTogJ1ZpdGVwcmVzcycsXHJcbiAgICAgIGRlczogJ1ZpdGUgJiBWdWUgUG93ZXJlZCBTdGF0aWMgU2l0ZSBHZW5lcmF0b3InLFxyXG4gICAgICBhdmF0YXI6XHJcbiAgICAgICAgJ2h0dHBzOi8vdml0ZXByZXNzLmRldi92aXRlcHJlc3MtbG9nby1sYXJnZS53ZWJwJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly92aXRlcHJlc3MuZGV2LycsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gXHU1RjAwXHU1NDJGXHU3OUJCXHU3RUJGXHU3Njg0XHU1MTY4XHU2NTg3XHU2NDFDXHU3RDIyXHU2NTJGXHU2MzAxXHVGRjA4XHU1OTgyXHU2Nzg0XHU1RUZBXHU2MkE1XHU5NTE5XHU1M0VGXHU2Q0U4XHU5MUNBXHU0RTBCXHU5NzYyXHU3Njg0XHU5MTREXHU3RjZFXHU1MThEXHU2QjIxXHU1QzFEXHU4QkQ1XHVGRjA5XHJcbiAgc2VhcmNoOiAncGFnZWZpbmQnLFxyXG4gIC8vIHBvcG92ZXI6IHtcclxuICAvLyAgIHRpdGxlOiAnXHU1MTZDXHU1NDRBJyxcclxuICAvLyAgIGJvZHk6IFtcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAvLyAgICAgICBjb250ZW50OlxyXG4gIC8vICAgICAgICAgJ1FRXHU0RUE0XHU2RDQxXHU3RkE0XHVGRjFBNjgxNDg5MzM2IFx1RDgzQ1x1REY4OVx1RDgzQ1x1REY4OScsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgLy8gICAgICAgY29udGVudDpcclxuICAvLyAgICAgICAgICdcdUQ4M0RcdURDNDdcdTUxNkNcdTRGMTdcdTUzRjdcdUQ4M0RcdURDNDctLS1cdUQ4M0RcdURDNDcgXHU1RkFFXHU0RkUxIFx1RDgzRFx1REM0NycsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gIC8vICAgICAgIHNyYzogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFl4TlRBeE9EYzJOVEl4TUE9PTYxNTAxODc2NTIxMCcsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgLy8gICAgICAgY29udGVudDpcclxuICAvLyAgICAgICAgICdcdTZCMjJcdThGQ0VcdTU5MjdcdTVCQjZcdTUyQTBcdTdGQTQmXHU3OUMxXHU0RkUxXHU0RUE0XHU2RDQxJyxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gIC8vICAgICAgIGNvbnRlbnQ6ICdcdTUzNUFcdTVCQTInLFxyXG4gIC8vICAgICAgIGxpbms6ICdodHRwczovL3N1Z2FyYXQudG9wJyxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIF0sXHJcbiAgLy8gICBkdXJhdGlvbjogMCxcclxuICAvLyB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGJsb2dUaGVtZSB9O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9VLFNBQVMsb0JBQW9COzs7QUNDalcsU0FBUyxzQkFBc0I7QUFnQi9CLElBQU0sWUFBWSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJL0IsUUFBUTtBQUFBO0FBQUEsRUFFUixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsUUFDRTtBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxRQUNFO0FBQUEsTUFDRixLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStCVixDQUFDOzs7QURqRUQsSUFBTyxpQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixTQUFTO0FBQUEsRUFDVCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsSUFDSixjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsY0FBYztBQUFBLE1BQ3hCLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxJQUNYLGlCQUFpQjtBQUFBLElBQ2pCLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQ0U7QUFBQSxJQUNKO0FBQUEsSUFDQSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTU4sS0FBSztBQUFBO0FBQUE7QUFBQSxJQUdMO0FBQUEsSUFDQSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtiO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

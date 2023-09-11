import{_ as e,o as i,c as a,S as t}from"./chunks/framework.f62eb0f6.js";const _=JSON.parse('{"title":"gzip压缩实践","description":"使用gzip压缩vue项目打包之后的产物，提升性能","frontmatter":{"description":"使用gzip压缩vue项目打包之后的产物，提升性能","tag":["VUE"]},"headers":[],"relativePath":"bigWeb/vue/vue-gzip.md","filePath":"bigWeb/vue/vue-gzip.md","lastUpdated":1694155045000}'),l={name:"bigWeb/vue/vue-gzip.md"},o=t('<h1 id="gzip压缩实践" tabindex="-1">gzip压缩实践 <a class="header-anchor" href="#gzip压缩实践" aria-label="Permalink to &quot;gzip压缩实践&quot;">​</a></h1><h2 id="实验目的-使用gzip压缩vue项目打包之后的产物-提升性能" tabindex="-1">实验目的：使用gzip压缩vue项目打包之后的产物，提升性能 <a class="header-anchor" href="#实验目的-使用gzip压缩vue项目打包之后的产物-提升性能" aria-label="Permalink to &quot;实验目的：使用gzip压缩vue项目打包之后的产物，提升性能&quot;">​</a></h2><h2 id="实验环境" tabindex="-1">实验环境 <a class="header-anchor" href="#实验环境" aria-label="Permalink to &quot;实验环境&quot;">​</a></h2><ul><li>OS 名称: Microsoft Windows 10 专业版</li><li>OS 版本: 10.0.19044 暂缺 Build 19044</li><li>具体环境：wsl2 ubuntu20.04</li><li>开发环境：vite4.0 + vue3.2.45 + vite-plugin-compression0.5.1</li></ul><h2 id="步骤1" tabindex="-1">步骤1 <a class="header-anchor" href="#步骤1" aria-label="Permalink to &quot;步骤1&quot;">​</a></h2><ul><li><code>pnpm create vite</code>初始化项目</li><li><code>pnpm add vite-plugin-compression</code>安装压缩插件 <ul><li><a href="https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md" target="_blank" rel="noreferrer">github文档</a></li></ul></li><li><code>pnpm run build</code>打包</li></ul><h2 id="步骤2" tabindex="-1">步骤2 <a class="header-anchor" href="#步骤2" aria-label="Permalink to &quot;步骤2&quot;">​</a></h2><ul><li>需要开启nginx的gzip压缩,在/etc/nginx/nginx.conf修改启用gzip即可。</li></ul>',8),r=[o];function n(u,c,s,d,p,h){return i(),a("div",null,r)}const b=e(l,[["render",n]]);export{_ as __pageData,b as default};

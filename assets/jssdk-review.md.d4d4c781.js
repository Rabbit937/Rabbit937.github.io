import{_ as e,o as s,c as i,O as t}from"./chunks/framework.ba4d1f39.js";const a="/jssdk-review/copy.png",m=JSON.parse('{"title":"jssdk项目复盘","description":"产出了屎山项目的总结，是为了以后的项目不是屎。","frontmatter":{"sticky":30,"description":"产出了屎山项目的总结，是为了以后的项目不是屎。"},"headers":[],"relativePath":"jssdk-review.md","filePath":"jssdk-review.md","lastUpdated":null}'),o={name:"jssdk-review.md"},l=t('<h1 id="jssdk项目复盘" tabindex="-1">jssdk项目复盘 <a class="header-anchor" href="#jssdk项目复盘" aria-label="Permalink to &quot;jssdk项目复盘&quot;">​</a></h1><p><strong>作为第一个完全由本人一个人独立开发的项目，来复盘一下前期规划没有，走一步看一步的痛点。</strong></p><h2 id="项目环境内容" tabindex="-1">项目环境内容 <a class="header-anchor" href="#项目环境内容" aria-label="Permalink to &quot;项目环境内容&quot;">​</a></h2><ol><li>系统：win11</li><li>开发环境：node@16.15.0 + vue@3.2.25 + vite@2.9.9 + vant@3.5.2</li><li>项目需求：手游sdk，支持横竖屏</li></ol><h2 id="几个特殊的项目点" tabindex="-1">几个特殊的项目点 <a class="header-anchor" href="#几个特殊的项目点" aria-label="Permalink to &quot;几个特殊的项目点&quot;">​</a></h2><ol><li>借用 <strong>@fingerprintjs/fingerprintjs</strong> 指纹库，生成浏览器指纹，用作设备唯一id(及duid)。默认储存在 localStorage 里面。你要问这样怎么样唯一的话？其实这个只是假的唯一，在浏览器中使用时，清楚 localStorage 缓存，就会重新生成。不过我们的使用场景一般都是在Android或者IOS的webview里面使用。需要在页面渲染之前生成。</li><li>对于横竖屏的处理，使用的是 <strong>postcss-px-to-viewport</strong> 插件。挺好用的一个插件，可以把px转化成vw。千万别用他的自动横竖屏转换。</li><li>由于要和游戏研发通信，需要频繁的使用iframe的postMessage传消息给cp，还需要监听<strong>message</strong>事件，收到cp的通信。</li></ol><h2 id="几个快要了我老命的问题" tabindex="-1">几个快要了我老命的问题 <a class="header-anchor" href="#几个快要了我老命的问题" aria-label="Permalink to &quot;几个快要了我老命的问题&quot;">​</a></h2><ol><li>使用vite2点几版本的时候，突然没办法在使用<code>pnpm dev --host</code>的情况下，用ip加端口的方式在局域网访问。 然后就需要使用这个插件 <strong>@vitejs/plugin-basic-ssl</strong>来解决不受信任的证书的问题。vite3已不需要使用。</li><li>复制问题，本来我使用的是<strong>clipboard</strong>插件，正常情况下dom渲染之后，绑定选择器，然后可以正常复制。但是这种方式实在是不灵活。后来我是更换 <strong>@vueuse/core</strong>中的复制方法，直呼好用，直呼牛逼，不用提前绑点选择器，可以纯函数的使用调用。我觉得直接起飞了。然后被运营打回了，在雷神模拟器下，复制不成功。然后疯狂百度，到了一个原生js的方式。然后成功的解决了我的问题，js才是最牛逼的，贴下代码。 <img src="'+a+'" alt="原生js复制"></li></ol><h2 id="开始上饭-可能不是饭是屎" tabindex="-1">开始上饭(可能不是饭是屎) <a class="header-anchor" href="#开始上饭-可能不是饭是屎" aria-label="Permalink to &quot;开始上饭(可能不是饭是屎)&quot;">​</a></h2><ol><li>调用接口部分封装，部分图省事没有封装。</li><li>滥用状态，基本上一个组件一个状态。</li><li>代码重复度高，没有合理的封装。</li><li>样式的冗余与重复非常高(小声bb：css太难了)</li><li>规划问题，根组件横竖屏通过切换组件实现，导致游戏闪退，黑屏。(这一点，我当时脑子真实瓦特了)</li><li>使用vue3在setup的情况下，使用对象存取状态，导致状态丢失。(setup内部参数只会执行一次，在我第二次调用的时候还是使用上一次的初始状态。)</li><li>ts的状态支持不全(妈的，不会用ts，不如直接js)</li><li>git提交没有规范，老是随便写1(你他妈自己知道更新了什么吗？)</li></ol>',10),r=[l];function n(d,c,p,h,_,g){return s(),i("div",null,r)}const k=e(o,[["render",n]]);export{m as __pageData,k as default};

import{_ as c,r as e,o as l,c as i,a as n,b as a,w as p,F as u,e as o,d as s}from"./app.95ec7736.js";const k={},d=o(`<h1 id="link-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#link-\u94FE\u63A5" aria-hidden="true">#</a> Link \u94FE\u63A5</h1><p>\u7528\u4E8E\u663E\u793A\uFF0C\u4E0D\u53EF\u7F16\u8F91</p><h2 id="ts-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#ts-\u5B9A\u4E49" aria-hidden="true">#</a> TS \u5B9A\u4E49</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Link</span> <span class="token keyword">extends</span> <span class="token class-name">FormItem</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;link&#39;</span><span class="token punctuation">;</span>
  href<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">typeof</span> LinkHrefFunction<span class="token punctuation">;</span>
  css<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  disabledCss<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  formTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  formWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  displayText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">typeof</span> LinkDisplayTextFunction<span class="token punctuation">;</span>
  form<span class="token operator">:</span> FormConfig <span class="token operator">|</span> <span class="token keyword">typeof</span> LinkFormFunction<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4),b=s("\u70B9\u51FB\u67E5\u770B"),h={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts",target:"_blank",rel:"noopener noreferrer"},m=s("FormItem"),_=s("\u7684\u5B9A\u4E49"),f=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),s(" \u57FA\u7840\u7528\u6CD5")],-1),g=n("p",null," \u5728\u5F00\u542F\u591A\u9009\u6A21\u5F0F\u540E\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5C55\u793A\u6240\u6709\u5DF2\u9009\u4E2D\u7684\u9009\u9879\u7684Tag ",-1),x=n("h2",{id:"\u6253\u5F00\u8868\u5355",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6253\u5F00\u8868\u5355","aria-hidden":"true"},"#"),s(" \u6253\u5F00\u8868\u5355")],-1),y=n("p",null," \u5728\u5F00\u542F\u591A\u9009\u6A21\u5F0F\u540E\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5C55\u793A\u6240\u6709\u5DF2\u9009\u4E2D\u7684\u9009\u9879\u7684Tag ",-1),F=o('<h2 id="input-attributes" tabindex="-1"><a class="header-anchor" href="#input-attributes" aria-hidden="true">#</a> Input Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>text</td><td>\u8868\u5355\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table>',2);function T(w,L){const r=e("ExternalLinkIcon"),t=e("demo-block");return l(),i(u,null,[d,n("p",null,[b,n("a",h,[m,a(r)]),_]),f,a(t,{type:"form",config:[{type:"link",name:"link",text:"\u94FE\u63A5",href:"https://tencent.github.io/tmagic-editor/playground/index.html#/"}]},{source:p(()=>[g]),_:1},8,["config"]),x,a(t,{type:"form",config:[{type:"link",name:"link",text:"\u94FE\u63A5",form:[{name:"text",text:"input"}]}]},{source:p(()=>[y]),_:1}),F],64)}var I=c(k,[["render",T]]);export{I as default};

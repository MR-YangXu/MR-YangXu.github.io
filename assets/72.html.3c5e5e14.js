import{_ as o,r as c,o as u,c as p,b as n,d as s,e as t,a as i}from"./app.6d6c724e.js";const d={},r={class:"custom-container tip"},l={href:"https://github.com/kangyana/daily-question/issues/72",target:"_blank",rel:"noopener noreferrer"},f={class:"custom-container tip"},k={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function h(m,e){const a=c("ExternalLinkIcon");return u(),p("div",null,[e[6]||(e[6]=n("h1",{id:"\u3010q072\u3011useeffect-\u548C-uselayouteffect-\u7684\u533A\u522B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q072\u3011useeffect-\u548C-uselayouteffect-\u7684\u533A\u522B","aria-hidden":"true"},"#"),s(" \u3010Q072\u3011useEffect \u548C useLayoutEffect \u7684\u533A\u522B")],-1)),n("div",r,[e[2]||(e[2]=n("p",{class:"custom-container-title"},"Issue",-1)),n("p",null,[e[1]||(e[1]=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),n("a",l,[e[0]||(e[0]=s("Issue 72")),t(a)])])]),n("div",f,[e[5]||(e[5]=n("p",{class:"custom-container-title"},"Author",-1)),n("p",null,[e[4]||(e[4]=s("\u56DE\u7B54\u8005: ")),n("a",k,[e[3]||(e[3]=s("kangyana")),t(a)])])]),e[7]||(e[7]=i(`<h2 id="_1-useeffect" tabindex="-1"><a class="header-anchor" href="#_1-useeffect" aria-hidden="true">#</a> 1. useEffect</h2><p><code>useEffect</code> \u6267\u884C\u4E00\u4E2A\u526F\u4F5C\u7528\u3002 \u5F53\u6211\u4EEC\u5728 <code>useEffect</code> \u4E2D\u6267\u884C\u4E86\u67D0\u4E2A\u65B9\u6CD5\u540E\uFF0C\u7EC4\u4EF6\u5378\u8F7D\u7684\u65F6\u5019\uFF0C \u9700\u8981\u5728 <code>useEffect</code> \u4E2D\u8BBE\u7F6E\u4E00\u4E2A\u6E05\u9664\u51FD\u6570\u5C06\u524D\u9762\u4F7F\u7528\u7684\u65B9\u6CD5\u6216\u8005\u503C\u6E05\u9664\u6389\uFF0C\u8FD9\u6837\u53EF\u4EE5\u9632\u6B62\u5185\u5B58\u7684\u6CC4\u6F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subscription <span class="token operator">=</span> props<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        subscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u4E0D\u4F20\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u6216\u8005\u6570\u7EC4\u4E2D\u4F20\u503C\u3002 \u5982\u679C\u4E0D\u4F20\u4EFB\u4F55\u503C\uFF0C\u5F53\u4EFB\u610F\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF1B \u5982\u679C\u4F20\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u5219\u76F4\u63A5\u5F53\u7EC4\u4EF6DOM\u7B2C\u4E00\u6B21\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u624D\u6267\u884C\u4E00\u6B21\uFF0C\u540E\u7EED\u4E0D\u7BA1\u4EFB\u4F55\u72B6\u6001\u53D1\u751F\u6539\u53D8\u90FD\u4E0D\u4F1A\u518D\u6267\u884C\uFF1B \u5982\u679C\u6570\u7EC4\u4E2D\u4F20\u5165\u76F8\u5E94\u7684\u503C\uFF0C\u5219\u4F1A\u7B80\u5355\u5F53\u524D\u503C\u662F\u5426\u53D1\u751F\u6539\u53D8\uFF0C\u4E00\u65E6\u7B80\u5355\u7684\u503C\u53D1\u751F\u7F16\u5199\uFF0C\u7EC4\u4EF6\u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002</p><h2 id="_2-uselayouteffect" tabindex="-1"><a class="header-anchor" href="#_2-uselayouteffect" aria-hidden="true">#</a> 2. useLayoutEffect</h2><p><code>useLayoutEffect</code> \u548C <code>useEffect</code> \u5185\u90E8\u7684\u5B9E\u73B0\u662F\u4E00\u6837\u7684\u3002</p><h3 id="\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u70B9" aria-hidden="true">#</a> \u4E0D\u540C\u70B9</h3><ul><li><code>useLayoutEffect</code> \u5148\u8C03\u7528 <code>mountLayoutEffect</code>\uFF0C\u518D\u8C03\u7528 <code>mountEffectImpl</code>\u3002</li><li><code>useEffect</code> \u5148\u8C03\u7528 <code>mountEffect</code>\uFF0C\u518D\u8C03\u7528 <code>mountEffectImpl</code>\u3002</li></ul><p><code>mountLayoutEffect</code> \u4E0E <code>mountEffect</code> \u53C8\u6709\u4EC0\u4E48\u4E0D\u540C\u5462\uFF1F \u552F\u4E00\u7684\u4E0D\u540C\u70B9\u4E5F\u53EA\u662F\u89E6\u53D1\u7684\u65F6\u673A\u4E0D\u540C\u3002</p><p><code>useEffect</code> \u662F\u5F02\u6B65\u5904\u7406\u526F\u4F5C\u7528\uFF0C\u800C <code>useLayoutEffect</code> \u662F\u540C\u6B65\u5904\u7406\u526F\u4F5C\u7528\u3002</p><h3 id="uselayouteffect-\u5E38\u7528\u4E8E\u5904\u7406dom-\u907F\u514D\u95EA\u5C4F" tabindex="-1"><a class="header-anchor" href="#uselayouteffect-\u5E38\u7528\u4E8E\u5904\u7406dom-\u907F\u514D\u95EA\u5C4F" aria-hidden="true">#</a> useLayoutEffect \u5E38\u7528\u4E8E\u5904\u7406dom\uFF0C\u907F\u514D\u95EA\u5C4F</h3><h2 id="_3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a> 3. \u603B\u7ED3</h2><p><code>useEffect</code> \u548C <code>useLayoutEffect</code> \u7684\u4F7F\u7528\u65B9\u6CD5\u4E00\u81F4\u3002 \u552F\u4E00\u7684\u4E0D\u540C\u70B9\u662F\u6267\u884C\u65F6\u673A\uFF0C\u5EFA\u8BAE\u662F\u5728\u5927\u90E8\u5206\u573A\u666F\u4E0B\u4F7F\u7528 <code>useEffect</code>\u6765\u5B8C\u6210\u526F\u4F5C\u7528\u7684\u6267\u884C\u3002 <code>useLayoutEffect</code> \u4F1A\u963B\u585E\u6E32\u67D3\uFF0C\u6240\u4EE5\u53EA\u5728 <code>useEffect</code> \u65E0\u6CD5\u89E3\u51B3\u65F6\u518D\u7528 <code>useLayoutEffect</code>\uFF0C\u8FD9\u6837\u907F\u514D\u4E86\u6027\u80FD\u95EE\u9898\u3002</p>`,13))])}const b=o(d,[["render",h],["__file","72.html.vue"]]);export{b as default};

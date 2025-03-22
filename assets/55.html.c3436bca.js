import{_ as o,r as i,o as p,c as r,b as a,d as s,e as t,a as c}from"./app.6d6c724e.js";const l={},d={class:"custom-container tip"},u={href:"https://github.com/kangyana/daily-question/issues/55",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},b={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function m(h,n){const e=i("ExternalLinkIcon");return p(),r("div",null,[n[6]||(n[6]=a("h1",{id:"\u3010q055\u3011fiber",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u3010q055\u3011fiber","aria-hidden":"true"},"#"),s(" \u3010Q055\u3011Fiber")],-1)),a("div",d,[n[2]||(n[2]=a("p",{class:"custom-container-title"},"Issue",-1)),a("p",null,[n[1]||(n[1]=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),a("a",u,[n[0]||(n[0]=s("Issue 55")),t(e)])])]),a("div",k,[n[5]||(n[5]=a("p",{class:"custom-container-title"},"Author",-1)),a("p",null,[n[4]||(n[4]=s("\u56DE\u7B54\u8005: ")),a("a",b,[n[3]||(n[3]=s("kangyana")),t(e)])])]),n[7]||(n[7]=c(`<h2 id="_1-\u4E3A\u4EC0\u4E48\u9700\u8981fiber" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u9700\u8981fiber" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u9700\u8981Fiber</h2><p>\u5728\u6570\u636E\u66F4\u65B0\u65F6\uFF0Creact\u751F\u6210\u4E86\u4E00\u68F5\u66F4\u5927\u7684\u865A\u62DFdom\u6811\uFF0C\u7ED9diff\u5E26\u6765\u4E86\u5F88\u5927\u538B\u529B\u2014\u2014\u6211\u4EEC\u60F3\u627E\u5230\u771F\u6B63\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u8FD9\u9700\u8981\u82B1\u8D39\u66F4\u957F\u7684\u65F6\u95F4\u3002 js\u5360\u636E\u4E3B\u7EBF\u7A0B\u53BB\u505A\u6BD4\u8F83\uFF0C\u6E32\u67D3\u7EBF\u7A0B\u4FBF\u65E0\u6CD5\u505A\u5176\u4ED6\u5DE5\u4F5C\uFF0C\u7528\u6237\u7684\u4EA4\u4E92\u5F97\u4E0D\u5230\u54CD\u5E94\uFF0C\u6240\u4EE5\u4FBF\u51FA\u73B0\u4E86 <code>Fiber</code>\u3002</p><h3 id="fiber-\u662F-react-16-\u4E2D\u65B0\u7684\u534F\u8C03\u5F15\u64CE\u3002\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4F7F-virtual-dom-\u53EF\u4EE5\u8FDB\u884C\u589E\u91CF\u5F0F\u6E32\u67D3\u3002" tabindex="-1"><a class="header-anchor" href="#fiber-\u662F-react-16-\u4E2D\u65B0\u7684\u534F\u8C03\u5F15\u64CE\u3002\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4F7F-virtual-dom-\u53EF\u4EE5\u8FDB\u884C\u589E\u91CF\u5F0F\u6E32\u67D3\u3002" aria-hidden="true">#</a> Fiber \u662F React 16 \u4E2D\u65B0\u7684\u534F\u8C03\u5F15\u64CE\u3002\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4F7F Virtual DOM \u53EF\u4EE5\u8FDB\u884C\u589E\u91CF\u5F0F\u6E32\u67D3\u3002</h3><p><code>Fiber</code> \u6CA1\u6CD5\u8BA9\u6BD4\u8F83\u7684\u65F6\u95F4\u7F29\u77ED\uFF0C\u4F46\u5B83\u4F7F\u5F97diff\u7684\u8FC7\u7A0B <strong>\u5206\u5272</strong> \u6210\u5C0F\u6BB5\uFF0C\u56E0\u4E3A\u5B83\u6709\u4E86\u201C\u4FDD\u5B58\u5DE5\u4F5C\u8FDB\u5EA6\u201D\u7684\u80FD\u529B\u3002 js\u4F1A\u6BD4\u8F83\u4E00\u90E8\u5206\u865A\u62DFdom\uFF0C\u7136\u540E\u8BA9\u6E21\u4E3B\u7EBF\u7A0B\uFF0C\u7ED9\u6D4F\u89C8\u5668\u53BB\u505A\u5176\u4ED6\u5DE5\u4F5C\uFF0C\u7136\u540E\u7EE7\u7EED\u6BD4\u8F83\uFF0C\u4F9D\u6B21\u5F80\u590D\uFF0C\u7B49\u5230\u6700\u540E\u6BD4\u8F83\u5B8C\u6210\uFF0C\u4E00\u6B21\u6027\u66F4\u65B0\u5230\u89C6\u56FE\u4E0A\u3002</p><h2 id="_2-fiber-\u662F\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-fiber-\u662F\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 2. Fiber \u662F\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7ED3\u6784</h2><p>\u6A21\u62DF\u6808\u7684\u94FE\u8868</p><h2 id="_3-fiber-\u662F\u7EA4\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-fiber-\u662F\u7EA4\u7A0B" aria-hidden="true">#</a> 3. Fiber \u662F\u7EA4\u7A0B</h2><p>\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u4E4B\u6240\u4EE5\u88AB\u53EB\u505A <code>Fiber</code>\uFF0C\u7FFB\u8BD1\u8FC7\u6765\u662F\u7EA4\u7A0B\uFF0C\u5B83\u88AB\u8BA4\u4E3A\u662F\u534F\u7A0B\u7684\u4E00\u79CD\u5B9E\u73B0\u5F62\u5F0F\u3002 \u534F\u7A0B\u662F\u6BD4\u7EBF\u7A0B\u66F4\u5C0F\u7684\u8C03\u5EA6\u5355\u4F4D\uFF1A\u5B83\u7684\u5F00\u542F\u3001\u6682\u505C\u53EF\u4EE5\u88AB\u7A0B\u5E8F\u5458\u6240\u63A7\u5236\u3002 \u5177\u4F53\u6765\u8BF4\uFF0C<code>Fiber</code> \u662F\u901A\u8FC7 <code>requestIdleCallback</code> \u53BB\u63A7\u5236\u7684\u7EC4\u4EF6\u6E32\u67D3\u7684\u201C\u8FDB\u5EA6\u6761\u201D\u3002</p><p><code>requesetIdleCallback</code> \u662F\u4E00\u4E2A\u5C5E\u4E8E\u5B8F\u4EFB\u52A1\u7684\u56DE\u8C03\uFF0C\u5C31\u50CF <code>setTimeout</code> \u4E00\u6837\u3002 \u4E0D\u540C\u7684\u662F\uFF0C<code>setTimeout</code> \u7684\u6267\u884C\u65F6\u673A\u7531\u6211\u4EEC\u4F20\u5165\u7684\u56DE\u8C03\u65F6\u95F4\u53BB\u63A7\u5236\uFF0C<code>requesetIdleCallback</code> \u662F\u53D7\u5C4F\u5E55\u7684\u5237\u65B0\u7387\u53BB\u63A7\u5236\uFF0C\u6BCF\u4E2A16s\u8C03\u7528\u4E00\u6B21\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">workLoop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">deadLine</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> shouldYield <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// \u662F\u5426\u8BE5\u8BA9\u51FA\u7EBF\u7A0B</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>shouldYield<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;working&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u904D\u5386\u8282\u70B9\u7B49\u5DE5\u4F5C</span>
        shouldYield <span class="token operator">=</span> deadLine<span class="token punctuation">.</span><span class="token function">timeRemaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>workLoop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>workLoop<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h3><p><code>Fiber</code> \u662FReact 16\u63D0\u51FA\u7684\u4E00\u79CD\u66F4\u65B0\u673A\u5236\uFF0C\u4F7F\u7528\u94FE\u8868\u53D6\u4EE3\u4E86\u6811\uFF0C\u5C06\u865A\u62DFdom\u8FDE\u63A5\uFF0C\u4F7F\u5F97\u7EC4\u4EF6\u66F4\u65B0\u7684\u6D41\u7A0B\u53EF\u4EE5\u88AB\u4E2D\u65AD\u6062\u590D\uFF1B \u5B83\u628A\u7EC4\u4EF6\u6E32\u67D3\u7684\u5DE5\u4F5C\u5206\u7247\uFF0C\u5230\u65F6\u4F1A\u4E3B\u52A8\u8BA9\u51FA\u6E32\u67D3\u4E3B\u7EBF\u7A0B\u3002</p>`,12))])}const v=o(l,[["render",m],["__file","55.html.vue"]]);export{v as default};

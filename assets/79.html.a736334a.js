import{_ as p,r as c,o as r,c as i,b as s,d as a,e as t,a as o}from"./app.6d6c724e.js";const l={},d={class:"custom-container tip"},u={href:"https://github.com/kangyana/daily-question/issues/79",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},v={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"},b={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},h={class:"custom-container tip"},g={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function y(f,n){const e=c("ExternalLinkIcon");return r(),i("div",null,[n[12]||(n[12]=s("h1",{id:"\u3010q079\u3011componentdidcatch",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u3010q079\u3011componentdidcatch","aria-hidden":"true"},"#"),a(" \u3010Q079\u3011componentDidCatch")],-1)),s("div",d,[n[2]||(n[2]=s("p",{class:"custom-container-title"},"Issue",-1)),s("p",null,[n[1]||(n[1]=a("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),s("a",u,[n[0]||(n[0]=a("Issue 79")),t(e)])])]),s("div",k,[n[5]||(n[5]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[4]||(n[4]=a("\u56DE\u7B54\u8005: ")),s("a",v,[n[3]||(n[3]=a("kangyana")),t(e)])])]),n[13]||(n[13]=o('<h2 id="_1-errorboundary" tabindex="-1"><a class="header-anchor" href="#_1-errorboundary" aria-hidden="true">#</a> 1. ErrorBoundary</h2><p><code>ErrorBoundary</code>\uFF08\u9519\u8BEF\u8FB9\u754C\uFF09\u662F React \u7EC4\u4EF6\uFF0C\u5B83\u4F1A\u5728\u5176\u5B50\u7EC4\u4EF6\u6811\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6355\u83B7 JavaScript \u9519\u8BEF\uFF0C \u5E76\u8BB0\u5F55\u8FD9\u4E9B\u9519\u8BEF\uFF0C\u5C55\u793A\u964D\u7EA7 UI \u800C\u4E0D\u662F\u5D29\u6E83\u7684\u7EC4\u4EF6\u6811\u3002 <code>Error boundaries</code> \u7EC4\u4EF6\u4F1A\u6355\u83B7\u5728\u6E32\u67D3\u671F\u95F4\uFF0C\u5728\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4EE5\u53CA\u5176\u6574\u4E2A\u6811\u7684\u6784\u9020\u51FD\u6570\u4E2D\u53D1\u751F\u7684\u9519\u8BEF\u3002</p><p>\u5982\u679C <code>class</code> \u7EC4\u4EF6\u5B9A\u4E49\u4E86\u751F\u547D\u5468\u671F\u65B9\u6CD5 <code>static getDerivedStateFromError()</code> \u6216 <code>componentDidCatch()</code> \u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\uFF08\u6216\u4E24\u8005\uFF09\uFF0C \u5B83\u5C31\u6210\u4E3A\u4E86 <code>Error boundaries</code>\u3002 \u901A\u8FC7\u751F\u547D\u5468\u671F\u66F4\u65B0 <code>state</code> \u53EF\u8BA9\u7EC4\u4EF6\u6355\u83B7\u6811\u4E2D\u672A\u5904\u7406\u7684 JavaScript \u9519\u8BEF\u5E76\u5C55\u793A\u964D\u7EA7 UI\u3002</p><p>\u4EC5\u4F7F\u7528 <code>Error boundaries</code> \u7EC4\u4EF6\u6765\u4ECE\u610F\u5916\u5F02\u5E38\u4E2D\u6062\u590D\u7684\u60C5\u51B5\uFF1B\u4E0D\u8981\u5C06\u5B83\u4EEC\u7528\u4E8E\u6D41\u7A0B\u63A7\u5236\u3002</p>',4)),s("div",m,[n[8]||(n[8]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[7]||(n[7]=a("\u56DE\u7B54\u8005: ")),s("a",b,[n[6]||(n[6]=a("kangyana")),t(e)])])]),n[14]||(n[14]=o(`<h2 id="_2-static-getderivedstatefromerror" tabindex="-1"><a class="header-anchor" href="#_2-static-getderivedstatefromerror" aria-hidden="true">#</a> 2. static getDerivedStateFromError()</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u751F\u547D\u5468\u671F\u4F1A\u5728\u540E\u4EE3\u7EC4\u4EF6\u629B\u51FA\u9519\u8BEF\u540E\u88AB\u8C03\u7528\u3002 \u5B83\u5C06\u629B\u51FA\u7684\u9519\u8BEF\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u503C\u4EE5\u66F4\u65B0 <code>state</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u53EF\u4EE5\u663E\u964D\u7EA7 UI</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4F60\u53EF\u4EE5\u6E32\u67D3\u4EFB\u4F55\u81EA\u5B9A\u4E49\u7684\u964D\u7EA7  UI</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Something went wrong<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><p><code>getDerivedStateFromError()</code> \u4F1A\u5728\u6E32\u67D3\u9636\u6BB5\u8C03\u7528\uFF0C\u56E0\u6B64\u4E0D\u5141\u8BB8\u51FA\u73B0\u526F\u4F5C\u7528\u3002 \u5982\u9047\u6B64\u7C7B\u60C5\u51B5\uFF0C\u8BF7\u6539\u7528 <code>componentDidCatch()</code>\u3002</p>`,6)),s("div",h,[n[11]||(n[11]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[10]||(n[10]=a("\u56DE\u7B54\u8005: ")),s("a",g,[n[9]||(n[9]=a("kangyana")),t(e)])])]),n[15]||(n[15]=o(`<h2 id="_3-componentdidcatch" tabindex="-1"><a class="header-anchor" href="#_3-componentdidcatch" aria-hidden="true">#</a> 3. componentDidCatch</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u751F\u547D\u5468\u671F\u5728\u540E\u4EE3\u7EC4\u4EF6\u629B\u51FA\u9519\u8BEF\u540E\u88AB\u8C03\u7528\u3002 \u5B83\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li><code>error</code> \u2014\u2014 \u629B\u51FA\u7684\u9519\u8BEF\u3002</li><li><code>info</code> \u2014\u2014 \u5E26\u6709 <code>componentStack key</code> \u7684\u5BF9\u8C61\uFF0C\u5176\u4E2D\u5305\u542B <strong>\u6709\u5173\u7EC4\u4EF6\u5F15\u53D1\u9519\u8BEF\u7684\u6808\u4FE1\u606F</strong>\u3002</li></ul><p><code>componentDidCatch()</code> \u4F1A\u5728\u201C\u63D0\u4EA4\u201D\u9636\u6BB5\u88AB\u8C03\u7528\uFF0C\u56E0\u6B64\u5141\u8BB8\u6267\u884C\u526F\u4F5C\u7528\u3002 \u5B83\u5E94\u8BE5\u7528\u4E8E\u8BB0\u5F55\u9519\u8BEF\u4E4B\u7C7B\u7684\u60C5\u51B5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u53EF\u4EE5\u663E\u793A\u964D\u7EA7 UI</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;\u7EC4\u4EF6\u5806\u6808&quot; \u4F8B\u5B50:</span>
    <span class="token comment">//   in ComponentThatThrows (created by App)</span>
    <span class="token comment">//   in ErrorBoundary (created by App)</span>
    <span class="token comment">//   in div (created by App)</span>
    <span class="token comment">//   in App</span>
    <span class="token function">logComponentStackToMyService</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>componentStack<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4F60\u53EF\u4EE5\u6E32\u67D3\u4EFB\u4F55\u81EA\u5B9A\u4E49\u7684\u964D\u7EA7 UI</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Something went wrong<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React \u7684\u5F00\u53D1\u548C\u751F\u4EA7\u6784\u5EFA\u7248\u672C\u5728 <code>componentDidCatch()</code> \u7684\u65B9\u5F0F\u4E0A\u6709\u8F7B\u5FAE\u5DEE\u522B\u3002</p><p>\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0C\u9519\u8BEF\u4F1A\u5192\u6CE1\u81F3 <code>window</code>\uFF0C\u8FD9\u610F\u5473\u7740\u4EFB\u4F55 <code>window.onerror</code> \u6216 <code>window.addEventListener(&#39;error&#39;, callback)</code> \u4F1A\u4E2D\u65AD\u8FD9\u4E9B\u5DF2\u7ECF\u88AB <code>componentDidCatch()</code> \u6355\u83B7\u7684\u9519\u8BEF\u3002</p><p>\u76F8\u53CD\uFF0C\u5728\u751F\u4EA7\u6A21\u5F0F\u4E0B\uFF0C\u9519\u8BEF\u4E0D\u4F1A\u5192\u6CE1\uFF0C\u8FD9\u610F\u5473\u7740\u4EFB\u4F55\u6839\u9519\u8BEF\u5904\u7406\u5668\u53EA\u4F1A\u63A5\u53D7\u90A3\u4E9B\u6CA1\u6709\u663E\u5F0F\u5730\u88AB <code>componentDidCatch()</code> \u6355\u83B7\u7684\u9519\u8BEF\u3002</p><h3 id="\u6CE8\u610F-1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-1" aria-hidden="true">#</a> \u6CE8\u610F</h3><p>\u5982\u679C\u53D1\u751F\u9519\u8BEF\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 <code>setState</code> \u4F7F\u7528 <code>componentDidCatch()</code> \u6E32\u67D3\u964D\u7EA7 UI\uFF0C\u4F46\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u5C06\u4E0D\u63A8\u8350\u8FD9\u6837\u505A\u3002 \u53EF\u4EE5\u4F7F\u7528\u9759\u6001 <code>getDerivedStateFromError()</code> \u6765\u5904\u7406\u964D\u7EA7\u6E32\u67D3\u3002</p>`,11))])}const E=p(l,[["render",y],["__file","79.html.vue"]]);export{E as default};

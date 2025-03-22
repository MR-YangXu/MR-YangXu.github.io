import{_ as o,r as e,o as c,c as l,b as s,d as a,e as p,a as u}from"./app.6d6c724e.js";const i={},r={class:"custom-container tip"},k={href:"https://github.com/kangyana/daily-question/issues/50",target:"_blank",rel:"noopener noreferrer"},d={class:"custom-container tip"},b={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function m(v,n){const t=e("ExternalLinkIcon");return c(),l("div",null,[n[6]||(n[6]=s("h1",{id:"\u3010q050\u3011object-assign",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u3010q050\u3011object-assign","aria-hidden":"true"},"#"),a(" \u3010Q050\u3011Object.assign")],-1)),s("div",r,[n[2]||(n[2]=s("p",{class:"custom-container-title"},"Issue",-1)),s("p",null,[n[1]||(n[1]=a("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),s("a",k,[n[0]||(n[0]=a("Issue 50")),p(t)])])]),s("div",d,[n[5]||(n[5]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[4]||(n[4]=a("\u56DE\u7B54\u8005: ")),s("a",b,[n[3]||(n[3]=a("kangyana")),p(t)])])]),n[7]||(n[7]=u(`<h2 id="_1-object-assign" tabindex="-1"><a class="header-anchor" href="#_1-object-assign" aria-hidden="true">#</a> 1. Object.assign</h2><p><code>Object.assign()</code> \u65B9\u6CD5\u5C06\u6240\u6709\u53EF\u679A\u4E3E\u7684\u81EA\u6709\u5C5E\u6027\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u6E90\u5BF9\u8C61\u590D\u5236\u5230\u76EE\u6807\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u5BF9\u8C61\u3002 \u5982\u679C\u76EE\u6807\u5BF9\u8C61\u4E0E\u6E90\u5BF9\u8C61\u5177\u6709\u76F8\u540C\u7684 <strong>\u952E</strong>\uFF0C\u5219\u76EE\u6807\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u5C06\u88AB\u6E90\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u8986\u76D6\uFF0C\u540E\u9762\u7684\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u5C06\u7C7B\u4F3C\u5730\u8986\u76D6\u524D\u9762\u7684\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> returnedTarget <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: 4, c: 5 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>returnedTarget <span class="token operator">===</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u4E8E\u5408\u5E76\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u4E8E\u5408\u5E76\u5BF9\u8C61" aria-hidden="true">#</a> \u5E38\u7528\u4E8E\u5408\u5E76\u5BF9\u8C61</h3><h2 id="_2-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u7528\u6CD5" aria-hidden="true">#</a> 2. \u7528\u6CD5</h2><h3 id="\u5408\u5E76\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5BF9\u8C61" aria-hidden="true">#</a> \u5408\u5E76\u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">,</span> o3<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: 2, c: 3 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { a: 1, b: 2, c: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u590D\u5236\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u5BF9\u8C61" aria-hidden="true">#</a> \u590D\u5236\u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D</h3><p>\u9488\u5BF9 \u6DF1\u62F7\u8D1D\uFF0C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u529E\u6CD5\uFF0C\u56E0\u4E3A Object.assign() \u53EA\u590D\u5236\u5C5E\u6027\u503C\u3002 \u5047\u5982\u6E90\u5BF9\u8C61\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5B83\u4EC5\u4EC5\u4F1A\u590D\u5236\u5176\u5F15\u7528\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 0, &quot;b&quot;: { &quot;c&quot;: 0}}</span>

obj1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 1, &quot;b&quot;: { &quot;c&quot;: 0}}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 0, &quot;b&quot;: { &quot;c&quot;: 0}}</span>

obj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 1, &quot;b&quot;: { &quot;c&quot;: 0}}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 2, &quot;b&quot;: { &quot;c&quot;: 0}}</span>

obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 1, &quot;b&quot;: { &quot;c&quot;: 3}}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 2, &quot;b&quot;: { &quot;c&quot;: 3}}</span>

<span class="token comment">// Deep Clone</span>
obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;a&quot;: 0, &quot;b&quot;: { &quot;c&quot;: 0}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u62F7\u8D1D-symbol-\u7C7B\u578B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u62F7\u8D1D-symbol-\u7C7B\u578B\u5C5E\u6027" aria-hidden="true">#</a> \u62F7\u8D1D Symbol \u7C7B\u578B\u5C5E\u6027</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a : 1, [Symbol(&quot;foo&quot;)]: 2 }</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Symbol(foo)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4E0D\u80FD\u88AB\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4E0D\u80FD\u88AB\u590D\u5236" aria-hidden="true">#</a> \u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4E0D\u80FD\u88AB\u590D\u5236</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// foo is on obj&#39;s prototype chain.</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>  <span class="token comment">// bar is a non-enumerable property.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// baz is an own enumerable property.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { baz: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F02\u5E38\u4F1A\u6253\u65AD\u540E\u7EED\u62F7\u8D1D\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u4F1A\u6253\u65AD\u540E\u7EED\u62F7\u8D1D\u4EFB\u52A1" aria-hidden="true">#</a> \u5F02\u5E38\u4F1A\u6253\u65AD\u540E\u7EED\u62F7\u8D1D\u4EFB\u52A1</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target.foo is a read-only property</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo2</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">foo3</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
<span class="token comment">// The Exception is thrown when assigning target.foo</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2, the first source was copied successfully.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>foo2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3, the first property of the second source was copied successfully.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1, exception is thrown here.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>foo3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined, assign method has finished, foo3 will not be copied.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>baz<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// undefined, the third source will not be copied either.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18))])}const g=o(i,[["render",m],["__file","50.html.vue"]]);export{g as default};

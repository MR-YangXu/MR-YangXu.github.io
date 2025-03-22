import{_ as e,r as o,o as c,c as i,b as s,d as a,e as p,a as l}from"./app.6d6c724e.js";const u={},r={class:"custom-container tip"},d={href:"https://github.com/kangyana/daily-question/issues/17",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},m={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function v(b,n){const t=o("ExternalLinkIcon");return c(),i("div",null,[n[6]||(n[6]=s("h1",{id:"\u3010q017\u3011js-\u6A21\u5757\u5316",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u3010q017\u3011js-\u6A21\u5757\u5316","aria-hidden":"true"},"#"),a(" \u3010Q017\u3011JS \u6A21\u5757\u5316")],-1)),n[7]||(n[7]=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"\u66F4\u591A\u63CF\u8FF0"),s("p",null,"\u7406\u89E3\u6A21\u5757\u5316\u53D1\u5C55\u8FC7\u7A0B\uFF0C\u7406\u89E3 CommonJS\uFF0CAMD\uFF0CCMD\uFF0CUMD\uFF0CES6 \u6A21\u5757\u5316")],-1)),s("div",r,[n[2]||(n[2]=s("p",{class:"custom-container-title"},"Issue",-1)),s("p",null,[n[1]||(n[1]=a("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),s("a",d,[n[0]||(n[0]=a("Issue 17")),p(t)])])]),s("div",k,[n[5]||(n[5]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[4]||(n[4]=a("\u56DE\u7B54\u8005: ")),s("a",m,[n[3]||(n[3]=a("kangyana")),p(t)])])]),n[8]||(n[8]=l(`<h2 id="_1-\u539F\u751Fjs\u7684\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u539F\u751Fjs\u7684\u6A21\u5757\u5316" aria-hidden="true">#</a> 1. \u539F\u751Fjs\u7684\u6A21\u5757\u5316</h2><p>\u539F\u751Fjs\u6709\u51E0\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u4EE3\u7801\u590D\u7528</li><li>\u5168\u5C40\u4F5C\u7528\u57DF\u6C61\u67D3</li><li>\u53EF\u7EF4\u62A4\u6027</li></ul><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\uFF0C\u51FA\u73B0\u4E86 <code>\u547D\u540D\u7A7A\u95F4</code> \u548C <code>\u533F\u540D\u95ED\u5305 IIFE \u6A21\u5F0F</code>\uFF0C\u5BF9\u4EE3\u7801\u8FDB\u884C\u5C01\u88C5\uFF0C\u5E76\u901A\u8FC7\u63D0\u4F9B\u5916\u90E8\u65B9\u6CD5\u6765\u5BF9\u5B83\u4EEC\u8FDB\u884C\u8BBF\u95EE\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u547D\u540D\u7A7A\u95F4</span>
<span class="token keyword">var</span> namespace <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
namespace<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
namespace<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// IIEF</span>
<span class="token keyword">var</span> utils <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    module<span class="token punctuation">.</span><span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> module
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
utils<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-commonjs" tabindex="-1"><a class="header-anchor" href="#_2-commonjs" aria-hidden="true">#</a> 2. CommonJS</h2><p>09\u5E74 <code>CommonJS</code>\uFF08\u6216\u8005\u79F0\u4F5C CJS\uFF09\u89C4\u8303\u63A8\u51FA\uFF0C\u5728 <strong>NodeJS</strong> \u4E2D\u5B9E\u73B0\u3002\u4E3B\u8981\u65B9\u6CD5\u662F <strong>exports</strong> \u548C <strong>require</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// utils.js \u6587\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>add <span class="token operator">=</span> add

<span class="token comment">// main.js \u6587\u4EF6</span>
<span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>CJS</code> \u51FA\u6765\u4EE5\u540E\uFF0C\u670D\u52A1\u7AEF\u7684\u6A21\u5757\u6982\u5FF5\u5DF2\u7ECF\u5F62\u6210\uFF0C\u5F88\u81EA\u7136\u5730\uFF0C\u5927\u5BB6\u5C31\u60F3\u8981\u5BA2\u6237\u7AEF\u6A21\u5757\u3002 \u4F46\u662F <code>CJS</code> \u662F\u540C\u6B65\u7684\uFF0C\u670D\u52A1\u7AEF\u8BFB\u53D6\u672C\u5730\u786C\u76D8\u53EF\u4EE5\u5F88\u5FEB\u540C\u6B65\u52A0\u8F7D\u5B8C\u6210\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u540C\u6B65\u8BFB\u53D6\u670D\u52A1\u5668\u7AEF\u7684\u6A21\u5757\u53EF\u80FD\u9700\u8981\u5F88\u957F\u7684\u65F6\u95F4\uFF0C\u6D4F\u89C8\u5668\u5C06\u4F1A\u5904\u4E8E\u201D\u5047\u6B7B\u201D\u72B6\u6001\u3002 \u6240\u4EE5\u51FA\u73B0\u5F02\u6B65\u52A0\u8F7D js \u6587\u4EF6\u7684 AMD\u3002</p><h2 id="_3-amd" tabindex="-1"><a class="header-anchor" href="#_3-amd" aria-hidden="true">#</a> 3. AMD</h2><p><code>AMD</code> \u662F\u5F02\u6B65\u6A21\u5757\u5B9A\u4E49\uFF08Asynchronous Module Definition\uFF09\u3002 \u5B83\u91C7\u7528\u5F02\u6B65\u65B9\u5F0F\u52A0\u8F7D\u6A21\u5757\uFF0C\u6A21\u5757\u7684\u52A0\u8F7D\u4E0D\u5F71\u54CD\u5B83\u540E\u9762\u8BED\u53E5\u7684\u8FD0\u884C\u3002 \u6240\u6709\u4F9D\u8D56\u8FD9\u4E2A\u6A21\u5757\u7684\u8BED\u53E5\uFF0C\u90FD\u5B9A\u4E49\u5728\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u7B49\u5230\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u624D\u4F1A\u8FD0\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// utils.js \u6587\u4EF6</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// main.js \u6587\u4EF6</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">utils</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    utils<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u539F\u751Fjs\u4E0D\u652F\u6301\uFF0C\u4F7F\u7528 <code>AMD</code> \u89C4\u8303\u8FDB\u884C\u5F00\u53D1\u9700\u8981\u7528\u5230\u5BF9\u5E94\u7684\u5E93\u51FD\u6570\uFF1A<code>RequireJS</code>\u3002 <code>requireJS</code> \u4E3B\u8981\u89E3\u51B3\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u591A\u4E2Ajs\u6587\u4EF6\u53EF\u80FD\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u88AB\u4F9D\u8D56\u7684\u6587\u4EF6\u9700\u8981\u65E9\u4E8E\u4F9D\u8D56\u5B83\u7684\u6587\u4EF6\u52A0\u8F7D\u5230\u6D4F\u89C8\u5668</li><li>js\u52A0\u8F7D\u7684\u65F6\u5019\u6D4F\u89C8\u5668\u4F1A\u505C\u6B62\u9875\u9762\u6E32\u67D3\uFF0C\u52A0\u8F7D\u6587\u4EF6\u8D8A\u591A\uFF0C\u9875\u9762\u5931\u53BB\u54CD\u5E94\u65F6\u95F4\u8D8A\u957F</li></ul><h2 id="_4-cmd" tabindex="-1"><a class="header-anchor" href="#_4-cmd" aria-hidden="true">#</a> 4. CMD</h2><p><code>CMD</code>\uFF08Common Module Definition\uFF09\u662F\u7389\u4F2F\u5728\u5F00\u53D1 <code>SeaJS</code> \u7684\u65F6\u5019\u63D0\u51FA\u6765\u7684\uFF0C<code>SeaJS</code> \u8981\u89E3\u51B3\u7684\u95EE\u9898\u548C <code>RequireJS</code> \u4E00\u6837\u3002 \u4E0D\u540C\u4E8E AMD \u7684\u4F9D\u8D56\u524D\u7F6E\uFF0CCMD \u662F\u5C31\u8FD1\u4F9D\u8D56\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// AMD</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">utils</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">// \u8FD8\u6CA1\u6709\u7528\u5230 utils a b \u7B49\u6A21\u5757\uFF0C\u4F46\u662F AMD \u5DF2\u7ECF\u521D\u59CB\u5316\u4E86\u6240\u6709\u6A21\u5757</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    utils<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// CMD</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u9700\u8981\u65F6\u518D require\uFF0C\u4E0D\u6267\u884C\u5C31\u4E0D\u4F1A\u52A0\u8F7D</span>
        utils<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5728 <code>AMD</code> \u4E5F\u662F\u652F\u6301\u4F9D\u8D56\u5C31\u8FD1\uFF0C\u4E5F\u5C31\u662F <code>CMD</code> \u8FD9\u6837\u7684\u5199\u6CD5\u7684\uFF0C\u6240\u4EE5\uFF0C<code>RequireJS</code> \u4E2D\uFF0C\u4EE5\u4E0A\u4E24\u79CD\u65B9\u5F0F\u90FD\u80FD\u6267\u884C\u3002 \u4E0D\u8FC7\uFF0C<code>RequireJS</code> \u5B98\u65B9\u6587\u6863\u4E2D\uFF0C\u9ED8\u8BA4\u90FD\u662F\u91C7\u7528\u4F9D\u8D56\u524D\u7F6E\u7684\u5199\u6CD5\u3002</p><h2 id="_5-umd" tabindex="-1"><a class="header-anchor" href="#_5-umd" aria-hidden="true">#</a> 5. UMD</h2><p><code>UMD</code> \u901A\u7528\u6A21\u5757\u5B9A\u4E49\uFF08Universal Module Definition\uFF09\uFF0C\u540C\u65F6\u517C\u5BB9\u670D\u52A1\u7AEF\uFF08CJS\uFF09\u548C\u5BA2\u6237\u7AEF\uFF08AMD\uFF09\u7684\u6A21\u5757\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// utils.js \u6587\u4EF6\u540C\u4E0A</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//AMD</span>
        <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;utils&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//CommonJS</span>
        <span class="token keyword">var</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;utils&#39;</span><span class="token punctuation">)</span>
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>utils<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>utils<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">utils</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    utils<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-es6-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_6-es6-\u6A21\u5757\u5316" aria-hidden="true">#</a> 6. ES6 \u6A21\u5757\u5316</h2><p><code>ES6</code>\uFF08ES2015\uFF09\u81EA\u5E26\u7684\u6A21\u5757\u5316\uFF0C\u4F7F\u7528 <strong>import</strong> \u548C <strong>export</strong> \u5173\u952E\u5B57\u6765\u5BFC\u5165\u548C\u5BFC\u51FA\u6A21\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// utils.js \u6587\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.js \u6587\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> utils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./utils&quot;</span>
utils<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-commonjs-\u548C-es6-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-commonjs-\u548C-es6-\u7684\u533A\u522B" aria-hidden="true">#</a> 7. CommonJS \u548C ES6 \u7684\u533A\u522B</h2><p><code>CommonJS</code> \u6A21\u5757\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684\u62F7\u8D1D\uFF0C<code>ES6</code> \u6A21\u5757\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\u3002 <code>CommonJS</code> \u6A21\u5757\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0C<code>ES6</code> \u6A21\u5757\u662F\u7F16\u8BD1\u65F6\u8F93\u51FA\u63A5\u53E3\u3002</p>`,26))])}const g=e(u,[["render",v],["__file","17.html.vue"]]);export{g as default};

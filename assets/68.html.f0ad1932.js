import{_ as p,r as c,o as i,c as l,b as n,d as a,e as t,a as o}from"./app.6d6c724e.js";const r={},d={class:"custom-container tip"},u={href:"https://github.com/kangyana/daily-question/issues/68",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},m={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},f={class:"custom-container tip"},h={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function v(b,s){const e=c("ExternalLinkIcon");return i(),l("div",null,[s[9]||(s[9]=n("h1",{id:"\u3010q068\u3011react-hooks-\u5B9E\u73B0\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q068\u3011react-hooks-\u5B9E\u73B0\u539F\u7406","aria-hidden":"true"},"#"),a(" \u3010Q068\u3011React Hooks \u5B9E\u73B0\u539F\u7406")],-1)),n("div",d,[s[2]||(s[2]=n("p",{class:"custom-container-title"},"Issue",-1)),n("p",null,[s[1]||(s[1]=a("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),n("a",u,[s[0]||(s[0]=a("Issue 68")),t(e)])])]),n("div",k,[s[5]||(s[5]=n("p",{class:"custom-container-title"},"Author",-1)),n("p",null,[s[4]||(s[4]=a("\u56DE\u7B54\u8005: ")),n("a",m,[s[3]||(s[3]=a("kangyana")),t(e)])])]),s[10]||(s[10]=o(`<h2 id="_1-usestate-usereducer" tabindex="-1"><a class="header-anchor" href="#_1-usestate-usereducer" aria-hidden="true">#</a> 1. useState / useReducer</h2><p><code>useState</code> \u548C <code>useReducer</code> \u90FD\u662F\u5173\u4E8E <strong>\u72B6\u6001</strong> \u7684\u83B7\u53D6\u548C\u66F4\u65B0\u3002 <code>useState</code> \u662F <code>useReducer</code> \u7684\u4E00\u4E2A\u7B80\u5316\u7248\uFF0C\u5176\u80CC\u540E\u7528\u7684\u90FD\u662F\u540C\u4E00\u5957\u903B\u8F91\u3002</p><h3 id="hook-\u5982\u4F55\u4FDD\u5B58\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#hook-\u5982\u4F55\u4FDD\u5B58\u72B6\u6001" aria-hidden="true">#</a> Hook \u5982\u4F55\u4FDD\u5B58\u72B6\u6001</h3><p><code>Hook</code> \u4FDD\u5B58\u72B6\u6001\u7684\u4F4D\u7F6E\u5176\u5B9E\u4E0E <code>class</code> \u7684\u4E00\u81F4\uFF1A</p><ul><li>\u4E24\u8005\u7684 <strong>\u72B6\u6001</strong> \u90FD\u88AB\u6302\u8F7D\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61 <code>FiberNode</code> \u7684 <code>memoizedState</code> \u5C5E\u6027\u4E2D\u3002</li><li>\u4E24\u8005\u4FDD\u5B58 <strong>\u72B6\u6001</strong> \u7684\u6570\u636E\u7ED3\u6784\u5B8C\u5168\u4E0D\u540C\uFF1B <code>class</code> \u76F4\u63A5\u628A <code>state</code> \u5BF9\u8C61\u4FDD\u5B58\u5728 <code>memoizedState</code> \u4E2D\uFF1B <code>Hook</code> \u7528\u94FE\u8868\u4FDD\u5B58 <strong>\u72B6\u6001</strong>\uFF0C<code>memoizedState</code> \u4E2D\u4FDD\u5B58\u7684\u662F\u94FE\u8868\u7684\u5934\u6307\u9488\u3002</li></ul><p>\u8BA9\u6211\u4EEC\u770B\u4E0B\u94FE\u8868\u7684\u7ED3\u6784\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// react-reconciler/src/ReactFiberHooks.js</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Hook</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  memoizedState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u65B0\u7684\u72B6\u6001\u503C</span>
  baseState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token comment">// \u521D\u59CB\u72B6\u6001\u503C</span>
  baseUpdate<span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  queue<span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u4E34\u65F6\u4FDD\u5B58\u5BF9\u72B6\u6001\u503C\u7684\u64CD\u4F5C\uFF0C\u66F4\u51C6\u786E\u6765\u8BF4\u662F\u4E00\u4E2A\u94FE\u8868\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u4E00\u4E2A\u6307\u9488</span>
  next<span class="token operator">:</span> Hook <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>  <span class="token comment">// \u6307\u5411\u4E0B\u4E00\u4E2A\u94FE\u8868\u8282\u70B9</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B98\u65B9\u6587\u6863\u4E00\u76F4\u5F3A\u8C03 <code>Hook</code> \u7684\u8C03\u7528\u53EA\u80FD\u653E\u5728 <strong>\u51FD\u6570\u7EC4\u4EF6/\u81EA\u5B9A\u4E49Hook</strong> \u7684\u9876\u90E8\uFF0C \u56E0\u4E3A\u53EA\u80FD\u901A\u8FC7 <code>Hook</code> \u8C03\u7528\u7684\u987A\u5E8F\u6765\u4E0E\u5B9E\u9645\u4FDD\u5B58\u7684\u6570\u636E\u7ED3\u6784\u6765\u5173\u8054\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/1/17307e7bb3014026~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp" alt="alt"></p><h3 id="hook-\u5982\u4F55\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#hook-\u5982\u4F55\u66F4\u65B0" aria-hidden="true">#</a> Hook \u5982\u4F55\u66F4\u65B0</h3><p><code>useState</code> \u548C <code>useReducer</code> \u90FD\u8FD4\u56DE\u4E86\u66F4\u65B0\u51FD\u6570\uFF08dispatcher\uFF09\uFF0C<code>dispatcher</code> \u7684\u8FD0\u884C\u539F\u7406\u662F\u600E\u6837\u7684\u5462\uFF1F \u6BCF\u6B21\u8C03\u7528 <code>dispatcher</code>\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u66F4\u65B0 <strong>\u72B6\u6001</strong>\uFF0C\u800C\u662F\u521B\u5EFA\u4E00\u6761\u4FEE\u6539\u64CD\u4F5C\u3002 \u5728\u5BF9\u5E94 <code>Hook</code> \u5BF9\u8C61\u7684 <code>queue</code> \u5C5E\u6027\u6302\u8F7D\u7684\u94FE\u8868\u4E0A\u52A0\u4E00\u4E2A\u65B0\u8282\u70B9\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/1/17307e7f74c14584~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp" alt="alt"></p><p>\u5728\u4E0B\u6B21\u6267\u884C\u51FD\u6570\u7EC4\u4EF6\u65F6\uFF0C\u8D70\u5230 <code>useState</code> \u8FD9\u6B65\uFF0C\u94FE\u8868\u624D\u4F1A\u8BA1\u7B97\u6700\u65B0\u7684 <strong>\u72B6\u6001</strong>\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u628A\u66F4\u65B0\u64CD\u4F5C\u90FD\u4FDD\u5B58\u5230\u94FE\u8868-\u4FDD\u5B58\u6700\u540E\u4E00\u6761\u66F4\u65B0\u64CD\u4F5C\u4E0D\u884C\u5417" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u628A\u66F4\u65B0\u64CD\u4F5C\u90FD\u4FDD\u5B58\u5230\u94FE\u8868-\u4FDD\u5B58\u6700\u540E\u4E00\u6761\u66F4\u65B0\u64CD\u4F5C\u4E0D\u884C\u5417" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u628A\u66F4\u65B0\u64CD\u4F5C\u90FD\u4FDD\u5B58\u5230\u94FE\u8868\uFF0C\u4FDD\u5B58\u6700\u540E\u4E00\u6761\u66F4\u65B0\u64CD\u4F5C\u4E0D\u884C\u5417\uFF1F</h3><p>\u56E0\u4E3A <code>dispatcher</code> \u8FD8\u652F\u6301 <strong>\u51FD\u6570\u5F0F\u66F4\u65B0</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> name <span class="token operator">+</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> name <span class="token operator">+</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> name <span class="token operator">+</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0B\u6B21\u6E32\u67D3\u65F6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;abc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)),n("div",f,[s[8]||(s[8]=n("p",{class:"custom-container-title"},"Author",-1)),n("p",null,[s[7]||(s[7]=a("\u56DE\u7B54\u8005: ")),n("a",h,[s[6]||(s[6]=a("kangyana")),t(e)])])]),s[11]||(s[11]=o(`<h2 id="_2-useeffect" tabindex="-1"><a class="header-anchor" href="#_2-useeffect" aria-hidden="true">#</a> 2. useEffect</h2><p><code>useEffect</code> \u7684\u4FDD\u5B58\u4E5F\u662F\u4EE5 <strong>\u94FE\u8868</strong> \u7684\u5F62\u5F0F\u6302\u8F7D\u5728 <code>FiberNode.updateQueue</code> \u4E2D\u3002 \u4E0B\u9762\u6211\u4EEC\u6309\u7EC4\u4EF6 <code>\u751F\u547D\u5468\u671F</code> \u4E2D\u7684 <code>mount</code> \u548C <code>update</code> \u6765\u9610\u8FF0 <code>useEffect</code> \u7684\u6267\u884C\u539F\u7406\uFF1A</p><h3 id="mount-\u9636\u6BB5-mounteffect" tabindex="-1"><a class="header-anchor" href="#mount-\u9636\u6BB5-mounteffect" aria-hidden="true">#</a> mount \u9636\u6BB5\uFF1AmountEffect</h3><p>\u2460 \u6839\u636E\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F9D\u6B21\u8C03\u7528\u7684 <code>useEffect</code>\uFF0C\u6784\u5EFA\u6210\u4E00\u4E2A\u94FE\u8868\u5E76\u6302\u8F7D\u5728 <code>FiberNode.updateQueue</code> \u4E2D\u3002 \u94FE\u8868\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784\u4E3A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code> <span class="token keyword">const</span> effect<span class="token operator">:</span> Effect <span class="token operator">=</span> <span class="token punctuation">{</span>
    tag<span class="token punctuation">,</span> <span class="token comment">// \u7528\u6765\u6807\u8BC6\u4F9D\u8D56\u9879\u6709\u6CA1\u6709\u53D8\u52A8</span>
    create<span class="token punctuation">,</span> <span class="token comment">// \u7528\u6237\u4F7F\u7528useEffect\u4F20\u5165\u7684\u51FD\u6570\u4F53</span>
    destroy<span class="token punctuation">,</span> <span class="token comment">// \u4E0A\u8FF0\u51FD\u6570\u4F53\u6267\u884C\u540E\u751F\u6210\u7684\u7528\u6765\u6E05\u9664\u526F\u4F5C\u7528\u7684\u51FD\u6570</span>
    deps<span class="token punctuation">,</span> <span class="token comment">// \u4F9D\u8D56\u9879\u5217\u8868</span>
    next<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2461 \u7EC4\u4EF6\u5B8C\u6210\u6E32\u67D3\u540E\uFF0C\u904D\u5386\u94FE\u8868\u6267\u884C\u3002</p><h3 id="update-\u9636\u6BB5-updateeffect" tabindex="-1"><a class="header-anchor" href="#update-\u9636\u6BB5-updateeffect" aria-hidden="true">#</a> update \u9636\u6BB5\uFF1AupdateEffect</h3><p>\u540C\u6837\u5728\u4F9D\u6B21\u8C03\u7528 <code>useEffect</code> \u65F6\uFF0C\u5224\u65AD\u6B64\u65F6\u4F20\u5165\u7684\u4F9D\u8D56\u5217\u8868\uFF0C\u4E0E\u94FE\u8868\u8282\u70B9 <code>Effect.deps</code> \u4E2D\u4FDD\u5B58\u7684\u505A\u4E00\u6B21\u6D45\u6BD4\u8F83\u3002 \u5982\u679C\u4E00\u81F4\uFF0C\u5219\u5728 <code>Effect.tag</code> \u6807\u8BB0\u4E0A <code>NoHookEffect</code>\u3002</p><h3 id="\u6267\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u9636\u6BB5" aria-hidden="true">#</a> \u6267\u884C\u9636\u6BB5</h3><p>\u5728\u6BCF\u6B21\u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C\u5C31\u4F1A\u8FDB\u5165 <code>useEffect</code> \u7684\u6267\u884C\u9636\u6BB5\uFF1A<code>commitHookEffectList()</code>\u3002</p><ul><li>\u904D\u5386\u94FE\u8868</li><li>\u5982\u679C\u9047\u5230\u6807\u7B7E\uFF08tag\uFF09\u4E3A <code>NoHookEffect</code> \u7684\u8282\u70B9\u5219\u8DF3\u8FC7</li><li>\u5982\u679C\u6709\u6E05\u9664\u51FD\u6570\uFF08destroy\uFF09\uFF0C\u5148\u6267\u884C\u6E05\u9664</li><li>\u6267\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF08create\uFF09</li></ul><p>\u6CE8\u610F\uFF1A\u5148\u6E05\u9664\u4E0A\u4E00\u8F6E\u7684\u526F\u4F5C\u7528\uFF0C\u7136\u540E\u518D\u6267\u884C\u672C\u8F6E\u7684\u4F20\u5165\u51FD\u6570\u3002</p><h2 id="_3-\u5176\u5B83\u5B98\u65B9-hook" tabindex="-1"><a class="header-anchor" href="#_3-\u5176\u5B83\u5B98\u65B9-hook" aria-hidden="true">#</a> 3. \u5176\u5B83\u5B98\u65B9 Hook</h2><p>\u5176\u5B83\u5B98\u65B9 <code>Hook</code> \u4E5F\u662F\u76F8\u4F3C\u539F\u7406\uFF1A</p><ul><li>\u7528\u94FE\u8868\u6570\u636E\u7ED3\u6784\u6765\u505A\u5168\u5C40\u72B6\u6001\u4FDD\u6301</li><li>\u5224\u65AD\u4F9D\u8D56\u9879\u51B3\u5B9A\u662F\u5426\u8981\u66F4\u65B0\u72B6\u6001</li></ul>`,15))])}const y=p(r,[["render",v],["__file","68.html.vue"]]);export{y as default};

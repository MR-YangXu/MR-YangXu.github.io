import{_ as o,r as l,o as i,c as r,b as s,d as a,e as t,a as p}from"./app.6d6c724e.js";const c={},u={class:"custom-container tip"},d={href:"https://github.com/kangyana/daily-question/issues/135",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},v={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/eslint/eslint/tree/main/lib/rules",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.npmjs.com/package/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb",target:"_blank",rel:"noopener noreferrer"};function h(q,n){const e=l("ExternalLinkIcon");return i(),r("div",null,[n[13]||(n[13]=s("h1",{id:"\u3010q135\u3011\u8BF7\u7B80\u8FF0\u4E0B-eslint-\u7684\u4F5C\u7528",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u3010q135\u3011\u8BF7\u7B80\u8FF0\u4E0B-eslint-\u7684\u4F5C\u7528","aria-hidden":"true"},"#"),a(" \u3010Q135\u3011\u8BF7\u7B80\u8FF0\u4E0B eslint \u7684\u4F5C\u7528")],-1)),s("div",u,[n[2]||(n[2]=s("p",{class:"custom-container-title"},"Issue",-1)),s("p",null,[n[1]||(n[1]=a("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),s("a",d,[n[0]||(n[0]=a("Issue 135")),t(e)])])]),s("div",k,[n[5]||(n[5]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[4]||(n[4]=a("\u56DE\u7B54\u8005: ")),s("a",v,[n[3]||(n[3]=a("kangyana")),t(e)])])]),n[14]||(n[14]=p(`<h2 id="_1-eslint" tabindex="-1"><a class="header-anchor" href="#_1-eslint" aria-hidden="true">#</a> 1. eslint</h2><p>eslint\uFF0C\u5BF9\u4EE3\u7801\u4E0D\u4EC5\u6709\u98CE\u683C\u7684\u6821\u9A8C\uFF0C\u66F4\u6709\u53EF\u8BFB\u6027\u3001\u5B89\u5168\u6027\u3001\u5065\u58EE\u6027\u7684\u6821\u9A8C\u3002</p><p>\u5173\u4E8E\u6821\u9A8C\u5206\u53F7\u3001\u5192\u53F7\u7B49\uFF0C\u5C5E\u4E8E\u98CE\u683C\u6821\u9A8C\uFF0C\u4E0E\u4E2A\u4EBA\u98CE\u683C\u6709\u5173\uFF0C\u9075\u5FAA\u56E2\u961F\u6807\u51C6\u5373\u53EF\uFF0C\u53EF\u5546\u91CF\u53EF\u59A5\u534F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FD9\u5C5E\u4E8E\u98CE\u683C\u6821\u9A8C</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E <code>prettier</code> \u4E0D\u540C\uFF0Ceslint \u66F4\u591A\u662F\u5173\u4E8E\u4EE3\u7801\u5065\u58EE\u6027\u6821\u9A8C\uFF0C\u8BD5\u4E3E\u4E00\u4F8B\u3002</p><ul><li><code>Array.prototype.forEach</code> \u4E0D\u8981\u6C42\u4E5F\u4E0D\u63A8\u8350\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u503C</li><li><code>Array.prototype.map</code> \u56DE\u8C03\u51FD\u6570\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u503C\u7528\u4EE5\u6620\u5C04</li></ul><p>\u5F53\u4EE3\u7801\u4E0D\u9075\u5B88\u6B64\u4E24\u6761\u8981\u6C42\u65F6\uFF0C\u901A\u8FC7 eslint \u4EE5\u4E0B\u89C4\u5219\u6821\u9A8C\uFF0C\u5219\u4F1A\u62A5\u9519\u3002\u6B64\u79CD\u6821\u9A8C\u4E0E\u4EE3\u7801\u5065\u58EE\u6709\u5173\uFF0C\u4E0D\u53EF\u5546\u91CF\u4E0D\u53EF\u59A5\u534F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FD9\u5C5E\u4E8E\u4EE3\u7801\u5065\u58EE\u6027\u6821\u9A8C</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&#39;array-callback-return&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">checkForEach</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-rule" tabindex="-1"><a class="header-anchor" href="#_2-rule" aria-hidden="true">#</a> 2. Rule</h2><p>\u5728 eslint \u4E2D\uFF0C\u4F7F\u7528 <code>Rule</code> \u6700\u4E3A\u6821\u9A8C\u4EE3\u7801\u6700\u5C0F\u89C4\u5219\u5355\u5143\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">avoidEscape</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 eslint \u81EA\u8EAB\uFF0C\u5185\u7F6E\u5927\u91CF rules\uFF0C\u6BD4\u5982\u5206\u53F7\u5192\u53F7\u9017\u53F7\u7B49\u914D\u7F6E\u3002</p>`,12)),s("blockquote",null,[s("p",null,[s("a",m,[n[6]||(n[6]=a("eslint rules \u6E90\u7801\u4F4D\u7F6E")),t(e)])])]),n[15]||(n[15]=p(`<p>\u6821\u9A8C typescript\u3001react \u7B49\u89C4\u5219\uFF0C\u81EA\u7136\u4E0D\u4F1A\u7531 eslint \u5B98\u65B9\u63D0\u4F9B\uFF0C\u90A3\u8FD9\u4E9B Rules \u5982\u4F55\u7EF4\u62A4\uFF1F</p><h2 id="_2-plugin" tabindex="-1"><a class="header-anchor" href="#_2-plugin" aria-hidden="true">#</a> 2. Plugin</h2><p>\u5982 react\u3001typescript\u3001flow \u7B49\uFF0C\u9700\u8981\u81EA\u5236 <code>Rule</code>\uFF0C\u6B64\u7C7B\u4E3A <code>Plugin</code>\uFF0C\u4ED6\u4EEC\u7EF4\u62A4\u4E86\u4E00\u7CFB\u5217 Rules\u3002</p><p>\u5728\u547D\u540D\u65F6\u4EE5 <code>eslint-plugin-</code> \u5F00\u5934\u5E76\u53D1\u5E03\u5728 npm \u4ED3\u5E93\u4E2D\uFF0C\u800C\u6267\u884C\u7684\u89C4\u5219\u4EE5 <code>react/</code>\u3001<code>flow/</code> \u7B49\u5F00\u5934\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;react/no-multi-comp&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ignoreStateless</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),s("ul",null,[s("li",null,[s("a",g,[n[7]||(n[7]=a("React ESLint Rules(opens new window)")),t(e)])]),s("li",null,[s("a",b,[n[8]||(n[8]=a("TypeScript ESLint Rules")),t(e)])])]),n[16]||(n[16]=s("h2",{id:"_3-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-config","aria-hidden":"true"},"#"),a(" 3. Config")],-1)),n[17]||(n[17]=s("p",null,[a("\u5728\u7B2C\u4E09\u65B9\u5E93\u3001\u516C\u53F8\u4E1A\u52A1\u9879\u76EE\u4E2D\u9700\u8981\u914D\u7F6E\u5404\u79CD\u9002\u5E94\u81EA\u8EAB\u7684\u89C4\u5219\u3001\u63D2\u4EF6\u7B49\uFF0C\u79F0\u4E3A "),s("code",null,"Config"),a("\u3002")],-1)),s("ul",null,[n[11]||(n[11]=s("li",null,[s("p",null,[a("\u4F5C\u4E3A\u5E93\u53D1\u5E03\uFF0C\u5728\u547D\u540D\u65F6\u4EE5 "),s("code",null,"elint-config-"),a(" \u5F00\u5934\uFF0C\u5E76\u53D1\u5E03\u5728 npm \u4ED3\u5E93\u4E2D\u3002")])],-1)),n[12]||(n[12]=s("li",null,[s("p",null,[a("\u4E3A\u9879\u76EE\u670D\u52A1\uFF0C\u5728\u9879\u76EE\u4E2D\u4EE5 "),s("code",null,".eslintrc"),a(" \u547D\u540D\u6216\u8005\u7F6E\u4E8E\u9879\u76EE "),s("code",null,"package.json"),a(" \u4E2D\u7684 "),s("code",null,"eslintConfig"),a(" \u5B57\u6BB5\u4E2D\uFF0C\u63A8\u8350\u7B2C\u4E8C\u79CD\u65B9\u6848\u3002")])],-1)),s("li",null,[s("p",null,[s("a",f,[n[9]||(n[9]=a("eslint-config-react-app(opens new window)")),t(e)])])]),s("li",null,[s("p",null,[s("a",y,[n[10]||(n[10]=a("eslint-config-airbnb")),t(e)])])])]),n[18]||(n[18]=p(`<p>\u4EE5\u4E0B\u662F <code>eslint-config-airbnb</code> \u7684\u6700\u5916\u5C42\u914D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint-config-airbnb-base&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./rules/react&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./rules/react-a11y&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span>resolve<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6211\u4EEC\u516C\u53F8\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u65E0\u9700\u91CD\u65B0\u9020\u8F6E\u5B50\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 <code>extends</code> \u7EE7\u627F\u90A3\u4E9B\u4F18\u79C0\u7684 <code>eslint-config</code> \u5373\u53EF\u3002</p>`,3))])}const j=o(c,[["render",h],["__file","135.html.vue"]]);export{j as default};

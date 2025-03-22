import{_ as l,r as o,o as d,c,b as s,d as e,e as i,a as r}from"./app.6d6c724e.js";const t={},p={class:"custom-container tip"},u={href:"https://github.com/kangyana/daily-question/issues/139",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},v={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const a=o("ExternalLinkIcon");return d(),c("div",null,[n[6]||(n[6]=s("h1",{id:"\u3010q139\u3011\u5982\u4F55\u4F7F\u7528-docker-\u90E8\u7F72\u524D\u7AEF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u3010q139\u3011\u5982\u4F55\u4F7F\u7528-docker-\u90E8\u7F72\u524D\u7AEF","aria-hidden":"true"},"#"),e(" \u3010Q139\u3011\u5982\u4F55\u4F7F\u7528 docker \u90E8\u7F72\u524D\u7AEF")],-1)),s("div",p,[n[2]||(n[2]=s("p",{class:"custom-container-title"},"Issue",-1)),s("p",null,[n[1]||(n[1]=e("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),s("a",u,[n[0]||(n[0]=e("Issue 139")),i(a)])])]),s("div",k,[n[5]||(n[5]=s("p",{class:"custom-container-title"},"Author",-1)),s("p",null,[n[4]||(n[4]=e("\u56DE\u7B54\u8005: ")),s("a",v,[n[3]||(n[3]=e("kangyana")),i(a)])])]),n[7]||(n[7]=r(`<h2 id="_1-\u6709\u4EC0\u4E48\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_1-\u6709\u4EC0\u4E48\u597D\u5904" aria-hidden="true">#</a> 1. \u6709\u4EC0\u4E48\u597D\u5904</h2><p>\u4F7F\u7528 docker \u90E8\u7F72\u524D\u7AEF\u6700\u5927\u7684\u597D\u5904\u662F\u9694\u79BB\u73AF\u5883\uFF0C\u5355\u72EC\u7BA1\u7406\uFF1A</p><ul><li>\u524D\u7AEF\u9879\u76EE\u4F9D\u8D56\u4E8E Node v16\uFF0C\u800C\u5BBF\u4E3B\u673A\u65E0\u6CD5\u6EE1\u8DB3\u4F9D\u8D56\uFF0C\u4F7F\u7528\u5BB9\u5668\u6EE1\u8DB3\u9700\u6C42</li><li>\u524D\u7AEF\u9879\u76EE\u4F9D\u8D56\u4E8E npm v8\uFF0C\u800C\u5BBF\u4E3B\u673A\u65E0\u6CD5\u6EE1\u8DB3\u4F9D\u8D56\uFF0C\u4F7F\u7528\u5BB9\u5668\u6EE1\u8DB3\u9700\u6C42</li><li>\u524D\u7AEF\u9879\u76EE\u9700\u8981\u5C06 8080 \u7AEF\u53E3\u66B4\u9732\u51FA\u6765\uFF0C\u800C\u5BB9\u6613\u4E0E\u5BBF\u4E3B\u673A\u5176\u5B83\u670D\u52A1\u51B2\u7A81\uFF0C\u4F7F\u7528\u5BB9\u5668\u4E0E\u670D\u52A1\u53D1\u73B0\u6EE1\u8DB3\u9700\u6C42</li></ul><h2 id="_2-\u4F7F\u7528-docker-\u90E8\u7F72\u524D\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-docker-\u90E8\u7F72\u524D\u7AEF" aria-hidden="true">#</a> 2. \u4F7F\u7528 docker \u90E8\u7F72\u524D\u7AEF</h2><p>\u5047\u8BBE\u672C\u5730\u8DD1\u8D77\u4E00\u4E2A\u524D\u7AEF\u9879\u76EE\uFF0C\u9700\u8981\u4EE5\u4E0B\u6B65\u9AA4\uFF0C\u5E76\u6700\u7EC8\u53EF\u5728 <code>localhost:8080</code> \u8BBF\u95EE\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i
$ <span class="token function">npm</span> run build
$ <span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u5728 docker \u4E2D\u90E8\u7F72\u524D\u7AEF\uFF0C\u4E0E\u5728\u672C\u5730\u5C06\u5982\u4F55\u5C06\u9879\u76EE\u8DD1\u8D77\u6765\u6B65\u9AA4\u5927\u81F4\u4E00\u81F4\uFF0C\u4E00\u4E2A Dockerfile \u5982\u4E0B</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># \u6307\u5B9A node \u7248\u672C\u53F7\uFF0C\u6EE1\u8DB3\u5BBF\u4E3B\u73AF\u5883</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:16-alpine</span>

<span class="token comment"># \u6307\u5B9A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5C06\u4EE3\u7801\u6DFB\u52A0\u81F3\u6B64</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>
<span class="token instruction"><span class="token keyword">ADD</span> . /code</span>

<span class="token comment"># \u5982\u4F55\u5C06\u9879\u76EE\u8DD1\u8D77\u6765</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>
<span class="token instruction"><span class="token keyword">CMD</span> npm start</span>

<span class="token comment"># \u66B4\u9732\u51FA\u8FD0\u884C\u7684\u7AEF\u53E3\u53F7\uFF0C\u53EF\u5BF9\u5916\u63A5\u5165\u670D\u52A1\u53D1\u73B0</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>docker build</code> \u6784\u5EFA\u955C\u50CF\u5E76\u628A\u5B83\u8DD1\u8D77\u6765\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6784\u5EFA\u955C\u50CF</span>
$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> fe-app <span class="token builtin class-name">.</span>

<span class="token comment"># \u8FD0\u884C\u5BB9\u5668</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> fe-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u606D\u559C\u4F60\uFF0C\u80FD\u591F\u5199\u51FA\u4EE5\u4E0A\u7684 Dockerfile\uFF0C\u8FD9\u8BF4\u660E\u4F60\u5BF9 Docker \u5DF2\u7ECF\u6709\u4E86\u7406\u89E3\u3002\u4F46\u5176\u4E2D\u8FD8\u6709\u82E5\u5E72\u95EE\u9898\uFF0C\u6211\u4EEC\u5BF9\u5176\u8FDB\u884C\u4E00\u6CE2\u4F18\u5316</p><ul><li>\u4F7F\u7528 <code>node:16</code> \u4F5C\u4E3A\u57FA\u7840\u955C\u50CF\u8FC7\u4E8E\u5962\u4F88\uFF0C\u5360\u7528\u4F53\u79EF\u592A\u5927\uFF0C\u800C\u6700\u7EC8\u4EA7\u7269 (js/css/html) \u65E0\u9700\u4F9D\u8D56\u8BE5\u955C\u50CF\u3002\u53EF\u4F7F\u7528\u66F4\u5C0F\u7684 nginx \u955C\u50CF\u505A\u591A\u9636\u6BB5\u6784\u5EFA\u3002</li><li>\u591A\u4E2A RUN \u547D\u4EE4\uFF0C\u4E0D\u5229\u4E8E Docker \u7684\u955C\u50CF\u5206\u5C42\u5B58\u50A8\u3002\u53EF\u5408\u5E76\u4E3A\u4E00\u4E2A RUN \u547D\u4EE4</li><li>\u6BCF\u6B21\u90FD\u9700\u8981 <code>npm i</code>\uFF0C\u53EF\u5408\u7406\u5229\u7528 Docker \u7F13\u5B58\uFF0CADD \u547D\u4EE4\u4E2D\u5185\u5BB9\u53D1\u751F\u6539\u53D8\u5C06\u4F1A\u7834\u574F\u7F13\u5B58\u3002\u53EF\u5C06 <code>package.json</code> \u63D0\u524D\u79FB\u81F3\u76EE\u6807\u76EE\u5F55\uFF0C\u53EA\u8981 <code>package.json/lockfile</code> \u4E0D\u53D1\u751F\u53D8\u52A8\uFF0C\u5C06\u4E0D\u4F1A\u91CD\u65B0 <code>npm i</code></li></ul><p>\u4F18\u5316\u540E Dockerfile \u5982\u4E0B\uFF1A</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:16-alpine <span class="token keyword">as</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>

<span class="token instruction"><span class="token keyword">ADD</span> package.json package-lock.json /code/</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token instruction"><span class="token keyword">ADD</span> . /code</span>

<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>

<span class="token comment"># \u9009\u62E9\u66F4\u5C0F\u4F53\u79EF\u7684\u57FA\u7840\u955C\u50CF</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine</span>

<span class="token comment"># \u5C06\u6784\u5EFA\u4EA7\u7269\u79FB\u81F3 nginx \u4E2D</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> code/build/ /usr/share/nginx/html/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14))])}const h=l(t,[["render",m],["__file","139.html.vue"]]);export{h as default};

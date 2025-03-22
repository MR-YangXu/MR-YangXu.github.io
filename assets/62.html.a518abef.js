import{_ as a,r as n,o as c,c as r,b as t,d as o,e as d,a as i}from"./app.6d6c724e.js";const l={},u={class:"custom-container tip"},p={href:"https://github.com/kangyana/daily-question/issues/62",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"},f={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"};function x(h,e){const s=n("ExternalLinkIcon");return c(),r("div",null,[e[6]||(e[6]=t("h1",{id:"\u3010q062\u3011setstate-\u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u3010q062\u3011setstate-\u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65","aria-hidden":"true"},"#"),o(" \u3010Q062\u3011setState \u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65\uFF1F")],-1)),t("div",u,[e[2]||(e[2]=t("p",{class:"custom-container-title"},"Issue",-1)),t("p",null,[e[1]||(e[1]=o("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: ")),t("a",p,[e[0]||(e[0]=o("Issue 62")),d(s)])])]),t("div",m,[e[5]||(e[5]=t("p",{class:"custom-container-title"},"Author",-1)),t("p",null,[e[4]||(e[4]=o("\u56DE\u7B54\u8005: ")),t("a",f,[e[3]||(e[3]=o("kangyana")),d(s)])])]),e[7]||(e[7]=i('<h2 id="_1-setstate-\u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#_1-setstate-\u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65" aria-hidden="true">#</a> 1. setState \u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65\uFF1F</h2><p><code>setState</code> \u662F\u5F02\u6B65\u7684\uFF0C\u4F46\u4E0D\u662F <code>setTimeout</code>\u3001<code>Promise</code> \u90A3\u79CD\u5F02\u6B65\uFF0C\u53EA\u662F\u6307 <code>setState</code> \u4E4B\u540E\u662F\u5426 <code>state</code> \u9A6C\u4E0A\u53D8\u4E86\uFF0C\u662F\u5426\u9A6C\u4E0A <code>render</code>\u3002 <code>setState</code> \u4F1A\u521B\u5EFA <code>update</code> \u5BF9\u8C61\u6302\u5230 <code>fiber</code> \u5BF9\u8C61\u4E0A\uFF0C\u7136\u540E\u8C03\u5EA6 <code>performSyncWorkOnRoot</code> \u91CD\u65B0\u6E32\u67D3\u3002</p><p>\u5728 react17 \u4E2D\uFF0C<code>setState</code> \u662F\u6279\u91CF\u6267\u884C\u7684\uFF0C\u56E0\u4E3A\u6267\u884C\u524D\u4F1A\u8BBE\u7F6E <code>executionContext</code>\u3002 \u4F46\u5982\u679C\u5728 <code>setTimeout</code>\u3001\u4E8B\u4EF6\u76D1\u542C\u5668\u7B49\u51FD\u6570\u91CC\uFF0C\u5C31\u4E0D\u4F1A\u8BBE\u7F6E <code>executionContext</code> \u4E86\uFF0C\u8FD9\u65F6\u5019 <code>setState</code> \u4F1A\u540C\u6B65\u6267\u884C\u3002 \u53EF\u4EE5\u5728\u5916\u9762\u5305\u4E00\u5C42 <code>batchUpdates</code> \u51FD\u6570\uFF0C\u624B\u52A8\u8BBE\u7F6E\u4E0B <code>excutionContext</code> \u6765\u5207\u6362\u6210\u5F02\u6B65\u6279\u91CF\u6267\u884C\u3002</p><p>\u5728 react18 \u91CC\u9762\uFF0C\u5982\u679C\u7528 <code>createRoot</code> \u7684 api\uFF0C\u5C31\u4E0D\u4F1A\u6709\u8FD9\u79CD\u95EE\u9898\u4E86\u3002 <code>setState</code> \u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65\u8FD9\u4E2A\u95EE\u9898\u7B49 react18 \u666E\u53CA\u4EE5\u540E\u5C31\u4E0D\u4F1A\u518D\u6709\u4E86\uFF0C\u56E0\u4E3A\u6240\u6709\u7684 <code>setState</code> \u90FD\u662F\u5F02\u6B65\u6279\u91CF\u6267\u884C\u4E86\u3002</p>',4))])}const _=a(l,[["render",x],["__file","62.html.vue"]]);export{_ as default};

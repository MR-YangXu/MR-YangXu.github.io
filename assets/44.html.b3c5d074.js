const l=JSON.parse('{"key":"v-59b4cdae","path":"/fe/javascript/44.html","title":"\u3010Q044\u3011\u5783\u573E\u56DE\u6536","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"1. \u5783\u573E\u56DE\u6536\u673A\u5236 Garbage Collection","slug":"_1-\u5783\u573E\u56DE\u6536\u673A\u5236-garbage-collection","link":"#_1-\u5783\u573E\u56DE\u6536\u673A\u5236-garbage-collection","children":[]},{"level":2,"title":"2. GC \u7B56\u7565","slug":"_2-gc-\u7B56\u7565","link":"#_2-gc-\u7B56\u7565","children":[]},{"level":2,"title":"3. \u6807\u8BB0\u6E05\u9664\u7B97","slug":"_3-\u6807\u8BB0\u6E05\u9664\u7B97","link":"#_3-\u6807\u8BB0\u6E05\u9664\u7B97","children":[{"level":3,"title":"\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u6D41\u7A0B\uFF1A","slug":"\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u6D41\u7A0B","link":"#\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u6D41\u7A0B","children":[]},{"level":3,"title":"\u4F18\u70B9\uFF1A","slug":"\u4F18\u70B9","link":"#\u4F18\u70B9","children":[]},{"level":3,"title":"\u7F3A\u70B9\uFF1A","slug":"\u7F3A\u70B9","link":"#\u7F3A\u70B9","children":[]}]},{"level":2,"title":"4. \u5F15\u7528\u8BA1\u6570\u7B97\u6CD5","slug":"_4-\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5","link":"#_4-\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5","children":[{"level":3,"title":"\u5B83\u7684\u7B56\u7565\u662F\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570\uFF1A","slug":"\u5B83\u7684\u7B56\u7565\u662F\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570","link":"#\u5B83\u7684\u7B56\u7565\u662F\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570","children":[]},{"level":3,"title":"\u4F18\u70B9\uFF1A","slug":"\u4F18\u70B9-1","link":"#\u4F18\u70B9-1","children":[]},{"level":3,"title":"\u7F3A\u70B9\uFF1A","slug":"\u7F3A\u70B9-1","link":"#\u7F3A\u70B9-1","children":[]}]},{"level":2,"title":"5. V8\u5BF9GC\u7684\u4F18\u5316","slug":"_5-v8\u5BF9gc\u7684\u4F18\u5316","link":"#_5-v8\u5BF9gc\u7684\u4F18\u5316","children":[{"level":3,"title":"\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536\uFF1A","slug":"\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536","link":"#\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536","children":[]},{"level":3,"title":"\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536","slug":"\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536","link":"#\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536","children":[]},{"level":3,"title":"\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536","slug":"\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536","link":"#\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536","children":[]}]},{"level":2,"title":"6. \u5185\u5B58\u6CC4\u9732","slug":"_6-\u5185\u5B58\u6CC4\u9732","link":"#_6-\u5185\u5B58\u6CC4\u9732","children":[{"level":3,"title":"\u4E0D\u6B63\u5F53\u7684\u95ED\u5305","slug":"\u4E0D\u6B63\u5F53\u7684\u95ED\u5305","link":"#\u4E0D\u6B63\u5F53\u7684\u95ED\u5305","children":[]},{"level":3,"title":"\u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF","slug":"\u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF","link":"#\u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF","children":[]},{"level":3,"title":"\u6E38\u79BBDOM\u5F15\u7528","slug":"\u6E38\u79BBdom\u5F15\u7528","link":"#\u6E38\u79BBdom\u5F15\u7528","children":[]},{"level":3,"title":"\u9057\u5FD8\u7684\u5B9A\u65F6\u5668","slug":"\u9057\u5FD8\u7684\u5B9A\u65F6\u5668","link":"#\u9057\u5FD8\u7684\u5B9A\u65F6\u5668","children":[]},{"level":3,"title":"\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668","slug":"\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668","link":"#\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668","children":[]},{"level":3,"title":"\u9057\u5FD8\u7684Map\u3001Set\u5BF9\u8C61","slug":"\u9057\u5FD8\u7684map\u3001set\u5BF9\u8C61","link":"#\u9057\u5FD8\u7684map\u3001set\u5BF9\u8C61","children":[]},{"level":3,"title":"\u672A\u6E05\u7406\u7684console\u8F93\u51FA","slug":"\u672A\u6E05\u7406\u7684console\u8F93\u51FA","link":"#\u672A\u6E05\u7406\u7684console\u8F93\u51FA","children":[]}]},{"level":2,"title":"7. \u5185\u5B58\u81A8\u80C0","slug":"_7-\u5185\u5B58\u81A8\u80C0","link":"#_7-\u5185\u5B58\u81A8\u80C0","children":[]},{"level":2,"title":"8. \u9891\u7E41 GC","slug":"_8-\u9891\u7E41-gc","link":"#_8-\u9891\u7E41-gc","children":[]}],"git":{"updatedTime":1665925747000,"contributors":[{"name":"kangyana","email":"564469630@qq.com","commits":3}]},"filePathRelative":"fe/javascript/44.md"}');export{l as data};

"use strict";(self.webpackChunkcresp_docs=self.webpackChunkcresp_docs||[]).push([[150],{5528:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"matlab-projects","title":"CRESP\u7528\u4e8eMATLAB\u9879\u76ee","description":"\u672c\u6587\u6863\u8bf4\u660e\u5982\u4f55\u5c06CRESP\u534f\u8bae\u4e0eMATLAB\u9879\u76ee\u4e00\u8d77\u4f7f\u7528\uff0c\u4ecb\u7ecd\u7528\u4e8e\u6807\u51c6\u5316MATLAB\u8ba1\u7b97\u73af\u5883\u7684matproject\u683c\u5f0f\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/matlab-projects.md","sourceDirName":".","slug":"/matlab-projects","permalink":"/zh-CN/docs/matlab-projects","draft":false,"unlisted":false,"editUrl":"https://github.com/wisupai/CRESP-DOCS/tree/main/docs/matlab-projects.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"CRESP\u7528\u4e8eR\u9879\u76ee","permalink":"/zh-CN/docs/r-projects"},"next":{"title":"\u8bb8\u53ef\u8bc1","permalink":"/zh-CN/docs/license"}}');var t=s(4848),o=s(8453);const c={sidebar_position:5},i="CRESP\u7528\u4e8eMATLAB\u9879\u76ee",l={},a=[{value:"matproject\u7b80\u4ecb",id:"matproject\u7b80\u4ecb",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u5de5\u5177\u7bb1\u7ba1\u7406",id:"\u5de5\u5177\u7bb1\u7ba1\u7406",level:2},{value:"\u5916\u90e8\u4f9d\u8d56",id:"\u5916\u90e8\u4f9d\u8d56",level:2},{value:"MEX\u6587\u4ef6\u548c\u7f16\u8bd1\u4ee3\u7801",id:"mex\u6587\u4ef6\u548c\u7f16\u8bd1\u4ee3\u7801",level:2},{value:"\u6267\u884c\u914d\u7f6e",id:"\u6267\u884c\u914d\u7f6e",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b",id:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b",level:2},{value:"\u8f6c\u6362\u73b0\u6709MATLAB\u9879\u76ee",id:"\u8f6c\u6362\u73b0\u6709matlab\u9879\u76ee",level:2},{value:"matproject.json\u683c\u5f0f",id:"matprojectjson\u683c\u5f0f",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cresp\u7528\u4e8ematlab\u9879\u76ee",children:"CRESP\u7528\u4e8eMATLAB\u9879\u76ee"})}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u6587\u6863\u8bf4\u660e\u5982\u4f55\u5c06CRESP\u534f\u8bae\u4e0eMATLAB\u9879\u76ee\u4e00\u8d77\u4f7f\u7528\uff0c\u4ecb\u7ecd\u7528\u4e8e\u6807\u51c6\u5316MATLAB\u8ba1\u7b97\u73af\u5883\u7684",(0,t.jsx)(n.code,{children:"matproject"}),"\u683c\u5f0f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"matproject\u7b80\u4ecb",children:"matproject\u7b80\u4ecb"}),"\n",(0,t.jsxs)(n.p,{children:["MATLAB\u4f20\u7edf\u4e0a\u7f3a\u4e4f\u6807\u51c6\u5316\u7684\u9879\u76ee\u914d\u7f6e\u683c\u5f0f\u3002CRESP\u534f\u8bae\u5f15\u5165\u4e86",(0,t.jsx)(n.code,{children:"matproject"}),"\u683c\u5f0f\u6765\u586b\u8865\u8fd9\u4e00\u7a7a\u767d\uff0c\u786e\u4fdd\u57fa\u4e8eMATLAB\u7684\u8ba1\u7b97\u7814\u7a76\u7684\u53ef\u590d\u73b0\u6027\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5982\u4f55\u5728CRESP\u6587\u4ef6\u4e2d\u914d\u7f6eMATLAB\u9879\u76ee\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'###############################################################################\n# MATLAB\u9879\u76ee\u914d\u7f6e\n###############################################################################\n\n[matproject]\nfile = "matproject.json"  # \u53ef\u9009\uff1a\u6307\u5411\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\n\n# \u5982\u679c\u6ca1\u6709\u5f15\u7528\u5916\u90e8\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5305\u542b\u914d\u7f6e\uff1a\nname = "my-matlab-research-project"\nversion = "1.0.0"\ndescription = "\u4f7f\u7528MATLAB\u7684\u53ef\u590d\u73b0\u7814\u7a76\u9879\u76ee"\nauthors = ["\u7814\u7a76\u8005\u59d3\u540d <researcher@example.com>"]\n\n[matproject.matlab]\nversion = "R2022a"  # MATLAB\u7248\u672c\nlicense_type = "Academic"  # \u8bb8\u53ef\u8bc1\u7c7b\u578b\n\n[matproject.toolboxes]\n"Signal Processing Toolbox" = "9.1"\n"Statistics and Machine Learning Toolbox" = "12.3"\n"Image Processing Toolbox" = "11.4"\n"Deep Learning Toolbox" = "14.3"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5de5\u5177\u7bb1\u7ba1\u7406",children:"\u5de5\u5177\u7bb1\u7ba1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"MATLAB\u529f\u80fd\u901a\u8fc7\u5de5\u5177\u7bb1\u6269\u5c55\u3002\u6307\u5b9a\u6240\u9700\u7684\u5de5\u5177\u7bb1\u53ca\u5176\u7248\u672c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[matproject.toolboxes]\n"Signal Processing Toolbox" = "9.1"\n"Statistics and Machine Learning Toolbox" = "12.3"\n"Image Processing Toolbox" = "11.4"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5916\u90e8\u4f9d\u8d56",children:"\u5916\u90e8\u4f9d\u8d56"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5916\u90e8MATLAB\u5305\uff08\u4f8b\u5982\uff0c\u6765\u81eaFile Exchange\u6216GitHub\uff09\uff0c\u6309\u5982\u4e0b\u65b9\u5f0f\u6307\u5b9a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[matproject.external_packages]]\nname = "export_fig"\nsource = "https://github.com/altmany/export_fig"\nversion = "3.21"\nsha256 = "3f786850e387550fdab836ed7e6dc881de23001b2c81f0a1b2c3d4e5f67890ab"\n\n[[matproject.external_packages]]\nname = "gramm"\nsource = "https://github.com/piermorel/gramm"\ncommit = "9f2d3c4b5a6e7f8910da1b2c3d4e5f67890abcde"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"mex\u6587\u4ef6\u548c\u7f16\u8bd1\u4ee3\u7801",children:"MEX\u6587\u4ef6\u548c\u7f16\u8bd1\u4ee3\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u4f7f\u7528MEX\u6587\u4ef6\u6216\u5176\u4ed6\u7f16\u8bd1\u4ee3\u7801\u7684\u9879\u76ee\uff0c\u6307\u5b9a\u7f16\u8bd1\u5668\u8981\u6c42\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[matproject.compiler]\nname = "MinGW-w64 C/C++"  # \u7f16\u8bd1\u5668\u540d\u79f0\nversion = "8.1.0"  # \u7f16\u8bd1\u5668\u7248\u672c\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6267\u884c\u914d\u7f6e",children:"\u6267\u884c\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u6307\u5b9a\u5982\u4f55\u8fd0\u884c\u60a8\u7684MATLAB\u9879\u76ee\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[execution]\nverify_script = "verify_env.m"  # \u9a8c\u8bc1\u73af\u5883\u7684\u811a\u672c\ncommand = "matlab -nodisplay -nosplash -nodesktop -r \\"run(\'main.m\'); exit;\\""  # \u8fd0\u884c\u5b9e\u9a8c\u7684\u547d\u4ee4\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7248\u672c\u56fa\u5b9a"}),"\uff1a\u59cb\u7ec8\u6307\u5b9a\u786e\u5207\u7684MATLAB\u548c\u5de5\u5177\u7bb1\u7248\u672c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u8def\u5f84\u7ba1\u7406"}),"\uff1a\u5728MATLAB\u811a\u672c\u4e2d\u4f7f\u7528\u9002\u5f53\u7684\u8def\u5f84\u7ba1\u7406"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u968f\u673a\u79cd\u5b50\u63a7\u5236"}),"\uff1a\u8bbe\u7f6e\u5168\u5c40\u548c\u5c40\u90e8\u968f\u673a\u79cd\u5b50"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u6587\u6863"}),"\uff1a\u5305\u542b\u5173\u4e8e\u5982\u4f55\u8fd0\u884c\u5b9e\u9a8c\u7684\u8be6\u7ec6\u6587\u6863"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u542f\u52a8\u811a\u672c"}),"\uff1a\u5305\u542bstartup.m\u6587\u4ef6\u4ee5\u914d\u7f6eMATLAB\u73af\u5883"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b",children:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528CRESP\u7684\u5178\u578bMATLAB\u9879\u76ee\u53ef\u80fd\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"my-matlab-research-project/\n\u251c\u2500\u2500 cresp.toml              # CRESP\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 matproject.json         # MATLAB\u9879\u76ee\u914d\u7f6e\uff08\u53ef\u9009\uff09\n\u251c\u2500\u2500 README.md               # \u9879\u76ee\u6587\u6863\n\u251c\u2500\u2500 data/                   # \u6570\u636e\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 raw/                # \u539f\u59cb\u6570\u636e\n\u2502   \u2514\u2500\u2500 processed/          # \u5904\u7406\u540e\u7684\u6570\u636e\n\u251c\u2500\u2500 src/                    # \u6e90\u4ee3\u7801\n\u2502   \u251c\u2500\u2500 +utils/             # MATLAB\u5de5\u5177\u5305\n\u2502   \u251c\u2500\u2500 data_processing.m\n\u2502   \u251c\u2500\u2500 models.m\n\u2502   \u2514\u2500\u2500 visualization.m\n\u251c\u2500\u2500 lib/                    # \u5916\u90e8\u5e93\n\u2502   \u2514\u2500\u2500 export_fig/         # \u5916\u90e8MATLAB\u5305\n\u251c\u2500\u2500 mex/                    # MEX\u6587\u4ef6\n\u2502   \u2514\u2500\u2500 fast_algorithm.c    # MEX\u6587\u4ef6\u7684C\u6e90\u4ee3\u7801\n\u251c\u2500\u2500 tests/                  # \u6d4b\u8bd5\n\u2502   \u2514\u2500\u2500 test_models.m\n\u251c\u2500\u2500 verify_env.m            # \u73af\u5883\u9a8c\u8bc1\u811a\u672c\n\u251c\u2500\u2500 startup.m               # MATLAB\u542f\u52a8\u811a\u672c\n\u2514\u2500\u2500 main.m                  # \u4e3b\u5b9e\u9a8c\u811a\u672c\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8f6c\u6362\u73b0\u6709matlab\u9879\u76ee",children:"\u8f6c\u6362\u73b0\u6709MATLAB\u9879\u76ee"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5c06\u73b0\u6709MATLAB\u9879\u76ee\u8f6c\u6362\u4e3a\u4f7f\u7528CRESP\u534f\u8bae\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e2d\u521b\u5efa",(0,t.jsx)(n.code,{children:"cresp.toml"}),"\u6587\u4ef6"]}),"\n",(0,t.jsx)(n.li,{children:"\u6307\u5b9aMATLAB\u7248\u672c\u548c\u6240\u9700\u5de5\u5177\u7bb1"}),"\n",(0,t.jsx)(n.li,{children:"\u5217\u51fa\u5916\u90e8\u4f9d\u8d56\u9879"}),"\n",(0,t.jsx)(n.li,{children:"\u6dfb\u52a0\u6267\u884c\u914d\u7f6e"}),"\n",(0,t.jsx)(n.li,{children:"\u6dfb\u52a0\u786c\u4ef6\u8981\u6c42"}),"\n",(0,t.jsx)(n.li,{children:"\u6dfb\u52a0\u6570\u636e\u96c6\u4fe1\u606f"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"matprojectjson\u683c\u5f0f",children:"matproject.json\u683c\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5e0c\u671b\u5c06MATLAB\u7279\u5b9a\u914d\u7f6e\u4fdd\u6301\u5206\u79bb\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"matproject.json"}),"\u6587\u4ef6\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "my-matlab-research-project",\n  "version": "1.0.0",\n  "description": "\u4f7f\u7528MATLAB\u7684\u53ef\u590d\u73b0\u7814\u7a76\u9879\u76ee",\n  "authors": ["\u7814\u7a76\u8005\u59d3\u540d <researcher@example.com>"],\n  "matlab": {\n    "version": "R2022a",\n    "license_type": "Academic"\n  },\n  "toolboxes": {\n    "Signal Processing Toolbox": "9.1",\n    "Statistics and Machine Learning Toolbox": "12.3",\n    "Image Processing Toolbox": "11.4"\n  },\n  "external_packages": [\n    {\n      "name": "export_fig",\n      "source": "https://github.com/altmany/export_fig",\n      "version": "3.21"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u9075\u5faa\u8fd9\u4e9b\u6307\u5357\uff0c\u60a8\u53ef\u4ee5\u786e\u4fdd\u57fa\u4e8eMATLAB\u7684\u8ba1\u7b97\u7814\u7a76\u4f7f\u7528CRESP\u534f\u8bae\u5b8c\u5168\u53ef\u590d\u73b0\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
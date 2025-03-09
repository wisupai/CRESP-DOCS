"use strict";(self.webpackChunkcresp_docs=self.webpackChunkcresp_docs||[]).push([[298],{8011:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"r-projects","title":"CRESP\u7528\u4e8eR\u9879\u76ee","description":"\u672c\u6587\u6863\u8bf4\u660e\u5982\u4f55\u5c06CRESP\u534f\u8bae\u4e0eR\u9879\u76ee\u4e00\u8d77\u4f7f\u7528\uff0c\u4ecb\u7ecd\u7528\u4e8e\u6807\u51c6\u5316R\u8ba1\u7b97\u73af\u5883\u7684rproject\u683c\u5f0f\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/r-projects.md","sourceDirName":".","slug":"/r-projects","permalink":"/zh-CN/docs/r-projects","draft":false,"unlisted":false,"editUrl":"https://github.com/wisupai/CRESP-DOCS/tree/main/docs/r-projects.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"CRESP\u7528\u4e8ePython\u9879\u76ee","permalink":"/zh-CN/docs/python-projects"},"next":{"title":"CRESP\u7528\u4e8eMATLAB\u9879\u76ee","permalink":"/zh-CN/docs/matlab-projects"}}');var s=r(4848),i=r(8453);const t={sidebar_position:4},l="CRESP\u7528\u4e8eR\u9879\u76ee",o={},d=[{value:"rproject\u7b80\u4ecb",id:"rproject\u7b80\u4ecb",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u73af\u5883\u7ba1\u7406",id:"\u73af\u5883\u7ba1\u7406",level:2},{value:"\u4f7f\u7528renv",id:"\u4f7f\u7528renv",level:3},{value:"\u4f7f\u7528packrat",id:"\u4f7f\u7528packrat",level:3},{value:"\u76f4\u63a5\u4f9d\u8d56\u9879\u89c4\u8303",id:"\u76f4\u63a5\u4f9d\u8d56\u9879\u89c4\u8303",level:3},{value:"CRAN\u548cBioconductor\u4ed3\u5e93",id:"cran\u548cbioconductor\u4ed3\u5e93",level:2},{value:"\u6267\u884c\u914d\u7f6e",id:"\u6267\u884c\u914d\u7f6e",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b",id:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b",level:2},{value:"\u8f6c\u6362\u73b0\u6709R\u9879\u76ee",id:"\u8f6c\u6362\u73b0\u6709r\u9879\u76ee",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cresp\u7528\u4e8er\u9879\u76ee",children:"CRESP\u7528\u4e8eR\u9879\u76ee"})}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u6587\u6863\u8bf4\u660e\u5982\u4f55\u5c06CRESP\u534f\u8bae\u4e0eR\u9879\u76ee\u4e00\u8d77\u4f7f\u7528\uff0c\u4ecb\u7ecd\u7528\u4e8e\u6807\u51c6\u5316R\u8ba1\u7b97\u73af\u5883\u7684",(0,s.jsx)(n.code,{children:"rproject"}),"\u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"rproject\u7b80\u4ecb",children:"rproject\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:["\u867d\u7136R\u4f20\u7edf\u4e0a\u4f7f\u7528DESCRIPTION\u6587\u4ef6\u6765\u5b58\u50a8\u5305\u5143\u6570\u636e\uff0c\u4f46CRESP\u534f\u8bae\u5f15\u5165\u4e86\u66f4\u5168\u9762\u7684",(0,s.jsx)(n.code,{children:"rproject"}),"\u683c\u5f0f\uff0c\u6269\u5c55\u4e86\u8fd9\u4e00\u529f\u80fd\uff0c\u4ee5\u786e\u4fdd\u57fa\u4e8eR\u7684\u8ba1\u7b97\u7814\u7a76\u7684\u53ef\u590d\u73b0\u6027\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5982\u4f55\u5728CRESP\u6587\u4ef6\u4e2d\u914d\u7f6eR\u9879\u76ee\u7684\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'###############################################################################\n# R\u9879\u76ee\u914d\u7f6e\n###############################################################################\n\n[rproject]\nfile = "DESCRIPTION"  # \u53ef\u9009\uff1a\u6307\u5411\u73b0\u6709\u7684DESCRIPTION\u6587\u4ef6\n\n# \u5982\u679c\u6ca1\u6709\u5f15\u7528\u5916\u90e8DESCRIPTION\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5305\u542b\u914d\u7f6e\uff1a\nname = "my-r-research-project"\nversion = "0.1.0"\ndescription = "\u4f7f\u7528R\u7684\u53ef\u590d\u73b0\u7814\u7a76\u9879\u76ee"\nauthors = ["\u7814\u7a76\u8005\u59d3\u540d <researcher@example.com>"]\n\n[rproject.dependencies]\nR = "^4.1.0"\ntidyverse = "^1.3.1"\nggplot2 = "^3.3.5"\ndplyr = "^1.0.7"\ncaret = "^6.0.90"\nrandomForest = "^4.6.14"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u7ba1\u7406",children:"\u73af\u5883\u7ba1\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8eR\u9879\u76ee\uff0cCRESP\u652f\u6301\u591a\u79cd\u73af\u5883\u7ba1\u7406\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528renv",children:"\u4f7f\u7528renv"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://rstudio.github.io/renv/",children:"renv"}),"\u662fR\u9879\u76ee\u7684\u4f9d\u8d56\u7ba1\u7406\u5de5\u5177\u3002\u60a8\u53ef\u4ee5\u5728CRESP\u914d\u7f6e\u4e2d\u6307\u5b9arenv.lock\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[rproject.renv]\nlockfile = "renv.lock"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528packrat",children:"\u4f7f\u7528packrat"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4f7f\u7528",(0,s.jsx)(n.a,{href:"https://rstudio.github.io/packrat/",children:"packrat"}),"\u7684\u9879\u76ee\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9apackrat\u76ee\u5f55\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[rproject.packrat]\ndirectory = "packrat"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u76f4\u63a5\u4f9d\u8d56\u9879\u89c4\u8303",children:"\u76f4\u63a5\u4f9d\u8d56\u9879\u89c4\u8303"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728CRESP\u6587\u4ef6\u4e2d\u6307\u5b9a\u4f9d\u8d56\u9879\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[rproject.dependencies]\nR = "^4.1.0"\ntidyverse = "^1.3.1"\nggplot2 = "^3.3.5"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"cran\u548cbioconductor\u4ed3\u5e93",children:"CRAN\u548cBioconductor\u4ed3\u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u7528\u4e8e\u5305\u5b89\u88c5\u7684\u4ed3\u5e93\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[rproject.repositories]\nCRAN = "https://cloud.r-project.org"\nBioconductor = "https://bioconductor.org/packages/release/bioc"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6267\u884c\u914d\u7f6e",children:"\u6267\u884c\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u5982\u4f55\u8fd0\u884c\u60a8\u7684R\u9879\u76ee\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[execution]\nverify_script = "verify_env.R"  # \u9a8c\u8bc1\u73af\u5883\u7684\u811a\u672c\ncommand = "Rscript main.R --config config.json"  # \u8fd0\u884c\u5b9e\u9a8c\u7684\u547d\u4ee4\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7248\u672c\u56fa\u5b9a"}),"\uff1a\u59cb\u7ec8\u56fa\u5b9aR\u5305\u7684\u786e\u5207\u7248\u672c\u4ee5\u786e\u4fdd\u53ef\u590d\u73b0\u6027"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u73af\u5883\u9694\u79bb"}),"\uff1a\u4f7f\u7528renv\u6216packrat\u8fdb\u884c\u73af\u5883\u9694\u79bb"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u968f\u673a\u79cd\u5b50\u63a7\u5236"}),"\uff1a\u8bbe\u7f6e\u5168\u5c40\u548c\u5c40\u90e8\u968f\u673a\u79cd\u5b50"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6587\u6863"}),"\uff1a\u5305\u542b\u5173\u4e8e\u5982\u4f55\u8fd0\u884c\u5b9e\u9a8c\u7684\u8be6\u7ec6\u6587\u6863"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4f1a\u8bdd\u4fe1\u606f"}),"\uff1a\u5728\u6587\u6863\u4e2d\u5305\u542bR\u4f1a\u8bdd\u4fe1\u606f"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b",children:"\u9879\u76ee\u7ed3\u6784\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528CRESP\u7684\u5178\u578bR\u9879\u76ee\u53ef\u80fd\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"my-r-research-project/\n\u251c\u2500\u2500 cresp.toml              # CRESP\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 DESCRIPTION             # R\u5305\u63cf\u8ff0\u6587\u4ef6\n\u251c\u2500\u2500 README.md               # \u9879\u76ee\u6587\u6863\n\u251c\u2500\u2500 data/                   # \u6570\u636e\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 raw/                # \u539f\u59cb\u6570\u636e\n\u2502   \u2514\u2500\u2500 processed/          # \u5904\u7406\u540e\u7684\u6570\u636e\n\u251c\u2500\u2500 R/                      # R\u6e90\u4ee3\u7801\n\u2502   \u251c\u2500\u2500 data_processing.R\n\u2502   \u251c\u2500\u2500 models.R\n\u2502   \u2514\u2500\u2500 visualization.R\n\u251c\u2500\u2500 analysis/               # \u5206\u6790\u811a\u672c\n\u2502   \u2514\u2500\u2500 analysis.Rmd        # R Markdown\u5206\u6790\n\u251c\u2500\u2500 tests/                  # \u6d4b\u8bd5\n\u2502   \u2514\u2500\u2500 testthat/           # testthat\u6d4b\u8bd5\n\u251c\u2500\u2500 renv/                   # renv\u76ee\u5f55\uff08\u5982\u679c\u4f7f\u7528renv\uff09\n\u2502   \u2514\u2500\u2500 renv.lock           # renv\u9501\u5b9a\u6587\u4ef6\n\u251c\u2500\u2500 verify_env.R            # \u73af\u5883\u9a8c\u8bc1\u811a\u672c\n\u2514\u2500\u2500 main.R                  # \u4e3b\u5b9e\u9a8c\u811a\u672c\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6c\u6362\u73b0\u6709r\u9879\u76ee",children:"\u8f6c\u6362\u73b0\u6709R\u9879\u76ee"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u5c06\u73b0\u6709R\u9879\u76ee\u8f6c\u6362\u4e3a\u4f7f\u7528CRESP\u534f\u8bae\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e2d\u521b\u5efa",(0,s.jsx)(n.code,{children:"cresp.toml"}),"\u6587\u4ef6"]}),"\n",(0,s.jsx)(n.li,{children:"\u5f15\u7528\u73b0\u6709\u7684DESCRIPTION\u6587\u4ef6\u6216\u76f4\u63a5\u6307\u5b9a\u4f9d\u8d56\u9879"}),"\n",(0,s.jsx)(n.li,{children:"\u6dfb\u52a0\u6267\u884c\u914d\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u6dfb\u52a0\u786c\u4ef6\u548c\u8f6f\u4ef6\u8981\u6c42"}),"\n",(0,s.jsx)(n.li,{children:"\u6dfb\u52a0\u6570\u636e\u96c6\u4fe1\u606f"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u9075\u5faa\u8fd9\u4e9b\u6307\u5357\uff0c\u60a8\u53ef\u4ee5\u786e\u4fdd\u57fa\u4e8eR\u7684\u8ba1\u7b97\u7814\u7a76\u4f7f\u7528CRESP\u534f\u8bae\u5b8c\u5168\u53ef\u590d\u73b0\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var c=r(6540);const s={},i=c.createContext(s);function t(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);
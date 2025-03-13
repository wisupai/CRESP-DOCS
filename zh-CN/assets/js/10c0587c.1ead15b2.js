"use strict";(self.webpackChunkcresp_docs=self.webpackChunkcresp_docs||[]).push([[508],{8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(i.Provider,{value:e},n.children)}},9633:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"cresp-format","title":"CRESP\u534f\u8bae\u683c\u5f0f","description":"\u8ba1\u7b97\u7814\u7a76\u73af\u5883\u6807\u51c6\u5316\u534f\u8bae\uff08CRESP\uff09\u65e8\u5728\u786e\u4fdd\u8de8\u4e0d\u540c\u7814\u7a76\u9886\u57df\u7684\u8ba1\u7b97\u5b9e\u9a8c\u7684\u53ef\u590d\u73b0\u6027\u3002\u672c\u6587\u6863\u6982\u8ff0\u4e86CRESP\u534f\u8bae\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\u548c\u7ed3\u6784\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cresp-format.md","sourceDirName":".","slug":"/cresp-format","permalink":"/zh-CN/docs/cresp-format","draft":false,"unlisted":false,"editUrl":"https://github.com/wisupai/CRESP-DOCS/tree/main/docs/cresp-format.md","tags":[],"version":"current","lastUpdatedBy":"Jing-yilin","lastUpdatedAt":1741536660000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u4e3a\u4ec0\u4e48\u9009\u62e9CRESP\uff1f","permalink":"/zh-CN/docs/why-cresp"},"next":{"title":"CRESP\u7528\u4e8ePython\u9879\u76ee","permalink":"/zh-CN/docs/python-projects"}}');var t=r(4848),i=r(8453);const o={sidebar_position:2},c="CRESP\u534f\u8bae\u683c\u5f0f",l={},a=[{value:"CRESP\u914d\u7f6e\u793a\u4f8b",id:"cresp\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u683c\u5f0f\u8bf4\u660e",id:"\u683c\u5f0f\u8bf4\u660e",level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"cresp\u534f\u8bae\u683c\u5f0f",children:"CRESP\u534f\u8bae\u683c\u5f0f"})}),"\n",(0,t.jsx)(e.p,{children:"\u8ba1\u7b97\u7814\u7a76\u73af\u5883\u6807\u51c6\u5316\u534f\u8bae\uff08CRESP\uff09\u65e8\u5728\u786e\u4fdd\u8de8\u4e0d\u540c\u7814\u7a76\u9886\u57df\u7684\u8ba1\u7b97\u5b9e\u9a8c\u7684\u53ef\u590d\u73b0\u6027\u3002\u672c\u6587\u6863\u6982\u8ff0\u4e86CRESP\u534f\u8bae\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\u548c\u7ed3\u6784\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"cresp\u914d\u7f6e\u793a\u4f8b",children:"CRESP\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0b\u662fTOML\u683c\u5f0f\u7684CRESP\u914d\u7f6e\u6587\u4ef6\u7684\u7efc\u5408\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'###############################################################################\n# CRESP\u534f\u8bae\u914d\u7f6e\n###############################################################################\n\n# \u534f\u8bae\u7248\u672c\u548c\u57fa\u672c\u4fe1\u606f\ncresp_version = "1.0"          # CRESP\u534f\u8bae\u7248\u672c\nauthor = "John Smith"\nemail = "john.smith@example.com"\ndate = "2025-03-09"            # \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u65e5\u671f\n\n###############################################################################\n# \u5b9e\u9a8c\u57fa\u672c\u4fe1\u606f\n###############################################################################\n\nexperiment_name = "\u56fe\u50cf\u5206\u7c7b\u6a21\u578b\u8bad\u7ec3\u5b9e\u9a8c"\ndescription = "\u5728MNIST\u6570\u636e\u96c6\u4e0a\u8bad\u7ec3\u548c\u8bc4\u4f30\u81ea\u5b9a\u4e49\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u8fdb\u884c\u56fe\u50cf\u5206\u7c7b\u3002"\n\n###############################################################################\n# \u786c\u4ef6\u914d\u7f6e\n###############################################################################\n\n[hardware]\nCPU = "Intel Xeon Silver 4114, 2.2GHz, 10 cores"    # \u6700\u4f4e\u786c\u4ef6\u8981\u6c42\nGPU = "NVIDIA Tesla V100, 16GB x1"\nRAM = "64GB"\n\n###############################################################################\n# \u8f6f\u4ef6\u73af\u5883\u914d\u7f6e\n###############################################################################\n\n[software]\nos = "Ubuntu 20.04.5 LTS"    # \u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\n\n[[software.packages]]\nname = "Python"\nversion = "3.8.13"\nsource = "pip"\nhash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"\n\n[[software.packages]]\nname = "PyTorch"\nversion = "1.10.2"\nsource = "pip"\nhash = "3f786850e387550fdab836ed7e6dc881de23001b2c81f"\n\n###############################################################################\n# Python\u9879\u76ee\u914d\u7f6e\uff08\u517c\u5bb9pyproject.toml\uff09\n###############################################################################\n\n[pyproject]\nfile = "pyproject.toml"  # \u6307\u5411\u9879\u76ee\u4e2d\u73b0\u6709\u7684pyproject.toml\u6587\u4ef6\n\n[pyproject.build-system]\nrequires = ["poetry-core>=1.0.0"]\nbuild-backend = "poetry.core.masonry.api"\n\n[pyproject.tool.poetry]\nname = "vision-classifier"\nversion = "0.1.0"\ndescription = "\u57fa\u4e8eCNN\u7684MNIST\u6570\u636e\u96c6\u56fe\u50cf\u5206\u7c7b\u5668\u3002"\nauthors = ["John Smith <john.smith@example.com>"]\n\n[pyproject.tool.poetry.dependencies]\npython = "^3.8"\ntorch = "^1.10.2"\n# ...\u5176\u4ed6\u4f9d\u8d56\u9879\n\n###############################################################################\n# R\u9879\u76ee\u914d\u7f6e\uff08rproject\uff09\n###############################################################################\n\n[rproject]\n# \u6307\u5411R\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\uff0c\u5982DESCRIPTION\nfile = "DESCRIPTION"\nname = "r-vision-classifier"\nversion = "1.0.0"\ndescription = "\u7528R\u5b9e\u73b0\u7684\u57fa\u4e8eCNN\u7684MNIST\u56fe\u50cf\u5206\u7c7b\u9879\u76ee\u3002"\nauthors = ["John Smith <john.smith@example.com>"]\n\n###############################################################################\n# MATLAB\u9879\u76ee\u914d\u7f6e\uff08matproject\uff09\n###############################################################################\n\n[matproject]\n# \u6307\u5411MATLAB\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\uff0c\u683c\u5f0f\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u5982JSON\u6216\u5176\u4ed6\u7ed3\u6784\nfile = "matproject.json"\nname = "mat-vision-classifier"\nversion = "1.0"\ndescription = "\u57fa\u4e8eMATLAB\u7684\u56fe\u50cf\u5206\u7c7b\u9879\u76ee\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49CNN\u5728MNIST\u6570\u636e\u96c6\u4e0a\u3002"\nauthors = ["John Smith <john.smith@example.com>"]\n\n###############################################################################\n# \u5168\u5c40\u968f\u673a\u79cd\u5b50\u8bbe\u7f6e\n###############################################################################\n\nrandom_seed = 12345\n\n###############################################################################\n# \u6570\u636e\u96c6\u914d\u7f6e\n###############################################################################\n\n[[data]]\nname = "\u8bad\u7ec3\u96c6\uff08MNIST\uff09"\nsource = "https://storage.googleapis.com/cresp-examples/mnist_train.csv"\nsha256 = "3f786850e387550fdab836ed7e6dc881de23001b2c81f0a1b2c3d4e5f67890ab"\n\n###############################################################################\n# \u5b9e\u9a8c\u6267\u884c\u914d\u7f6e\n###############################################################################\n\n[execution]\nverify_script = "verify_env.py"   # \u73af\u5883\u9a8c\u8bc1\u811a\u672c\ncommand = "python train_model.py --epochs 5 --output model.pth"  # \u542f\u52a8\u5b9e\u9a8c\u7684\u547d\u4ee4\n\n###############################################################################\n# \u7248\u672c\u548c\u4ed3\u5e93\u4fe1\u606f\n###############################################################################\n\n[version]\nrepo = "https://github.com/example-research/vision-classifier.git"\ncommit = "9f2d3c4b5a6e7f8910da1b2c3d4e5f67890abcde"\n\n###############################################################################\n# \u865a\u62df\u5316\u548c\u90e8\u7f72\u914d\u7f6e\n###############################################################################\n\n[virtualization]\nvm_image = "ubuntu-20.04-lts.img"     # \u865a\u62df\u673a\u955c\u50cf\u6587\u4ef6\nstartup_script = "init_experiment.sh"  # \u865a\u62df\u673a\u542f\u52a8\u540e\u6267\u884c\u7684\u521d\u59cb\u5316\u811a\u672c\n\n[virtualization.resources]\ncpu = "8"                   # \u5206\u914d\u7684CPU\u6570\u91cf\nmemory = "32GB"             # \u5206\u914d\u7684\u5185\u5b58\u5927\u5c0f\nstorage = "200GB"           # \u5206\u914d\u7684\u5b58\u50a8\u7a7a\u95f4\n\n[virtualization.resources.gpu]\nmodel = "NVIDIA Tesla V100"\ncount = 1\n\n[virtualization.network]\npublic_ip = true           # \u662f\u5426\u5206\u914d\u516c\u5171IP\nbandwidth = "1Gbps"        # \u7f51\u7edc\u5e26\u5bbd\u8981\u6c42\n\n[virtualization.auto_scaling]\nenable = true              # \u662f\u5426\u542f\u7528\u81ea\u52a8\u6269\u5c55\nmax_instances = 5          # \u6700\u5927\u865a\u62df\u673a\u5b9e\u4f8b\u6570\nscaling_policy = "\u57fa\u4e8e\u8d1f\u8f7d\u7684\u81ea\u52a8\u6269\u5c55"\n\n###############################################################################\n# \u9879\u76ee\u94fe\u63a5\uff08\u9879\u76ee\u4e3b\u9875\u6216\u4ed3\u5e93\u5165\u53e3\uff09\n###############################################################################\n\nproject_url = "https://github.com/example-research/vision-classifier"\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u683c\u5f0f\u8bf4\u660e",children:"\u683c\u5f0f\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"CRESP\u534f\u8bae\u4f7f\u7528TOML\u683c\u5f0f\u4ee5\u6807\u51c6\u5316\u65b9\u5f0f\u63cf\u8ff0\u8ba1\u7b97\u5b9e\u9a8c\u3002\u914d\u7f6e\u6587\u4ef6\u5206\u4e3a\u51e0\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u57fa\u672c\u4fe1\u606f"}),"\uff1a\u534f\u8bae\u7248\u672c\u3001\u4f5c\u8005\u8be6\u60c5\u548c\u521b\u5efa\u65e5\u671f"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u5b9e\u9a8c\u4fe1\u606f"}),"\uff1a\u5b9e\u9a8c\u7684\u540d\u79f0\u548c\u63cf\u8ff0"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u786c\u4ef6\u914d\u7f6e"}),"\uff1a\u590d\u73b0\u5b9e\u9a8c\u7684\u6700\u4f4e\u786c\u4ef6\u8981\u6c42"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u8f6f\u4ef6\u73af\u5883"}),"\uff1a\u64cd\u4f5c\u7cfb\u7edf\u548c\u5177\u6709\u7279\u5b9a\u7248\u672c\u7684\u5305\u4f9d\u8d56"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u9879\u76ee\u914d\u7f6e"}),"\uff1a\u517c\u5bb9\u5404\u79cd\u7279\u5b9a\u8bed\u8a00\u7684\u9879\u76ee\u683c\u5f0f","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Python\u9879\u76ee\uff08pyproject.toml\uff09"}),"\n",(0,t.jsx)(e.li,{children:"R\u9879\u76ee\uff08rproject\uff09"}),"\n",(0,t.jsx)(e.li,{children:"MATLAB\u9879\u76ee\uff08matproject\uff09"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u968f\u673a\u79cd\u5b50"}),"\uff1a\u7528\u4e8e\u53ef\u590d\u73b0\u6027\u7684\u5168\u5c40\u968f\u673a\u79cd\u5b50"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u6570\u636e\u96c6\u914d\u7f6e"}),"\uff1a\u6570\u636e\u96c6\u7684\u6765\u6e90\u548c\u9a8c\u8bc1\u54c8\u5e0c\u503c"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u6267\u884c\u914d\u7f6e"}),"\uff1a\u8fd0\u884c\u5b9e\u9a8c\u7684\u547d\u4ee4\u548c\u811a\u672c"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u7248\u672c\u63a7\u5236"}),"\uff1a\u4ed3\u5e93\u548c\u63d0\u4ea4\u4fe1\u606f"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u865a\u62df\u5316"}),"\uff1a\u7528\u4e8e\u4e91\u90e8\u7f72\u7684\u865a\u62df\u673a\u914d\u7f6e"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u517c\u5bb9\u6027",children:"\u517c\u5bb9\u6027"}),"\n",(0,t.jsx)(e.p,{children:"CRESP\u534f\u8bae\u8bbe\u8ba1\u4e3a\u4e0e\u73b0\u6709\u9879\u76ee\u914d\u7f6e\u683c\u5f0f\u517c\u5bb9\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5bf9\u4e8ePython\u9879\u76ee\uff0c\u5b83\u53ef\u4ee5\u5f15\u7528\u73b0\u6709\u7684pyproject.toml\u6587\u4ef6"}),"\n",(0,t.jsx)(e.li,{children:"\u5bf9\u4e8eR\u9879\u76ee\uff0c\u5b83\u53ef\u4ee5\u5f15\u7528DESCRIPTION\u6587\u4ef6"}),"\n",(0,t.jsx)(e.li,{children:"\u5bf9\u4e8eMATLAB\u9879\u76ee\uff0c\u5b83\u53ef\u4ee5\u5f15\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u786e\u4fdd\u7814\u7a76\u4eba\u5458\u53ef\u4ee5\u8f7b\u677e\u91c7\u7528CRESP\u534f\u8bae\uff0c\u800c\u65e0\u9700\u5bf9\u73b0\u6709\u5de5\u4f5c\u6d41\u7a0b\u8fdb\u884c\u91cd\u5927\u66f4\u6539\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}}}]);
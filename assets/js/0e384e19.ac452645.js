"use strict";(self.webpackChunkcresp_docs=self.webpackChunkcresp_docs||[]).push([[3976],{7879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"intro","title":"Introduction to CRESP","description":"What is CRESP?","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/wisupai/CRESP-DOCS/tree/main/docs/intro.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"tutorialSidebar","next":{"title":"Why CRESP?","permalink":"/docs/why-cresp"}}');var r=i(4848),s=i(8453);const o={sidebar_position:0},a="Introduction to CRESP",c={},l=[{value:"What is CRESP?",id:"what-is-cresp",level:2},{value:"The Problem CRESP Solves",id:"the-problem-cresp-solves",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"How to Use This Documentation",id:"how-to-use-this-documentation",level:2},{value:"About the Project",id:"about-the-project",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introduction-to-cresp",children:"Introduction to CRESP"})}),"\n",(0,r.jsx)(n.h2,{id:"what-is-cresp",children:"What is CRESP?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CRESP"})," (Computational Research Environment Standardization Protocol) is an open standard designed to ensure reproducibility in computational research across various disciplines. It provides a comprehensive framework for describing computational experiments, making them easier to reproduce, share, and build upon."]}),"\n",(0,r.jsx)(n.h2,{id:"the-problem-cresp-solves",children:"The Problem CRESP Solves"}),"\n",(0,r.jsx)(n.p,{children:"Computational research faces a significant reproducibility challenge. Despite being digital in nature, reproducing computational experiments from published research is often difficult due to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Inconsistent environment configurations"}),"\n",(0,r.jsx)(n.li,{children:"Complex dependency chains"}),"\n",(0,r.jsx)(n.li,{children:"Incomplete documentation"}),"\n",(0,r.jsx)(n.li,{children:"Poor random seed management"}),"\n",(0,r.jsx)(n.li,{children:"Limited data availability"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"CRESP addresses these challenges by standardizing how computational environments and experiments are described."}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-Language Support"}),": Works with Python, R, MATLAB, and other computational environments"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Comprehensive Environment Description"}),": Captures hardware, software, and data dependencies"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Execution Standardization"}),": Provides clear instructions for running experiments"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Virtualization Support"}),": Facilitates deployment in virtual environments and containers"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Compatibility"}),": Works with existing project structures and configuration files"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Open Source"}),": Licensed under the permissive ",(0,r.jsx)(n.a,{href:"./license",children:"MIT License"}),", allowing for broad adoption and modification"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.p,{children:"CRESP uses the TOML format to describe computational experiments. A basic CRESP configuration file includes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'# Basic CRESP configuration\ncresp_version = "1.0"\nauthor = "Researcher Name"\nemail = "researcher@example.com"\n\nexperiment_name = "My Computational Experiment"\ndescription = "A brief description of the experiment"\n\n[hardware]\nCPU = "Intel Core i7, 3.2GHz, 8 cores"\nGPU = "NVIDIA RTX 3080, 10GB"\nRAM = "32GB"\n\n[software]\nos = "Ubuntu 20.04 LTS"\n\n# ... additional configuration ...\n'})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use-this-documentation",children:"How to Use This Documentation"}),"\n",(0,r.jsx)(n.p,{children:"This documentation provides comprehensive information about the CRESP protocol:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./why-cresp",children:"Why CRESP?"})}),": Understand the importance of reproducibility in computational research"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./cresp-format",children:"CRESP Format"})}),": Learn about the structure and components of the CRESP protocol"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Language-specific guides"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./python-projects",children:"Python Projects"})}),": Using CRESP with Python"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./r-projects",children:"R Projects"})}),": Using CRESP with R"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./matlab-projects",children:"MATLAB Projects"})}),": Using CRESP with MATLAB"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"./license",children:"License"})}),": Information about the MIT License that CRESP is released under"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"about-the-project",children:"About the Project"}),"\n",(0,r.jsx)(n.p,{children:"CRESP is part of the Rescience Lab product by Wisup AI Ltd. The protocol is designed to support researchers in computational science and cross-disciplinary fields, including bioinformatics, medical informatics, geoinformatics, quantitative finance, computational physics, computational chemistry, and more."}),"\n",(0,r.jsx)(n.p,{children:"Our goal is to address the challenges faced by researchers who use computational methods but may lack strong programming backgrounds. By standardizing computational environments, CRESP helps researchers focus on their domain expertise rather than struggling with technical configuration issues."}),"\n",(0,r.jsx)(n.p,{children:"Join us in making computational research more reproducible, accessible, and impactful."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1876:(e,t,a)=>{Promise.resolve().then(a.bind(a,3706))},3706:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(5155),l=a(2115);function c(e,t){return Math.floor(Math.random()*(t-e+1)+e)}let i=e=>{let{onClick:t}=e,a=["./1.gif","./2.png","./3.gif","./4.gif","./5.gif","./6.gif","./7.gif","./8.gif","./9.gif","./10.gif"],[i,n]=(0,l.useState)({bottom:"0",right:"0",transform:"none",maxWidth:"0"}),[r,o]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=c(0,100),t=c(0,100);n({bottom:t+"%",right:e+"%",transform:"translate(".concat(e,"%,").concat(t,"%)"),maxWidth:"calc(var(--spacing)*".concat(c(35,60),")")}),o(a[c(0,a.length-1)])},[]),(0,s.jsx)("div",{className:"grow flex flex-wrap justify-end items-end",children:(0,s.jsx)("div",{className:"grow h-fit relative",style:i,onClick:()=>{let e=c(0,100),s=c(0,100);n({bottom:s+"%",right:e+"%",transform:"translate(".concat(e,"%,").concat(s,"%)"),maxWidth:"calc(var(--spacing)*".concat(c(25,40),")")}),o(a[c(0,a.length-1)]),t()},children:""==r?"":(0,s.jsx)("img",{src:r,alt:"cat",width:1e3,height:1e3,draggable:!1})})})};function n(){let[e,t]=(0,l.useState)(0);return(0,s.jsx)("main",{className:"max-w-6xl mx-auto h-screen",children:(0,s.jsxs)("div",{className:"flex flex-wrap flex-col gap-4 py-5 h-full",children:[(0,s.jsxs)("div",{className:"h-fit flex",children:[(0,s.jsx)("div",{className:"absolute self-center",children:(0,s.jsxs)("h1",{children:["Point: ",e]})}),(0,s.jsx)("h1",{className:"grow text-center text-4xl font-bold",children:"Click the cats!"})]}),(0,s.jsx)(i,{onClick:()=>{t(e+10)}})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(1876)),_N_E=e.O()}]);
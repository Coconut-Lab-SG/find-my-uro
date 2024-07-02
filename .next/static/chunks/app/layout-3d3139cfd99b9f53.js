(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4360:function(e,s,t){Promise.resolve().then(t.t.bind(t,8342,23)),Promise.resolve().then(t.t.bind(t,5121,23)),Promise.resolve().then(t.t.bind(t,6557,23)),Promise.resolve().then(t.bind(t,652)),Promise.resolve().then(t.bind(t,2748)),Promise.resolve().then(t.t.bind(t,3528,23))},652:function(e,s,t){"use strict";t.d(s,{CookieModal:function(){return k}});var i,a,r=t(6730),n=t(728),c=t(6756),o=t(3695),l=t(1445),d=t(9637);let u=c.fC,h=l.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)(c.ck,{ref:s,className:(0,d.cn)(t),...i})});h.displayName="AccordionItem";let x=l.forwardRef((e,s)=>{let{className:t,children:i,...a}=e;return(0,r.jsx)(c.h4,{className:"flex",children:(0,r.jsxs)(c.xz,{ref:s,className:(0,d.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...a,children:[i,(0,r.jsx)(o.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});x.displayName=c.xz.displayName;let f=l.forwardRef((e,s)=>{let{className:t,children:i,...a}=e;return(0,r.jsx)(c.VY,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down border-t",...a,children:(0,r.jsx)("div",{className:(0,d.cn)("pb-4 pt-0",t),children:i})})});f.displayName=c.VY.displayName;var m=t(6850),p=t(1264),g=t(7772);let b=l.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)(p.fC,{ref:s,className:(0,d.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...i,children:(0,r.jsx)(p.z$,{className:(0,d.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(g.nQG,{className:"h-4 w-4"})})})});b.displayName=p.fC.displayName,(i=a||(a={})).PREFERENCES_PRIVACY="preferences_privacy",i.STATISTICS_PRIVACY="statistics_privacy",i.MARKETING_PRIVACY="marketing_privacy";var v=t(3155);function k(){let{checkbox:e,showModal:s,showManagePanel:t,setShowManagePanel:i,handleCheckboxChange:c,acceptPartialCookies:o,acceptAllCookies:d,closeModal:u}=function(){let[e,s]=(0,l.useState)(!0),[t,i]=(0,l.useState)(!1),r=new Date;r.setFullYear(r.getFullYear()+1);let[n,c]=(0,l.useState)({statistics_cookie:!0,preferences_cookie:!1,marketing_cookie:!1});function o(){(0,v.setCookie)("cookie_consent","yes",{expires:r}),s(!1)}return{checkbox:n,showModal:e,showManagePanel:t,setShowManagePanel:i,handleCheckboxChange:function(e){return function(s){c(t=>({...t,[e]:s}))}},acceptPartialCookies:function(){o(),n.preferences_cookie?(0,v.setCookie)(a.PREFERENCES_PRIVACY,!0,{expires:r}):(0,v.setCookie)(a.PREFERENCES_PRIVACY,!1,{expires:r}),n.statistics_cookie?(0,v.setCookie)(a.STATISTICS_PRIVACY,!0,{expires:r}):(0,v.setCookie)(a.STATISTICS_PRIVACY,!1,{expires:r}),n.marketing_cookie?(0,v.setCookie)(a.MARKETING_PRIVACY,!0,{expires:r}):(0,v.setCookie)(a.MARKETING_PRIVACY,!1,{expires:r})},acceptAllCookies:function(){o(),(0,v.setCookie)(a.PREFERENCES_PRIVACY,!0,{expires:r}),(0,v.setCookie)(a.STATISTICS_PRIVACY,!0,{expires:r}),(0,v.setCookie)(a.MARKETING_PRIVACY,!0,{expires:r})},closeModal:function(){s(!1)}}}();return s?(0,r.jsx)("div",{className:"fixed bottom-0 w-full z-10 bg-[#fff] border-t border-[#ccc] py-5 px-6",children:(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("span",{className:"text-lg font-bold italic",children:"This website uses cookies."}),(0,r.jsx)(m.z,{variant:"ghost",onClick:u,children:(0,r.jsx)(n.Z,{size:24})})]}),t?(0,r.jsx)(N,{checkbox:e,handleCheckboxChange:c,acceptPartialCookies:o,acceptAllCookies:d}):(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)("p",{className:"leading-5",children:"We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services."}),(0,r.jsxs)("div",{className:"flex items-center gap-2 justify-center",children:[(0,r.jsx)(m.z,{className:"bg-[#f6a404] rounded-lg h-[50px] italic px-7 hover:bg-orange-500",onClick:d,children:"Accept All"}),(0,r.jsx)(m.z,{className:"bg-[#dadada] rounded-lg h-[50px] text-black px-7 hover:bg-gray-300",onClick:()=>i(!0),children:"Manage"})]})]})]})}):(0,r.jsx)(r.Fragment,{})}function N(e){let{checkbox:s,handleCheckboxChange:t,acceptPartialCookies:i,acceptAllCookies:a}=e;return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(u,{type:"single",collapsible:!0,className:"w-full",children:(0,r.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,r.jsxs)(h,{value:"item-1",className:"flex-1",children:[(0,r.jsx)(x,{className:"text-lg italic",children:"Necessary"}),(0,r.jsx)(f,{className:"pt-3",children:"Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies."})]}),(0,r.jsx)(b,{name:"necessary",checked:!0,disabled:!0})]})}),(0,r.jsx)(u,{type:"single",collapsible:!0,className:"w-full",children:(0,r.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,r.jsxs)(h,{value:"item-2",className:"flex-1",children:[(0,r.jsx)(x,{className:"text-lg italic",children:"Statistics"}),(0,r.jsx)(f,{className:"pt-3",children:"Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously."})]}),(0,r.jsx)(b,{name:"statistics",checked:!0,disabled:!0})]})}),(0,r.jsx)(u,{type:"single",collapsible:!0,className:"w-full",children:(0,r.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,r.jsxs)(h,{value:"item-3",className:"flex-1",children:[(0,r.jsx)(x,{className:"text-lg italic",children:"Preferences"}),(0,r.jsx)(f,{className:"pt-3",children:"Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."})]}),(0,r.jsx)(b,{name:"preferences",checked:s.preferences_cookie,onCheckedChange:t("preferences_cookie")})]})}),(0,r.jsx)(u,{type:"single",collapsible:!0,className:"w-full",children:(0,r.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,r.jsxs)(h,{value:"item-4",className:"flex-1",children:[(0,r.jsx)(x,{className:"text-lg italic",children:"Marketing"}),(0,r.jsx)(f,{className:"pt-3",children:"Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers."})]}),(0,r.jsx)(b,{id:"marketing",name:"marketing",checked:s.marketing_cookie,onCheckedChange:t("marketing_cookie")})]})})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 justify-center",children:[(0,r.jsx)(m.z,{className:"bg-[#dadada] rounded-lg h-[50px] text-black px-7 hover:bg-gray-300",onClick:i,children:"Accept Selection"}),(0,r.jsx)(m.z,{className:"bg-[#f6a404] rounded-lg h-[50px] italic px-7 hover:bg-orange-500",onClick:a,children:"Accept All"})]})]})}},2748:function(e,s,t){"use strict";t.d(s,{default:function(){return c}});var i=t(6730),a=t(21),r=t(4256),n=t(6352);function c(){let e=(0,n.useRouter)();return(0,i.jsx)("div",{style:{background:"linear-gradient(90.49deg, #243b6c 0.28%, #432f91 96.69%)"},children:(0,i.jsxs)("div",{className:"flex items-center justify-between max-w-[1140px] mx-auto text-white py-3 w-full px-5 cursor-pointer",children:[(0,i.jsxs)("div",{className:"flex gap-x-2.5",children:[(0,i.jsx)("div",{className:"text-2xl italic font-semibold text-white hover:text-white",onClick:()=>e.push("/"),children:"Find My Uro!"}),(0,i.jsx)("span",{className:"bg-[#f6a404] h-fit self-end mb-1.5 text-xs text-center px-1 text-[#432f91] italic font-bold rounded-sm",children:"BETA"})]}),(0,i.jsx)(r.default,{href:"/account/login",children:(0,i.jsx)(a.default,{className:"rounded-full",alt:"user-avatar",src:"/assets/icons/user-avatar.webp",width:40,height:40})})]})})}},6850:function(e,s,t){"use strict";t.d(s,{z:function(){return l}});var i=t(6730),a=t(5561),r=t(9960),n=t(1445),c=t(9637);let o=(0,r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef((e,s)=>{let{className:t,variant:r,size:n,asChild:l=!1,...d}=e,u=l?a.g7:"button";return(0,i.jsx)(u,{className:(0,c.cn)(o({variant:r,size:n,className:t})),ref:s,...d})});l.displayName="Button"},9637:function(e,s,t){"use strict";t.d(s,{cn:function(){return r}});var i=t(8749),a=t(3371);function r(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,a.m6)((0,i.W)(s))}},3528:function(){}},function(e){e.O(0,[202,792,121,342,235,931,418,68,744],function(){return e(e.s=4360)}),_N_E=e.O()}]);
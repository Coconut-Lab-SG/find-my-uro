(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{9207:function(e,r,t){Promise.resolve().then(t.t.bind(t,8342,23)),Promise.resolve().then(t.t.bind(t,5121,23)),Promise.resolve().then(t.bind(t,5835))},5835:function(e,r,t){"use strict";t.d(r,{RegisterForm:function(){return c}});var s=t(6730),n=t(6850),a=t(3005),o=t(9699),i=t(6058),l=t(4056),d=t(4008);function c(){let{form:e,onSubmit:r}={form:(0,d.cI)({resolver:(0,l.F)(i.g),defaultValues:{email:"",first_name:"",last_name:"",password:"",confirm_password:""}}),onSubmit:function(e){console.log(e)}};return(0,s.jsx)(a.l0,{...e,children:(0,s.jsxs)("form",{onSubmit:e.handleSubmit(r),className:"space-y-5",children:[(0,s.jsx)(a.Wi,{control:e.control,name:"email",render:e=>{let{field:r}=e;return(0,s.jsxs)(a.xJ,{children:[(0,s.jsx)(a.NI,{children:(0,s.jsx)(o.I,{placeholder:"Email address",className:"h-[50px] border-[#ced4da]",...r})}),(0,s.jsx)(a.zG,{className:"text-base"})]})}}),(0,s.jsx)(a.Wi,{control:e.control,name:"first_name",render:e=>{let{field:r}=e;return(0,s.jsxs)(a.xJ,{children:[(0,s.jsx)(a.NI,{children:(0,s.jsx)(o.I,{placeholder:"First Name",className:"h-[50px] border-[#ced4da]",...r})}),(0,s.jsx)(a.zG,{className:"text-base"})]})}}),(0,s.jsx)(a.Wi,{control:e.control,name:"last_name",render:e=>{let{field:r}=e;return(0,s.jsxs)(a.xJ,{children:[(0,s.jsx)(a.NI,{children:(0,s.jsx)(o.I,{placeholder:"Last Name",className:"h-[50px] border-[#ced4da]",...r})}),(0,s.jsx)(a.zG,{className:"text-base"})]})}}),(0,s.jsx)(a.Wi,{control:e.control,name:"password",render:e=>{let{field:r}=e;return(0,s.jsxs)(a.xJ,{children:[(0,s.jsx)(a.NI,{children:(0,s.jsx)(o.I,{placeholder:"Password",type:"password",className:"h-[50px] border-[#ced4da]",...r})}),(0,s.jsx)(a.zG,{className:"text-base"})]})}}),(0,s.jsx)(a.Wi,{control:e.control,name:"confirm_password",render:e=>{let{field:r}=e;return(0,s.jsxs)(a.xJ,{children:[(0,s.jsx)(a.NI,{children:(0,s.jsx)(o.I,{placeholder:"Confirm Password",type:"password",className:"h-[50px] border-[#ced4da]",...r})}),(0,s.jsx)(a.zG,{className:"text-base"})]})}}),(0,s.jsx)(n.z,{type:"submit",className:"w-full h-[50px] bg-[#f6a404] text-white rounded-lg text-xl hover:bg-[#f6a404]",children:"Sign Up"})]})})}},6850:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var s=t(6730),n=t(5561),a=t(9960),o=t(1445),i=t(9637);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=o.forwardRef((e,r)=>{let{className:t,variant:a,size:o,asChild:d=!1,...c}=e,m=d?n.g7:"button";return(0,s.jsx)(m,{className:(0,i.cn)(l({variant:a,size:o,className:t})),ref:r,...c})});d.displayName="Button"},3005:function(e,r,t){"use strict";t.d(r,{l0:function(){return m},NI:function(){return g},Wi:function(){return f},xJ:function(){return h},zG:function(){return b}});var s=t(6730),n=t(1445),a=t(5561),o=t(4008),i=t(9637),l=t(2515);let d=(0,t(9960).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(l.f,{ref:r,className:(0,i.cn)(d(),t),...n})});c.displayName=l.f.displayName;let m=o.RV,u=n.createContext({}),f=e=>{let{...r}=e;return(0,s.jsx)(u.Provider,{value:{name:r.name},children:(0,s.jsx)(o.Qr,{...r})})},x=()=>{let e=n.useContext(u),r=n.useContext(p),{getFieldState:t,formState:s}=(0,o.Gc)(),a=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...a}},p=n.createContext({}),h=n.forwardRef((e,r)=>{let{className:t,...a}=e,o=n.useId();return(0,s.jsx)(p.Provider,{value:{id:o},children:(0,s.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...a})})});h.displayName="FormItem",n.forwardRef((e,r)=>{let{className:t,...n}=e,{error:a,formItemId:o}=x();return(0,s.jsx)(c,{ref:r,className:(0,i.cn)(a&&"text-destructive",t),htmlFor:o,...n})}).displayName="FormLabel";let g=n.forwardRef((e,r)=>{let{...t}=e,{error:n,formItemId:o,formDescriptionId:i,formMessageId:l}=x();return(0,s.jsx)(a.g7,{ref:r,id:o,"aria-describedby":n?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!n,...t})});g.displayName="FormControl",n.forwardRef((e,r)=>{let{className:t,...n}=e,{formDescriptionId:a}=x();return(0,s.jsx)("p",{ref:r,id:a,className:(0,i.cn)("text-[0.8rem] text-muted-foreground",t),...n})}).displayName="FormDescription";let b=n.forwardRef((e,r)=>{let{className:t,children:n,...a}=e,{error:o,formMessageId:l}=x(),d=o?String(null==o?void 0:o.message):n;return d?(0,s.jsx)("p",{ref:r,id:l,className:(0,i.cn)("text-[0.8rem] font-medium text-destructive",t),...a,children:d}):null});b.displayName="FormMessage"},9699:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var s=t(6730),n=t(1445),a=t(9637);let o=n.forwardRef((e,r)=>{let{className:t,type:n,...o}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},6058:function(e,r,t){"use strict";t.d(r,{d:function(){return n},g:function(){return a}});var s=t(6476);let n=s.z.object({email:s.z.string().min(1,{message:"Please enter your email"}),password:s.z.string().min(1,{message:"Please enter your password"})}),a=s.z.object({email:s.z.string().min(1,{message:"Please enter your email"}),first_name:s.z.string().min(1,{message:"Please enter first name"}),last_name:s.z.string().min(1,{message:"Please enter last name"}),password:s.z.string().min(1,{message:"Please enter your password"}),confirm_password:s.z.string().min(1,{message:"Please confirm your password"})})},9637:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var s=t(8749),n=t(3371);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.m6)((0,s.W)(r))}}},function(e){e.O(0,[121,342,235,379,418,68,744],function(){return e(e.s=9207)}),_N_E=e.O()}]);
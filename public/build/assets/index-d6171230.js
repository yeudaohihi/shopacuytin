import{r as C,c as q,o as fe,a as u,b as h,d as e,w as t,e as T,f as me,g as o,h as d,t as s,F as S,i as K,j as c,k as he,n as z,l as ge,A as be}from"./chunk-1f342eb4.js";import"./chunk-e47d8634.js";const ke=["onSubmit"],ye={class:"grid grid-cols-1 md:grid-cols-3 gap-3"},xe={for:"form-label"},we={for:"form-label"},$e={class:"grid grid-cols-2 gap-3"},Ce={class:"btn btn-sm btn-primary w-full lg:mt-[22px]"},Te=o("i",{class:"fas fa-search"},null,-1),Me=o("i",{class:"fas fa-trash"},null,-1),Be={style:{background:"transparent"},class:"border border-primary rounded-lg p-[1px]"},Ne={class:"p-3"},Se={class:"text-center mb-3"},Ke={class:"font-semibold text-lg"},Ue={class:"text-center space-y-3 lg:flex lg:justify-between lg:gap-3 lg:space-y-0"},Ge=o("i",{class:"fas fa-credit-card me-2"},null,-1),Oe=["onClick"],Ie=o("i",{class:"fas fa-shopping-cart me-2"},null,-1),Pe={class:"hidden lg:inline-block"},Ve={class:"text-center mt-3"},je={class:"list-none"},Re={class:"inline-block"},De=["onClick"],Fe={class:"inline-block"},Le=o("hr",{class:"mb-3"},null,-1),Ae={key:0},He=["innerHTML"],Ee={class:"space-y-3"},qe={key:0},ze={class:"text-danger-600"},Je={key:1},Qe={key:1},We={class:"space-y-3 mb-3"},Xe={key:0},Ye={class:"text-danger-600"},Ze={key:1},ea={__name:"Index",props:{groupId:{type:String,default:0}},setup(J){const Q=J,M=C({price:"",search:""}),g=C({page:1,limit:12,total_rows:0,total_page:0,visible_pages:[]}),W=q(()=>{const{page:i,total_page:a,visible_pages:p}=g.value,b=5;let _=Math.max(i-Math.floor(b/2),1),w=Math.min(_+b-1,a);return w-_+1<b&&(_=Math.max(w-b+1,1)),Array.from({length:w-_+1},(R,O)=>_+O)}),X=i=>{g.value.page!==i&&(g.value.page=i,B())},Y=()=>{g.value.page<=1||(g.value.page--,B())},Z=()=>{g.value.page>=g.value.total_page||(g.value.page++,B())},ee=q(()=>__defaultLang&&__defaultLang==="vn"?[{label:"Tất cả",value:""},{label:"Dưới 100.000đ",value:"0-100000"},{label:"100.000đ - 200.000đ",value:"100000-200000"},{label:"200.000đ - 500.000đ",value:"200000-500000"},{label:"500.000đ - 1.000.000đ",value:"500000-1000000"},{label:"Trên 1.000.000đ",value:"1000000-0"}]:[{label:"All",value:""},{label:"Under $5",value:"0-5"},{label:"$5 - $10",value:"5-10"},{label:"$10 - $20",value:"10-20"},{label:"$20 - $50",value:"20-50"},{label:"Over $50",value:"50-0"}]),x=C(!1),G=C([]),B=async()=>{var i,a;x.value=!0;try{const{data:p}=await axios.get("/api/stores/items",{params:{...M.value,group_id:Q.groupId,...g.value}});G.value=((i=p.data)==null?void 0:i.data)||[],g.value=((a=p.data)==null?void 0:a.meta)||[]}catch(p){Swal.fire("Oops...",$catchMessage(p),"error")}finally{x.value=!1,re()}},ae=()=>{g.value.page=1,B()},te=()=>{M.value={price:"",search:""},g.value.page=1,B()},le=(i,a="VND",p=2)=>$formatCurrency(i,a,p),U=C(!1),f=C(null),r=C({Mat_Khau:"",Tai_Khoan:"",isConfirm:!1,Dang_Nhap_Bang:"Riot"}),ne=async i=>{(f.value=i)&&(U.value=!0)},oe=()=>{U.value=!1},se=()=>{U.value=!1},ie=async(i,a)=>{if((i==null?void 0:i.code)===void 0)return;if(i.type==="addfriend"&&a.Ten_In_Game==="")return Swal.fire("Oops...",$__t("Vui lòng nhập tên tài khoản nhận"),"error");if(i.type==="user_pass"&&a.Tai_Khoan==="")return Swal.fire("Oops...",$__t("Vui lòng nhập tài khoản"),"error");if(i.type==="user_pass"&&a.Mat_Khau==="")return Swal.fire("Oops...",$__t("Vui lòng nhập mật khẩu"),"error");if((await Swal.fire({icon:"question",title:$__t("Bạn chắc chứ?"),text:`${$__t("Bạn sẽ mua")} #${i.code} ${$__t("với giá")} ${i.price_str}?`,showCancelButton:!0,confirmButtonText:$__t("Đồng ý"),cancelButtonText:$__t("Hủy")})).isConfirmed===!0){Swal.fire({icon:"info",title:$__t("Đang xử lý!"),html:$__t("Không được tắt trang này, vui lòng đợi trong giây lát!"),timerProgressBar:!0,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:()=>{Swal.showLoading()},willClose:()=>{}});try{const{data:b}=await axios.post("/api/stores/items/"+i.code+"/buy",a);Swal.fire("Great!",b.message,"success").then(()=>{window.open("/account/orders/items/"+b.data.code,"_self")})}catch(b){Swal.fire("Oops...",$catchMessage(b),"error")}}},re=()=>{window.scrollTo({top:0,behavior:"smooth"})},l=i=>$__t(i);return fe(()=>{B()}),(i,a)=>{var A,H,E;const p=u("a-select-option"),b=u("a-select"),_=u("a-input"),w=u("a-spin"),R=u("a-skeleton"),O=u("a-card"),N=u("a-col"),I=u("a-row"),de=u("a-image"),V=u("a-button"),ue=u("a-tooltip"),D=u("a-badge-ribbon"),ce=u("a-empty"),F=u("iconify-icon"),_e=u("a-tag"),P=u("a-checkbox"),L=u("a-form"),pe=u("a-badge"),ve=u("a-modal");return d(),h("section",null,[e(w,{spinning:x.value},{default:t(()=>[o("form",{class:"mb-5 mt-5",onSubmit:he(ae,["prevent"])},[o("div",ye,[o("div",null,[o("label",xe,s(l("Chọn mức giá"))+": ",1),e(b,{value:M.value.price,"onUpdate:value":a[0]||(a[0]=n=>M.value.price=n),placeholder:l("Chọn mức giá"),style:{width:"100%"}},{default:t(()=>[(d(!0),h(S,null,K(ee.value,n=>(d(),T(p,{key:n.value,value:n.value},{default:t(()=>[c(s(n.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])]),o("div",null,[o("label",we,s(l("Tìm kiếm"))+": ",1),e(_,{value:M.value.search,"onUpdate:value":a[1]||(a[1]=n=>M.value.search=n),placeholder:l("Tìm kiếm"),style:{width:"100%"}},null,8,["value","placeholder"])]),o("div",$e,[o("div",null,[o("button",Ce,[Te,c(" "+s(l("Tìm kiếm")),1)])]),o("div",null,[o("button",{class:"btn btn-sm btn-danger w-full lg:mt-[22px]",type:"button",onClick:a[2]||(a[2]=n=>te())},[Me,c(" "+s(l("Đặt lại")),1)])])])])],40,ke)]),_:1},8,["spinning"]),x.value&&((A=G.value)==null?void 0:A.length)===0?(d(),T(I,{key:0,gutter:18},{default:t(()=>[(d(),h(S,null,K(4,n=>e(N,{xs:12,sm:8,lg:6,key:n},{default:t(()=>[e(O,{class:"mb-3"},{default:t(()=>[e(R,{active:""})]),_:1})]),_:2},1024)),64))]),_:1})):(d(),T(w,{key:1,spinning:x.value},{default:t(()=>[e(I,{gutter:18},{default:t(()=>[(d(!0),h(S,null,K(G.value,n=>(d(),T(N,{xs:12,md:6,key:n.id,class:"mb-2 mt-2 cursor-pointer"},{default:t(()=>[e(D,{color:"red",text:`${n.discount}%`,class:z({hidden:n.discount<=0}),placement:"start"},{default:t(()=>[e(D,{color:"pink",text:`MS: ${n.code}`,placement:"end"},{default:t(()=>[o("div",Be,[e(de,{src:n.image,alt:"",style:{width:"300px","max-height":"400px"},class:"rounded-t-lg"},null,8,["src"]),o("div",Ne,[o("div",Se,[o("span",Ke,s(l("Đã bán"))+": "+s(n.sold_count),1)]),o("div",Ue,[e(ue,{title:n.discount!==0?`${l("Giá gốc")} ${le(n.price)}`:""},{default:t(()=>[e(V,{type:"dashed",block:"",class:"dark:text-white"},{default:t(()=>[Ge,c(" "+s(n.price_str),1)]),_:2},1024)]),_:2},1032,["title"]),o("button",{class:"btn btn-sm btn-primary w-full",onClick:m=>ne(n)},[Ie,o("span",Pe,s(l("Mua Ngay")),1)],8,Oe)])])])]),_:2},1032,["text"])]),_:2},1032,["text","class"])]),_:2},1024))),128))]),_:1})]),_:1},8,["spinning"])),((H=G.value)==null?void 0:H.length)===0&&!x.value?(d(),T(O,{key:2},{default:t(()=>[e(ce,{description:l("Không tìm thấy vật phẩm nào trong nhóm này")},null,8,["description"])]),_:1})):me("",!0),o("div",Ve,[e(w,{spinning:x.value},{default:t(()=>[o("ul",je,[o("li",Re,[o("a",{href:"javascript:void(0)",onClick:a[3]||(a[3]=n=>Y()),class:"flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800 dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all duration-300 relative top-[2px] pl-2"},[e(F,{icon:"material-symbols:arrow-back-ios-rounded"})])]),(d(!0),h(S,null,K(W.value,n=>(d(),h("li",{key:n,class:"inline-block"},[o("a",{href:"javascript:void(0)",onClick:m=>X(n),class:z(["flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-800 dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all duration-300",{"p-active":g.value.page===n}])},s(n!==-1?n:"..."),11,De)]))),128)),o("li",Fe,[o("a",{href:"javascript:void(0)",onClick:a[4]||(a[4]=n=>Z()),class:"flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800 dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all duration-300 relative top-[2px]"},[e(F,{icon:"material-symbols:arrow-forward-ios-rounded"})])])])]),_:1},8,["spinning"])]),e(ve,{open:U.value,"onUpdate:open":a[15]||(a[15]=n=>U.value=n),width:820,title:`${l("Mua Vật Phẩm")}: ${(E=f.value)==null?void 0:E.name}`,onOk:se},{footer:t(()=>{var n;return[e(V,{key:"back",onClick:oe},{default:t(()=>[c(s(l("Huỷ")),1)]),_:1}),e(V,{key:"submit",type:"primary",loading:x.value,disabled:((n=r.value)==null?void 0:n.isConfirm)!==!0,onClick:a[5]||(a[5]=m=>ie(f.value,r.value))},{default:t(()=>[c(s(l("Thanh Toán")),1)]),_:1},8,["loading","disabled"])]}),default:t(()=>{var n;return[Le,((n=f.value)==null?void 0:n.type)==="addfriend"?(d(),h("div",Ae,[e(I,{gutter:12,class:"space-y-3"},{default:t(()=>[e(N,{xs:24,md:12},{default:t(()=>{var m,v;return[o("div",{class:"mb-3",innerHTML:(m=f.value)==null?void 0:m.description},null,8,He),o("div",Ee,[(d(!0),h(S,null,K((v=f.value)==null?void 0:v.highlights,(y,$)=>(d(),T(_e,{key:$,color:"success",class:"copy cursor-pointer","data-clipboard-text":y},{default:t(()=>[c(s(y),1)]),_:2},1032,["data-clipboard-text"]))),128))])]}),_:1}),e(N,{xs:24,md:12},{default:t(()=>[e(L,{model:r.value,class:"space-y-3"},{default:t(()=>{var m,v,y,$;return[e(_,{value:(m=f.value)==null?void 0:m.name,"addon-after":l("Sản phẩm"),disabled:""},null,8,["value","addon-after"]),e(_,{value:(v=f.value)==null?void 0:v.price_str,"addon-after":l("Giá gốc"),disabled:""},null,8,["value","addon-after"]),e(_,{value:(y=f.value)==null?void 0:y.discount,"addon-after":l("Giảm giá"),"addon-before":"%",disabled:""},null,8,["value","addon-after"]),(($=f.value)==null?void 0:$.type)=="addfriend"?(d(),h("div",qe,[e(_,{value:r.value.Tai_Khoan,"onUpdate:value":a[6]||(a[6]=k=>r.value.Tai_Khoan=k),placeholder:"admin#1234","addon-after":l("Tài khoản nhận")},null,8,["value","addon-after"]),e(P,{checked:r.value.isConfirm,"onUpdate:checked":a[7]||(a[7]=k=>r.value.isConfirm=k),class:"mt-2"},{default:t(()=>[c(s(l("Tôi đã kết bạn"))+" ",1),o("span",ze,s(l("TẤT CẢ")),1),c(" ingame ")]),_:1},8,["checked"])])):(d(),h("div",Je,[e(P,{checked:r.value.isConfirm,"onUpdate:checked":a[8]||(a[8]=k=>r.value.isConfirm=k)},{default:t(()=>[c(s(l("Tôi cung cấp đúng tài khoản và mật khẩu")),1)]),_:1},8,["checked"])]))]}),_:1},8,["model"])]),_:1})]),_:1})])):(d(),h("div",Qe,[e(I,{gutter:12,class:"space-y-3"},{default:t(()=>[e(N,{xs:24,md:12},{default:t(()=>{var m;return[o("div",We,[e(_,{value:r.value.Tai_Khoan,"onUpdate:value":a[9]||(a[9]=v=>r.value.Tai_Khoan=v),placeholder:l("Tài khoản"),"addon-after":l("Tài khoản")},null,8,["value","placeholder","addon-after"]),e(_,{value:r.value.Mat_Khau,"onUpdate:value":a[10]||(a[10]=v=>r.value.Mat_Khau=v),placeholder:l("Mật khẩu"),"addon-after":l("Mật khẩu"),type:"password"},null,8,["value","placeholder","addon-after"]),e(b,{value:r.value.Dang_Nhap_Bang,"onUpdate:value":a[11]||(a[11]=v=>r.value.Dang_Nhap_Bang=v),placeholder:"Chọn cách đăng nhập",style:{width:"100%"}},{default:t(()=>[e(p,{value:"Roblox"},{default:t(()=>[c(s(l("Đăng Nhập Bằng"))+" Roblox",1)]),_:1}),e(p,{value:"Riot"},{default:t(()=>[c(s(l("Đăng Nhập Bằng"))+" Riot",1)]),_:1}),e(p,{value:"Facebook"},{default:t(()=>[c(s(l("Đăng Nhập Bằng"))+" Facebook",1)]),_:1}),e(p,{value:"Google"},{default:t(()=>[c(s(l("Đăng Nhập Bằng"))+" Google",1)]),_:1}),e(p,{value:"Microsoft"},{default:t(()=>[c(s(l("Đăng Nhập Bằng"))+" Microsoft",1)]),_:1}),e(p,{value:"Other"},{default:t(()=>[c(s(l("Đăng Nhập ở đâu thì ghi chú")),1)]),_:1})]),_:1},8,["value"])]),o("div",null,[(d(!0),h(S,null,K((m=f.value)==null?void 0:m.highlights,(v,y)=>(d(),T(pe,{key:y,color:"red",text:v},null,8,["text"]))),128))])]}),_:1}),e(N,{xs:24,md:12},{default:t(()=>[e(L,{class:"space-y-3"},{default:t(()=>{var m,v,y,$;return[e(_,{value:(m=f.value)==null?void 0:m.name,"addon-after":l("Sản phẩm"),disabled:""},null,8,["value","addon-after"]),e(_,{value:(v=f.value)==null?void 0:v.price_str,"addon-after":l("Giá gốc"),disabled:""},null,8,["value","addon-after"]),e(_,{value:(y=f.value)==null?void 0:y.discount,"addon-after":l("Giảm giá"),"addon-before":"%",disabled:""},null,8,["value","addon-after"]),(($=f.value)==null?void 0:$.type)=="addfriend"?(d(),h("div",Xe,[e(_,{value:r.value.Ten_In_Game,"onUpdate:value":a[12]||(a[12]=k=>r.value.Ten_In_Game=k),placeholder:"admin#1234","addon-after":l("Tài khoản nhận")},null,8,["value","addon-after"]),e(P,{checked:r.value.isConfirm,"onUpdate:checked":a[13]||(a[13]=k=>r.value.isConfirm=k),class:"mt-2"},{default:t(()=>[c(s(l("Tôi đã kết bạn"))+" ",1),o("span",Ye,s(l("TẤT CẢ")),1),c(" ingame ")]),_:1},8,["checked"])])):(d(),h("div",Ze,[e(P,{checked:r.value.isConfirm,"onUpdate:checked":a[14]||(a[14]=k=>r.value.isConfirm=k)},{default:t(()=>[c(s(l("Tôi cung cấp đúng tài khoản và mật khẩu")),1)]),_:1},8,["checked"])]))]}),_:1})]),_:1})]),_:1})]))]}),_:1},8,["open","title"])])}}},j=ge({});j.use(be);j.component("item-index",ea);j.mount("#app");
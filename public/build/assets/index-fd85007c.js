import{r as w,c as y,o as F,a as s,b as G,d as a,w as n,h as k,e as I,j as C,t as _,f as L,g as p,l as P,A as D}from"./chunk-1f342eb4.js";import"./chunk-e47d8634.js";const H={class:"text-center space-y-3"},j={class:"text-danger-600"},z={class:"text-sm"},J={__name:"Index",props:{groupId:{type:String,default:0}},setup($){const B=$,m=w(!1),h=w([]),S=async()=>{var e;m.value=!0;try{const{data:t}=await axios.get("/api/stores/boosting-game",{params:{limit:100,group_id:B.groupId}});h.value=((e=t.data)==null?void 0:e.data)||[]}catch(t){Swal.fire("Oops...",$catchMessage(t),"error")}finally{m.value=!1}},g=(e,t="VND",i=2)=>$formatCurrency(e,t,i),T=y(()=>h.value.map(e=>({label:e.name+" - "+g(e.price),value:e.id}))||[]),c=y(()=>h.value.find(e=>e.id===l.value.package)),V=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>=0,b=y(()=>{var e;return((e=c.value)==null?void 0:e.price)||0}),N=async e=>{var i,d;if(((i=c.value)==null?void 0:i.id)===void 0)return Swal.fire("Oops...",$__t("Vui lòng chọn gói cần thuê"),"error");if((await Swal.fire({icon:"question",title:$__t("Bạn chắc chứ?"),text:`${$__t("Bạn sẽ mua gói")} ${(d=c.value)==null?void 0:d.name} ${$__t("với giá")} ${g(b.value)}?`,showCancelButton:!0,confirmButtonText:$__t("Đồng ý"),cancelButtonText:$__t("Hủy")})).isConfirmed===!0){Swal.fire({icon:"info",title:$__t("Đang xử lý!"),html:$__t("Không được tắt trang này, vui lòng đợi trong giây lát!"),timerProgressBar:!0,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:()=>{Swal.showLoading()},willClose:()=>{}});try{const{data:r}=await axios.post("/api/stores/boosting-game/"+c.value.code+"/buy",e);Swal.fire("Great !",r.message,"success").then(()=>{window.open("/account/orders/boosting-game/"+r.data.code,"_self")})}catch(r){Swal.fire("Oops...",$catchMessage(r),"error")}}},l=w({package:null,order_note:"",input_user:"",input_pass:"",input_extra:""}),o=e=>$__t(e);return F(()=>{S()}),(e,t)=>{const i=s("a-select"),d=s("a-alert"),r=s("a-form-item"),f=s("a-input"),v=s("a-col"),O=s("a-row"),q=s("a-textarea"),A=s("a-button"),K=s("a-form"),U=s("a-spin"),M=s("a-card");return k(),G("section",null,[a(M,null,{default:n(()=>[a(U,{spinning:m.value},{default:n(()=>[a(K,{layout:"vertical",model:l.value,onFinish:N},{default:n(()=>[a(r,{label:o("Chọn Gói Cần Thuê"),name:"package",rules:[{required:!0,message:o("Vui lòng chọn gói cần thuê")}]},{default:n(()=>{var u;return[a(i,{value:l.value.package,"onUpdate:value":t[0]||(t[0]=E=>l.value.package=E),"show-search":"",placeholder:o("Chọn gói dịch vụ cần thuê"),options:T.value,"filter-option":V},null,8,["value","placeholder","options"]),(u=c.value)!=null&&u.descr?(k(),I(d,{key:0,type:"error",class:"mt-2"},{message:n(()=>[C(_(c.value.descr),1)]),_:1})):L("",!0)]}),_:1},8,["label","rules"]),a(O,{gutter:16},{default:n(()=>[a(v,{xs:24,md:8},{default:n(()=>[a(r,{label:o("Tài Khoản"),name:"input_user",rules:[{required:!0,message:o("Vui lòng nhập tài khoản cần cày")}]},{default:n(()=>[a(f,{value:l.value.input_user,"onUpdate:value":t[1]||(t[1]=u=>l.value.input_user=u),placeholder:o("Nhập tài khoản cần cày")},null,8,["value","placeholder"])]),_:1},8,["label","rules"])]),_:1}),a(v,{xs:24,md:8},{default:n(()=>[a(r,{label:o("Mật Khẩu"),name:"input_pass",rules:[{required:!0,message:o("Vui lòng nhập mật khẩu của tài khoản cần cày")}]},{default:n(()=>[a(f,{value:l.value.input_pass,"onUpdate:value":t[2]||(t[2]=u=>l.value.input_pass=u),placeholder:o("Nhập mật khẩu của tài khoản đó")},null,8,["value","placeholder"])]),_:1},8,["label","rules"])]),_:1}),a(v,{xs:24,md:8},{default:n(()=>[a(r,{label:"Cookie / 2FA",name:"input_extra"},{default:n(()=>[a(f,{value:l.value.input_extra,"onUpdate:value":t[3]||(t[3]=u=>l.value.input_extra=u),placeholder:o("Có thể nhập chuỗi 2FA hoặc cookie liên quan")},null,8,["value","placeholder"])]),_:1})]),_:1})]),_:1}),a(r,{label:o("Ghi Chú"),name:"order_note"},{default:n(()=>[a(q,{value:l.value.order_note,"onUpdate:value":t[4]||(t[4]=u=>l.value.order_note=u),placeholder:o("Nhập ghi chú cho admin nếu có..."),rows:3},null,8,["value","placeholder"])]),_:1},8,["label"]),a(r,null,{default:n(()=>[p("div",H,[p("div",null,[p("h4",null,[p("span",j,_(g(b.value)),1)]),p("h6",z,_(o("Tổng Thanh Toán")),1)]),a(A,{type:"primary",htmlType:"submit"},{default:n(()=>[C(_(o("Tạo Đơn Hàng")),1)]),_:1})])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])]),_:1})])}}},x=P({});x.use(D);x.component("boosting-index",J);x.mount("#app");
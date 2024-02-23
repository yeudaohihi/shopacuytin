import{r as w,c as y,o as I,a as s,b as D,d as a,w as n,h as x,e as B,j as b,t as p,f as S,g as d,l as F,A as H}from"./chunk-1f342eb4.js";import"./chunk-e47d8634.js";const j={class:"text-center space-y-3"},z={class:"text-danger-600"},J={class:"text-sm"},Q={__name:"Index",props:{groupId:{type:String,default:0}},setup(T){const N=T,f=w(!1),h=w([]),O=async()=>{var e;f.value=!0;try{const{data:t}=await axios.get("/api/stores/boosting-game",{params:{limit:100,group_id:N.groupId}});h.value=((e=t.data)==null?void 0:e.data)||[]}catch(t){Swal.fire("Oops...",$catchMessage(t),"error")}finally{f.value=!1}},m=(e,t="VND",c=2)=>$formatCurrency(e,t,c),V=y(()=>h.value.map(e=>({label:e.name+" - "+m(e.price),value:e.id}))||[]),i=y(()=>h.value.find(e=>e.id===l.value.package)),K=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>=0,$=y(()=>{var e;return((e=i.value)==null?void 0:e.price)||0}),U=async e=>{var c,_;if(((c=i.value)==null?void 0:c.id)===void 0)return Swal.fire("Oops...",$__t("Vui lòng chọn gói cần thuê"),"error");if(e.input_user===""&&e.input_pass===""&&e.input_extra==="")return Swal.fire("Oops...",$__t("Vui lòng nhập tài khoản cần cày"),"error");if((await Swal.fire({icon:"question",title:$__t("Bạn chắc chứ?"),text:`${$__t("Bạn sẽ mua gói")} ${(_=i.value)==null?void 0:_.name} ${$__t("với giá")} ${m($.value)}?`,showCancelButton:!0,confirmButtonText:$__t("Đồng ý"),cancelButtonText:$__t("Hủy")})).isConfirmed===!0){Swal.fire({icon:"info",title:$__t("Đang xử lý!"),html:$__t("Không được tắt trang này, vui lòng đợi trong giây lát!"),timerProgressBar:!0,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,didOpen:()=>{Swal.showLoading()},willClose:()=>{}});try{const{data:r}=await axios.post("/api/stores/boosting-game/"+i.value.code+"/buy",e);Swal.fire("Great !",r.message,"success").then(()=>{window.open("/account/orders/boosting-game/"+r.data.code,"_self")})}catch(r){Swal.fire("Oops...",$catchMessage(r),"error")}}},l=w({package:null,order_note:"",input_user:"",input_pass:"",input_extra:""}),o=e=>$__t(e);return I(()=>{O()}),(e,t)=>{const c=s("a-select"),_=s("a-alert"),r=s("a-form-item"),g=s("a-input"),v=s("a-col"),A=s("a-row"),G=s("a-textarea"),L=s("a-button"),M=s("a-form"),P=s("a-spin"),q=s("a-card");return x(),D("section",null,[a(q,null,{default:n(()=>[a(P,{spinning:f.value},{default:n(()=>[a(M,{layout:"vertical",model:l.value,onFinish:U},{default:n(()=>[a(r,{label:o("Chọn Gói Cần Thuê"),name:"package",rules:[{required:!0,message:o("Vui lòng chọn gói cần thuê")}]},{default:n(()=>{var u,C;return[a(c,{value:l.value.package,"onUpdate:value":t[0]||(t[0]=E=>l.value.package=E),"show-search":"",placeholder:o("Chọn gói dịch vụ cần thuê"),options:V.value,"filter-option":K},null,8,["value","placeholder","options"]),(u=i.value)!=null&&u.name?(x(),B(_,{key:0,type:"info",class:"mt-2"},{message:n(()=>[b(p(i.value.name)+" - "+p(m(i.value.price)),1)]),_:1})):S("",!0),(C=i.value)!=null&&C.descr?(x(),B(_,{key:1,type:"error",class:"mt-2"},{message:n(()=>[b(p(i.value.descr),1)]),_:1})):S("",!0)]}),_:1},8,["label","rules"]),a(A,{gutter:16},{default:n(()=>[a(v,{xs:24,md:8},{default:n(()=>[a(r,{label:o("Tài Khoản"),name:"input_user"},{default:n(()=>[a(g,{value:l.value.input_user,"onUpdate:value":t[1]||(t[1]=u=>l.value.input_user=u),placeholder:o("Nhập tài khoản cần cày")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{xs:24,md:8},{default:n(()=>[a(r,{label:o("Mật Khẩu"),name:"input_pass"},{default:n(()=>[a(g,{value:l.value.input_pass,"onUpdate:value":t[2]||(t[2]=u=>l.value.input_pass=u),placeholder:o("Nhập mật khẩu của tài khoản đó")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(v,{xs:24,md:8},{default:n(()=>[a(r,{label:o("Link GamePass"),name:"input_extra"},{default:n(()=>[a(g,{value:l.value.input_extra,"onUpdate:value":t[3]||(t[3]=u=>l.value.input_extra=u),placeholder:o("Có thể nhập chuỗi 2FA hoặc cookie liên quan")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),a(r,{label:o("Ghi Chú"),name:"order_note"},{default:n(()=>[a(G,{value:l.value.order_note,"onUpdate:value":t[4]||(t[4]=u=>l.value.order_note=u),placeholder:o("Nhập ghi chú cho admin nếu có..."),rows:3},null,8,["value","placeholder"])]),_:1},8,["label"]),a(r,null,{default:n(()=>[d("div",j,[d("div",null,[d("h4",null,[d("span",z,p(m($.value)),1)]),d("h6",J,p(o("Tổng Thanh Toán")),1)]),a(L,{type:"primary",htmlType:"submit"},{default:n(()=>[b(p(o("Tạo Đơn Hàng")),1)]),_:1})])]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"])]),_:1})])}}},k=F({});k.use(H);k.component("boosting-index",Q);k.mount("#app");
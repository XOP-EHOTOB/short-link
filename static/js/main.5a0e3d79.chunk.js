(this.webpackJsonpShortLink=this.webpackJsonpShortLink||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),l=n.n(c),s=n(24),o=n.n(s),i=n(25),u=n.n(i),m=n(29),d=n(27),f=n(30),p=n(39),h=n(8),E=(n(139),n(144)),b=n(145),k=n(55),g=n.n(k),v=n(146),y=n(149),w=n(147),j=n(148),O=(n(140),function(e){var t=e.links,n=e.setModal,c=e.setSnackbar,l=e.setPopout,s=e.restart,i=e.token,f=e.newOffset,p=e.offset,k=e.itemsx,O=Object(a.useState)(r.a.createElement(h.t,{size:"medium",style:{margin:"20px 0"}})),x=Object(d.a)(O,2),C=x[0],_=x[1],S=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.deleteFromLastShortened",request_id:"324nnefj",params:{v:"5.95",key:t.key,access_token:i.access_token}});case 3:e.sent,c(r.a.createElement(h.s,{onClose:function(){return c(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--accent)"}},r.a.createElement(E.a,{fill:"#fff",width:14,height:14}))},"\u0421\u0441\u044b\u043b\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430")),s(),n(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c(r.a.createElement(h.s,{onClose:function(){return c(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--destructive)"}},r.a.createElement(b.a,{fill:"#fff",width:14,height:14}))},"\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435!"));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(r.a.createElement(h.b,{actionsLayout:"horizontal",actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,mode:"destructive",action:function(){S(t)}}],onClose:function(){return l(null)}},r.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 ",t.short_url,"?")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=[];t.items.map((function(t){var a=g.a.createQR(t.short_url,{qrSize:256,isShowLogo:!0,isShowBackground:!0,backgroundColor:"#ffffff"}),l=new Date(1e3*t.timestamp),s="".concat(l.getDate()<10?"0"+l.getDate():l.getDate(),".").concat(l.getMonth()<10?"0"+l.getMonth():l.getMonth()+1,".").concat(l.getFullYear()," ").concat(l.getHours()<10?"0"+l.getHours():l.getHours(),":").concat(l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes());e.push(r.a.createElement("div",{key:Math.round(1e6*Math.random()),className:"links-grid-items"},r.a.createElement("div",{className:"links-qr-code",dangerouslySetInnerHTML:{__html:a},onClick:function(){!function(e,t,a){n(r.a.createElement(h.n,{activeModal:"select"},r.a.createElement(h.l,{dynamicContentHeight:!0,settlingHeight:100,onClose:function(){n(null)},id:"select",header:r.a.createElement(h.m,{right:r.a.createElement(h.q,{onClick:function(){n(null)}},r.a.createElement(v.a,null))},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},r.a.createElement("div",{className:"links-qr-code-max",dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("div",{className:"links-qr-code-statistic-all"},"\u041a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430: ",e.short_url),r.a.createElement("div",{className:"links-qr-code-statistic-all-link"},"\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430: ",e.url),r.a.createElement("div",{className:"links-qr-code-statistic-all-date"},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",a),r.a.createElement("div",{className:"links-qr-code-statistic"},r.a.createElement(w.a,{width:14,height:14,style:{marginRight:5}}),"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u044b: ",e.views),r.a.createElement("div",{className:"next-button",key:323232324},r.a.createElement(h.e,{size:"s",style:{margin:5,marginLeft:10},onClick:function(){o.a.send("VKWebAppCopyText",{text:e.short_url}),c(r.a.createElement(h.s,{onClose:function(){return c(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--accent)"}},r.a.createElement(E.a,{fill:"#fff",width:14,height:14}))},"\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430")),n(null)}},"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement(h.e,{size:"s",mode:"destructive",style:{margin:5},onClick:function(){N(e)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement("div",null))))}(t,a,s)}}),r.a.createElement("div",{className:"links-body"},r.a.createElement("div",{className:"links-short-url",onClick:function(){o.a.send("VKWebAppCopyText",{text:t.short_url}),c(r.a.createElement(h.s,{onClose:function(){return c(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--accent)"}},r.a.createElement(E.a,{fill:"#fff",width:14,height:14}))},"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"))}},t.short_url),r.a.createElement("div",{className:"links-url",onClick:function(){o.a.send("VKWebAppCopyText",{text:t.url}),c(r.a.createElement(h.s,{onClose:function(){return c(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--accent)"}},r.a.createElement(E.a,{fill:"#fff",width:14,height:14}))},"\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"))}},t.url),r.a.createElement("div",{className:"links-date"},s)),r.a.createElement("div",{className:"links-body-infp"},r.a.createElement(j.a,{width:15,height:15,style:{marginBottom:20,marginLeft:15,cursor:"pointer"},onClick:function(){N(t)}}),r.a.createElement("div",{className:"links-body-vues"},r.a.createElement(w.a,{width:10,height:10,style:{marginLeft:10}})," ",t.views))))})),e.push(r.a.createElement("div",{key:33332324},r.a.createElement("div",{className:"next-button",key:323232324},r.a.createElement(h.e,{style:{margin:5},key:323256424,onClick:function(){f(-1)&&_(r.a.createElement(h.t,{size:"medium",style:{margin:"20px 0"}}))},disabled:0===p},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(h.e,{style:{margin:5},key:323232334,onClick:function(){t.count<10||(_(r.a.createElement(h.t,{size:"medium",style:{margin:"20px 0"}})),f(1))},disabled:11!==k},"\u0414\u0430\u043b\u0435\u0435")," "),r.a.createElement(h.h,{key:323232424,className:"footer"},r.a.createElement("p",{className:"checkbox-p"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 QR-\u043a\u043e\u0434, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e.",r.a.createElement("br",null),"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0443, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c.")))),t.items.length<1&&(e=r.a.createElement(h.r,{icon:r.a.createElement(y.a,null)},"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0432\u0430\u0448\u0438\u0445 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043a\u0430\u0445.")),_(e)}),[t]),C}),x=(n(141),function(e){var t=e.id,n=e.token,c=e.setModal,l=e.setPopout,s=e.go,i=e.setToken,f=Object(a.useState)(r.a.createElement(h.t,{size:"medium",style:{margin:"20px 0"}})),p=Object(d.a)(f,2),k=p[0],g=p[1],v=Object(a.useState)(null),y=Object(d.a)(v,2),w=y[0],j=y[1],x=Object(a.useState)(!1),C=Object(d.a)(x,2),_=C[0],S=C[1],N=Object(a.useState)(0),z=Object(d.a)(N,2),A=z[0],M=z[1],L=Object(a.useState)(0),T=Object(d.a)(L,2),q=T[0],I=T[1],K=function(){S(!_)},P=function(e){if(1===e)I(q+10);else{if(q<10)return;I(q-10)}return K(),!0},V=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.getElementById("home-input"),e.next=4,o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.getShortLink",request_id:"324nnefj",params:{v:"5.95",url:t.value,private:A,access_token:n.access_token}});case 4:e.sent,j(r.a.createElement(h.s,{onClose:function(){return j(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--accent)"}},r.a.createElement(E.a,{fill:"#fff",width:14,height:14}))},"\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430!")),K(),document.getElementById("home-input").value="",e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),a="\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435!",100===e.t0.error_data.error_code&&(a="\u041e\u0448\u0438\u0431\u043a\u0430! \u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 URL"),e.t0.error_data.error_reason&&100===e.t0.error_data.error_reason.error_code&&(a="\u041e\u0448\u0438\u0431\u043a\u0430! \u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 URL"),j(r.a.createElement(h.s,{onClose:function(){return j(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--destructive)"}},r.a.createElement(b.a,{fill:"#fff",width:14,height:14}))},a));case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetAuthToken",{app_id:7790406,scope:""});case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){0!==n.access_token&&(document.querySelector("#home-input").addEventListener("keydown",(function(e){13===e.keyCode&&V()})),function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.getLastShortenedLinks",request_id:"324nnefj",params:{v:"5.95",count:11,offset:q,access_token:n.access_token}});case 3:t=e.sent,11===(a=JSON.parse(JSON.stringify(t.response.items.length)))&&t.response.items.pop(),g(r.a.createElement(O,{itemsx:a,links:t.response,setModal:c,setSnackbar:j,setPopout:l,restart:K,token:n,newOffset:P,offset:q})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),s({currentTarget:{dataset:{to:"new-user"}}});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()())}),[_,n]),r.a.createElement(h.o,{id:t},r.a.createElement(h.p,null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 c\u0441\u044b\u043b\u043e\u043a"),r.a.createElement(h.f,{mode:"shadow",style:{margin:5,padding:5,fontSize:14,textAlign:"center"}},r.a.createElement("div",null,"\u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0437 \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0443\u044e. \u0422\u0430\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u044f\u0445 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445.")),r.a.createElement(h.k,{style:{margin:5},type:"text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c",id:"home-input"}),r.a.createElement(h.g,{id:"home-checkbox",onClick:function(){var e=1;1===A&&(e=0),M(e)}},r.a.createElement("p",{className:"checkbox-p"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432\u0438\u0434\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c")),r.a.createElement(h.e,{size:"m",style:{margin:5},onClick:V},"\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c"),r.a.createElement(h.i,null,r.a.createElement(h.j,{mode:"secondary"},r.a.createElement("p",{className:"checkbox-p"},"\u041d\u0435\u0434\u0430\u0432\u043d\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0451\u043d\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438")),k),w)}),C=n(150),_=function(e){var t=e.id,n=e.setToken,c=e.go,l=Object(a.useState)(null),s=Object(d.a)(l,2),i=s[0],f=s[1],p=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.send("VKWebAppGetAuthToken",{app_id:7790406,scope:""});case 3:t=e.sent,n(t),c({currentTarget:{dataset:{to:"home"}}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(r.a.createElement(h.s,{onClose:function(){return f(null)},before:r.a.createElement(h.d,{size:24,style:{background:"var(--destructive)"}},r.a.createElement(b.a,{fill:"#fff",width:14,height:14}))},"\u041e\u0448\u0438\u0431\u043a\u0430! \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043e\u0431\u0449\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0432\u0430\u0448\u0438\u0445 \u0441\u0441\u044b\u043b\u043a\u0430\u0445!"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.o,{id:t},r.a.createElement(h.p,null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 c\u0441\u044b\u043b\u043e\u043a"),r.a.createElement(h.i,null,r.a.createElement(h.r,{icon:r.a.createElement(C.a,null),action:r.a.createElement(h.e,{size:"m",onClick:p},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")},"\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0437 \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0443\u044e. \u0422\u0430\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u044f\u0445 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445. ",r.a.createElement("br",null),r.a.createElement("br",null),"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043a\u0430\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443!")),i)},S=(n(142),function(){var e=Object(a.useState)("new-user"),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),s=Object(d.a)(l,2),i=s[0],E=s[1],b=Object(a.useState)(r.a.createElement(p.a,{size:"large"})),k=Object(d.a)(b,2),g=k[0],v=k[1],y=Object(a.useState)(null),w=Object(d.a)(y,2),j=w[0],O=w[1],C=Object(a.useState)({access_token:0}),S=Object(d.a)(C,2),N=S[0],z=S[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,E(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}();var t=window.location.search.split("&");1===+t[3].slice(t[3].length-1,t[3].length)?c("home"):c("new-user")}),[]);var A=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(h.a,null,r.a.createElement(h.c,null,r.a.createElement(f.a,{activePanel:n,popout:g,modal:j},r.a.createElement(_,{id:"new-user",go:A,setToken:z}),r.a.createElement(x,{id:"home",fetchedUser:i,setModal:O,setPopout:v,token:N,go:A,setToken:z}))))});o.a.send("VKWebAppInit"),o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.5a0e3d79.chunk.js.map
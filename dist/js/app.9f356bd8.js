(function(){"use strict";var e={4024:function(e,t,a){var o=a(5130),r=a(6768);const n={id:"app"};function l(e,t,a,o,l,s){const u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.bF)(u)])}var s={name:"App"},u=a(1241);const i=(0,u.A)(s,[["render",l]]);var c=i,d=a(4373),p=a(1387),m=(a(4114),a(144));const b={class:"flex items-center justify-center min-h-screen bg-gray-50"},v={class:"flex justify-between mt-4"};var k={__name:"RegisterPage",setup(e){const t=(0,m.KR)(""),a=(0,m.KR)(""),n=(0,m.KR)(""),l=(0,m.KR)(""),s=(0,p.rd)(),u=async()=>{try{await d.A.post("/auth/register",{name:t.value,email:a.value,password:n.value,password_confirmation:l.value}),alert("Registration successful! You can now log in."),s.push({name:"LoginPage"})}catch(e){if(e.response&&e.response.data.errors){const t=e.response.data.errors.join("\n");alert(`Registration failed:\n${t}`)}else alert("Registration failed. Please try again.")}};return(e,s)=>{const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",b,[(0,r.Lk)("form",{onSubmit:(0,o.D$)(u,["prevent"]),class:"register-form"},[s[5]||(s[5]=(0,r.Lk)("h2",{class:"form-title"},"Register",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),placeholder:"Name",class:"form-input",required:"",type:"text"},null,512),[[o.Jo,t.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),placeholder:"Email",class:"form-input",required:"",type:"email"},null,512),[[o.Jo,a.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>n.value=e),placeholder:"Password",class:"form-input",required:"",type:"password"},null,512),[[o.Jo,n.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>l.value=e),placeholder:"Confirm Password",class:"form-input",required:"",type:"password"},null,512),[[o.Jo,l.value]]),s[6]||(s[6]=(0,r.Lk)("button",{type:"submit",class:"form-button"},"Register",-1)),(0,r.Lk)("div",v,[(0,r.bF)(i,{to:"/",class:"link"},{default:(0,r.k6)((()=>s[4]||(s[4]=[(0,r.eW)("Login")]))),_:1})])],32)])}}};const g=(0,u.A)(k,[["__scopeId","data-v-525625f6"]]);var y=g;const h={class:"flex items-center justify-center min-h-screen bg-gray-50"},f={class:"flex justify-between mt-4"};var x={__name:"LoginPage",setup(e){const t=(0,m.KR)(""),a=(0,m.KR)(""),n=(0,p.rd)(),l=async()=>{try{const e=await d.A.post("/auth/login",{email:t.value,password:a.value}),{data:o}=e;if(console.log("Data:",o),console.log("Token:",o.token),!o.token)throw new Error("Token is missing from response");localStorage.setItem("auth_token",o.token),n.push({name:"EmployeesPage"})}catch(e){alert("Failed to log in. Please check your credentials and try again.")}};return(e,n)=>{const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",h,[(0,r.Lk)("form",{onSubmit:(0,o.D$)(l,["prevent"]),class:"login-form"},[n[4]||(n[4]=(0,r.Lk)("h2",{class:"form-title"},"Login",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:"Email",class:"form-input",required:"",type:"email"},null,512),[[o.Jo,t.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),placeholder:"Password",class:"form-input",required:"",type:"password"},null,512),[[o.Jo,a.value]]),n[5]||(n[5]=(0,r.Lk)("button",{type:"submit",class:"form-button"},"Login",-1)),(0,r.Lk)("div",f,[(0,r.bF)(s,{to:"/register",class:"link"},{default:(0,r.k6)((()=>n[2]||(n[2]=[(0,r.eW)("Register")]))),_:1}),(0,r.bF)(s,{to:"/forgot-password",class:"link"},{default:(0,r.k6)((()=>n[3]||(n[3]=[(0,r.eW)("Forgot Password?")]))),_:1})])],32)])}}};const L=(0,u.A)(x,[["__scopeId","data-v-cd8dc512"]]);var w=L,_=a(4232),E=a(9782);const C={class:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"},A={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},P={class:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-sticky"},R={class:"flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},F={name:"NavBar"};var S=Object.assign(F,{setup(e){const t=(0,p.rd)();(0,r.sV)((()=>{(0,E.Tp)()}));const a=async()=>{try{await d.A.get("/auth/logout"),t.push("/")}catch(e){console.error("Failed to logout",e)}};return(e,t)=>{const o=(0,r.g2)("router-link"),n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("nav",C,[(0,r.Lk)("div",A,[(0,r.bF)(o,{to:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.Lk)("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"Employee MS",-1)]))),_:1}),(0,r.Lk)("div",{class:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"},[(0,r.Lk)("button",{onClick:a,type:"button",class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"}," Logout "),t[1]||(t[1]=(0,r.Lk)("button",{"data-collapse-toggle":"navbar-sticky",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-sticky","aria-expanded":"false"},[(0,r.Lk)("span",{class:"sr-only"},"Open main menu"),(0,r.Lk)("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[(0,r.Lk)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})])],-1))]),(0,r.Lk)("div",P,[(0,r.Lk)("ul",R,[(0,r.Lk)("li",null,[(0,r.bF)(o,{to:"/employees",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("Employees")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(o,{to:"/attendance",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("Attendance")]))),_:1})])])])])]),(0,r.bF)(n)])}}});const K=S;var X=K;const $={class:"p-20"},j={key:0},I={key:1,class:"min-w-full bg-white border border-gray-300 rounded-lg"},q={class:"px-4 py-2 border-b"},U={class:"px-4 py-2 border-b"},V={class:"px-4 py-2 border-b"},O={class:"px-4 py-2 border-b"},J={class:"px-4 py-2 text-center border-b space-x-2"},D=["onClick"],B=["onClick","disabled"],N={key:2,class:"modal-overlay"},z={class:"modal-content"},T={class:"text-xl font-bold mb-4"},M=["disabled"],W={key:0},Q={key:1},G=["disabled"];var Y={__name:"EmployeesPage",setup(e){const t=(0,m.KR)([]),a=(0,m.KR)(!1),n=(0,m.KR)(!1),l=(0,m.KR)(!1),s=(0,m.KR)({id:null,name:"",email:"",position:"",phone_number:""}),u=async()=>{l.value=!0;try{const{data:e}=await d.A.get("/employees",{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}});t.value=e}catch(e){console.error("Failed to fetch employees:",e)}finally{l.value=!1}},i=async()=>{l.value=!0;try{await d.A.post("/employees",{name:s.value.name,email:s.value.email,position:s.value.position,phone_number:s.value.phone_number},{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),u(),k()}catch(e){console.error("Failed to create employee:",e),alert("Error creating employee.")}finally{l.value=!1}},c=e=>{n.value=!0,s.value={...e},a.value=!0},p=async()=>{l.value=!0;try{await d.A.put(`/employees/${s.value.id}`,{name:s.value.name,email:s.value.email,position:s.value.position,phone_number:s.value.phone_number},{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),u(),k()}catch(e){console.error("Failed to update employee:",e),alert("Error updating employee.")}finally{l.value=!1}},b=async e=>{l.value=!0;try{await d.A.delete(`/employees/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),u()}catch(t){console.error("Failed to delete employee:",t)}finally{l.value=!1}},v=()=>{n.value=!1,s.value={name:"",email:"",position:"",phone_number:""},a.value=!0},k=()=>{a.value=!1,s.value={id:null,name:"",email:"",position:"",phone_number:""}};return(0,r.sV)(u),(e,u)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(X),(0,r.Lk)("div",$,[u[8]||(u[8]=(0,r.Lk)("h2",{class:"text-2xl font-bold mb-4"},"Employees",-1)),(0,r.Lk)("button",{onClick:v,class:"btn mb-4"},"Add New Employee"),l.value?((0,r.uX)(),(0,r.CE)("div",j,u[5]||(u[5]=[(0,r.Lk)("p",{class:"text-center py-4"},"Loading...",-1)]))):((0,r.uX)(),(0,r.CE)("table",I,[u[6]||(u[6]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Name"),(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Email"),(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Position"),(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Phone Number"),(0,r.Lk)("th",{class:"px-4 py-2 text-center border-b"},"Actions")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.value,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",q,(0,_.v_)(e.name),1),(0,r.Lk)("td",U,(0,_.v_)(e.email),1),(0,r.Lk)("td",V,(0,_.v_)(e.position),1),(0,r.Lk)("td",O,(0,_.v_)(e.phone_number||"N/A"),1),(0,r.Lk)("td",J,[(0,r.Lk)("button",{onClick:t=>c(e),class:"btn-small"},"Edit",8,D),(0,r.Lk)("button",{onClick:t=>b(e.id),class:"btn-red-small",disabled:l.value},"Delete",8,B)])])))),128))])])),a.value?((0,r.uX)(),(0,r.CE)("div",N,[(0,r.Lk)("div",z,[(0,r.Lk)("h3",T,(0,_.v_)(n.value?"Edit":"Add")+" Employee",1),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":u[0]||(u[0]=e=>s.value.name=e),placeholder:"Name",class:"form-input mb-2",required:""},null,512),[[o.Jo,s.value.name]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":u[1]||(u[1]=e=>s.value.email=e),placeholder:"Email",class:"form-input mb-2",type:"email",required:""},null,512),[[o.Jo,s.value.email]]),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":u[2]||(u[2]=e=>s.value.position=e),class:"form-input mb-2",required:""},u[7]||(u[7]=[(0,r.Fv)('<option disabled value="" data-v-24a39aea>Select Position</option><option value="Developer" data-v-24a39aea>Developer</option><option value="Manager" data-v-24a39aea>Manager</option><option value="Engineer" data-v-24a39aea>Engineer</option><option value="Designer" data-v-24a39aea>Designer</option>',5)]),512),[[o.u1,s.value.position]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>s.value.phone_number=e),placeholder:"Phone Number",class:"form-input mb-4",type:"tel"},null,512),[[o.Jo,s.value.phone_number]]),(0,r.Lk)("button",{onClick:u[4]||(u[4]=e=>n.value?p():i()),class:"btn mr-2",disabled:l.value},[l.value?((0,r.uX)(),(0,r.CE)("span",W,"Processing...")):((0,r.uX)(),(0,r.CE)("span",Q,(0,_.v_)(n.value?"Update":"Create"),1))],8,M),(0,r.Lk)("button",{onClick:k,class:"btn-gray",disabled:l.value},"Cancel",8,G)])])):(0,r.Q3)("",!0)])],64))}};const H=(0,u.A)(Y,[["__scopeId","data-v-24a39aea"]]);var Z=H;a(4603),a(7566),a(8721);const ee={class:"p-20"},te={key:0,class:"modal-overlay"},ae={class:"modal-content"},oe={key:1,class:"loader"},re={key:2,class:"min-w-full bg-white border border-gray-300 rounded-lg"},ne={class:"px-4 py-2 border-b"},le={class:"px-4 py-2 border-b"},se={key:0},ue={key:1},ie={class:"px-4 py-2 border-b"},ce={key:0},de={key:1},pe={class:"px-4 py-2 text-center border-b space-x-2"},me=["onClick"],be=["onClick","disabled"];var ve={__name:"AttendancePage",setup(e){const t=(0,m.KR)([]),a=(0,m.KR)(!1),n=(0,m.KR)("excel"),l=(0,m.KR)(null),s=(0,m.KR)(!1),u=async()=>{s.value=!0;try{const[e,a]=await Promise.all([d.A.get("/employees",{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),d.A.get("/attendance",{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}})]),o={};a.data.forEach((e=>{o[e.employee_id]=e})),t.value=e.data.map((e=>({...e,attendance:o[e.id]||null})))}catch(e){console.error("Failed to fetch data:",e)}finally{s.value=!1}},i=async e=>{s.value=!0;try{await d.A.post("/attendance/check-in",{employee_id:e},{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),await u()}catch(t){console.error("Failed to check-in:",t),alert("Error checking in employee.")}finally{s.value=!1}},c=async e=>{s.value=!0;try{await d.A.post("/attendance/check-out",{employee_id:e},{headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),await u()}catch(t){console.error("Failed to check-out:",t),alert("Error checking out employee.")}finally{s.value=!1}},p=()=>{a.value=!0,l.value=null},b=()=>{a.value=!1,n.value="excel"},v=async()=>{if(!l.value)return void alert("Please select a date.");s.value=!0;const e=n.value,t=l.value,a=`/attendance/export/${e}/${t}`;try{const o=await d.A.get(a,{responseType:"blob",headers:{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}}),r=new Blob([o.data]),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=`Attendance_Report_${t}.${"excel"===e?"xlsx":"pdf"}`,n.click(),b()}catch(o){console.error("Failed to generate report:",o),alert("Error generating report.")}finally{s.value=!1}};return(0,r.sV)(u),(e,u)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(X),(0,r.Lk)("div",ee,[u[7]||(u[7]=(0,r.Lk)("h2",{class:"text-2xl font-bold mb-4"},"Attendance",-1)),(0,r.Lk)("button",{onClick:p,class:"btn mb-4"},"Generate Report"),a.value?((0,r.uX)(),(0,r.CE)("div",te,[(0,r.Lk)("div",ae,[u[3]||(u[3]=(0,r.Lk)("h3",{class:"text-xl font-bold mb-4"},"Generate Attendance Report",-1)),u[4]||(u[4]=(0,r.Lk)("label",{for:"format",class:"block font-medium mb-1"},"Select Format",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":u[0]||(u[0]=e=>n.value=e),id:"format",class:"form-input mb-4",required:""},u[2]||(u[2]=[(0,r.Lk)("option",{value:"excel"},"Excel",-1),(0,r.Lk)("option",{value:"pdf"},"PDF",-1)]),512),[[o.u1,n.value]]),u[5]||(u[5]=(0,r.Lk)("label",{for:"date",class:"block font-medium mb-1"},"Select Date",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":u[1]||(u[1]=e=>l.value=e),type:"date",id:"date",class:"form-input mb-4",required:""},null,512),[[o.Jo,l.value]]),(0,r.Lk)("button",{onClick:v,class:"btn mr-2"},"Generate"),(0,r.Lk)("button",{onClick:b,class:"btn-gray"},"Cancel")])])):(0,r.Q3)("",!0),s.value?((0,r.uX)(),(0,r.CE)("div",oe,"Loading...")):(0,r.Q3)("",!0),s.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("table",re,[u[6]||(u[6]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Employee Name"),(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Check-In"),(0,r.Lk)("th",{class:"px-4 py-2 text-left border-b"},"Check-Out"),(0,r.Lk)("th",{class:"px-4 py-2 text-center border-b"},"Actions")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.value,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",ne,(0,_.v_)(e.name),1),(0,r.Lk)("td",le,[e.attendance&&e.attendance.check_in?((0,r.uX)(),(0,r.CE)("span",se,(0,_.v_)(new Date(e.attendance.check_in).toLocaleTimeString()),1)):((0,r.uX)(),(0,r.CE)("span",ue,"N/A"))]),(0,r.Lk)("td",ie,[e.attendance&&e.attendance.check_out?((0,r.uX)(),(0,r.CE)("span",ce,(0,_.v_)(new Date(e.attendance.check_out).toLocaleTimeString()),1)):((0,r.uX)(),(0,r.CE)("span",de,"N/A"))]),(0,r.Lk)("td",pe,[e.attendance&&e.attendance.check_in?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",{key:0,onClick:t=>i(e.id),class:"btn-small"}," Check-In ",8,me)),(0,r.Lk)("button",{onClick:t=>c(e.id),class:"btn-small",disabled:!e.attendance||!e.attendance.check_in||e.attendance.check_out}," Check-Out ",8,be)])])))),128))])]))])],64))}};const ke=(0,u.A)(ve,[["__scopeId","data-v-4723c442"]]);var ge=ke;const ye={class:"flex items-center justify-center min-h-screen bg-gray-50"},he={class:"flex justify-between mt-4"};var fe={__name:"ForgetPassword",setup(e){const t=(0,m.KR)(""),a=async()=>{try{await d.A.post("/auth/password/forgot",{email:t.value}),alert("Reset link sent! Please check your email.")}catch(e){e.response&&e.response.data.message?alert(`Failed to send reset link:\n${e.response.data.message}`):alert("Failed to send reset link. Please try again.")}};return(e,n)=>{const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",ye,[(0,r.Lk)("form",{onSubmit:(0,o.D$)(a,["prevent"]),class:"forgot-password-form"},[n[2]||(n[2]=(0,r.Lk)("h2",{class:"form-title"},"Forgot Password",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),placeholder:"Email",class:"form-input",required:"",type:"email"},null,512),[[o.Jo,t.value]]),n[3]||(n[3]=(0,r.Lk)("button",{type:"submit",class:"form-button"},"Send Reset Link",-1)),(0,r.Lk)("div",he,[(0,r.bF)(l,{to:"/",class:"link"},{default:(0,r.k6)((()=>n[1]||(n[1]=[(0,r.eW)("Login")]))),_:1})])],32)])}}};const xe=(0,u.A)(fe,[["__scopeId","data-v-01116b8b"]]);var Le=xe;const we={class:"flex items-center justify-center min-h-screen bg-gray-50"};var _e={__name:"ResetPassword",setup(e){const t=(0,m.KR)(""),a=(0,m.KR)(""),n=(0,m.KR)(""),l=(0,m.KR)(""),s=(0,p.lq)();t.value=s.query.email||"",l.value=s.query.token||"";const u=async()=>{if(a.value===n.value)try{await d.A.post("/auth/password/reset",{token:l.value,email:t.value,password:a.value}),alert("Password has been reset! You can now log in.")}catch(e){alert("Failed to reset password. Please try again.")}else alert("Password confirmation does not match.")};return(e,s)=>((0,r.uX)(),(0,r.CE)("div",we,[(0,r.Lk)("form",{onSubmit:(0,o.D$)(u,["prevent"]),class:"reset-password-form"},[s[4]||(s[4]=(0,r.Lk)("h2",{class:"form-title"},"Reset Password",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),placeholder:"Email",class:"form-input",required:"",type:"email",style:{display:"none"}},null,512),[[o.Jo,t.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>l.value=e),placeholder:"Reset Token",class:"form-input",required:"",type:"text",style:{display:"none"}},null,512),[[o.Jo,l.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>a.value=e),placeholder:"New Password",class:"form-input",required:"",type:"password"},null,512),[[o.Jo,a.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>n.value=e),placeholder:"Confirm New Password",class:"form-input",required:"",type:"password"},null,512),[[o.Jo,n.value]]),s[5]||(s[5]=(0,r.Lk)("button",{type:"submit",class:"form-button"},"Reset Password",-1))],32)]))}};const Ee=(0,u.A)(_e,[["__scopeId","data-v-dad5973e"]]);var Ce=Ee;const Ae=[{path:"/",name:"Login",component:w},{path:"/register",name:"RegisterPage",component:y},{path:"/forgot-password",name:"ForgetPasswordPage",component:Le},{path:"/reset-password",name:"ResetPasswordPage",component:Ce},{path:"/employees",name:"EmployeesPage",component:Z},{path:"/attendance",name:"AttendancePage",component:ge}],Pe=(0,p.aE)({history:(0,p.LA)(),routes:Ae});Pe.beforeEach(((e,t,a)=>{const o=localStorage.getItem("auth_token");e.meta.requiresAuth&&!o?a({name:"Login"}):a()}));var Re=Pe;d.A.defaults.baseURL="https://kudibooksapi.aimedidierm.xyz/api",d.A.defaults.withCredentials=!0;const Fe=(0,o.Ef)(c);Fe.use(Re),Fe.config.globalProperties.$axios=d.A,Fe.mount("#app"),d.A.interceptors.request.use((e=>{const t=localStorage.getItem("auth_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}))}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],n=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[u])}))?o.splice(u--,1):(s=!1,n<l&&(l=n));if(s){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,l=o[0],s=o[1],u=o[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(u)var c=u(a)}for(t&&t(o);i<l.length;i++)n=l[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},o=self["webpackChunkemployee_management_software"]=self["webpackChunkemployee_management_software"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(4024)}));o=a.O(o)})();
//# sourceMappingURL=app.9f356bd8.js.map
"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[816],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=n,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(g,i(i({ref:r},m),{},{components:t})):a.createElement(g,i({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5506:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:3,description:"Depois de criar sua transmiss\xe3o ao vivo, voc\xea precisar\xe1 definir um destino.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"orange"}},i="Defina um destino de streaming",s={unversionedId:"category-livestreaming/streamingdestination",id:"category-livestreaming/streamingdestination",title:"Defina um destino de streaming",description:"Depois de criar sua transmiss\xe3o ao vivo, voc\xea precisar\xe1 definir um destino.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/category-livestreaming/streamingdestination.mdx",sourceDirName:"category-livestreaming",slug:"/category-livestreaming/streamingdestination",permalink:"/pt/category-livestreaming/streamingdestination",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/pt/docusaurus-plugin-content-docs/current/category-livestreaming/streamingdestination.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Depois de criar sua transmiss\xe3o ao vivo, voc\xea precisar\xe1 definir um destino.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"orange"}},sidebar:"helphub",previous:{title:"Configura\xe7\xe3o e customiza\xe7\xe3o",permalink:"/pt/category-livestreaming/category-creatingalivestream/settings"},next:{title:"Reutiliza\xe7\xe3o de chave/servidor de streaming",permalink:"/pt/category-livestreaming/streaminfo"}},p={},l=[{value:"OBS",id:"obs",level:2},{value:"Streamyard",id:"streamyard",level:2},{value:"Restream",id:"restream",level:2}],m={toc:l};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defina-um-destino-de-streaming"},"Defina um destino de streaming"),(0,n.kt)("p",null,"Depois de criar sua transmiss\xe3o ao vivo, mude para a guia ",(0,n.kt)("strong",{parentName:"p"},"Configura\xe7\xf5es locais"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/OPUlCNP.png",alt:null})),(0,n.kt)("p",null,"Seu servidor de streaming e chave de streaming s\xe3o usados \u200b\u200bpara informar ao seu software de streaming para onde enviar sua transmiss\xe3o ao vivo. Ele ir\xe1 copi\xe1-los e inseri-los onde for necess\xe1rio em seu software de streaming."),(0,n.kt)("h2",{id:"obs"},"OBS"),(0,n.kt)("p",null,"No OBS, clique em Arquivo > Configura\xe7\xf5es > Transmiss\xe3o."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/wgEGHE0.gif",alt:null})),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"Servi\xe7o"),", voc\xea selecionar\xe1 ",(0,n.kt)("em",{parentName:"p"},"Personalizado"),"."),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"Servidor"),", voc\xea entrar\xe1 no servidor de streaming fornecido no Odysee."),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"Stream Key"),", voc\xea inserir\xe1 a chave de stream fornecida no Odysee."),(0,n.kt)("p",null,"Se tudo estiver correto, clique em ",(0,n.kt)("strong",{parentName:"p"},"OK"),"."),(0,n.kt)("h2",{id:"streamyard"},"Streamyard"),(0,n.kt)("admonition",{title:"Observa\xe7\xe3o:",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Para transmitir ao vivo para o Odysee usando o Streamyard, voc\xea precisar\xe1 ter a vers\xe3o paga do Streamyard.")),(0,n.kt)("p",null,"Na tela principal do Streamyard ap\xf3s o login, voc\xea selecionar\xe1 ",(0,n.kt)("strong",{parentName:"p"},"Destinos")," no lado direito."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"#",alt:null})),(0,n.kt)("p",null,"A partir daqui, voc\xea selecionar\xe1 ",(0,n.kt)("strong",{parentName:"p"},"Adicionar destino")," e ",(0,n.kt)("strong",{parentName:"p"},"RTMP personalizado"),"."),(0,n.kt)("p",null,"Na pr\xf3xima tela, voc\xea come\xe7ar\xe1 a inserir suas informa\xe7\xf5es de transmiss\xe3o."),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"RTMP Server URL"),", voc\xea entrar\xe1 no servidor de streaming fornecido no Odysee."),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"Stream Key"),", voc\xea inserir\xe1 a chave de stream fornecida no Odysee."),(0,n.kt)("p",null,"Se tudo estiver correto, clique em ",(0,n.kt)("strong",{parentName:"p"},"Add RTMP Server"),"."),(0,n.kt)("h2",{id:"restream"},"Restream"),(0,n.kt)("admonition",{title:"Observa\xe7\xe3o:",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Para transmitir ao vivo para o Odysee usando o Restream, voc\xea precisar\xe1 ter a vers\xe3o paga do Restream.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"#",alt:null})),(0,n.kt)("p",null,"Na tela principal de Transmiss\xe3o ap\xf3s o login, voc\xea selecionar\xe1 ",(0,n.kt)("strong",{parentName:"p"},"Transmitir com o Studio"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"#",alt:null})),(0,n.kt)("p",null,"Quando estiver no est\xfadio, voc\xea selecionar\xe1 ",(0,n.kt)("strong",{parentName:"p"},"Add Destination")," e ",(0,n.kt)("strong",{parentName:"p"},"Custom RTMP"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"#",alt:null})),(0,n.kt)("p",null,"A partir daqui, voc\xea come\xe7ar\xe1 a inserir suas informa\xe7\xf5es de transmiss\xe3o."),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"RTMP URL"),", voc\xea entrar\xe1 no servidor de streaming fornecido no Odysee."),(0,n.kt)("p",null,"Em ",(0,n.kt)("strong",{parentName:"p"},"Stream Key"),", voc\xea inserir\xe1 a chave de stream fornecida no Odysee."),(0,n.kt)("p",null,"Se tudo estiver correto, clique em ",(0,n.kt)("strong",{parentName:"p"},"Adicionar canal"),"."))}c.isMDXComponent=!0}}]);
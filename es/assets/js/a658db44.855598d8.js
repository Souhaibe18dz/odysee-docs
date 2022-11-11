"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[2508],{3905:(e,o,n)=>{n.d(o,{Zo:()=>u,kt:()=>p});var a=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),c=function(e){var o=a.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},u=function(e){var o=c(e.components);return a.createElement(s.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=t,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(b,r(r({ref:o},u),{},{components:n})):a.createElement(b,r({ref:o},u))}));function p(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6333:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),t=(n(7294),n(3905));const i={sidebar_position:4,description:"Bloqueo/silenciamiento de usuarios y eliminaci\xf3n de comentarios.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"left",tileColor:"blue"}},r="Moderaci\xf3n de Comentario",l={unversionedId:"category-moderation/commentmoderation",id:"category-moderation/commentmoderation",title:"Moderaci\xf3n de Comentario",description:"Bloqueo/silenciamiento de usuarios y eliminaci\xf3n de comentarios.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/category-moderation/commentmoderation.mdx",sourceDirName:"category-moderation",slug:"/category-moderation/commentmoderation",permalink:"/es/category-moderation/commentmoderation",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/es/docusaurus-plugin-content-docs/current/category-moderation/commentmoderation.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Bloqueo/silenciamiento de usuarios y eliminaci\xf3n de comentarios.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Configuraci\xf3n del creador",permalink:"/es/category-moderation/creatorsettings"},next:{title:"Descubrimiento de contenido",permalink:"/es/category-contentdiscovery/"}},s={},c=[{value:"Bloqueo",id:"bloqueo",level:2},{value:"Silenciar",id:"silenciar",level:2},{value:"Eliminaci\xf3n de comentarios",id:"eliminaci\xf3n-de-comentarios",level:2},{value:"Visualizaci\xf3n de usuarios/canales bloqueados y/o silenciados (desbloqueo y/o silenciamiento)",id:"visualizaci\xf3n-de-usuarioscanales-bloqueados-yo-silenciados-desbloqueo-yo-silenciamiento",level:2},{value:"M\xfaltiples canales",id:"m\xfaltiples-canales",level:2}],u={toc:c};function d(e){let{components:o,...i}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,i,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"moderaci\xf3n-de-comentario"},"Moderaci\xf3n de Comentario"),(0,t.kt)("h2",{id:"bloqueo"},"Bloqueo"),(0,t.kt)("p",null,"Cuando bloquea a un usuario, el usuario bloqueado ya no puede comentar en ninguno de sus contenidos, canales o hilos de comentarios."),(0,t.kt)("p",null,"Adem\xe1s de esto, todos los comentarios y reacciones que deje el usuario bloqueado en tu contenido, canal o en la secci\xf3n de comentarios, ",(0,t.kt)("strong",{parentName:"p"},"ser\xe1n filtrados para todos"),". Si desbloqueas el canal, se restaurar\xe1n."),(0,t.kt)("p",null,"Esencialmente, cuando bloquea a un usuario, se elimina por completo de su experiencia en Odysee y no puede interactuar con usted, pero a\xfan puede ver su contenido."),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Nota: actualmente, los canales bloqueados a\xfan pueden reaccionar al contenido, pero tambi\xe9n lo limitaremos pronto.")),(0,t.kt)("p",null,"Puede bloquear a un usuario haciendo clic en los tres puntos en un comentario:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(3717).Z,width:"1842",height:"606"})),(0,t.kt)("p",null,"Desde este men\xfa, podr\xe1 elegir la duraci\xf3n de la prohibici\xf3n, ya sea permanente o temporal."),(0,t.kt)("p",null,"Si eres un moderador delegado que bloquea en nombre de otro canal, podr\xe1s elegir si es un bloqueo personal o un bloqueo de moderador."),(0,t.kt)("h2",{id:"silenciar"},"Silenciar"),(0,t.kt)("p",null,"Cuando silencia a un usuario, ya no lo ver\xe1 en ninguna secci\xf3n de comentarios, respuestas, resultados de b\xfasqueda, p\xe1gina de inicio, contenido relacionado ni en ning\xfan otro lugar. Est\xe1n ocultos de tu experiencia en Odysee."),(0,t.kt)("p",null,"El usuario a\xfan podr\xe1 interactuar con su canal y contenido y no sabr\xe1 que est\xe1 silenciado."),(0,t.kt)("h2",{id:"eliminaci\xf3n-de-comentarios"},"Eliminaci\xf3n de comentarios"),(0,t.kt)("p",null,"Puedes eliminar cualquier comentario en tu canal y/o contenido haciendo clic en los 3 puntos en el lado derecho y seleccionando ",(0,t.kt)("strong",{parentName:"p"},"Eliminar"),"."),(0,t.kt)("h2",{id:"visualizaci\xf3n-de-usuarioscanales-bloqueados-yo-silenciados-desbloqueo-yo-silenciamiento"},"Visualizaci\xf3n de usuarios/canales bloqueados y/o silenciados (desbloqueo y/o silenciamiento)"),(0,t.kt)("p",null,"Haz clic en el icono de la imagen de perfil en la esquina superior derecha y selecciona *",(0,t.kt)("em",{parentName:"p"},"Configuraci\xf3n"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(6554).Z,width:"1897",height:"975"})),(0,t.kt)("p",null,"En el men\xfa de configuraci\xf3n, despl\xe1zate hasta la secci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Configuraci\xf3n de contenido")," y selecciona ",(0,t.kt)("strong",{parentName:"p"},"Canales bloqueados y silenciados"),"."),(0,t.kt)("p",null,"Aqu\xed, puede reactivar/desbloquear usuarios, o cambiar el estado de un usuario de bloqueado a silenciado, o viceversa."),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(447).Z,width:"1612",height:"692"})),(0,t.kt)("p",null,"Actualice la p\xe1gina para que los cambios surtan efecto."),(0,t.kt)("h2",{id:"m\xfaltiples-canales"},"M\xfaltiples canales"),(0,t.kt)("p",null,"Las acciones de moderaci\xf3n afectan a un usuario a nivel de cuenta; por lo tanto, incluso si un usuario tiene varios canales, bloquear o silenciar cualquiera de ellos se aplicar\xe1 a todos sus canales."),(0,t.kt)("p",null,"Cualquier nuevo canal creado por ellos tambi\xe9n se ver\xe1 afectado por sus acciones de moderaci\xf3n."))}d.isMDXComponent=!0},6554:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/category-moderation10-a2ff7919911c6006a6dcbba9499b4172.png"},3717:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/category-moderation7-a22a30283b01a2f5fd2cf87347178e69.png"},447:(e,o,n)=>{n.d(o,{Z:()=>a});const a=n.p+"assets/images/category-moderation8-8e24f57b019a4f20d5a99944b68569ca.png"}}]);
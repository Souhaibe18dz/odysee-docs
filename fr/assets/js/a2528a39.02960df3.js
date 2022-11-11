"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[7427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},o="D\xe9finition d'une destination de streaming",s={unversionedId:"category-livestreaming/streamingdestination",id:"category-livestreaming/streamingdestination",title:"D\xe9finition d'une destination de streaming",description:"Apr\xe8s la cr\xe9ation de votre livestream, passez \xe0 l'onglet Configuration locale.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/category-livestreaming/streamingdestination.mdx",sourceDirName:"category-livestreaming",slug:"/category-livestreaming/streamingdestination",permalink:"/fr/category-livestreaming/streamingdestination",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/category-livestreaming/streamingdestination.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Settings and Customization",permalink:"/fr/category-livestreaming/category-creatingalivestream/settings"},next:{title:"R\xe9utilisation du serveur/de la cl\xe9 de streaming",permalink:"/fr/category-livestreaming/streaminfo"}},l={},p=[{value:"OBS",id:"obs",level:2},{value:"Streamyard",id:"streamyard",level:2},{value:"Restream",id:"restream",level:2}],u=(m="Image",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"d\xe9finition-dune-destination-de-streaming"},"D\xe9finition d'une destination de streaming"),(0,a.kt)("p",null,"Apr\xe8s la cr\xe9ation de votre livestream, passez \xe0 l'onglet ",(0,a.kt)("strong",{parentName:"p"},"Configuration locale"),"."),(0,a.kt)(u,{src:"/img/fr/Live.png",mdxType:"Image"}),(0,a.kt)("p",null,"Votre serveur de streaming et votre cl\xe9 de streaming sont utilis\xe9s pour indiquer \xe0 votre logiciel de streaming o\xf9 envoyer votre livestream. Vous les copierez et les saisirez l\xe0 o\xf9 cela est n\xe9cessaire dans votre logiciel de streaming."),(0,a.kt)("h2",{id:"obs"},"OBS"),(0,a.kt)("p",null,"Sur OBS, vous devez cliquer sur Fichier > Param\xe8tres > Stream."),(0,a.kt)("video",{width:"100%",autoplay:"true",loop:"true",muted:"true"},(0,a.kt)("source",{src:"/img/fr/LiveOBS.mp4",type:"video/mp4"}),"Votre navigateur ne prend pas en charge les balises vid\xe9o."),(0,a.kt)("p",null,"Sur ",(0,a.kt)("strong",{parentName:"p"},"Service"),", vous s\xe9lectionnerez ",(0,a.kt)("em",{parentName:"p"},"Personnalis\xe9"),"."),(0,a.kt)("p",null,"Dans la zone ",(0,a.kt)("strong",{parentName:"p"},"Serveur"),", vous devez saisir le serveur de streaming fourni par Odysee."),(0,a.kt)("p",null,"Dans la zone ",(0,a.kt)("strong",{parentName:"p"},"Stream Key"),", entrez la cl\xe9 de streaming fournie par Odysee."),(0,a.kt)("p",null,"Si tout est correct, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Ok"),"."),(0,a.kt)("h2",{id:"streamyard"},"Streamyard"),(0,a.kt)("admonition",{title:"Important ",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Pour diffuser un livestream sur Odysee \xe0 l'aide de Streamyard, vous devez disposer de la version payante de Streamyard.")),(0,a.kt)("p",null,"Sur l'",(0,a.kt)("a",{parentName:"p",href:"https://streamyard.com/broadcasts"},"\xe9cran principal de Streamyard")," , apr\xe8s vous \xeatre connect\xe9, vous s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},"Destinations")," sur le c\xf4t\xe9 droit."),(0,a.kt)(u,{src:"/img/fr/Livestreamyard.png",mdxType:"Image"}),(0,a.kt)("p",null,"\xc0 partir de l\xe0, vous s\xe9lectionnerez ",(0,a.kt)("strong",{parentName:"p"},"Ajouter une destination")," et ",(0,a.kt)("strong",{parentName:"p"},"RTMP personnalis\xe9"),"."),(0,a.kt)(u,{src:"/img/fr/Livestreamyard2.png",mdxType:"Image"}),(0,a.kt)("p",null,"Sur l'\xe9cran suivant, vous commencerez \xe0 saisir vos informations de streaming."),(0,a.kt)("p",null,"Dans la zone ",(0,a.kt)("strong",{parentName:"p"},"Serveur RTMP URL"),", vous devez saisir le serveur de streaming fourni par Odysee."),(0,a.kt)("p",null,"Sur ",(0,a.kt)("strong",{parentName:"p"},"Cl\xe9 de streaming"),", vous devez saisir la cl\xe9 de streaming fournie par Odysee."),(0,a.kt)(u,{src:"/img/de/streamyard_add_custom_rtmp.png",mdxType:"Image"}),(0,a.kt)("p",null,"Si tout est correct, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Ajouter un serveur RTMP"),"."),(0,a.kt)("h2",{id:"restream"},"Restream"),(0,a.kt)("admonition",{title:"Important",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Pour faire du livestream sur Odysee en utilisant Restream, vous devez avoir la version payante de Restream.*")),(0,a.kt)("p",null,"Sur l'\xe9cran principal de Restream apr\xe8s la connexion, vous s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},"Transmission avec Studio"),"."),(0,a.kt)(u,{src:"/img/de/restream_add_destination_arrow.png",mdxType:"Image"}),(0,a.kt)("p",null,"Une fois dans le studio, vous s\xe9lectionnerez ",(0,a.kt)("strong",{parentName:"p"},"Ajouter une destination")," et ",(0,a.kt)("strong",{parentName:"p"},"RTMP personnalis\xe9"),"."),(0,a.kt)(u,{src:"/img/de/restream_studio_arrow.png",mdxType:"Image"}),(0,a.kt)(u,{src:"/img/de/restream_select_service_arrow.png",mdxType:"Image"}),(0,a.kt)("p",null,"\xc0 partir de l\xe0, vous commencerez \xe0 saisir vos informations de streaming."),(0,a.kt)("p",null,"Dans ",(0,a.kt)("strong",{parentName:"p"},"RTMP URL"),", vous devez saisir le serveur de streaming fourni par Odysee."),(0,a.kt)("p",null,"Sur ",(0,a.kt)("strong",{parentName:"p"},"streaming key"),", vous devez saisir la cl\xe9 de streaming fournie par Odysee."),(0,a.kt)("p",null,"Si tout est correct, vous cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Ajouter une cha\xeene"),"."),(0,a.kt)(u,{src:"/img/de/restream_ender_rtmp.png",mdxType:"Image"}))}c.isMDXComponent=!0}}]);
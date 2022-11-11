"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[5908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=p(n),c=r,u=y["".concat(l,".").concat(c)]||y[c]||m[c]||o;return n?a.createElement(u,d(d({ref:t},s),{},{components:n})):a.createElement(u,d({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var p=2;p<o;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9808:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(9436),d=n(5488),i=n(5162);const l={slug:"/contribute",sidebar_label:"Contributing",sidebar_position:500,title:"Contributing",description:"Here, you see all the formatting options that are possible if you want to contribute to the Help Hub.",image:"https://i.imgur.com/FpXwZoM.jpg"},p="Contributing to Help Hub",s={type:"mdx",permalink:"/fr/contribute",source:"@site/src/pages/contribute.mdx",title:"Contributing",description:"Here, you see all the formatting options that are possible if you want to contribute to the Help Hub.",frontMatter:{slug:"/contribute",sidebar_label:"Contributing",sidebar_position:500,title:"Contributing",description:"Here, you see all the formatting options that are possible if you want to contribute to the Help Hub.",image:"https://i.imgur.com/FpXwZoM.jpg"}},m=[{value:"Icons and Buttons",id:"icons-and-buttons",level:2},{value:"Tags &amp; metadata:",id:"tags--metadata",level:3},{value:"Demo",id:"demo",level:2},{value:"Themed images",id:"themed-images",level:3},{value:"Markdown",id:"markdown",level:3},{value:"Tabs",id:"tabs",level:3},{value:"Example use case:",id:"example-use-case",level:4},{value:"Admonitions",id:"admonitions",level:3},{value:"Custom components",id:"custom-components",level:3},{value:"Embedding",id:"embedding",level:3},{value:"Metadata:",id:"metadata",level:3}],y=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=y("OdyseeButton"),u=y("PrimaryOdyseeButton"),k=y("OdyseeButtonRound"),g=y("OdyseeIcon"),h=y("Credits"),N={toc:m};function f(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},N,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-to-help-hub"},"Contributing to Help Hub"),(0,r.kt)(o.Z,{mdxType:"FungusCard"},'Here, I show you how you can format and help me to further improve this help hub. To propose a change and edit the help hub, click on the "Propose a change" button.'),(0,r.kt)("h2",{id:"icons-and-buttons"},"Icons and Buttons"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Icon/Button"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(c,{mdxType:"OdyseeButton"},"Test")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<OdyseeButton>Test</OdyseeButton>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(c,{url:"https://odysee.com",mdxType:"OdyseeButton"},"Test")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeButton url="https://odysee.com">Test</OdyseeButton>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(u,{mdxType:"PrimaryOdyseeButton"},"Test")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<PrimaryOdyseeButton>Test</PrimaryOdyseeButton>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(u,{url:"https://odysee.com",mdxType:"PrimaryOdyseeButton"},"Test")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<PrimaryOdyseeButton url="https://odysee.com">Test</PrimaryOdyseeButton>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(k,{url:"https://odysee.com/$/wallet",mdxType:"OdyseeButtonRound"},(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"}))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeButtonRound url="https://odysee.com/$/wallet"><OdyseeIcon type="credits"/></OdyseeButtonRound>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="credits"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"unlock",color:"#de0050",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="unlock" color="#de0050"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"unlock",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="unlock"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"edit",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="edit"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"morevertical",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="morevertical"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"playlistadd",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="playlistadd"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"playlist",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="playlist"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"chevrondown",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="chevrondown"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"chevronright",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="chevronright"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"livestream",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="livestream"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"post",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="post"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"signout",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="signout"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"helpcircle",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="helpcircle"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"upgrade",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="upgrade"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"users",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="users"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"award",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="award"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"testtube",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="testtube"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"youtube",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="youtube"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"atsign",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="atsign"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"dollar",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="dollar"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"wallet",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="wallet"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"cogwheel",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="cogwheel"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"bell",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="bell"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"key",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="key"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"person",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="person"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"uploadcloud",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="uploadcloud"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"sticker",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="sticker"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"trash",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="trash"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"featured",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="featured"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"life",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="life"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"education",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="education"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"aperature",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="aperature"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"peace",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="peace"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"pop culture",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="pop culture"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"speaker",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="speaker"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"universe",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="universe"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"gaming",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="gaming"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"music",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="music"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"lifestyle",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="lifestyle"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"comedy",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="comedy"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"artists",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="artists"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"sports",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="sports"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"rabbithole",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="rabbithole"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"heart",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="heart"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(g,{type:"home",mdxType:"OdyseeIcon"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'<OdyseeIcon type="home"/>'))))),(0,r.kt)("h3",{id:"tags--metadata"},"Tags & metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\nsidebar_position: 1\ntitle: What is Odysee?\nthumbnail: https://placehold.co/1200x600\ndescription: Odysee sounds cool. What is it, though?\nsidebar_custom_props:\n  faIcon: "fa-circle-play"\n  cardThumbnail: "/img/g_1200x600_Transparent_Placeholder.png" #The thumbnail on the category card.\n  cardSize: 12 #12 is full size, 6 is 50% width, etc.\n  thumbnailLocation: "left" #Possible options: top, left, bottom, right, none\n  tileColor: "blue" #Placeholder tiles until thumbnail is ready, possible options: blue, cream, darkpurple, lightpurple, mauve, orange, pink, none\ntags:\n  - Odysee\n---\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use FontAwesome in mdx files:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'<FontAwesomeIcon icon="coffee" color="#de0050" />')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://fontawesome.com/v5/docs/web/use-with/react#features"},"FontAwesome Documentation"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(942).Z,width:"1906",height:"1062"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)(c,{url:"https://odysee.com/$/wallet",mdxType:"OdyseeButton"},(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"})," Your Wallet")," to view your wallet on Odysee."),(0,r.kt)("p",null,"On mobile, press ",(0,r.kt)(k,{url:"https://odysee.com/$/wallet",mdxType:"OdyseeButtonRound"},(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"}))," to view your wallet on Odysee."),(0,r.kt)("p",null,"Click on ",(0,r.kt)(k,{url:"https://odysee.com/$/notifications",mdxType:"OdyseeButtonRound"},(0,r.kt)(g,{type:"bell",mdxType:"OdyseeIcon"}))," to view your notifications on Odysee."),(0,r.kt)("p",null,"These are LBRY Credits: ",(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"}),", they can be in a button: ",(0,r.kt)(k,{mdxType:"OdyseeButtonRound"},(0,r.kt)(g,{type:"credits",mdxType:"OdyseeIcon"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'<OdyseeButtonRound>\n  <OdyseeIcon type="credits" />\n</OdyseeButtonRound>\n')),(0,r.kt)(u,{url:"https://odysee.com/$/signup",mdxType:"PrimaryOdyseeButton"},"Sign Up"),(0,r.kt)(d.Z,{groupId:"device",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"Web",mdxType:"TabItem"},"This is Web."),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"This is any mobile device or mobile view of Web."),(0,r.kt)(i.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},"This is a iOS device.")),(0,r.kt)(d.Z,{groupId:"device",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"web",label:"Web",mdxType:"TabItem"},"This is Web."),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"This is any mobile device or mobile view of Web."),(0,r.kt)(i.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},"This is a iOS device.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"This is the index site that contains a few useful formatting tools that Docusraurus offers."),(0,r.kt)("h3",{id:"themed-images"},"Themed images"),(0,r.kt)("p",null,"The image toggles between light and dark mode:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/vu3pTG8.png#light",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/I0eaZtW.png#dark",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"![Logo with white text](/img/Logo_Transparent_White_Text.png#dark)\n![Logo with black text](/img/Logo_White_Background_Black_Text.png#light)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Image\n  img={require('/img/Logo_Transparent_White_Text.png')}\n  class=\"dark-image\"\n/>\n<Image\n  img={require('/img/Logo_White_Background_Black_Text.png')}\n  class=\"light-image\"\n/>\n")),(0,r.kt)("h3",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"Like on Odysee.com, you can use markdown formatting as usual."),(0,r.kt)("h3",{id:"tabs"},"Tabs"),(0,r.kt)("p",null,"In some cases, you may want to give instructions depending on the device."),(0,r.kt)("h4",{id:"example-use-case"},"Example use case:"),(0,r.kt)("p",null,"How to upload content:"),(0,r.kt)(d.Z,{groupId:"appUsed",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Odysee.com",label:"Odysee.com",default:!0,mdxType:"TabItem"},"1. This is how you upload content on Odysee.com"),(0,r.kt)(i.Z,{value:"Android",label:"Android",mdxType:"TabItem"},"1. This is how you upload content on Android"),(0,r.kt)(i.Z,{value:"Apple",label:"Apple",mdxType:"TabItem"},"1. This is how you upload content on Apple")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'<Tabs groupId="appUsed">\n  <TabItem value="Odysee.com" label="Odysee.com" default>\n    This is how you upload content on Odysee.com\n    1. test\n    2. hello\n    3. 123\n  </TabItem>\n  <TabItem value="Android" label="Android">\n    This is how you upload content on Android\n  </TabItem>\n  <TabItem value="Apple" label="Apple">\n    This is how you upload content on Apple\n  </TabItem>\n</Tabs>\n')),(0,r.kt)("h3",{id:"admonitions"},"Admonitions"),(0,r.kt)("admonition",{title:"Be careful!",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Sometimes, you want people to read something ",(0,r.kt)("strong",{parentName:"p"},"very important")," or useful. Use Admonitions like these to get their attention!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},":::note Something to note...\n\nSometimes, you want people to read something **very important** or useful. Use Admonitions like these to get their attention!\n\n:::\n\n:::tip Useful\n\nSometimes, you want people to read something **very important** or useful. Use Admonitions like these to get their attention!\n\n:::\n\n:::info\n\nSometimes, you want people to read something **very important** or useful. Use Admonitions like these to get their attention!\n\n:::\n\n:::caution Be careful!\n\nSometimes, you want people to read something **very important** or useful. Use Admonitions like these to get their attention!\n\n:::\n\n:::danger\n\nSometimes, you want people to read something **very important** or useful. Use Admonitions like these to get their attention!\n\n:::\n")),(0,r.kt)("h3",{id:"custom-components"},"Custom components"),(0,r.kt)("p",null,"We can add components, like custom buttons that match the Odysee style or use ",(0,r.kt)(h,{mdxType:"Credits"})," Credits."),(0,r.kt)("h3",{id:"embedding"},"Embedding"),(0,r.kt)("iframe",{width:"100%",height:"365px",src:"https://odysee.com/$/embed/youtubegulag/2d9c9ab133eecc0cc71da8ebc2dbe72ff634a2ff?r=97bT3hvnLEY1inLzM9eE6PG2qDS4h4KF",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<iframe\n  width="100%"\n  height="365px"\n  src="https://odysee.com/$/embed/youtubegulag/2d9c9ab133eecc0cc71da8ebc2dbe72ff634a2ff?r=97bT3hvnLEY1inLzM9eE6PG2qDS4h4KF"\n  frameBorder="0"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n  allowFullScreen\n></iframe>\n')),(0,r.kt)("h3",{id:"metadata"},"Metadata:"),(0,r.kt)("p",null,"The metadata sits on the top of each file, do not translate the slug, but you can translate everything else besides the slug. Basicially, the metadata is completely optional, but it it's good to use it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"---\n// Optional: The slug defines the path, for example docs.odysee.tv/hello-world. If not defined, just the file name is being used (without the `.mdx` ending).\nslug: /hello-world\n// The position in which this documentation should be in the sidebar, optional.\nsidebar_position: 1\n// How this site should be labelled in the sidebar.\nsidebar_label: 'Index'\n// The title that shows up everywhere and on search engines.\ntitle: Index\n// The description, it is shown in search engines. Keep it at around 140 characters.\ndescription: This is the index of the Odysee Help Hub... Description for search engines.\n// Optional: Add a image that is shown in preview cards on social media if people share this page.\nimage: https://i.imgur.com/FpXwZoM.jpg\n// SEO keywords of this file:\nkeywords: [odysee, help, documentation]\n---\n")))}f.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function d(e){let{children:t,hidden:n,className:d}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,d),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(6010),d=n(2389),i=n(7392),l=n(7094),p=n(2466);const s="tabList__CuJ",m="tabItem_LNqP";function y(e){var t;const{lazy:n,block:d,defaultValue:y,values:c,groupId:u,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===y?y:y??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:O}=(0,l.U)(),[T,I]=(0,r.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=u){const e=b[u];null!=e&&e!==T&&h.some((t=>t.value===e))&&I(e)}const x=e=>{const t=e.currentTarget,n=v.indexOf(t),a=h[n].value;a!==T&&(w(t),I(a),null!=u&&O(u,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=v.indexOf(e.currentTarget)+1;n=v[t]??v[0];break}case"ArrowLeft":{const t=v.indexOf(e.currentTarget)-1;n=v[t]??v[v.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},h.map((e=>{let{value:t,label:n,attributes:d}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>v.push(e),onKeyDown:C,onFocus:x,onClick:x},d,{className:(0,o.Z)("tabs__item",m,null==d?void 0:d.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,d.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9436:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010),o=n(9960);n(9471);const d={fungusCardContainer:"fungusCardContainer_BJ8Z",fungusCard:"fungusCard_V18C",rowCard:"rowCard_Y0Fj",fungusImage:"fungusImage_LcF9"};n(7814);function i(e){let{href:t,children:n,classes:i}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",d.fungusCardContainer,i)},n)}function l(e){return a.createElement("div",{className:(0,r.Z)("col col--"+e.size+" margin-bottom--lg",d.cardColumn),style:e.style},a.createElement(i,{classes:(0,r.Z)(d.rowCard)},a.createElement("img",{src:"/img/LadyFungus/g_192x192p_RGB_LadyFungus_Happy.png",className:d.fungusImage}),a.createElement("div",{className:d.fungusCard},e.children)))}},942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/g_1906x1062_RGB_Odysee_Homepage_Sign_Up_Arrow-e5e4f429c87100f3273b960ad2eea532.jpg"}}]);
(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1397:function(e,t,n){},"15f1":function(e,t,n){"use strict";n("463a")},"3cc4":function(e,t,n){"use strict";n("574d")},"452c":function(e,t,n){},"463a":function(e,t,n){},"4ab6":function(e,t,n){"use strict";n("c7ee")},"508e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"appContainer"},[n("MenuComponent",{staticClass:"MenuComponent",style:e.sideMenuStyle,on:{"menu-item:select":e.selectMenuItem,"width:change":e.widthChange}}),n("div",{staticClass:"right-side"},[n("HeaderComponent",{staticClass:"header-component",class:{"header-open":e.isHeaderOpen},on:{"toggle-open":e.toggleHeader}}),n("ContentComponent",{staticClass:"content-component"})],1)],1)},s=[],r=(n("b0c0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-container"},[i("div",{staticClass:"options",on:{click:e.openCategoryEditor}},[e._v(" Настройки ")]),i("div",{staticClass:"canban"},[i("Canban")],1),i("div",{staticClass:"options"},[e._v(" Войти ")]),i("div",{staticClass:"toggle-button",on:{click:function(t){return e.toggleOpen()}}},[i("img",{class:{buttonOpen:e.isToggleOpen},attrs:{src:n("e3f0"),alt:""}})])])}),o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"canbanContainer"})},c=[],u={name:"Canban"},d=u,p=(n("deca"),n("2877")),m=Object(p["a"])(d,l,c,!1,null,"6276307e",null),h=m.exports,f={name:"headerComponent",components:{Canban:h},data:function(){return{isToggleOpen:!1}},computed:{},methods:{toggleOpen:function(){return this.isToggleOpen=!this.isToggleOpen,this.$emit("toggle-open",this.isToggleOpen)},openCategoryEditor:function(){}}},v=f,g=(n("6023"),Object(p["a"])(v,r,o,!1,null,"68141f76",null)),C=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menuContainer"},[n("div",{staticClass:"menuHeader"}),n("div",{staticClass:"itemsContainer"},[n("input",{attrs:{type:"radio",name:"item",id:"search-item"}}),n("input",{attrs:{type:"radio",name:"item",id:"upload-item"}}),n("input",{attrs:{type:"radio",name:"item",id:"categories-item"}}),n("div",{staticClass:"selector"},[e._v("-")]),n("div",{staticClass:"item",attrs:{id:"search"},on:{click:e.selectView}},[n("label",{attrs:{for:"search-item"}},[e._v("Поиск")])]),n("div",{staticClass:"item",attrs:{id:"upload"},on:{click:e.selectView}},[n("label",{attrs:{for:"upload-item"}},[e._v("Загрузить")])]),n("div",{staticClass:"item",attrs:{id:"categories"},on:{click:e.selectView}},[n("label",{attrs:{for:"categories-item"}},[e._v("Категории")])])]),n("div",{staticClass:"width-controller",on:{mousedown:e.startWidthTracking}})])},b=[],y={name:"MenuComponent",components:{},data:function(){return{selectedMenuItem:"search",widthChangeHandler:void 0,selectorTop:"10px"}},computed:{},methods:{selectView:function(e){this.selectedMenuItem=e.currentTarget.id,this.$emit("menu-item:select",e.currentTarget.id),this.selector},startWidthTracking:function(e){var t=this,n=e.clientX;this.widthChangeHandler=function(e){var i=e.clientX-n;t.$emit("width:change",i),n=e.clientX};var i=function e(){document.removeEventListener("mousemove",t.widthChangeHandler),document.removeEventListener("mouseup",e)};document.addEventListener("mousemove",this.widthChangeHandler),document.addEventListener("mouseup",i)}}},x=y,O=(n("d3c7"),Object(p["a"])(x,w,b,!1,null,"0d301498",null)),F=O.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-wrap"},[n("FileManager",{directives:[{name:"show",rawName:"v-show",value:"search"===e.activeMenuItem,expression:"activeMenuItem === 'search'"}]}),n("FileUploader",{directives:[{name:"show",rawName:"v-show",value:"upload"===e.activeMenuItem,expression:"activeMenuItem === 'upload'"}]}),n("CategoryController",{directives:[{name:"show",rawName:"v-show",value:"category"===e.activeMenuItem,expression:"activeMenuItem === 'category'"}]})],1)},E=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"files-wrap"},[n("div",{staticClass:"search-wrap"},[n("h2",{staticClass:"title"},[e._v("Поиск документа")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.name,expression:"filter.name"}],staticClass:"search-input",attrs:{type:"text",placeholder:"По названию"},domProps:{value:e.filter.name},on:{input:function(t){t.target.composing||e.$set(e.filter,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.categories,expression:"filter.categories"}],staticClass:"search-input",attrs:{type:"text",placeholder:"По категориям"},domProps:{value:e.filter.categories},on:{input:function(t){t.target.composing||e.$set(e.filter,"categories",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.author,expression:"filter.author"}],staticClass:"search-input",attrs:{type:"text",placeholder:"По автору"},domProps:{value:e.filter.author},on:{input:function(t){t.target.composing||e.$set(e.filter,"author",t.target.value)}}})]),e._l(e.filteredFiles,(function(e){return n("TreeNode",{key:e.id,attrs:{node:e},on:{"update:node":function(t){e=t}}})}))],2)},I=[],j=n("b85c"),A=(n("4de4"),n("b64b"),n("d3b7"),n("25f0"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"node-wrap"},[n("a",{attrs:{href:e.node.url,target:"_blank"}},[e.lNode?n("input",{directives:[{name:"model",rawName:"v-model",value:e.lNode.name,expression:"lNode.name"}],staticClass:"node-input",attrs:{type:"text",disabled:""},domProps:{value:e.lNode.name},on:{input:function(t){t.target.composing||e.$set(e.lNode,"name",t.target.value)}}}):e._e()]),n("div",{staticClass:"param-wrap"},[e.node.categories?n("div",{staticClass:"node-category"},[e._v(e._s(e.node.categories))]):e._e(),e.node.author?n("div",{staticClass:"node-author"},[e._v(e._s(e.node.author))]):e._e()])])}),U=[],N={name:"TreeNode",props:{node:{required:!0},edit:{required:!1,default:!0}},mounted:function(){this.lNode=this.node},watch:{lNode:function(){this.$emit("node:update",this.lNode)}},data:function(){return{lNode:void 0}},computed:{}},T=N,k=(n("e13e"),Object(p["a"])(T,A,U,!1,null,"53c8b6e0",null)),H=k.exports,P={name:"FileManager",components:{TreeNode:H},inject:["originUrl"],data:function(){return{files:{},filter:{name:"",categories:"",author:""}}},mounted:function(){this.serverUpdateFiles()},computed:{filteredFiles:function(){var e=this,t=Object.keys(this.files).filter((function(t){var n,i=e.files[t],a=Object(j["a"])(e.notEmpty(Object.keys(e.filter)));try{for(a.s();!(n=a.n()).done;){var s=n.value;if(!Object.hasOwnProperty.call(i,s))return!1;if(-1===i[s].toString().toLowerCase().indexOf(e.filter[s].toString().toLowerCase()))return!1}}catch(r){a.e(r)}finally{a.f()}return!0}));return t.map((function(t){return e.files[t]}))}},methods:{notEmpty:function(e){var t=this;return e.filter((function(e){return t.filter[e].length>0}))},serverUpdateFiles:function(){var e=this;fetch(this.originUrl+"/api/files").then((function(e){if(e.ok)return e.json()})).then((function(t){"success"===t.status?e.files=t.data:alert("api/files fail, "+t.message)}))}}},B=P,R=(n("4ab6"),Object(p["a"])(B,_,I,!1,null,"0a811aa0",null)),S=R.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-item-container"},e._l(e.menuItems,(function(e){return n("MenuItem",{key:e.id,staticClass:"menuItem",attrs:{item:e}})})),1)},V=[],G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"item-wrap"},[i("div",{staticClass:"item",class:{selected:e.selected},style:{"padding-left":e.paddingLeft},on:{click:e.openToggle}},[e._v(" "+e._s(e.item.name)+" "),e.hasChildren?i("div",{staticClass:"image-wrap"},[i("img",{staticClass:"dropDownImage",class:{"image-open":e.isOpen},attrs:{src:n("8c3e"),alt:""}})]):e._e()]),e.hasChildren?i("div",{staticClass:"children-wrap",class:{"child-wrap-open":e.isOpen},style:{height:e.childrenHeight}},[i("div",{staticClass:"child-max-height"},e._l(e.item.children,(function(t,n){return i("MenuItem",{key:n,staticClass:"child-item",attrs:{item:t,level:e.level+1},on:{"menu-item:select":e.selectMenuItem}})})),1)]):e._e()])},$=[],D=(n("99af"),{name:"MenuItem",props:{item:{require:!0},level:{require:!1,default:0},selected:{require:!0,type:Boolean}},data:function(){return{isOpen:!1,childMaxHeightItem:void 0}},mounted:function(){this.childMaxHeightItem=this.$el.querySelector(".child-max-height")},computed:{hasChildren:function(){return Boolean(this.item.children&&this.item.children.length)},paddingLeft:function(){return 20+5*this.level+"px"},childrenHeight:function(){return void 0!==this.childMaxHeightItem?this.isOpen?this.childMaxHeightItem.offsetHeight+"px":"0px":void 0}},methods:{openToggle:function(){this.hasChildren?this.isOpen=!this.isOpen:this.selectMenuItem()},selectMenuItem:function(e){this.$emit("menu-item:select",null!==e&&void 0!==e?e:this.item.id)},getAllChildren:function(e){if(e.children){var t=[];for(var n in this.children)n.parent_id===e.id&&(t.push(n),n.children&&t.concat(this.getAllChildren(n)));return t}}}}),W=D,q=(n("8d21"),Object(p["a"])(W,G,$,!1,null,"4f6bc674",null)),K=q.exports,Q={name:"CategoryController",components:{MenuItem:K},data:function(){return{menuItems:[{id:1,name:"Главная доска",children:[]},{id:2,name:"Мероприятия",children:[{id:3,name:"Субботник",children:[]},{id:4,name:"Корпоратив",children:[]},{id:5,name:"День победы",children:[]},{id:6,name:"Собрание",children:[]}]},{id:7,name:"Классы",children:[]}]}}},X=Q,Y=Object(p["a"])(X,L,V,!1,null,"533d5110",null),Z=Y.exports,J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uploader-wrap"},[i("div",{staticClass:"upload-menu"},[i("h2",{staticClass:"title"},[e._v("Загрузка файла")]),i("div",{staticClass:"button-wrap"},[i("button",{staticClass:"btn upload-file-btn",on:{click:e.selectFile}},[i("img",{attrs:{src:n("8a37"),alt:""}})]),i("input",{staticClass:"input-upload",attrs:{type:"file"}})]),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.uploadedFile.name,expression:"uploadedFile.name"}],attrs:{type:"text",name:"file-name",placeholder:"Имя файла"},domProps:{value:e.uploadedFile.name},on:{input:function(t){t.target.composing||e.$set(e.uploadedFile,"name",t.target.value)}}})]),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.categories,expression:"categories"}],attrs:{type:"text",name:"file-categories",placeholder:"Категории"},domProps:{value:e.categories},on:{input:function(t){t.target.composing||(e.categories=t.target.value)}}})]),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.author,expression:"author"}],attrs:{type:"text",name:"file-author",placeholder:"Автор"},domProps:{value:e.author},on:{input:function(t){t.target.composing||(e.author=t.target.value)}}})]),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"text",name:"file-date",placeholder:"Дата создания"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})])]),i("hr",{staticClass:"hr"}),i("div",{staticClass:"resent-files"},[i("p",{staticClass:"resent-title"},[e._v(" Последние документы ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!Object.entries(e.lastFiles).length,expression:"!Object.entries(lastFiles).length"}],staticClass:"no-resent-files"},[e._v("... у вас ещё нет загруженных файлов")]),e._l(e.lastFiles,(function(e){return i("TreeNode",{key:e.id,attrs:{node:e},on:{"update:node":function(t){e=t}}})}))],2)])},z=[],ee=(n("ac1f"),n("1276"),n("498a"),{name:"FileUploader",components:{TreeNode:H},data:function(){return{lastFiles:{},fileInputElement:void 0,uploadedFile:{name:"",categories:"",author:"",date:""},categories:"",author:"",date:""}},inject:["originUrl"],mounted:function(){this.initFileLoader(),this.initDate(),this.serverUpdateFiles()},computed:{},methods:{initFileLoader:function(){this.fileInputElement=document.querySelector(".input-upload"),this.fileInputElement.addEventListener("change",this.uploadFile)},selectFile:function(){this.fileInputElement.click()},uploadFile:function(){var e=this,t=this.fileInputElement.files;if(0===t.length)alert("Файл не был выбран");else{var n,i=Object(j["a"])(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;if(!this.isValidFileType(a))return void alert("Выбранный формат файлов не поддерживается");this.uploadedFile.categories=this.categories.split(",").map((function(e){return e.trim()})),this.uploadedFile.author=this.author.split(",").map((function(e){return e.trim()})),this.uploadedFile.name.length||(this.uploadedFile.name=a.name),this.serverUploadFile().then((function(e){if(e.ok)return e.json()})).then((function(t){"success"===t.status?(e.uploadedFile.url=t.data.url,e.serverUpdateFiles()):console.log("Something went wrong")}))}}catch(s){i.e(s)}finally{i.f()}}},isValidFileType:function(e){return!0},getFileSize:function(e){var t=["bytes","kilobytes","megabytes","gigabytes"],n=e.size,i=0;while(n>1024)n=Math.floor(n/1024),i++;return n+" "+t[i]},serverUploadFile:function(){var e=this.fileInputElement.files[0],t=new FormData;t.append("file",e),t.append("fileName",this.uploadedFile.name),t.append("author",this.uploadedFile.author),t.append("categories",this.uploadedFile.categories),t.append("date",this.uploadedFile.date);var n=fetch(this.originUrl+"/api/upload-file",{method:"POST",body:t});return n},initDate:function(){this.uploadedFile.date=(new Date).toLocaleDateString()},serverUpdateFiles:function(){var e=this;fetch(this.originUrl+"/api/files").then((function(e){if(e.ok)return e.json()})).then((function(t){"success"===t.status?e.lastFiles=t.data:alert("api/files fail, "+t.message)}))}}}),te=ee,ne=(n("3cc4"),Object(p["a"])(te,J,z,!1,null,"fb90020e",null)),ie=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-editor-wrap"})},se=[],re={name:"FileEditor",data:function(){return{}},computed:{},method:{}},oe=re,le=Object(p["a"])(oe,ae,se,!1,null,"fc58b726",null),ce=(le.exports,{name:"ContentComponent",components:{CategoryController:Z,FileManager:S,FileUploader:ie},data:function(){return{}},computed:{activeMenuItem:function(){return this.selectedMenuItem.name}},inject:["selectedMenuItem"]}),ue=ce,de=(n("15f1"),Object(p["a"])(ue,M,E,!1,null,"0a93c81d",null)),pe=de.exports,me={name:"App",components:{HeaderComponent:C,MenuComponent:F,ContentComponent:pe},data:function(){return{isHeaderOpen:!1,selectedMenuItem:{name:"search"},menuWidth:200}},computed:{sideMenuStyle:function(){return{width:(this.menuWidth<130?50:this.menuWidth)+"px"}}},methods:{toggleHeader:function(e){this.isHeaderOpen=e},selectMenuItem:function(e){this.selectedMenuItem.name=e},widthChange:function(e){this.menuWidth+=e}},provide:function(){return{selectedMenuItem:this.selectedMenuItem,originUrl:""}}},he=me,fe=(n("ba82"),n("b0a0"),Object(p["a"])(he,a,s,!1,null,null,null)),ve=fe.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(ve)}}).$mount("#app")},"574d":function(e,t,n){},"5eb2":function(e,t,n){},6023:function(e,t,n){"use strict";n("a402")},"8a37":function(e,t,n){e.exports=n.p+"img/plus.1bb12725.svg"},"8c3e":function(e,t,n){e.exports=n.p+"img/down-arrow.e39a19b8.svg"},"8d21":function(e,t,n){"use strict";n("1397")},a402:function(e,t,n){},b0a0:function(e,t,n){"use strict";n("452c")},b3c4:function(e,t,n){},ba82:function(e,t,n){"use strict";n("c83a")},c7ee:function(e,t,n){},c83a:function(e,t,n){},d3c7:function(e,t,n){"use strict";n("b3c4")},deca:function(e,t,n){"use strict";n("508e")},e13e:function(e,t,n){"use strict";n("5eb2")},e3f0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACvElEQVR4nO3czW4TMRSG4XdDegVEcG1lA5eHQO2GHVs2ZAcLLqcs0hHDaDyxneOfY3+PVFWqOqmnbybTWEcFEREREREREREREZE9P4ALcG69kILOwE/ge+uFxHh5/fgDvG+8lhLeAr/4d57de2HcKNsYroL8Xn0e4eXrzP/n5C7I+tnk/UrZnss7HAaBMaLsxQCnQcB3lFAMcBwEfEY5igHOg4CvKLdiwABBwEeUmBgwSBDoO0psDBgoCPQZJSUGDBYE+oqSGgMcBol5d75999viHX3OGs44CnIhfHKfgNPmay2j3PrZJ65rDh1zKb1AC0cn+RV4po8oMTGeua459phuhe4Pb4An4BvwEHlMjfVt7xl768y5z3Sl1yhTxlj0FmXqGIteoijGSusoirGjVRTFOFA7imJEqBVFMRKUjqIYGUpFUYw7WEdRDANWURQjIGe2N7Rpt2zwxWxIxmwUrh/nno3CKWZ7771Sal0Zrmd7c555OVfKhf2rssSVsR4jdRXE4qRjo+wpGWO62d6cl6+1ki9T08725kapEQOcBoG6UWrFAMdBwPa1O3RPOXGNUeqesT3WdRAoG+WJujFggCBQLsqX149aMWCQIFDmnnL0PVb3jK1hgkC5KLViwGBBwD5KzRjgMEjp2d6UzUXrNWi2N2C7t2Qd4wR8PDhGs72BnxfaXMxdJ2i2V7O9pfUaZcoYi96iTB1j0UsUxVhpHUUxdmi2t0Oa7e2QZns7dLSV/hn4kHBMyuMvrAcghmDxrNdsrzHrKIphwCqKYhjK3QJvNds7hVu/oFtb94pRQO7Wfa3Z3ilZzfbC9U9oxTBgFeURxTCT8+Yx9bEkUY3NRUmU89dX7LGSycs/RZtKyj1FMSopPdsrGUrN9sodrGd7xYDVbK8YivnHAVJZ7myviIiIiIiIiIiIiEghfwEBAmKwfjkRPwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.f5beee90.js.map
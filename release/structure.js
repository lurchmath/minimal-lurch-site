var Structure,slice=[].slice,indexOf=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1},hasProp={}.hasOwnProperty;exports.Structure=Structure=function(){function t(){var t,n,e,i;for(n=1<=arguments.length?slice.call(arguments,0):[],this.computedAttributes={},this.externalAttributes={},this.parentNode=null,this.childList=[],e=0,i=n.length;e<i;e++)t=n[e],this.insertChild(t,this.childList.length)}var n,e,i,r,o;return t.prototype.IDs=[],t.instanceWithID=function(n){return t.prototype.IDs[n]},t.nextUnusedID=function(){var n;return(n=t.prototype.IDs.indexOf(null))>=0?n:t.prototype.IDs.length},t.prototype.getID=function(){if(null==this.ID)return this.ID=t.nextUnusedID(),t.prototype.IDs[this.ID]=this},t.prototype.releaseID=function(){var n;if(null!=this.ID){for(t.prototype.IDs[this.ID]=null,delete this.ID,n=[];null===t.prototype.IDs[t.prototype.IDs.length-1];)n.push(t.prototype.IDs.pop());return n}},t.prototype.parent=function(){return this.parentNode},t.prototype.children=function(){return this.childList.slice(0)},t.prototype.indexInParent=function(){var t,n;return null!=(t=this.parentNode)&&null!=(n=t.childList)?n.indexOf(this):void 0},t.prototype.previousSibling=function(){var t;if(null!=(t=this.indexInParent()))return this.parentNode.childList[t-1]},t.prototype.nextSibling=function(){var t;if(null!=(t=this.indexInParent()))return this.parentNode.childList[t+1]},t.prototype.removeFromParent=function(){var t,n;if(null!=(n=this.parentNode))return t=this.indexInParent(),this.parentNode.childList.splice(t,1),this.parentNode=null,"function"==typeof this.wasRemoved?this.wasRemoved(n,t):void 0},t.prototype.removeChild=function(t){var n;return null!=(n=this.childList[t])?n.removeFromParent():void 0},t.prototype.insertChild=function(n,e){var i;if(null==e&&(e=0),n instanceof t&&n!==this&&0<=e&&e<=this.childList.length){for(i=this;null!=(i=i.parent());)if(i===n){this.removeFromParent();break}return n.removeFromParent(),this.childList=slice.call(this.childList.slice(0,e)).concat([n],slice.call(this.childList.slice(e))),n.parentNode=this,"function"==typeof n.wasInserted?n.wasInserted():void 0}},t.prototype.replaceWith=function(t){var n,e;if(null!=(e=this.parentNode))return n=this.indexInParent(),this.removeFromParent(),e.insertChild(t,n)},t.prototype.copy=function(){var n,e;return e=new t,e.computedAttributes=JSON.parse(JSON.stringify(this.computedAttributes)),e.externalAttributes=JSON.parse(JSON.stringify(this.externalAttributes)),e.childList=function(){var t,e,i,r;for(r=[],t=0,e=(i=this.childList).length;t<e;t++)n=i[t],r.push(n.copy());return r}.call(this),e},t.prototype.isEarlierThan=function(n){var e,i,r,o,l,s,u,c;if(n instanceof t){if(n===this)return!1;for(e=[n];null!=(o=e[0].parent());)e.unshift(o);for(c=this,u=null;null!=c&&indexOf.call(e,c)<0;)u=c,c=c.parent();if(null!=c)return c===this||c!==n&&(i=e.indexOf(c),s=e[i+1],r=u.indexInParent(),l=s.indexInParent(),r<l)}},t.prototype.getComputedAttribute=function(t){return this.computedAttributes[t]},t.prototype.setComputedAttribute=function(t,n){if(this.computedAttributes[t]!==n)return this.computedAttributes[t]=n,"function"==typeof this.wasChanged?this.wasChanged():void 0},t.prototype.clearComputedAttributes=function(){var t,n,e,i,r;for(0===(e=1<=arguments.length?slice.call(arguments,0):[]).length&&(e=Object.keys(this.computedAttributes)),r=[],t=0,i=e.length;t<i;t++)(n=e[t])in this.computedAttributes?(delete this.computedAttributes[n],r.push("function"==typeof this.wasChanged?this.wasChanged():void 0)):r.push(void 0);return r},t.prototype.compute=function(){var t,n,e,i,r,o,l;for(l=[],i=0,r=(n=1<=arguments.length?slice.call(arguments,0):[]).length;i<r;i++)(t=n[i])instanceof Array||(t=[t]),e=t[0],o=2<=t.length?slice.call(t,1):[],l.push(this.setComputedAttribute(e,this[e].apply(this,o)));return l},t.prototype.getExternalAttribute=function(t){return this.externalAttributes[t]},t.prototype.setExternalAttribute=function(t,n){if(this.externalAttributes[t]!==n)return this.externalAttributes[t]=n,"function"==typeof this.wasChanged?this.wasChanged():void 0},t.prototype.clearExternalAttributes=function(){var t,n,e,i,r;for(0===(e=1<=arguments.length?slice.call(arguments,0):[]).length&&(e=Object.keys(this.externalAttributes)),r=[],t=0,i=e.length;t<i;t++)(n=e[t])in this.externalAttributes?(delete this.externalAttributes[n],r.push("function"==typeof this.wasChanged?this.wasChanged():void 0)):r.push(void 0);return r},t.prototype.attr=function(t){var n,e;for(n in t)hasProp.call(t,n)&&(e=t[n],this.setExternalAttribute(n,e));return this},t.prototype.setup=function(){var t,n,e,i;return(e=function(t){var n,i,r,o,l;for(t.getID(),l=[],i=0,r=(o=t.children()).length;i<r;i++)n=o[i],l.push(e(n));return l})(this),i={},(n=function(t){var e,r,o,l,s,u;for(null!=(r=t.getExternalAttribute("id"))&&(i[r]=t,t.clearExternalAttributes("id")),u=[],o=0,l=(s=t.children()).length;o<l;o++)e=s[o],u.push(n(e));return u})(this),(t=function(n){var e,r,o,l,s,u,c,h,a,p,f;for(o=0,s=(c=["label","premise","reason"]).length;o<s;o++)e=c[o],null!=(f=n.getExternalAttribute(e+" for"))&&(null!=(p="previous"===f?n.previousSibling():"next"===f?n.nextSibling():i.hasOwnProperty(f)?i[f]:null)&&n.connectTo(p,e),n.clearExternalAttributes(e+" for"));for(a=[],l=0,u=(h=n.children()).length;l<u;l++)r=h[l],a.push(t(r));return a})(this),this.fillOutConnections(),this},t.prototype.fillOutConnections=function(){var n,e,i,r,o,l,s,u,c,h,a,p,f,d,b,g,x,y,v,I,A,D,O,m,E;for(l=0,s=(f=this.childList).length;l<s;l++)f[l].fillOutConnections();if(null!=this.ID){a=function(t){var n,e,i,r,o,l;r=[];for(o in t)if(hasProp.call(t,o)){e=t[o];for(l in e)if(hasProp.call(e,l))for(n=1,i=e[l];1<=i?n<=i:n>=i;1<=i?++n:--n)r.push([Number(o),l])}return r},p=(i=function(t){var n,e,i,r,o,l,s;for(o={},i=0,r=t.length;i<r;i++)l=(e=t[i])[0],s=e[1],null==o[l]&&(o[l]={}),null==(n=o[l])[s]&&(n[s]=0),o[l][s]++;return o})(null!=(d=this.getExternalAttribute("connectionsOut"))?d:[]);for(O in p)if(hasProp.call(p,O)&&(u=p[O],null!=(e=t.instanceWithID(O)))){null==(m=i(null!=(b=e.getExternalAttribute("connectionsIn"))?b:[]))[c=this.ID]&&(m[c]={});for(E in u)hasProp.call(u,E)&&(r=u[E],u[E]=m[this.ID][E]=Math.max(r,null!=(g=m[this.ID][E])?g:0));e.setExternalAttribute("connectionsIn",a(m))}o=i(null!=(x=this.getExternalAttribute("connectionsIn"))?x:[]),I=[];for(A in o)if(hasProp.call(o,A)&&(u=o[A],null!=(n=t.instanceWithID(A)))){null==(D=i(null!=(y=n.getExternalAttribute("connectionsOut"))?y:[]))[h=this.ID]&&(D[h]={});for(E in u)hasProp.call(u,E)&&(r=u[E],u[E]=D[this.ID][E]=Math.max(r,null!=(v=D[this.ID][E])?v:0));I.push(n.setExternalAttribute("connectionsOut",a(D)))}return I}},t.prototype.connectTo=function(n,e){var i,r,o,l;return null!=this.ID&&n instanceof t&&null!=n.ID&&(r=null!=(o=this.getExternalAttribute("connectionsOut"))?o:[],i=null!=(l=n.getExternalAttribute("connectionsIn"))?l:[],r.push([n.ID,e]),i.push([this.ID,e]),this.setExternalAttribute("connectionsOut",r),n.setExternalAttribute("connectionsIn",i),!0)},t.prototype.disconnectFrom=function(n,e){var i,r,o,l,s,u;if(!(null!=this.ID&&n instanceof t&&null!=n.ID))return!1;for(l=null!=(s=this.getExternalAttribute("connectionsOut"))?s:[],r=null!=(u=n.getExternalAttribute("connectionsIn"))?u:[],o=i=0;o<l.length&&(l[o][0]!==n.ID||l[o][1]!==e);)o++;if(o===l.length)return!1;for(;i<r.length&&(r[i][0]!==this.ID||r[i][1]!==e);)i++;return i!==r.length&&(l.splice(o,1),r.splice(i,1),this.setExternalAttribute("connectionsOut",l),n.setExternalAttribute("connectionsIn",r),!0)},t.prototype.allConnectionsOut=function(t){var n,e,i,r,o,l;if(r=null!=(o=this.getExternalAttribute("connectionsOut"))?o:[],null==t)return r;for(l=[],e=0,i=r.length;e<i;e++)(n=r[e])[1]===t&&l.push(n[0]);return l},t.prototype.allConnectionsIn=function(t){var n,e,i,r,o,l;if(e=null!=(o=this.getExternalAttribute("connectionsIn"))?o:[],null==t)return e;for(l=[],i=0,r=e.length;i<r;i++)(n=e[i])[1]===t&&l.push(n[0]);return l},t.prototype.allConnectionsTo=function(n){var e,i,r,o,l,s;if(!(n instanceof t&&null!=n.ID))return null;for(s=[],i=0,r=(o=null!=(l=this.getExternalAttribute("connectionsOut"))?l:[]).length;i<r;i++)(e=o[i])[0]===n.ID&&s.push(e[1]);return s},t.prototype.properties=function(){var n,e,i,r,o,l,s,u;for(s={},e=0,i=(l=null!=(o=this.getExternalAttribute("connectionsIn"))?o:[]).length;e<i;e++)n=l[e],null!=(u=t.instanceWithID(n[0]))&&(null!=s[r=n[1]]?s[r]:s[r]=[]).push(u);return s},t.prototype.isAccessibleTo=function(n){return n instanceof t&&(null!=n.parent()&&(this.parent()===n.parent()?this.indexInParent()<n.indexInParent():this.isAccessibleTo(n.parent())))},t.prototype.isInTheScopeOf=function(t){return t.isAccessibleTo(this)},t.prototype.iteratorOverAccessibles=function(){return{ancestor:this,sibling:this,next:function(){return null==this.ancestor?null:null!=(this.sibling=this.sibling.previousSibling())?this.sibling:(this.sibling=this.ancestor=this.ancestor.parent(),this.next())}}},t.prototype.iteratorOverScope=function(){return{chain:[this],next:function(){var t,n;if(0===this.chain.length)return null;if(t=this.chain.pop(),null!=(n=t.nextSibling())){for(this.chain.push(n);null!=(n=n.children()[0]);)this.chain.push(n);return this.chain[this.chain.length-1]}return this.chain.length>0?this.chain[this.chain.length-1]:null}}},i=function(t,n){var e;for(null==n&&(n=function(){return!0});null!=(e=t.next());)if(n(e))return e},n=function(t,n){var e,i;for(null==n&&(n=function(){return!0}),i=[];null!=(e=t.next());)n(e)&&i.push(e);return i},t.prototype.firstAccessible=function(t){return null==t&&(t=function(){return!0}),i(this.iteratorOverAccessibles(),t)},t.prototype.allAccessibles=function(t){return null==t&&(t=function(){return!0}),n(this.iteratorOverAccessibles(),t)},t.prototype.firstInScope=function(t){return null==t&&(t=function(){return!0}),i(this.iteratorOverScope(),t)},t.prototype.allInScope=function(t){return null==t&&(t=function(){return!0}),n(this.iteratorOverScope(),t)},t.prototype.text=function(){return this.getExternalAttribute("text")},t.prototype.isAReference=function(){return!!this.getExternalAttribute("reference")},t.prototype.isALabelFor=function(t){var n;return n=t.ID,indexOf.call(this.allConnectionsOut("label"),n)>=0},t.prototype.isAPremiseFor=function(t){var n;return n=t.ID,indexOf.call(this.allConnectionsOut("premise"),n)>=0},t.prototype.isAReasonFor=function(t){var n;return n=t.ID,indexOf.call(this.allConnectionsOut("reason"),n)>=0},r=function(t,n){var e,i,r,o,l,s,u;for(i=t.getExternalAttribute(n),e=t.getComputedAttribute(n),i instanceof Array||(i=[]),e instanceof Array||(e=[]),u=[],o=0,l=(s=slice.call(i).concat(slice.call(e))).length;o<l;o++)"string"==typeof(r=s[o])&&u.push(r);return u},e=function(n,e){var i,r,o,l,s,u;for(u=[],r=0,o=(s=n.allConnectionsIn(e)).length;r<o;r++)i=s[r],null!=(l=t.instanceWithID(i))&&u.push(l);return u},o=function(t){var n,e,i,r;for(r=[],e=0,i=t.length;e<i;e++)n=t[e],indexOf.call(r,n)<0&&r.push(n);return r},t.prototype.labels=function(){var t,n,i,l,s,u;for(s=slice.call(r(this,"labels")).concat(slice.call(function(){var t,i,r,o;for(o=[],t=0,i=(r=e(this,"label")).length;t<i;t++)(n=r[t]).text()&&o.push(n.text());return o}.call(this))),u=[],t=0,i=(l=o(s)).length;t<i;t++)""!==(n=l[t])&&u.push(n);return u},t.prototype.hasLabel=function(t){return indexOf.call(this.labels(),t)>=0},t.prototype.lookup=function(t){return this.firstAccessible(function(n){return n.hasLabel(t)})},t.prototype.reasons=function(){return slice.call(r(this,"reasons")).concat(slice.call(e(this,"reason")))},t.prototype.premises=function(){return slice.call(r(this,"premises")).concat(slice.call(e(this,"premise")))},t}();
//# sourceMappingURL=structure.js.map

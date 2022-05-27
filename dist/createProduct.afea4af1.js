function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequire46c0;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire46c0=s),s.register("fXOuZ",(function(t,n){e(t.exports,"initializeApp",(()=>s("7xvHX").initializeApp)),e(t.exports,"registerVersion",(()=>s("7xvHX").registerVersion));s("7xvHX");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
s("7xvHX").registerVersion("firebase","9.8.1","app")})),s.register("7xvHX",(function(t,n){e(t.exports,"_registerComponent",(()=>y)),e(t.exports,"_getProvider",(()=>v)),e(t.exports,"_removeServiceInstance",(()=>w)),e(t.exports,"SDK_VERSION",(()=>T)),e(t.exports,"initializeApp",(()=>I)),e(t.exports,"getApp",(()=>S)),e(t.exports,"registerVersion",(()=>k));var r=s("eryG9"),i=s("5Z2ef"),o=s("gMVVg"),a=s("iItpQ");o=s("gMVVg");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const u="@firebase/app",h="0.7.24",l=new i.Logger("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){const t=e.name;if(g.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of p.values())m(t,e);return!0}function v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n="[DEFAULT]"){v(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},b=new o.ErrorFactory("app","Firebase",_);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="9.8.1";function I(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!=typeof s||!s)throw b.create("bad-app-name",{appName:String(s)});const i=p.get(s);if(i){if(o.deepEqual(e,i.options)&&o.deepEqual(n,i.config))return i;throw b.create("duplicate-app",{appName:s})}const a=new r.ComponentContainer(s);for(const e of g.values())a.addComponent(e);const c=new E(e,n,a);return p.set(s,c),c}function S(e="[DEFAULT]"){const t=p.get(e);if(!t)throw b.create("no-app",{appName:e});return t}function k(e,t,n){var s;let i=null!==(s=f[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}y(new r.Component(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="firebase-heartbeat-store";let A=null;function R(){return A||(A=a.openDB("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(C)}}).catch((e=>{throw b.create("storage-open",{originalErrorMessage:e.message})}))),A}async function N(e,t){try{const n=(await R()).transaction(C,"readwrite"),r=n.objectStore(C);return await r.put(t,D(e)),n.done}catch(e){throw b.create("storage-set",{originalErrorMessage:e.message})}}function D(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new x(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=L(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),P(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),P(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=o.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function L(){return(new Date).toISOString().substring(0,10)}class x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!o.isIndexedDBAvailable()&&o.validateIndexedDBOpenable().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await R()).transaction(C).objectStore(C).get(D(e))}catch(e){throw b.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function P(e){return o.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;M="",y(new r.Component("platform-logger",(e=>new c(e)),"PRIVATE")),y(new r.Component("heartbeat",(e=>new O(e)),"PRIVATE")),k(u,h,M),k(u,h,"esm2017"),k("fire-js","")})),s.register("eryG9",(function(t,n){e(t.exports,"Component",(()=>i)),e(t.exports,"ComponentContainer",(()=>c));var r=s("gMVVg");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),s.register("gMVVg",(function(n,r){e(n.exports,"base64urlEncodeWithoutPadding",(()=>o)),e(n.exports,"base64Decode",(()=>a)),e(n.exports,"Deferred",(()=>c)),e(n.exports,"createMockUserToken",(()=>u)),e(n.exports,"getUA",(()=>h)),e(n.exports,"isMobileCordova",(()=>l)),e(n.exports,"isBrowserExtension",(()=>d)),e(n.exports,"isReactNative",(()=>f)),e(n.exports,"isElectron",(()=>p)),e(n.exports,"isIE",(()=>g)),e(n.exports,"isUWP",(()=>m)),e(n.exports,"isSafari",(()=>y)),e(n.exports,"isIndexedDBAvailable",(()=>v)),e(n.exports,"validateIndexedDBOpenable",(()=>w)),e(n.exports,"FirebaseError",(()=>_)),e(n.exports,"ErrorFactory",(()=>b)),e(n.exports,"isEmpty",(()=>T)),e(n.exports,"deepEqual",(()=>I)),e(n.exports,"querystring",(()=>k)),e(n.exports,"querystringDecode",(()=>C)),e(n.exports,"extractQuerystring",(()=>A)),e(n.exports,"createSubscribe",(()=>R)),e(n.exports,"getModularInstance",(()=>O));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=s>>2,h=(3&s)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw Error();const c=s<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){return function(e){const t=s(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return h().indexOf("Electron/")>=0}function g(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return h().indexOf("MSAppHost/")>=0}function y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}function w(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(E,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new _(r,o,n)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function I(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(S(n)&&S(i)){if(!I(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function S(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function C(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){const n=new N(e,t);return n.subscribe.bind(n)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){return e&&e._delegate?e._delegate:e}})),s.register("5Z2ef",(function(t,n){e(t.exports,"LogLevel",(()=>s)),e(t.exports,"Logger",(()=>u)),e(t.exports,"setLogLevel",(()=>h)),e(t.exports,"setUserLogHandler",(()=>l));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function l(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const o=i.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:i,type:t.name})}}}})),s.register("iItpQ",(function(t,n){e(t.exports,"openDB",(()=>i));var r=s("jMRra");r=s("jMRra");function i(e,t,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),c=r.w(a);return s&&a.addEventListener("upgradeneeded",(e=>{s(r.w(a.result),e.oldVersion,e.newVersion,r.w(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return c.set(t,i),i}r.r((e=>({...e,get:(t,n,r)=>u(t,n)||e.get(t,n,r),has:(t,n)=>!!u(t,n)||e.has(t,n)})))})),s.register("jMRra",(function(t,n){e(t.exports,"w",(()=>p)),e(t.exports,"r",(()=>l));let r,s;const i=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function l(e){h=e(h)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(i.get(this))}:function(...t){return p(e.apply(g(this),t))}:function(t,...n){const r=e.call(g(this),t,...n);return a.set(r,t.sort?t.sort():[t]),p(r)}}function f(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));o.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,h):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(p(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&i.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const g=e=>u.get(e)})),s.register("1tHc5",(function(t,n){e(t.exports,"signInWithEmailAndPassword",(()=>s("4OoKa").a6)),e(t.exports,"onAuthStateChanged",(()=>s("4OoKa").v)),e(t.exports,"getAuth",(()=>s("4OoKa").n)),e(t.exports,"signOut",(()=>s("4OoKa").y)),e(t.exports,"createUserWithEmailAndPassword",(()=>s("4OoKa").a5)),s("eljci")})),s.register("eljci",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(()=>s("4OoKa").a5)),e(t.exports,"getAuth",(()=>s("4OoKa").n)),e(t.exports,"onAuthStateChanged",(()=>s("4OoKa").v)),e(t.exports,"signInWithEmailAndPassword",(()=>s("4OoKa").a6)),e(t.exports,"signOut",(()=>s("4OoKa").y)),s("gMVVg"),s("7xvHX"),s("5Z2ef"),s("eryG9");s("4OoKa")})),s.register("4OoKa",(function(t,n){e(t.exports,"a5",(()=>Ue)),e(t.exports,"a6",(()=>Ve)),e(t.exports,"v",(()=>Fe)),e(t.exports,"y",(()=>Be)),e(t.exports,"n",(()=>Zt));var r=s("gMVVg"),i=s("7xvHX"),o=s("7WQrb"),a=s("5Z2ef"),c=s("eryG9");function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=u,l=new r.ErrorFactory("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new a.Logger("@firebase/auth");function f(e,...t){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const s=Object.assign(Object.assign({},h()),{[t]:n});return new r.ErrorFactory("auth","Firebase",s).create(t,{appName:e.name})}function y(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function E(e){_(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=r.isMobileCordova()||r.isReactNative()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(I()||r.isBrowserExtension()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},N=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,s,i={}){return L(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=r.querystring(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(P(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function L(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},R),t);try{const t=new M(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw U(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;p(e,"network-request-failed")}}async function x(e,t,n,r,s={}){const i=await O(e,t,n,r,s);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function P(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?C(e.config,s):`${e.config.apiScheme}://${s}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=g(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 1e3*Number(e)}function B(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=r.base64Decode(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function j(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){var t;const n=e.auth,r=await e.getIdToken(),s=await j(e,async function(e,t){return O(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));v(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=o.__rest(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,h=a,[...u.filter((e=>!h.some((t=>t.providerId===e.providerId)))),...h]);var u,h;const l=e.isAnonymous,d=!(e.email&&i.passwordHash||(null==c?void 0:c.length)),f=!!l&&d,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new K(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=B(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await L(e,{},(async()=>{const n=r.querystring({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=P(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new z;return n&&(v("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(v("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new z,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=o.__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new K(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await j(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=r.getModularInstance(e),s=await n.getIdToken(t),i=B(s);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:s,authTime:V(F(i.auth_time)),issuedAtTime:V(F(i.iat)),expirationTime:V(F(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=r.getModularInstance(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await j(this,async function(e,t){return O(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,u;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:T}=t;v(w&&T,e,"internal-error");const I=z.fromJSON(this.name,T);v("string"==typeof w,e,"internal-error"),$(h,e.name),$(l,e.name),v("boolean"==typeof _,e,"internal-error"),v("boolean"==typeof b,e,"internal-error"),$(d,e.name),$(f,e.name),$(p,e.name),$(g,e.name),$(m,e.name),$(y,e.name);const S=new G({uid:w,auth:e,email:l,emailVerified:_,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new z;r.updateFromServerResponse(t);const s=new G({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await H(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}W.type="NONE";const X=W;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t,n){return`firebase:${e}:${t}:${n}`}class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Q(this.userKey,r.apiKey,s),this.fullPersistenceKey=Q("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(E(X),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||E(X);const i=Q(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=G._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new Y(s,e,n)):new Y(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(ie(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(re(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(e=r.getUA()){return/firefox\//i.test(e)}function ee(e=r.getUA()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=r.getUA()){return/crios\//i.test(e)}function ne(e=r.getUA()){return/iemobile/i.test(e)}function re(e=r.getUA()){return/android/i.test(e)}function se(e=r.getUA()){return/blackberry/i.test(e)}function ie(e=r.getUA()){return/webos/i.test(e)}function oe(e=r.getUA()){return/iphone|ipad|ipod/i.test(e)}function ae(e=r.getUA()){return oe(e)||re(e)||ie(e)||se(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=J(r.getUA());break;case"Worker":n=`${J(r.getUA())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new de(this),this.idTokenSubscription=new de(this),this.beforeStateQueue=new ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await H(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?r.getModularInstance(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(E(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function le(e){return r.getModularInstance(e)}class de{constructor(e){this.auth=e,this.observer=null,this.addObserver=r.createSubscribe((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(e,t){return O(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends fe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ge(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ge(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return x(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return pe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e,t){return x(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=o.__rest(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new ye(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return me(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,me(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,me(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=r.querystring(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new we({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new we({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ve)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new we({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){var t,n,s,i,o,a;const c=r.querystringDecode(r.extractQuerystring(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,h=null!==(n=c.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=c.mode)&&void 0!==s?s:null);v(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(i=c.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=r.querystringDecode(r.extractQuerystring(e)).link,n=t?r.querystringDecode(r.extractQuerystring(t)).deep_link_id:null,s=r.querystringDecode(r.extractQuerystring(e)).deep_link_id;return(s?r.querystringDecode(r.extractQuerystring(s)).link:null)||s||n||t||e}(e);try{return new _e(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(e,t){return ge._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=_e.parseLink(t);return v(n,"argument-error"),ge._fromEmailAndCode(e,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ee{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends Te{constructor(){super("facebook.com")}static credential(e){return ye._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ye._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Se.credential(t,n)}catch(e){return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke extends Te{constructor(){super("github.com")}static credential(e){return ye._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch(e){return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com",ke.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends Te{constructor(){super("twitter.com")}static credential(e,t){return ye._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ce.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ae(e,t){return x(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.TWITTER_SIGN_IN_METHOD="twitter.com",Ce.PROVIDER_ID="twitter.com";class Re{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await G._fromIdTokenResponse(e,n,r),i=Ne(n);return new Re({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ne(n);return new Re({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ne(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends r.FirebaseError{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,De.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new De(e,t,n,r)}}function Oe(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw De._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t,n=!1){const r=await j(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Re._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await j(e,Oe(r,s,t,e),n);v(i.idToken,r,"internal-error");const o=B(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),Re._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t,n=!1){const r="signIn",s=await Oe(e,r,t),i=await Re._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Me(e,t){return Pe(le(e),t)}async function Ue(e,t,n){const r=le(e),s=await Ae(r,{returnSecureToken:!0,email:t,password:n}),i=await Re._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ve(e,t,n){return Me(r.getModularInstance(e),be.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e,t,n,s){return r.getModularInstance(e).onAuthStateChanged(t,n,s)}function Be(e){return r.getModularInstance(e).signOut()}new WeakMap;const je="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(je,"1"),this.storage.removeItem(je),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends qe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=r.getUA();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);r.isIE()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ke.type="LOCAL";const He=Ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends qe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ze.type="SESSION";const $e=ze;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ge(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.receivers=[];class Xe{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=We("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(){return void 0!==Qe().WorkerGlobalScope&&"function"==typeof Qe().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="firebaseLocalStorageDb",Ze="firebaseLocalStorage",et="fbase_key";class tt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function nt(e,t){return e.transaction([Ze],t?"readwrite":"readonly").objectStore(Ze)}function rt(){const e=indexedDB.open(Je,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ze,{keyPath:et})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ze)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Je);return new tt(e).toPromise()}(),t(await rt()))}))}))}async function st(e,t,n){const r=nt(e,!0).put({[et]:t,value:n});return new tt(r).toPromise()}function it(e,t){const n=nt(e,!0).delete(t);return new tt(n).toPromise()}class ot{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await rt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ye()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ge._getInstance(Ye()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Xe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rt();return await st(e,je,"1"),await it(e,je),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>st(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=nt(e,!1).get(t),r=await new tt(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>it(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=nt(e,!1).getAll();return new tt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ot.type="LOCAL";const at=ot;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}function ut(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ut("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht="recaptcha";async function lt(e,t,n){var r;const s=await n.verify();try{let i;if(v("string"==typeof s,e,"argument-error"),v(n.type===ht,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await function(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=dt.PROVIDER_ID,this.auth=le(e)}verifyPhoneNumber(e,t){return lt(this.auth,e,r.getModularInstance(t))}static credential(e,t){return we._fromVerification(e,t)}static credentialFromResult(e){const t=e;return dt.credentialFromTaggedObject(t)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?we._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(e,t){return t?E(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.PROVIDER_ID="phone",dt.PHONE_SIGN_IN_METHOD="phone";class pt extends fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,t){return me(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gt(e){return Pe(e.auth,new pt(e),e.bypassAuthState)}function mt(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),xe(n,new pt(e),e.bypassAuthState)}async function yt(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Le(n,new pt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gt;case"linkViaPopup":case"linkViaRedirect":return yt;case"reauthViaPopup":case"reauthViaRedirect":return mt;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new k(2e3,1e4);class _t extends vt{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,_t.currentPopupAction&&_t.currentPopupAction.cancel(),_t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=We();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,wt.get())};e()}}_t.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt=new Map;class Et extends vt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=St(t),r=It(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Tt(e,t){bt.set(e._key(),t)}function It(e){return E(e._redirectPersistence)}function St(e){return Q("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t,n=!1){const r=le(e),s=ft(r,t),i=new Et(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ct{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Rt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(At(e))}saveEventToCache(e){this.cachedEventUids.add(At(e)),this.lastProcessedEventTime=Date.now()}}function At(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Rt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dt=/^https?/;async function Ot(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return O(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Lt(e))return}catch(e){}p(e,"unauthorized-domain")}function Lt(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Dt.test(n))return!1;if(Nt.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new k(3e4,6e4);function Pt(){const e=Qe().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Mt=null;function Ut(e){return Mt=Mt||function(e){return new Promise(((t,n)=>{var r,s,i;function o(){Pt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pt(),n(g(e,"network-request-failed"))},timeout:xt.get()})}if(null===(s=null===(r=Qe().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Qe().gapi)||void 0===i?void 0:i.load)){const t=ut("iframefcb");return Qe()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},ct(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Mt=null,e}))}(e),Mt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new k(5e3,15e3),Ft={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jt(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=Bt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${r.querystring(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Kt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ht(e,t,n,s=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},qt),{width:s.toString(),height:i.toString(),top:o,left:a}),h=r.getUA().toLowerCase();n&&(c=te(h)?"_blank":n),Z(h)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=r.getUA()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new Kt(null);const d=window.open(t||"",c,l);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Kt(d)}const zt="emulator/auth/handler";function $t(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof Ee){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",r.isEmpty(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Te){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?C(e,zt):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${r.querystring(u).slice(1)}`}const Gt="webStorageSupport";const Wt=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$e,this._completeRedirectFn=kt,this._overrideRedirectResult=Tt}async _openPopup(e,t,n,r){var s;_(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Ht(e,$t(e,t,n,T(),r),We())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=$t(e,t,n,T(),r),Qe().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ut(e),n=Qe().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:jt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ft,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=g(e,"network-request-failed"),i=Qe().setTimeout((()=>{r(s)}),Vt.get());function o(){Qe().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}(e),n=new Ct(e);return t.register("authEvent",(t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gt,{type:Gt},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ot(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}};var Xt,Qt="@firebase/auth",Yt="0.20.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(e=i.getApp()){const t=i._getProvider(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=i._getProvider(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if(r.deepEqual(s,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Wt,persistence:[at,He,$e]})}Xt="Browser",i._registerComponent(new c.Component("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:i}=n.options;return((e,n)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:i,clientPlatform:Xt,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(Xt)},o=new he(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),i._registerComponent(new c.Component("auth-internal",(e=>{const t=le(e.getProvider("auth").getImmediate());return new Jt(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),i.registerVersion(Qt,Yt,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xt)),i.registerVersion(Qt,Yt,"esm2017")})),s.register("7WQrb",(function(t,n){e(t.exports,"__rest",(()=>r));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create})),s.register("etBjH",(function(t,n){e(t.exports,"addDoc",(()=>s("9HrqM").addDoc)),e(t.exports,"collection",(()=>s("9HrqM").collection)),e(t.exports,"setDoc",(()=>s("9HrqM").setDoc)),e(t.exports,"doc",(()=>s("9HrqM").doc)),e(t.exports,"getFirestore",(()=>s("9HrqM").getFirestore)),e(t.exports,"getDocs",(()=>s("9HrqM").getDocs)),e(t.exports,"getDoc",(()=>s("9HrqM").getDoc)),s("9HrqM")})),s.register("9HrqM",(function(t,n){e(t.exports,"collection",(()=>Oi)),e(t.exports,"doc",(()=>Li)),e(t.exports,"getFirestore",(()=>Mi)),e(t.exports,"getDoc",(()=>yo)),e(t.exports,"getDocs",(()=>wo)),e(t.exports,"setDoc",(()=>_o)),e(t.exports,"addDoc",(()=>bo));var r=s("7xvHX"),i=s("eryG9"),o=s("5Z2ef"),a=s("gMVVg"),c=s("i4D38");s("hPtJY");const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new o.Logger("@firebase/firestore");function f(){return d.logLevel}function p(e,...t){if(d.logLevel<=o.LogLevel.DEBUG){const n=t.map(y);d.debug(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.LogLevel.ERROR){const n=t.map(y);d.error(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.LogLevel.WARN){const n=t.map(y);d.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function w(e,t){e||v()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(h.UNAUTHENTICATED)))}shutdown(){}}class k{constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new T;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new T,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new T)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new I(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new h(e)}}class C{constructor(e,t,n){this.type="FirstParty",this.user=h.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(w("string"==typeof e.token),this.p=e.token,new R(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.A=-1;class L{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=O(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function P(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new M(0,0))}static max(){return new U(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function F(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends j{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new q(t)}static emptyPath(){return new q([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends j{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return P(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new $(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new $(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(e){if(w(!!e),"string"==typeof e){let t=0;const n=G.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:X(e.seconds),nanos:X(e.nanos)}}function X(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Q(e){return"string"==typeof e?$.fromBase64String(e):$.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function J(e){const t=e.mapValue.fields.__previous_value__;return Y(t)?J(t):t}function Z(e){const t=W(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class te{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new te("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof te&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return null==e}function re(e){return 0===e&&1/e==-1/0}function se(e){return"number"==typeof e&&Number.isInteger(e)&&!re(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(q.fromString(e))}static fromName(e){return new ie(q.fromString(e).popFirst(5))}static empty(){return new ie(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new q(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Y(e)?4:_e(e)?9007199254740991:10:v()}function ce(e,t){if(e===t)return!0;const n=ae(e);if(n!==ae(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Z(e).isEqual(Z(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=W(e.timestampValue),r=W(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Q(e.bytesValue).isEqual(Q(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return X(e.geoPointValue.latitude)===X(t.geoPointValue.latitude)&&X(e.geoPointValue.longitude)===X(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return X(e.integerValue)===X(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=X(e.doubleValue),r=X(t.doubleValue);return n===r?re(n)===re(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return P(e.arrayValue.values||[],t.arrayValue.values||[],ce);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(V(n)!==V(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ce(n[e],r[e])))return!1;return!0}(e,t);default:return v()}var r}function ue(e,t){return void 0!==(e.values||[]).find((e=>ce(e,t)))}function he(e,t){if(e===t)return 0;const n=ae(e),r=ae(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=X(e.integerValue||e.doubleValue),r=X(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return le(e.timestampValue,t.timestampValue);case 4:return le(Z(e),Z(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Q(e),r=Q(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=x(n[e],r[e]);if(0!==t)return t}return x(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=x(X(e.latitude),X(t.latitude));return 0!==n?n:x(X(e.longitude),X(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=he(n[e],r[e]);if(t)return t}return x(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===oe.mapValue&&t===oe.mapValue)return 0;if(e===oe.mapValue)return 1;if(t===oe.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=x(r[e],i[e]);if(0!==t)return t;const o=he(n[r[e]],s[i[e]]);if(0!==o)return o}return x(r.length,i.length)}(e.mapValue,t.mapValue);default:throw v()}}function le(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);const n=W(e),r=W(t),s=x(n.seconds,r.seconds);return 0!==s?s:x(n.nanos,r.nanos)}function de(e){return fe(e)}function fe(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=W(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Q(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ie.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=fe(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${fe(e.fields[s])}`;return n+"}"}(e.mapValue):v()}function pe(e){return!!e&&"integerValue"in e}function ge(e){return!!e&&"arrayValue"in e}function me(e){return!!e&&"nullValue"in e}function ye(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ve(e){return!!e&&"mapValue"in e}function we(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return F(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=we(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=we(e.arrayValue.values[n]);return t}return Object.assign({},e)}function _e(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ve(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=we(t)}setAll(e){let t=H.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=we(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());ve(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ce(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ve(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){F(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new be(we(this.value))}}function Ee(e){const t=[];return F(e.fields,((e,n)=>{const r=new H([e]);if(ve(n)){const e=Ee(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new z(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Te{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Te(e,0,U.min(),U.min(),be.empty(),0)}static newFoundDocument(e,t,n){return new Te(e,1,t,U.min(),n,0)}static newNoDocument(e,t){return new Te(e,2,t,U.min(),be.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,U.min(),be.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ie{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ie.UNKNOWN_ID=-1;function Se(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=U.fromTimestamp(1e9===r?new M(n+1,0):new M(n,r));return new Ce(s,ie.empty(),t)}function ke(e){return new Ce(e.readTime,e.key,-1)}class Ce{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ce(U.min(),ie.empty(),-1)}static max(){return new Ce(U.max(),ie.empty(),-1)}}function Ae(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ie.comparator(e.documentKey,t.documentKey),0!==n?n:x(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ne(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ne(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ne(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ne(this.root,e,this.comparator,!0)}}class Ne{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:De.RED,this.left=null!=r?r:De.EMPTY,this.right=null!=s?s:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new De(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return De.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1,De.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,s){return this}insert(e,t,n){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Le(this.data.getIterator())}getIteratorFrom(e){return new Le(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Oe))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Oe(this.comparator);return t.data=e,t}}class Le{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function Pe(e,t=null,n=[],r=[],s=null,i=null,o=null){return new xe(e,t,n,r,s,i,o)}function Me(e){const t=_(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+de(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),ne(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>de(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>de(e))).join(",")),t.P=e}return t.P}function Ue(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Qe(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ce(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Je(e.startAt,t.startAt)&&Je(e.endAt,t.endAt)}function Ve(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Fe extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Be(e,t,n):"array-contains"===t?new He(e,n):"in"===t?new ze(e,n):"not-in"===t?new $e(e,n):"array-contains-any"===t?new Ge(e,n):new Fe(e,t,n)}static V(e,t,n){return"in"===t?new je(e,n):new qe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(he(t,this.value)):null!==t&&ae(this.value)===ae(t)&&this.v(he(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Be extends Fe{constructor(e,t,n){super(e,t,n),this.key=ie.fromName(n.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.v(t)}}class je extends Fe{constructor(e,t){super(e,"in",t),this.keys=Ke("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class qe extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=Ke("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ke(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ie.fromName(e.referenceValue)))}class He extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ge(t)&&ue(t.arrayValue,this.value)}}class ze extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ue(this.value.arrayValue,t)}}class $e extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ue(this.value.arrayValue,t)}}class Ge extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ge(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ue(this.value.arrayValue,e)))}}class We{constructor(e,t){this.position=e,this.inclusive=t}}class Xe{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ye(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?ie.comparator(ie.fromName(o.referenceValue),n.key):he(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Je(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ce(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function et(e,t,n,r,s,i,o,a){return new Ze(e,t,n,r,s,i,o,a)}function tt(e){return new Ze(e)}function nt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function rt(e){for(const t of e.filters)if(t.S())return t.field;return null}function st(e){return null!==e.collectionGroup}function it(e){const t=_(e);if(null===t.D){t.D=[];const e=rt(t),n=nt(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Xe(e)),t.D.push(new Xe(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Xe(H.keyField(),e))}}}return t.D}function ot(e){const t=_(e);if(!t.C)if("F"===t.limitType)t.C=Pe(t.path,t.collectionGroup,it(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of it(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Xe(n.field,t))}const n=t.endAt?new We(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new We(t.startAt.position,t.startAt.inclusive):null;t.C=Pe(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function at(e,t,n){return new Ze(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ct(e,t){return Ue(ot(e),ot(t))&&e.limitType===t.limitType}function ut(e){return`${Me(ot(e))}|lt:${e.limitType}`}function ht(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${de(t.value)}`})).join(", ")}]`),ne(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>de(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>de(e))).join(",")),`Target(${t})`}(ot(e))}; limitType=${e.limitType})`}function lt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ie.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Ye(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,it(n),r)||n.endAt&&!function(e,t,n){const r=Ye(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,it(n),r)));var n,r}function dt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ft(e){return(t,n)=>{let r=!1;for(const s of it(e)){const e=pt(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function pt(e,t,n){const r=e.field.isKeyField()?ie.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?he(r,s):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:re(t)?"-0":t}}function mt(e){return{integerValue:""+e}}function yt(e,t){return se(t)?mt(t):gt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this._=void 0}}function wt(e,t,n){return e instanceof Et?Tt(e,t):e instanceof It?St(e,t):n}function _t(e,t){var n,r;return e instanceof kt?pe(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class bt extends vt{}class Et extends vt{constructor(e){super(),this.elements=e}}function Tt(e,t){const n=At(t);for(const t of e.elements)n.some((e=>ce(e,t)))||n.push(t);return{arrayValue:{values:n}}}class It extends vt{constructor(e){super(),this.elements=e}}function St(e,t){let n=At(t);for(const t of e.elements)n=n.filter((e=>!ce(e,t)));return{arrayValue:{values:n}}}class kt extends vt{constructor(e,t){super(),this.M=e,this.k=t}}function Ct(e){return X(e.integerValue||e.doubleValue)}function At(e){return ge(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){this.version=e,this.transformResults=t}}class Nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ot{}function Lt(e,t,n){var r;e instanceof Vt?function(e,t,n){const r=e.value.clone(),s=jt(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ft?function(e,t,n){if(!Dt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=jt(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Bt(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function xt(e,t,n){var r;e instanceof Vt?function(e,t,n){if(!Dt(e.precondition,t))return;const r=e.value.clone(),s=qt(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(Ut(t),r).setHasLocalMutations()}(e,t,n):e instanceof Ft?function(e,t,n){if(!Dt(e.precondition,t))return;const r=qt(e.fieldTransforms,n,t),s=t.data;s.setAll(Bt(e)),s.setAll(r),t.convertToFoundDocument(Ut(t),s).setHasLocalMutations()}(e,t,n):(r=t,Dt(e.precondition,r)&&r.convertToNoDocument(U.min()))}function Pt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=_t(r.transform,e||null);null!=s&&(null==n&&(n=be.empty()),n.set(r.field,s))}return n||null}function Mt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&P(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Et&&r instanceof Et||n instanceof It&&r instanceof It?P(n.elements,r.elements,ce):n instanceof kt&&r instanceof kt?ce(n.k,r.k):n instanceof bt&&r instanceof bt);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}function Ut(e){return e.isFoundDocument()?e.version:U.min()}class Vt extends Ot{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ft extends Ot{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Bt(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function jt(e,t,n){const r=new Map;w(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,wt(o,a,n[s]))}return r}function qt(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(i=c,o=t,(s=e)instanceof bt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,i):s instanceof Et?Tt(s,i):s instanceof It?St(s,i):function(e,t){const n=_t(e,t),r=Ct(n)+Ct(e.k);return pe(n)&&pe(e.k)?mt(r):gt(e.M,r)}(s,i)))}var s,i,o;return r}class Kt extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ht extends Ot{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t,Gt;function Wt(e){switch(e){default:return v();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Xt(e){if(void 0===e)return g("GRPC error has no .code"),b.UNKNOWN;switch(e){case $t.OK:return b.OK;case $t.CANCELLED:return b.CANCELLED;case $t.UNKNOWN:return b.UNKNOWN;case $t.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case $t.INTERNAL:return b.INTERNAL;case $t.UNAVAILABLE:return b.UNAVAILABLE;case $t.UNAUTHENTICATED:return b.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case $t.NOT_FOUND:return b.NOT_FOUND;case $t.ALREADY_EXISTS:return b.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return b.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case $t.ABORTED:return b.ABORTED;case $t.OUT_OF_RANGE:return b.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return b.UNIMPLEMENTED;case $t.DATA_LOSS:return b.DATA_LOSS;default:return v()}}(Gt=$t||($t={}))[Gt.OK=0]="OK",Gt[Gt.CANCELLED=1]="CANCELLED",Gt[Gt.UNKNOWN=2]="UNKNOWN",Gt[Gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gt[Gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gt[Gt.NOT_FOUND=5]="NOT_FOUND",Gt[Gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gt[Gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gt[Gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gt[Gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gt[Gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gt[Gt.ABORTED=10]="ABORTED",Gt[Gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gt[Gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gt[Gt.INTERNAL=13]="INTERNAL",Gt[Gt.UNAVAILABLE=14]="UNAVAILABLE",Gt[Gt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){F(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return B(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Re(ie.comparator);function Jt(){return Yt}const Zt=new Re(ie.comparator);function en(...e){let t=Zt;for(const n of e)t=t.insert(n.key,n);return t}function tn(){return new Qt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const nn=new Re(ie.comparator),rn=new Oe(ie.comparator);function sn(...e){let t=rn;for(const n of e)t=t.add(n);return t}const on=new Oe(x);function an(){return on}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,un.createSynthesizedTargetChangeForCurrentChange(e,t)),new cn(U.min(),n,an(),Jt(),sn())}}class un{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new un($.EMPTY_BYTE_STRING,t,sn(),sn(),sn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class ln{constructor(e,t){this.targetId=e,this.$=t}}class dn{constructor(e,t,n=$.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class fn{constructor(){this.B=0,this.L=mn(),this.U=$.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=sn(),t=sn(),n=sn();return this.L.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}})),new un(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=mn()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class pn{constructor(e){this.nt=e,this.st=new Map,this.it=Jt(),this.rt=gn(),this.ot=new Oe(x)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:v()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(Ve(e))if(0===n){const n=new ie(e.path);this.ct(t,n,Te.newNoDocument(n,U.min()))}else w(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const s=this.wt(r);if(s){if(n.current&&Ve(s.target)){const t=new ie(s.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Te.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=sn();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new cn(e,t,this.ot,this.it,n);return this.it=Jt(),this.rt=gn(),this.ot=new Oe(x),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new fn,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Oe(x),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new fn),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function gn(){return new Re(ie.comparator)}function mn(){return new Re(ie.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={asc:"ASCENDING",desc:"DESCENDING"},vn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class wn{constructor(e,t){this.databaseId=e,this.N=t}}function _n(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bn(e,t){return e.N?t.toBase64():t.toUint8Array()}function En(e,t){return _n(e,t.toTimestamp())}function Tn(e){return w(!!e),U.fromTimestamp(function(e){const t=W(e);return new M(t.seconds,t.nanos)}(e))}function In(e,t){return(n=e,new q(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Sn(e){const t=q.fromString(e);return w(Hn(t)),t}function kn(e,t){return In(e.databaseId,t.path)}function Cn(e,t){const n=Sn(t);if(n.get(1)!==e.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ie(Dn(n))}function An(e,t){return In(e.databaseId,t)}function Rn(e){const t=Sn(e);return 4===t.length?q.emptyPath():Dn(t)}function Nn(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dn(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function On(e,t,n){return{name:kn(e,t),fields:n.value.mapValue.fields}}function Ln(e,t){let n;if(t instanceof Vt)n={update:On(e,t.key,t.value)};else if(t instanceof Kt)n={delete:kn(e,t.key)};else if(t instanceof Ft)n={update:On(e,t.key,t.data),updateMask:Kn(t.fieldMask)};else{if(!(t instanceof Ht))return v();n={verify:kn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Et)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof It)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw v()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:En(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:v())),n;var r,s}function xn(e,t){return{documents:[An(e,t.path)]}}function Pn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=An(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=An(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ye(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NAN"}};if(me(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ye(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NAN"}};if(me(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(e.field),op:Fn(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>{return{field:Bn((t=e).field),direction:Vn(t.dir)};var t}))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=e,c=t.limit,a.N||ne(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Mn(e){let t=Rn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){w(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Un(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Xe(jn((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ne(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new We(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new We(n,t)}(n.endAt)),et(t,s,o,i,a,"F",c,u)}function Un(e){return e?void 0!==e.unaryFilter?[qn(e)]:void 0!==e.fieldFilter?[(t=e,Fe.create(jn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Un(e))).reduce(((e,t)=>e.concat(t))):v():[];var t}function Vn(e){return yn[e]}function Fn(e){return vn[e]}function Bn(e){return{fieldPath:e.canonicalString()}}function jn(e){return H.fromServerFormat(e.fieldPath)}function qn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=jn(e.unaryFilter.field);return Fe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=jn(e.unaryFilter.field);return Fe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=jn(e.unaryFilter.field);return Fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=jn(e.unaryFilter.field);return Fe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Kn(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$n=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Gn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Xn(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Xn?t:Xn.resolve(t)}catch(e){return Xn.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Xn.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Xn.reject(t)}static resolve(e){return new Xn(((t,n)=>{t(e)}))}static reject(e){return new Xn(((t,n)=>{n(e)}))}static waitFor(e){return new Xn(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=Xn.resolve(!1);for(const n of e)t=t.next((e=>e?Xn.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Lt(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&xt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&xt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(U.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),sn())}isEqual(e){return this.batchId===e.batchId&&P(this.mutations,e.mutations,((e,t)=>Mt(e,t)))&&P(this.baseMutations,e.baseMutations,((e,t)=>Mt(e,t)))}}class Jn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){w(e.mutations.length===n.length);let r=nn;const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new Jn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n,r,s=U.min(),i=U.min(),o=$.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.Jt=e}}function nr(e){const t=Mn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?at(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(X(e.integerValue));else if("doubleValue"in e){const n=X(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),re(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Q(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?_e(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):v()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const e of Object.keys(n))this.re(e,t),this.te(n[e],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const e of n)this.te(e,t)}ae(e,t){this.ne(t,37),ie.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}rr.fe=new rr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(){this.qe=new ir}addToCollectionParentIndex(e,t){return this.qe.add(t),Xn.resolve()}getCollectionParents(e,t){return Xn.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Xn.resolve()}deleteFieldIndex(e,t){return Xn.resolve()}getDocumentsMatchingTarget(e,t){return Xn.resolve(null)}getIndexType(e,t){return Xn.resolve(0)}getFieldIndexes(e,t){return Xn.resolve([])}getNextCollectionGroupToUpdate(e){return Xn.resolve(null)}getMinOffset(e,t){return Xn.resolve(Ce.min())}updateCollectionGroup(e,t,n){return Xn.resolve()}updateIndexEntries(e,t){return Xn.resolve()}}class ir{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Oe(q.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Oe(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class or{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new or(e,or.DEFAULT_COLLECTION_PERCENTILE,or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or.DEFAULT_COLLECTION_PERCENTILE=10,or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,or.DEFAULT=new or(41943040,or.DEFAULT_COLLECTION_PERCENTILE,or.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),or.DISABLED=new or(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ar(0)}static yn(){return new ar(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function cr(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==Gn)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(){this.changes=new Qt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Xn.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return r=t,ie.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.js(e,t.path):st(t)?this.Ws(e,t,n):this.zs(e,t,n);var r}js(e,t){return this.Ls(e,new ie(t)).next((e=>{let t=en();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let s=en();return this.indexManager.getCollectionParents(e,r).next((i=>Xn.forEach(i,(i=>{const o=(a=t,c=i.child(r),new Ze(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.zs(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let s=r.get(n);null==s&&(s=Te.newInvalidDocument(n),r=r.insert(n,s)),xt(e,s,t.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{lt(t,n)||(r=r.remove(e))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=sn(),r=sn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new lr(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,n,r){return this.ti(e,t).next((s=>s||this.ei(e,t,r,n))).next((n=>n||this.ni(e,t)))}ti(e,t){return Xn.resolve(null)}ei(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(U.min())?this.ni(e,t):this.Zs.Ks(e,n).next((s=>{const i=this.si(t,s);return this.ii(t,i,n,r)?this.ni(e,t):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ht(t)),this.ri(e,i,t,Se(r,-1)))}))}si(e,t){let n=new Oe(ft(e));return t.forEach(((t,r)=>{lt(e,r)&&(n=n.add(r))})),n}ii(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ni(e,t){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ht(t)),this.Zs.Qs(e,t,Ce.min())}ri(e,t,n,r){return this.Zs.Qs(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,n,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new Re(x),this.ai=new Qt((e=>Me(e)),Ue),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(n)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new hr(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ui)))}}function pr(e,t,n,r){return new fr(e,t,n,r)}async function gr(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((s=>(r=s,n.li(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=sn();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.fi.Ks(e,o).next((e=>({di:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function mr(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function yr(e,t,n){let r=sn();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Jt();return n.forEach(((n,s)=>{const i=e.get(n);s.isNoDocument()&&s.version.isEqual(U.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)})),r}))}function vr(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function wr(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((s=>s?(r=s,Xn.resolve(r)):n.fs.allocateTargetId(e).next((s=>(r=new er(t,s,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(e.targetId,e),n.ai.set(t,e.targetId)),e}))}async function _r(e,t,n){const r=_(e),s=r.ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Qn(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ui=r.ui.remove(t),r.ai.delete(s.target)}function br(e,t,n){const r=_(e);let s=U.min(),i=sn();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=_(e),s=r.ai.get(n);return void 0!==s?Xn.resolve(r.ui.get(s)):r.fs.getTargetData(t,n)}(r,e,ot(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.oi.Qs(e,t,n?s:U.min(),n?i:sn()))).next((e=>(Er(r,dt(t),e),{documents:e,_i:i})))))}function Er(e,t,n){let r=U.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ci.set(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return Xn.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var n;return this.yi.set(t.id,{id:(n=t).id,version:n.version,createTime:Tn(n.createTime)}),Xn.resolve()}getNamedQuery(e,t){return Xn.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,{name:(n=t).name,query:nr(n.bundledQuery),readTime:Tn(n.readTime)}),Xn.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.overlays=new Re(ie.comparator),this.Ii=new Map}getOverlay(e,t){return Xn.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),Xn.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ii.delete(n)),Xn.resolve()}getOverlaysForCollection(e,t,n){const r=tn(),s=t.length+1,i=new ie(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Xn.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Re(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=tn(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=tn(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Xn.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Zn(t,n));let s=this.Ii.get(t);void 0===s&&(s=sn(),this.Ii.set(t,s)),this.Ii.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.Ti=new Oe(kr.Ei),this.Ai=new Oe(kr.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const n=new kr(e,t);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Pi(new kr(e,t))}Vi(e,t){e.forEach((e=>this.removeReference(e,t)))}vi(e){const t=new ie(new q([])),n=new kr(t,e),r=new kr(t,e+1),s=[];return this.Ai.forEachInRange([n,r],(e=>{this.Pi(e),s.push(e.key)})),s}Si(){this.Ti.forEach((e=>this.Pi(e)))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new ie(new q([])),n=new kr(t,e),r=new kr(t,e+1);let s=sn();return this.Ai.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new kr(e,0),n=this.Ti.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class kr{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return ie.comparator(e.key,t.key)||x(e.Ci,t.Ci)}static Ri(e,t){return x(e.Ci,t.Ci)||ie.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new Oe(kr.Ei)}checkEmpty(e){return Xn.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const i=new Yn(s,t,n,r);this.Bs.push(i);for(const t of r)this.Ni=this.Ni.add(new kr(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Xn.resolve(i)}lookupMutationBatch(e,t){return Xn.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Mi(n),s=r<0?0:r;return Xn.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return Xn.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(e){return Xn.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new kr(t,0),r=new kr(t,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([n,r],(e=>{const t=this.ki(e.Ci);s.push(t)})),Xn.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Oe(x);return t.forEach((e=>{const t=new kr(e,0),r=new kr(e,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],(e=>{n=n.add(e.Ci)}))})),Xn.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;ie.isDocumentKey(s)||(s=s.child(""));const i=new kr(new ie(s),0);let o=new Oe(x);return this.Ni.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Ci)),!0)}),i),Xn.resolve(this.Oi(o))}Oi(e){const t=[];return e.forEach((e=>{const n=this.ki(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){w(0===this.Fi(t.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Xn.forEach(t.mutations,(r=>{const s=new kr(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Ni=n}))}_n(e){}containsKey(e,t){const n=new kr(t,0),r=this.Ni.firstAfterOrEqual(n);return Xn.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Xn.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.$i=e,this.docs=new Re(ie.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.$i(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Xn.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=Jt();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Te.newInvalidDocument(e))})),Xn.resolve(n)}getAllFromCollection(e,t,n){let r=Jt();const s=new ie(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Ae(ke(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Xn.resolve(r)}getAllFromCollectionGroup(e,t,n,r){v()}Bi(e,t){return Xn.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Rr(this)}getSize(e){return Xn.resolve(this.size)}}class Rr extends ur{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),Xn.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.persistence=e,this.Li=new Qt((e=>Me(e)),Ue),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Sr,this.targetCount=0,this.Ki=ar.gn()}forEachTarget(e,t){return this.Li.forEach(((e,n)=>t(n))),Xn.resolve()}getLastRemoteSnapshotVersion(e){return Xn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Xn.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),Xn.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ui&&(this.Ui=t),Xn.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new ar(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Xn.resolve()}updateTargetData(e,t){return this.Tn(t),Xn.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,Xn.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Li.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Li.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Xn.waitFor(s).next((()=>r))}getTargetCount(e){return Xn.resolve(this.targetCount)}getTargetData(e,t){const n=this.Li.get(t)||null;return Xn.resolve(n)}addMatchingKeys(e,t,n){return this.qi.bi(t,n),Xn.resolve()}removeMatchingKeys(e,t,n){this.qi.Vi(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),Xn.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),Xn.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qi.Di(t);return Xn.resolve(n)}containsKey(e,t){return Xn.resolve(this.qi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.Gi={},this.overlays={},this.es=new D(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Nr(this),this.indexManager=new sr,this.ds=new Ar((e=>this.referenceDelegate.Qi(e))),this.M=new tr(t),this._s=new Tr(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ir,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Gi[e.toKey()];return n||(n=new Cr(t,this.referenceDelegate),this.Gi[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new Or(this.es.next());return this.referenceDelegate.ji(),n(r).next((e=>this.referenceDelegate.Wi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}zi(e,t){return Xn.or(Object.values(this.Gi).map((n=>()=>n.containsKey(e,t))))}}class Or extends Wn{constructor(e){super(),this.currentSequenceNumber=e}}class Lr{constructor(e){this.persistence=e,this.Hi=new Sr,this.Ji=null}static Yi(e){return new Lr(e)}get Xi(){if(this.Ji)return this.Ji;throw v()}addReference(e,t,n){return this.Hi.addReference(n,t),this.Xi.delete(n.toString()),Xn.resolve()}removeReference(e,t,n){return this.Hi.removeReference(n,t),this.Xi.add(n.toString()),Xn.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),Xn.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach((e=>this.Xi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Xn.forEach(this.Xi,(n=>{const r=ie.fromPath(n);return this.Zi(e,r).next((e=>{e||t.removeEntry(r,U.min())}))})).next((()=>(this.Ji=null,t.apply(e))))}updateLimboDocument(e,t){return this.Zi(e,t).next((e=>{e?this.Xi.delete(t.toString()):this.Xi.add(t.toString())}))}Qi(e){return 0}Zi(e,t){return Xn.or([()=>Xn.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.activeTargetIds=an()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pr{constructor(){this.Ur=new xr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new xr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{Kr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,s){const i=this.ho(e,t);p("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(e,i,o,n).then((e=>(p("RestConnection","Received: ",e),e)),(t=>{throw m("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}_o(e,t,n,r,s){return this.co(e,t,n,r,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Vr[e];return`${this.uo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((s,i)=>{const o=new c.XhrIo;o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),s(t);break;case c.ErrorCode.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),i(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(t)>=0?t:b.UNKNOWN}(e.status);i(new E(t,e.message))}else i(new E(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(b.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=c.createWebChannelTransport(),i=c.getStatEventTarget(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new c.FetchXmlHttpFactory({})),this.lo(o.initMessageHeaders,t,n),a.isMobileCordova()||a.isReactNative()||a.isElectron()||a.isIE()||a.isUWP()||a.isBrowserExtension()||(o.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,o);const h=s.createWebChannel(u,o);let l=!1,d=!1;const f=new Fr({Jr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(l||(p("Connection","Opening WebChannel transport."),h.open(),l=!0),p("Connection","WebChannel sending:",e),h.send(e))},Yr:()=>h.close()}),g=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return g(h,c.WebChannel.EventType.OPEN,(()=>{d||p("Connection","WebChannel transport opened.")})),g(h,c.WebChannel.EventType.CLOSE,(()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.ro())})),g(h,c.WebChannel.EventType.ERROR,(e=>{d||(d=!0,m("Connection","WebChannel transport errored:",e),f.ro(new E(b.UNAVAILABLE,"The operation could not be completed")))})),g(h,c.WebChannel.EventType.MESSAGE,(e=>{var t;if(!d){const n=e.data[0];w(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){p("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=$t[e];if(void 0!==t)return Xt(t)}(e),n=s.message;void 0===t&&(t=b.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),d=!0,f.ro(new E(t,n)),h.close()}else p("Connection","WebChannel received:",n),f.oo(n)}})),g(i,c.Event.STAT_EVENT,(e=>{e.stat===c.Stat.PROXY?p("Connection","Detected buffering proxy"):e.stat===c.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.io()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){return new wn(e,!0)}class Kr{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Yn=e,this.timerId=t,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,n,r,s,i,o,a){this.Yn=e,this.Vo=n,this.vo=r,this.So=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Kr(e,t)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Do===t&&this.Qo(e,n)}),(t=>{e((()=>{const e=new E(b.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)}))}))}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((e=>{n((()=>this.jo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget((()=>this.Do===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zr extends Hr{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.M=s}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),i=t.targetChange.targetIds||[],o=function(e,t){return e.N?(w(void 0===t||"string"==typeof t),$.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),$.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?b.UNKNOWN:Xt(e.code);return new E(t,e.message||"")}(a);n=new dn(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cn(e,r.document.name),i=Tn(r.document.updateTime),o=new be({mapValue:{fields:r.document.fields}}),a=Te.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new hn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Cn(e,r.document),i=r.readTime?Tn(r.readTime):U.min(),o=Te.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Cn(e,r.document),i=r.removedTargetIds||[];n=new hn([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new zt(r),i=e.targetId;n=new ln(i,s)}}var r;return n}(this.M,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?Tn(t.readTime):U.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=Nn(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=Ve(r)?{documents:xn(e,r)}:{query:Pn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=bn(e,t.resumeToken):t.snapshotVersion.compareTo(U.min())>0&&(n.readTime=_n(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=Nn(this.M),t.removeTarget=e,this.Lo(t)}}class $r extends Hr{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(w(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Tn(e.updateTime):Tn(t);return n.isEqual(U.min())&&(n=Tn(t)),new Rt(n,e.transformResults||[])}(e,n)))):[]),s=Tn(e.commitTime);return this.listener.tu(s,r)}var t,n;return w(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Nn(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ln(this.M,e)))};this.Lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So.co(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(b.UNKNOWN,e.toString())}))}_o(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So._o(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(b.UNKNOWN,e.toString())}))}terminate(){this.su=!0}}class Wr{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(e){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(g(t),this.uu=!1):p("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr((e=>{n.enqueueAndForget((async()=>{ss(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.wu.add(4),await Yr(t),t.yu.set("Unknown"),t.wu.delete(4),await Qr(t)}(this))}))})),this.yu=new Wr(n,r)}}async function Qr(e){if(ss(e))for(const t of e.mu)await t(!0)}async function Yr(e){for(const t of e.mu)await t(!1)}function Jr(e,t){const n=_(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),rs(n)?ns(n):Es(n).Mo()&&es(n,t))}function Zr(e,t){const n=_(e),r=Es(n);n._u.delete(t),r.Mo()&&ts(n,t),0===n._u.size&&(r.Mo()?r.$o():ss(n)&&n.yu.set("Unknown"))}function es(e,t){e.pu.Z(t.targetId),Es(e).Ho(t)}function ts(e,t){e.pu.Z(t),Es(e).Jo(t)}function ns(e){e.pu=new pn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),Es(e).start(),e.yu.au()}function rs(e){return ss(e)&&!Es(e).ko()&&e._u.size>0}function ss(e){return 0===_(e).wu.size}function is(e){e.pu=void 0}async function os(e){e._u.forEach(((t,n)=>{es(e,t)}))}async function as(e,t){is(e),rs(e)?(e.yu.lu(t),ns(e)):e.yu.set("Unknown")}async function cs(e,t,n){if(e.yu.set("Online"),t instanceof dn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await us(e,n)}else if(t instanceof hn?e.pu.ut(t):t instanceof ln?e.pu._t(t):e.pu.ht(t),!n.isEqual(U.min()))try{const t=await mr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e._u.get(r);s&&e._u.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),ts(e,t);const r=new er(n.target,t,1,n.sequenceNumber);es(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await us(e,t)}}async function us(e,t,n){if(!Qn(t))throw t;e.wu.add(1),await Yr(e),e.yu.set("Offline"),n||(n=()=>mr(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await Qr(e)}))}function hs(e,t){return t().catch((n=>us(e,n,t)))}async function ls(e){const t=_(e),n=Ts(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;ds(t);)try{const e=await vr(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,fs(t,e)}catch(e){await us(t,e)}ps(t)&&gs(t)}function ds(e){return ss(e)&&e.du.length<10}function fs(e,t){e.du.push(t);const n=Ts(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function ps(e){return ss(e)&&!Ts(e).ko()&&e.du.length>0}function gs(e){Ts(e).start()}async function ms(e){Ts(e).nu()}async function ys(e){const t=Ts(e);for(const n of e.du)t.Zo(n.mutations)}async function vs(e,t,n){const r=e.du.shift(),s=Jn.from(r,t,n);await hs(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await ls(e)}async function ws(e,t){t&&Ts(e).Xo&&await async function(e,t){if(Wt(n=t.code)&&n!==b.ABORTED){const n=e.du.shift();Ts(e).Fo(),await hs(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ls(e)}var n}(e,t),ps(e)&&gs(e)}async function _s(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.wu.add(3),await Yr(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await Qr(n)}async function bs(e,t){const n=_(e);t?(n.wu.delete(2),await Qr(n)):t||(n.wu.add(2),await Yr(n),n.yu.set("Unknown"))}function Es(e){return e.Iu||(e.Iu=function(e,t,n){const r=_(e);return r.iu(),new zr(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:os.bind(null,e),eo:as.bind(null,e),zo:cs.bind(null,e)}),e.mu.push((async t=>{t?(e.Iu.Fo(),rs(e)?ns(e):e.yu.set("Unknown")):(await e.Iu.stop(),is(e))}))),e.Iu}function Ts(e){return e.Tu||(e.Tu=function(e,t,n){const r=_(e);return r.iu(),new $r(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:ms.bind(null,e),eo:ws.bind(null,e),eu:ys.bind(null,e),tu:vs.bind(null,e)}),e.mu.push((async t=>{t?(e.Tu.Fo(),await ls(e)):(await e.Tu.stop(),e.du.length>0&&(p("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))}))),e.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Is{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Is(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ss(e,t){if(g("AsyncQueue",`${t}: ${e}`),Qn(e))return new E(b.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ie.comparator(t.key,n.key):(e,t)=>ie.comparator(e.key,t.key),this.keyedMap=en(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new ks(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ks))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ks;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.Eu=new Re(ie.comparator)}track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):v():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class As{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new As(e,t,ks.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ct(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.Ru=void 0,this.listeners=[]}}class Ns{constructor(){this.queries=new Qt((e=>ut(e)),ct),this.onlineState="Unknown",this.bu=new Set}}async function Ds(e,t){const n=_(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Rs),s)try{i.Ru=await n.onListen(r)}catch(e){const n=Ss(e,`Initialization of query '${ht(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Pu(n.onlineState),i.Ru&&t.Vu(i.Ru)&&Ps(n)}async function Os(e,t){const n=_(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ls(e,t){const n=_(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.Vu(e)&&(r=!0);s.Ru=e}}r&&Ps(n)}function xs(e,t,n){const r=_(e),s=r.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);r.queries.delete(t)}function Ps(e){e.bu.forEach((e=>{e.next()}))}class Ms{constructor(e,t,n){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new As(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.ku&&n||e.docs.isEmpty()&&"Offline"!==t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(e){this.key=e}}class Vs{constructor(e){this.key=e}}class Fs{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=sn(),this.mutatedKeys=sn(),this.Gu=ft(e),this.Qu=new ks(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new Cs,r=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),h=lt(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Qu:i,zu:n,ii:o,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const i=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new As(this.query,e.Qu,r,s,e.mutatedKeys,0===o,a,!1),Xu:i}:{Xu:i}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Cs,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=sn(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new Vs(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Us(n))})),t}ta(e){this.Uu=e._i,this.Ku=sn();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return As.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class Bs{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class js{constructor(e){this.key=e,this.na=!1}}class qs{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sa={},this.ia=new Qt((e=>ut(e)),ct),this.ra=new Map,this.oa=new Set,this.ua=new Re(ie.comparator),this.aa=new Map,this.ca=new Sr,this.ha={},this.la=new Map,this.fa=ar.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function Ks(e,t){const n=ai(e);let r,s;const i=n.ia.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const e=await wr(n.localStore,ot(t));n.isPrimaryClient&&Jr(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Hs(n,t,r,"current"===i)}return s}async function Hs(e,t,n,r){e._a=(t,n,r)=>async function(e,t,n,r){let s=t.view.Wu(n);s.ii&&(s=await br(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return ti(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await br(e.localStore,t,!0),i=new Fs(t,s._i),o=i.Wu(s.documents),a=un.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);ti(e,n,c.Xu);const u=new Bs(t,n,i);return e.ia.set(t,u),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function zs(e,t){const n=_(e),r=n.ia.get(t),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter((e=>!ct(e,t)))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _r(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Zr(n.remoteStore,r.targetId),Zs(n,r.targetId)})).catch(cr)):(Zs(n,r.targetId),await _r(n.localStore,r.targetId,!0))}async function $s(e,t){const n=_(e);try{const e=await function(e,t){const n=_(e),r=t.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.fs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var h,l,d;t.targetMismatches.has(a)?u=u.withResumeToken($.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),l=u,d=i,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.fs.updateTargetData(e,u))}));let a=Jt();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yr(e,i,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(U.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Xn.waitFor(o).next((()=>i.apply(e))).next((()=>n.fi.Gs(e,a))).next((()=>a))})).then((e=>(n.ui=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.aa.get(t);r&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.na=!0:e.modifiedDocuments.size>0?w(r.na):e.removedDocuments.size>0&&(w(r.na),r.na=!1))})),await si(n,e,t)}catch(e){await cr(e)}}function Gs(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ia.forEach(((n,r)=>{const s=r.view.Pu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Pu(t)&&(r=!0)})),r&&Ps(n)}(r.eventManager,t),e.length&&r.sa.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ws(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.aa.get(t),i=s&&s.key;if(i){let e=new Re(ie.comparator);e=e.insert(i,Te.newNoDocument(i,U.min()));const n=sn().add(i),s=new cn(U.min(),new Map,new Oe(x),e,n);await $s(r,s),r.ua=r.ua.remove(i),r.aa.delete(t),ri(r)}else await _r(r.localStore,t,!1).then((()=>Zs(r,t,n))).catch(cr)}async function Xs(e,t){const n=_(e),r=t.batch.batchId;try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.hi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Xn.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);w(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.Bs.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}(n.localStore,t);Js(n,r,null),Ys(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await si(n,e)}catch(e){await cr(e)}}async function Qs(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(w(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}(r.localStore,t);Js(r,t,n),Ys(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await si(r,e)}catch(e){await cr(e)}}function Ys(e,t){(e.la.get(t)||[]).forEach((e=>{e.resolve()})),e.la.delete(t)}function Js(e,t,n){const r=_(e);let s=r.ha[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.ha[r.currentUser.toKey()]=s}}function Zs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ra.get(t))e.ia.delete(r),n&&e.sa.wa(r,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach((t=>{e.ca.containsKey(t)||ei(e,t)}))}function ei(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);null!==n&&(Zr(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),ri(e))}function ti(e,t,n){for(const r of n)r instanceof Us?(e.ca.addReference(r.key,t),ni(e,r)):r instanceof Vs?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ca.removeReference(r.key,t),e.ca.containsKey(r.key)||ei(e,r.key)):v()}function ni(e,t){const n=t.key,r=n.path.canonicalString();e.ua.get(n)||e.oa.has(r)||(p("SyncEngine","New document in limbo: "+n),e.oa.add(r),ri(e))}function ri(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new ie(q.fromString(t)),r=e.fa.next();e.aa.set(r,new js(n)),e.ua=e.ua.insert(n,r),Jr(e.remoteStore,new er(ot(tt(n.path)),r,2,D.A))}}async function si(e,t,n){const r=_(e),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach(((e,a)=>{o.push(r._a(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=lr.Ys(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.sa.zo(s),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Xn.forEach(t,(t=>Xn.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Xn.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Qn(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ui.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(t,s)}}}(r.localStore,i))}async function ii(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await gr(n.localStore,t);n.currentUser=t,(r=n).la.forEach((e=>{e.forEach((e=>{e.reject(new E(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.la.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await si(n,e.di)}var r}function oi(e,t){const n=_(e),r=n.aa.get(t);if(r&&r.na)return sn().add(r.key);{let e=sn();const r=n.ra.get(t);if(!r)return e;for(const t of r){const r=n.ia.get(t);e=e.unionWith(r.view.ju)}return e}}function ai(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=$s.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=oi.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ws.bind(null,t),t.sa.zo=Ls.bind(null,t.eventManager),t.sa.wa=xs.bind(null,t.eventManager),t}function ci(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xs.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qs.bind(null,t),t}class ui{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=qr(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return pr(this.persistence,new dr,e.initialUser,this.M)}ya(e){return new Dr(Lr.Yi,this.M)}ga(e){return new Pr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Gs(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ii.bind(null,this.syncEngine),await bs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ns}createDatastore(e){const t=qr(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Br(r));var r,s,i;return s=e.authCredentials,i=e.appCheckCredentials,new Gr(s,i,n,t)}createRemoteStore(e){var t,n,r,s,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Gs(this.syncEngine,e,0),i=Ur.vt()?new Ur:new Mr,new Xr(t,n,r,s,i)}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new qs(e,t,n,r,s,i);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await Yr(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class di{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ss(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function fi(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await gr(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function pi(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gi(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>_s(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>_s(t.remoteStore,n))),e.onlineComponents=t}async function gi(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await fi(e,new ui)),e.offlineComponents}async function mi(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await pi(e,new hi)),e.onlineComponents}function yi(e){return mi(e).then((e=>e.syncEngine))}async function vi(e){const t=await mi(e),n=t.eventManager;return n.onListen=Ks.bind(null,t.syncEngine),n.onUnlisten=zs.bind(null,t.syncEngine),n}function wi(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new li({next:i=>{t.enqueueAndForget((()=>Os(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new E(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new E(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Ms(tt(n.path),i,{includeMetadataChanges:!0,ku:!0});return Ds(e,o)}(await vi(e),e.asyncQueue,t,n,r))),r.promise}function _i(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new li({next:n=>{t.enqueueAndForget((()=>Os(e,o))),n.fromCache&&"server"===r.source?s.reject(new E(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Ms(n,i,{includeMetadataChanges:!0,ku:!0});return Ds(e,o)}(await vi(e),e.asyncQueue,t,n,r))),r.promise}const bi=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e,t,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ti(e){if(!ie.isDocumentKey(e))throw new E(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ii(e){if(ie.isDocumentKey(e))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Si(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":v()}function ki(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Si(e);throw new E(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new E(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ci({}),this._settingsFrozen=!1,e instanceof te?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new te(e.options.projectId)}(e))}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ci(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return w(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new A(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new E(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bi.get(e);t&&(p("ComponentProvider","Removing Datastore"),bi.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ri(this.firestore,e,this._key)}}class Ni{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Di extends Ni{constructor(e,t,n){super(e,t,tt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ri(this.firestore,null,new ie(e))}withConverter(e){return new Di(this.firestore,e,this._path)}}function Oi(e,t,...n){if(e=a.getModularInstance(e),Ei("collection","path",t),e instanceof Ai){const r=q.fromString(t,...n);return Ii(r),new Di(e,null,r)}{if(!(e instanceof Ri||e instanceof Di))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return Ii(r),new Di(e.firestore,null,r)}}function Li(e,t,...n){if(e=a.getModularInstance(e),1===arguments.length&&(t=L.R()),Ei("doc","path",t),e instanceof Ai){const r=q.fromString(t,...n);return Ti(r),new Ri(e,null,new ie(r))}{if(!(e instanceof Ri||e instanceof Di))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return Ti(r),new Ri(e.firestore,e instanceof Di?e.converter:null,new ie(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Kr(this,"async_queue_retry"),this.Qa=()=>{const e=jr();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=jr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=jr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise((()=>{}));const t=new T;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$a.push(e),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!Qn(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(e){const t=this.Fa.then((()=>(this.qa=!0,e().catch((e=>{this.Ua=e,this.qa=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.qa=!1,e))))));return this.Fa=t,t}enqueueAfterDelay(e,t,n){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=Is.createAndSchedule(this,e,t,n,(e=>this.Ha(e)));return this.La.push(r),r}ja(){this.Ua&&v()}verifyOperationInProgress(){}async Ja(){let e;do{e=this.Fa,await e}while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then((()=>{this.La.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.La)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ja()}))}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}class Pi extends Ai{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new xi,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vi(this),this._firestoreClient.terminate()}}function Mi(e=r.getApp()){return r._getProvider(e,"firestore").getImmediate()}function Ui(e){return e._firestoreClient||Vi(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Vi(e){var t;const n=e._freezeSettings(),r=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new ee(s,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,i,o,a;e._firestoreClient=new di(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bi($.fromBase64String(e))}catch(e){throw new E(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Bi($.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=/^__.*__$/;class Hi{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vt(e,this.data,t,this.fieldTransforms)}}function zi(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class $i{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===s&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new $i(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.rc(e),r}oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return ro(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(0===e.length)throw this.ac("Document fields must not be empty");if(zi(this.ec)&&Ki.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class Gi{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||qr(e)}lc(e,t,n,r=!1){return new $i({ec:e,methodName:t,hc:n,path:H.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Wi(e){const t=e._freezeSettings(),n=qr(e._databaseId);return new Gi(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Xi(e,t,n,r,s,i={}){const o=e.lc(i.merge||i.mergeFields?2:0,t,n,s);Zi("Data must be an object, but it was:",o,r);const a=Yi(r,o);let c,u;if(i.merge)c=new z(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=eo(t,r,n);if(!o.contains(s))throw new E(b.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);so(e,s)||e.push(s)}c=new z(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Hi(new be(a),c,u)}function Qi(e,t){if(Ji(e=a.getModularInstance(e)))return Zi("Unsupported field value:",t,e),Yi(e,t);if(e instanceof ji)return function(e,t){if(!zi(t.ec))throw t.ac(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ac(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&4!==t.ec)throw t.ac("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Qi(s,t.uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=a.getModularInstance(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return yt(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=M.fromDate(e);return{timestampValue:_n(t.M,n)}}if(e instanceof M){const n=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:_n(t.M,n)}}if(e instanceof qi)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Bi)return{bytesValue:bn(t.M,e._byteString)};if(e instanceof Ri){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:In(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ac(`Unsupported field value: ${Si(e)}`)}(e,t)}function Yi(e,t){const n={};return B(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):F(e,((e,r)=>{const s=Qi(r,t.sc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Ji(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof qi||e instanceof Bi||e instanceof Ri||e instanceof ji)}function Zi(e,t,n){if(!Ji(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Si(n);throw"an object"===r?t.ac(e+" a custom object"):t.ac(e+" "+r)}var r}function eo(e,t,n){if((t=a.getModularInstance(t))instanceof Fi)return t._internalPath;if("string"==typeof t)return no(e,t);throw ro("Field path arguments must be of type string or ",e,!1,void 0,n)}const to=new RegExp("[~\\*/\\[\\]]");function no(e,t,n){if(t.search(to)>=0)throw ro(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fi(...t.split("."))._internalPath}catch(r){throw ro(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ro(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(b.INVALID_ARGUMENT,a+e+c)}function so(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ri(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new oo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ao("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class oo extends io{data(){return super.data()}}function ao(e,t){return"string"==typeof t?no(e,t):t instanceof Fi?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uo extends io{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ao("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ho extends uo{data(e={}){return super.data(e)}}class lo{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new co(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ho(this._firestore,this._userDataWriter,n.key,n,new co(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new ho(e._firestore,e._userDataWriter,n.doc.key,n.doc,new co(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ho(e._firestore,e._userDataWriter,t.doc.key,t.doc,new co(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:fo(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fo(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function po(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{convertValue(e,t="none"){switch(ae(e)){case 0:return null;case 1:return e.booleanValue;case 2:return X(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Q(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return F(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new qi(X(e.latitude),X(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=J(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Z(e));default:return null}}convertTimestamp(e){const t=W(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=q.fromString(e);w(Hn(n));const r=new te(n.get(1),n.get(3)),s=new ie(n.popFirst(5));return r.isEqual(t)||g(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yo(e){e=ki(e,Ri);const t=ki(e.firestore,Pi);return wi(Ui(t),e._key).then((n=>To(t,e,n)))}class vo extends go{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ri(this.firestore,null,t)}}function wo(e){e=ki(e,Ni);const t=ki(e.firestore,Pi),n=Ui(t),r=new vo(t);return po(e._query),_i(n,e._query).then((n=>new lo(t,r,e,n)))}function _o(e,t,n){e=ki(e,Ri);const r=ki(e.firestore,Pi),s=mo(e.converter,t,n);return Eo(r,[Xi(Wi(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Nt.none())])}function bo(e,t){const n=ki(e.firestore,Pi),r=Li(e),s=mo(e.converter,t);return Eo(n,[Xi(Wi(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,Nt.exists(!1))]).then((()=>r))}function Eo(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=ci(e);try{const e=await function(e,t){const n=_(e),r=M.now(),s=t.reduce(((e,t)=>e.add(t.key)),sn());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.fi.Ks(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=Pt(e,i.get(e.key));null!=t&&o.push(new Ft(e.key,t,Ee(t.value.mapValue),Nt.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ha[e.currentUser.toKey()];r||(r=new Re(x)),r=r.insert(t,n),e.ha[e.currentUser.toKey()]=r}(r,e.batchId,n),await si(r,e.changes),await ls(r.remoteStore)}catch(e){const t=Ss(e,"Failed to persist write");n.reject(t)}}(await yi(e),t,n))),n.promise}(Ui(e),t)}function To(e,t,n){const r=n.docs.get(t._key),s=new vo(e);return new uo(e,s,t._key,r,new co(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){var n;n=r.SDK_VERSION,l=n,r._registerComponent(new i.Component("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Pi(r,new k(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),r.registerVersion(u,"3.4.9",e),r.registerVersion(u,"3.4.9","esm2017")}()})),s.register("i4D38",(function(n,r){e(n.exports,"createWebChannelTransport",(()=>ar)),e(n.exports,"getStatEventTarget",(()=>cr)),e(n.exports,"ErrorCode",(()=>ur)),e(n.exports,"EventType",(()=>hr)),e(n.exports,"Event",(()=>lr)),e(n.exports,"Stat",(()=>dr)),e(n.exports,"FetchXmlHttpFactory",(()=>fr)),e(n.exports,"WebChannel",(()=>pr)),e(n.exports,"XhrIo",(()=>gr));var s,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o={},a=a||{},c=i||self;function u(){}function h(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function w(){this.s=this.s,this.o=this.o}var _={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}(this);delete _[e]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},E=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"==typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function T(e){return Array.prototype.concat.apply([],arguments)}function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e){return/^[\s\xa0]*$/.test(e)}var k,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return-1!=e.indexOf(t)}function R(e,t){return e<t?-1:e>t?1:0}e:{var N=c.navigator;if(N){var D=N.userAgent;if(D){k=D;break e}}k=""}function O(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}var x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<x.length;t++)n=x[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function M(e){return M[" "](e),e}M[" "]=u;var U,V,F=A(k,"Opera"),B=A(k,"Trident")||A(k,"MSIE"),j=A(k,"Edge"),q=j||B,K=A(k,"Gecko")&&!(A(k.toLowerCase(),"webkit")&&!A(k,"Edge"))&&!(A(k,"Trident")||A(k,"MSIE"))&&!A(k,"Edge"),H=A(k.toLowerCase(),"webkit")&&!A(k,"Edge");function z(){var e=c.document;return e?e.documentMode:void 0}e:{var $="",G=(V=k,K?/rv:([^\);]+)(\)|;)/.exec(V):j?/Edge\/([\d\.]+)/.exec(V):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(V):H?/WebKit\/(\S+)/.exec(V):F?/(?:Version)[ \/]?(\S+)/.exec(V):void 0);if(G&&($=G?G[1]:""),B){var W=z();if(null!=W&&W>parseFloat($)){U=String(W);break e}}U=$}var X,Q={};function Y(){return function(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=C(String(U)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=R(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||R(0==s[2].length,0==i[2].length)||R(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(c.document&&B){var J=z();X=J||(parseInt(U,10)||void 0)}else X=void 0;var Z=X,ee=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",u,t),c.removeEventListener("test",u,t)}catch(e){}return e}();function te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ne(e,t){if(te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(K){e:{try{M(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:re[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ne.Z.h.call(this)}}te.prototype.h=function(){this.defaultPrevented=!0},v(ne,te);var re={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),ie=0;function oe(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++ie,this.ca=this.fa=!1}function ae(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ce(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=b(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ae(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}ce.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=he(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new oe(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var le="closure_lm_"+(1e6*Math.random()|0),de={};function fe(e,t,n,r,s){if(r&&r.once)return ge(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)fe(e,t[i],n,r,s);return null}return n=Ee(n),e&&e[se]?e.N(t,n,l(r)?!!r.capture:!!r,s):pe(e,t,n,!1,r,s)}function pe(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=l(s)?!!s.capture:!!s,a=_e(e);if(a||(e[le]=a=new ce(e)),(n=a.add(t,n,r,o,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=we;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ee||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ve(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ge(e,t[i],n,r,s);return null}return n=Ee(n),e&&e[se]?e.O(t,n,l(r)?!!r.capture:!!r,s):pe(e,t,n,!0,r,s)}function me(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)me(e,t[i],n,r,s);else r=l(r)?!!r.capture:!!r,n=Ee(n),e&&e[se]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=he(i=e.g[t],n,r,s))&&(ae(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=_e(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,s)),(n=-1<e?t[e]:null)&&ye(n))}function ye(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[se])ue(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ve(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_e(t))?(ue(n,e),0==n.h&&(n.src=null,t[le]=null)):ae(e)}}}function ve(e){return e in de?de[e]:de[e]="on"+e}function we(e,t){if(e.ca)e=!0;else{t=new ne(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ye(e),e=n.call(r,t)}return e}function _e(e){return(e=e[le])instanceof ce?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(e){return"function"==typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Te(){w.call(this),this.i=new ce(this),this.P=this,this.I=null}function Ie(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new te(t,e);else if(t instanceof te)t.target=t.target||e;else{var s=t;P(t=new te(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Se(o,r,!0,t)&&s}if(s=Se(o=t.g=e,r,!0,t)&&s,s=Se(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=Se(o=t.g=n[i],r,!1,t)&&s}function Se(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ue(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(Te,w),Te.prototype[se]=!0,Te.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Te.prototype.M=function(){if(Te.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ae(n[r]);delete t.g[e],t.h--}}this.I=null},Te.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Te.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ke=c.JSON.stringify;function Ce(){var e=xe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ae,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){c.setTimeout((()=>{throw e}),0)}function Oe(e,t){Ae||function(){var e=c.Promise.resolve(void 0);Ae=function(){e.then(Pe)}}(),Le||(Ae(),Le=!0),xe.add(e,t)}var Le=!1,xe=new class{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Pe(){for(var e;e=Ce();){try{e.h.call(e.g)}catch(e){De(e)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1}function Me(e,t){Te.call(this),this.h=e||1,this.g=t||c,this.j=m(this.kb,this),this.l=Date.now()}function Ue(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ve(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}function Fe(e){e.g=Ve((()=>{e.g=null,e.i&&(e.i=!1,Fe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Me,Te),(s=Me.prototype).da=!1,s.S=null,s.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ie(this,"tick"),this.da&&(Ue(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Me.Z.M.call(this),Ue(this),delete this.g};class Be extends w{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fe(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(e){w.call(this),this.h=e,this.g={}}v(je,w);var qe=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var s=0;s<n.length;s++){var i=fe(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function He(e){O(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ye(e)}),e),e.g={}}function ze(){this.g=!0}function $e(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ke(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}je.prototype.M=function(){je.Z.M.call(this),He(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ze.prototype.Aa=function(){this.g=!1},ze.prototype.info=function(){};var Ge={},We=null;function Xe(){return We=We||new Te}function Qe(e){te.call(this,Ge.Ma,e)}function Ye(e){const t=Xe();Ie(t,new Qe(t,e))}function Je(e,t){te.call(this,Ge.STAT_EVENT,e),this.stat=t}function Ze(e){const t=Xe();Ie(t,new Je(t,e))}function et(e,t){te.call(this,Ge.Na,e),this.size=t}function tt(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){e()}),t)}Ge.Ma="serverreachability",v(Qe,te),Ge.STAT_EVENT="statevent",v(Je,te),Ge.Na="timingevent",v(et,te);var nt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},rt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function st(){}function it(e){return e.h||(e.h=e.i())}function ot(){}st.prototype.h=null;var at,ct={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ut(){te.call(this,"d")}function ht(){te.call(this,"c")}function lt(){}function dt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new je(this),this.P=pt,e=q?125:void 0,this.W=new Me(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ft}function ft(){this.i=null,this.g="",this.h=!1}v(ut,te),v(ht,te),v(lt,st),lt.prototype.g=function(){return new XMLHttpRequest},lt.prototype.i=function(){return{}},at=new lt;var pt=45e3,gt={},mt={};function yt(e,t,n){e.K=1,e.v=Bt(xt(t)),e.s=n,e.U=!0,vt(e,null)}function vt(e,t){e.F=Date.now(),Et(e),e.A=xt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Zt(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ft,e.g=er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Be(m(e.Ia,e,e.g),e.O)),Ke(e.V,e.g,"readystatechange",e.gb),t=e.H?L(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ye(1),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function wt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function _t(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=bt(e,n),r==mt){4==t&&(e.o=4,Ze(14),s=!1),$e(e.j,e.m,null,"[Incomplete Response]");break}if(r==gt){e.o=4,Ze(15),$e(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}$e(e.j,e.m,r,null),Ct(e,r)}wt(e)&&r!=mt&&r!=gt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ze(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$n(t),t.L=!0,Ze(11))):($e(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),St(e))}function bt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?mt:(n=Number(t.substring(n,r)),isNaN(n)?gt:(r+=1)+n>t.length?mt:(t=t.substr(r,n),e.C=r+n,t))}function Et(e){e.Y=Date.now()+e.P,Tt(e,e.P)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=tt(m(e.eb,e),t)}function It(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function St(e){0==e.l.G||e.I||Xn(e.l,e)}function kt(e){It(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ue(e.W),He(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ct(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||on(n.i,e)))if(n.I=e.N,!e.J&&on(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Wn(n),Un(n)}zn(n),Ze(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=tt(m(n.ab,n),6e3));if(1>=sn(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Yn(n,11)}else if((e.J||n.g==e)&&Wn(n),!S(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(A(e,"spdy")||A(e,"quic")||A(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(an(i,i.h),i.h=null))}if(r.D){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Ft(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=Zn(r,r.H?r.la:null,r.W),o.J){cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(It(a),Et(a)),r.g=o}else Hn(r);0<n.l.length&&Bn(n)}else"stop"!=u[0]&&"close"!=u[0]||Yn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Yn(n,7):Mn(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Ye(4)}catch(e){}}function At(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(h(e)||"string"==typeof e)E(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(h(e)||"string"==typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(h(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Rt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Rt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Nt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Dt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)Dt(s,r=e.g[t])||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Dt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(s=dt.prototype).setTimeout=function(e){this.P=e},s.gb=function(e){e=e.target;const t=this.L;t&&3==Dn(e)?t.l():this.Ia(e)},s.Ia=function(e){try{if(e==this.g)e:{const l=Dn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.ga()||On(this.g)))){this.I||4!=l||7==t||Ye(8==t||0>=d?3:2),It(this);var n=this.g.ba();this.N=n;t:if(wt(this)){var r=On(this.g);e="";var s=r.length,i=4==Dn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){kt(this),St(this);var o="";break t}this.h.i=new c.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var h=a;break t}}h=null}if(!(n=h)){this.i=!1,this.o=3,Ze(12),kt(this),St(this);break e}$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ct(this,n)}this.U?(_t(this,l,o),q&&this.i&&3==l&&(Ke(this.V,this.W,"tick",this.fb),this.W.start())):($e(this.j,this.m,o,null),Ct(this,o)),4==l&&kt(this),this.i&&!this.I&&(4==l?Xn(this.l,this):(this.i=!1,Et(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),kt(this),St(this)}}}catch(e){}},s.fb=function(){if(this.g){var e=Dn(this.g),t=this.g.ga();this.C<t.length&&(It(this),_t(this,e,t),this.i&&4!=e&&Et(this))}},s.cancel=function(){this.I=!0,kt(this)},s.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ye(3),Ze(17)),kt(this),this.o=2,St(this)):Tt(this,this.Y-e)},(s=Rt.prototype).R=function(){Nt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},s.T=function(){return Nt(this),this.g.concat()},s.get=function(e,t){return Dt(this.h,e)?this.h[e]:t},s.set=function(e,t){Dt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},s.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Ot=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Lt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Lt){this.g=void 0!==t?t:e.g,Pt(this,e.j),this.s=e.s,Mt(this,e.i),Ut(this,e.m),this.l=e.l,t=e.h;var n=new Xt;n.i=t.i,t.g&&(n.g=new Rt(t.g),n.h=t.h),Vt(this,n),this.o=e.o}else e&&(n=String(e).match(Ot))?(this.g=!!t,Pt(this,n[1]||"",!0),this.s=jt(n[2]||""),Mt(this,n[3]||"",!0),Ut(this,n[4]),this.l=jt(n[5]||"",!0),Vt(this,n[6]||"",!0),this.o=jt(n[7]||"")):(this.g=!!t,this.h=new Xt(null,this.g))}function xt(e){return new Lt(e)}function Pt(e,t,n){e.j=n?jt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mt(e,t,n){e.i=n?jt(t,!0):t}function Ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Vt(e,t,n){t instanceof Xt?(e.h=t,function(e,t){t&&!e.j&&(Qt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Yt(this,t),Zt(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=qt(t,Gt)),e.h=new Xt(t,e.g))}function Ft(e,t,n){e.h.set(t,n)}function Bt(e){return Ft(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function jt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function qt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Kt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Lt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(qt(t,Ht,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(qt(t,Ht,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(qt(n,"/"==n.charAt(0)?$t:zt,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",qt(n,Wt)),e.join("")};var Ht=/[#\/\?@]/g,zt=/[#\?:]/g,$t=/[#\?]/g,Gt=/[#\?@]/g,Wt=/#/g;function Xt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Qt(e){e.g||(e.g=new Rt,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Yt(e,t){Qt(e),t=en(e,t),Dt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Dt((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Nt(e)))}function Jt(e,t){return Qt(e),t=en(e,t),Dt(e.g.h,t)}function Zt(e,t,n){Yt(e,t),0<n.length&&(e.i=null,e.g.set(en(e,t),I(n)),e.h+=n.length)}function en(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(s=Xt.prototype).add=function(e,t){Qt(this),this.i=null,e=en(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},s.forEach=function(e,t){Qt(this),this.g.forEach((function(n,r){E(n,(function(n){e.call(t,n,r,this)}),this)}),this)},s.T=function(){Qt(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},s.R=function(e){Qt(this);var t=[];if("string"==typeof e)Jt(this,e)&&(t=T(t,this.g.get(en(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=T(t,e[n])}return t},s.set=function(e,t){return Qt(this),this.i=null,Jt(this,e=en(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};function tn(e){this.l=e||nn,c.PerformanceNavigationTiming?e=0<(e=c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function sn(e){return e.h?1:e.g?e.g.size:0}function on(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function an(e,t){e.g?e.g.add(t):e.h=t}function cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function un(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function hn(){}function ln(){this.g=new hn}function dn(e,t,n){const r=n||"";try{At(e,(function(e,n){let s=e;l(e)&&(s=ke(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function fn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(e){}}function pn(e){this.l=e.$b||null,this.j=e.ib||!1}function gn(e,t){Te.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tn.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},hn.prototype.stringify=function(e){return c.JSON.stringify(e,void 0)},hn.prototype.parse=function(e){return c.JSON.parse(e,void 0)},v(pn,st),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(e){return function(){return e}}({}),v(gn,Te);var mn=0;function yn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function vn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(s=gn.prototype).open=function(e,t){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||c).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=mn},s.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vn(this):wn(this),3==this.readyState&&yn(this)}},s.Ua=function(e){this.g&&(this.response=this.responseText=e,vn(this))},s.Ta=function(e){this.g&&(this.response=e,vn(this))},s.ha=function(){this.g&&vn(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var _n=c.JSON.parse;function bn(e){Te.call(this),this.headers=new Rt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=En,this.K=this.L=!1}v(bn,Te);var En="",Tn=/^https?$/i,In=["POST","PUT"];function Sn(e){return"content-type"==e.toLowerCase()}function kn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Cn(e),Rn(e)}function Cn(e){e.D||(e.D=!0,Ie(e,"complete"),Ie(e,"error"))}function An(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=Dn(e)||2!=e.ba()))if(e.v&&4==Dn(e))Ve(e.Fa,0,e);else if(Ie(e,"readystatechange"),4==Dn(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var s=String(e.H).match(Ot)[1]||null;if(!s&&c.self&&c.self.location){var i=c.self.location.protocol;s=i.substr(0,i.length-1)}r=!Tn.test(s?s.toLowerCase():"")}n=r}if(n)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var o=2<Dn(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Cn(e)}}finally{Rn(e)}}}function Rn(e,t){if(e.g){Nn(e);const n=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||Ie(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Nn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function Dn(e){return e.g?e.g.readyState:0}function On(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case En:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ln(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return O(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ft(e,t,n))}function xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Pn(e){this.za=0,this.l=[],this.h=new ze,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=xn("baseRetryDelayMs",5e3,e),this.$a=xn("retryDelaySeedMs",1e4,e),this.Ya=xn("forwardChannelMaxRetries",2,e),this.ra=xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new tn(e&&e.concurrentRequestLimit),this.Ca=new ln,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Mn(e){if(Vn(e),3==e.G){var t=e.V++,n=xt(e.F);Ft(n,"SID",e.J),Ft(n,"RID",t),Ft(n,"TYPE","terminate"),qn(e,n),(t=new dt(e,e.h,t,void 0)).K=2,t.v=Bt(xt(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(t.v.toString(),"")),!n&&c.Image&&((new Image).src=t.v,n=!0),n||(t.g=er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Et(t)}Jn(e)}function Un(e){e.g&&($n(e),e.g.cancel(),e.g=null)}function Vn(e){Un(e),e.u&&(c.clearTimeout(e.u),e.u=null),Wn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&c.clearTimeout(e.m),e.m=null)}function Fn(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Bn(e)}function Bn(e){rn(e.i)||e.m||(e.m=!0,Oe(e.Ha,e),e.C=0)}function jn(e,t){var n;n=t?t.m:e.V++;const r=xt(e.F);Ft(r,"SID",e.J),Ft(r,"RID",n),Ft(r,"AID",e.U),qn(e,r),e.o&&e.s&&Ln(r,e.o,e.s),n=new dt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Kn(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),an(e.i,n),yt(n,r,t)}function qn(e,t){e.j&&At({},(function(e,n){Ft(t,n,e)}))}function Kn(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{dn(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Hn(e){e.g||e.u||(e.Y=1,Oe(e.Ga,e),e.A=0)}function zn(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=tt(m(e.Ga,e),Qn(e,e.A)),e.A++,!0)}function $n(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function Gn(e){e.g=new dt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=xt(e.oa);Ft(t,"RID","rpc"),Ft(t,"SID",e.J),Ft(t,"CI",e.N?"0":"1"),Ft(t,"AID",e.U),qn(e,t),Ft(t,"TYPE","xmlhttp"),e.o&&e.s&&Ln(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Bt(xt(t)),n.s=null,n.U=!0,vt(n,e)}function Wn(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function Xn(e,t){var n=null;if(e.g==t){Wn(e),$n(e),e.g=null;var r=2}else{if(!on(e.i,t))return;n=t.D,cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Ie(r=Xe(),new et(r,n,t,s)),Bn(e)}else Hn(e);else if(3==(s=t.o)||0==s&&0<e.I||!(1==r&&function(e,t){return!(sn(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=tt(m(e.Ha,e,t),Qn(e,e.C)),e.C++,0)))}(e,t)||2==r&&zn(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Yn(e,5);break;case 4:Yn(e,10);break;case 3:Yn(e,6);break;default:Yn(e,2)}}function Qn(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Yn(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new Lt("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Pt(n,"https"),Bt(n)),function(e,t){const n=new ze;if(c.Image){const r=new Image;r.onload=y(fn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(fn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(fn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(fn,n,r,"TestLoadImage: timeout",!1,t),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ze(2);e.G=0,e.j&&e.j.va(t),Jn(e),Vn(e)}function Jn(e){e.G=0,e.I=-1,e.j&&(0==un(e.i).length&&0==e.l.length||(e.i.i.length=0,I(e.l),e.l.length=0),e.j.ua())}function Zn(e,t,n){let r=function(e){return e instanceof Lt?xt(e):new Lt(e,void 0)}(n);if(""!=r.i)t&&Mt(r,t+"."+r.i),Ut(r,r.m);else{const e=c.location;r=function(e,t,n,r){var s=new Lt(null,void 0);return e&&Pt(s,e),t&&Mt(s,t),n&&Ut(s,n),r&&(s.l=r),s}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&O(e.aa,(function(e,t){Ft(r,t,e)})),t=e.D,n=e.sa,t&&n&&Ft(r,t,n),Ft(r,"VER",e.ma),qn(e,r),r}function er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new bn(new pn({ib:!0})):new bn(e.qa)).L=e.H,t}function tr(){}function nr(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(e,t){Te.call(this),this.g=new Pn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new or(this)}function sr(e){ut.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ir(){ht.call(this),this.status=1}function or(e){this.g=e}(s=bn.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():at.g(),this.C=this.u?it(this.u):it(at),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void kn(this,e)}e=n||"";const s=new Rt(this.headers);r&&At(r,(function(e,t){s.set(t,e)})),r=function(e){e:{var t=Sn;const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(s.T()),n=c.FormData&&e instanceof c.FormData,!(0<=b(In,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nn(this),0<this.B&&((this.K=function(e){return B&&Y()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ve(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){kn(this,e)}},s.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),Rn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rn(this,!0)),bn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?An(this):this.cb())},s.cb=function(){An(this)},s.ba=function(){try{return 2<Dn(this)?this.g.status:-1}catch(e){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),_n(t)}},s.Da=function(){return this.m},s.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(s=Pn.prototype).ma=8,s.G=1,s.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},s.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new dt(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=L(i),P(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Kn(this,s,t),Ft(n=xt(this.F),"RID",e),Ft(n,"CVER",22),this.D&&Ft(n,"X-HTTP-Session-Id",this.D),qn(this,n),this.o&&i&&Ln(n,this.o,i),an(this.i,s),this.Ra&&Ft(n,"TYPE","init"),this.ja?(Ft(n,"$req",t),Ft(n,"SID","null"),s.$=!0,yt(s,n,null)):yt(s,n,t),this.G=2}}else 3==this.G&&(e?jn(this,e):0==this.l.length||rn(this.i)||jn(this))},s.Ga=function(){if(this.u=null,Gn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=tt(m(this.bb,this),e)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),Un(this),Gn(this))},s.ab=function(){null!=this.v&&(this.v=null,Un(this),zn(this),Ze(19))},s.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))},(s=tr.prototype).xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},nr.prototype.g=function(e,t){return new rr(e,t)},v(rr,Te),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Oe(m(e.hb,e,t))),Ze(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Zn(e,null,e.W),Bn(e)},rr.prototype.close=function(){Mn(this.g)},rr.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Fn(this.g,t)}else this.v?((t={}).__data__=ke(e),Fn(this.g,t)):Fn(this.g,e)},rr.prototype.M=function(){this.g.j=null,delete this.j,Mn(this.g),delete this.g,rr.Z.M.call(this)},v(sr,ut),v(ir,ht),v(or,tr),or.prototype.xa=function(){Ie(this.g,"a")},or.prototype.wa=function(e){Ie(this.g,new sr(e))},or.prototype.va=function(e){Ie(this.g,new ir(e))},or.prototype.ua=function(){Ie(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,nt.NO_ERROR=0,nt.TIMEOUT=8,nt.HTTP_ERROR=6,rt.COMPLETE="complete",ot.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",Te.prototype.listen=Te.prototype.N,bn.prototype.listenOnce=bn.prototype.O,bn.prototype.getLastError=bn.prototype.La,bn.prototype.getLastErrorCode=bn.prototype.Da,bn.prototype.getStatus=bn.prototype.ba,bn.prototype.getResponseJson=bn.prototype.Qa,bn.prototype.getResponseText=bn.prototype.ga,bn.prototype.send=bn.prototype.ea;var ar=o.createWebChannelTransport=function(){return new nr},cr=o.getStatEventTarget=function(){return Xe()},ur=o.ErrorCode=nt,hr=o.EventType=rt,lr=o.Event=Ge,dr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fr=o.FetchXmlHttpFactory=pn,pr=o.WebChannel=ot,gr=o.XhrIo=bn})),s.register("hPtJY",(function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var e=a(d);h=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),s.register("aYguL",(function(t,n){e(t.exports,"ref",(()=>s("jceyq").ref)),e(t.exports,"uploadBytes",(()=>s("jceyq").uploadBytes)),e(t.exports,"getDownloadURL",(()=>s("jceyq").getDownloadURL)),e(t.exports,"getStorage",(()=>s("jceyq").getStorage)),s("jceyq")})),s.register("jceyq",(function(t,n){e(t.exports,"ref",(()=>_e)),e(t.exports,"uploadBytes",(()=>ve)),e(t.exports,"getDownloadURL",(()=>we)),e(t.exports,"getStorage",(()=>be));var r=s("7xvHX"),i=s("gMVVg"),o=s("eryG9");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends i.FirebaseError{constructor(e,t){super(u(e),`Firebase Storage: ${t} (${u(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function u(e){return"storage/"+e}function h(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function l(){return new c("canceled","User canceled the upload/download.")}function d(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(e){return new c("invalid-argument",e)}function p(){return new c("app-deleted","The Firebase app was deleted.")}function g(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function m(e){throw new c("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=y.makeFromUrl(e,t)}catch(t){return new y(e,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),u=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<u.length;t++){const r=u[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new y(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new c("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class v{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return"string"==typeof e||e instanceof String}function _(e){return b()&&e instanceof Blob}function b(){return"undefined"!=typeof Blob}function E(e,t,n,r){if(r<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw f(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function I(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S,k;(k=S||(S={}))[k.NO_ERROR=0]="NO_ERROR",k[k.NETWORK_ERROR=1]="NETWORK_ERROR",k[k.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e,t,n,r,s,i,o,a,c,u,h){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==s){const e=h();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?p():l())}else{r(new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new A(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return 2===a}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function l(t){s=setTimeout((()=>{s=null,e(f,c())}),t)}function d(){i&&clearTimeout(i)}function f(e,...t){if(u)return void d();if(e)return d(),void h.call(null,e,...t);if(c()||o)return d(),void h.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),l(n)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==s?(e||(a=2),clearTimeout(s),l(0)):e||(a=1)))}return l(0),i=setTimeout((()=>{o=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new A(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===S.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===S.ABORT;return void e(!1,new A(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new A(i,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class A{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function N(...e){const t=R();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(b())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="raw",O="base64",L="base64url",x="data_url";class P{constructor(e,t){this.data=e,this.contentType=t||null}}function M(e,t){switch(e){case D:return new P(U(t));case O:case L:return new P(V(e,t));case x:return new P(function(e){const t=new F(e);return t.base64?V(O,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw g(x,"Malformed data URL.")}return U(t)}(t.rest)}(t),new F(t).contentType)}throw h()}function U(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function V(e,t){switch(e){case O:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw g(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case L:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw g(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw g(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class F{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(x,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,s;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(s=";base64",!!((r=n).length>=s.length)&&r.substring(r.length-s.length)===s),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class B{constructor(e,t){let n=0,r="";_(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(_(this.data_)){const i=this.data_,o=(r=e,s=t,(n=i).webkitSlice?n.webkitSlice(r,s):n.mozSlice?n.mozSlice(r,s):n.slice?n.slice(r,s):null);return null===o?null:new B(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new B(n,!0)}var n,r,s;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(b()){const t=e.map((e=>e instanceof B?e.data_:e));return new B(N.apply(null,t))}{const t=e.map((e=>w(e)?M(D,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new B(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){return t}class H{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||K}}let z=null;function $(){if(z)return z;const e=[];e.push(new H("bucket")),e.push(new H("generation")),e.push(new H("metageneration")),e.push(new H("name","fullPath",!0));const t=new H("name");t.xform=function(e,t){return function(e){return!w(e)||e.length<2?e:q(e)}(t)},e.push(t);const n=new H("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new H("timeCreated")),e.push(new H("updated")),e.push(new H("md5Hash",null,!0)),e.push(new H("cacheControl",null,!0)),e.push(new H("contentDisposition",null,!0)),e.push(new H("contentEncoding",null,!0)),e.push(new H("contentLanguage",null,!0)),e.push(new H("contentType",null,!0)),e.push(new H("metadata","customMetadata",!0)),z=e,z}function G(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new y(n,r);return t._makeStorageReference(s)}})}(r,e),r}function W(e,t,n){const r=j(t);if(null===r)return null;return G(e,r,n)}function X(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){if(!e)throw h()}function J(e,t){return function(n,r){const s=W(e,r,t);return Y(null!==s),s}}function Z(e,t){return function(n,r){const s=W(e,r,t);return Y(null!==s),function(e,t,n,r){const s=j(t);if(null===s)return null;if(!w(s.downloadTokens))return null;const i=s.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((t=>{const s=e.bucket,i=e.fullPath;return T("/b/"+o(s)+"/o/"+o(i),n,r)+I({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function ee(e){return function(t,n){let r;var s,i;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,r=new c("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new c("unauthorized","User does not have permission to access '"+s+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function te(e){const t=ee(e);return function(n,r){let s=t(n,r);var i;return 404===n.getStatus()&&(i=e.path,s=new c("object-not-found","Object '"+i+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function ne(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function re(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=ne(t,r,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+X(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h="\r\n--"+a+"--",l=B.getBlob(u,r,h);if(null===l)throw d();const f={name:c.fullPath},p=T(i,e.host,e._protocol),g=e.maxUploadRetryTime,m=new Q(p,"POST",J(e,n),g);return m.urlParams=f,m.headers=o,m.body=l.uploadData(),m.errorHandler=ee(t),m}class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=S.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=S.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw m("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw m("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw m("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw m("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw m("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ie extends se{initXhr(){this.xhr_.responseType="text"}}function oe(){return new ie}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(e,t){this._service=e,this._location=t instanceof y?t:y.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ae(e,t)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return q(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new y(this._location.bucket,e);return new ae(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function ce(e,t,n){e._throwIfRoot("uploadBytes");const r=re(e.storage,e._location,$(),new B(t,!0),n);return e.storage.makeRequestWithTokens(r,oe).then((t=>({metadata:t,ref:e})))}function ue(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=T(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,i=new Q(r,"GET",Z(e,n),s);return i.errorHandler=te(t),i}(e.storage,e._location,$());return e.storage.makeRequestWithTokens(t,oe).then((e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e}))}function he(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new y(e._location.bucket,n);return new ae(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){if(e instanceof pe){const n=e;if(null==n._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new ae(n,n._bucket);return null!=t?le(r,t):r}return void 0!==t?he(e,t):e}function de(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof pe)return new ae(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return le(e,t)}function fe(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:y.makeFromBucketSpec(n,e)}class pe{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?y.makeFromBucketSpec(r,this._host):fe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=fe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ae(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new v(p());{const s=function(e,t,n,r,s,i){const o=I(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new C(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ge="@firebase/storage",me="0.9.6",ye="storage";function ve(e,t,n){return ce(e=i.getModularInstance(e),t,n)}function we(e){return ue(e=i.getModularInstance(e))}function _e(e,t){return de(e=i.getModularInstance(e),t)}function be(e=r.getApp(),t){e=i.getModularInstance(e);return r._getProvider(e,ye).getImmediate({identifier:t})}function Ee(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new pe(n,s,i,t,r.SDK_VERSION)}r._registerComponent(new o.Component(ye,Ee,"PUBLIC").setMultipleInstances(!0)),r.registerVersion(ge,me,""),r.registerVersion(ge,me,"esm2017")}));
//# sourceMappingURL=createProduct.afea4af1.js.map

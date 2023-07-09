const s=[{id:"000",likes:5,tags:["js","nodejs"]},{id:"001",likes:2,tags:["html","css"]},{id:"002",likes:17,tags:["html","js","nodejs"]},{id:"003",likes:8,tags:["css","react"]},{id:"004",likes:0,tags:["js","nodejs","react"]}].reduce(((s,e)=>(s.push(...e.tags),s)),[]);const e=(s,e)=>(s.hasOwnProperty(e)||(s[e]=0),s[e]+=1,s);s.reduce(e,{});
//# sourceMappingURL=index.3b3c8b69.js.map

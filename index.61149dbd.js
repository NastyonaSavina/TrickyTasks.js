(e=>{let t={object:[],number:[],string:[],boolean:[],null:[],undefined:[],array:[],date:[]};for(let l=0;l<e.length;l++)null===e[l]?t.null.push(null):Array.isArray(e[l])?t.array.push(e[l]):e[l]instanceof Date&&!isNaN(e[l])?t.date.push(e[l]):t[typeof e[l]].push(e[l]),console.log(t)})([{value:1},{value:2},5,6,7,"test","test2","test3","test4",!1,null,void 0,[123],[456],new Date("2021-06-22"),new Date("2022-02-01")]);
//# sourceMappingURL=index.61149dbd.js.map

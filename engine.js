/* Organize pasted browser tab lists into duplicate-free collections */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.Project=factory();}(this,function(){
  'use strict';
  function analyze(text){

var entries=[],seen={};String(text).split(/\r?\n/).forEach(function(line){
  var fields=line.split('|'),name=(fields.shift()||'').trim(),url=fields.join('|').trim();
  if(!name||!/^https?:\/\//.test(url)||seen[url])return;seen[url]=1;entries.push({name:name,url:url});
});return {tabs:entries,count:entries.length};
  }
  return {analyze:analyze};
}));

(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var H=window.HOTELS;
$$('.tab').forEach(function(t){t.addEventListener('click',function(){
  $$('.tab').forEach(function(x){var on=x===t;x.classList.toggle('on',on);x.setAttribute('aria-selected',on)});
  $$('.view').forEach(function(v){v.hidden=v.id!==t.dataset.view});
})});
function filter(r){
  var n=0;
  $$('.card').forEach(function(c){var show=r==='all'||c.dataset.region===r;c.hidden=!show;if(show)n++});
  $$('.chip').forEach(function(c){var on=c.dataset.r===r;c.classList.toggle('on',on);c.setAttribute('aria-pressed',on)});
  $('#count').textContent='显示 '+n+' 项'+(r==='all'?'（含 1 项观察）':'');
}
$$('.chip').forEach(function(c){c.addEventListener('click',function(){filter(c.dataset.r)})});
filter('all');
var A=$('#selA'),B=$('#selB');
H.forEach(function(h,i){[A,B].forEach(function(s){var o=document.createElement('option');o.value=i;o.textContent=h.rank+' · '+h.name;s.appendChild(o)})});
A.value=0;B.value=5;
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function col(h,k){return '<div>'+(k==='name'?'<span class="hd">'+esc(h.rank+' '+h.name)+'</span>':k==='url'?'<a href="'+esc(h.url)+'" target="_blank" rel="noopener">官方网站 ↗</a>':esc(h[k]||'—'))+'</div>'}
function render(){
  var a=H[A.value],b=H[B.value],o='';
  [['name','酒店'],['region','区域'],['who','适合谁'],['pro','强项'],['con','取舍'],['note','房型提醒'],['url','官方']].forEach(function(r){
    o+='<div class="lab">'+r[1]+'</div>'+col(a,r[0])+col(b,r[0]);
  });
  $('#cmp').innerHTML=o;
}
A.addEventListener('change',render);B.addEventListener('change',render);render();
})();

const harf=document.querySelectorAll("#logo path");
console.log(harf);
for(let i=0;i<harf.length;i++)
{
console.log(`item ${i} is ${harf[i].getTotalLength()}`);
let a=harf[i].getTotalLength();
if (i==0)
harf[i].style.cssText=`stroke-dasharray: ${a}px; stroke-dashoffset: ${a}px; animation: line-anim 2s ease forwards 1s;`
else
harf[i].style.cssText=`stroke-dasharray: ${a}px; stroke-dashoffset: ${a}px; animation: line-anim 2s ease forwards ${i*2}s;`
}

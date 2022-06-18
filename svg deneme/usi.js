const aa=document.querySelectorAll("#logo path");
console.log(aa);
for(let i=0;i<aa.length;i++)
{
console.log(`item ${i} is ${aa[i].getTotalLength()}`);
}
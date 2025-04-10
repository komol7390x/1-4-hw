// 1-vazifa
// let son1=parseInt(prompt("Birinchi soni kiriting?"))
// let son2=parseInt(prompt("Ikkinchi soni kiriting?"))
// if(son1>son2){
//     console.log(`${son1} katta ${son2} dan`)
// }else if(son1<son2){
//     console.log(`${son2} katta ${son1} dan`)
// }else if(son1==son2){
//     console.log("Ikkisi teng.")
// }

// 2-vazifa
// let son1=parseInt(prompt("soni kiriting?"))
// if(son1>0){
//     console.log(`Musbat son: ${son1}`)
// }else if(son1<0){
//     console.log(`Manfiy son: ${son1}`)
// }else if(son1==0){
//     console.log(`Nol son: ${son1}`)
// }

// 3-vazifa
// let son1=parseInt(prompt("Birinchi soni kiriting?"))
// let son2=parseInt(prompt("Ikkinchi soni kiriting?"))
// let amal=prompt("Amal kiriting?(+,-,*,/)")
// if(amal=="+"){
//     console.log(`${son1}+${son2}=${son1+son2}`)
// }else if(amal=="-"){
//     console.log(`${son1}-${son2}=${son1-son2}`)
// }else if(amal=="*"){
//     console.log(`${son1}*${son2}=${son1*son2}`)
// }else if(amal=="/" && son2!=0){
//     console.log(`${son1}/${son2}=${son1/son2}`)
// }else{
//     console.log("Xato kiritish")
// }

// 4-vazifa
// let son1=parseInt(prompt("soni kiriting?"))
// let sum=1
// for(let i=1;i<=son1;i++){
//     sum*=i
// }console.log(`Natija: ${sum}`)

// 5-vazifa
// let n =parseInt(prompt("Soni kiriting?"));
// let a = 0;
// let b = 1;
// let change
// for (let i = 2; i <= n; i++) {
//     change = a + b;
//     a = b;
//     b = change;
//     }
// console.log(change)

// 6-vazifa
// let son1=parseInt(prompt("Soni kiriting?"))  
// if (son1==0){
//     console.log("0 son");
// }else if(son1%2==0){
//     console.log("Juft son");
// }else if(son1%2!=0){
//     console.log("Toq son");
// }else{
//     console.log("Xatolik bor")
// }

// 7-vazifa
// let son1=parseInt(prompt("Soni kiriting?")) 
// const son2=son1;
// let firstNumber=son1%10;
// son1/=10;
// son1=Math.floor(son1);

//  let secondNumber=son1%10;
// son1/=10;
// son1=Math.floor(son1);

// let thirdNumber=son1%10;
// son1/=10;
// son1=Math.floor(son1);

// let sum=(firstNumber**3)+(secondNumber**3)+(thirdNumber**3);
// if (sum==son2){
//     console.log("Armstrong soni");
// }else{
//     console.log("Armstrong soni emas");
// }

// 8-vazifa
// let matn=prompt("So'z kiriting?")
// let teskari=matn.split("").reverse().join("");
// if (matn==teskari){
//     console.log("Palindrom So'z")
// }else{
//     console.log("Palindrom So'z emas")
// }

// 9-vazifa
// let son=parseInt(prompt("Soni kiriting?"))  
// for(let i=1;i<=10;i++){
//     console.log(`${i}*${son}=${i*son}`)
// }

// 10-vazifa
// let arr = [23, 5, 67, 1, 34];
// max1=arr[0]
// let len1=arr.length
// for(let i=1;i<len1;i++){
//     if(max1<arr[i]){
//         max1=arr[i]
//     }else{
//         continue
//     }
// }console.log(max1)

// 11-vazifa
// let jumla="JavaScripts dasturlash tilida kod yozish juda qiziqarli";
// let soz=jumla.split(" ")
// let len1=soz.length
// let max1=soz[0].length
// let max_soz=soz[0]
// for (let i=1;i<len1;i++){
//     if(max1<soz[i].length){
//         max1=soz[i].length
//         max_soz=soz[i]
//     }
// }console.log(max_soz)

// 12-vazifa
// const ishSoatlari = parseInt(prompt("ish soatini kiriting?"));
// const soatlikHaq = parseInt(prompt("ish haqini kiriting?"));

// if(ishSoatlari>40){
//     console.log(`Oylik: ${ishSoatlari*soatlikHaq} so'm\nQo'shimcha:${ishSoatlari-40}soat uchun Bonus ${(ishSoatlari-40)*soatlikHaq} so'm\nUmumiy:${(ishSoatlari*soatlikHaq+(ishSoatlari-40)*soatlikHaq)} so'm`)
// }else{
//     console.log(`Oylik: ${ishSoatlari*soatlikHaq} so'm\nBonus: Yoq`)
// }

// 13-vazifa
// let arr=[4, 7, 10, 15, 20];
// const len1=arr.length
// sum=0
// for (let i=0;i<len1;i++){
//     if(arr[i]%2==0){
//         console.log("+"+arr[i])
//         sum+=arr[i]
//     }
// }console.log("="+sum)

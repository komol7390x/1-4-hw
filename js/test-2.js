// 15-vazifa
const rand=Math.floor(Math.random()*100)+1;
let isTrue=true
while(isTrue=true){
    const son=+prompt(`Son kiriting:  "${rand}"`);
    if(son>rand){
        alert("Kichikroq");
    }else if(son<rand){
        alert("Kattaroq");
    }else if(son==rand){
        alert(`Siz Topdingiz! ${rand}`);
        isTrue=false
    }
}

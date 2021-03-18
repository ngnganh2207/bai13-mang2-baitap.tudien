var timkiem=prompt('Nhập từ tìm kiếm: ');
var whEng=['hello',"good","morning","sun"];
var whVn=['xin chào',"tốt",'buổi sáng','mặt trời'];

for(i=0;i<whEng.length;i++){
    if(timkiem===whEng[i]){
        document.write(whVn[i]);
        break;
    } else{
        continue;
    }
}






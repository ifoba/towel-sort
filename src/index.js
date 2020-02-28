
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr=[];
    if (matrix==[] || typeof matrix=='undefined'){
        return arr;
    }
    else {
        matrix.forEach((element, j) => {
            if(j%2==0){
                for(let i=0; i<element.length; i++){
                    arr.push(element[i]);
                }
            }
            else {
                for(let k=element.length-1; k>=0; k--){
                    arr.push(element[k]);
                }
            }
        });
        return arr;
    }
}


/*let arr=[];
    matrix.forEach(element => {
        for(let i=0; i<element.length; i++){
            arr.push(element[i]);
        }
    });
  return arr;*/

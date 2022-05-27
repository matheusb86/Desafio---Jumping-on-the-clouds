let c = [0,0,0,0,1,0]

let countjump = 0

function jumping(){
    for ( i = 0; i < c.length; i++){
        if(c[i] === 0){
                countjump++
                i++      
                   
        }else {
            countjump++
            i++
        }    
    }
    return countjump
}
console.log(jumping(c))
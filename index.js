let c = [0,0,0,0,1,0]
let countjump = 0

function jumping(){
    
    for ( i = 0; i < c.length; i++){
            if(c[i+2] === 0 && i + 2 < c.length ){
            countjump++
            i = i + 2
            
        }if(c[i+1] === 0 && i + 1 < c.length){
            countjump++   
        }
    }
    return countjump
}
var result = jumping(c)

console.log(result)
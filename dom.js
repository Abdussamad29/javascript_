let price = [12,34,64,32,678]
let total = price.reduce((acc,cval) => (acc+cval),0 )
console.log(total);

let Total = price.map((val)=>(val*2))
console.log(Total);
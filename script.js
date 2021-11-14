 fetch('https://jsonplaceholder.typicode.com/users')
 .then(x=>{ return x.json() } )
.then(y=>{console.log(y)})
.catch(z=>{console.log("this is error")})



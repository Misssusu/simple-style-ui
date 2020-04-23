new Promise(resolve => {
  console.log(1);

  const promise2 = new Promise(resolve2 => {

    const promise3 = new Promise(resolve3 => {
      console.log(4);
      resolve3();
    })

    resolve2(promise3);
  }).then(() => {
    console.log(3);
  })

  resolve(promise2);
}).then(() => {
  console.log(2);
});

new Promise(function(res){
    console.log(5)
    res()
}).then(res=>{
    console.log(6)
})

// On clicking remove button the item should be removed from DOM as well as localstorage.

var store=JSON.parse(localStorage.getItem('coffee'))
  console.log(store)
  
  bucket(store)
  // img:image,
  //   name:title,
  //   rate:price

  function bucket(store){
    var sum=0
    store.forEach(function(el,index){
      var box=document.createElement('div')
    var img=document.createElement('img')
    img.src=el.img
    var title=document.createElement('h2')
    title.innerHTML=el.name
    var price=document.createElement('h2')
    price.innerHTML=el.rate
    sum=sum+el.rate
    var add=document.createElement('button')
    add.innerText='Remove';
    add.setAttribute('id','remove_coffee')
    add.addEventListener('click',function(){
      //console.log('some')
      remove(el,index)

    })

    

  box.append(img,title,price,add)
  document.querySelector('#bucket').append(box)

    })
    document.querySelector('#total_amount').innerHTML=sum
  }
function remove(el,index){
  store.splice(index,1)
  localStorage.setItem('coffee',JSON.stringify(store))

window.location.reload()



}

document.querySelector('#confirm_checkout').addEventListener('click',function(){
  window.location.href='checkout.html'
})


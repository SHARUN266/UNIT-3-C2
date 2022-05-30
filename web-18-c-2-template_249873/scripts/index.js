// Add the coffee to local storage with key "coffee"

let data=` https://masai-mock-api.herokuapp.com/coffee/menu`
display(data)
  async function display(data){
   let res= await fetch(data)
   let data1=await res.json()
   console.log(data1.menu.data)
   let coffee=data1.menu.data
   append(coffee)
  }

function append(coffee){
  var count=0
  
  console.log(coffee)
  coffee.forEach(function(elem){
    var box=document.createElement('div')
    var img=document.createElement('img')
    img.src=elem.image
    var title=document.createElement('h2')
    title.innerHTML=elem.title
    var price=document.createElement('h2')
    price.innerHTML=elem.price
    var add=document.createElement('button')
    add.innerText='Add to bucket';
    add.setAttribute('id','add_to_bucket')
    add.addEventListener('click',function(){
      count++;
      document.querySelector('#coffee_count').innerHTML=count


      collectData(elem.image,elem.title,elem.price)
      
    })
  


  box.append(img,title,price,add)
  document.querySelector('#menu').append(box)
 
  })
  
 
  

}
var arr= JSON.parse(localStorage.getItem('coffee')) || [];

function collectData(image,title,price){
  console.log( 'i"m collect data', image,title,price)
  var store={
    img:image,
    name:title,
    rate:price
  }
  arr.push(store)
  localStorage.setItem('coffee',JSON.stringify(arr))
}

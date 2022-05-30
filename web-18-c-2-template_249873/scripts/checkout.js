document.querySelector('#confirm').addEventListener('click',function(){
    event.preventDefault()
   var name= document.querySelector('#name').value
   var number=document.querySelector('#number').value
   var address=document.querySelector('#Address').value
   if(name==0||number==0||address==0)
   {
     alert('Enter Details')
   }
  else{

   

   setTimeout(function(){
     alert('Your Order Is Accepted')
     Three()
   },0)
  }
    
  })

  function Three(){
    setTimeout(function(){
      alert('Your order is being Prepared ')
      Eight()
    },3000)
  }
function Eight(){
  setTimeout(function(){
    alert('Your order is being packed ')
    Ten()

  },8000)
}
function Ten(){
  setTimeout(function(){
    alert('Your order is out for delivery ')
    Twelve()
  },10000)

  function Twelve(){
    setTimeout(function(){
      alert('Order delivered')

    },12000)
   
  }



}
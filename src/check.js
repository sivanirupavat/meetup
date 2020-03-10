const card = document.querySelector('#add');
const cafeList= document.querySelector('#cafe-list')

function rendercafe(doc){
    let li=document.createElement('li');
    let Name=document.createElement('span');
    let  TYPE=document.createElement('span');
    let  Address=document.createElement('span');
    let  average_cost=document.createElement('span');
    let  time_slot=document.createElement('span');
    li.setAttribute('data-id', 'doc-id');

Name.textContent=doc.data().Name;
TYPE.textContent=doc.data().TYPE;
Address.textContent=doc.data().Address;
average_cost.textContent=doc.data().average_cost;
time_slot.textContent=doc.data().time_slot;

 li.appendChild(Name);
 li.appendChild(TYPE);
 li.appendChild(Address);
 li.appendChild(average_cost);
 li.appendChild(time_slot);
  
 card.appendChild(li);

}

    

db.collection('cafes').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
       rendercafes(doc);
    });
   
})
// save data
card.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('save').add({
     

    })
})
const balance        =document.querySelector("#balance");
const inc_amt        =document.querySelector("#inc-amt");
const exp_amt        =document.querySelector("#exp-amt");
const trans          =document.querySelector("#trans");
const description    =document.querySelector("#desc");
const amount         =document.querySelector("#amount");
const form           =document.querySelector("#from");
const dummyData=[
    {id:1,description:"flower",amount:-20},
    {id:2,description:"Salary",amount:300},
    {id:3,description:"Book",amount:-10},
    {id:4,description:"Camera",amount:150},
    {id:5,description:"Salary",amount:300},
];
let transaction=dummyData;
// functions
function loadTransactionDetails(transaction){
  const sign=transaction.amount < 0 ? "-":"+";
  const item=document.createElement("li");
  item.classList.add(transaction.amount <0 ? "exp" : "inc")
  item.innerHTML=`
  ${transaction.description}
  <span>${sign} ${Math.abs(transaction.amount)}<span>
  <button class="btn-del" onclick="removeTrans( ${transaction.id} )">x</button>
  `;
  trans.appendChild(item);
}

function removeTrans(id){
    if(confirm("Are u sure want to delete transaction?"))
    {
        transaction = transaction.filter((transaction) => 
        {
            transaction.id != id
        }
        );
        
        refreshPage();
    }
    else{
        return;
    }
}
function updateAmount(){
    const amounts=transaction.map((transaction)=> transaction.amount);
    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    balance.innerHTML=` ₹ ${total}`;

}

function refreshPage(){
    trans.innerHTML="";
    transaction.forEach(loadTransactionDetails);
    updateAmount();
}
window.addEventListener("load", function () {
    refreshPage();
});
//click add button

let buttonele=document.getElementById('get-btn');
console.log(buttonele);

buttonele.addEventListener('click',table)

//create table

function table(){
    let gettable='<table border="1">'+
    '<tr>'+
        '<th>Accessory</th>'+
        '<th>Unit price</th>'+
        '<th>Quantity</th>'+
        '<th>Price</th>'+
        '<th>Action</th>'+
    '</tr>'+
    '<tr>'+
    '<td>door</td>'+
    '<td><input type="numbers" name="numbers" id="door"></td>'+
    '<td><input type="numbers" name="numbers" id="door1"></td>'+
    '<td><input type="numbers" name="numbers" id="total"></td>'+
    '<td><button id="button2">X</button></td>'+
    '</tr>'+
    '<tr>'+
    '<td>window</td>'+
    '<td><input type="numbers" name="numbers" id="door"></td>'+
    '<td><input type="numbers" name="numbers" id="door1"></td>'+
    '<td><input type="numbers" name="numbers" id="total"></td>'+
    '<td><button>X</button></td>'+
    '</tr>'+
    '<tr>'+
    '<td>fan</td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><button>X</button></td>'+
    '</tr>'+
    '<tr>'+
    '<td>gate</td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><button>X</button><button id="btn2">+</button></td>'+
    '</tr>'+
    '<tr>'+
    '<td colspan="3" >Total</td>'+
    '<td><input type="numbers" name="numbers" id="alltotalprice"></td>'+
    '</tr>'+
'</table>'


document.getElementById('pragaraph').innerHTML=gettable;

let button2=document.getElementById('btn2')

button2.addEventListener('click',nextrow)

//new row add

function nextrow(){
    let emptyrow='<table border="1">'+
    '<tr>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><input type="numbers" name="numbers"></td>'+
    '<td><button>X</button></td>'+
    '</tr>'+

    '</table>'
    let emptyele=document.getElementById('pragaraph');
    let emptycell=emptyele.insertRow(5);
    emptycell.innerHTML=emptyrow;
}

//add values

function pricevalue(){
    
let unitvalue=document.getElementById('door').value;

let qtyvalue=document.getElementById('door1').value;

let totalvalue=unitvalue*qtyvalue;

document.getElementById('total').value=totalvalue;

}
let priceval=document.getElementById('total');
priceval.addEventListener('mouseenter',pricevalue);


//clear value

function deletevalue(){

    let quantity=document.getElementById('door1');
    quantity.value=null;
    let unitelement=document.getElementById('door')
    unitelement.value=null;
    let  totalval=document.getElementById('total');
    totalval.value=null;
    
}
let deletebtn=document.getElementById('button2')
deletebtn.addEventListener('click',deletevalue)


//all total value

function alltotal(){
    let total1=document.getElementById('total').value;
    let crttotal=parseInt(total1)
    document.getElementById('alltotalprice').value=crttotal;
}
let endtotal=document.getElementById('alltotalprice');
endtotal.addEventListener('mouseenter',alltotal)
}
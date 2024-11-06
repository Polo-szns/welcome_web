/*let firstName="Mulinge";
let age= 21;
let student=true;
console.log("hello",firstName);
console.log("you are",age,"old");
console.log("Enrolment:",student);
document.getElementById("1").innerHTML="hello " + firstName;
document.getElementById("2").innerHTML="you are "+age+" old";
document.getElementById("3").innerHTML ="Enrolment:"+student*/

/*let username= window.prompt("what is your name");
console.log(username);*/

/*let username;
username=String(username);
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("username").value;
    console.log(username, typeof username);
}*/

/*const pi=3.142;
let radius;
let circumfrence;
radius=window.prompt("enter ur radius");
radius=Number(radius);
circumfrence=2*pi*radius;
console.log(circumfrence, typeof circumfrence);*/

/*let a;
let b;
let c;
a=window.prompt("enter a");
b=window.prompt("enter b");
c=Math.sqrt(a*a+b*b);
console.log("c is",c,typeof c);*/

/*let a;
let b;
let c;
document.getElementById("mybutton").onclick=function(){
    a=document.getElementById("alabel").Value;
    a=Number(a);
    b=document.getElementById("blabel").Value;
    b=Number(b);
   c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
   c=Number(c);
   document.getElementById("clabel").innerHTML="side C: "+ c;
   console.log(c);
}*/

/*let count=0;
document.getElementById("punguza").onclick=function(){
    count-=1;
    document.getElementById("count").innerHTML=count;
}
document.getElementById("wacha").onclick=function(){
    count=0;
    document.getElementById("count").innerHTML=count;
}
document.getElementById("ongeza").onclick=function(){
    count+=1;
    document.getElementById("count").innerHTML=count;
}*/

/*document.getElementById("mybtn").onclick=function(){
    const viza=document.getElementById("viza")
    const master=document.getElementById("master")
    const pal=document.getElementById("pal")
    const subscription=document.getElementById("subscription")
    if(subscription.checked){
        console.log("succefully subscribed😊")
    }
    else{
        console.log("unarisk😢")
    }
    
    if(viza.checked){
        console.log("visa in action")
    }
    else if(master.checked){
        console.log("mastercard in action")
    }
    else if(pal.checked){
        console.log("paypal in action")
    }
    else{
        console.log("huna mukuchu??")
    }
}*/
    
/*let grade;
grade=window.prompt("enter your marks")
if(grade>=70){
    console.log(" you have A")
}
else if(grade>=60){
    console.log("you have B")
}
else if(grade>=50){
    console.log("you have C")
}
else if(grade>=40){
    console.log("you have D")
}
else if(grade<40){
    console.log("you have E")
}
else{
    console.log("invalid")
}*/

/*let grade;
grade=window.prompt("enter your marks")
switch(true){
    case grade=>70:
        console.log("A")
        break;
    case grade>=60:
        console.log("B")
        break;
    case grade>=50:
        console.log("C")
        break;
    case grade>=40:
        console.log("D")
        break;
    case grade<40:
        console.log("E")
        break;
    default:
        console.log("invalid")
}*/


/*let userName;
do{userName=window.prompt("enter your name")
}
while(userName == "" || userName == null)
console.log("hello",userName)*/

/*let rows=window.prompt("enter number of rows")
let columns=window.prompt("enter number of columns")
for(let i=1;i<=rows;i++){
    for(let j=1;j<=columns;j++){
        document.getElementById("rectangle").innerHTML +=j
    }
    document.getElementById("rectangle").innerHTML += "<br>"
}*/

/*startparty()
function startparty(){
    let userName="Mulinge"
    let age=20
    happybirthday(userName,age)
}
function happybirthday(userName,age){
console.log("happpy birthday dear",userName,"youare",age,"years old")
console.log("happpy birthday dear you are this years old")
console.log("happpy birthday dear you are this years old")
console.log("happpy birthday dear you are this years old")
}*/

/*let width=window.prompt("enter width")
let height=window.prompt("enter height")
let area;
area=getArea(width,height)
 console.log("area is:",area)
function getArea(width,height){
    return width*height

}*/

/*let adult=checkAge(19)
console.log(adult)
function checkAge(age){
    return age>=18? true : false
}*/

/*let myNum=100;
myNum=myNum.toLocaleString("en-US",{style:"currency",currency:"ksh"})
console.log(myNum)*/

/*document.getElementById("mybtn").onclick=function(){
    let=temp;
    if(document.getElementById("clabel").checked){
        temp=document.getElementById("textbox").value
        temp=toCelscious(temp);
        temp=Number(temp)
        document.getElementById("temp").innerHTML=temp +" fer"
    }
    if(document.getElementById("flabel").checked){
        temp=document.getElementById("textbox").value
        temp=toFer(temp);
        temp=Number(temp)
        document.getElementById("temp").innerHTML=temp +" fer"
    }
    else{
        document.getElementById("temp").innerHTML="select a unit"
    }   
}
function toCelscious(temp){
    return (temp-32)*5/9
}
function toFer(temp){
    return (5/9*temp)+32
}*/

/*let fruits=["oranges","mangoes","avacado"]
let vegetables=["kales","cabbage","carrots"]
let meat=["fish","chicken","beef"]
let groceryList=[fruits,vegetables,meat]
groceryList=groceryList.sort()
for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}*/

/*let grade;
grade=Number(grade);
document.getElementById("myButton"). onclick=function(){
 grade=document.getElementById("grade")
 console.log(grade);
switch(true){
    case grade>=70:
        console.log("A")
        break;
    case grade>=60:
       console.log("B")
       break;
    case grade>=50:
        console.log("c")
        break;
     case grade>=40:
            console.log("D")
            break;
     case grade<=39:
                console.log("E")
            break;
    default:
        console.log("invalid")
}
}*/
 
/*function calculategrade(){
    let marks=document.getElementById("marks").value 
    let garde
    if(marks>=70 && marks<=100){
        console.log("A")
    }
    else if(marks>=60 && marks<70){
        console.log("B")
    }
    else if(marks>=50 && marks<60){
        console.log("C")
    }
    else if(marks>=40 && marks<50){
        console.log("D")
    }
    else if(marks>=0 && marks<40){
         console.log("E")
    }
    else{
        console.log("invalid")
    }
    document.getElementById("grade").innerHTML="garde is:" +grade 
}*/

/*function calculateresults(){
    let marks=document.getElementById("marks").value 
    let grade
    switch(true){
        case marks>=70 && marks<100:
            console.log("A")
            break;
        case marks>=60 && marks<70:
            console.log("B")
            break;
        case marks>=50 && marks<60:
            console.log("C")
            break;
        case marks>=40 && marks<50:
            console.log("D")
            break;
        case marks>0 && marks<40:
            console.log("E")
            break;
        default:
            console.log("invalid")
    }
    document.getElementById("answer").innerHTML="Grade is:" +grade
}*/

/*function temp(){
    const factor=0.56;
    let f=document.getElementById("value f").value 
    let c=factor*(f-32);
    document.getElementById("result").innerHTML="answer is:" +c 
}*/


/*let mynewstring="developer"
mynewstring=mynewstring.charAt(0).toLocaleUpperCase()+mynewstring.substring(1)
console.log(mynewstring)*/

/*let x
const numbers= [12, 3, 5, 67,90]
const fruits=new Array("mango","lemon","peach")
x=numbers[2]
x=`my favourate fruit is a ${fruits[1]}`
x=numbers.length
fruits[2]="orange"
//fruits.length=2
fruits[fruits.length]="avacado"
console.log(fruits)*/

/*let x
const arr=[1,2,3,4,5]
arr.push(6)
arr.unshift(0)
arr.reverse()
console.log(arr)*/

/*let x
const person={
    name:'Denis',
    age:30,
    uni:'kyu',
    address:{
        state:'Kenya',
        city:'Nairobi',
        street:'Muthaiga',
    }
}
x=person.name
//x=person.address.city + `${person.uni}`

person.name="Wayua"
console.log(person)*/

/*const obj1={
    a:"town",
    b:"valley",
    c:"mountains",
}
const obj2={
    d:"basketball",
    e:"baseball",
    f:"rollball"
}
const obj3={...obj1,...obj2}
console.log(obj3)*/

/*const library=[
    {
        title:"Gifted Hands",
        author:"Ben Casual",
        status:{
            own:true,
            reading:false,
            read:false
        }
    },

    {
        title:"Rich Dad Poor Dad",
        author:"Lord Beilish",
        status:{
            own:true,
            reading:false,
            read:false
    }
},
      {
        title:"My Life in Crime",
        author:"John kiriamiti",
        status:{
             own:true,
             reading:false,
             read:false
      }
    }
]
//step 2
library[0].status.read=true
library[1].status.read=true
library[2].status.read=true

//step 3
const {title:firstbook}=library[0];

//step 4
const str=JSON.stringify(library)
console.log(str)*/
    
/*function add(num1,num2){
      console.log(num1+num2)
}
add(10,3)

function sub(num1,num2){
    return num1-num2
}
//const jibu=sub(10,5)
console.log(sub(10,4))*/

/*function userreg(user="Bot"){
    return user + " is registered"
}
console.log(userreg("john"))

function regisration(user){
    return `The user ${user.name} with an id of ${user.id} is logged in `
}
const user={
    id:1,
    name:"Mulinge",
}
//console.log(regisration(user))*/

/*function add(){
    const y=100
    function carina(){
        const x=200
        console.log(x+y)
    }
    carina()
}
add()*/

/*const full=function(a,b){
    return a-b
}
console.log(full(10,5))

//const fill=(a,b) =>{
    return a+b
}
console.log(fill(2,3))*/

/*const fill=(a,b) => a-b
console.log(fill(2,3))

const double= a => a*2
console.log(double(4))*/

/*const getcelsius=(f)=> celsius=(f-32)*5/9
console.log(`the temp is ${getcelsius(50)}\xB0c`)*/

/*function minmax(arr){
    const min=Math.min(...arr)
    const max=Math.max(...arr)
    console.log(`min:${min}`,`max:${max}`)
}
minmax([2,3,4,5,34])*/

/*function calculator(num1,num2,operator){
    switch(operator){
        case "+":
            result=(num1+num2)
            break;
         case "-":
             result=(num1-num2)
             break;
         case "*":
            result=(num1*num2)
             break;
         case "/":
            result=(num1/num2)
             break;
        default:
            result=("math error")


    }
    return result
    ;
}
console.log(calculator(4,5,"_"))*/

/*const companies=[
      {
        name:'company one', category:'Finance', start:1981, end:2004,
      },
      {
        name:'company two', category:'Retail', start:1981, end:2004,
      },
      {
        name:'company three', category:'Auto', start:1992, end:2008,
      },
      {
        name:'company four', category:'Retail', start:1999, end:2007,
      },
      {
        name:'company five', category:'Technology', start:1989, end:2010,
      },
      {
        name:'company six', category:'Auto', start:2009, end:2014,
      },
      {
        name:'company seven', category:'Finance', start:1986, end:1996,
      },
      {
        name:'company eight', category:'Technology', start:2011, end:2016,
      },
      {
        name:'company nine', category:'Retail', start:1981, end:1989,
      },
     
]*/

//const digitalcom=companies.filter((company) => company.end-company.start>=10)
//const digitalcom=companies.filter((company)=>company.category==='Retail')
//console.log(...digitalcom)

/*const companyNames=companies.map((company)=>{
    return{
        name:company.name,
        runtime:`${company.end-company.start} years`,
    };
});
   
console.log(companyNames)*/

/*const cart=[
    {name:'product 1', id:1, price:130},
    {name:'product 2', id:2, price:150},
    {name:'product 3', id:3, price:175},
]
const sum=cart.reduce(function(acc,product){
   return acc+product.price
},0)
console.log(sum)*/

/*const people=[
    {
     firtName:'John',
     lastName:'Doe',
     email:'john@gmail.com',
     phone:111-111-111,
     age:30,
    },
    {
        firtName:'Jane',
        lastName:'Poe',
        email:'jane@gmail.com',
        phone:222-222-222,
        age:25,
       },
       {
        firtName:'Bob',
        lastName:'Foe',
        email:'bob@gmail.com',
        phone:333-333-333,
        age:45,
       },
    {
    firtName:'Sara',
    lastName:'Soe',
    email:'sara@gmail.com',
    phone:444-444-444,
    age:19,
   },
 {
    firtName:'Jose',
    lastName:'Koe',
    email:'jose@gmail.com',
    phone:555-555-555,
    age:23,
 },
  
]
const youngpeople=people
.filter((people)=>people.age<=25)
.map((people)=>({
       name: people.firtName +'' +people.lastName,
       email:people.email
}))
console.log(youngpeople)*/

/*const numbers=[2,-30,50,20,-12,-9,7,8,-5];

const positiveSum=numbers
.filter((number)=>number>0)
.reduce(function(acc,cur){
 return acc+ cur
})
console.log(positiveSum)*/

/*let output;
const parent=document.querySelector('#parent')
output=parent.children
output=parent.style.border='1px solid #ccc'
output=parent.style.padding='5px'
output=parent.children[1].style.color='red'
output=parent.children[2].innerText='child three'
output=parent.children[0].innerText='child one'
output=parent.children[1].innerText='child two'

const item=document.querySelector("#child:nth-child(2)")
output=item
output=item.nextElementSibling
item.nextElementSibling.style.color='green'
item.previousElementSibling.style.color='orange'

const container=document.querySelector("h2")
output=head.style.color='grey'
//console.log(output)

const div=document.createElement('div')
div.id='smile'
div.className='hpp'
div.setAttribute("title","movie")
//div.innerText="hello world"

const text=document.createTextNode('hello world')
div.appendChild(text)
document.body.appendChild(div)
div.style.color='blue'
document.querySelector('#parent').appendChild(div)

//console.log(div)

/*function createlistitem(item){
    const div=document.createElement('li')
div.innerHTML=`${item}
<button class='remove-item btn-link text-red'>
    <i class="fa-solid fa-xmark"></i>
</button>`
document.querySelector("#parent").appendChild(div)
}
createlistitem('eggs')*/

/*function newitem(item){
    const li=document.createElement('p')
    li.appendChild(document.createTextNode(item))
    const button=document.createElement('button')
    button.className='btn'
    li.appendChild(button)

    document.querySelector('.btn').appendChild(li)
}
newitem('here')
newitem('not functioning')*/

/*function insertelement(){
    const h2=document.querySelector('#head')
    const h1=document.createElement('h1')
    h1.textContent='WELCOME TO JAVASCRIPTING'
    h1.id='toa'
    h2.insertAdjacentElement('beforebegin',h1)
}

function insertext(){
    const child=document.querySelector("#child:nth-child(3)")
    const text=document.createElement('p')

    child.insertAdjacentText('afterend', "You've reached the end")
}

function replacing(){
    const child=document.querySelector('#child:nth-child(3)')
    const wueh=document.createElement('li')
    wueh.style.textDecoration='none'
    wueh.textContent='child three'
    child.replaceWith(wueh)

}
insertelement()
insertext()
//replacing()

function removeitem(itemnindex){
    const li=document.querySelectorAll('#child')
    li[itemnindex-1].remove()
}

const ondoa=(itemnindex => document.querySelectorAll('#child')
[itemnindex-1].remove())

//console.log(ondoa(3))
//removeitem(1)*/

/*const texti=document.querySelector('p')
const next=document.querySelector('.item-list')
const name=next.querySelectorAll('li')

function run(){
    //console.log(next.classList)
    //next.classList.forEach((c)=>console.log(c))
    texti.classList.add('dark')
    //texti.classList.remove('card')
    texti.classList.toggle('card')
     
    name.forEach((item,index)=> {
        next.style.color='orange'
        if(index===3){
            item.style.color='blue'
        }
        
    });

}

document.querySelector('button').onclick=run*/

//const subbtn=document.querySelector('#mybtn')
/*subbtn.onclick=function(){
    alert('submision successful')
}*/

/*mybtn.addEventListener('click', function(){
    alert('submision successful')
    console.log('submision successful')
})*/


//const run=document.querySelector('button')
//const onclick=()=>console.log('click event')
/*const ondblclick=()=>{
    if(document.body.style.backgroundColor!=='purple'){
        document.body.style.backgroundColor='purple'
        document.body.style.color='white'
        }
        else{
            document.body.style.backgroundColor='white'
            document.body.style.color='black'
        }
    }
run.addEventListener('click',onclick)
run.addEventListener('dblclick',ondblclick)*/

/*const onclick=(e)=>(console.log(e.target))
document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault()
    alert('link copied')
})
run.addEventListener('click',onclick)*/






         //MY FIRST PROOOOOOJECT!!('')
const itemInput=document.getElementById('deno')
function onFocus(){
    itemInput.style.outlineStyle='solid'
    itemInput.style.outlineWidth='1px'
    itemInput.style.outlineColor='green'
    }
    function onBlur(){
        //console.log('on blur')
        itemInput.style.outlineStyle='none'
    }
itemInput.addEventListener('focus',onFocus)
itemInput.addEventListener('blur',onBlur)
const item=document.getElementById('lName')
function onfocus(){
    item.style.outlineStyle='solid'
    item.style.outlineWidth='1px'
    item.style.outlineColor='green'
    }
    function onblur(){
        //console.log('on blur')
        item.style.outlineStyle='none'
    }
item.addEventListener('focus',onfocus)
item.addEventListener('blur',onblur)

const Input=document.getElementById('tel')
function oFocus(){
    Input.style.outlineStyle='solid'
    Input.style.outlineWidth='1px'
    Input.style.outlineColor='green'
    }
    function oBlur(){
        //console.log('on blur')
        Input.style.outlineStyle='none'
    }
Input.addEventListener('focus',oFocus)
Input.addEventListener('blur',oBlur)

const rest=document.querySelector('#cancel')
function pin(){
    //alert('reset successful')
    const clear=document.querySelector('body')
    clear.innerText='canceled succefully'
    document.body.style.backgroundColor='green'
    if(document.body.style.backgroundColor==='green'){
        document.body.style.color='white'
    }
}
rest.addEventListener('click',pin)

const sub=document.querySelector('#submit')
function submission(e){
    const fname=document.querySelector('#deno').value
    const lname=document.querySelector('#lname').value
    const tel=document.querySelector('#tel').value
    const degree=document.querySelector('#degree').value
    const courses=document.querySelectorAll('radio').value
     if(fname===''||lname===''||tel===''||degree==''||courses===''){
         alert("please fill all the fields")
       return
    }
    console.log(fname,lname,tel,degree,courses)

     e.preventDefault()
    const subm=document.querySelector('body')
    subm.innerHTML='submition successful check email for confirmation🎉🍾'
    document.body.style.backgroundColor='orange'
    if(document.body.style.backgroundColor==='orange'){
        document.body.style.color='white'
    }
}
sub.addEventListener('click',submission)


//PROJECT NUMBER TWO
/*const list=[{
    name:'write notes',
    dueDate:'7-5-2024'},
    {name:'wash dishes',
    dueDate:'7-6-2024'},
    {name:'take a walk',
    dueDate:'7-7-2024'}]
appear()
function appear(){
    let all=''
    list.forEach(function(allowObject,index){
        const name=allowObject.name
        const dueDate=allowObject.dueDate
        const html=`<p>${name} ${dueDate}
        <button onclick="
        list.splice(${index},1)
        apper()"
        >delete</button>
        </p> `
       
        all+=html
    })
//console.log(all)
document.querySelector('#pombe')
 .innerHTML= all
}

const pick=document.querySelector('#add')
const array=[]
function potea(){
  const name=document.querySelector('#file')
  const inputelement=name.value
  const date=document.querySelector('#date')
  const data=date.value
  array.push({
    name:inputelement,
    dueDate:data,
  })
  console.log(array)
  name.value=''
}
pick.addEventListener('click',potea)
pick.addEventListener('click',appear)*/













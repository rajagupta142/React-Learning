const header1=document.createElement('h1');
header1.innerHTML="HELLO CODER ARMY";
header1.style.backgroundColor="blue";
header1.style.fontSize="20px";
header1.style.color="white";

const header2=document.createElement('h2');
header2.innerHTML="welcome to react";
header2.style.backgroundColor="purple";
header2.style.fontSize="18px";
header2.style.color="#ccc";

const root=document.getElementById('root');
root.append(header1);
root.append(header2);

// const React={
//     createElement:function(tag,style,children){
//         const element=document.createElement(tag);
//         element.innerHTML=children;
//         return element;
//     }
// }
// const header3=React.createElement('h1',{},"this is how we create element in react");
// root.append(header3);

const React={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);

        for(let key in styles){
            element.style[key]=styles[key];
        }

        for(let val of children){
            if(typeof children==='object'){
                element.append(val);
            }
            else{
                element.innerHTML=children;
            }
        }
        return element;
    }
}
const header3=React.createElement('h1',{backgroundColor:'brown',fontsize:'20px',color:'fff'},"this is how we create element in react");
root.append(header3);

const li1=React.createElement('li',{},'Html'); 
const li2=React.createElement('li',{},'CSS'); 
const li3=React.createElement('li',{},'JS');

const Ul=React.createElement('ul',{backgroundColor:'indigo',fontsize:'20px',color:'violet'},[li1,li2,li3]);
 
// root.append(Ul);

const ReactDom={
    render:function(element,root){
        root.append(element);
    }
}


ReactDom.render(Ul,root);


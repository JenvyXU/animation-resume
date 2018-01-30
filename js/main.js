var result=`/*
 *面试官你好，我是XXX
 *我将以动画的形式介绍我自己
 *只用文字介绍太单调了
 *我就用代码来介绍吧
 *首先准备一些样式
 */
*{transition:all 0.5s;}
body{
  background:rgb(222,222,222); 
  font-size:16px;
}
#code{
  border:1px solid blue;
  padding:16px;
}

/*接下来我们需要代码高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
/*加一点3D效果*/
#code{
    transform:rotateX(360deg);
}
`
var html = Prism.highlight(result, Prism.languages.css);
var n=0
var id=setInterval(()=>{
  n+=1; 
  code.innerHTML=result.substring(0,n);
  code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css);                                    
  styleTag.innerHTML=result.substring(0,n);
  if(n>=result.length)
   { 
    window.clearInterval(id)   
    fn2()
    fn3()
}
 
},10);

function fn2(){
    var paper=document.createElement('div')
    paper.id='paper'
    document.body.appendChild(paper)
}

function fn3(){
    var result=`#paper
    {
        width:100px;
        height:100px;
        display:block;
        background:red;
    }`
    var n=0
    var id=setInterval(()=>{
        n+=1
        code.innerHTML=code.innerHTML+result.substring(n-1,n)
        code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css);  
        styleTag.innerHTML=code.innerHTML
        if(n>=result.length){
            window.clearInterval(id)
        }
    },100)
}

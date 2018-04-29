var result1=`
/**
*你好，~我是许振威~
*
*
*只用文字介绍我太单调了
~*所以
~*换成动画的方式来介绍我自己...
*/

*{
  transition:all 1s;
}

body{
  background:rgb(63, 82, 99);
  font-size:14px;
  color:white;
  height:100vh;
}               
/*文字太靠边了，挪一下位置*/    
#code{
  padding:16px; 
}

/*代码只有一种颜色，高亮一下*/
.token.selector{
    color: yellow;
}
.token.property{
    color: green;
}
.token.function{
    color: red;
}
/*把界面移动到左边*/
body{
    perspective:1000px;
}
#code{
    width:49%;
    height:97%;
    background:rgb(48, 48, 48);
    outline:1px solid white;
    margin-left:50%;
    transform-origin: right;
    transform: translateY(1%) rotateY(-10deg);  
}

`
var result2=`
/*接下来需要一个合适的位置来介绍我自己*/
#paper{
  position:fixed;
  top:1%;
  left:1%;
  width:49%;
  height:97%;
  overflow:auto;
  background:rgb(48, 48, 48);
  outline:1px solid white;  
  transform-origin: left;
  transform: rotateY(10deg);
}
#paper>.content{
padding:10px;
width:100%;
color:white;
}
`
var md=`
# 自我介绍

我叫许振威
1992年1月30日
毕业院校：大连海事大学(2011~2015)

自学前端半年，希望应聘前端开发岗位

# 技能介绍

* JavaScript 熟练度：70%
* CSS3
* jQuery 
* Vue

# 项目介绍

1. 键盘导航
   技术栈：原生JS
2. canvas画板
   技术栈：canvas 原生js
3. 网易云音乐
   技术栈：MVC框架
4. vue简历
   技术栈：Vue

# 联系方式
QQ:1272117264@qq.com
手机:18316304477

`
var result3=`
/*接下把md格式的自我介绍转成html形式
*3~~
*2~~
*1~~
*...
*请注意
*/

#paper{
    transform:rotateY(370deg);
}

`

var result4=`
/*但是页面看起来怪怪的，调整一下样式*/
#paper{
    padding:40px;
}
#paper>a{     color:white;}
#paper>.content>ul,ol{
    list-style:none;
   }
   
#paper,#code{
   box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);}
`


writeCode('',result1,()=>{
    writePaper(()=>{
        writeCode(result1,result2,()=>{
            writeMarkdown(md,()=>{
                let domPaper=document.querySelector('#paper>.content')
                writeCode(result1+result2,result3,()=>{
                    domPaper.innerHTML=marked(domPaper.innerHTML)
                    writeCode(result1+result2+result3,result4,()=>{
                    })
                })

            })
        })
    })
})


/*把code写进#code和style标签里面*/
function writeCode(prefix,code,fn){
    let domCode=document.querySelector('#code')
    domCode.innerHTML=prefix||''
    let n=0
    let id=setInterval(()=>{
        n+=1
        if(code[n-1]==='~'){
            let reg = new RegExp('~','g')
            code = code.replace(reg,'')
            delay(3)
                domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
                styleTag.innerHTML=prefix+code.substring(0,n)
                domCode.scrollTop=domCode.scrollHeight
                if(n>=code.length){
                    window.clearInterval(id)
                    fn.call()
                }

        }
        else{
            domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
            styleTag.innerHTML=prefix+code.substring(0,n)
            domCode.scrollTop=domCode.scrollHeight
            if(n>=code.length){
                window.clearInterval(id)
                fn.call()
            }
        }

    },60)
}


/*             */
function writePaper(fn){
    var paper=document.createElement('div')
    paper.id='paper'
    var content=document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function writeMarkdown(markdown,fn){
  let domPaper=document.querySelector('#paper>.content')
  let n=0
  let id=setInterval(()=>{
    n+=1
    domPaper.innerHTML=markdown.substring(0,n)
    domPaper.scrollTop=domPaper.scrollHeight
    if(n>=markdown.length){
      window.clearInterval(id)
      fn.call()
    }
  },60)
}

function delay(time){
    let i=time*300000000
    while(i>0){i--}
}
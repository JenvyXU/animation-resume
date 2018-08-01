var result1=`
/**
*
*面试官你好，~
*
*我是~许振威~
*
*只用静态的文字介绍我太单调了~
*
*所以~
*
*决定换成动画的形式来介绍我自己...~
*
*/

/**
*可是文字太靠边了，先设置好文字的位置吧~
*/
#code{
    padding:10px;   
    }
/**
*同样把文字和背景颜色也修改一下吧~
*/  
body{
  background:rgb(63, 82, 99);
} 
.token.selector,
.token.property,
.token.function,
.token.comment,
.token.punctuation,
#code{
    color: white;
}    
#code{
    max-height:60%;
    width:49%; 
    background:rgb(48, 48, 48);
    overflow:auto; 
}

/**
*嗯，代码的颜色只有一种，看起来有点单调，那就对代码高亮一下吧~
*/~
.token.selector{ color: #690; }
.token.property{ color: #905; }

/**
*然后~
*把界面移动到左边~
*/
body{
    perspective:1000px;
}
#code{
    margin-left:50%;
    background:rgb(48, 48, 48);
    outline:1px solid white;
    transform-origin: right;
    transform: translateY(1%) rotateY(-10deg); 
    max-height:97%;
}


`
var result2=`
/**
*我想在屏幕的左边介绍我自己~
*那么在左边准备一个窗口吧~
*/
#paper{
  position:fixed;
  top:1%;
  left:1%;
  transform-origin: left;
  transform: rotateY(10deg); 
  width:49%;
  min-height:50%;  
  background:rgb(48, 48, 48);
  outline:1px solid white;    
  overflow:auto;  
}

#paper>.content{
    padding:10px;
    width:100%;
    color:white;
}

/**
*好哒，一切都已经准备就绪~
*接下来我会在屏幕的左边来介绍我自己~
*/
`

var profile=`
# 基本信息

姓名：许振威
性别：男
出生年月：1992年1月30日
毕业院校：大连海事大学(2011~2015)
专业：通信工程
学历：本科
### 联系方式
Wechat:xuzhenwei111 | QQ:1272117264 | Phone:18316304477 | Email:1272117264@qq.com
 
# 自我介绍
大学毕业后一直从事计算机硬件相关的工作，因为想转行互联网，因此自学前端半年多，希望应聘前端开发岗位，
经过半年多的摸索学习，能够熟练使用Html、CSS3和Javascript制作前端网页，100%还原设计图，熟悉jQuery
和ES6语法，理解MVC设计模式，熟练使用Vue框架。

# 技能介绍
* JavaScript 熟练度：70%
* CSS3
* jQuery 
* Vue

# 项目介绍

1. 键盘导航
   技术栈：原生JS
2. canvas画板
   技术栈：Canvas 原生js
4. CSS3画皮卡丘
3. 网易云音乐
   技术栈：MVC框架
4. Vue在线简历编辑器
   技术栈：Vue



`
var result3=`
/**
*接下把md格式的自我介绍转成html形式
*3~
*2~
*1~
*...~
*请注意
*/

#paper{
    transform:rotateY(370deg);
}

`

var result4=`
/**
*可是页面的样式不怎么好看，作一下调整吧~
*/
#paper{
    padding:40px;
}
#paper>a{ color:white; }
#paper>.content>ul,ol{
    list-style:none;
    }
#paper{    box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);}
#code{    box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);}
`
let isPlay=true
resume.onclick=function(){
    window.open('https://jenvyxu.github.io/resume/index.html')
}
restart.onclick=function(){
    location.reload()
}
writeCode('',result1,()=>{
    writePaper(()=>{
        writeCode(result1,result2,()=>{
            writeMarkdown(profile,()=>{
                let domPaper=document.querySelector('#paper>.content')
                writeCode(result1+result2,result3,()=>{
                    console.log(1);
                    domPaper.innerHTML=marked(domPaper.innerHTML)
                    console.log(2);
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
    let domContent=document.querySelectorAll('#paper>.content')
    domCode.innerHTML=prefix||''
    let n=0
    let id=setInterval(()=>{
        if(isPlay){
            n+=1
            if(code[n]==='~'){
                let reg = new RegExp('~')
                code = code.replace(reg,'')
                console.log(code);
                isPlay=false
                console.log('~')
                setTimeout(()=>{isPlay=true},500)
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
        }
    },60)
    ending.onclick=function(){

            window.clearInterval(id)
            writePaper(()=>{})
            let domPaper=document.querySelector('#paper>.content')
            domPaper.innerHTML=marked(profile)
            styleTag.innerHTML=result1+result2+result3+result4
            domCode.innerHTML=Prism.highlight(result1+result2+result3+result4,Prism.languages.css)

    }
}

/*             */
function writePaper(fn){
    //var paper=document.createElement('div')
    //paper.id='paper'
    //var content=document.createElement('pre')
    //content.className='content'
    //paper.appendChild(content)
    //document.body.appendChild(paper)
    fn.call()
}

function writeMarkdown(markdown,fn){
  let domPaper=document.querySelector('#paper>.content')
  let n=0
  let id=setInterval(()=>{
    n+=1
    domPaper.innerHTML=profile.substring(0,n)
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
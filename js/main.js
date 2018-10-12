let result1=`/*
* Hi, 我是Jenvyxu
*
* 很高兴你打开了这个网页
*   
* 接下来我会通过动画的方式式介绍我自己
*
* 最后，你会看见我最终的简历
*
*/

/* OK, 那我们开始吧... */

body{
    background: rgb(0, 43, 54);
    color: white;
}
#code{
    padding: 20px;
    background: rgb(48, 48, 48);
    outline: 1px solid white;
    overflow: auto;
}
#buttons{
    display: block;
}

/*
*OK，先把代码高亮一下
*/

.token.selector{ color: #690; }
.token.property{ color: #905; }

`
let result2=`
/**
*我想在网页的右边介绍我自己~
*
*那么在右边准备一张白纸吧~
*/
#paper{
  width: 50%;
  padding: 20px 20px 20px 10px;  
  
}

#paper>.content{
   height: 100%;
   overflow: auto;
   padding: 40px;
   background: #fff;
   outline: black;
}

/**
*OK，一切都已经准备就绪~
*
*接下来我会在屏幕的左边来介绍我自己~
*/
`

let profile=`

# 许振威
应聘职位：前端工程师
性别：男
年龄：26
邮箱：1272117264@qq.com

# 专业技能
## HTML5 & CSS3
熟悉HTML5常用标签，编写具有语义化的文档结构，比如nav、header、footer、aside、main等，熟悉CSS常见布局方法和技巧， 能独立设计精美页面，百分百还原设计稿。
## Javascript
熟悉JS语法，在不借助框架的条件下，能够使用JavaScript的提供的标准库和浏览器提供的api实现项目需求。
## 移动端开发
能够使用REM，vw/vh、媒体查询等技术开发移动端页面。
## jQuery & ES6
熟悉jQuery的常用api和ES6语法，能够在项目中熟练使用jQuery和ES6。
## Vue
有Vue项目开发经验，熟悉Vue常用功能，如组件、Vue-router、双向绑定等，理解钩子的生命周期和Vue的响应式原理。
## webpack
有webpack项目打包经验，了解其管理资源的方法，熟悉常用loader，能够根据需求配置webpack。
  
# 项目经历
## 1. 键盘导航
### 关键词：原生JS
描述：项目不使用任何库和框架，通过原生JS生成26个按键，每个按键绑定一个网址，绑定的网址可以修改，按下键盘上的按键可以跳转到绑定的网站上。
## 2. 画板
### 关键词：Canvas / 原生JS
描述：项目通过调用Canvas api实现画笔、橡皮檫、保存画布等功能，画笔的大小和颜色都可以改变，通过响应式技术在移动端实现画板功能。
## 3. 皮卡丘
### 关键词：CSS3
描述：项目使用CSS3绘制皮卡丘的脸，然后通过JS控制CSS把皮卡丘的脸一点一点的画出来。
## 4. 网易云音乐
### 关键词：MVC / 移动端开发 / 响应式
描述：项目使用了MVC设计模式，借助七牛和leancloud提供的api，在后台页面实现歌曲、歌词和封面的上传，移动端页面通过响应式技术和MVC设计模式，百分百还原网易云音乐的移动端界面，并且实现了后台上传歌曲的播放、封面和歌词的展示。
## 5. Vue在线简历编辑器
### 关键词：Vue / MVC / Webpack
描述：项目使用了Vue框架和MVC设计模式，通过Vue-router和leancloud提供的api实现登录注册功能，通过Vue组件的方式实现简历的编辑功能，通过调用leancloud提供的api实现简历资料的保存和读取，通过webpack对项目进行打包。
   
# 教育经历
大连海事大学    通信工程/本科    2011~2015

# 链接
博客：https://jenvyxu.github.io/index.html
Github：https://github.com/JenvyXU
`
let result3=`
/**
*接下把md格式的自我介绍转成html格式
*3~
*2~
*1~
*...~
*请注意
*/

`

let result4=`
/**
*但是简历的排版不好看，稍作一下调整~
*/

#paper>a{ 
    color: white; 
}
#paper>.content>ul,ol{
    list-style: none;
}
h2{
    font-size: 18px;
    margin-bottom: -14px;
    margin-top: -5px;
}
h3{
    margin-bottom: -15px;
    font-size: 14px;
}
`
let result5=`
/*
*OK, 最终的简历已经完成
*
*如果对我感兴趣，请通过邮箱联系我
*
*想进一步了解我，请点击网页简历
*
*再见~
*
*
*/
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
                        domPaper.innerHTML=marked(domPaper.innerHTML)
                        writeCode(result1+result2+result3,result4,()=>{
                            writeCode(result1+result2+result3+result4,result5,()=>{})
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
                isPlay=false

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
    },80)

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
  },80)
}

function delay(time){
    let i=time*30000000
    while(i>0){i--}
}
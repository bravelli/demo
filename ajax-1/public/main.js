console.log("我是main.js")

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest() //创建响应对象
    request.open('GET',"/style.css");//响应会打开某个文件内容
    request.onload =()=>{                       //onload成功了执行什么
        console.log('request.response')
        console.log(request.response)
        //创建style标签
        const style = document.createElement("style")
        //填写style内容
        style.innerHTML = request.response
        //插入head标签内
        document.head.appendChild(style)
    }
    request.onerror = ()=>{                 //onerror失败了执行什么
        console.log('失败了')
    }
    request.send()                          //最后发送
}
get2js.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',"/2.js");
    request.onload =()=>{
        console.log('request.response')
        console.log(request.response)
        //创建script标签
        const script = document.createElement("script")
        //填写script内容
        script.innerHTML = request.response
        //插入body标签内
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    request.send()
}
get3html.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',"/3.html");
    request.onload =()=>{
        console.log('request.response')
        console.log(request.response)
        //创建div标签
        const div = document.createElement("div")
        //填写div内容
        div.innerHTML = request.response
        //插入body标签内
        document.body.appendChild(div)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    request.send()
}

get4xml.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("GET",'/4.xml')
    request.onreadystatechange =()=>{
        if (request.readyState=== 4 && request.status===200){
            console.log(request.responseXML) //responseXML 直接可以返回一个DOM对象
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim()); //trim方法移除前后空字符串
        }
    }
    request.send()
}

get5json.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("GET",'/5.json')
    request.onreadystatechange =()=>{
        if (request.readyState=== 4 && request.status===200){
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name;
        }
    }
    request.send()
}
let n = 1;
getpage.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("GET",`/page${ n + 1}`);
    request.onreadystatechange =()=>{
        if (request.readyState=== 4 && request.status===200){
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item =>{  //把数组每一项叫做item
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li);

            })
            n += 1;
        }
    }
    request.send()
}
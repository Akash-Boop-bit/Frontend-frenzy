const navigate = (link)=>{
    window.location.href = link
}

const change = (num)=>{
    let btnarr = document.getElementsByName("btn")
    let newarr = []
    let arr = ["c++.png", "react.png", "node.webp", "js.avif", "html.jpg", "css.png","python.png", "mongo.png"]

    btnarr.forEach((ele)=>{
        ele.style.backgroundColor= "white"
    })
    switch (num) {
        case 1:
            document.getElementById("btn1").style.backgroundColor = "black"
            newarr = arr.slice(0, 4)
            break;
        case 2:
                document.getElementById("btn2").style.backgroundColor = "black"
                newarr = arr.slice(1, 5)
                break;
        case 3:
                    document.getElementById("btn3").style.backgroundColor = "black"
                    newarr = arr.slice(2, 6)
                    break;
        case 4:
                        document.getElementById("btn4").style.backgroundColor = "black"
                        newarr = arr.slice(3, 7)
                        break;
        case 5:
                            document.getElementById("btn5").style.backgroundColor = "black"
                            newarr = arr.slice( 4)
                            break;
    
        default:
            break;
    }




    document.getElementById("skill").innerHTML = newarr.map((ele)=>{
        return `<div class="skilldiv">
            <img src="./images/skills/${ele}" />
        </div>`
    }).join("")


}


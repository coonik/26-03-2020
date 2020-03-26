window.onload = async () => {
    document.getElementsByClassName("text")[0].click();
    data = await getData("acc.json");
    xuLyInput("lbAnh");
    xuLyInput("lbIt");

    console.log($("input"));
    
    $("input").css("transition-duration","2s");

    success = function success(){
        $("#music")[0].play();
        $(".img").css("display","block");
        setTimeout(()=>{
            $("img").css("transform","scale3d(-1, 1, 1)");
        },2);
        setTimeout(() => {
            document.getElementsByClassName("success")[0].click();
            $("input").val("");
        }, 2605);
    }
    

    document.getElementsByClassName("success-btn")[0].onclick = function () {
        $("#page").css("display","block");
        $(".wrapper")[0].css("display","none");
    }
}

var data;

function hideByClass(className) {
    const con = document.getElementsByClassName(className);
    for (let i = 0; i < con.length; i++) {
        con[i].style.opacity == "" ? con[i].style.opacity = 1 : null;
        con[i].style.opacity === "1" ? con[i].style.opacity = 0 : con[i].style.opacity = 1;
    };
}

function xuLyInput(idName) {
    document.getElementById(idName).onfocus = function () {
        document.getElementsByClassName(idName)[0].style.top = "0px";
        idName === "lbIt" ? xuLyAlert("al-" + idName, "hỉ.. găng nhập nhại gứa.. hư hư.. nhập cũng hư nữa", "nhần ni mờ hông được nữa xì hú a cho gòi hê hê") :
            xuLyAlert("al-" + idName, "a nhường đc nên nhập ngayphunuvn cũng đc hê hê", "hoi hội ý xí gòi nhập *nhóc dàng ngại*");
    }
    document.getElementById(idName).onmouseleave = function () {
        let temp = document.getElementById(idName).value;
        let temp2 = "";
        temp = temp.split(" ");
        for (let i = 0; i < temp.length; i++) {
            temp2 += temp[i];
        }
        temp2 != "" ? document.getElementsByClassName(idName)[0].style.top = "0px" : document.getElementsByClassName(idName)[0].style.top = "48%";

        let pass = document.getElementById("lbAnh").value;
        pass === "ngayphunuvn" ? setAYE() : null;
        let un = document.getElementById("lbIt").value;
        loginCheck(un, pass);
    }
}

function setAYE() {
    document.getElementsByClassName("lbIt")[0].style.top = "0px";
    document.getElementById("lbIt").style.color = "yellow";
    document.getElementById("lbIt").value = "Anh yêu em <3";
    document.getElementsByClassName("text-span")[0].style.color = "white";
    document.getElementsByClassName("text-span")[0].innerHTML = "Nhường nổi hông hê hê";
}

function xuLyAlert(idName, text, text2) {
    document.getElementsByClassName(idName)[0].style.display = "block";
    setTimeout(() => {
        document.getElementsByClassName(idName)[0].style.display = "none";
    }, 5000);
    setTimeout(() => {
        document.getElementsByClassName(idName)[0].innerHTML != text2 ?
            document.getElementsByClassName(idName)[0].innerHTML === text ? document.getElementsByClassName(idName)[0].innerHTML = text2 :
                text ? document.getElementsByClassName(idName)[0].innerHTML = text : null
            : null;
    }, 5001);
}

async function getData(nameFileJson) {
    let data = await $.ajax({
        type: "GET",
        url: "./js/" + nameFileJson,
        dataType: 'json'
    })
    return data;
}

function loginCheck(username, pass) {
    for (let i = 0; i < data.length; i++) {
        (data[i].username === username && data[i].pass === pass) ? success() : null;
    };
}

var success;
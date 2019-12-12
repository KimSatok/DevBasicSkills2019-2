function three() {

    var result = 15;
    v1 = "";
    v2 = "";
    v3 = "";
    v4 = "";
    v5 = "";
    v6 = "";
    v7 = "";
    v8 = "";
    v9 = "";

    v1 = parseInt(document.getElementById("v1").value);
    v2 = parseInt(document.getElementById("v2").value);
    v3 = parseInt(document.getElementById("v3").value);
    v4 = parseInt(document.getElementById("v4").value);
    v5 = parseInt(document.getElementById("v5").value);
    v6 = parseInt(document.getElementById("v6").value);
    v7 = parseInt(document.getElementById("v7").value);
    v8 = parseInt(document.getElementById("v8").value);
    v9 = parseInt(document.getElementById("v9").value);
    if (v1 != "" && v2 != "" && v3 != "" && v4 != "" && v5 != "" && v6 != "" && v7 != "" && v8 != "" && v9 != "") {
            if (v1 != v2 && v1 != v3 && v1 != v4 && v1 != v5 && v1 != v6 && v1 != v7 && v1 != v8 && v1 != v9 && v2 != v3 && v2 != v4 && v2 != v5 && v2 != v6 && v2 != v7 && v2 != v8 &&
                    v2 != v9 && v3 != v4 && v3 != v5 && v3 != v6 && v3 != v7 && v3 != v8 && v3 != v9 && v4 != v5 && v4 != v6 && v4 != v7 && v4 != v8 && v4 != v9 && v5 != v6 && v5 != v7 && v5 != v8 && v5 != v9 && v6 != v7 && v6 != v8 && v6 != v9 && v7 != v8 && v7 != v9 && v8 != v9) {
                    if (v1 + v2 + v3 == result && v4 + v5 + v6 == result && v7 + v8 + v9 && v1 + v4 + v7 == result && v2 + v5 + v8 == result && v3 + v6 + v9 == result && v1 + v5 + v9 == result && v3 + v5 + v7 == result) {
                            document.getElementById("result").innerHTML = "Congratulation! You did it";
                    }
                    else {
                            document.getElementById("result").innerHTML = "\n Sorry something wrong please check it again \n \n ";
                    }
            }
            else {
                    document.getElementById("result").innerHTML = "\n Sorry you can't use the same number twice \n ";
            }


    }
    else {
            document.getElementById("result").innerHTML = "\n All blank space must be filled \n";
    }
}
function four() {

    var result = 34;
    v1 = "";
    v2 = "";
    v3 = "";
    v4 = "";
    v5 = "";
    v6 = "";
    v7 = "";
    v8 = "";
    v9 = "";
    v10 = "";
    v11 = "";
    v12 = "";
    v13 = "";
    v14 = "";
    v15 = "";
    v16 = "";


    v1 = parseInt(document.getElementById("v1").value);
    v2 = parseInt(document.getElementById("v2").value);
    v3 = parseInt(document.getElementById("v3").value);
    v4 = parseInt(document.getElementById("v4").value);
    v5 = parseInt(document.getElementById("v5").value);
    v6 = parseInt(document.getElementById("v6").value);
    v7 = parseInt(document.getElementById("v7").value);
    v8 = parseInt(document.getElementById("v8").value);
    v9 = parseInt(document.getElementById("v9").value);
    v10 = parseInt(document.getElementById("v10").value);
    v11 = parseInt(document.getElementById("v11").value);
    v12 = parseInt(document.getElementById("v12").value);
    v13 = parseInt(document.getElementById("v13").value);
    v14 = parseInt(document.getElementById("v14").value);
    v15 = parseInt(document.getElementById("v15").value);
    v16 = parseInt(document.getElementById("v16").value);

    if (v1 != "" && v2 != "" && v3 != "" && v4 != "" && v5 != "" && v6 != "" && v7 != "" && v8 != "" && v9 != "" && v10 != "" && v11 != "" && v12 != "" && v13 != "" && v14 != "" && v15 != "" && v16 != "") {
            if (v1 != v2 && v1 != v3 && v1 != v4 && v1 != v5 && v1 != v6 && v1 != v7 && v1 != v8 && v1 != v9 && v1 != v10 && v1 != v11 && v1 != v12 && v1 != v13 && v1 != v14 && v1 != v15 &&
                    v1 != v16 && v2 != v3 && v2 != v4 && v2 != v5 && v2 != v6 && v2 != v7 && v2 != v8 && v2 != v9 && v2 != v10 && v2 != v11 && v2 != v12 && v2 != v13 && v2 != v14 && v2 != v15 && v2 != v16 && v3 != v4 && v3 != v5 && v3 != v6 && v3 != v7 && v3 != v8 && v3 != v9 && v3 != v10 && v3 != v11 && v3 != v12 && v3 != v13 && v3 != v14 && v3 != v15 && v3 != v16 && v4 != v5 && v4 != v6 && v4 != v7 && v4 != v8 && v4 != v9 && v4 != v10 && v4 != v11 && v4 != v12 && v4 != v13 && v4 != v14 && v4 != v15 &&
                    v4 != v16 && v5 != v6 && v5 != v7 && v5 != v8 && v5 != v9 && v5 != v10 && v5 != v11 && v5 != v12 && v5 != v13 && v5 != v14 && v5 != v15 &&
                    v5 != v16 && v6 != v7 && v6 != v8 && v6 != v9 && v6 != v10 && v6 != v11 && v6 != v12 && v6 != v13 && v6 != v14 && v6 != v15 &&
                    v6 != v16 && v7 != v8 && v7 != v9 && v7 != v10 && v7 != v11 && v7 != v12 && v7 != v13 && v7 != v14 && v7 != v15 && v7 != v16 && v8 != v9 && v8 != v10 && v8 != v11 &&
                    v8 != v12 && v8 != v13 && v8 != v14 && v8 != v15 && v8 != v16 && v9 != v10 && v9 != v11 && v9 != v12 && v9 != v13 && v9 != v14 && v9 != v15 && v9 != v16 && v10 != v11 &&
                    v10 != v12 && v10 != v13 && v10 != v14 && v10 != v15 && v10 != v16 && v11 != v12 && v11 != v13 && v11 != v14 && v11 != v15 && v11 != v16 && v12 != v13 && v12 != v14 && v12 != v15 &&
                    v12 != v16 && v13 != v4 && v13 != v5 && v13 != v6 && v14 != v15 && v14 != v16 && v15 != v16) {
                    if (v1 + v2 + v3 + v4 == result &&  v5 + v6 + v7 + v8 == result && v9 + v10 + v11 +v12 == result && v13 + v14 + v15 +v16 == result && v1 + v5 + v9 + v13 == result && v2 + v6 + v10 + v14 == result && v3 + v7 + v11 + v15 == result && v4 + v8 + v12 + v16 == result && v1 + v6 + v11 + v16 == result && v4 + v7 + v10 +v13 == result) {
                            document.getElementById("result2").innerHTML = "Congratulation! You did it";
                    }
                    else {
                            document.getElementById("result2").innerHTML = "\n Sorry something wrong please check it again \n \n ";
                    }
            }
            else {
                    document.getElementById("result2").innerHTML = "\n Sorry you can't use the same number twice \n ";
            }


    }
    else {
            document.getElementById("result2").innerHTML = "\n All blank space must be filled \n";
    }
}

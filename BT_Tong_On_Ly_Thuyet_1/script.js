let baiHat = JSON.parse(localStorage.getItem('baiHat'))||[];
function addMus(){
    let id = baiHat.length > 0 ? baiHat[baiHat.length - 1].id + 1 : 1;
    let name = document.getElementById('title').value
    let artist = document.getElementById('artist').value
    if (artist == "" || name == "") {
        console.log("Không có giá trị");
        
        document.getElementsByClassName('err')[0].style.display="block"
        return 0;
    }
    let obj = {
        id: id, name: name, artist:artist
    }
    baiHat.push(obj)
    localStorage.setItem('baiHat',JSON.stringify(baiHat))
    console.log(baiHat);
    disMu()
}
function disMu() {
    let dis = ""
    for (let i = 0; i < baiHat.length; i++) {
        dis +=` <tr>
                <td>${baiHat[i].id}</td>
                <td>${baiHat[i].name}</td>
                <td>${baiHat[i].artist}</td>
                <td><button onclick="update(${i})">Sua</button> <button onclick="del(${i})">Xoa</button></td>
            </tr>`
        
    }document.getElementById('songTable').innerHTML=dis
}
disMu()
function update(index){
   let id=baiHat[index].id
let name = prompt("Nhap lai ten bai hat")
let artist = prompt("Nhap ten tac gia")
if (artist == "" || name == "") {
        console.log("Không có giá trị");
        
        document.getElementsByClassName('err')[0].style.display="block"
        return 0;
    }
    let obj = {
        id: id, name: name, artist:artist
    }
    baiHat.splice(index,1,obj)
    localStorage.setItem('baiHat',JSON.stringify(baiHat))
    console.log(baiHat);
    disMu()
}
function del(index) {
    baiHat.splice(index,1)
    localStorage.setItem('baiHat',JSON.stringify(baiHat))
    console.log(baiHat);
    disMu()
}
function se() {
    /// case nay em quen cach lam
}
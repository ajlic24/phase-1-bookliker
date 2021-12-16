document.addEventListener("DOMContentLoaded", function() {
    let ul = document.getElementById(`list`)
    let divPanel = document.getElementById(`show-panel`)

    function removeChildNodes(parent) {
        while(parent.firstChild){
            parent.firstChild.remove()
        }
    }
    
    fetch(`http://localhost:3000/books`)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(({title, users, description, img_url}) => {
            let li = document.createElement(`li`)
            let btn = document.createElement(`button`)

            li.textContent = title
            btn.textContent = `LIKE`
            li.addEventListener(`click`, () => {
                removeChildNodes(divPanel)
                let img = document.createElement(`img`)
                let desc = document.createElement(`p`)
                let userList = document.createElement(`ul`)
                
                img.src = img_url
                desc.textContent = description
                users.forEach((user) => {
                    let userLi = document.createElement(`li`)
                    userLi.textContent = user.username
                    userList.appendChild(userLi)
                })
                btn.addEventListener(`click`, () => {

                })
                divPanel.append(img, desc, userList, btn)
            })
            ul.appendChild(li)
        });
        
    })
});

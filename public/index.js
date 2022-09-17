const rows = []
window.onload = function(){
    const table = document.getElementById("ids").children[0]
    fetch("/index.txt").then((res)=>{
        res.text().then((data)=>{
            line = data.split("\r\n")
            const items = line.map((item)=>{return item.split(",")})

            items.forEach(item => {
                const row = table.insertRow()
                
                let cell = row.insertCell();
                let text = document.createTextNode(item[0]);
                cell.appendChild(text);

                cell = row.insertCell();
                text = document.createTextNode(item[1]);
                cell.appendChild(text);

                rows.push(row)
            });
        })
    })

    const search = document.getElementById("search")
    search.addEventListener("input",function(){
        const s = search.value;

        const list = rows.filter((row)=>{return row.children[0].innerHTML.slice(0,s.length)==s})
        const other = rows.filter((row)=>{return row.children[0].innerHTML.slice(0,s.length)!=s})
        
        rows.forEach((row)=>{
            row.style.display = "none"
        })
        list.forEach((row)=>{
            row.style.display = "table-row"
        })
        
    })
}
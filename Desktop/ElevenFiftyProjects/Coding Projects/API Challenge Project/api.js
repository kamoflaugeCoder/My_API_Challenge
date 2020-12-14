let url = 'https://ghibliapi.herokuapp.com/films';
let cardSection = document.querySelector("#cardDivContainer");

console.log(0);

fetch(url)

.then(data => data.json(), err => console.log(err))
    .then(json => {
        console.log(json)
        display(json)
    })

let display = (json) => {
    for (item of json)


    {
        // let tmp = document.createElement('li');
        // console.log(tmp)
        // tmp.innerHTML = item.title;
        // tmp.innerHTML = item.description;
        // list.appendChild(tmp);

        //Create each HTML elements
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        // let img = document.createElement('img');
        let div4 = document.createElement('div');
        let div5 = document.createElement('div');
        let cardtitle = document.createElement("h6");
        let para = document.createElement('p');


        //setAttribute (class) for each element
        div1.setAttribute("class", "flip-card");
        div2.setAttribute("class", "flip-card-inner");
        div3.setAttribute("class", "flip-card-front");
        // img.setAttribute("class", "card-img");
        div4.setAttribute("class", "flip-card-back");
        div5.setAttribute("class", "content");

        cardtitle.textContent = item.title;
        para.textContent = item.description;


        //append elements to one another, parent/child etc
        cardSection.appendChild(div1);
        div1.appendChild(div2);

        div2.appendChild(div3);
        div3.appendChild(cardtitle);

        div2.appendChild(div4);
        div4.appendChild(div5);
        // div5.appendChild(cardtitle);

        div5.appendChild(para);
    }
}

let list = document.querySelector('ol');
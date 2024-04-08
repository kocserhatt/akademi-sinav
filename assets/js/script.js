const maincon = document.querySelector(".main-con");

async function getData(){
    const data = await fetch("assets/json/data.json");
    const veri = await data.json();
    return veri;
}

async function yazdirData(){
    const data = await getData();
    console.log(data);
    maincon.innerHTML = `
    <div class="container">
        <div class="back">
            <div class="black"></div>
            <div class="foto"><img src="${data.top.photo}" alt=""></div>
        </div>
        <img class="foto-1" src="assets/img/Rectangle (3).jpg" alt=""> 
        <div class="yazilar">
            <h1>${data.top.title}</h1>
            <div class="right">
                <p>${data.top.description}</p>
                <div class="btn">
                    <button>${data.top.button}</button>
                    <img src="assets/img/Group.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="container-1">
        <div class="grup revers">
            <div class="end-text text-light ss">
                <h1>${data.middle.title}</h1>
                <p>${data.middle.description}</p>
            </div>
                <img class="grup-img w-50" src="${data.middle.photo}" alt="">
        </div>
        <div class="grup">
                <img class="grup-img mt-16 w-50" src="${data.bottom.photo}" alt="">
            <div class="inline-grup">
                    <img class="grup-img mb-30 w-50 tablet-w-100" src="${data.bottom.photo2}" alt="">
                <div class="bg-dark end-text ">
                    <h1>${data.bottom.title}</h1>
                    <p>${data.bottom.description}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <img src="${data.footer.photo}" alt="">
        <div class="footer-text">
            <p>${data.footer.description}</p>    
        </div>
        <div class="social-media-links">
            <ul>
                <li>
                    <a class="link" href="#"><img src="assets/img/Path (1).svg" alt=""></a>
                </li>
                <li>
                    <a class="link" href="#"><img src="assets/img/Path.svg" alt=""></a>
                </li>
                <li>
                    <a class="link" href="#"><img src="assets/img/Shape.svg" alt=""></a>
                </li>
            </ul>
        </div>
    </div>
    `
}
yazdirData();

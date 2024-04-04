import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"
import { database, storage } from "./firebase.js"

const template = document.createElement('template');

template.innerHTML = `
    <style>
        #profile-pic-frame:hover{
            box-shadow: 0 0 15px #55555555;
            cursor: pointer;
        }
    </style>
    <link rel="stylesheet" href="styles/fonts.css">
    <link rel="stylesheet" href="styles/profile.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="profile-card">
        <div id="profile-pic-frame">
            <img id="profile-pic">
        </div>
        <div id="username"></div>
        <div class="field location">
            <i class="fa fa-map-marker"></i>
            <p id="location"></p>
        </div>
        <div class="footer">
            <div class="field rating">
                Rating:
            <div id="rating"></div>
            </div>
            <div id="price-range">
                $
            </div>
        </div>
    </div>
`
class ProfileCard extends HTMLElement {
    constructor(uid){
        super();
        this.attachShadow({mode:'open'});
        const shadowRoot = this.shadowRoot;
        shadowRoot.appendChild(template.content.cloneNode(true));
        const username = shadowRoot.getElementById("username")
        const profilePic = shadowRoot.getElementById("profile-pic")
        const location = shadowRoot.getElementById("location")
        const rating = shadowRoot.getElementById("rating")
        const priceRange = shadowRoot.getElementById("price-range")
        
        listAll(ref(storage, "users/"+uid)).then((folder)=>{
            let profilePicRef = ref(storage, "users/"+uid+"/avatar.jpg")
            if(folder.items.length == 0)
            profilePicRef = ref(storage, "images/Maquilla.png")
            getDownloadURL(profilePicRef).then(url=>{
            profilePic.src = url
            }, error=>console.log(error.message))
        })
        const userDoc = doc(database, "Users", uid)
        getDoc(userDoc).then((snapshot) => {
            const data = snapshot.data()
            profilePic.onclick = (()=>{
                window.location.href = "profile.html?user="+data["Username"]
            })
            username.textContent = '@ '+data["Username"]
            location.textContent = data["Location"]
            rating.textContent = data["Rating"].toFixed(1)
            priceRange.style.display = "flex"
            const averagePrice = (data["PriceFrom"] + data["PriceTo"])/2
            if(averagePrice==0)
            priceRange.textContent = "Flexible Price"
            else
            priceRange.textContent += averagePrice
        });
    }
}

window.customElements.define('profile-card', ProfileCard);

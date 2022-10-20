// async function update(){
//     let responce = await fetch('https://randomfox.ca/floof/');
//     console.log(responce);
//     let result = await responce.json();
//     console.log(result);
//     let pos = result.image.lastIndexOf('.');
//     let ext = result.image.slice(pos + 1);
//     console.log(ext);
//     if (ext == 'mp4') {
//         document.querySelector('video').style.display = 'initial';
//         document.querySelector('img').style.display = 'none';
//         document.querySelector('video').src = result.image

//     } else {
//         document.querySelector('img').style.display = 'initial';
//         document.querySelector('video').style.display = 'none';
//         document.querySelector('img').src = result.image;
//     }
// }
// document.querySelector('button').addEventListener('click', update);

// update();

const app = Vue.createApp({
    data() {
        return {
            url: "",
            ext: ""
        }
    },
    methods: {
        update: async function () {
            let responce = await fetch('https://randomfox.ca/floof/')
            console.log(responce)
            let result = await responce.json()
            console.log(result);
            let pos = result.image.lastIndexOf('.')
            this.url = result.image
            this.ext = result.image.slice(pos + 1)
        }
    }
})

app.mount('main')
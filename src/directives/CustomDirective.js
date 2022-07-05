

const imageLazyLoading = {
    created(el,binding,vnode,prevVnode){
        console.log("createed")
        console.log(el,binding)
        console.log(vnode.rootScrollEl,prevVnode.rootScrollEl)
    },
    mounted(el,binding){
        console.log("mounted")
        console.log(el,binding)
        // let options = {
        //     root : document.querySelector(binding.value.rootScrollEl),
        //     rootMargin : "500px 0px"
        // }

        // let placeholderEl = document.createElement("div")
        // placeholderEl.setAttribute("style", "position: absolute; top: 0; left: 0; right: 0; bottom:0; background-color: #ccc;transition : opacity 1s ease-in-out;")
        
        // el.appendChild(placeholderEl)

        // el.observer = new IntersectionObserver(changes => {
        //     for (const change of changes){
        //         if(change.intersectionRatio > 0){
        //             el.observer.disconnect()

        //             let imgEl = document.createElement("img")
        //             imgEl.setAttribute("src",binding.value)

        //             imgEl.onload = () =>{
        //                 console.log("img on load : " + binding.value)
        //                 placeholderEl.style['opacity'] = 0
        //                 el.appendChild(imgEl)
        //                 setTimeout(()=>{
        //                     placeholderEl.remove()
        //                 },600)
        //             }
        //         }
        //     }
        // },options)
    },
    unmounted(el,binding){
        console.log(el,binding)
        if(el.observer){
            el.observer.disconnect()
        }
    }
}


export default imageLazyLoading
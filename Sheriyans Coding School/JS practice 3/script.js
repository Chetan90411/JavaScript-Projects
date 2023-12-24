document.querySelector('#center')
.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
})

const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector('#center')
.addEventListener("mousemove", 
    throttleFunction((dets) => {
        // your less repeatetion code
        var div = document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";

        var img = document.createElement('img');

       
        img.setAttribute("src", "https://images.unsplash.com/photo-1701762292571-2875f1e522b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",           
        )

        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: 0.2
        })

        gsap.to(img, {
            y: "100%",
            delay: 0.6,
            ease: Power2,
            duration: 0.2
        })

        setTimeout(function () {
            div.remove();
        }, 2000)
    }, 500));


// throtling reducing the number of executions of a piece of code

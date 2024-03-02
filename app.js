var frame = 0
const firstName = "aneesh"
const lastName = "kalghatgi"
const intId = setInterval(() => {
    if (frame > Math.max(firstName.length, lastName.length)) {
        try {
            document.getElementById(`bgImg${frame % 4}`).hidden = false
            document.getElementById(`bgImg${(frame + 3) % 4}`).hidden = true
        } catch (e) {

        }

        for (let i = 0; i < 4; i++) {
            try {
                document.getElementById(`bgImg${i}`).style.opacity = `${Math.max(0, 1 - window.scrollY/window.innerHeight*2)}`
            } catch (e) {
                
            }
        }
    } else {
        try {
            document.getElementById("firstName").innerText = firstName.substring(0, frame)
            document.getElementById("lastName").innerText = lastName.substring(0, frame)
        } catch (e) {

        }
    }
    frame++
}, 100)
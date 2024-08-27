let chr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function genart() {
        let pass = ""
        for (let i = 0; i <= 3; i++) {
                let le = Math.floor(Math.random() * chr.length)
                let gm = chr.charAt(le)
                pass += gm
        }
        document.body.append(pass)
}
genart()



 

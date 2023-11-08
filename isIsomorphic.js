

function isIsomorphic(s, t) {

    if(s.length !== t.length) return false;

    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {

        // check if current mapping is consistent with previous mapping.
        if (mapS.has(s[i]) && mapS.get(s[i]) !== t[i] || mapT.has(t[i]) && mapT.get(t[i]) !== s[i]) {

            return false
        }

        mapS[s[i]] = t[i]
        mapT[t[i]] = s[i]

        let x = mapS.set(s[i], t[i]);
        let y = mapT.set(t[i], s[i])
        console.log("values for x --->", x)
        console.log("values for y --->", y)

    }

    return true
}

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("badc","baba"))
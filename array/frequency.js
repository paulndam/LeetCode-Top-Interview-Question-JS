

const data = ['football', 'baseball', 'basketball', 'football', 'tennis', 'baseball','volleyball', 'football','basketball']


const getFreq = (input) => {

    const hashMap = new Map()

    let result = {}

    for(const r of input){
        console.log("========= r ======>",r)

        hashMap.set(r,(hashMap.get(r) || 0)+1)

    }

    for(const [key,val] of hashMap.entries()){
        console.log("==== key ====>",key)
        console.log("==== val ====>",val)
        // add the key and value to the result object
        result[key] = val

        

    }

    console.log("result ======>",result)

    return result
}



console.log(getFreq(data))
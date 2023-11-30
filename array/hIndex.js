

const hIndex = (citations) => {

    // sort citations array
    // this will help identify how many papers have citation
    // sort in a non decreasing order
    let sortCitations = citations.sort((a,b) => a - b)
    console.log("sortCitations --->", sortCitations)

    let lastElIndex = citations.length - 1
    console.log("lasEl ===>",lastElIndex)

    for (let i = lastElIndex; i >= 0; i--){
        console.log("papers & citations --->", sortCitations[i])
        // checks if the citation count of the paper is greater than or equal to the remaining number of papers.
        console.log("numbers of papers left --->", citations.length - i)
        if (sortCitations[i] < citations.length - i) {
            console.log("papers with larger citations", sortCitations[i])

            return citations.length - i - 1
        }
    }

    return citations.length
}


console.log(hIndex([3,0,6,1,5]))
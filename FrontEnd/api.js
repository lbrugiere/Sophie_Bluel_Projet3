
const url = "http://localhost:5678/api/works"


const getWorks = async () => {
    const response = await fetch(url)
    return await response.json()
}

export  {
    getWorks
}

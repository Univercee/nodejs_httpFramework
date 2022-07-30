export default (baseUrl) => (req, res) => {
    const url = new URL(req.url, baseUrl)
    const params = {}
    url.searchParams.forEach((value, key) => {
        params[key] = value
    })
    req.params = params
    req.pathname =  url.pathname
    
}
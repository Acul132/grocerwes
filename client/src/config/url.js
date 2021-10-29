const url = () => {
    if(process.env.NODE_ENV === "development"){
        return "http://localhost:3001/"
    }
    else{
        return "https://grocerwes.herokuapp.com/"
    }
}

export default url()
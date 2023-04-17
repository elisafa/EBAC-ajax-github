$(document).ready(function (){
    const endpoint = `https://api.github.com/users/elisafa`
    
    fetch(endpoint)
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        console.log(json)
        const avatar = json.avatar_url
        $('.profile-avatar').attr("src", avatar);
        
        
        const nome = json.login
        $('.profile-username').html(`@${nome}`)

        const repositorio = json.public_repos
        $('#repositorio').html(`${repositorio}`)

        const seguidores = json.followers
        $('#followers').html(seguidores)

        const seguindo = json.following
        $('#following').html(seguindo)

        const link = json.html_url
        console.log(link)
        $('.profile-link').attr("href", link)
    })
})

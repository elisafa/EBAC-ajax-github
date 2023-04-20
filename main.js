$(document).ready(function () {
  const endpoint = `https://api.github.com/users/elisafa`;
  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      const avatar = json.avatar_url;
      const nome = json.login;
      const repositorio = json.public_repos;
      const seguidores = json.followers;
      const seguindo = json.following;
      const link = json.html_url;

      if (avatar || nome || repositorio || seguidores || seguindo || link) {
        $(".profile-avatar").attr("src", avatar);
        $(".profile-username").html(`@${nome}`);
        $("#repositorio").html(`${repositorio}`);
        $("#followers").html(seguidores);
        $("#following").html(seguindo);
        $(".profile-link").attr("href", link);
      } else {
        alert("Ocorreu um erro ao buscar suas informações, tente novamente mais tarde!");
      }
    });
});

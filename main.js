var texto1="Este é um trabalho feito para a disciplina UX da instituição Faculdade Professor Miguel Ângelo da Silva Santos e ministrada pelo professor Sérgio Hermenegildo. Neste trabalho demonstraremos algumas utilizdades da ferramenta de versionamento Git e a integtração com o repositório em nuvem Github. Demonstraremos como várias pessoas podem ter acesso e realizar modificações em um mesmo repositório de forma organizada.";
var texto2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempus urna, eget malesuada justo. Nulla nec nibh sit amet lorem ullamcorper tristique non at leo. Nam et urna tempus, viverra libero in, maximus ex. Vivamus quis lectus sed nulla porttitor laoreet posuere vitae odio. Integer tellus elit, dictum nec finibus tincidunt, dignissim varius leo. Aenean efficitur nisl quis velit feugiat dictum.";
var texto3="1 xícara de leite, 3 xícaras de farinha de trigo, 3 ovos, 1 colher de sopa de fermendo em pó, 3 xícaras de açúcar, 4 colheres de margarina. Bater o açúcar, a margarina e os ovos. Depois acrescente a farinha de trigo, o leite e por último o fermento. Unte a forma com farinha. Asse por mais ou menos 40 minutos. Pode ser incrementado com calda de chocolate, recheio de brigadeiro, doce de leite e outras delícias.";

function baguncar(){
    texto=document.getElementById("texto");
    switch(Math.floor(Math.random() * 3 + 1)){
        case 1: texto.innerHTML = texto1;
        break;

        case 2: texto.innerHTML = texto2;
        break;

        case 3: texto.innerHTML = texto3;
    }
}
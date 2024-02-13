import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import cruiser from "./assets/cruiser.jpg";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="This is Teddy Bear and Panda"
        text="They have known each other for a long time, and were friends, but today they are more than that... they are dating."
        btnText="Let's Begin"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Teddy Bear"
        text="The teddy bear is very studious and funny, he always makes the little panda laugh, but he is very slow and doesn't always understand what the little panda wants to say."
        btnText="Continue"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Panda"
        text="The panda is very cute, she always cares about others, but she has no patience at all. And there's a different way of showing what you feel...
        "
        btnText="Continue"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Teddy Bear & Panda"
        text="As I said, these two are now lovers, they are not perfect... but they always help each other and overcome problems together."
        btnText="Continue"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Sad Panda"
        text="Sometimes the little panda gets sad about some things, and ends up crying and sad... :( But the little bear always comes to try to cheer her up and almost manages to make her laugh"
        btnText="Continue"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Sad Teddy Bear"
        text="Sometimes it's the teddy bear who gets sad about some problems, and then the little panda comes with her love and cuteness and helps the teddy bear when he's sad. :)"
        btnText="Continue"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Slow Teddy Bear"
        text="The teddy bear is slow and sometimes doesn't understand what the little panda meant exactly, and understands it completely differently..."
        btnText="Continue"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Impatient Panda"
        text="The little panda is VERY LOVING, but the lack of patience is the same... and sometimes she gets irritated because the little bear is slow."
        btnText="Continue"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Persistent Teddy Bear"
        text="The panda doesn't like to be direct, so the teddy bear will disturb the pandinha until she speaks..."
        btnText="Continue"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Teddy Bear's Love"
        text="Then the teddy bear, after hours of trying to explain, apologizes for being slow and says how much he loves the panda.."
        btnText="<3"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Panda's Love"
        text="The panda behind all her lack of patience also loves the teddy bear, and ends up saying that she loves him too."
        btnText="<3"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="After that..."
        text="After everything is resolved, the two are fine and happy... and do many things together like friends and lovers that they are."
        btnText="Continue"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="They walk together"
        text="The two love walking together, they laugh a lot, especially at the panda's 'enemies'. ~laughs"
        btnText="Walking..."
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="They take pictures together"
        text="The pandinha wants to look perfect in the photos, she always asks the teddy bear to take it again ~laughs"
        btnText="More photos..."
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="They eat together"
        text="Teddy bear and panda love to eat together, and enjoy the good times with some music"
        btnText="More food and drink..."
        sequency="15"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="They play together"
        text="It looks fun looking at it like that hahaha... for the teddy bear of course... look at the poor teddy bear, look at his face!"
        btnText="Later..."
        sequency="16"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="At night..."
        text="But every day, when the teddy bear can no longer stay awake and talk to the panda, they say goodbye and pretend to sleep together."
        btnText="Naps later..."
        sequency="17"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="And they finally sleep..."
        text="See, they have difficult moments sometimes, and they cry, and they get angry... but when everything falls into place, they love each other a lot and laugh"
        btnText="They sleep..."
        sequency="18"
      />
      <Screen
        imageUrl={cruiser}
        bgColor={colors.red}
        textColor={colors.white}
        title="Happy Valetine's Day Kyah!"
        text="I finally thought of something that no one has ever given you and that I have never given to anyone... I hope you liked it. I love you to the stars and back Kyah... ~Gavin"
        btnText="Finish..."
        sequency="19"
      />
    </div>
  );
};

export default App;

const historiaIndigena = [
  {
    periodo: "Pré-Cabralino",
    fonte: "Importante História",
    eventos:
      "culturas indígenas pré-colombianas florescem com sistemas de saúde próprios.",
    conceitos:
      "diversidade cultural e práticas de saúde integradas ao meio ambiente e espiritualidade.",
    top: "25",
    left: "9",
  },
  {
    periodo: "Descobrimento do Brasil (1500)",
    fonte: "Brasil Escola",
    eventos:
      "chegada dos portugueses e os primeiros contatos com os povos indígenas.",
    conceitos:
      "início do etnocentrismo europeu, visão de superioridade cultural e imposição de práticas religiosas e médicas europeias.",
    top: "5",
    left: "40",
  },
  {
    periodo: "Período Colonial (1500-1822)",
    fonte: "Navegando na História da Educação Brasileira",
    eventos: "colonização, escravidão e missionarismo entre povos indígenas.",
    conceitos:
      "resistência indígena, manutenção de práticas culturais e de saúde apesar da opressão.",
    top: "10",
    left: "70",
  },
  {
    periodo: "Século XIX",
    fonte: "Oficina do Historiador",
    eventos: "independência do Brasil, início das políticas indigenistas.",
    conceitos:
      "continuação do etnocentrismo em políticas públicas, início de registros etnográficos sobre culturas indígenas.",
    top: "30",
    left: "90",
  },
  {
    periodo: "Século XX - Primeira Metade",
    fonte: "Acervo Digital",
    eventos:
      "formação do Serviço de Proteção ao Índio (SPI) e posteriormente a Funai.",
    conceitos:
      "políticas de proteção, mas ainda com resquícios de assimilação cultural.",
    top: "60",
    left: "90",
  },
  {
    periodo: "Década de 1970",
    fonte: "Tucum",
    eventos: "surgimento do movimento indígena organizado.",
    conceitos:
      "luta pelos direitos indígenas, reconhecimento da diversidade cultural.",
    top: "87",
    left: "60",
  },
  {
    periodo: "Constituição de 1988",
    fonte: "Conselho Indigenista Missionário",
    eventos:
      "reconhecimento constitucional dos direitos dos povos indígenas incluindo o direito à cultura e à saúde.",
    conceitos:
      "marco na valorização da diversidade cultural e na garantia de direitos.",
    top: "75",
    left: "35",
  },
  {
    periodo: "Século XXI",
    fonte: "Fiocruz",
    eventos:
      "criação da Secretaria Especial de Saúde Indígena (Sesai), avanços e desafios na saúde indígena.",
    conceitos:
      "reconhecimento da medicina tradicional indígena, da intermedicalidade e dos desafios contínuos contra o etnocentrismo.",
    top: "40",
    left: "40",
  },
  {
    periodo: "Atualidade",
    fonte: "Amazônia Real",
    eventos: "fortalecimento da medicina tradicional e resistência cultural.",
    conceitos:
      "diálogo intercultural na saúde, reconhecimento internacional de saberes indígenas.",
    top: "57",
    left: "58",
  },
];

$(".spiral").append(
  historiaIndigena.map(
    (item, index) => `
      <div class="spiral-item" id="spiralItem${index}"
        style="top: ${item.top}%; left: ${item.left}%"
        >
        <span>${item.periodo}</span>
        <img src="imgs/${index + 1}.jpg">
      </div>
    `
  )
);

var next = 0;

$(document).on("click", ".spiral-item", function () {
  $(".text").show();
  const index = $(this).index();
  const { periodo, fonte, eventos, conceitos } = historiaIndigena[index];

  console.log(index);

  $(".text").html(
    `
      <h6>
          ${periodo}
      </h6>
      <p>
          <strong>
              Eventos:
          </strong>
          ${eventos}
      </p>
      <p>
          <strong>
              Conceitos:
          </strong>
          ${conceitos}
      </p>
    `
  );
});

$(".text").hide();

$("#nextBtn").click(function () {
  $("#mainContainer").hide();
  $(".subheader").hide();
  $("#endContainer").show();
});

$("#backBtn").click(function () {
  $("#mainContainer").show();
  $(".subheader").show();
  $("#endContainer").hide();
});

$("#endContainer").hide();
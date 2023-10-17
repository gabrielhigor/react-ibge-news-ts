const data = {
  items: [
    {
      id: 38126,
      tipo: 'Notícia',
      titulo: 'Serviços recuam 0,9% em agosto, após três altas consecutivas ',
      introducao: 'Gestão de portos e terminais exerceu a principal influência negativa sobre o resultado do setor de serviços no país. Foto: Licia Rubinstein/Agência IBGE Notícias Em agosto, o volume de serviços prestados no país recuou 0,9% frente ao mês anterior, após...',
      data_publicacao: '17/10/2023 09:00:00',
      produto_id: 9229,
      produtos: '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
      editorias: 'economicas',
      imagens: 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_economicas/2023_10/PMS-HOME_LiciaR.jpg',
      produtos_relacionados: '9229',
      destaque: true,
      link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38126-servicos-recuam-0-9-em-agosto-apos-tres-altas-consecutivas.html'
    },
    {
      id: 38135,
      tipo: 'Notícia',
      titulo: 'IBGE estará presente na edição de Porto Alegre (RS) da Caravana Federativa',
      introducao: 'O IBGE participará, nos dias 19 e 20 de outubro, da Caravana Federativa, no Centro de Eventos FIERGS, da Federação das Indústrias do Estado do Rio Grande do Sul, em Porto Alegre (RS). Com palestras e oficinas apresentadas por representantes de diversos...',
      data_publicacao: '17/10/2023 15:17:46',
      produto_id: 0,
      produtos: '',
      editorias: 'ibge',
      imagens: 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2023_10/caravana-rs-home.jpg',
      produtos_relacionados: '',
      destaque: true,
      link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38135-ibge-estara-presente-na-edicao-de-porto-alegre-rs-da-caravana-federativa.html'
    },
  ]
};

function NewsItem() {
  return (
    <article>
      <img src={data.items[0].imagens} />
      <span>Notícia mais recente</span>
      <button>💚</button>
      <h2>{data.items[0].titulo}</h2>
      <p>{data.items[0].introducao}</p>
      <time>{data.items[0].data_publicacao}</time>
      <a href={data.items[0].link}>
        <button>Leia a notícia aqui</button>
      </a>
    </article>
  );
}

export default NewsItem;
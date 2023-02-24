import { GetStaticProps } from 'next';
import { loadPages } from '../api/load-pages';
import Home, { HomeProps } from '../templates/Home';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

//Fetch (GGS)
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  //(raw = cru)
  //o next vai fazer o carregamento dos dados aqui:
  // const raw = await fetch(config.url + config.defaultSlug);
  // const json = await raw.json();
  // const data = mapData(json);

  //temos que retornar o obj

  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (error) {
    console.log(error);
  }

  if (!data || data.length) {
    return {
      notFound: true,
    };
  }

  return {
    //temos que exportar um objeto dentro da chave props, ele vai parar em {name} do Index
    //isso significa que podemos passar os dados da api para lá {name}
    //assim, ao invés de usar userprops, useEfect, passamos a prop para dentro do component

    //e passar para props
    props: {
      //o que retornarmos em props, é o que vai para o componente da rota!
      data,
      //essa props passa para o data lá em cima!
    },
  };
};

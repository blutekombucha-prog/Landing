export type BlogContentBlock =
  | { type: "paragraph"; text: string; linkText?: string; linkHref?: string; boldText?: string; bold?: boolean }
  | { type: "heading"; text: string }
  | { type: "image"; alt: string; src?: string; width?: number; height?: number };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  coverImage?: string;
  headerImage?: string;
  author: string;
  authorBio: string;
  content: BlogContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cocteles-fermentados",
    title: "Cócteles con fermentados: cuando la barra también transforma",
    metaTitle: "Cócteles con fermentados: kombucha y coctelería | Blüte",
    metaDescription:
      "Descubrí cómo la kombucha, el kéfir y otros fermentados transforman la coctelería, aportando acidez, textura, aromas y nuevas posibilidades creativas.",
    excerpt:
      "Descubrí cómo la kombucha, el kéfir y otros fermentados transforman la coctelería, aportando acidez, textura, aromas y nuevas posibilidades creativas.",
    coverImage: "/Cóctel con kombucha.jpeg",
    author: "Alexander Martínez — Sardina Bar Café",
    authorBio:
      "**Alexander Martínez** es bartender desde 2017. Inició su carrera en **Boticario**, donde desarrolló gran parte de su identidad y forma de entender la coctelería. En 2018 obtuvo el primer puesto en una competencia de **Wild Turkey**, experiencia que lo llevó a viajar a Estados Unidos y que marcó un punto importante en su recorrido profesional. Durante sus años en Boticario también tuvo la oportunidad de conocer distintas escenas gastronómicas y de coctelería en **España, Francia, Inglaterra e Italia**, incorporando nuevas influencias y perspectivas a su trabajo. A fines de 2022 decidió emprender una nueva etapa: viajó a **Barcelona para formarse en pastelería**, y posteriormente pasó por Chile antes de continuar su carrera en **Nene Bar, en Bariloche**. Actualmente vive en **Mar del Plata**, donde junto a su familia creó **Sardina Bar Café**, un espacio que combina la esencia de un bar café clásico con una mirada contemporánea. En 2026 participó en **World Class Argentina**, alcanzando el **Top 8 nacional** y obteniendo el reconocimiento como **Mejor de Latinoamérica en el primer desafío** de la competencia. Su recorrido combina coctelería, gastronomía, viajes y formación, con una mirada que busca conectar técnicas, productos e historias detrás de cada servicio.",
    content: [
      {
        type: "paragraph",
        text: "Hay algo particular en trabajar con un fermentado detrás de una barra. No se trata solamente de incorporar un nuevo ingrediente a una receta. Se trata de trabajar con algo que está vivo, que cambia, que tiene su propio ritmo y que muchas veces obliga al bartender a dejar de buscar la perfección absoluta para empezar a observar, probar y entender.",
      },
      {
        type: "image",
        alt: "Cóctel con kombucha",
        src: "/Cóctel con kombucha.jpeg",
        width: 1200,
        height: 800,
      },
      {
        type: "paragraph",
        text: "En los últimos años, la fermentación empezó a ocupar un lugar cada vez más interesante dentro de la gastronomía y también dentro de la coctelería. Kombuchas, kéfires, hidromieles, vinagres y lactofermentos dejaron de ser solamente productos asociados a una tendencia para convertirse en herramientas creativas.",
      },
      {
        type: "paragraph",
        text: "En un cóctel pueden aportar acidez, dulzor, aromas, textura, profundidad y carbonatación. Pero, sobre todo, aportan sabores diferentes, complejos y difíciles de conseguir de otra manera.",
      },
      {
        type: "paragraph",
        text: "Mi primer acercamiento profundo a este mundo fue hace varios años, mientras trabajaba en Boticario, un bar donde la experimentación era parte central de su identidad.",
      },
      {
        type: "paragraph",
        text: "Ahí empezamos a investigar la fermentación aplicada específicamente a la coctelería. La kombucha fue una de las primeras puertas de entrada.",
        linkText: "kombucha",
        linkHref: "/blog/que-es-la-kombucha",
      },
      {
        type: "paragraph",
        text: "Uno de los primeros trabajos que hicimos fue un kéfir de agua con una segunda fermentación de pera. Los resultados podían ser excelentes un día y completamente diferentes algunos días después. La acidez cambiaba, la carbonatación también y los aromas evolucionaban.",
      },
      {
        type: "paragraph",
        text: "Al principio, esa irregularidad podía resultar inquietante. Después entendimos que justamente ahí estaba una de las cosas más interesantes.",
      },
      {
        type: "paragraph",
        text: "Una bebida industrial busca que el producto de hoy sea igual al de mañana. Con un fermentado ocurre lo contrario: cambia con el tiempo y tenemos que aprender a entender esos cambios.",
      },
      {
        type: "paragraph",
        text: "Eso también cambia la manera de trabajar.",
      },
      {
        type: "paragraph",
        text: "Durante esa etapa hicimos kombuchas de diferentes perfiles, hidromieles, vinagres frutales, kéfires y distintas fermentaciones aplicadas a bebidas. También empezamos a mirar los ingredientes desde otro lugar.",
      },
      {
        type: "paragraph",
        text: "En una de las cartas de Boticario, por ejemplo, trabajamos bajo el concepto de desperdicio cero. Partes de frutas, vegetales y hierbas que normalmente hubieran terminado descartadas podían convertirse en cordiales, fermentos, vinagres o nuevos componentes para un cóctel.",
      },
      {
        type: "paragraph",
        text: "La fermentación aparecía entonces no solamente como una técnica para transformar un ingrediente, sino también como una manera de aprovecharlo mejor.",
      },
      {
        type: "paragraph",
        text: "Con el tiempo entendí que no existe una única manera de hacer un cóctel con fermentados.",
      },
      {
        type: "paragraph",
        text: "Una kombucha puede aportar burbujas y acidez en un Collins o un highball. Puede reemplazar parte de una bebida gasificada, acompañar un destilado o incluso convertirse en el eje de un cóctel sin alcohol.",
      },
      {
        type: "paragraph",
        text: "Pero la pregunta que más me interesa no es: ¿qué cóctel puedo hacer con kombucha?",
        boldText: "¿qué cóctel puedo hacer con kombucha?",
      },
      {
        type: "paragraph",
        text: "Sino: ¿qué puede hacer la fermentación por un cóctel?",
        boldText: "¿qué puede hacer la fermentación por un cóctel?",
      },
      {
        type: "paragraph",
        text: "Esa pregunta fue parte de mi aprendizaje en Boticario y sigue presente hoy, trabajando en Sardina Bar Café, en Mar del Plata.",
      },
      {
        type: "image",
        alt: "Sardina Bar y Café en Mar del Plata",
        src: "/Sardina Bar y Café en Mar del Plata.jpeg",
        width: 1200,
        height: 800,
      },
      {
        type: "paragraph",
        text: "No necesariamente porque cada cóctel tenga que llevar un fermentado, sino porque aquella experiencia modificó mi manera de pensar la coctelería.",
      },
      {
        type: "paragraph",
        text: "Me enseñó a esperar. A probar. A aceptar que un producto puede cambiar. Y, sobre todo, a entender que detrás de un ingrediente hay un proceso que también puede formar parte del sabor final.",
      },
      {
        type: "paragraph",
        text: "Una kombucha puede ser ácida y dulce al mismo tiempo. Puede tener una carbonatación delicada y notas profundas provenientes de la fermentación. Un kéfir puede aportar acidez y textura. Un vinagre puede convertirse en una herramienta para estructurar una bebida. Una hidromiel puede sumar complejidad mucho más allá del azúcar.",
      },
      {
        type: "paragraph",
        text: "Eso amplía el vocabulario de una barra.",
      },
      {
        type: "paragraph",
        text: "Y quizás por eso los fermentados tienen tanto futuro en la coctelería. No son simplemente ingredientes que colocamos dentro de una receta. Son ingredientes con historia, proceso y evolución.",
      },
      {
        type: "paragraph",
        text: "El cóctel termina siendo, en cierta forma, el último capítulo de una fermentación que empezó mucho antes: en una botella, en un frasco o en un recipiente, a través de distintos procesos que transforman lentamente la materia.",
      },
      {
        type: "paragraph",
        text: "La barra, entonces, deja de ser solamente el lugar donde se mezclan bebidas.",
      },
      {
        type: "paragraph",
        text: "También puede ser un lugar donde las cosas siguen transformándose.",
        bold: true,
      },
      {
        type: "image",
        alt: "Alexander Martínez dueño de Sardina Bar y Café",
        src: "/Alexander Martínez dueño de Sardina Bar y Café.jpeg",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "que-es-la-kombucha",
    title:
      "¿Qué es la kombucha? Historia, elaboración y por qué cada vez más personas la eligen",
    metaTitle: "¿Qué es la kombucha? Historia, elaboración y origen | Blüte",
    metaDescription:
      "Descubrí qué es la kombucha, cómo se elabora, cuál es su origen y por qué esta bebida fermentada gana cada vez más lugar en la gastronomía.",
    excerpt:
      "Descubrí qué es la kombucha, cómo se elabora, cuál es su origen y por qué esta bebida fermentada gana cada vez más lugar en la gastronomía.",
    coverImage: "/portadablog1.jpeg",
    headerImage: "/portadablog.jpeg",
    author: "Mariano Cocco",
    authorBio:
      "Mariano Cocco es Licenciado en Comunicación Social, especialista en estrategia de contenidos y cofundador de Blüte. Desde hace más de cinco años trabaja en la industria del marketing, acompañando el desarrollo y posicionamiento de marcas. En Blüte combina esa experiencia con su pasión por la gastronomía, el deporte y la comunicación para impulsar una kombucha inspirada en la identidad de Neuquén y la Patagonia.",
    content: [
      {
        type: "paragraph",
        text: "La kombucha es una bebida fermentada a base de té que ha ganado una notable popularidad en todo el mundo durante la última década.",
      },
      {
        type: "paragraph",
        text: "Hoy forma parte de la oferta habitual de cafeterías, restaurantes, tiendas de alimentos saludables y supermercados en países como Estados Unidos, Australia, Reino Unido, Alemania y Japón, mientras su consumo continúa expandiéndose en mercados emergentes, entre ellos Argentina.",
      },
      {
        type: "image",
        alt: "Burbujas propias de la kombucha",
        src: "/blog1A.jpeg",
        width: 734,
        height: 769,
      },
      {
        type: "paragraph",
        text: "Este crecimiento refleja una tendencia más amplia: el interés de los consumidores por bebidas elaboradas mediante procesos naturales de fermentación y por propuestas que ofrecen nuevas experiencias de sabor.",
      },
      {
        type: "paragraph",
        text: "Además, el mercado mundial de la kombucha continúa en expansión, impulsado principalmente por Norteamérica y Europa, donde se consolidó como una categoría de peso dentro del rubro de bebidas funcionales y sin alcohol.",
      },
      {
        type: "paragraph",
        text: "Sin embargo, para muchas personas sigue siendo una gran desconocida. ¿Qué es exactamente? ¿Cómo se elabora? ¿Cuál es su origen? ¿Por qué cada vez más personas la incorporan a su rutina?",
      },
      {
        type: "heading",
        text: "Una historia que comenzó hace más de dos mil años",
      },
      {
        type: "paragraph",
        text: "Aunque su expansión global es relativamente reciente, la kombucha posee una historia que combina tradición, cultura y algunos interrogantes que todavía hoy generan debate entre historiadores e investigadores.",
      },
      {
        type: "paragraph",
        text: "La teoría más aceptada sitúa sus orígenes en el noreste de China, en la antigua región de Manchuria, donde ya existían bebidas obtenidas a partir de la fermentación del té hace más de dos mil años.",
      },
      {
        type: "paragraph",
        text: "Sin embargo, la evidencia histórica disponible es limitada y muchas de las historias que suelen repetirse sobre su nacimiento pertenecen más al terreno del folklore que al de la documentación científica.",
      },
      {
        type: "paragraph",
        text: "Lo que sí parece estar bien establecido es el recorrido que realizó posteriormente. A través de las rutas comerciales, la kombucha llegó a Rusia y a distintos países de Europa del Este, donde pasó a formar parte de la cultura doméstica.",
      },
      {
        type: "paragraph",
        text: "Durante gran parte del siglo XX era habitual encontrar frascos de kombucha fermentando en cocinas familiares de Rusia, Ucrania, Polonia y Alemania, mucho antes de que la bebida se popularizara en Occidente.",
      },
      {
        type: "paragraph",
        text: "Su verdadera expansión internacional comenzó recién a finales del siglo XX y, especialmente, durante la última década. Impulsada por el auge de la gastronomía artesanal, el interés por los alimentos fermentados y el crecimiento del movimiento craft, la kombucha dejó de ser una preparación casera para convertirse en una categoría presente en cafeterías, restaurantes y supermercados de todo el mundo.",
      },
      {
        type: "paragraph",
        text: "Hoy convive con otros fermentados tradicionales como el yogur, el kéfir, el chucrut, el kimchi o el miso, reflejando un renovado interés por técnicas de elaboración que acompañan a la humanidad desde hace siglos.",
      },
      { type: "heading", text: "¿Cómo se elabora la kombucha?" },
      {
        type: "paragraph",
        text: "La elaboración de kombucha comienza con una preparación simple: agua, té y azúcar.",
      },
      {
        type: "paragraph",
        text: "A esta mezcla se incorpora un cultivo simbiótico de bacterias y levaduras, conocido como SCOBY (Symbiotic Culture of Bacteria and Yeast). Durante la fermentación, estos microorganismos transforman parte de los azúcares presentes en la infusión y generan distintos compuestos que aportan las características propias de la bebida.",
      },
      {
        type: "paragraph",
        text: "El resultado es una bebida refrescante, naturalmente ácida y con una complejidad aromática que varía según múltiples factores: el tipo de té utilizado, el tiempo de fermentación, la composición del cultivo, la temperatura de elaboración y los ingredientes que puedan incorporarse posteriormente.",
      },
      {
        type: "paragraph",
        text: "Al igual que ocurre con el vino, la cerveza artesanal o el café de especialidad, pequeñas decisiones durante el proceso pueden dar lugar a perfiles sensoriales completamente diferentes.",
      },
      {
        type: "paragraph",
        text: "Muchos productores realizan una segunda fermentación junto con frutas, especias, hierbas o jugos naturales para desarrollar nuevos aromas, intensificar determinados sabores y lograr una carbonatación natural. Esa etapa abre un enorme abanico de posibilidades creativas y convierte a la kombucha en una bebida con una gran riqueza gastronómica.",
      },
      {
        type: "paragraph",
        text: "En Blüte entendemos que esa es una de las características más fascinantes de la kombucha. Si bien muchas personas se acercan a ella por el creciente interés en los alimentos fermentados, nosotros creemos que su verdadero potencial va mucho más allá.",
      },
      {
        type: "paragraph",
        text: "La pensamos, desarrollamos y elaboramos como una bebida capaz de integrarse naturalmente a una propuesta gastronómica, con perfiles de sabor diseñados para acompañar comidas, generar maridajes y ofrecer una experiencia distinta dentro del universo de las bebidas sin alcohol.",
      },
      {
        type: "paragraph",
        text: "Esa mirada influye en cada decisión que tomamos durante la elaboración. Desde la selección de los ingredientes hasta el desarrollo de cada receta, buscamos que cada variedad tenga identidad propia, equilibrio y complejidad, para que pueda disfrutarse tanto por sí sola como en la mesa, acompañando distintos momentos y preparaciones.",
      },
      { type: "heading", text: "¿A qué sabe la kombucha?" },
      {
        type: "paragraph",
        text: "Definir el sabor de la kombucha no es sencillo, ya que existen innumerables estilos y recetas.",
      },
      {
        type: "paragraph",
        text: "En términos generales, suele presentar un equilibrio entre dulzor, acidez y notas provenientes del té utilizado durante su elaboración. Algunas variedades pueden recordar levemente a una sidra seca, mientras que otras destacan por sus notas frutales, cítricas, especiadas o herbales.",
      },
      {
        type: "paragraph",
        text: "Esa diversidad es una de las razones por las que la kombucha atrae tanto a consumidores provenientes de distintos mundos: desde quienes disfrutan del café de especialidad o el vino, hasta quienes buscan nuevas alternativas dentro del universo de las bebidas sin alcohol.",
      },
      { type: "heading", text: "El auge de las bebidas fermentadas" },
      {
        type: "paragraph",
        text: "Durante la última década se produjo una transformación en la manera en que muchas personas se relacionan con la alimentación y las bebidas.",
      },
      {
        type: "paragraph",
        text: "Los consumidores muestran cada vez más interés por conocer el origen de los productos que consumen, los ingredientes utilizados en su elaboración y los procesos detrás de cada receta. En este contexto, la fermentación volvió a ocupar un lugar central dentro de la gastronomía contemporánea.",
      },
      {
        type: "paragraph",
        text: "La kombucha se inserta en este movimiento como una bebida que combina tradición, innovación y creatividad, permitiendo desarrollar una enorme variedad de sabores y experiencias.",
      },
      { type: "heading", text: "La kombucha en Argentina" },
      {
        type: "paragraph",
        text: "Aunque el mercado argentino todavía es joven en comparación con países como Estados Unidos, Australia o algunas naciones europeas, la categoría ha mostrado un crecimiento sostenido durante los últimos años.",
      },
      {
        type: "paragraph",
        text: "El primer gran impulso se dio en la Ciudad de Buenos Aires, donde surgieron varias marcas especializadas que comenzaron a introducir la kombucha en cafeterías de especialidad, restaurantes, bares y tiendas de alimentos saludables.",
      },
      {
        type: "paragraph",
        text: "Su incorporación a propuestas gastronómicas de distintos estilos permitió que cada vez más personas la descubrieran no solo como una bebida fermentada, sino también como una alternativa con identidad propia dentro de la carta.",
      },
      {
        type: "paragraph",
        text: "Con el tiempo, ese crecimiento comenzó a extenderse al resto del país. Hoy es cada vez más frecuente encontrar kombucha en cafeterías, restaurantes, dietéticas, mercados gastronómicos y tiendas especializadas de distintas provincias, mientras nuevos productores continúan impulsando el desarrollo de una cultura local alrededor de esta bebida.",
      },
      {
        type: "paragraph",
        text: "Ese impulso no es ajeno a lo que ocurre en Neuquén y el Valle, donde la escena gastronómica viene consolidándose de la mano de productores, cocineros y emprendimientos que apuestan por la calidad, la identidad local y los procesos artesanales.",
      },
      {
        type: "paragraph",
        text: "Es en ese contexto donde nace Blüte: con la convicción de desarrollar una kombucha que dialogue con la gastronomía regional, el deporte al aire libre y la forma de vivir la Patagonia.",
      },
      {
        type: "image",
        alt: "Kombucha servida en una copa de vino sobre un banco",
        src: "/blog1B.jpeg",
        width: 733,
        height: 768,
      },
      { type: "heading", text: "Blüte" },
      {
        type: "paragraph",
        text: "En Blüte creemos que la kombucha también puede expresar la identidad del lugar donde se produce. Por eso elegimos desarrollarla en Neuquén, una provincia donde la gastronomía convive con la montaña, los ríos, los viñedos y los deportes al aire libre.",
      },
      {
        type: "paragraph",
        text: "Nuestra inspiración nace de ese entorno. Pensamos la kombucha como una bebida capaz de integrarse naturalmente a una comida, acompañar una tarde de escalada o de esquí, estar presente en un recital, una feria gastronómica o una reunión entre amigos.",
      },
      {
        type: "paragraph",
        text: "Más que seguir una tendencia, buscamos formar parte de una manera de vivir: curiosa, activa y profundamente conectada con el territorio que habitamos.",
      },
      { type: "heading", text: "Mucho más que una bebida" },
      {
        type: "paragraph",
        text: "Más allá de su proceso de elaboración, la kombucha representa el encuentro entre tradición, gastronomía y creatividad.",
      },
      {
        type: "paragraph",
        text: "Su historia milenaria, la complejidad de la fermentación y la posibilidad de crear perfiles de sabor únicos han convertido a esta bebida en una de las expresiones más interesantes dentro del panorama actual de alimentos y bebidas.",
      },
      {
        type: "paragraph",
        text: "Por eso, para muchas personas, descubrir la kombucha no significa únicamente probar algo nuevo, sino también acercarse a una forma distinta de entender lo que consumimos y cómo se produce.",
      },
      {
        type: "paragraph",
        text: "¿Todavía no probaste Blüte? Conocé nuestras variedades y encontrá el punto de venta más cercano o escribinos directamente para saber dónde conseguirla en Neuquén.",
        linkText: "el punto de venta más cercano",
        linkHref: "/#puntos-de-venta",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

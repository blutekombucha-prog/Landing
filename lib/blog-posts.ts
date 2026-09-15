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
    slug: "ningun-cuerpo-se-salva-solo",
    title: "Ningún cuerpo se salva solo",
    metaTitle: "Kombucha: mucho más que una bebida | Blüte Kombucha",
    metaDescription:
      "Descubrí cómo la kombucha conecta fermentación, naturaleza, cultura y comunidad, en un recorrido por su historia y su lugar en el presente.",
    excerpt:
      "Descubrí cómo la kombucha conecta fermentación, naturaleza, cultura y comunidad, en un recorrido por su historia y su lugar en el presente.",
    coverImage: "/portada3.jpeg",
    headerImage: "/portada3.jpeg",
    author: "Justo Aguilar",
    authorBio:
      "Justo Aguilar es, como todo el mundo, una colonia simbiótica: lo habitan la clínica médica, la psicoterapia, la fisiología y una biblioteca heredada de gente que ya no está. Su cepa madre se cultivó en el Hospital Británico de Buenos Aires; hoy sigue madurando en la MIND Foundation de Berlín. Su consulta, en Neuquén y Buenos Aires, trabaja con lo mismo que el frasco: terreno, tiempo, y la confianza de que el organismo sabe. Este texto es lo que esa colonia produce cuando se le ponen las condiciones y se la deja fermentar.",
    content: [
      {
        type: "paragraph",
        text: "En una cocina hay un frasco de vidrio con un líquido turbio y, flotando arriba, un disco pálido, gomoso, de aspecto un poco asqueroso. Quien no sabe qué es siente el impulso de tirarlo. Y si lo hiciera, sería responsable de algo similar al incendio de la biblioteca de Alejandría. Ese disco es un SCOBY: Symbiotic Culture Of Bacteria and Yeast, o en español, una colonia simbiótica de bacterias y levaduras. El nombre en inglés me parece más acorde, porque incluye la palabra cultura. Cultura es un conjunto de conocimientos, creencias, técnicas, costumbres y hábitos que un grupo aprende, comparte y transmite de una generación a la siguiente. No es algo que se transmita por herencia biológica, sino por contacto, de quien sabe a quien todavía no.",
      },
      {
        type: "image",
        alt: "Portada del blog Ningún cuerpo se salva solo",
        src: "/portada3.jpeg",
        width: 1280,
        height: 882,
      },
      {
        type: "paragraph",
        text: "Un SCOBY hace precisamente eso. Cada disco que hoy fermenta fue parte de otro anterior, y ese de otro, en una sucesión que nadie llevó por escrito. Lo que viaja en esa gelatina no es un individuo, sino una comunidad entera con un reparto de tareas ya resuelto: qué levadura rompe el azúcar primero, qué bacteria toma lo que la levadura deja, en qué orden, a qué acidez. Es una técnica codificada en la composición del grupo. Y como toda cultura, se degrada si se la deja de practicar y se enriquece cuando circula.",
      },
      {
        type: "paragraph",
        text: "Cultivo y cultura vienen además del mismo verbo latino, colere, que significa a la vez trabajar la tierra y honrar a los dioses. Mucho antes de nombrar a los libros que leemos, la cultura era lo que se le hacía al suelo para que fuera fértil.",
      },
      {
        type: "paragraph",
        text: "Un frasco de kombucha es las dos cosas al mismo tiempo:",
      },
      {
        type: "paragraph",
        text: "— Una cultura, en el sentido de un saber que se hereda sin genes y sin papeles. Un saber antiguo y lento. Una o dos semanas de primera fermentación, unos días más de segunda. El azúcar tiene que ser comido, el ácido tiene que aparecer, el sabor tiene que asentarse, y ninguno de esos procesos acepta apuro. Se puede formular una gaseosa en una tarde y tenerla en góndola durante meses; una kombucha requiere que alguien espere, todos los días, mirando un frasco donde aparentemente no pasa nada. En una época que eliminó la espera, quien se toma su tiempo está haciendo algo más que una bebida. Algo así hoy es revolucionario por una razón muy simple: casi nadie puede (o quiere) permitírselo.",
      },
      {
        type: "paragraph",
        text: "— Un cultivo, en el mismo sentido en que se cultiva un campo: uno pone las condiciones —té, azúcar, temperatura, paciencia— y después se corre. La fermentación la hacen organismos que se coordinan entre ellos, producen su propio ácido y con ese ácido defienden el frasco de cualquier intruso. El resultado es siempre una co-creación: mitad intención humana, mitad voluntad ajena. El frasco no está a salvo por estar limpio; está a salvo por estar bien habitado.",
      },
      {
        type: "paragraph",
        text: "La medicina en la que me formé no comparte esta última idea. Hay una guerra contra los microorganismos y creemos estar ganándola. La antisepsia, los antibióticos, el agua potable y las vacunas componen probablemente el conjunto de ideas que más vidas salvó en la historia, y nadie que haya visto una sepsis va a relativizar estas implementaciones. El problema vino después de esas batallas ganadas. La guerra funcionó tan bien contra el patógeno que la metáfora se generalizó a todo lo demás: el mate que dejó de compartirse, niños a los que no se los deja ensuciarse, el antibiótico recetado por las dudas. De una victoria puntual hicimos una cosmovisión. Aprendimos a pensar la salud como ausencia de otros, y la limpieza dejó de ser una práctica para volverse una moral.",
      },
      {
        type: "paragraph",
        text: "Y toda moral empieza igual: trazando una línea y repartiendo a los que quedan de cada lado. De este lado nosotros; del otro ellos: los sucios, los que hay que eliminar. La pregunta es dónde pasa esa línea. Porque cuando uno mira el cuerpo de cerca, no pasa por la piel: le declaramos la guerra a la mitad de lo que somos.",
      },
      {
        type: "paragraph",
        text: "Contadas por unidades, las bacterias que llevamos encima superan a nuestras propias células. La cifra más cuidadosa da unos treinta y ocho billones de ellas contra unos treinta billones de las nuestras. Pesan poco —apenas doscientos gramos— y la desproporción entre número y peso se entiende recién cuando uno agranda las cosas.",
      },
      {
        type: "paragraph",
        text: "Agrandemos cuatro mil veces a una bacteria, hasta el tamaño de un grano de arroz. Un glóbulo rojo pasa a ser una ciruela; una célula del hígado, un pomelo; una célula de grasa, una pelota de fútbol. El óvulo, la única célula humana visible a ojo desnudo, una sandía. Una neurona motora, del tamaño de ese mismo pomelo, extiende un axón que a esa escala recorre cuatro kilómetros para llegar al dedo gordo del pie.",
      },
      {
        type: "image",
        alt: "Hojas",
        src: "/hojas3.jpeg",
        width: 1280,
        height: 882,
      },
      {
        type: "paragraph",
        text: "Si volvemos a agrandar todo hasta que cada bacteria tenga el tamaño de una persona, podemos imaginar el aparato digestivo como un mapa argentino. El estómago y el intestino delgado alto son los campos de hielo: la acidez y el tránsito rápido no dejan que nadie se asiente, y se puede caminar horas sin ver un alma. Más abajo, en el íleon, empieza a haber pueblos, alguna ruta, un almacén cada tanto. En la boca hay una ciudad, con barrios tranquilos y conventillos. Y en el colon ninguna comparación alcanza: ni una plaza, ni una vereda, ni un metro libre entre un habitante y el siguiente.",
      },
      {
        type: "paragraph",
        text: "Y eso son solo las bacterias. También hay hongos, y arqueas, que no son ni una cosa ni la otra, sino un tercer dominio. Hay protistas, unicelulares complejos que la medicina trató como parásitos durante décadas y que hoy aparecen asociados a mejores perfiles metabólicos. Hay virus por billones, casi todos bacteriófagos: no nos infectan a nosotros, sino a nuestras bacterias, de modo que nuestros habitantes tienen a su vez habitantes. Y en los folículos de la cara de casi todos los adultos viven ácaros del género Demodex. Animales, con patas. No solo nos habitan microbios: tenemos nuestra propia fauna.",
      },
      {
        type: "paragraph",
        text: "Contra toda esa población fue la guerra. Y en un laboratorio, la ganamos.",
      },
      {
        type: "paragraph",
        text: "Criamos ratones sin un solo microorganismo encima. Cesárea estéril, aislador de presión positiva, aire filtrado, comida y agua irradiadas, manipulación con guantes que nunca tocaron el mundo exterior. De por vida. Se los llama germ-free, y son el sueño de la higiene absoluta, cumplido. Ni un patógeno, ni un comensal, ni una espora. Nadie.",
      },
      {
        type: "paragraph",
        text: "Y viven, incluso más que sus pares, porque nunca se infectan. La victoria parece completa.",
      },
      {
        type: "paragraph",
        text: "Pero hay que mirarlos en detalle. Necesitan un tercio más de comida para sostener el mismo peso, porque no tienen quién fermente lo que ellos no pueden. Las vitaminas que en cualquier otro animal fabrican bacterias, a ellos hay que dárselas aparte. El intestino les crece deforme. El sistema inmune es como un ejército que nunca aprendió a disparar y que, cuando finalmente enfrenta algo, no sabe distinguir entre lo propio y lo ajeno.",
      },
      {
        type: "paragraph",
        text: "Su respuesta al estrés está descalibrada: ante una amenaza liberan mucho más cortisol que un animal normal, y tardan más en volver a la calma. Y en conducta, un ratón germ-free no diferencia a un congénere de un objeto inanimado, no distingue a un conocido de alguien nuevo, se acicala de manera repetitiva y explora sin evaluar el riesgo.",
      },
      {
        type: "paragraph",
        text: "Ahí está el resultado de la guerra ganada: un animal completo en su anatomía, descalibrado en casi todos sus ajustes finos, y que ya no reconoce a otro de su especie.",
      },
      {
        type: "image",
        alt: "Nubes",
        src: "/nubes3.jpeg",
        width: 1280,
        height: 882,
      },
      {
        type: "paragraph",
        text: "Muchas de estas desregulaciones se corrigen colonizando al animal con una sola especie de bacteria. Pero solamente si se lo hace temprano; pasada cierta edad, la misma bacteria ya no arregla nada. Hay una ventana, y después se cierra. Existen además cepas de ratón tímidas y cepas audaces, y esta diferencia históricamente se atribuye a la genética. Sin embargo, cuando se transfiere la microbiota de una cepa tímida a un animal germ-free de la cepa audaz, el receptor se vuelve tímido. Y al revés. El temperamento viaja en la materia fecal más que en los genes. Lo mismo pasa en mellizos humanos discordantes para obesidad —misma casa, casi misma genética, uno gordo y uno flaco—. Cuando se transfiere cada microbiota a ratones estériles, los ratones se empiezan a parecer a su donante.",
      },
      {
        type: "paragraph",
        text: "Entonces la pregunta, que yo no sé contestar y que ya hace unos años me incomoda: ¿cuánto de lo que llamo mi carácter es mío? Mi tolerancia al estrés, mi apetito, mi disposición a acercarme o a alejarme de otros, mis antojos, mi humor, mi energía, mi vitalidad, mi salud. Todo eso depende, en alguna proporción que nadie sabe medir, de una población que no elegí: me llegó del canal de parto, de la leche materna, de la casa y el patio, del barrio y del barro, de lo que comí a los tres años y de las veces que me dieron un antibiótico por las dudas. Ya no es una especulación de sobremesa ni misticismo.",
      },
      {
        type: "paragraph",
        text: "El primer alimento de nuestra vida lo grafica bien. Tiene tres componentes sólidos principales, y el tercero es una familia de más de doscientos azúcares complejos. El bebé no tiene ninguna enzima para digerirlos: pasan enteros por el intestino delgado y llegan al colon intactos. No están puestos ahí para \"el bebé\". Están puestos para algunas bacterias, entre ellas Bifidobacterium infantis, que carga un bloque de genes dedicado exclusivamente a comerlos. Una glándula mamaria y un microorganismo evolucionaron juntos hasta que el alimento de uno lo fabrica el otro.",
      },
      {
        type: "paragraph",
        text: "La reciprocidad va también en la otra dirección. Las células que recubren nuestro colon obtienen alrededor del setenta por ciento de su energía de un ácido graso que fabrican las bacterias fermentando lo que nosotros no podemos digerir. Nuestro genoma codifica muy pocas enzimas capaces de romper vegetales; el genoma colectivo de nuestros habitantes codifica varios miles. Les mandamos lo que no nos sirve y nos devuelven el combustible de nuestras propias células. Y lo mismo pasa con casi todo lo que consideramos humano: digestión, vitaminas, defensas, ánimo. Cada vez que la biología va a mirar de cerca una función de \"nuestro\" cuerpo, encuentra que en algún punto de la cadena trabaja alguien que no lleva nuestro genoma. Esa era la mitad a la que le declaramos la guerra.",
      },
      {
        type: "paragraph",
        text: "Nada de eso lo diseñamos nosotros. Lo que sí hicimos fue encontrarle un uso. Descubrimos que alterando a esa mitad se podía acelerar lo que la naturaleza hacía despacio, y para una cultura que no sabe esperar eso es un hallazgo, no un problema. En 1948, en un laboratorio norteamericano, unos investigadores que probaban suplementos vitamínicos en pollos usaron como fuente los residuos de una fermentación de antibióticos. Los pollos crecieron notablemente más rápido. El efecto era del antibiótico. En 1951 se autorizó su uso en el alimento del ganado, sin receta, y durante más de medio siglo se administraron dosis bajas y continuas a animales sanos con el objeto explícito de que engordaran en menos tiempo comiendo menos. Estados Unidos recién lo prohibió en 2017.",
      },
      {
        type: "paragraph",
        text: "El dato que cierra el argumento se conoce desde los años cincuenta: en animales germ-free, los antibióticos no promueven ningún crecimiento. Sin bacterias, no hay efecto. Sabíamos que alterar la microbiota temprana de un mamífero lo engorda —lo sabíamos tan bien que construimos una industria entera sobre eso— setenta años antes de empezar a preguntarnos qué le pasa a un chico que recibe cinco tandas de antibiótico antes de los dos años. Vale la pena preguntarse por qué ese chico necesitó recibirlos en primera instancia. ¿Es la infección una agresión de un enemigo dedicado a destruirnos? ¿O el resultado de un desequilibrio producido por nosotros mismos?",
      },
      {
        type: "paragraph",
        text: "Sabemos romper el ecosistema, entonces. Pero reponerlo es otra cosa, y ahí la medicina apenas balbucea. Existe un solo procedimiento que funciona de manera contundente: el trasplante de materia fecal. Cuando los antibióticos arrasaron con la microbiota del colon y el sobreviviente más agresivo ocupó el terreno vacío (C. difficile), el trasplante de un donante sano cura a alrededor del ochenta por ciento de los pacientes con una sola aplicación. El ensayo que lo demostró tuvo que suspenderse antes de tiempo porque era antiético seguir dándole el tratamiento estándar (más antibióticos) al grupo control. Es la primera terapia de la historia que no trasplanta un órgano ni administra una molécula: trasplanta un ecosistema. Funciona precisamente porque el antibiótico desequilibró el terreno y lo dejó (casi) vacío: ahí no hay comunidad que reemplazar, sino un desierto que repoblar. Los intentos de trasplantar salud metabólica de donantes delgados a personas con síndrome metabólico (sobrepeso, hipertensión arterial, diabetes), en cambio, dieron mejoras que se desvanecían en semanas. Y el motivo es menos técnico de lo que parece: lo que no se puede trasplantar son las condiciones, los hábitos. La persona recibe una colonia nueva y sigue viviendo como vivía. Con lo que ingiere cada día vuelve a seleccionar, sin proponérselo, a los mismos de antes.",
      },
      {
        type: "image",
        alt: "Flor",
        src: "/flor3.jpeg",
        width: 1280,
        height: 882,
      },
      {
        type: "paragraph",
        text: "El trasplante es la versión hospitalaria de un movimiento mucho más viejo: mudar una comunidad viva de un lugar a otro. Eso la humanidad lo viene haciendo hace milenios. Fermentamos desde hace ocho mil años; las bacterias las descubrimos anteayer. Y hay algo hermoso en cómo esta tradición particular atravesó el tiempo: sin archivo. El origen de la kombucha se pierde en algún punto del Asia continental y ningún documento lo fija. Una práctica que se transmite entregando materia viva de mano en mano (o de recipiente en recipiente) no deja papeles. El disco que flota en los frascos de Blüte desciende físicamente, por división ininterrumpida, de otro disco anterior, y ese de otro, en una cadena que nadie escribió y que sin embargo llegó intacta hasta una cocina de Neuquén. Su archivo es el organismo. Es, en el sentido más literal de la palabra, cultura.",
      },
      {
        type: "paragraph",
        text: "Tagore escribió, discutiendo con Gandhi sobre si la India podía independizarse de Inglaterra mediante la separación y el cese de la cooperación: \"Ningún pueblo puede hallar su salud separándose de los otros. O salvarse juntos o desaparecer juntos.\" Hablaba de pueblos, y nosotros llevamos varios adentro.",
      },
      {
        type: "paragraph",
        text: "Y por si quedaba alguna duda sobre hasta dónde llega el asunto: aun sin nada vivo más que ellas, \"nuestras\" células no están solas. Cada una de ellas tiene cientos o miles de mitocondrias, que fueron bacterias libres hasta que hace dos mil millones de años entraron en una célula ancestral y se quedaron a vivir. Respiramos (entre otras cosas) gracias a ellas. No es que convivamos con bacterias: estamos hechos, en parte, de las que decidieron quedarse.",
      },
      {
        type: "paragraph",
        text: "Nada se salva solo. Ni un pueblo, ni un cuerpo, ni una bebida.",
        bold: true,
      },
    ],
  },
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

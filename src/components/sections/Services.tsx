import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Crosshair, Mountain, Plane, Camera, TreePine, FileCheck,
  Home, Briefcase, MoreHorizontal, ArrowRight, X, ChevronDown,
  MapPin, FileText, Layers, PenTool, Shield, Landmark,
  BarChart2, Truck,
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import SectionBadge from '@/components/ui/SectionBadge'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FaqItem { q: string; a: string }

interface ServiceData {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
  color: string
  iconBg: string
  featured?: boolean
  image: string
  longDescription: string
  faq: FaqItem[]
}

// ─── Main services ────────────────────────────────────────────────────────────

const services: ServiceData[] = [
  {
    icon: <Crosshair size={22} />,
    title: 'Georreferenciamento',
    description: 'Demarcação precisa de imóveis urbanos e rurais com tecnologia GNSS e conformidade ao INCRA.',
    tags: ['Urbano', 'Rural', 'INCRA'],
    color: 'from-primary-500/20 to-primary-600/5',
    iconBg: 'bg-primary-500/15 text-primary-500',
    featured: true,
    image: '/images/services/georeferenciamento.webp',
    longDescription:
      'O georreferenciamento é o processo de determinar, com precisão geodésica, os limites e a localização de um imóvel no espaço geográfico. Utilizando receptores GNSS de alta precisão e metodologia INCRA, identificamos e demarcamos todos os vértices do imóvel, gerando o memorial descritivo georreferenciado exigido pelo Cartório de Registro de Imóveis.\n\nAtendemos tanto imóveis urbanos quanto rurais, com laudos assinados por engenheiro ou agrimensor habilitado no CREA, garantindo conformidade com as normas técnicas do INCRA (NBR 13.133 e Norma Técnica para Georreferenciamento de Imóveis Rurais).',
    faq: [
      {
        q: 'Qual a diferença entre georreferenciamento urbano e rural?',
        a: 'O georreferenciamento rural segue as normas do INCRA e é obrigatório para imóveis acima de determinadas áreas para transferência de propriedade. O urbano segue as normas do município e do cartório, sendo necessário em processos de desmembramento, remembramento e regularização.',
      },
      {
        q: 'Quais documentos são necessários para iniciar o serviço?',
        a: 'São necessários: matrícula atualizada do imóvel (máximo 30 dias), documentos pessoais do proprietário (CPF/CNPJ e RG), planta ou croqui da área (se disponível) e escritura ou contrato de compra e venda.',
      },
      {
        q: 'Quanto tempo leva para concluir o georreferenciamento?',
        a: 'O levantamento de campo geralmente é realizado em 1 a 3 dias. O processamento, elaboração do memorial descritivo e entrega dos arquivos certificados levam de 7 a 15 dias úteis, dependendo da complexidade e da área do imóvel.',
      },
      {
        q: 'O georreferenciamento é obrigatório para vender meu imóvel rural?',
        a: 'Sim. A partir da Lei 10.267/2001, todos os imóveis rurais precisam ser georreferenciados para que ocorra qualquer transferência de domínio (venda, doação, herança). O cronograma de obrigatoriedade varia por tamanho do imóvel e já abrange todas as áreas acima de 1 hectare.',
      },
    ],
  },
  {
    icon: <Mountain size={22} />,
    title: 'Levantamento Topográfico',
    description: 'Levantamentos planialtimétricos de alta precisão para projetos de engenharia e arquitetura.',
    tags: ['Planimetria', 'Altimetria'],
    color: 'from-teal-500/20 to-teal-600/5',
    iconBg: 'bg-teal-500/15 text-teal-500',
    image: '/images/services/levantamento-topografico.webp',
    longDescription:
      'O levantamento topográfico é a base de qualquer projeto de engenharia, arquitetura e urbanismo. Nossa equipe realiza levantamentos planialtimétricos de alta precisão, mapeando detalhes físicos do terreno como cotas, curvas de nível, edificações, arborização, redes de infraestrutura e divisas.\n\nUtilizamos estações totais robotizadas, receptores GNSS RTK e drones para garantir máxima eficiência no campo. Os dados são processados e entregues em formatos compatíveis com AutoCAD, Civil 3D, Revit e outros softwares de projeto.',
    faq: [
      {
        q: 'Qual a diferença entre levantamento planimétrico e planialtimétrico?',
        a: 'O levantamento planimétrico registra apenas as posições horizontais dos elementos (limites, edificações, vias). O planialtimétrico inclui também as altitudes, gerando curvas de nível essenciais para projetos de terraplenagem, drenagem e paisagismo.',
      },
      {
        q: 'Em quais formatos os arquivos são entregues?',
        a: 'Entregamos em DWG (AutoCAD), PDF e KMZ/KML. Sob demanda, também fornecemos arquivos DXF, SHP (shapefile) e IFC, além de relatório técnico assinado pelo responsável.',
      },
      {
        q: 'É possível realizar levantamento em área urbana com muito tráfego?',
        a: 'Sim. Utilizamos equipamentos com alcance e velocidade que permitem trabalhar em ambientes urbanos movimentados. Em casos específicos, agendamos o levantamento em horários de menor fluxo para garantir a precisão e a segurança da equipe.',
      },
      {
        q: 'O levantamento topográfico serve como base para aprovação na prefeitura?',
        a: 'Sim, desde que siga as normas municipais e seja assinado por profissional habilitado no CREA. Verificamos previamente as exigências específicas do município para garantir que o produto entregue esteja em conformidade com o que é solicitado pelos órgãos competentes.',
      },
    ],
  },
  {
    icon: <Plane size={22} />,
    title: 'Aerolevantamento',
    description: 'Mapeamento aéreo com aeronaves e drones para grandes extensões de terra com alta resolução.',
    tags: ['Fotogrametria', 'LiDAR'],
    color: 'from-primary-400/15 to-teal-500/5',
    iconBg: 'bg-primary-400/15 text-primary-400',
    image: '/images/services/aerolevantamento.webp',
    longDescription:
      'O aerolevantamento combina aeronaves tripuladas ou remotamente pilotadas (drones) com sensores de alta resolução para mapear grandes extensões de terra com eficiência e precisão. Utilizamos câmeras fotogramétricas, sensores multiespectrais e sistemas LiDAR para capturar dados que seriam inviáveis com métodos terrestres.\n\nAs aplicações vão desde o mapeamento de fazendas e reservatórios até o monitoramento de obras lineares como rodovias e ferrovias. Os produtos gerados — ortomosaicos, modelos digitais de terreno e nuvens de pontos — são de alta qualidade e compatíveis com os principais softwares GIS e CAD.',
    faq: [
      {
        q: 'Qual é a precisão obtida no aerolevantamento?',
        a: 'Com o uso de pontos de controle (GCPs) e receptores GNSS RTK, atingimos precisão planimétrica de 2 a 5 cm e altimétrica de 3 a 8 cm, dependendo da altura de voo e das condições do terreno.',
      },
      {
        q: 'É necessária autorização para realizar o voo?',
        a: 'Sim. Gerenciamos todo o processo junto à ANAC e ao DECEA, obtendo as autorizações de voo necessárias, inclusive em áreas de restrição ou proximidade de aeródromos.',
      },
      {
        q: 'O aerolevantamento substitui o levantamento topográfico terrestre?',
        a: 'Em muitos casos, sim. Para grandes áreas (acima de 5 ha), o aerolevantamento é mais eficiente e econômico. Para áreas menores ou com obstáculos densos (vegetação fechada), o levantamento terrestre pode complementar ou substituir.',
      },
      {
        q: 'Quais condições climáticas impedem o voo?',
        a: 'Ventos acima de 10 m/s, chuva, neblina densa e nuvens baixas inviabilizam o voo. Monitoramos as condições meteorológicas antes de cada missão e reagendamos sem custo adicional em caso de impedimento climático.',
      },
    ],
  },
  {
    icon: <Camera size={22} />,
    title: 'Mapeamento com Drone',
    description: 'Ortofotos, modelos 3D e nuvem de pontos para análise detalhada do terreno e estruturas.',
    tags: ['Ortofoto', 'MDT', '3D'],
    color: 'from-teal-400/15 to-primary-500/5',
    iconBg: 'bg-teal-400/15 text-teal-400',
    featured: true,
    image: '/images/services/mapeamento-drone.webp',
    longDescription:
      'O mapeamento com drone (VANT) é a solução mais versátil para projetos que exigem dados geoespaciais detalhados em prazos curtos. Com voos programados e controlados, geramos ortomosaicos de alta resolução, modelos digitais de superfície (MDS), modelos digitais de terreno (MDT) e nuvens de pontos 3D densas.\n\nNossas missões cobrem desde pequenos lotes urbanos até grandes propriedades rurais e obras de infraestrutura. Os dados são processados com softwares como Agisoft Metashape e Pix4D, garantindo produtos de qualidade profissional entregues em formato compatível com AutoCAD, ArcGIS e QGIS.',
    faq: [
      {
        q: 'Qual a diferença entre ortofoto e foto aérea comum?',
        a: 'A ortofoto é uma imagem aérea corrigida geometricamente, sem distorções de perspectiva. Isso permite medir distâncias e áreas diretamente na imagem com precisão cartográfica, ao contrário de uma foto comum.',
      },
      {
        q: 'O modelo 3D pode ser usado em projetos de engenharia?',
        a: 'Sim. A nuvem de pontos e o modelo 3D gerados pelo drone podem ser importados em softwares como AutoCAD Civil 3D, Revit e BIM 360 para uso em projetos de terraplenagem, volumetria, modelagem estrutural e planejamento de obras.',
      },
      {
        q: 'É possível mapear o interior de edificações com drone?',
        a: 'Para interiores, utilizamos drones específicos para ambientes fechados (indoor), com sensores de evasão de obstáculos. É possível gerar modelos 3D de galpões, silos, pontes e estruturas similares.',
      },
      {
        q: 'Com que frequência posso solicitar o monitoramento de uma mesma área?',
        a: 'O monitoramento pode ser feito na frequência que o projeto exigir — semanal, quinzenal, mensal ou por etapas de obra. Oferecemos contratos de monitoramento periódico com custo reduzido em relação a solicitações avulsas.',
      },
    ],
  },
  {
    icon: <TreePine size={22} />,
    title: 'Monitoramento Ambiental',
    description: 'Monitoramento contínuo de áreas de preservação, APP, reservas legais e remanescentes florestais.',
    tags: ['APP', 'Reserva Legal'],
    color: 'from-primary-600/15 to-teal-400/5',
    iconBg: 'bg-primary-600/15 text-primary-600',
    image: '/images/services/monitoramento-ambiental.webp',
    longDescription:
      'O monitoramento ambiental é fundamental para o cumprimento das obrigações legais de empresas, produtores rurais e órgãos públicos. Utilizando imagens de satélite, dados de sensoriamento remoto e vistorias de campo, acompanhamos a evolução de Áreas de Preservação Permanente (APP), Reservas Legais, áreas embargadas e passivos ambientais.\n\nGerarmos relatórios técnicos periódicos com análise comparativa, indicadores de cobertura vegetal e recomendações para adequação ambiental, com validade para apresentação a órgãos como IBAMA, IAT e Ministério Público.',
    faq: [
      {
        q: 'O monitoramento ambiental é obrigatório para minha propriedade rural?',
        a: 'Propriedades com Termo de Compromisso Ambiental (TCA), Termo de Ajustamento de Conduta (TAC) ou condicionantes de licença ambiental geralmente possuem obrigação de monitoramento periódico. Verificamos sua situação antes de iniciar o serviço.',
      },
      {
        q: 'Quais indicadores são avaliados no monitoramento?',
        a: 'Avaliamos cobertura vegetal nativa, evolução de desmatamento ou regeneração, estado das APP e Reservas Legais, presença de corpos hídricos e alterações de uso do solo. Os indicadores são customizados conforme a necessidade do cliente.',
      },
      {
        q: 'Com qual frequência deve ser realizado o monitoramento?',
        a: 'Depende da obrigação legal ou contratual. Monitoramentos vinculados a licenças ambientais costumam ser semestrais ou anuais. Para propriedades em processo de recuperação, recomendamos avaliações mais frequentes (trimestrais) para ajuste das ações de restauração.',
      },
      {
        q: 'O relatório de monitoramento tem validade jurídica?',
        a: 'Sim. Nossos relatórios são elaborados por profissionais habilitados (biólogos, engenheiros ambientais e florestais) e acompanhados da respectiva ART/TRT, conferindo validade técnica e jurídica para uso perante os órgãos ambientais.',
      },
    ],
  },
  {
    icon: <FileCheck size={22} />,
    title: 'Licenciamento Ambiental',
    description: 'Elaboração de estudos ambientais e condução de processos junto aos órgãos licenciadores.',
    tags: ['EIA', 'RIMA', 'RAP'],
    color: 'from-teal-600/15 to-primary-400/5',
    iconBg: 'bg-teal-600/15 text-teal-400',
    image: '/images/services/licenciamento-ambiental.webp',
    longDescription:
      'O licenciamento ambiental é etapa obrigatória para a implantação de empreendimentos com potencial de impacto ao meio ambiente. Nossa equipe conduz o processo completo: desde o diagnóstico da área e definição da modalidade de licença (LP, LI, LO) até a elaboração dos estudos ambientais exigidos e o acompanhamento perante os órgãos licenciadores estaduais (IAT, CETESB, SEMAD) e federal (IBAMA).\n\nElaboramos EIA/RIMA, RAS, RAP, PCA, PRAD e todos os demais estudos técnicos necessários, com equipe multidisciplinar e experiência em empreendimentos dos setores agrícola, industrial, energético e de infraestrutura.',
    faq: [
      {
        q: 'Quais empreendimentos precisam de licença ambiental?',
        a: 'Atividades potencialmente poluidoras ou que causem degradação ambiental precisam de licença. Isso inclui indústrias, usinas, irrigação de grande porte, parcelamento do solo, extração mineral, obras de saneamento, entre outras. A lista completa está na Resolução CONAMA 237/97 e nas legislações estaduais.',
      },
      {
        q: 'Qual a diferença entre LP, LI e LO?',
        a: 'A Licença Prévia (LP) aprova a localização e concepção do projeto. A Licença de Instalação (LI) autoriza o início das obras. A Licença de Operação (LO) autoriza o funcionamento do empreendimento após a implantação. As três fases são sequenciais e obrigatórias na maioria dos casos.',
      },
      {
        q: 'Quanto tempo leva para obter uma licença ambiental?',
        a: 'Depende do porte do empreendimento, do órgão licenciador e da complexidade dos estudos. Processos simplificados (RAP/RAS) podem ser concluídos em 3 a 6 meses. Processos com EIA/RIMA costumam levar de 1 a 3 anos.',
      },
      {
        q: 'A empresa pode operar sem licença ambiental?',
        a: 'Não. A operação sem licença ambiental é infração sujeita a multa, embargo, suspensão das atividades e responsabilidade civil e penal dos gestores. Regularizamos a situação de empreendimentos em operação irregular com o menor impacto possível no cronograma.',
      },
    ],
  },
  {
    icon: <Home size={22} />,
    title: 'Regularização Fundiária',
    description: 'Regularização de imóveis rurais e urbanos, REURB e processos junto a cartórios e prefeituras.',
    tags: ['REURB', 'Cartório'],
    color: 'from-primary-500/15 to-teal-600/5',
    iconBg: 'bg-primary-500/15 text-primary-500',
    image: '/images/services/regularizacao-fundiaria.webp',
    longDescription:
      'A regularização fundiária é o conjunto de medidas jurídicas, urbanísticas, ambientais e sociais para incorporar imóveis informais ao tecido urbano ou rural legal. Atuamos tanto na Regularização Fundiária Urbana (REURB-E e REURB-S, Lei 13.465/2017) quanto na regularização de imóveis rurais junto ao INCRA e cartórios.\n\nConduzimos todo o processo: levantamento topográfico, elaboração de planta e memorial descritivo, obtenção de certidões, protocolo junto à prefeitura ou INCRA e acompanhamento no cartório de registro de imóveis até o registro da nova matrícula.',
    faq: [
      {
        q: 'O que é REURB-S e REURB-E?',
        a: 'A REURB-S (Social) é destinada a populações de baixa renda, com custas e taxas reduzidas ou isentas. A REURB-E (Específica) se aplica às demais situações. Ambas seguem a Lei 13.465/2017 e permitem regularizar assentamentos informais em áreas urbanas.',
      },
      {
        q: 'Qual a documentação mínima para regularizar um imóvel?',
        a: 'Depende da situação, mas em geral são necessários: documentos do proprietário, comprovante de posse ou contrato, planta e memorial descritivo do imóvel e certidão de matrícula ou histórico de domínio. Realizamos diagnóstico documental gratuito antes de iniciar o processo.',
      },
      {
        q: 'Imóveis em área de APP podem ser regularizados?',
        a: 'Em casos de REURB-S, a legislação permite a flexibilização de algumas normas ambientais, inclusive a regularização de edificações em faixas de APP, desde que cumpridas as condições legais e compensações ambientais previstas.',
      },
      {
        q: 'Quanto custa a regularização fundiária?',
        a: 'Os custos variam conforme a complexidade, a área e a modalidade. Incluem honorários técnicos, emolumentos cartoriais, taxas municipais e ART/RRT. Fornecemos orçamento detalhado após análise da documentação e vistoria inicial.',
      },
    ],
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Consultoria Especializada',
    description: 'Apoio técnico e estratégico para projetos que envolvam geotecnologia, planejamento e gestão territorial.',
    tags: ['Gestão', 'Planejamento'],
    color: 'from-teal-500/15 to-primary-600/5',
    iconBg: 'bg-teal-500/15 text-teal-500',
    image: '/images/services/consultoria-especializada.webp',
    longDescription:
      'Nossa consultoria especializada oferece suporte técnico e estratégico para empresas, prefeituras, cooperativas e produtores rurais que necessitam de orientação em projetos de geotecnologia, gestão territorial e conformidade ambiental.\n\nAtuamos desde a definição do escopo e escolha das melhores tecnologias até a supervisão de execução e análise de resultados. Também prestamos assessoria em processos de due diligence imobiliária, estruturação de equipes técnicas e capacitação de colaboradores.',
    faq: [
      {
        q: 'Em quais setores a consultoria pode atuar?',
        a: 'Atendemos agronegócio, construção civil, energia (solar, eólica, transmissão), mineração, prefeituras e órgãos públicos, saneamento, infraestrutura de transportes e mercado imobiliário.',
      },
      {
        q: 'A consultoria pode ser contratada por projeto ou por demanda contínua?',
        a: 'Sim. Oferecemos contratos pontuais (por projeto ou escopo definido) e contratos de retainer mensal para suporte contínuo, com banco de horas e atendimento prioritário.',
      },
      {
        q: 'Vocês auxiliam na seleção e compra de equipamentos e softwares?',
        a: 'Sim. Auxiliamos na análise de necessidades, comparação de soluções, negociação com fornecedores e implantação de sistemas GIS, CAD e plataformas de gestão territorial, além de treinamento da equipe interna.',
      },
      {
        q: 'A consultoria pode ser feita de forma remota?',
        a: 'Sim. A maior parte das atividades consultivas pode ser realizada remotamente. Visitas técnicas presenciais são realizadas quando necessário, principalmente para vistoria de áreas ou reuniões estratégicas com equipes.',
      },
    ],
  },
]

// ─── Outros services ──────────────────────────────────────────────────────────

interface OutroServiceData {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
  iconBg: string
  image: string
  longDescription: string
  faq: FaqItem[]
}

const outrosServices: OutroServiceData[] = [
  {
    icon: <FileText size={22} />,
    title: 'Retificação de Matrícula',
    description: 'Correção de dados cadastrais e dimensionais de imóveis junto ao cartório de registro de imóveis.',
    tags: ['Cartório', 'Matrícula'],
    iconBg: 'bg-primary-500/15 text-primary-500',
    image: '/images/services/reticacao-matricula.webp',
    longDescription:
      'A retificação de matrícula corrige divergências entre as medidas e confrontações registradas no Cartório de Registro de Imóveis e as medidas reais do imóvel apuradas em levantamento técnico. É um procedimento necessário quando o imóvel possui dados incorretos ou desatualizados que impedem negociações ou financiamentos.\n\nConduzimos o processo completo: levantamento topográfico de precisão, elaboração do memorial descritivo retificador, notificação de confrontantes e protocolo junto ao cartório, com acompanhamento até o registro da matrícula corrigida.',
    faq: [
      {
        q: 'Quando é necessário retificar uma matrícula?',
        a: 'Quando há divergência entre as medidas registradas e as medidas reais do imóvel, quando os confrontantes ou limites estão desatualizados, ou quando se deseja adequar a matrícula às normas atuais para operações imobiliárias.',
      },
      {
        q: 'Qual a diferença entre retificação administrativa e judicial?',
        a: 'A retificação administrativa é feita diretamente no cartório, sem necessidade de ação judicial, quando não há impugnação de confrontantes. A judicial é necessária quando há litígio ou discordância de algum confrontante.',
      },
      {
        q: 'Os vizinhos precisam assinar a retificação?',
        a: 'Os confrontantes são notificados e têm prazo para manifestação. Se não houver impugnação, o cartório procede com a retificação. Em caso de impugnação, o processo pode ser convertido em via judicial.',
      },
    ],
  },
  {
    icon: <Layers size={22} />,
    title: 'Desmembramentos e Remembramentos',
    description: 'Divisão ou unificação de matrículas com elaboração de memorial descritivo e planta topográfica.',
    tags: ['Desmembramento', 'Remembramento'],
    iconBg: 'bg-teal-500/15 text-teal-500',
    image: '/images/services/desmembramentos.webp',
    longDescription:
      'O desmembramento é a divisão de um imóvel em duas ou mais partes, cada uma com matrícula independente. O remembramento é o processo inverso: a unificação de imóveis contíguos em uma única matrícula. Ambos os processos exigem levantamento topográfico, aprovação municipal (para imóveis urbanos) ou anuência do INCRA (para rurais) e registro em cartório.\n\nRealizamos o levantamento de campo, elaboramos a planta e memorial descritivo, conduzimos o processo de aprovação e acompanhamos o registro das novas matrículas.',
    faq: [
      {
        q: 'É possível desmembrar qualquer imóvel?',
        a: 'Não. O desmembramento deve respeitar as dimensões mínimas de lote previstas pela legislação municipal (urbano) ou pelo INCRA (rural — módulo fiscal). É necessário verificar a viabilidade antes de iniciar o processo.',
      },
      {
        q: 'O remembramento exige anuência de todos os proprietários?',
        a: 'Sim. Quando os imóveis possuem proprietários distintos, todos devem concordar e assinar os documentos necessários para a unificação das matrículas.',
      },
      {
        q: 'Quanto tempo leva o processo de desmembramento urbano?',
        a: 'Após a aprovação municipal (que varia de 30 a 90 dias conforme o município) e o registro em cartório, o processo total costuma levar de 2 a 5 meses.',
      },
    ],
  },
  {
    icon: <MapPin size={22} />,
    title: 'Aprovação de Loteamentos',
    description: 'Projetos de parcelamento do solo com aprovação junto à prefeitura e cartório.',
    tags: ['Loteamento', 'Parcelamento'],
    iconBg: 'bg-primary-400/15 text-primary-400',
    image: '/images/services/aprovacao-loteamentos.webp',
    longDescription:
      'A aprovação de loteamento envolve a elaboração do projeto urbanístico, o atendimento às diretrizes municipais e ambientais e a condução de todo o processo junto à prefeitura e ao cartório de registro de imóveis. É um processo multidisciplinar que exige coordenação entre topografia, urbanismo, infraestrutura e direito imobiliário.\n\nAtuamos em todas as etapas: levantamento topográfico, projeto de parcelamento, aprovação municipal, licenciamento ambiental, registro do loteamento e implantação da infraestrutura de acordo com o cronograma aprovado.',
    faq: [
      {
        q: 'Quais são as etapas para aprovar um loteamento?',
        a: 'As principais etapas são: obtenção de diretrizes municipais, levantamento topográfico, elaboração do projeto de loteamento, aprovação na prefeitura (urbanismo, obras e meio ambiente), licenciamento ambiental, registro em cartório e implantação de infraestrutura.',
      },
      {
        q: 'Qual o percentual mínimo de áreas públicas em um loteamento?',
        a: 'A Lei 6.766/79 exige que pelo menos 35% da área total seja destinada a uso público (sistema viário, áreas verdes e equipamentos comunitários). Municípios podem exigir percentuais maiores.',
      },
      {
        q: 'É possível aprovar loteamento em área rural?',
        a: 'Sim, desde que a gleba esteja na zona de expansão urbana ou rural com previsão de urbanização no plano diretor. Pode ser necessária a prévia anuência do INCRA e mudança de uso do solo.',
      },
    ],
  },
  {
    icon: <Home size={22} />,
    title: 'REURB-E / REURB-S',
    description: 'Regularização fundiária urbana de interesse específico ou social, em conformidade com a Lei 13.465/2017.',
    tags: ['REURB', 'Social', 'Específica'],
    iconBg: 'bg-primary-500/15 text-primary-500',
    image: '/images/services/reurb.webp',
    longDescription:
      'A Regularização Fundiária Urbana (REURB), instituída pela Lei 13.465/2017, é o instrumento para legalizar núcleos urbanos informais. A REURB-S é destinada a ocupações de baixa renda, com custas reduzidas ou isentas. A REURB-E se aplica às demais situações.\n\nO processo envolve levantamento das unidades, elaboração do projeto urbanístico simplificado, CRF (Certidão de Regularização Fundiária), aprovação municipal e registro em cartório. Atuamos em todo o processo técnico, desde o diagnóstico até o registro das matrículas individuais.',
    faq: [
      {
        q: 'Quem pode requerer a REURB?',
        a: 'A REURB pode ser requerida pelo município, pelos beneficiários, por entidades de classe, associações de moradores ou proprietários da área. O município também pode instaurar de ofício.',
      },
      {
        q: 'A REURB garante a titulação dos moradores?',
        a: 'Sim. Após o registro da REURB no cartório, cada ocupante pode obter o título de legitimação fundiária ou a escritura de compra e venda, garantindo a propriedade legal do imóvel.',
      },
      {
        q: 'Imóveis em área de risco podem ser regularizados?',
        a: 'Não. Imóveis em áreas de risco não consolidável não podem ser regularizados e devem ser relocados. A REURB exige laudo de análise de risco para todas as áreas envolvidas.',
      },
    ],
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Análise de Viabilidade para Loteamentos',
    description: 'Estudo técnico de aptidão do terreno para parcelamento, considerando legislação urbanística e ambiental.',
    tags: ['Viabilidade', 'Urbanístico'],
    iconBg: 'bg-teal-500/15 text-teal-500',
    image: '/images/services/analise-viabilidade.webp',
    longDescription:
      'Antes de investir em um projeto de loteamento, é essencial avaliar a viabilidade técnica, urbanística e ambiental da gleba. Nossa análise de viabilidade identifica potencialidades e restrições do imóvel: zoneamento municipal, índices urbanísticos, áreas de preservação permanente, declividade, geotécnica, disponibilidade de infraestrutura e mercado imobiliário local.\n\nEntregamos relatório técnico completo com estimativa de aproveitamento, número máximo de lotes, áreas obrigatórias e recomendações para o projeto, subsidiando a tomada de decisão do incorporador.',
    faq: [
      {
        q: 'Quando devo contratar a análise de viabilidade?',
        a: 'Antes de assinar qualquer contrato de compra do terreno ou comprometer recursos no projeto. A análise de viabilidade pode revelar restrições que inviabilizam ou reduzem significativamente o aproveitamento da gleba.',
      },
      {
        q: 'Quanto tempo leva a análise?',
        a: 'A análise preliminar (documental e de geoprocessamento) leva de 5 a 10 dias úteis. A análise completa com vistoria de campo pode levar de 15 a 20 dias úteis.',
      },
      {
        q: 'A análise de viabilidade garante a aprovação do loteamento?',
        a: 'Não. A análise indica o potencial e os riscos, mas a aprovação depende de decisão dos órgãos competentes. No entanto, ela minimiza significativamente o risco de reprovação ao identificar antecipadamente as exigências.',
      },
    ],
  },
  {
    icon: <Landmark size={22} />,
    title: 'Licenciamento Urbanístico',
    description: 'Condução de processos de aprovação de projetos urbanísticos junto aos órgãos municipais.',
    tags: ['Urbanístico', 'Prefeitura'],
    iconBg: 'bg-primary-600/15 text-primary-600',
    image: '/images/services/licenciamento-urbanistico.webp',
    longDescription:
      'O licenciamento urbanístico é o processo de aprovação de projetos de parcelamento, desmembramento, condomínio, remembramento e uso do solo junto aos órgãos municipais. Gerenciamos toda a documentação e o relacionamento com as secretarias de urbanismo, obras, meio ambiente e cartório.\n\nNossa equipe conhece a legislação de diversas cidades da região e mantém relacionamento ativo com as equipes técnicas das prefeituras, agilizando o processo e antecipando eventuais exigências.',
    faq: [
      {
        q: 'Quais projetos precisam de licenciamento urbanístico?',
        a: 'Parcelamentos do solo (loteamentos e desmembramentos), condomínios horizontais e verticais, conjuntos habitacionais, regularização de edificações e projetos de uso especial precisam de aprovação urbanística municipal.',
      },
      {
        q: 'Vocês atuam em quais municípios?',
        a: 'Atendemos principalmente municípios do norte do Paraná, com foco em Londrina e região. Para outros municípios, realizamos análise prévia da legislação e viabilidade de atendimento.',
      },
      {
        q: 'É possível aprovar um projeto em área sem infraestrutura completa?',
        a: 'Depende das exigências municipais. Em muitos casos, é possível obter alvará condicionado à implantação da infraestrutura, com prazo definido em contrato de obras e garantias junto à prefeitura.',
      },
    ],
  },
  {
    icon: <PenTool size={22} />,
    title: 'Projetos de Infraestrutura',
    description: 'Projetos de drenagem, pavimentação e saneamento integrados ao planejamento urbano.',
    tags: ['Drenagem', 'Pavimentação', 'Saneamento'],
    iconBg: 'bg-teal-400/15 text-teal-400',
    image: '/images/services/projetos-infraestrutura.webp',
    longDescription:
      'Os projetos de infraestrutura são exigidos na aprovação de loteamentos e regularizações fundiárias. Desenvolvemos projetos de sistema viário, drenagem pluvial, pavimentação, abastecimento de água, esgotamento sanitário e iluminação pública, compatibilizados com o projeto urbanístico e as normas da concessionária local.\n\nEntregamos projetos em AutoCAD com memorial descritivo, planilha orçamentária e especificações técnicas, prontos para aprovação nas concessionárias e prefeituras.',
    faq: [
      {
        q: 'Os projetos de infraestrutura são obrigatórios em loteamentos?',
        a: 'Sim. A Lei 6.766/79 exige que o loteador execute as obras de infraestrutura básica (vias, drenagem, esgoto ou fossa, energia e iluminação) antes de registrar e comercializar os lotes.',
      },
      {
        q: 'O projeto de infraestrutura precisa ser aprovado nas concessionárias?',
        a: 'Sim. Os projetos de água e esgoto precisam de aprovação da Sanepar (ou concessionária local), o de energia na COPEL (ou distribuidora local) e o de drenagem na prefeitura.',
      },
      {
        q: 'Vocês também executam as obras ou apenas projetam?',
        a: 'Nossa atuação é técnica (projetos e fiscalização). Para execução, podemos indicar construtoras parceiras e fazer a supervisão técnica da obra, garantindo conformidade com o projeto aprovado.',
      },
    ],
  },
  {
    icon: <Shield size={22} />,
    title: 'Uso e Cobertura do Solo',
    description: 'Mapeamento e classificação do uso do solo com imagens de satélite e análise geoespacial.',
    tags: ['Sensoriamento', 'GIS'],
    iconBg: 'bg-primary-400/15 text-primary-400',
    image: '/images/services/uso-cobertura-solo.webp',
    longDescription:
      'O mapeamento de uso e cobertura do solo é essencial para planejamento ambiental, gestão de propriedades rurais e tomada de decisão em políticas públicas. Utilizamos imagens de satélite de alta resolução (Sentinel, Planet, CBERS) e técnicas de classificação supervisionada e não supervisionada para identificar e quantificar as classes de uso: agricultura, pastagem, floresta, solo exposto, corpos hídricos e área urbana.\n\nOs produtos entregues incluem mapas temáticos georreferenciados, relatório estatístico por classe e shapefile para uso em GIS, com periodicidade conforme necessidade do cliente.',
    faq: [
      {
        q: 'Qual a resolução das imagens utilizadas?',
        a: 'Trabalhamos com imagens de 3 m a 30 m de resolução espacial, dependendo da escala de trabalho e do orçamento disponível. Para análises mais detalhadas, utilizamos imagens de 0,5 m obtidas por drone.',
      },
      {
        q: 'O mapeamento de uso do solo é necessário para o CAR?',
        a: 'Sim. O Cadastro Ambiental Rural (CAR) exige a delimitação das classes de uso e cobertura do solo na propriedade, incluindo vegetação nativa, APP, Reserva Legal e áreas de uso consolidado.',
      },
      {
        q: 'É possível analisar mudanças ao longo do tempo?',
        a: 'Sim. Realizamos análises multitemporais comparando imagens de diferentes datas para identificar desmatamento, expansão agrícola, urbanização ou recuperação de vegetação.',
      },
    ],
  },
  {
    icon: <TreePine size={22} />,
    title: 'Cadastro Ambiental Rural (CAR)',
    description: 'Elaboração e atualização do CAR com delimitação de APP, reserva legal e áreas de uso consolidado.',
    tags: ['CAR', 'SICAR', 'APP'],
    iconBg: 'bg-primary-600/15 text-primary-600',
    image: '/images/services/car-rural.webp',
    longDescription:
      'O Cadastro Ambiental Rural (CAR) é obrigação legal de todos os imóveis rurais no Brasil, prevista no Código Florestal (Lei 12.651/2012). Realizamos o cadastramento completo no SICAR, delimitando com precisão as Áreas de Preservação Permanente (APP), Reserva Legal, vegetação nativa, áreas de uso consolidado e nascentes.\n\nTambém realizamos a análise de conformidade do CAR existente e a elaboração do Programa de Regularização Ambiental (PRA) para propriedades com passivo ambiental, com encaminhamento ao órgão ambiental estadual.',
    faq: [
      {
        q: 'O CAR é obrigatório para todos os imóveis rurais?',
        a: 'Sim. Todos os imóveis rurais devem estar inscritos no CAR, independentemente do tamanho. A inscrição é pré-requisito para acesso a crédito rural, licenciamento ambiental e outras políticas públicas.',
      },
      {
        q: 'Qual a diferença entre o CAR e o georreferenciamento INCRA?',
        a: 'O CAR é um cadastro ambiental, focado no mapeamento de vegetação e uso do solo para fins de conformidade com o Código Florestal. O georreferenciamento INCRA é um processo geodésico para determinação dos limites da propriedade com fins de registro imobiliário.',
      },
      {
        q: 'Meu CAR tem sobreposição com área de terceiros. O que fazer?',
        a: 'Sobreposições são comuns e precisam ser corrigidas. Realizamos análise da sobreposição, adequação dos polígonos e reenvio ao SICAR, com relatório técnico justificando as alterações.',
      },
    ],
  },
  {
    icon: <Truck size={22} />,
    title: 'Monitoramento de Infraestruturas',
    description: 'Monitoramento geoespacial de rodovias, ferrovias, portos e linhas de transmissão.',
    tags: ['Rodovias', 'Ferrovias', 'Transmissão'],
    iconBg: 'bg-teal-500/15 text-teal-500',
    image: '/images/services/monitoramento-infraestrutura.webp',
    longDescription:
      'O monitoramento de infraestruturas lineares e pontuais utiliza técnicas de sensoriamento remoto, GNSS e inspeção com drone para acompanhar o estado de conservação e a conformidade de rodovias, ferrovias, dutos, linhas de transmissão e portos.\n\nDetectamos anomalias estruturais, invasões de faixa de domínio, processos erosivos e variações de declividade com antecedência, subsidiando a manutenção preventiva e reduzindo riscos operacionais. Entregamos relatórios técnicos periódicos com georreferenciamento das ocorrências e recomendações de intervenção.',
    faq: [
      {
        q: 'Com que frequência o monitoramento deve ser realizado?',
        a: 'Depende do ativo e do nível de risco. Rodovias críticas e linhas de transmissão em áreas de risco costumam ser monitoradas mensalmente. Infraestruturas em áreas estáveis podem ter periodicidade trimestral ou semestral.',
      },
      {
        q: 'O monitoramento com drone é seguro próximo a linhas de transmissão?',
        a: 'Sim. Utilizamos drones com distância segura e planejamento de rota específico para inspeção de linhas de alta tensão, seguindo as normas da ANEEL e ABNT NBR 16331.',
      },
      {
        q: 'Os dados de monitoramento podem ser integrados a sistemas de gestão?',
        a: 'Sim. Entregamos dados em formatos compatíveis com plataformas GIS e sistemas de gerenciamento de ativos (GIS enterprise, ArcGIS Online, QGIS Server), além de APIs para integração com dashboards.',
      },
    ],
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Monitoramento de Pátios Industriais',
    description: 'Inspeção e mapeamento periódico de áreas industriais com relatórios técnicos de variação.',
    tags: ['Industrial', 'Volumetria'],
    iconBg: 'bg-primary-500/15 text-primary-500',
    image: '/images/services/monitoramento-patios.webp',
    longDescription:
      'O monitoramento periódico de pátios industriais com drone e técnicas fotogramétricas permite o controle volumétrico de estoques (minério, grãos, carvão, cavacos), a inspeção de coberturas e estruturas, o mapeamento de movimentação de materiais e o acompanhamento de obras internas.\n\nGeramos relatórios comparativos entre levantamentos, com cálculo automático de volumes, áreas e variações, facilitando o controle de estoque, a gestão patrimonial e o planejamento operacional.',
    faq: [
      {
        q: 'Qual a precisão do cálculo volumétrico com drone?',
        a: 'Com pontos de controle, atingimos precisão de ±2% no cálculo volumétrico para pilhas regulares. Para geometrias complexas, a precisão pode variar; realizamos validação com medições terrestres quando exigido.',
      },
      {
        q: 'É possível monitorar pátios em operação contínua?',
        a: 'Sim. As missões de drone podem ser realizadas com o pátio em operação, desde que observadas as distâncias de segurança em relação a equipamentos e funcionários.',
      },
      {
        q: 'Os relatórios podem ser personalizados com os indicadores da empresa?',
        a: 'Sim. Desenvolvemos templates de relatório customizados conforme os KPIs e o sistema de gestão do cliente, com exportação para PDF, Excel ou integração direta com ERPs.',
      },
    ],
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-dark-100 dark:border-dark-700/60 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left gap-3 hover:bg-dark-50 dark:hover:bg-dark-700/30 transition-colors"
          >
            <span className="text-sm font-medium text-dark-800 dark:text-dark-100 leading-snug">{item.q}</span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-dark-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-sm text-dark-500 dark:text-dark-400 leading-relaxed border-t border-dark-100 dark:border-dark-700/60 pt-3">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// ─── Service Detail Modal ─────────────────────────────────────────────────────

interface ServiceDetailModalProps {
  service: { icon: React.ReactNode; title: string; image: string; longDescription: string; faq: FaqItem[]; iconBg: string }
  onClose: () => void
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const paragraphs = service.longDescription.split('\n\n')
  const waMsg = encodeURIComponent(
    `Olá, pessoal da IMPGEO, vim através do site de vocês, e gostaria de saber mais informações sobre o serviço de ${service.title} que vocês realizam`
  )
  const waLink = `https://wa.me/5543991862770?text=${waMsg}`

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      >
        <motion.div
          className="relative w-full max-w-2xl bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-dark-900/60 backdrop-blur-sm text-white hover:bg-dark-900/80 transition-colors"
          >
            <X size={15} />
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto">
            {/* Hero image */}
            <div className="relative h-52 sm:h-64 w-full overflow-hidden shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/10 to-transparent" />
              <div className="absolute bottom-5 left-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.iconBg} backdrop-blur-sm`}>
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold font-display text-white drop-shadow">
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="px-7 py-6 space-y-6">
              {/* Description */}
              <div className="space-y-3">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-sm font-semibold text-dark-900 dark:text-white uppercase tracking-wider mb-3">
                  Perguntas frequentes
                </h3>
                <FaqAccordion items={service.faq} />
              </div>

              {/* CTA */}
              <div className="pt-2 border-t border-dark-100 dark:border-dark-700">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all duration-200"
                >
                  Solicitar orçamento <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Outros List Modal ────────────────────────────────────────────────────────

function OutrosListModal({ onClose, onSelect }: { onClose: () => void; onSelect: (s: OutroServiceData) => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      >
        <motion.div
          className="relative w-full max-w-2xl bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
          >
            <X size={15} />
          </button>

          <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-primary-500/15 text-primary-500">
            <MoreHorizontal size={22} />
          </div>
          <h3 className="text-xl font-bold font-display text-dark-900 dark:text-white mb-1">
            Outros Serviços
          </h3>
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-6">
            Clique em um serviço para ver a descrição completa e perguntas frequentes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outrosServices.map(s => (
              <button
                key={s.title}
                onClick={() => onSelect(s)}
                className="group rounded-xl p-4 text-left bg-dark-50 dark:bg-dark-700/50 border border-dark-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-white dark:hover:bg-dark-700 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${s.iconBg}`}>
                    {s.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-dark-900 dark:text-white leading-snug">{s.title}</h4>
                </div>
                <p className="text-xs text-dark-500 dark:text-dark-400 leading-relaxed line-clamp-2">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400 mt-2 group-hover:gap-1.5 transition-all duration-200">
                  Ver mais <ArrowRight size={11} />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-dark-100 dark:border-dark-700">
            <a
              href="https://wa.me/5543991862770?text=Ol%C3%A1%2C%20pessoal%20da%20IMPGEO%2C%20vim%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20prestados%20por%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all duration-200"
            >
              Falar com a equipe <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Services() {
  const { ref, inView } = useInView()
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null)
  const [outrosOpen, setOutrosOpen] = useState(false)
  const [selectedOutro, setSelectedOutro] = useState<OutroServiceData | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const title = (e as CustomEvent<string>).detail
      const main = services.find(s => s.title === title)
      if (main) { setSelectedService(main); return }
      const outro = outrosServices.find(s => s.title === title)
      if (outro) { setSelectedOutro(outro) }
    }
    window.addEventListener('open-service-modal', handler)
    return () => window.removeEventListener('open-service-modal', handler)
  }, [])

  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-50 dark:bg-dark-900/50 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-200 dark:via-dark-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SectionBadge>O que fazemos</SectionBadge>
          </motion.div>
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções completas em{' '}
            <span className="gradient-text">geotecnologia</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Da coleta de dados à entrega dos resultados, cuidamos de todo o processo com rigor técnico e agilidade.
          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              onClick={() => setSelectedService(service)}
              className={`group relative rounded-2xl p-6 cursor-pointer overflow-hidden
                          bg-white dark:bg-dark-800/50
                          border border-dark-100 dark:border-dark-700/50
                          hover:border-primary-300 dark:hover:border-primary-700
                          hover:shadow-xl hover:shadow-primary-500/5
                          transition-all duration-300
                          ${service.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-dark-900 dark:text-white mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-100 dark:bg-dark-700/60 text-dark-600 dark:text-dark-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-2.5 transition-all duration-200">
                  Saiba mais <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}

          {/* Outros card */}
          <motion.div
            variants={cardVariants}
            onClick={() => setOutrosOpen(true)}
            className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden
                        bg-white dark:bg-dark-800/50
                        border border-dark-100 dark:border-dark-700/50
                        hover:border-primary-300 dark:hover:border-primary-700
                        hover:shadow-xl hover:shadow-primary-500/5
                        transition-all duration-300
                        lg:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-primary-500/15 text-primary-500">
                <MoreHorizontal size={22} />
              </div>
              <h3 className="text-base font-semibold text-dark-900 dark:text-white mb-2 font-display">
                Outros Serviços
              </h3>
              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">
                Retificação de matrícula, desmembramentos, aprovação de loteamentos, REURB, CAR, monitoramento de infraestruturas e muito mais.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Regularização', 'Loteamentos', 'CAR', 'REURB', 'Infraestrutura'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-100 dark:bg-dark-700/60 text-dark-600 dark:text-dark-300">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-2.5 transition-all duration-200 mt-auto">
                Ver todos <ArrowRight size={13} />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modals */}
      {selectedService && (
        <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}

      {outrosOpen && !selectedOutro && (
        <OutrosListModal
          onClose={() => setOutrosOpen(false)}
          onSelect={(s) => { setSelectedOutro(s) }}
        />
      )}

      {selectedOutro && (
        <ServiceDetailModal
          service={selectedOutro}
          onClose={() => {
            setSelectedOutro(null)
            setOutrosOpen(true)
          }}
        />
      )}
    </section>
  )
}

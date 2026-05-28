export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hva-koster-flyttevask",
    title: "Hva koster flyttevask i 2026?",
    excerpt: "Komplett prisguide for flyttevask i Norge: hva du betaler for en leilighet, enebolig og hva som er inkludert.",
    date: "2026-05-10",
    readMinutes: 6,
    category: "Priser",
    content: [
      "Flyttevask er en av de mest etterspurte rengjøringstjenestene i Norge, og prisen varierer fra rundt 2 990 kr for en liten leilighet til over 12 000 kr for en stor enebolig. I denne guiden får du oversikt over hva som påvirker prisen, hva som bør være inkludert, og hvordan du sikrer at vasken blir godkjent.",
      "De viktigste faktorene er boligens størrelse, tilstand og om vinduer er inkludert. CleanAura tilbyr fastpris med godkjent-garanti, slik at du slipper ubehagelige overraskelser. En leilighet på 50 m² koster typisk 3 490–4 490 kr inkludert vinduer.",
      "Husk at en godkjent flyttevask alltid skal omfatte ovn, kjøleskap, ventilator, fugevask på bad, alle skap, lister og dørkarmer. Be alltid om signert sjekkliste etter utført vask.",
    ],
  },
  {
    slug: "hvor-ofte-vaske-hjemmet",
    title: "Hvor ofte bør man vaske hjemmet?",
    excerpt: "Eksperten svarer på hvor ofte du bør støvsuge, vaske bad, kjøkken, sengetøy og mer.",
    date: "2026-05-08",
    readMinutes: 5,
    category: "Tips",
    content: [
      "Riktig vaskefrekvens er nøkkelen til et sunt hjem. Bad og kjøkken bør rengjøres ukentlig, sengetøy skiftes annenhver uke, og en grundig hovedrengjøring bør gjøres 2–4 ganger i året.",
      "Gulv bør støvsuges 1–2 ganger i uken, oftere hvis du har kjæledyr eller barn. Vindusvask anbefales 2–4 ganger i året. Avtørking av berøringspunkter (dørhåndtak, lysbrytere) bør gjøres ukentlig for et hygienisk hjem.",
      "Et godt tips: bryt arbeidet ned i ukentlige, månedlige og sesongvise oppgaver. Eller la oss ta hånd om alt – med fast renhold hos CleanAura.",
    ],
  },
  {
    slug: "beste-tips-vindusvask",
    title: "10 beste tips for vindusvask",
    excerpt: "Slik får du krystallklare vinduer uten striper – proffene avslører triksene.",
    date: "2026-05-02",
    readMinutes: 4,
    category: "Tips",
    content: [
      "Stripefritt resultat handler om riktig teknikk og verktøy. Bruk en profesjonell nal, mikrofiberklut og lunkent vann med litt zalo. Tørk alltid i én retning, og start på toppen.",
      "Unngå å vaske vinduer i sterk sol – vannet tørker for raskt og etterlater striper. Bruk renset vann hvis du har hardt vann i springen.",
      "For vinduer i høyden: bruk teleskopstang i stedet for stige. Det er både tryggere og raskere. Trenger du hjelp, bestiller du proff vindusvask hos CleanAura.",
    ],
  },
  {
    slug: "velge-rengjoringsfirma",
    title: "Hvordan velge rengjøringsfirma?",
    excerpt: "5 spørsmål du bør stille før du velger leverandør av renhold.",
    date: "2026-04-28",
    readMinutes: 5,
    category: "Guide",
    content: [
      "Det finnes mange tilbydere, men kvaliteten varierer enormt. Sjekk alltid om firmaet er godkjent renholdsbedrift hos Arbeidstilsynet, og om de har gyldig forsikring.",
      "Spør om de bruker faste renholdere, hvilke produkter de bruker, og om de har en fornøydhetsgaranti. Et seriøst firma gir alltid skriftlig tilbud og signert sjekkliste etter utført oppdrag.",
      "CleanAura er godkjent renholdsbedrift, fullt forsikret, og bruker kun svanemerkede produkter. Vi tilbyr 100 % fornøydhetsgaranti.",
    ],
  },
  {
    slug: "miljovennlig-rengjoring",
    title: "Miljøvennlig rengjøring – slik gjør du det",
    excerpt: "Naturlige produkter og smarte vaner som er bra for både hjemmet og planeten.",
    date: "2026-04-20",
    readMinutes: 5,
    category: "Miljø",
    content: [
      "Klassisk eddik, natron og sitron kan erstatte mange kjemiske produkter. Eddik på vinduer, natron på fett og sitron mot lukt.",
      "Bruk mikrofiberkluter – de fanger smuss uten kjemikalier. Velg svanemerkede produkter for områder hvor du må bruke vaskemidler.",
      "CleanAura bruker kun miljøvennlige, svanemerkede produkter som er trygge for barn, kjæledyr og allergikere.",
    ],
  },
  {
    slug: "fjerne-vanskelige-flekker",
    title: "Slik fjerner du de vanskeligste flekkene",
    excerpt: "Rødvin, kaffe, sjokolade og blod – komplett guide.",
    date: "2026-04-15",
    readMinutes: 6,
    category: "Tips",
    content: [
      "Tid er det viktigste. Behandle flekken så raskt som mulig – jo eldre, jo vanskeligere. Rødvin: dab opp, ikke gni. Strø salt eller natron over.",
      "Kaffe og te: skyll med kaldt vann. Sjokolade: skrap forsiktig av tørket sjokolade, vask med oppvaskmiddel.",
      "Blod: alltid kaldt vann (varmt setter flekken). Bruk salt eller brintoverilte for hardnakkede flekker.",
    ],
  },
  {
    slug: "kontorrenhold-effektivitet",
    title: "Slik øker kontorrenhold produktiviteten",
    excerpt: "Studier viser at rene kontorer øker produktiviteten med opptil 12 %.",
    date: "2026-04-08",
    readMinutes: 5,
    category: "Bedrift",
    content: [
      "Forskning fra Harvard viser at ansatte presterer 12 % bedre i rene omgivelser. Et urent kontor øker sykefravær og senker moral.",
      "Daglig overflaterengjøring + ukentlig dypvask gir best resultat. Berøringspunkter (dørhåndtak, brytere, kaffemaskin) bør tørkes av daglig.",
      "Investering i fast renhold lønner seg – både i trivsel og bunnlinje.",
    ],
  },
  {
    slug: "vaske-ovn-grundig",
    title: "Hvordan vaske ovnen grundig",
    excerpt: "Trinn-for-trinn-guide til en skinnende ren ovn – uten sterke kjemikalier.",
    date: "2026-04-01",
    readMinutes: 4,
    category: "Tips",
    content: [
      "Bland natron og vann til en pasta, smør tykt over alle innvendige flater (unngå varmeelement). La virke over natten.",
      "Skrap forsiktig av pastaen og smuss, og tørk av med eddikvann. Stekeplater og rister bakes i såpevann.",
      "Vil du slippe selv? Ovnen er alltid inkludert i vår flyttevask.",
    ],
  },
  {
    slug: "vaske-airbnb-mellom-gjester",
    title: "Slik vasker du Airbnb-en mellom gjester",
    excerpt: "Sjekkliste for Superhost-standard – og hva du må unngå.",
    date: "2026-03-25",
    readMinutes: 6,
    category: "Airbnb",
    content: [
      "Bytt alltid sengetøy og håndklær – aldri gjenbruk. Vask alle berøringspunkter og fyll opp forbruksvarer.",
      "Foto-dokumenter eventuelle skader umiddelbart. Hold en standardisert sjekkliste for konsistent resultat.",
      "Vurder å outsource til CleanAura – vi tilbyr automatisert turnover-vask med foto-dokumentasjon.",
    ],
  },
  {
    slug: "frigjor-tid-renhold",
    title: "Slik frigjør du 5 timer i uka med fast renhold",
    excerpt: "Regnestykket som overrasker norske familier.",
    date: "2026-03-18",
    readMinutes: 4,
    category: "Livsstil",
    content: [
      "Gjennomsnittsfamilien bruker 5–7 timer i uka på renhold. Sett en pris på din egen tid: 200 kr/timen = 1 400 kr/uka.",
      "Fast renhold koster fra 690 kr/uka. Du sparer både tid OG penger, samtidig som du får et mer harmonisk hjem.",
      "Mer tid til familie, trening og hobbyer – det er ekte luksus.",
    ],
  },
  {
    slug: "alergiker-rent-hjem",
    title: "Slik holder allergikere hjemmet trygt",
    excerpt: "Tips til pollensesongen og året rundt.",
    date: "2026-03-10",
    readMinutes: 5,
    category: "Helse",
    content: [
      "HEPA-filter på støvsuger er gull verdt. Vask gulv 2x i uka, og puter, dyner og gardiner månedlig.",
      "Unngå sterke parfymerte produkter. Velg svanemerkede og parfymefrie alternativer.",
      "CleanAura tilbyr allergivennlig renhold med parfymefrie produkter på forespørsel.",
    ],
  },
  {
    slug: "vinterrenhold-snofritt-inngangsparti",
    title: "Vinterrenhold: snø, salt og slaps",
    excerpt: "Slik beskytter du gulvene gjennom norsk vinter.",
    date: "2026-02-28",
    readMinutes: 4,
    category: "Sesong",
    content: [
      "Salt og slaps ødelegger tregulv. Legg gode dørmatter både ute og inne, og vask gulv hyppig med mild såpe.",
      "Tørk av salt umiddelbart for å unngå hvite merker. Bruk linoljebehandling på tregulv 1-2x i året.",
      "Be om vintertilpasset renholdsplan fra CleanAura – vi øker frekvens på inngangsparti i vintermånedene.",
    ],
  },
  {
    slug: "varrengjoring-sjekkliste",
    title: "Vårrengjøring: komplett sjekkliste",
    excerpt: "Den store sjekklisten – 40 punkter for et nyvasket hjem.",
    date: "2026-02-20",
    readMinutes: 7,
    category: "Sesong",
    content: [
      "Start med vinduer – ute og inne. Vask gardiner, persienner og lampeskjermer. Trekk ut møbler og støvsug bakom.",
      "Avkalk dusj, kran og toalett. Vask kjøleskap og fryser innvendig. Vrak utgåtte produkter.",
      "Vil du slippe? Bestill en grunnvask hos CleanAura – og start våren med blanke ark.",
    ],
  },
  {
    slug: "renhold-borettslag",
    title: "Renhold i borettslag og sameier",
    excerpt: "Slik velger styret riktig renholdspartner.",
    date: "2026-02-12",
    readMinutes: 5,
    category: "Bedrift",
    content: [
      "Be alltid om referanser fra lignende boligkomplekser. Sjekk om firmaet har faste team og bytter sjelden personell.",
      "Skriv tydelig kontrakt med frekvens, omfang og kvalitetskrav. Krev månedlig rapportering.",
      "CleanAura har lang erfaring med borettslag og leverer fast trappevask, vask av fellesarealer og vinduer.",
    ],
  },
  {
    slug: "fugevask-bad-tips",
    title: "Slik får du hvite fuger på badet",
    excerpt: "Triks som faktisk virker mot misfargede fuger.",
    date: "2026-02-05",
    readMinutes: 4,
    category: "Tips",
    content: [
      "Bland natron og brintoverilte til en pasta. Påfør med gammel tannbørste, la virke i 30 minutter, skyll.",
      "Gjenta månedlig for å holde fugene hvite. Ventiler badet godt etter dusj for å unngå mugg.",
      "Veldig misfargede fuger kan kreve fugefornyelse – kontakt fagperson.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

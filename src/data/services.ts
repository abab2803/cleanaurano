import { Home, Building2, KeyRound, AppWindow, Eye, HardHat, CalendarClock, BedDouble, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  description: string;
  includes: string[];
  benefits: { title: string; desc: string }[];
  forWho: string;
  pricing: { name: string; price: string; note: string }[];
  priceDisclaimer?: string;
  steps: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "hjemmerengjoring",
    title: "Hjemmerengjøring",
    short: "Skinnende rene hjem – uten stress. Vi tar oss av rengjøringen så du får tid til det viktigste.",
    icon: Home,
    description:
      "Vår hjemmerengjøring er skreddersydd for travle familier, par og enkeltpersoner som ønsker et rent og hyggelig hjem uten å bruke tid og krefter på det selv. Vi bruker miljøvennlige produkter, profesjonelt utstyr og erfarne renholdere som behandler hjemmet ditt med respekt og omtanke. Du velger frekvensen – ukentlig, annenhver uke eller månedlig – og vi tilpasser oppdraget etter dine ønsker og rutiner.",
    includes: [
      "Støvtørking av alle tilgjengelige flater",
      "Støvsuging og vask av gulv i alle rom",
      "Grundig rengjøring av bad: dusj, toalett, vask og speil",
      "Kjøkken: benkeplater, hvitevarer utvendig, vask og kran",
      "Tømming av søppel og bytte av poser",
      "Reing av senger (etter ønske)",
      "Rengjøring av speil, glassflater og dørhåndtak",
    ],
    benefits: [
      { title: "Fast renholder", desc: "Du får samme person hver gang – kjenner hjemmet og dine preferanser." },
      { title: "Miljøvennlig", desc: "Svanemerkede produkter som er trygge for barn og kjæledyr." },
      { title: "Fleksibelt", desc: "Endre, pause eller avbestill når som helst – uten bindingstid." },
      { title: "Forsikret", desc: "Alle våre oppdrag er fullt forsikret. Du er trygg med CleanAura." },
    ],
    forWho:
      "Travle familier, eldre, par i full jobb, og alle som ønsker et rent hjem uten å løfte en finger. Perfekt for deg som verdsetter fritid og kvalitet.",
    pricing: [
      { name: "Leilighet 1–2 rom", price: "fra 690 kr", note: "Ukentlig besøk" },
      { name: "Leilighet/hus 3–4 rom", price: "fra 990 kr", note: "Ukentlig besøk" },
      { name: "Hus 5+ rom", price: "fra 1 290 kr", note: "Etter befaring" },
    ],
    steps: [
      { title: "Få tilbud", desc: "Fyll ut skjema eller ring oss. Vi gir deg pris samme dag." },
      { title: "Planlegg besøk", desc: "Vi avtaler tid og frekvens som passer din hverdag." },
      { title: "Vi rengjør", desc: "Faste renholdere møter opp presis og leverer kvalitet hver gang." },
      { title: "Nyt resultatet", desc: "Kom hjem til et skinnende rent hjem. Betal trygt etter besøk." },
    ],
    faq: [
      { q: "Må jeg være hjemme?", a: "Nei, mange kunder gir oss en nøkkel eller kode. Alt håndteres trygt og konfidensielt." },
      { q: "Hva om jeg ikke er fornøyd?", a: "Vi har 100 % fornøydhetsgaranti. Er du ikke fornøyd, kommer vi tilbake og fikser det – gratis." },
      { q: "Tar dere med utstyr?", a: "Ja, vi tar med alt av utstyr og miljøvennlige produkter." },
    ],
  },
  {
    slug: "flyttevask",
    title: "Flyttevask",
    short: "Garantert godkjent flyttevask – vi tar grundig hånd om boligen før overlevering.",
    icon: KeyRound,
    description:
      "Flyttevask er noe av det mest tidkrevende ved en flytteprosess. CleanAura tilbyr garantert godkjent flyttevask til fastpris, slik at du kan fokusere på flyttingen mens vi tar oss av rengjøringen. Vi følger en omfattende sjekkliste på over 80 punkter og garanterer at boligen blir godkjent av kjøper, megler eller utleier – ellers kommer vi gratis tilbake.",
    includes: [
      "Grundig rengjøring av alle rom – tak til gulv",
      "Vinduer innvendig og utvendig (tilgjengelige)",
      "Kjøkken: ovn, komfyr, kjøleskap, fryser, ventilator innvendig",
      "Bad: avkalking, fugevask, sluk og rør",
      "Avtørking av alle skap, lister og dørkarmer",
      "Garderober og bod inkludert",
      "Sjekkliste signert ved overlevering",
    ],
    benefits: [
      { title: "Godkjent-garanti", desc: "Blir ikke vasken godkjent, kommer vi gratis tilbake og fullfører." },
      { title: "Fastpris", desc: "Du får pris på forhånd – ingen overraskelser etter oppdraget." },
      { title: "Erfarne team", desc: "Spesialiserte renholdere som vet hva meglere og takstmenn ser etter." },
    ],
    forWho:
      "Privatpersoner som skal selge eller leie ut bolig, leietakere som skal flytte ut, og meglere/utleiere som trenger pålitelig leverandør.",
    pricing: [
      { name: "Leilighet inntil 50 m²", price: "fra 3 490 kr", note: "Fastpris inkl. vinduer" },
      { name: "Leilighet 50–100 m²", price: "fra 4 990 kr", note: "Fastpris" },
      { name: "Hus 100–200 m²", price: "fra 7 990 kr", note: "Fastpris etter befaring" },
    ],
    steps: [
      { title: "Send forespørsel", desc: "Oppgi størrelse, adresse og dato." },
      { title: "Få fastpris", desc: "Tilbud sendt innen 24 timer." },
      { title: "Vi vasker", desc: "Vi møter opp og leverer godkjent resultat." },
      { title: "Overlevering", desc: "Du får signert sjekkliste til megler/utleier." },
    ],
    faq: [
      { q: "Er vinduer inkludert?", a: "Ja, alle tilgjengelige vinduer innvendig og utvendig er inkludert i fastprisen." },
      { q: "Hva om megler ikke godkjenner?", a: "Da kommer vi gratis tilbake og fullfører innen 48 timer." },
      { q: "Hvor lang tid tar det?", a: "Typisk 4–10 timer avhengig av boligstørrelse." },
    ],
  },
  {
    slug: "kontorvask",
    title: "Kontorvask",
    short: "Profesjonelt renhold for kontorer og bedrifter – diskret, effektivt og fleksibelt.",
    icon: Building2,
    description:
      "Et rent og ordentlig kontor er avgjørende for trivsel, produktivitet og inntrykket dere etterlater hos kunder. CleanAura leverer fast kontorvask til små og store bedrifter i Oslo-regionen. Vi tilpasser frekvens og omfang etter behov – fra daglig renhold til ukentlig vask – og jobber gjerne utenfor arbeidstid for å unngå forstyrrelser.",
    includes: [
      "Tømming av søppel og resirkulering",
      "Tørrmopping og vask av gulv",
      "Avtørking av pulter, bord og berøringspunkter",
      "Rengjøring av kjøkken og pauserom",
      "Toaletter og sanitæranlegg",
      "Resepsjon og møterom",
      "Periodisk vindusvask og dyprens",
    ],
    benefits: [
      { title: "Fast team", desc: "Samme renholdere – kjenner bygget og rutinene." },
      { title: "Fleksible tider", desc: "Vask før, etter eller i arbeidstid." },
      { title: "Avtalefestet", desc: "Klare leveranser, dokumentert kvalitet og månedlig rapportering." },
    ],
    forWho: "Kontor, klinikker, butikker, treningssentre, samfunnshus, sameier og bedrifter med behov for fast renhold.",
    pricing: [
      { name: "Mindre kontor (inntil 100 m²)", price: "fra 1 490 kr/mnd", note: "1x ukentlig" },
      { name: "Mellomstort (100–300 m²)", price: "fra 3 490 kr/mnd", note: "2x ukentlig" },
      { name: "Stort (300+ m²)", price: "Tilbud", note: "Tilpasset opplegg" },
    ],
    steps: [
      { title: "Befaring", desc: "Vi besøker lokalene og kartlegger behov." },
      { title: "Tilbud", desc: "Skreddersydd tilbud og renholdsplan." },
      { title: "Oppstart", desc: "Fast team starter etter avtale." },
      { title: "Oppfølging", desc: "Månedlig kvalitetskontroll og dialog." },
    ],
    faq: [
      { q: "Har dere bindingstid?", a: "Standardavtalen har 3 måneders oppsigelse, men vi tilpasser ved behov." },
      { q: "Hvem leverer utstyr?", a: "Vi tar med alt utstyr og forbruksvarer hvis ikke annet er avtalt." },
      { q: "Er dere forsikret?", a: "Ja, vi har full ansvarsforsikring og er godkjent renholdsbedrift." },
    ],
  },
  {
    slug: "vindusvask",
    title: "Vindusvask",
    short: "Krystallklare vinduer ute og inne – profesjonelt utført, uten striper.",
    icon: AppWindow,
    description:
      "Rene vinduer slipper inn lys og hever inntrykket av både hjem og bedrift. CleanAura tilbyr profesjonell vindusvask med strikt fokus på resultat – uten striper, søl eller flekker. Vi bruker renset vann, profesjonelle nal og mikrofiber, og takler både små leiligheter og store bygg.",
    includes: [
      "Vask av vinduer innvendig og utvendig",
      "Rengjøring av karmer og rammer",
      "Polering med profesjonelt utstyr",
      "Bortkjøring av smuss og avfall",
      "Tilgjengelige vinduer i høyden (med stige eller stang)",
    ],
    benefits: [
      { title: "Stripefritt", desc: "Vi garanterer stripefritt resultat på alle glassflater." },
      { title: "Trygt", desc: "Sertifiserte for arbeid i høyden, fullt forsikret." },
      { title: "Raskt", desc: "Effektive team som leverer kvalitet på kort tid." },
    ],
    forWho: "Privatpersoner, sameier, borettslag og bedrifter som vil ha rene vinduer hele året.",
    pricing: [
      { name: "Leilighet (inntil 10 vinduer)", price: "fra 990 kr", note: "Inn- og utvendig" },
      { name: "Enebolig", price: "fra 1 990 kr", note: "Inn- og utvendig" },
      { name: "Næringsbygg", price: "Tilbud", note: "Etter befaring" },
    ],
    steps: [
      { title: "Tilbud", desc: "Oppgi antall vinduer og adresse." },
      { title: "Avtale tid", desc: "Vi kommer på dagen som passer deg." },
      { title: "Vi vasker", desc: "Profesjonelt og raskt – uten søl." },
      { title: "Du nyter utsikten", desc: "Krystallklare vinduer – garantert." },
    ],
    faq: [
      { q: "Hvor ofte bør vinduer vaskes?", a: "Vi anbefaler 2–4 ganger i året, avhengig av beliggenhet." },
      { q: "Vasker dere i regnvær?", a: "Lett regn er greit, men ved kraftig nedbør avtaler vi ny dag uten kostnad." },
      { q: "Bruker dere stiger?", a: "Ja, vi har stiger og teleskopstang for vinduer i høyden." },
    ],
  },
  {
    slug: "visningsvask",
    title: "Visningsvask",
    short: "Skinnende bolig som selger raskere – før visning eller bilder.",
    icon: Eye,
    description:
      "Førsteinntrykk avgjør salgsprisen. En grundig visningsvask gjør at boligen din fremstår fra sin beste side på bilder og under visning. CleanAura jobber tett med meglere og selgere over hele Oslo, og kjenner nøyaktig hvilke detaljer som gir wow-effekt.",
    includes: [
      "Grundig rengjøring av alle synlige flater",
      "Polering av kraner, speil og glass",
      "Vask av kjøkken og bad til glansresultat",
      "Støvtørking og luftbehandling",
      "Fjerning av merker, fingeravtrykk og lukt",
    ],
    benefits: [
      { title: "Selger raskere", desc: "En ren bolig får flere bud og høyere pris." },
      { title: "Foto-klar", desc: "Perfekt resultat for profesjonelle bilder." },
      { title: "Megler-godkjent", desc: "Vi samarbeider med byens største meglerkjeder." },
    ],
    forWho: "Boligselgere, eiendomsmeglere og styling-byråer som vil at boligen skal skinne under salgsprosessen.",
    pricing: [
      { name: "Leilighet", price: "fra 1 990 kr", note: "Engangsoppdrag" },
      { name: "Enebolig", price: "fra 3 490 kr", note: "Etter størrelse" },
      { name: "Pakke (vask + vindu)", price: "Tilbud", note: "Spar 15 %" },
    ],
    steps: [
      { title: "Bestill", desc: "Helst 3–5 dager før visning." },
      { title: "Befaring (valgfritt)", desc: "Vi avklarer fokusområder." },
      { title: "Vi vasker", desc: "Diskret og raskt – ofte samme dag som foto." },
      { title: "Klar for visning", desc: "Boligen skinner og selger seg selv." },
    ],
    faq: [
      { q: "Hvor lenge før visning bør vi bestille?", a: "Helst 3–5 dager før – men vi tar haste-oppdrag samme dag." },
      { q: "Inkluderer det vinduer?", a: "Vi tilbyr en pakkeløsning som inkluderer vinduer." },
      { q: "Samarbeider dere med meglere?", a: "Ja, vi har avtaler med flere store meglerkjeder i Oslo og Bærum." },
    ],
  },
  {
    slug: "byggvask",
    title: "Byggvask",
    short: "Sluttvask etter byggeprosjekt – støvfri, klar til overlevering.",
    icon: HardHat,
    description:
      "Etter et byggeprosjekt er rengjøring avgjørende for overlevering. CleanAura leverer profesjonell byggvask som fjerner byggestøv, malingsrester, klistermerker og spor etter håndverkere. Vi jobber både på små renoveringer og store nybygg, og leverer alltid en støvfri og bruks-klar bolig eller næringseiendom.",
    includes: [
      "Grov rengjøring av støv og byggematerialer",
      "Vask av alle flater, vinduer og glass",
      "Fjerning av klistremerker og maling",
      "Rengjøring av ventilasjon og avtrekk",
      "Polering av flater før innflytting",
    ],
    benefits: [
      { title: "HMS-fokus", desc: "Vi følger HMS-krav på byggeplass og bruker korrekt verneutstyr." },
      { title: "Raskt", desc: "Store team som leverer på stram tidsplan." },
      { title: "Komplett", desc: "Fra grovvask til sluttvask – alt i en leveranse." },
    ],
    forWho: "Entreprenører, byggherrer, håndverkere, snekkere, malere, eiendomsutviklere og privatpersoner etter renovering.",
    pricing: [
      { name: "Småprosjekt (under 80 m²)", price: "fra 4 990 kr", note: "Sluttvask" },
      { name: "Bolig 80–200 m²", price: "fra 8 990 kr", note: "Grov + sluttvask" },
      { name: "Næringsbygg", price: "Tilbud", note: "Etter befaring" },
    ],
    steps: [
      { title: "Befaring", desc: "Vi besøker byggeplassen og avtaler omfang." },
      { title: "Tilbud", desc: "Detaljert pris og tidsplan." },
      { title: "Utførelse", desc: "Vi leverer fra grov- til sluttvask." },
      { title: "Overlevering", desc: "Klar for innflytting eller åpning." },
    ],
    faq: [
      { q: "Tar dere både grov- og sluttvask?", a: "Ja, vi leverer alt fra grovrydding til finvask før overlevering." },
      { q: "Jobber dere helg og kveld?", a: "Ja, vi tilpasser oss byggets fremdriftsplan." },
      { q: "Har dere HMS-kort?", a: "Alle våre ansatte har gyldig HMS-kort og ID-kort etter forskrift." },
    ],
  },
  {
    slug: "fast-renhold",
    title: "Fast renhold",
    short: "Abonnement på fast renhold – fast lav pris, ingen forpliktelser.",
    icon: CalendarClock,
    description:
      "Med fast renhold fra CleanAura får du et skinnende rent hjem hver eneste uke – uten å tenke på det. Du velger frekvens (ukentlig, annenhver uke, månedlig), og vi sender samme renholder hver gang. Du har null bindingstid, og kan pause eller avslutte når som helst.",
    includes: [
      "Fast renholder hver gang",
      "Fast lav medlemspris",
      "Prioritert booking",
      "Gratis kvalitetskontroll",
      "Inkluderer alt fra hjemmerengjøring",
    ],
    benefits: [
      { title: "Fast lav pris", desc: "Opptil 25 % rabatt sammenlignet med enkeltbesøk." },
      { title: "Ingen bindingstid", desc: "Avslutt eller pause når du vil." },
      { title: "Forutsigbart", desc: "Faste tider, samme person, samme kvalitet." },
    ],
    forWho: "Travle barnefamilier, par i full jobb, eldre, og alle som ønsker rent hjem uten å tenke på det.",
    pricing: [
      { name: "Hver uke", price: "fra 690 kr/besøk", note: "Beste pris" },
      { name: "Annenhver uke", price: "fra 790 kr/besøk", note: "Mest populær" },
      { name: "Hver måned", price: "fra 990 kr/besøk", note: "Vedlikehold" },
    ],
    steps: [
      { title: "Velg frekvens", desc: "Ukentlig, annenhver uke eller månedlig." },
      { title: "Få fastpris", desc: "Tilpasset boligens størrelse." },
      { title: "Møt renholderen", desc: "Samme person hver gang." },
      { title: "Nyt friheten", desc: "Vi holder hjemmet skinnende rent." },
    ],
    faq: [
      { q: "Er det bindingstid?", a: "Nei. Du kan pause eller avslutte når som helst." },
      { q: "Kan jeg endre dag?", a: "Ja, gi oss beskjed 24 timer i forveien." },
      { q: "Hva inkluderer det?", a: "Alt fra standard hjemmerengjøring + prioritert booking og medlemspriser." },
    ],
  },
  {
    slug: "airbnb-vask",
    title: "Airbnb-vask",
    short: "Profesjonell vask mellom gjester – inkludert sengeskifte og restocking.",
    icon: BedDouble,
    description:
      "CleanAura er din pålitelige partner for Airbnb-, Booking- og korttidsutleie. Vi sørger for at boligen er hotell-ren mellom hver gjest, med ferskt sengetøy, fylte forbruksvarer og dokumentert kvalitet. Vi jobber raskt mellom check-out og check-in, og rapporterer eventuelle skader umiddelbart.",
    includes: [
      "Full rengjøring mellom hver gjest",
      "Sengeskifte og rene håndklær",
      "Vask av kjøkken og bad",
      "Restocking av såpe, papir, kaffe etc.",
      "Foto-rapport ved skader",
      "Sjekkliste etter Superhost-standard",
    ],
    benefits: [
      { title: "5-stjerners standard", desc: "Vi vet hva som gir Superhost-status." },
      { title: "Rask responstid", desc: "Klar mellom check-out og check-in samme dag." },
      { title: "Vaskeritjeneste", desc: "Sengetøy og håndklær vaskes hos profesjonelt vaskeri." },
    ],
    forWho: "Airbnb-verter, Booking.com-utleiere, Superhost-eiendommer og eiendomsforvaltere.",
    pricing: [
      { name: "Studio / 1 soverom", price: "fra 690 kr", note: "Per turnover" },
      { name: "2 soverom", price: "fra 890 kr", note: "Per turnover" },
      { name: "Stor leilighet/hus", price: "fra 1 290 kr", note: "Per turnover" },
    ],
    steps: [
      { title: "Koble til kalender", desc: "Vi synker med Airbnb/Booking." },
      { title: "Automatisk booking", desc: "Vi planlegger vask etter hver gjest." },
      { title: "Utførelse", desc: "Rent, klart og foto-dokumentert." },
      { title: "Faktura månedlig", desc: "Samlet faktura med oversikt." },
    ],
    faq: [
      { q: "Kan dere håndtere flere enheter?", a: "Ja, vi forvalter porteføljer fra 1 til 50+ enheter." },
      { q: "Hva med vaskeri?", a: "Vi har avtale med profesjonelt vaskeri – alltid ferskt sengetøy." },
      { q: "Hvor raskt kan dere komme?", a: "Vi har fleksible team og kan komme samme dag." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

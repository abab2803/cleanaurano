export type City = {
  slug: string;
  name: string;
  intro: string;
  body: string[];
  neighborhoods: string[];
};

export const cities: City[] = [
  {
    slug: "oslo",
    name: "Oslo",
    intro:
      "CleanAura er Oslos foretrukne renholdspartner – fra Frogner til Grünerløkka, fra Bjørvika til Holmenkollen. Vi leverer profesjonell rengjøring til både private hjem, leiligheter, kontorer og næringseiendommer.",
    body: [
      "Oslo er en travel by hvor tid er en luksus. Vi hjelper hundrevis av Oslo-familier hver uke med å frigjøre tid og slippe stress, slik at hverdagen kan brukes på familie, jobb og fritid – ikke på vask. Våre faste renholdere kjenner byen, kan kollektivtransporten og møter alltid presis.",
      "Vi tilbyr alle våre tjenester i Oslo: hjemmerengjøring, flyttevask med godkjent-garanti, kontorvask for bedrifter i sentrum, visningsvask for meglere og Airbnb-vask for korttidsutleie. Vi har et stort team og rask responstid – ofte kan vi komme samme uke.",
      "Som Oslo-basert selskap forstår vi byens særtrekk – fra borettslag på Grünerløkka til eneboliger på Vinderen og firmaer på Skøyen. Uansett behov, leverer vi skinnende resultat.",
    ],
    neighborhoods: [
      "Sentrum",
      "Frogner",
      "Majorstuen",
      "Grünerløkka",
      "Bjørvika",
      "Skøyen",
      "Nordstrand",
      "Holmenkollen",
      "Sagene",
      "St. Hanshaugen",
      "Tøyen",
      "Gamle Oslo",
    ],
  },
  {
    slug: "baerum",
    name: "Bærum",
    intro:
      "Vi leverer premium rengjøringstjenester i hele Bærum – fra Sandvika og Bekkestua til Stabekk og Snarøya. CleanAura er den foretrukne partneren for familier, boligforeninger og bedrifter i kommunen.",
    body: [
      "Bærum er kjent for vakre eneboliger, store leiligheter og et høyt servicenivå. Vi har spesialisert oss på å levere førsteklasses renhold til boliger i Bærum, med faste renholdere som kjenner husene og familiene de jobber for.",
      "Mange av våre Bærum-kunder velger fast renhold – hver uke eller annenhver uke. Vi tilbyr også flyttevask med godkjent-garanti, vindusvask av store fasader og kontorvask for bedrifter på Lysaker og Fornebu.",
      "Med korte avstander og effektiv logistikk kan vi tilby raske oppdrag i hele Bærum, ofte med oppstart innen 48 timer.",
    ],
    neighborhoods: ["Sandvika", "Bekkestua", "Stabekk", "Snarøya", "Lysaker", "Fornebu", "Høvik", "Rykkinn", "Bærums Verk"],
  },
  {
    slug: "asker",
    name: "Asker",
    intro:
      "CleanAura leverer profesjonell rengjøring i Asker kommune – fra Asker sentrum til Heggedal, Vollen og Holmen. Vi tar oss av hjem, kontor og næringsbygg.",
    body: [
      "Asker er en grønn og familievennlig kommune hvor mange ønsker mer fritid og mindre tid til husarbeid. CleanAura gir deg den friheten – med faste team som leverer skinnende rene hjem hver uke.",
      "Vi tilbyr hele vårt tjenestespekter i Asker: hjemmerengjøring, flyttevask, vindusvask, byggvask og Airbnb-vask. Våre renholdere har lokalkunnskap og bil – vi kommer overalt i kommunen.",
      "Bedrifter på Asker Næringspark og i sentrum bruker oss for fast kontorrenhold med dokumentert kvalitet og månedlig oppfølging.",
    ],
    neighborhoods: ["Asker sentrum", "Heggedal", "Vollen", "Holmen", "Nesbru", "Borgen", "Hvalstad"],
  },
  {
    slug: "lillestrom",
    name: "Lillestrøm",
    intro:
      "Vi leverer rengjøringstjenester i Lillestrøm og Romerike – fra Lillestrøm sentrum til Strømmen, Skedsmokorset og Kjeller. Pålitelig, lokal og profesjonell.",
    body: [
      "Lillestrøm vokser raskt med nye boliger, kontorer og næringsbygg. CleanAura følger med – vi har bygget opp et sterkt lokalt team som leverer rengjøring til både private og bedrifter i hele Romerike.",
      "Vi tilbyr hjemmerengjøring til faste lave priser, flyttevask med godkjent-garanti, og bedriftsavtaler for kontorer rundt Lillestrøm stasjon og Kjeller næringspark.",
      "Bo i Lillestrøm-området? Få en fast renholder du kan stole på – uten bindingstid.",
    ],
    neighborhoods: ["Lillestrøm sentrum", "Strømmen", "Skedsmokorset", "Kjeller", "Lørenskog", "Rælingen"],
  },
  {
    slug: "drammen",
    name: "Drammen",
    intro:
      "CleanAura tilbyr profesjonell rengjøring i Drammen og omegn – fra Bragernes og Strømsø til Konnerud, Mjøndalen og Krokstadelva.",
    body: [
      "Drammen er en by i sterk utvikling, med nye boliger og spennende byutvikling. Våre renholdere kjenner byen godt og leverer kvalitetsrenhold til private hjem og bedrifter over hele kommunen.",
      "Vi har et bredt tjenestespekter også i Drammen: fast hjemmerengjøring, garantert flyttevask, vindusvask av høyhus og næringseiendommer, samt sluttvask etter byggeprosjekter.",
      "Få et uforpliktende tilbud i dag – vi har ofte ledig kapasitet og kan starte raskt.",
    ],
    neighborhoods: ["Bragernes", "Strømsø", "Konnerud", "Mjøndalen", "Krokstadelva", "Åssiden", "Gulskogen"],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

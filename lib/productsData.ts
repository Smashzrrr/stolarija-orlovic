export type ProductSlug = 
  | 'alu-stolarija' | 'pvc-stolarija' | 'drvo-aluminij' 
  | 'ulazna-vrata' | 'garazna-vrata' | 'rolete-komarnici' 
  | 'grilje' | 'klupice' | 'ostali-proizvodi';

export interface ProductData {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const productsData: Record<ProductSlug, ProductData> = {
  'alu-stolarija': {
    title: 'ALU Stolarija',
    description: 'Vrhunska aluminijska stolarija za moderan izgled i maksimalnu izdržljivost. Otporna na sve vremenske uvjete, uz dugogodišnju garanciju. Idealna za velike staklene površine i poslovne prostore.',
    features: ['Visoka čvrstoća profila', 'Moderan i elegantan dizajn', 'Dugotrajnost', 'Otpornost na koroziju'],
    image: 'https://images.unsplash.com/photo-1600607687931-cebf10cbdbcb?q=80&w=2070&auto=format&fit=crop'
  },
  'pvc-stolarija': {
    title: 'PVC Stolarija',
    description: 'Energetski učinkoviti PVC prozori i vrata s vrhunskim profilima. Vrhunska zvučna i toplinska izolacija za vaš dom, koja značajno smanjuje troškove grijanja.',
    features: ['Toplinska izolacija vrhunske klase', 'Izvrsna zvučna izolacija', 'Povoljnija cijena uz visoku učinkovitost', 'Širok izbor boja i drvodekora'],
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop'
  },
  'drvo-aluminij': {
    title: 'Drvo / Aluminij Stolarija',
    description: 'Savršen spoj prirode i moderne tehnologije. Toplina i estetika pravog drveta s unutarnje strane, uz maksimalnu zaštitu aluminija s vanjske strane.',
    features: ['Prirodan ugođaj drveta u interijeru', 'Aluminijska zaštita izvana bez održavanja', 'Premium kvaliteta i prestižan izgled', 'Odlična ukupna izolacija'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  'ulazna-vrata': {
    title: 'Ulazna Vrata',
    description: 'Sigurna, čvrsta i estetski privlačna ulazna vrata od PVC i ALU materijala. Prvi dojam vašeg doma, dizajnirana da izdrže desetljeća.',
    features: ['Visoka protuprovalna zaštita', 'Mnoštvo modernih i klasičnih dizajna', 'Vrhunska brtvljenost protiv propuha', 'Višestruko zaključavanje'],
    image: 'https://images.unsplash.com/photo-1518349669145-8120fa26f332?q=80&w=2074&auto=format&fit=crop'
  },
  'garazna-vrata': {
    title: 'Garažna Vrata',
    description: 'Sekcijska i rolo garažna vrata s ugrađenim motorima provjerene kvalitete. Tihi rad na dodir gumba i visoka razina sigurnosti za vašu imovinu.',
    features: ['Daljinsko i pametno upravljanje', 'Izuzetna toplinska izolacija panela', 'Iznimno tih i pouzdan rad', 'Sustav protiv priklještenja prstiju'],
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2532&auto=format&fit=crop'
  },
  'rolete-komarnici': {
    title: 'Rolete & Komarnici',
    description: 'Efikasna zaštita od sunca, znatiželjnih pogleda i nepoželjnih insekata. Naša rješenja savršeno se integriraju s vašom stolarijom.',
    features: ['Aluminijske rolete ispunjene poliuretanom', 'Potpuno zatamnjenje prostora', 'Fiksni i rolo komarnici po mjeri', 'Ugradnja motora u rolete'],
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop'
  },
  'grilje': {
    title: 'Aluminijske Grilje',
    description: 'Mediteranski šarm i tradicionalni stil uz modernu, dugotrajnu izvedbu. Aluminijske grilje otporne na morsku sol, hrđu i jako sunce.',
    features: ['Pomične i fiksne lamele', 'Ne zahtijevaju redovito farbanje', 'Mogućnost odabira svih RAL boja zgrada', 'Rustikalni okovi po želji'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  },
  'klupice': {
    title: 'Prozorske Klupice',
    description: 'Unutarnje i vanjske prozorske klupice u raznim dezenima i materijalima. Osiguravaju savršen spoj stolarije i zida.',
    features: ['Vanjske ALU klupice raznih boja', 'Unutarnje PVC klupice visokog sjaja ili mat', 'Kamene klupice po mjeri', 'Zaštita zida ispod prozora'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  },
  'ostali-proizvodi': {
    title: 'Zimski Vrtovi i Ostalo',
    description: 'Zastakljivanje terasa, balkonske ograde od aluminija i stakla te prozračni zimski vrtovi s kliznim stijenama.',
    features: ['Izrada zimskih vrtova', 'Aluminijske i staklene ograde', 'Sjenila po narudžbi', 'Individualna rješenja na zahtjev'],
    image: 'https://images.unsplash.com/photo-1613490900233-141c5eb694a1?q=80&w=1974&auto=format&fit=crop'
  }
};

import { Author } from './author';

var path = './assets/DataImage/authors/'

export const AUTHORS: Author[] =   [
    {
        id: 1,
        name: "Sony",
        surname: "",
        dataOfBirth: "07/05/1946",
        description: "L'azienda è una multinazionale giapponese con sede stabile a Tokyo. Il core dell'azienda è quello dell'elettronica di consumo, ed è particolarmente famosa nel campo dell'intrattenimento, specialmente nell'ambito dei videogiochi.",
        logo: path+'sonylogo.png'
    }, {
        id: 2,
        name: "Kodak",
        surname: "",
        dataOfBirth: "01/01/1878",
        description: "La Kodak è un'azienda multinazionale statunitense concentrata sulla tecnologia, in particolare oggi è famosa per i prodotti di elettronica. E' stata fondata da George  Eastman a Rochester, New York.",
        logo: path+'kodaklogo.png'
    }, {
        id: 3,
        name: "JVC",
        surname: "",
        dataOfBirth: "01/01/1927",
        description: "Questa azienda giapponese è stata fondataa a Yokohama e si concentra sull'elettronica di consumo. Uno dei fondatori è stato Kunihko Sato e i loro prodotti principali sono: televisori, radio, videocamere, videoproiettori e lettori DVD e BluRay.",
        logo: path+'jvclogo.png'
    }, {
        id: 4,
        name: "David Paul",
        surname: "Gregg",
        dataOfBirth: "11/03/1923",
        description: "Gregg è stato l'inventore del Laser Disc mentre lavorava per l'azienda di elettronica Western Electric. ",
        logo: path+'paulgregg.jpg'
    }, {
        id: 5,
        name: "James",
        surname: "Russel",
        dataOfBirth: "01/01/1931",
        description: "Insieme a Gregg è stato uno dei due inventori del Laser Disc. E' stato un dipendente della General Electrics vicino Washington",
        logo: path+'russel.jpg'
    }, {
        id: 6,
        name: "Thomas",
        surname: "Edison",
        dataOfBirth: "11/02/1847",
        description: "Edison, nato a Milano, è stato un importante inventore ed imprenditore statunitense. E' considerato uno dei più importanti inventori, il più prolifico della sua era e seppe applicare i principi della produzione di massa al processo dell'invenzione. Ha ottenuto il record di brevetti registrati a suo nome in tutto il mondo, incluso Regno Unito, USA, Francia e Germania.",
        logo: path+'edison.jpg'
    }, {
        id: 7,
        name: "RCA Victor",
        surname: "",
        dataOfBirth: "01/01/1945",
        description: "La RCA Victor è stata una casa discografica statunitense, nata dalla fusione della RCA americana e quella italiana.",
        logo: path+'rcalogo.png'
    }, {
        id: 8,
        name: "AEG",
        surname: "",
        dataOfBirth: "01/01/1887",
        description: "La Allgemeine Elektricitats-Gesellschaft è stata un'azienda produttrice di elettrodomestici tedesca, con sede principale a Francoforte sul Meno e successivamente a Berlino. Era parte del gruppo Electrolux ed è stata fondata da Emil Rathenau.",
        logo: path+'aeglogo.png'
    }, {
        id: 9,
        name: "Philips",
        surname: "",
        dataOfBirth: "01/01/1891",
        description: "Fondata nei Paesi Bassi, ad Eindhoven, la Philips ha la sua sede principale ad Amsterdam e i due fondatori sono stati Gerard Philips e Anton Philips. E' stata una delle maggiori aziende al mondo nel settore elettronico, occupandosi di audio, video, illuminazione, microprocessori, compact disc e piccoli elettrodomestici.",
        logo: path+'philipslogo.png'
    }, {
        id: 10,
        name: "Texas Instrument",
        surname: "",
        dataOfBirth: "01/01/1930",
        description: "Fondata da Cecil Howard Green, la Texas Instruments è un'azienda statunitense con sede a Dallas, in Chicago. E' stata una multinazionale di prodotti di tecnologia informatica in generale.",
        logo: path+'texaslogo.png'
    }, {
        id: 11,
        name: "Claude",
        surname: "Chappe",
        dataOfBirth: "25/12/1763",
        description: "Chappe è stato un inventore francese che per primo ideò un sistema di comunicazione a distanza per mezzo di un segnalatore meccanico.",
        logo: path+'chappe.jpg'
    }, {
        id: 12,
        name: "Siemens",
        surname: "",
        dataOfBirth: "12/10/1847",
        description: "La Siemens è una multinazionale tedesca, con sede a Monaco di Baviera, fondata da Werner von Siemens. Ancora attiva nei settori delle tecnologie, delle mobilità e dei servizi, è una delle aziende più proficue.",
        logo: path+'siemenslogo.png'
    }, {
        id: 15,
        name: "Psion",
        surname: "",
        dataOfBirth: "01/01/1980",
        description: "La Psion è un'azienda inglese, con sede a Londra, specializzata nel campo della telefonia mobile per scopi industriali e commerciali.",
        logo: path+'psionlogo.png'
    }, {
        id: 16,
        name: "Alfred",
        surname: "J. Gross",
        dataOfBirth: "22/02/1918",
        description: "E' stato un pioniere della comunicazione mobile wireless. Ha inventato e brevettato molti dispositivi di comunicazione, in particolare, ha lavorato ad una versione precedente del famoso WalkieTalkie, ai cercapersone e al telefono cordless. ",
        logo: path+'gross.jpg'
    },  {
        id: 17,
        name: "Hamilton e Electro/Data, Inc",
        surname: "",
        dataOfBirth: "01/01/1982",
        description: "Questa è stata una delle più proficue aziende americane di orologi. Questa compagnia ha lanciato sul mercato più di 800 modelli. Erano considerati un'azienda innovativa in quanto per primi hanno cominciato a lavorare e a vendere le singole parti degli orologi, permettendo ai clienti di lavorare con le loro miniature.",
        logo: path+'hamiltonlogo.png'
    },  {
        id: 18,
        name: "Seiko",
        surname: "",
        dataOfBirth: "01/01/1881",
        description: "Quest'azienda giapponese inventa, produce e mette in commercio orologi da polso, tasca, parete e altri dispositivi elettronici; oltre ad elettrodomestici, gioielli e prodotti ottici. E' infatti un'azienda attiva in molti settori, e questo la rende una delle più produttive al mondo. Risulta essere la seconda azienda al mondo per la produzione di orologi.",
        logo: path+'seikologo.png'
    }, {
        id: 19,
        name: "Casio",
        surname: "",
        dataOfBirth: "01/01/1946",
        description: "La Casio è una società giapponese che basa il suo mercato sulla produzione di prodotti elettronici. E' particolarmente riconosciuta per essere una famosa produttrice di orologi a bassi prezzi, ma le va riconosciuto il merito di aver realizzato la prima calcolatrice elettrica compatta. Oltre a questi ultimi è anche un'importante produttrice di fotocamere, videoproiettori, telefoni cellulari e strumenti musicali.",
        logo: path+'casiologo.png'
    },{
        id: 20,
        name: "Philo Taylor",
        surname: "Farnsworth",
        dataOfBirth: "19/08/1906",
        description: "Farnsworth è stato un inventore statunitense. Risulta infatti essere il primo nella storia a realizzare un televisore elettronico. Il televisore da lui realizzato è stato quello che oggi conosciamo come <i>Televisore a tubo catodico</i>.",
        logo: path+'farnsworth.jpg'
    },{
        id: 21,
        name: "Peter",
        surname: "Mitterhofer",
        dataOfBirth: "20/09/1822",
        description: "Mitterhofer è stato un artigiano austriaco particolarmente famoso e conosciuto per aver realizzato diversi tipi di macchina da scrivere. ",
        logo: path+'mitterhofer.jpg'
    },{
        id: 22,
        name: "Iomega",
        surname: "",
        dataOfBirth: "01/01/1980",
        description: "Questa azienda è stata una delle più grandi compagnie per la manifattura di soluzioni per l'archiviazione dei dati. Tra le soluzioni più famose abbiamo: Iomega Zip, Jaz, and Ditto drives, tutti prodotti creati dalla Iomega.",
        logo: path+'iomegalogo.png'
    },{
        id: 23,
        name: "IBM",
        surname: "",
        dataOfBirth: "07/05/1946",
        description: "La IBM è una delle più importanti e potenti aziende al mondo nel settore informatico. Offrono infrastrutture e servizi di hosting, oltre ai classici servizi informatici (hardware e software).",
        logo: path+'ibmlogo.png'
    },{
        id: 24,
        name: "Edwin Herbert",
        surname: "Land",
        dataOfBirth: "07/05/1909",
        description: "Land è stato un inventore e imprenditore degli Stati Uniti, creatore della Polaroid e pioniere nel campo dei filtri polarizzanti. Per primo, ha proiettato una foto a colori, dimostrando che è il cervello il vero protagonista nel meccanismo di percezione dei colori.",
        logo: path+'land.jpg'
    },{
        id: 25,
        name: "Eadweard",
        surname: "Muybridge",
        dataOfBirth: "09/04/1904",
        description: "Muybridge, originariamente noto come Edward James Muggeridge, è stato un pioniere nell'ambito della fotografia. Inizialmente libraio ed editore, decide di interessarsi all'ambito fotografico realizzando dei servizi per il famoso Parco Nazionale di Yosemite e poi di San Francisco.",
        logo: path+'muybridge.jpg'
    },{
        id: 26,
        name: "Columbia Records",
        surname: " ",
        dataOfBirth: "01/01/1888",
        description: "Questa è stata una delle prime case discografiche americana, nota per aver utilizzato per prima come supporto audio il disco in vinile. Inoltre è stata una delle prime compagnie ad utilizzare il disco a doppia faccia, ovvero dotati di lato A e di lato B.",
        logo: path+'columbialogo.png'
    },{
        id: 27,
        name: "Bill",
        surname: "Lear",
        dataOfBirth: "26/06/1978",
        description: "Bill Lear è stato un imprenditore statunitense particolarmente proficuo nell'ambito nell'audio. E' infatti divenuto noto per aver inventato lo Stereo 8, oltre al battery eliminator e per la B battery.",
        logo: path+'lear.jpg'
    },{
        id: 28,
        name: " ",
        surname: " ",
        dataOfBirth: "",
        description: "",
        logo: path+''
    },{
        id: 29,
        name: " ",
        surname: " ",
        dataOfBirth: "",
        description: "",
        logo: path+''
    },

];

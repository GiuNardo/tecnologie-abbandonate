
import { Data } from 'src/app/data';

export const DATA: Data[] =   [
  {
    id: 1,
    name: 'Super 8',
    description: 'Il Super 8 millimetri è un formato cinematografico. ',
    shortDescription: 'La Super 8 millimetri, o semplicemente Super 8, è una videocamera che utilizza nello specifico il formato 8 millimetri, dal quale prende il nome.',
    category: 'fotografia',
    dateFrom: 'year 1965',
    dateTo: 'year 1075',
    yearFrom: 1965,
    yearTo: 1975,
    author: 'Kodak',
    latitude: 43.157285,
    longitude: -77.615214,
    fill : '#38bc9b',
    image: './assets/DataImage/lomo-super-8.png',
    license : ""
  },{
    id: 2,
    name: 'Betamax',
    description: 'Videocassette.',
    shortDescription: 'Primo sistema di videoregistrazione a nastro magnetico, ideato appositamente per il mercato domestico. ',
    category: 'video',
    dateFrom: '10/05/1975',
    dateTo: '1/12/2002',
    yearFrom: 1975,
    yearTo: 2002,
    author: 'Sony',
    latitude: 36,
    longitude: 140,
    fill : '#db50a4',
    image: './assets/DataImage/betamax.png',
    license : ""
  },{
    id: 3,
    name: 'Formato VHS',
    description: 'Formato video predominante degli anni \'80. ',
    shortDescription: 'Sistema di videoregistrazione standard in formato analogico su supporto meccanico. ',
    category: 'video',
    dateFrom: '09/11/1976',
    dateTo: 'year 2008',
    yearFrom: 1976,
    yearTo: 2008,
    author: 'JVC',
    latitude: 35.444991,
    longitude: 139.636768,
    fill : '#db50a4',
    image: './assets/DataImage/vhs.png',
    license : ""
  },{
    id: 4,
    name: 'Laserdisc',
    description: 'Primo standard di registrazione su disco ottico. ',
    shortDescription: 'Simili ai classici CD, ma dalle dimensioni dei vinili.',
    category: 'video',
    dateFrom: '11/12/1978',
    dateTo: 'year 1995',
    yearFrom: 1978,
    yearTo: 1995,
    author: 'David Paul Greg - James Russell',
    latitude: 33.839722 ,
    longitude: -118.259722 ,
    fill :'#db50a4',
    image: '',
    license:""
  },{
    id: 5 ,
    name: 'Grammofono',
    description: 'Sistema di registrazione e riproduzione del suono. ',
    shortDescription: 'Questo strumento permetteva di registrare suoni e melodie su degli appositi dispositivi che lo supportavano, rendendo quindi possibile riascoltare ciò che si era inciso in precedenza. ',
    category: 'audio',
    dateFrom: 'year 1877',
    dateTo: 'year 1929',
    yearFrom: 1877,
    yearTo: 1929,
    author: 'Thomas Edison',
    latitude: 40.565,
    longitude: -74.3375 ,
    fill : '#dd9933',
    image: './assets/DataImage/old-gramophone.png',
    license:""
  },{
    id: 6 ,
    name: 'Giradischi',
    description: 'Dispositivi per registrare e ascoltare suoni e musica.',
    shortDescription: 'Il giradischi è l\'evoluzione economica del grammofono.',
    category: 'audio',
    dateFrom: 'year 1937',
    dateTo: 'year 1997',
    yearFrom: 1937,
    yearTo: 1997,
    author: 'RCA Victor',
    latitude: 39, 
    longitude: -76,
    fill: "#dd9933",
    image: './assets/DataImage/vinyl.png',
    license:""
  },{
    id: 7,
    name: 'Bobina Aperta',
    description: 'Supporto per la registrazione del suono / reel-to-reel',
    shortDescription: 'La bobina aperta è un formato di nastro magnetico che lascia un\'estremità del nastro libera',
    category: 'audio',
    dateFrom: 'year 1950',
    dateTo: 'year 2000',
    yearFrom: 1950,
    yearTo: 2000,
    author: 'AEG',
    latitude: 52.5170365,
    longitude: 13.3888599,
    fill : '#dd9933',
    image: '',
    license : ""
  },{
    id: 8,
    name: 'Registratore a nastro',
    description: 'Dispositivo per la registrazione su cassette a nastro',
    shortDescription: ' In origine lanciato sul mercato nel come dispositivo per dettatura vocale progettato per uso portatile e successivamente utilizzato per la lettura delle cassette audio ',
    category: 'audio',
    dateFrom: 'year 1963',
    dateTo: 'year 2000',
    yearFrom: 1963,
    yearTo: 2000,
    author: 'Philips',
    latitude: 52.366667 ,
    longitude: 4.866667 ,
    fill: '#dd9933',
    image: '',
    license : ""
  },{
    id: 9 ,
    name: 'Radio Transistor',
    description: 'Dispositivo audio con circuito a transistor',
    shortDescription: 'Dispositivo di piccole dimensioni funzionante grazie ad circuito a transistor utilizzato per la riproduzione di segnali audio',
    category: 'audio',
    dateFrom: 'year 1954',
    dateTo: 'still in use',
    yearFrom: 1954,
    yearTo: 2019,
    author: 'Texas Instruments',
    latitude: 32.783333,
    longitude: -96.8,
    fill:'#dd9933',
    image: './assets/DataImage/radio.png',
    license : ""
  },{
    id:10 ,
    name: 'Cassette',
    description: 'Supporto audio a nastro magnetico / compact cassette',
    shortDescription: 'Supporto per nastro magnetico analogico utilizzato per la registrazione e la riproduzione audio.',
    category: 'audio',
    dateFrom: 'year 1962',
    dateTo: 'still in use',
    yearFrom: 1962,
    yearTo: 2019,
    author: 'Philips',
    latitude: 50.93,
    longitude: 5.3375,
    fill: '#dd9933',
    image: './assets/DataImage/cassette.png',
    license : ""
  },{
    id: 11,
    name: 'Ghetto Blaster',
    description: 'Stereo Portatile',
    shortDescription: 'Stereo portatile con altoparlanti integrati in grado di riprodurre musicassette e sintonizzarsi su stazioni radio',
    category: 'audio',
    dateFrom: 'year 1966',
    dateTo: 'year 2003',
    yearFrom: 1966,
    yearTo: 2003,
    author: 'Philips',
    latitude: 52.366667,
    longitude: 4.866667,
    fill: '#dd9933',
    image: '',
    license : ""
  },{
    id: 12,
    name:  'Telegrafo',
    description: 'Il telegrafo è un sistema di comunicazione a distanza',
    shortDescription: 'La comunicazione per mezzo del telegrafo è definita telegrafia e si distingue dal telefono e dalla telefonia, che è un sistema di trasmissione sviluppato successivamente, nato per il trasferimento di dati vocali e che nel tempo ha sostituito il telegrafo',
    category: 'comunicazione',
    dateFrom: 'year 1793',
    dateTo: '21/06/2013',
    yearFrom: 1893,
    yearTo: 2013,
    author: 'Claude Chappe',
    latitude:48.856667,
    longitude:2.351944,
    fill:'#3594dd',
    image: './assets/DataImage/telegraph.png',
    license : ""
  },{
    id: 13,
    name: 'Telex',
    description: 'Sistema di telecomunicazione',
    shortDescription: 'Un sistema di telecomunicazione sviluppato a partire dagli anni trenta e largamente usato nel XX secolo per la corrispondenza commerciale tra aziende',
    category: 'comunicazione',
    dateFrom: 'year 1930',
    dateTo: '31/12/2001',
    yearFrom: 1930,
    yearTo: 2001,
    author: 'Servizio postale del Reich',
    latitude:52.516667 ,
    longitude:52.516667,
    fill:'#3594dd',
    image: '',
    license : ""
  },{
    id: 14,
    name: 'Siemens S62',
    description: 'Telefono a disco',
    shortDescription: '',
    category: 'comunicazione',
    dateFrom: 'year 1962',
    dateTo: 'year 1985',
    yearFrom: 1962,
    yearTo: 1985,
    author: 'Siemens',
    latitude: 48.137194 ,
    longitude: 11.5755,
    fill: '#3594dd',
    image: '',
    license : ""
  },{
    id: 15,
    name: 'Computer Palmare',
    description: 'PDA. E\' un computer di dimensioni contenute, tali da essere portato sul palmo di una mano, dotato di uno schermo tattile',
    shortDescription: '',
    category: 'computer',
    dateFrom: '-',
    dateTo: 'year 2010',
    yearFrom: 1984,
    yearTo: 2010,
    author: 'Psion',
    latitude: 51.1121679,
    longitude: -0.5720182,
    fill:'#f87060',
    image: '',
    license : ""
  },{
    id: 16,
    name: 'Watchman',
    description: 'televisore portatile',
    shortDescription: '',
    category: 'video',
    dateFrom: 'year 1982',
    dateTo: 'year 2000',
    yearFrom: 1982,
    yearTo: 2000,
    author: 'Sony',
    latitude: 34,
    longitude: 138,
    fill : '#db50a4',
    image: '',
    license : ""
  },{
    id: 17,
    name: 'Walkman',
    description: 'lettore di musicassette',
    shortDescription: '',
    category: 'audio',
    dateFrom: '01/07/1979',
    dateTo: '22/10/2010',
    yearFrom: 1979,
    yearTo: 2010,
    author: 'Sony',
    latitude: 34.5,
    longitude: 139.239128,
    fill : '#dd9933',
    image: './assets/DataImage/walkman.png',
    license : ""
  },{
    id: 18 ,
    name: 'Cercapersone',
    description: 'Pagers apparecchio elettronico precedente ai telefoni cellulare',
    shortDescription: '',
    category: 'comunicazione',
    dateFrom: 'year 1949',
    dateTo: 'year 2001',
    yearFrom: 1949,
    yearTo: 2001,
    author: '',
    latitude: 40.6906512,
    longitude: -74.2534548,
    fill: '#3594dd',
    image: '',
    license : ""
  },
]/*{
    id: 19,
    name: 'Pulsar',
    description: 'Primo orologio led',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude: ,
    fill: '',
    image: '',
  }, {
    id: 20,
    name: 'TV Watch',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 21,
    name: 'Seiko Wrist Computer',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  }, {
    id: 22,
    name: 'Calculator Watches',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  }, {
    id: 23,
    name: 'Monitor a Tubo Catodico',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  }, {
    id: 24,
    name: 'Macchina da Scrivere',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 25,
    name: 'Dial-up Modem',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 26,
    name: 'Zip Drive',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 27,
    name: 'Proiettore di Diapositive',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 28,
    name: 'Floppy Disk',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 29,
    name: 'Polaroid',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 30,
    name: 'Videoproiettore a nastro',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  }, {
    id: 31,
    name: 'Disco in Vinile',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 32,
    name: 'Televisione a Tubo Catodico',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  },  {
    id: 33,
    name: 'Stereo8',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  }
]

  /**
   * {
    id: ,
    name: '',
    description: '',
    shortDescription: '',
    category: '',
    dateFrom: '',
    dateTo: '',
    yearFrom: ,
    yearTo: ,
    author: '',
    latitude: ,
    longitude:,
    fill: '',
    image: '',
  }
  */

  /**
   * Tape Drives
   * {
    id: 18 ,
    name: 'Discman',
    description: 'Lettore cd',
    shortDescription: '',
    category: '',
    dateFrom: 'year 1984',
    dateTo: 'year 2019',
    yearFrom: 1984,
    yearTo: 201,
    author: 'Sony',
    latitude: 35.5,
    longitude:,
    fill: '',
    image: '',
  }
  */
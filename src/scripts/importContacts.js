require('dotenv').config();
const { initMongoConnection } = require('../db/initMongoConnection');
const Contact = require('../db/models/Contact');

const contacts = [
  {
    "name": "Akçiçek Yılmaz",
    "phoneNumber": "+380000000001",
    "email": "yılmaz1@example.com",
    "isFavourite": false,
    "contactType": "personal"
  },
  {
    "name": "Fatma Kaya",
    "phoneNumber": "+380000000002",
    "email": null,
    "isFavourite": false,
    "contactType": "personal"
  },
  {
    "name": "Gülüm Demir",
    "phoneNumber": "+380000000003",
    "email": "demir3@example.com",
    "isFavourite": false,
    "contactType": "home"
  },
  {
    "name": "Güzel Çelik",
    "phoneNumber": "+380000000004",
    "email": null,
    "isFavourite": false,
    "contactType": "personal"
  },
  {
    "name": "Hayat Kaplan",
    "phoneNumber": "+380000000005",
    "email": "kaplan5@example.com",
    "isFavourite": false,
    "contactType": "personal"
  },
  {
    "name": "Ceren Şahin",
    "phoneNumber": "+380000000006",
    "email": null,
    "isFavourite": false,
    "contactType": "home"
  },
  {
    "name": "Gönül Yıldırım",
    "phoneNumber": "+380000000007",
    "email": "yıldırım7@example.com",
    "isFavourite": false,
    "contactType": "personal"
  },
  {
    "name": "Ergem Öztürk",
    "phoneNumber": "+380000000008",
    "email": null,
    "isFavourite": false,
    "contactType": "personal"
  },
  {
    "name": "Çiğdem Aydın",
    "phoneNumber": "+380000000009",
    "email": "aydın9@example.com",
    "isFavourite": false,
    "contactType": "home"
  },
  {
    "name": "Erden Özdemir",
    "phoneNumber": "+3800000000010",
    "email": null,
    "isFavourite": false,
    "contactType": "personal"
  }
];

const importContacts = async () => {
  try {
    await initMongoConnection();
    
    // Mevcut koleksiyonu temizle
    await Contact.deleteMany({});
    
    // Yeni verileri ekle
    const result = await Contact.insertMany(contacts);
    
    console.log(`${result.length} kişi başarıyla içe aktarıldı!`);
    process.exit(0);
  } catch (error) {
    console.error('Veri aktarımı sırasında hata:', error);
    process.exit(1);
  }
};

importContacts(); 
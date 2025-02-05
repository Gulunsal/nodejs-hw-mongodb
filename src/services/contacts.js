const Contact = require('../db/models/Contact');

const getAllContacts = async () => {
  return await Contact.find();
};

const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
};

module.exports = {
  getAllContacts,
  getContactById
};

const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

function displayContacts() {
    console.log("Contact List:");
    contactList.forEach((contact, index) => {
        console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    });
}

function addContact() {
    const newContact = { name: "Maisie Haley", phone: "0913 531 3030", email: "risus.Quisque@urna.ca" };
    contactList.push(newContact);
    console.log("\nNew contact added.");
    displayContacts();
}

function showFirstAndLastContacts() {
    const firstContact = contactList[0];
    const lastContact = contactList[contactList.length - 1];
    console.log("\nFirst Contact:");
    console.log(`Name: ${firstContact.name}, Phone: ${firstContact.phone}, Email: ${firstContact.email}`);
    console.log("\nLast Contact:");
    console.log(`Name: ${lastContact.name}, Phone: ${lastContact.phone}, Email: ${lastContact.email}`);
}

displayContacts();

addContact();

showFirstAndLastContacts();

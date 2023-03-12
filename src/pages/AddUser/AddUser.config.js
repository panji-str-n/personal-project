const rules = {
    name: {
     required: "Name is required" 
    },
    eKTP: {
      required: "eKTP is required",
      pattern: {
        message: "eKTP must have 16 characters and number only format",
        value: /^\d{16}$/
      }
    },
    address: {
      required: "address is required"
    },
    job: {
      required: "job is required"
    },
    phoneNumber: {
      required: "phoneNumber is required",
      pattern: {
        value: /^\D*(?:\d\D*){9,}$/,
        message: "Invalid phoneNumber format"
      }
    },
    dateBirth: {
      required: "Date of birth is required"
    },
    familyName:{
      required: "family name is required"
    },
    dateBirthFamily: {
      required: "Date of birth family is required"
    },
    relationshipStatus:{
      required: "relationship status is required"
    },
};

const relationOptions = [
    {
      label: "Sibling",
      value: "sibling"
    },
    {
      label: "Parent",
      value: "parent"
    },
    {
      label: "Spouse",
      value: "spouse"
    },
    {
      label: "Children",
      value: "children"
    }
]

export default {
    rules,
    relationOptions
}

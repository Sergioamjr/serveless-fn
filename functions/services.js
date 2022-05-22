exports.handler = async function (event, context) {
  const services = [
    {
      service: "Gmail",
      id: "119fa3fa-2793-4800-a46f-a400be7da2a9",
      contacts: [
        {
          name: "Friends",
          id: "ae755fda-987c-4a6e-a6ec-219ee29448f0",
        },
        {
          name: "Family",
          id: "65e58d78-92c8-4ce4-84e6-2271b65772c3",
        },
        {
          name: "School",
          id: "4f0bec0f-408e-45f6-a9b1-76af3a9d0729",
        },
      ],
    },
    {
      service: "Mailchimp",
      id: "48bbd4c0-2936-4321-a954-812d27e53d2a",
      contacts: [
        {
          name: "Church",
          id: "fd15ca0f-ddfc-4402-915a-662fee1f9303",
        },
        {
          name: "Work",
          id: "19ded52b-c598-410d-989e-1eb4837e16da",
        },
      ],
    },
  ];
  return {
    statusCode: 200,
    body: JSON.stringify({ services }),
  };
};

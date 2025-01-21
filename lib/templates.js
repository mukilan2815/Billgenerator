const templates = {
  fuel_templates: [
    {
      id: 1,
      title: "Template 1",
      tNumber: 1,
      tag: "Fuel",
      creditRequired: 10,
    },
    {
      id: 2,
      title: "Template 2",
      tNumber: 2,
      tag: "Fuel",
      creditRequired: 10,
    },
    {
      id: 3,
      title: "Template 3",
      tNumber: 3,
      tag: "Fuel",
      creditRequired: 10,
    },
    {
      id: 4,
      title: "Template 4",
      tNumber: 4,
      tag: "Fuel",
      creditRequired: 10,
    },
  ],

  driver_salary_templates: [
    {
      id: 5,
      title: "Template 1",
      tNumber: 1,
      tag: "Driver Salary",
      creditRequired: 10,
    },
    {
      id: 6,
      title: "Template 2",
      tNumber: 2,
      tag: "Driver Salary",
      creditRequired: 10,
    },
    {
      id: 7,
      title: "Template 3",
      tNumber: 3,
      tag: "Driver Salary",
      creditRequired: 10,
    },
  ],
  daily_helper_templates: [
    {
      id: 8,
      title: "Template 1",
      tNumber: 1,
      tag: "Daily Helper Bill",
      creditRequired: 10,
    },
    {
      id: 9,
      title: "Template 2",
      tNumber: 2,
      tag: "Daily Helper Bill",
      creditRequired: 10,
    },
    {
      id: 10,
      title: "Template 3",
      tNumber: 3,
      tag: "Daily Helper Bill",
      creditRequired: 10,
    },
  ],
  rent_bill_templates: [
    {
      id: 11,
      title: "Template 1",
      tNumber: 1,
      tag: "Rent Receipt",
      creditRequired: 10,
    },
    // {
    //   id: 12,
    //   title: "Template 2",
    //   tNumber: 2,
    //   tag: "Rent Receipt",
    //   creditRequired: 10,
    // },
  ],
  restaurant_bill_templates: [
    {
      id: 13,
      title: "Template 1",
      tNumber: 1,
      tag: "Restaurant Bill",
      creditRequired: 10,
    },
    {
      id: 14,
      title: "Template 2",
      tNumber: 2,
      tag: "Restaurant Bill",
      creditRequired: 10,
    },
  ],
  lta_bill_templates: [
    {
      id: 15,
      title: "Template 1",
      tNumber: 1,
      tag: "Restaurant Bill",
      creditRequired: 10,
    },
  ],
  general_bill_templates: [
    {
      id: 16,
      title: "Template 1",
      tNumber: 1,
      tag: "General Bill",
      creditRequired: 10,
    },
  ],

  medical_bill_templates: [
    {
      id: 17,
      title: "Template 1",
      tNumber: 1,
      tag: "Medical Bill",
      creditRequired: 10,
    },
  ],

  gst_bill_templates: [
    {
      id: 18,
      title: "Template 1",
      tNumber: 1,
      tag: "GST Invoice",
      creditRequired: 10,
    },
  ],
  wifi_bill_templates: [
    {
      id: 19,
      title: "Template 1",
      tNumber: 1,
      tag: "Wifi Invoice",
      creditRequired: 10,
    },
    {
      id: 20,
      title: "Template 2",
      tNumber: 2,
      tag: "Wifi Invoice",
      creditRequired: 10,
    },
  ],
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

module.exports = { templates, months };

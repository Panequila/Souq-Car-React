const CARS_DATA = [
  {
    title: "cars_for_sale",
    cars: [
      {
        id: 1,
        data_en: {
          name: "Honda Civic",
          manufactureDate: "January 1, 2022",
          kilometersDone: 5000,
          imageUrl: "https://example.com/honda-civic.jpg",
          saleLocation: "Random Location 1",
          price: 25000,
        },
        data_ar: {
          name: "هوندا سيفيك",
          manufactureDate: "١ يناير ٢٠٢٢",
          kilometersDone: "٥٬٠٠٠",
          imageUrl: "https://example.com/honda-civic.jpg",
          saleLocation: "موقع عشوائي ١",
          price: "٢٥٬٠٠٠",
        },
      },
      {
        id: 2,
        data_en: {
          name: "Toyota Camry",
          manufactureDate: "May 10, 2021",
          kilometersDone: 20000,
          imageUrl: "https://example.com/toyota-camry.jpg",
          saleLocation: "Random Location 2",
          price: 30000,
        },
        data_ar: {
          name: "تويوتا كامري",
          manufactureDate: "١٠ مايو ٢٠٢١",
          kilometersDone: "٢٠٬٠٠٠",
          imageUrl: "https://example.com/toyota-camry.jpg",
          saleLocation: "موقع عشوائي ٢",
          price: "٣٠٬٠٠٠",
        },
      },
      {
        id: 3,
        data_en: {
          name: "BMW X5",
          manufactureDate: "November 15, 2020",
          kilometersDone: 10000,
          imageUrl: "https://example.com/bmw-x5.jpg",
          saleLocation: "Random Location 3",
          price: 45000,
        },
        data_ar: {
          name: "بي أم دبليو X5",
          manufactureDate: "١٥ نوفمبر ٢٠٢٠",
          kilometersDone: "١٠٬٠٠٠",
          imageUrl: "https://example.com/bmw-x5.jpg",
          saleLocation: "موقع عشوائي ٣",
          price: "٤٥٬٠٠٠",
        },
      },
      // Add more cars in the same format...
    ],
  },
];

export default CARS_DATA;

export const getMenuData = () => {
  return {
    hero: {
      title: "Menu Lengkap",
      subtitle: "Eksplorasi semua cita rasa terbaik dari Tahara Kopi - dari minuman kopi premium hingga hidangan lezat yang menggoda selera",
      backgroundImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    categories: [
      {
        id: "kopi-minuman",
        name: "Kopi & Minuman",
        icon: "MdLocalCafe",
        items: [
          {
            id: 1,
            name: "Kopi Arabica Premium",
            price: "Rp 25.000",
            description: "Kopi arabica pilihan dengan aroma yang menggoda dan cita rasa yang kompleks",
            bestSeller: false
          },
          {
            id: 2,
            name: "Es Kopi Susu Gula Aren",
            price: "Rp 18.000",
            description: "Perpaduan sempurna kopi robusta dengan gula aren asli yang memberikan rasa manis alami",
            bestSeller: true
          },
          {
            id: 3,
            name: "Cappuccino Tahara",
            price: "Rp 28.000",
            description: "Cappuccino signature dengan foam art yang indah dan cita rasa kopi yang seimbang",
            bestSeller: false
          },
          {
            id: 4,
            name: "Es Matcha Latte",
            price: "Rp 22.000",
            description: "Matcha premium Jepang dengan susu creamy yang menyegarkan dan kaya antioksidan",
            bestSeller: false
          },
          {
            id: 5,
            name: "Americano",
            price: "Rp 20.000",
            description: "Espresso murni dengan tambahan air panas untuk pecinta kopi hitam",
            bestSeller: false
          },
          {
            id: 6,
            name: "Latte Art Special",
            price: "Rp 30.000",
            description: "Latte dengan art khusus dan espresso double shot untuk rasa yang lebih kuat",
            bestSeller: false
          },
          {
            id: 7,
            name: "Vietnamese Drip Coffee",
            price: "Rp 23.000",
            description: "Kopi Vietnam traditional dengan filter khusus dan condensed milk",
            bestSeller: false
          },
          {
            id: 8,
            name: "Cold Brew Original",
            price: "Rp 26.000",
            description: "Kopi dingin yang diseduh selama 12 jam untuk rasa yang smooth dan less acidic",
            bestSeller: true
          }
        ]
      },
      {
        id: "makanan-ringan",
        name: "Makanan Ringan",
        icon: "MdFastfood",
        items: [
          {
            id: 9,
            name: "Pisang Bakar Cokelat",
            price: "Rp 15.000",
            description: "Pisang bakar dengan topping cokelat leleh dan keju mozzarella yang gurih",
            bestSeller: false
          },
          {
            id: 10,
            name: "Roti Bakar Spesial",
            price: "Rp 18.000",
            description: "Roti bakar dengan berbagai pilihan topping manis dan gurih seperti cokelat, keju, selai",
            bestSeller: false
          },
          {
            id: 11,
            name: "French Fries",
            price: "Rp 12.000",
            description: "Kentang goreng crispy dengan bumbu spesial dan saus sambal yang pedas menggigit",
            bestSeller: true
          },
          {
            id: 12,
            name: "Sandwich Club",
            price: "Rp 25.000",
            description: "Sandwich lapis tiga dengan daging ayam smoked, lettuce, tomat dan saus mayo",
            bestSeller: false
          },
          {
            id: 13,
            name: "Nachos Supreme",
            price: "Rp 22.000",
            description: "Tortilla chips dengan cheese sauce, salsa, dan jalapeño untuk sensasi pedas",
            bestSeller: false
          },
          {
            id: 14,
            name: "Onion Rings",
            price: "Rp 14.000",
            description: "Bawang bombay crispy dengan coating tepung berbumbu dan saus tartar",
            bestSeller: false
          },
          {
            id: 15,
            name: "Chicken Wings Honey",
            price: "Rp 28.000",
            description: "Sayap ayam dengan glaze madu dan bumbu BBQ yang manis gurih",
            bestSeller: false
          },
          {
            id: 16,
            name: "Spring Rolls",
            price: "Rp 16.000",
            description: "Lumpia goreng isi sayuran segar dengan saus asam manis yang segar",
            bestSeller: false
          }
        ]
      },
      {
        id: "makanan-berat",
        name: "Makanan Berat",
        icon: "MdRestaurant",
        items: [
          {
            id: 17,
            name: "Ramen Spesial Tahara",
            price: "Rp 35.000",
            description: "Ramen kuah gurih tonkotsu dengan topping lengkap, telur setengah matang, dan irisan daging sapi yang empuk",
            bestSeller: true
          },
          {
            id: 18,
            name: "Nasi Goreng Kopi",
            price: "Rp 28.000",
            description: "Nasi goreng unik dengan aroma kopi yang menggugah selera, dilengkapi telur mata sapi dan kerupuk",
            bestSeller: false
          },
          {
            id: 19,
            name: "Ayam Geprek Sambal Matah",
            price: "Rp 32.000",
            description: "Ayam crispy geprek dengan sambal matah khas Bali yang pedas dan segar, disajikan dengan nasi hangat",
            bestSeller: false
          },
          {
            id: 20,
            name: "Mie Ayam Spesial",
            price: "Rp 26.000",
            description: "Mie ayam dengan topping ayam suwir, pangsit, dan kuah kaldu yang gurih dengan taburan daun bawang",
            bestSeller: false
          },
          {
            id: 21,
            name: "Beef Steak Blackpepper",
            price: "Rp 45.000",
            description: "Daging sapi tenderloin dengan saus blackpepper, kentang tumbuk, dan salad sayuran segar",
            bestSeller: false
          },
          {
            id: 22,
            name: "Nasi Rendang Padang",
            price: "Rp 38.000",
            description: "Rendang daging sapi autentik dengan bumbu rempah Padang yang kaya rasa, disajikan dengan nasi putih",
            bestSeller: true
          },
          {
            id: 23,
            name: "Gado-gado Jakarta",
            price: "Rp 24.000",
            description: "Salad sayuran Indonesia dengan saus kacang yang gurih, lontong, dan kerupuk emping",
            bestSeller: false
          },
          {
            id: 24,
            name: "Soto Ayam Lamongan",
            price: "Rp 22.000",
            description: "Soto ayam dengan kuah bening yang segar, dilengkapi suwiran ayam dan koya khas Lamongan",
            bestSeller: false
          }
        ]
      }
    ]
  }
}

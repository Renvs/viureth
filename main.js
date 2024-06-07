  const listKeranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

  new Vue({
    el: '#app',
    data: {
      searchQuery: '',
      searchValue: [],
      keranjang: listKeranjang,
      products: [
        {
            id: 1,
            nama: 'Logitech G105',
            harga: 599000,
            image: 'assets/image/mouse1.jpg',
            description: 'Elevate your gaming experience with the Logitech G105 gaming mouse. Engineered for precision and comfort, the G105 features customizable buttons and high-performance tracking, allowing you to dominate the competition with ease. Its ergonomic design ensures long-lasting comfort during extended gaming sessions, while the customizable RGB lighting adds a touch of personalization to your setup. Whether youre a casual gamer or a competitive pro, the Logitech G105 is your ultimate gaming companion.'
        },
        {
            id: 2,
            nama: 'Logitech X Superlight 2',
            harga: 2399000,
            image: 'assets/image/mouse2.webp',
            description: 'Experience next-level performance with the Logitech X Superlight 2 gaming mouse. Engineered to be ultra-lightweight yet incredibly durable, the X Superlight 2 features advanced sensor technology and a sleek, ambidextrous design for maximum agility and control. Its low-friction feet glide effortlessly across any surface, while the customizable buttons allow you to tailor your gaming experience to suit your playstyle. With its cutting-edge features and ergonomic design, the Logitech X Superlight 2 is the perfect choice for gamers who demand nothing but the best.'
        },
        {
            id: 3,
            nama: 'Fantech Helios II',
            harga: 599000,
            image: 'assets/image/mouse3.png',
            description: 'Unleash your full potential with the Fantech Helios II gaming mouse. Designed for speed, precision, and comfort, the Helios II features customizable RGB lighting and programmable buttons, allowing you to personalize your setup and dominate the competition. Its ergonomic design ensures optimal comfort during long gaming sessions, while the advanced sensor technology delivers pixel-perfect accuracy and responsiveness. Whether youre engaging in intense battles or executing precise maneuvers, the Fantech Helios II is your ultimate gaming weapon.'
        },
        {
            id: 4,
            nama: 'Fantech MAXFIT67',
            harga: 1299000,
            image: 'assets/image/keyboard2.png',
            description: 'Dominate the battlefield with the Fantech MAXFIT67 mechanical keyboard. Engineered for performance and durability, the MAXFIT67 features tactile mechanical switches and customizable backlighting, allowing you to game in style and comfort. Its compact design saves space on your desk, while the anti-ghosting technology ensures accurate keystrokes, even during the most intense gaming sessions. With its ergonomic keycaps and responsive switches, the Fantech MAXFIT67 is the perfect choice for gamers who demand precision and reliability.'
        },
        {
            id: 5,
            nama: 'Logitech Pro X 60',
            harga: 2100000,
            image: 'assets/image/keyboard1.webp',
            description: 'Take your gaming to the next level with the Logitech Pro X 60 mechanical keyboard. Featuring advanced key switches and customizable keycaps, the Pro X 60 offers a personalized gaming experience like no other. Its durable construction and sleek design make it a stylish addition to any gaming setup, while the customizable RGB lighting allows you to express your unique style. With its high-performance features and ergonomic design, the Logitech Pro X 60 is the ultimate keyboard for gamers who demand precision and performance.'
        },
        {
            id: 6,
            nama: 'Fantech MAXFIT61',
            harga: 1300000,
            image: 'assets/image/keyboard3.png',
            description: 'Get ready to conquer the competition with the Fantech MAXFIT61 gaming keyboard. Engineered for speed and precision, the MAXFIT61 features ergonomic keycaps and customizable backlighting, allowing you to game in comfort and style. Its durable construction and responsive switches ensure optimal performance during intense gaming sessions, while the compact design saves space on your desk. Whether youre a casual gamer or a competitive pro, the Fantech MAXFIT61 is your key to victory.'
        },
        {
            id: 7,
            nama: 'ROG Swift OLED PG34WCDM',
            harga: 30500000,
            image: 'assets/image/monitor1.png',
            description: 'Immerse yourself in the ultimate gaming experience with the ROG Swift OLED PG34WCDM gaming monitor. Featuring a stunning OLED display and a high refresh rate, the PG34WCDM delivers smooth, lifelike visuals that bring your games to life. Its ultra-wide screen provides ample space for multitasking, while the adaptive sync technology eliminates screen tearing for a seamless gaming experience. With its sleek design and advanced features, the ROG Swift OLED PG34WCDM is the perfect choice for gamers who demand the best.'
        },
        {
            id: 8,
            nama: 'Hyperx Armada 25 FHD Monitor',
            harga: 8250000,
            image: 'assets/image/monitor2.webp',
            description: 'Experience crystal-clear visuals and smooth performance with the Hyperx Armada 25 FHD gaming monitor. Featuring a high-definition display and fast response times, the Armada 25 ensures every frame is rendered with precision and clarity. Its adaptive sync technology eliminates screen tearing for fluid gameplay, while the ergonomic design allows for comfortable viewing angles during long gaming sessions. Whether youre gaming or streaming your favorite content, the Hyperx Armada 25 FHD monitor delivers an immersive viewing experience.'
        },
        {
            id: 9,
            nama: 'Nitro XV275K P3 Widescreen Gaming LCD Monitor',
            harga: 12796000,
            image: 'assets/image/monitor3.png',
            description: 'Unleash the full potential of your gaming rig with the Nitro XV275K P3 gaming monitor. Featuring a widescreen display and HDR support, the XV275K P3 delivers stunning visuals and vibrant colors that bring your games to life. Its fast response times and high refresh rate ensure smooth gameplay with minimal input lag, while the ergonomic design allows for comfortable viewing angles during long gaming sessions. With its immersive visuals and advanced features, the Nitro XV275K P3 is the perfect monitor for gamers who demand the best.'
        }
    ] 
    },

    computed: {
      totalHarga() {
        return this.keranjang.reduce((total, item) => total + (item.harga * item.quantity), 0);
      },
      search() {
        this.searchValue = this.products.filter((item) =>
          item.nama.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },

    methods: {
      addItemToKeranjang(product) {
        Swal.fire({
          title: "Thank You",
          text: "Check Your Cart",
          icon: "success"
        });
        const existingItem = this.keranjang.find(item => item.nama === product.nama);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          this.keranjang.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('keranjang', JSON.stringify(this.keranjang));
      },
      tambahItem(index) {
        this.keranjang[index].quantity++;
        localStorage.setItem('keranjang', JSON.stringify(this.keranjang));
      },
      kurangiItem(index) {
        if (this.keranjang[index].quantity > 1) {
          this.keranjang[index].quantity--;
        } else {
          this.keranjang.splice(index, 1);
        }
        localStorage.setItem('keranjang', JSON.stringify(this.keranjang));
      },
      formatRupiah(harga) {
        return harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
      },
      viewProduct(product) {
        window.location = `/ProductDetail.html?product_id=${encodeURIComponent(product.id)}&product_name=${encodeURIComponent(product.nama)}&product_image=${encodeURIComponent(product.image)}&product_desc=${encodeURIComponent(product.description)}&product_harga=${encodeURIComponent(product.harga)}`;
        app.productImage = product.image; // Set the productImage property correctly
      }, 
      checkout() {
        Swal.fire({
          title: "Are you sure?",
          text: "There Are No Refund!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Purchase"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Thank You For Your Purchase",
              text: "Your Items Will Delivered Soon",
              icon: "success"
            });
          }
        });
      }
    }
  });

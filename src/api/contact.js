export const getContactData = () => {
  return {
    hero: {
      title: "Hubungi Kami",
      subtitle: "Kami siap melayani Anda dengan sepenuh hati. Hubungi kami untuk reservasi, pertanyaan, atau saran",
      backgroundImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    contactInfo: {
      title: "Informasi Kontak",
      details: [
        {
          icon: "MdPhone",
          title: "Telepon",
          info: "+62 812-3456-7890",
        },
        {
          icon: "MdEmail",
          title: "Email",
          info: "info@taharakopi.com",
          subtitle: "Respon dalam 24 jam"
        },
        {
          icon: "MdLocationOn",
          title: "Alamat Utama",
          info: "Jl. Compreng Mangir",
          subtitle: "Jawa Barat, Indonesia"
        },
        {
          icon: "MdAccessTime",
          title: "Jam Operasional",
          info: "Selasa - Minggu",
          subtitle: "09:00 - 01:00 WIB"
        }
      ]
    },
    contactForm: {
      title: "Kirim Pesan",
      fields: [
        {
          name: "name",
          label: "Nama Lengkap",
          type: "text",
          placeholder: "Masukkan nama lengkap Anda",
          required: true
        },
        {
          name: "email", 
          label: "Email",
          type: "email",
          placeholder: "nama@email.com",
          required: true
        },
        {
          name: "message",
          label: "Pesan",
          type: "textarea",
          placeholder: "Tulis pesan Anda di sini...",
          required: true,
          rows: 5
        }
      ],
      submitText: "Kirim Pesan",
      successMessage: "Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda kembali."
    },
    socialMedia: {
      title: "Ikuti Kami",
      subtitle: "Tetap terhubung dengan kami untuk update terbaru, promo menarik, dan info acara spesial",
      platforms: [
        {
          icon: "FaInstagram",
          name: "@taharakopi",
          color: "#E4405F"
        },
        {
          icon: "FaFacebook", 
          name: "Tahara Kopi Official",
          color: "#1877F2"
        },
        {
          icon: "FaTwitter",
          name: "@taharakopi", 
          color: "#1DA1F2"
        },
        {
          icon: "FaWhatsapp",
          name: "+62 812-3456-7890",
          color: "#25D366"
        }
      ]
    }
  }
}

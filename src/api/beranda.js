import { getMenuData } from './menu'

export const getBerandaData = () => {
  const menuData = getMenuData()
  
  const selectedItems = []
  menuData.categories.forEach(category => {
    const bestSeller = category.items.find(item => item.bestSeller)
    if (bestSeller) {
      selectedItems.push(bestSeller)
    }
  })
  
  while (selectedItems.length < 4) {
    menuData.categories.forEach(category => {
      if (selectedItems.length < 4) {
        const nonBestSeller = category.items.find(item => !item.bestSeller && !selectedItems.some(selected => selected.id === item.id))
        if (nonBestSeller) {
          selectedItems.push(nonBestSeller)
        }
      }
    })
  }
  
  return {
    hero: {
      title: "TAHARA",
      subtitle: "Menyajikan kopi berkualitas tinggi dengan cita rasa nusantara yang autentik. Nikmati pengalaman kuliner terbaik bersama kami dalam suasana yang hangat dan nyaman.",
      backgroundImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    menuPilihan: selectedItems.slice(0, 4),
    tentangKami: {
      title: "Tentang Tahara Kopi",
      description: "Tahara Kopi lahir dari kecintaan mendalam terhadap kopi nusantara. Didirikan pada tahun 2020, kami berkomitmen untuk menghadirkan pengalaman kopi yang autentik dengan menggunakan biji kopi pilihan dari berbagai daerah di Indonesia. Setiap cangkir kopi yang kami sajikan adalah hasil dari proses yang teliti, mulai dari pemilihan biji kopi hingga teknik seduh yang sempurna. Kami percaya bahwa kopi bukan hanya minuman, tetapi juga jembatan yang menghubungkan orang-orang dalam kehangatan dan kebersamaan.",
      values: [
        {
          title: "Kualitas Premium",
          description: "Menggunakan biji kopi pilihan terbaik"
        },
        {
          title: "Cita Rasa Autentik", 
          description: "Mempertahankan kearifan lokal nusantara"
        },
        {
          title: "Pelayanan Terbaik",
          description: "Memberikan pengalaman berkesan"
        }
      ]
    }
  }
}

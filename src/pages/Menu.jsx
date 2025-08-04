import { useState, useEffect } from 'react'
import { MdLocalCafe, MdFastfood, MdRestaurant } from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Menu() {
  const [animateElements, setAnimateElements] = useState({})

  const menuData = {
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '100px 0px 100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.id
          setAnimateElements(prev => ({ ...prev, [elementId]: true }))
        }
      })
    }, observerOptions)

    const elementsToObserve = document.querySelectorAll('[data-animate]')
    elementsToObserve.forEach(el => observer.observe(el))

    setTimeout(() => setAnimateElements({ 
      'menu-hero': true,
      'full-menu': true 
    }), 100)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      backgroundColor: '#065f46'
    }}>
      <Navbar />

      <section id="menu-hero" style={{
        minHeight: '70vh',
        background: `linear-gradient(135deg, rgba(6, 95, 70, 0.9) 0%, rgba(4, 120, 87, 0.8) 50%, rgba(2, 100, 70, 0.9) 100%), url("${menuData.hero.backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            marginBottom: '1.5rem',
            color: '#fbbf24',
            textShadow: '0 4px 8px rgba(0,0,0,0.5)',
            fontWeight: '800',
            letterSpacing: '2px',
            opacity: animateElements['menu-hero'] ? 1 : 0,
            transform: animateElements['menu-hero'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {menuData.hero.title}
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.6',
            opacity: animateElements['menu-hero'] ? 1 : 0,
            transform: animateElements['menu-hero'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            {menuData.hero.subtitle}
          </p>
        </div>
      </section>

      <section 
        id="full-menu"
        data-animate
        style={{
          padding: '6rem 2rem',
          backgroundColor: '#065f46',
          position: 'relative'
        }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.98) 0%, rgba(4, 120, 87, 0.95) 50%, rgba(2, 100, 70, 0.98) 100%)',
          zIndex: 1
        }}></div>
        
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            marginBottom: '4rem',
            justifyItems: 'center'
          }}>
            {menuData.categories.map((category, categoryIndex) => {
              const IconComponent = category.icon === 'MdLocalCafe' ? MdLocalCafe : 
                                  category.icon === 'MdFastfood' ? MdFastfood : MdRestaurant
              
              return (
                <div key={category.id} style={{
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      <IconComponent style={{
                        fontSize: '2.5rem',
                        color: '#fde047',
                        opacity: animateElements['full-menu'] ? 1 : 0,
                        transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      }} />
                      <h2 style={{
                      fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
                      color: '#fde047',
                      fontWeight: '700',
                      margin: 0,
                      opacity: animateElements['full-menu'] ? 1 : 0,
                      transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(30px)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      }}>
                        {category.name}
                      </h2>
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gap: '2rem',
                    flex: 1
                  }}>
                    {category.items.map((item, index) => (
                      <div key={item.id} 
                        className={item.bestSeller ? 'card-best-seller-shimmer' : ''}
                        style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '20px',
                        padding: '2rem',
                        border: item.bestSeller ? '2px solid #ffd700' : '1px solid rgba(251, 191, 36, 0.25)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        opacity: animateElements['full-menu'] ? 1 : 0,
                        transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(30px)',
                        transitionDelay: `${0.1 + index * 0.05}s`,
                        minHeight: '160px',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                        e.currentTarget.style.boxShadow = item.bestSeller ? '0 12px 30px rgba(255, 215, 0, 0.3)' : '0 8px 25px rgba(251, 191, 36, 0.2)'
                        e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.5)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.25)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                          <h3 style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                            color: '#fbbf24',
                            fontWeight: '700',
                            margin: 0,
                            flex: 1
                          }}>
                            {item.name}
                          </h3>
                          {item.bestSeller && (
                            <span style={{
                              backgroundColor: '#ffd700',
                              color: '#065f46',
                              fontSize: '0.7rem',
                              fontWeight: '900',
                              padding: '0.3rem 0.6rem',
                              borderRadius: '12px',
                              marginLeft: '0.5rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              BEST SELLER
                            </span>
                          )}
                        </div>
                        <p style={{
                          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                          marginBottom: '1rem',
                          color: '#fde047',
                          fontWeight: '800'
                        }}>
                          {item.price}
                        </p>
                        <p style={{
                          fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: '1.6',
                          flex: 1
                        }}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .card-best-seller-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15), transparent);
          background-size: 300% 100%;
          animation: shimmerBestSeller 8s ease-in-out infinite;
        }
        @keyframes shimmerBestSeller {
          0% { background-position: -300% 0; }
          100% { background-position: 300% 0; }
        }
      `}} />

      <Footer />
    </div>
  )
}

export default Menu

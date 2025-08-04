import { useState, useEffect } from 'react'
import { MdLocalCafe, MdFastfood, MdRestaurant } from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getMenuData } from '../api/menu'

function Menu() {
  const [animateElements, setAnimateElements] = useState({})
  const [menuData, setMenuData] = useState(null)

  useEffect(() => {
    setMenuData(getMenuData())
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px 0px 0px'
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

    setTimeout(() => setAnimateElements({ 'menu-hero': true }), 100)

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!menuData) return null

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
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
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
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            {menuData.categories.map((category, categoryIndex) => {
              const IconComponent = category.icon === 'MdLocalCafe' ? MdLocalCafe : 
                                  category.icon === 'MdFastfood' ? MdFastfood : MdRestaurant
              
              return (
                <div key={category.id} style={{
                  width: '100%',
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
                        transform: animateElements['full-menu'] ? 'scale(1)' : 'scale(0.8)',
                        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + categoryIndex * 0.1}s`
                      }} />
                      <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        color: '#fde047',
                        fontWeight: '700',
                        margin: 0,
                        opacity: animateElements['full-menu'] ? 1 : 0,
                        transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(30px)',
                        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + categoryIndex * 0.1}s`
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
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        opacity: animateElements['full-menu'] ? 1 : 0,
                        transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(40px)',
                        transitionDelay: `${0.5 + categoryIndex * 0.3 + index * 0.05}s`,
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
                            fontSize: '1.3rem',
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
                          fontSize: '1.1rem',
                          marginBottom: '1rem',
                          color: '#fde047',
                          fontWeight: '800'
                        }}>
                          {item.price}
                        </p>
                        <p style={{
                          fontSize: '1rem',
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

            <div style={{
              width: '100%',
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
                  <MdFastfood style={{
                    fontSize: '2.5rem',
                    color: '#fde047',
                    opacity: animateElements['full-menu'] ? 1 : 0,
                    transform: animateElements['full-menu'] ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                  }} />
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    color: '#fde047',
                    fontWeight: '700',
                    margin: 0,
                    opacity: animateElements['full-menu'] ? 1 : 0,
                    transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                  }}>
                    Makanan Ringan
                  </h2>
                </div>
              </div>
              <div style={{
                display: 'grid',
                gap: '2rem',
                flex: 1
              }}>
                {[
                  { name: 'Pisang Bakar Cokelat', price: 'Rp 15.000', desc: 'Pisang bakar dengan topping cokelat leleh dan keju mozzarella yang gurih', bestSeller: false },
                  { name: 'Roti Bakar Spesial', price: 'Rp 18.000', desc: 'Roti bakar dengan berbagai pilihan topping manis dan gurih seperti cokelat, keju, selai', bestSeller: false },
                  { name: 'French Fries', price: 'Rp 12.000', desc: 'Kentang goreng crispy dengan bumbu spesial dan saus sambal yang pedas menggigit', bestSeller: true },
                  { name: 'Sandwich Club', price: 'Rp 25.000', desc: 'Sandwich lapis tiga dengan daging ayam smoked, lettuce, tomat dan saus mayo', bestSeller: false },
                  { name: 'Nachos Supreme', price: 'Rp 22.000', desc: 'Tortilla chips dengan cheese sauce, salsa, dan jalapeño untuk sensasi pedas', bestSeller: false },
                  { name: 'Onion Rings', price: 'Rp 14.000', desc: 'Bawang bombay crispy dengan coating tepung berbumbu dan saus tartar', bestSeller: false },
                  { name: 'Chicken Wings Honey', price: 'Rp 28.000', desc: 'Sayap ayam dengan glaze madu dan bumbu BBQ yang manis gurih', bestSeller: false },
                  { name: 'Spring Rolls', price: 'Rp 16.000', desc: 'Lumpia goreng isi sayuran segar dengan saus asam manis yang segar', bestSeller: false }
                ].map((item, index) => (
                  <div key={index} 
                    className={item.bestSeller ? 'card-best-seller-shimmer' : ''}
                    style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '20px',
                    padding: '2rem',
                    border: item.bestSeller ? '2px solid #ffd700' : '1px solid rgba(251, 191, 36, 0.25)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    opacity: animateElements['full-menu'] ? 1 : 0,
                    transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${0.9 + index * 0.1}s`,
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
                        fontSize: '1.3rem',
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
                      fontSize: '1.1rem',
                      marginBottom: '1rem',
                      color: '#fde047',
                      fontWeight: '800'
                    }}>
                      {item.price}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: '1.6',
                      flex: 1
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: '100%',
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
                  <MdRestaurant style={{
                    fontSize: '2.5rem',
                    color: '#fde047',
                    opacity: animateElements['full-menu'] ? 1 : 0,
                    transform: animateElements['full-menu'] ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                  }} />
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    color: '#fde047',
                    fontWeight: '700',
                    margin: 0,
                    opacity: animateElements['full-menu'] ? 1 : 0,
                    transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                  }}>
                    Makanan Berat
                  </h2>
                </div>
              </div>
              <div style={{
                display: 'grid',
                gap: '2rem',
                flex: 1
              }}>
                {[
                  { name: 'Ramen Spesial Tahara', price: 'Rp 35.000', desc: 'Ramen kuah gurih tonkotsu dengan topping lengkap, telur setengah matang, dan irisan daging sapi yang empuk', bestSeller: true },
                  { name: 'Nasi Goreng Kopi', price: 'Rp 28.000', desc: 'Nasi goreng unik dengan aroma kopi yang menggugah selera, dilengkapi telur mata sapi dan kerupuk', bestSeller: false },
                  { name: 'Ayam Geprek Sambal Matah', price: 'Rp 32.000', desc: 'Ayam crispy geprek dengan sambal matah khas Bali yang pedas dan segar, disajikan dengan nasi hangat', bestSeller: false },
                  { name: 'Mie Ayam Spesial', price: 'Rp 26.000', desc: 'Mie ayam dengan topping ayam suwir, pangsit, dan kuah kaldu yang gurih dengan taburan daun bawang', bestSeller: false },
                  { name: 'Beef Steak Blackpepper', price: 'Rp 45.000', desc: 'Daging sapi tenderloin dengan saus blackpepper, kentang tumbuk, dan salad sayuran segar', bestSeller: false },
                  { name: 'Nasi Rendang Padang', price: 'Rp 38.000', desc: 'Rendang daging sapi autentik dengan bumbu rempah Padang yang kaya rasa, disajikan dengan nasi putih', bestSeller: true },
                  { name: 'Gado-gado Jakarta', price: 'Rp 24.000', desc: 'Salad sayuran Indonesia dengan saus kacang yang gurih, lontong, dan kerupuk emping', bestSeller: false },
                  { name: 'Soto Ayam Lamongan', price: 'Rp 22.000', desc: 'Soto ayam dengan kuah bening yang segar, dilengkapi suwiran ayam dan koya khas Lamongan', bestSeller: false }
                ].map((item, index) => (
                  <div key={index} 
                    className={item.bestSeller ? 'card-best-seller-shimmer' : ''}
                    style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '20px',
                    padding: '2rem',
                    border: item.bestSeller ? '2px solid #ffd700' : '1px solid rgba(251, 191, 36, 0.25)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    opacity: animateElements['full-menu'] ? 1 : 0,
                    transform: animateElements['full-menu'] ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${1.3 + index * 0.1}s`,
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
                        fontSize: '1.3rem',
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
                      fontSize: '1.1rem',
                      marginBottom: '1rem',
                      color: '#fde047',
                      fontWeight: '800'
                    }}>
                      {item.price}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: '1.6',
                      flex: 1
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

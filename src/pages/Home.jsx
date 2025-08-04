import { useState, useEffect } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { MdLocalCafe, MdFastfood, MdRestaurant } from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getBerandaData } from '../api/beranda'
import logo from './assets/logo-tahara.png';

function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [animateElements, setAnimateElements] = useState({})
  const [heroAnimated, setHeroAnimated] = useState(false)
  const [berandaData, setBerandaData] = useState(null)

  useEffect(() => {
    setBerandaData(getBerandaData())
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollIndicator(scrollY < 100)
    }

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

    window.addEventListener('scroll', handleScroll)
    
    const elementsToObserve = document.querySelectorAll('[data-animate]')
    elementsToObserve.forEach(el => observer.observe(el))

    setTimeout(() => setHeroAnimated(true), 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToMenu = () => {
    document.getElementById('menu-section').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

return (
  <div style={{
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#065f46'
  }}>
    <Navbar />

    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.9) 0%, rgba(4, 120, 87, 0.8) 50%, rgba(2, 100, 70, 0.9) 100%), url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: '10rem',
      padding: '10rem 2rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        textAlign: window.innerWidth <= 768 ? 'center' : 'left'
      }}>
        <img 
          src={logo}
          alt="Tahara Kopi Logo"
          style={{
            height: 'clamp(100px, 20vw, 160px)',
            width: 'auto',
            objectFit: 'contain',
            marginBottom: '2rem',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
            opacity: heroAnimated ? 1 : 0,
            transform: heroAnimated ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          marginBottom: '1rem',
          color: '#fbbf24',
          textShadow: '0 4px 8px rgba(0,0,0,0.5)',
          fontWeight: '800',
          letterSpacing: '3px',
          lineHeight: '1.1',
          margin: '0 0 1rem 0',
          opacity: heroAnimated ? 1 : 0,
          transform: heroAnimated ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
        }}>
          TAHARA
        </h1>
        <p style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          marginBottom: '2rem',
          color: 'rgba(251, 191, 36, 0.9)',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          fontWeight: '600',
          letterSpacing: '2px',
          opacity: heroAnimated ? 1 : 0,
          transform: heroAnimated ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          Coffee & Eatery
        </p>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          maxWidth: '700px',
          lineHeight: '1.8',
          color: 'rgba(255, 255, 255, 0.95)',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          fontWeight: '400',
          opacity: heroAnimated ? 1 : 0,
          transform: heroAnimated ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
        }}>
          Menyajikan kopi berkualitas tinggi dengan cita rasa nusantara yang autentik. 
          Nikmati pengalaman kuliner terbaik bersama kami dalam suasana yang hangat dan nyaman.
        </p>
      </div>

      {showScrollIndicator && (
        <div 
          onClick={scrollToMenu}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            padding: '0.8rem 1.2rem',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <p style={{
            color: '#fbbf24',
            fontSize: '1rem',
            fontWeight: '600',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            margin: 0,
            animation: 'bounce 2s infinite',
            whiteSpace: 'nowrap'
          }}>
            Gulir Kebawah
          </p>
          <HiChevronDown style={{
            fontSize: '1.3rem',
            color: '#fbbf24',
            animation: 'bounce 2s infinite'
          }} />
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes shimmerBestSeller {
          0% { background-position: -300% 0; }
          100% { background-position: 300% 0; }
        }
        .card-shimmer {
          background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out;
        }
        .card-best-seller-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15), transparent);
          background-size: 300% 100%;
          animation: shimmerBestSeller 8s ease-in-out infinite;
        }
      `}} />
    </section>

    <section 
      id="menu-section"
      data-animate
      style={{
        padding: '5rem 2rem',
        backgroundColor: '#065f46',
        position: 'relative'
      }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.95) 0%, rgba(4, 120, 87, 0.9) 50%, rgba(2, 100, 70, 0.95) 100%)',
        zIndex: 1
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#fbbf24',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          opacity: animateElements['menu-section'] ? 1 : 0,
          transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          Menu Pilihan
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '3rem',
          justifyItems: 'center',
          width: '100%',
          maxWidth: '100%'
        }}>
          {/* Minuman */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                marginBottom: '0.5rem'
              }}>
                <MdLocalCafe style={{
                  fontSize: '2rem',
                  color: '#fde047',
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                }} />
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#fde047',
                  fontWeight: '600',
                  margin: 0,
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                }}>
                  Minuman
                </h3>
              </div>

            </div>
            <div style={{
              display: 'grid',
              gap: '1.5rem',
              flex: 1
            }}>
              {[
                { name: 'Kopi Arabica Premium', price: 'Rp 25.000', desc: 'Kopi arabica pilihan dengan aroma yang menggoda', bestSeller: false },
                { name: 'Es Kopi Susu Gula Aren', price: 'Rp 18.000', desc: 'Perpaduan sempurna kopi dan gula aren asli', bestSeller: true },
                { name: 'Cappuccino Tahara', price: 'Rp 28.000', desc: 'Cappuccino signature dengan foam art yang indah', bestSeller: false },
                { name: 'Es Matcha Latte', price: 'Rp 22.000', desc: 'Matcha premium dengan susu creamy yang menyegarkan', bestSeller: false }
              ].map((item, index) => (
                <div key={index} 
                  className={item.bestSeller ? 'card-best-seller-shimmer' : ''}
                  style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: item.bestSeller ? '2px solid #ffd700' : '1px solid rgba(251, 191, 36, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${0.1 + index * 0.05}s`,
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = item.bestSeller ? '0 8px 20px rgba(255, 215, 0, 0.25)' : '0 5px 15px rgba(251, 191, 36, 0.15)'
                  e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.2)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      color: '#fbbf24',
                      fontWeight: '600',
                      margin: 0,
                      flex: 1
                    }}>
                      {item.name}
                    </h4>
                    {item.bestSeller && (
                      <span style={{
                        backgroundColor: '#ffd700',
                        color: '#065f46',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '10px',
                        marginLeft: '0.5rem'
                      }}>
                        BEST SELLER
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    marginBottom: '0.8rem',
                    color: '#fde047',
                    fontWeight: '700'
                  }}>
                    {item.price}
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5',
                    flex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Makanan Ringan */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                marginBottom: '0.5rem'
              }}>
                <MdFastfood style={{
                  fontSize: '2rem',
                  color: '#fde047',
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }} />
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#fde047',
                  fontWeight: '600',
                  margin: 0,
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}>
                  Makanan Ringan
                </h3>
              </div>

            </div>
            <div style={{
              display: 'grid',
              gap: '1.5rem',
              flex: 1
            }}>
              {[
                { name: 'Pisang Bakar Cokelat', price: 'Rp 15.000', desc: 'Pisang bakar dengan topping cokelat dan keju yang lumer', bestSeller: false },
                { name: 'Roti Bakar Spesial', price: 'Rp 18.000', desc: 'Roti bakar dengan berbagai pilihan topping manis dan gurih', bestSeller: false },
                { name: 'French Fries', price: 'Rp 12.000', desc: 'Kentang goreng crispy dengan bumbu spesial dan saus sambal', bestSeller: true },
                { name: 'Sandwich Club', price: 'Rp 25.000', desc: 'Sandwich lapis tiga dengan daging ayam dan sayuran segar', bestSeller: false }
              ].map((item, index) => (
                <div key={index} 
                  className={item.bestSeller ? 'card-best-seller-shimmer' : ''}
                  style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: item.bestSeller ? '2px solid #ffd700' : '1px solid rgba(251, 191, 36, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${0.2 + index * 0.05}s`,
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = item.bestSeller ? '0 8px 20px rgba(255, 215, 0, 0.25)' : '0 5px 15px rgba(251, 191, 36, 0.15)'
                  e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.2)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      color: '#fbbf24',
                      fontWeight: '600',
                      margin: 0,
                      flex: 1
                    }}>
                      {item.name}
                    </h4>
                    {item.bestSeller && (
                      <span style={{
                        backgroundColor: '#ffd700',
                        color: '#065f46',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '10px',
                        marginLeft: '0.5rem'
                      }}>
                        BEST SELLER
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    marginBottom: '0.8rem',
                    color: '#fde047',
                    fontWeight: '700'
                  }}>
                    {item.price}
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5',
                    flex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Makanan Berat */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                marginBottom: '0.5rem'
              }}>
                <MdRestaurant style={{
                  fontSize: '2rem',
                  color: '#fde047',
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                }} />
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#fde047',
                  fontWeight: '600',
                  margin: 0,
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                }}>
                  Makanan Berat
                </h3>
              </div>

            </div>
            <div style={{
              display: 'grid',
              gap: '1.5rem',
              flex: 1
            }}>
              {[
                { name: 'Ramen Spesial Tahara', price: 'Rp 35.000', desc: 'Ramen kuah gurih dengan topping lengkap, telur, dan irisan daging sapi yang empuk', bestSeller: true },
                { name: 'Nasi Goreng Kopi', price: 'Rp 28.000', desc: 'Nasi goreng unik dengan aroma kopi yang menggugah selera', bestSeller: false },
                { name: 'Ayam Geprek Sambal Matah', price: 'Rp 32.000', desc: 'Ayam crispy geprek dengan sambal matah khas Bali yang pedas dan segar', bestSeller: false },
                { name: 'Mie Ayam Spesial', price: 'Rp 26.000', desc: 'Mie ayam dengan topping lengkap dan kuah kaldu yang gurih', bestSeller: false }
              ].map((item, index) => (
                <div key={index} 
                  className={item.bestSeller ? 'card-best-seller-shimmer' : ''}
                  style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: item.bestSeller ? '2px solid #ffd700' : '1px solid rgba(251, 191, 36, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: animateElements['menu-section'] ? 1 : 0,
                  transform: animateElements['menu-section'] ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${0.3 + index * 0.05}s`,
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = item.bestSeller ? '0 8px 20px rgba(255, 215, 0, 0.25)' : '0 5px 15px rgba(251, 191, 36, 0.15)'
                  e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = item.bestSeller ? '#ffd700' : 'rgba(251, 191, 36, 0.2)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      color: '#fbbf24',
                      fontWeight: '600',
                      margin: 0,
                      flex: 1
                    }}>
                      {item.name}
                    </h4>
                    {item.bestSeller && (
                      <span style={{
                        backgroundColor: '#ffd700',
                        color: '#065f46',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '10px',
                        marginLeft: '0.5rem'
                      }}>
                        BEST SELLER
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    marginBottom: '0.8rem',
                    color: '#fde047',
                    fontWeight: '700'
                  }}>
                    {item.price}
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5',
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

    <section 
      id="about-section"
      data-animate
      style={{
        padding: '5rem 2rem',
        backgroundColor: 'rgba(6, 95, 70, 0.8)',
        backgroundImage: 'url("https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        opacity: animateElements['about-section'] ? 1 : 0,
        transform: animateElements['about-section'] ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.85) 0%, rgba(4, 120, 87, 0.9) 100%)',
        zIndex: 1
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#fbbf24',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          opacity: animateElements['about-section'] ? 1 : 0,
          transform: animateElements['about-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          Tentang Kami
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          alignItems: 'center',
          justifyItems: 'center',
          width: '100%',
          maxWidth: '100%'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            opacity: animateElements['about-section'] ? 1 : 0,
            transform: animateElements['about-section'] ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#fbbf24',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Tentang Kami
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              textAlign: 'justify',
              marginBottom: '1rem'
            }}>
              Tahara Kopi lahir dari kecintaan mendalam terhadap kopi nusantara. Didirikan pada tahun 2020, 
              kami berkomitmen untuk menghadirkan pengalaman kopi yang autentik dengan menggunakan biji kopi 
              pilihan dari berbagai daerah di Indonesia.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              textAlign: 'justify'
            }}>
              Setiap cangkir kopi yang kami sajikan adalah hasil dari proses yang teliti, mulai dari pemilihan 
              biji kopi hingga teknik seduh yang sempurna. Kami percaya bahwa kopi bukan hanya minuman, 
              tetapi juga jembatan yang menghubungkan orang-orang dalam kehangatan dan kebersamaan.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            opacity: animateElements['about-section'] ? 1 : 0,
            transform: animateElements['about-section'] ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#fbbf24',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Founder
            </h3>
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: 'rgba(251, 191, 36, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                border: '3px solid rgba(251, 191, 36, 0.5)',
                fontSize: '3rem'
              }}>
                👨‍💼
              </div>
              <h4 style={{
                fontSize: '1.4rem',
                color: '#fde047',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Budi Santoso
              </h4>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontStyle: 'italic'
              }}>
                Coffee Enthusiast & Entrepreneur
              </p>
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              textAlign: 'justify'
            }}>
              "Perjalanan saya dengan kopi dimulai sejak kecil ketika sering membantu kakek di kebun kopi. 
              Tahara Kopi adalah wujud dari mimpi untuk membagikan keindahan cita rasa kopi Indonesia kepada dunia."
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)
}

export default Home

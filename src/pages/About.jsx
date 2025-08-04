import { useState, useEffect } from 'react'
import { MdCoffee, MdStar, MdLocationOn } from 'react-icons/md'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getTentangKamiData } from '../api/tentang-kami'

function About() {
  const [animateElements, setAnimateElements] = useState({})
  const data = getTentangKamiData()

  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3],
      rootMargin: '200px 0px 200px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.id
          setAnimateElements(prev => ({ ...prev, [elementId]: true }))
        }
      })
    }, observerOptions)

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-animate]')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
        if (isVisible) {
          setAnimateElements(prev => ({ ...prev, [section.id]: true }))
        }
      })
    }

    const elementsToObserve = document.querySelectorAll('[data-animate]')
    elementsToObserve.forEach(el => observer.observe(el))
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    setTimeout(() => setAnimateElements({ 'about-hero': true }), 100)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
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

      <section id="about-hero" style={{
        minHeight: '70vh',
        background: `linear-gradient(135deg, rgba(6, 95, 70, 0.9) 0%, rgba(4, 120, 87, 0.8) 50%, rgba(2, 100, 70, 0.9) 100%), url("${data.hero.backgroundImage}")`,
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
            opacity: animateElements['about-hero'] ? 1 : 0,
            transform: animateElements['about-hero'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {data.hero.title}
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.6',
            opacity: animateElements['about-hero'] ? 1 : 0,
            transform: animateElements['about-hero'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      <section 
        id="story-section"
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
            marginBottom: '4rem',
            color: '#fbbf24',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            opacity: animateElements['story-section'] ? 1 : 0,
            transform: animateElements['story-section'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
{data.story.title}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            marginBottom: '5rem',
            justifyItems: 'center'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '25px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              opacity: animateElements['story-section'] ? 1 : 0,
              transform: animateElements['story-section'] ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              width: '100%',
              maxWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <MdCoffee style={{
                  fontSize: '3rem',
                  color: '#fde047',
                  marginRight: '1rem'
                }} />
                <h3 style={{
                  fontSize: '2rem',
                  color: '#fbbf24',
                  fontWeight: '600',
                  margin: 0
                }}>
{data.story.visi.title}
                </h3>
              </div>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.8',
                textAlign: 'justify',
                marginBottom: '1.5rem'
              }}>
                {data.story.visi.description[0]}
              </p>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.8',
                textAlign: 'justify'
              }}>
                {data.story.visi.description[1]}
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '25px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              opacity: animateElements['story-section'] ? 1 : 0,
              transform: animateElements['story-section'] ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              width: '100%',
              maxWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <MdStar style={{
                  fontSize: '3rem',
                  color: '#fde047',
                  marginRight: '1rem'
                }} />
                <h3 style={{
                  fontSize: '2rem',
                  color: '#fbbf24',
                  fontWeight: '600',
                  margin: 0
                }}>
{data.story.misi.title}
                </h3>
              </div>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.8',
                textAlign: 'justify',
                marginBottom: '1.5rem'
              }}>
                {data.story.misi.description[0]}
              </p>
              <p style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.8',
                textAlign: 'justify'
              }}>
                {data.story.misi.description[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="founder-section"
        data-animate
        style={{
          padding: '6rem 2rem',
          backgroundColor: 'rgba(6, 95, 70, 0.8)',
          backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.9) 0%, rgba(4, 120, 87, 0.85) 100%)',
          zIndex: 1
        }}></div>
        
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            marginBottom: '4rem',
            color: '#fbbf24',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            opacity: animateElements['founder-section'] ? 1 : 0,
            transform: animateElements['founder-section'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
{data.founder.title}
          </h2>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            padding: 'clamp(2rem, 4vw, 4rem)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            textAlign: 'center',
            opacity: animateElements['founder-section'] ? 1 : 0,
            transform: animateElements['founder-section'] ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
          }}>
            <div style={{
              marginBottom: '3rem'
            }}>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(253, 224, 71, 0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                border: '4px solid rgba(251, 191, 36, 0.5)',
                fontSize: '4rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}>
{data.founder.avatar}
              </div>
              <h3 style={{
                fontSize: '2.5rem',
                color: '#fde047',
                marginBottom: '1rem',
                fontWeight: '700'
              }}>
{data.founder.name}
              </h3>
              <p style={{
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontStyle: 'italic',
                marginBottom: '2rem'
              }}>
{data.founder.role}
              </p>
            </div>
            
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '0 clamp(1rem, 3vw, 2rem)'
            }}>
              <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.6',
              textAlign: 'justify',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              fontStyle: 'italic'
              }}>
              "{data.founder.quotes[0]}"
              </p>
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.6',
              textAlign: 'justify',
              marginBottom: 'clamp(1rem, 3vw, 2rem)'
              }}>
              {data.founder.quotes[1]}
              </p>
              <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: '1.6',
                textAlign: 'justify',
              fontStyle: 'italic'
              }}>
              "{data.founder.quotes[2]}"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="location-section"
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
          background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.98) 0%, rgba(4, 120, 87, 0.95) 100%)',
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
            opacity: animateElements['location-section'] ? 1 : 0,
            transform: animateElements['location-section'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            {data.location.title}
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              opacity: animateElements['location-section'] ? 1 : 0,
              transform: animateElements['location-section'] ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0.4s',
              maxWidth: '500px',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(251, 191, 36, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <MdLocationOn style={{
                  fontSize: '2rem',
                  color: '#fde047',
                  marginRight: '0.8rem'
                }} />
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#fbbf24',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {data.location.mainStore.name}
                </h3>
              </div>
              
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {data.location.mainStore.address}
              </p>
              
              <p style={{
                fontSize: '1rem',
                color: '#fde047',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>
                {data.location.mainStore.hours}
              </p>
              
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: '#fbbf24',
                  marginBottom: '0.8rem',
                  fontWeight: '600'
                }}>
                  Fasilitas:
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {data.location.mainStore.features.map((feature, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(251, 191, 36, 0.2)',
                      color: '#fde047',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

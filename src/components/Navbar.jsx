import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from './assets/logo-tahara.png';

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const [activeNav, setActiveNav] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      setScrollPosition(window.pageYOffset)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.pageYOffset}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'static'
      document.body.style.top = 'auto'
      document.body.style.width = 'auto'
      window.scrollTo(0, scrollPosition)
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'static'
      document.body.style.top = 'auto'
      document.body.style.width = 'auto'
    }
  }, [mobileMenuOpen, scrollPosition])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
        setMenuClosing(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  const handleMenuToggle = () => {
    if (mobileMenuOpen) {
      setMenuClosing(true)
      setTimeout(() => {
        setMobileMenuOpen(false)
        setMenuClosing(false)
      }, 300)
    } else {
      setMobileMenuOpen(true)
    }
  }

  const handleMenuClose = (navItem) => {
    setActiveNav(navItem)
    setMenuClosing(true)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setMenuClosing(false)
    }, 300)
  }

  const handleNavigation = (path, navItem) => {
    setActiveNav(navItem)
    navigate(path)
    if (mobileMenuOpen) {
      handleMenuClose(navItem)
    }
  }

  const handleLogoClick = () => {
    navigate('/')
    setActiveNav('beranda')
    if (mobileMenuOpen) {
      handleMenuClose('beranda')
    }
  }

  return (
    <nav style={{
      width: '100%',
      padding: '1rem 2rem',
      backgroundColor: scrolled ? 'rgba(6, 95, 70, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: mobileMenuOpen ? 999998 : 1000,
      margin: 0,
      minHeight: '80px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div 
          onClick={handleLogoClick}
          style={{
            opacity: mobileMenuOpen ? 0 : 1,
            transform: mobileMenuOpen ? 'scale(0.8) translateY(-10px)' : 'scale(1) translateY(0)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer'
          }}
          className="mobile-logo">
          <img 
            src={logo}
            alt="Tahara Kopi Logo"
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        <div style={{
          display: 'block',
          position: 'relative'
        }}>
          <button
            onClick={handleMenuToggle}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 99999,
              position: 'relative',
              WebkitTapHighlightColor: 'transparent'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? '' : '☰'}
          </button>

          <div style={{ 
            display: 'flex', 
            gap: '3rem',
            alignItems: 'center'
          }}
          className="desktop-menu"
          onMouseLeave={() => {
            document.querySelectorAll('.desktop-menu .underline').forEach(el => el.style.width = '0')
            document.querySelectorAll('.desktop-menu a').forEach(el => el.style.color = '#fbbf24')
          }}>
            <a href="#" 
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/', 'beranda')
              }}
              style={{ 
                color: '#fbbf24', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll('.desktop-menu .underline').forEach(el => el.style.width = '0')
                document.querySelectorAll('.desktop-menu a').forEach(el => el.style.color = '#fbbf24')
                e.target.style.color = '#fde047'
                e.target.querySelector('.underline').style.width = '100%'
              }}>
              Beranda
              <div className="underline" style={{
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                height: '2px',
                width: activeNav === 'beranda' ? '100%' : '0',
                backgroundColor: '#fde047',
                transition: 'width 0.3s ease'
              }}></div>
            </a>
            
            <a href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/menu', 'menu')
              }}
              style={{ 
                color: '#fbbf24', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll('.desktop-menu .underline').forEach(el => el.style.width = '0')
                document.querySelectorAll('.desktop-menu a').forEach(el => el.style.color = '#fbbf24')
                e.target.style.color = '#fde047'
                e.target.querySelector('.underline').style.width = '100%'
              }}>
              Menu
              <div className="underline" style={{
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                height: '2px',
                width: activeNav === 'menu' ? '100%' : '0',
                backgroundColor: '#fde047',
                transition: 'width 0.3s ease'
              }}></div>
            </a>
            
            <a href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/about', 'about')
              }}
              style={{ 
                color: '#fbbf24', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll('.desktop-menu .underline').forEach(el => el.style.width = '0')
                document.querySelectorAll('.desktop-menu a').forEach(el => el.style.color = '#fbbf24')
                e.target.style.color = '#fde047'
                e.target.querySelector('.underline').style.width = '100%'
              }}>
              Tentang
              <div className="underline" style={{
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                height: '2px',
                width: activeNav === 'about' ? '100%' : '0',
                backgroundColor: '#fde047',
                transition: 'width 0.3s ease'
              }}></div>
            </a>
            
            <a href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/contact', 'contact')
              }}
              style={{ 
                color: '#fbbf24', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll('.desktop-menu .underline').forEach(el => el.style.width = '0')
                document.querySelectorAll('.desktop-menu a').forEach(el => el.style.color = '#fbbf24')
                e.target.style.color = '#fde047'
                e.target.querySelector('.underline').style.width = '100%'
              }}>
              Kontak
              <div className="underline" style={{
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                height: '2px',
                width: activeNav === 'contact' ? '100%' : '0',
                backgroundColor: '#fde047',
                transition: 'width 0.3s ease'
              }}></div>
            </a>
          </div>

          <div style={{
            display: mobileMenuOpen ? 'block' : 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.98), rgba(4, 120, 87, 0.98))',
            backdropFilter: 'blur(20px)',
            zIndex: 999999,
            animation: menuClosing ? 'fadeOut 0.3s ease' : 'fadeIn 0.3s ease',
            overflowY: 'auto',
            overscrollBehavior: 'contain'
          }}
          className="mobile-menu">
            <div style={{
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              overflowY: 'auto'
            }}
            onMouseLeave={() => {
              document.querySelectorAll('.mobile-menu .mobile-underline').forEach(el => el.style.width = '0')
              document.querySelectorAll('.mobile-menu a').forEach(el => el.style.color = '#fbbf24')
            }}>
              <div style={{
                padding: '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(6, 95, 70, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 1,
                minHeight: '80px'
              }}>
                <div 
                  onClick={handleLogoClick}
                  style={{
                    opacity: menuClosing ? 0 : 1,
                    transform: menuClosing 
                      ? 'scale(0.8) translateY(10px)' 
                      : mobileMenuOpen 
                        ? 'scale(1) translateY(0)' 
                        : 'scale(0.8) translateY(-20px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}>
                  <img 
                    src={logo}
                    alt="Tahara Kopi Logo"
                    style={{
                      height: '40px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                <button
                  onClick={handleMenuToggle}
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    WebkitTapHighlightColor: 'transparent',
                    transform: menuClosing ? 'rotate(180deg) scale(0)' : 'rotate(0deg) scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                flex: 1,
                opacity: menuClosing ? 0 : 1,
                transform: menuClosing ? 'translateY(30px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}>

                <a href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('/', 'beranda')
                  }}
                  style={{ 
                    color: '#fbbf24', 
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    padding: '0.8rem 0',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    document.querySelectorAll('.mobile-menu .mobile-underline').forEach(el => el.style.width = '0')
                    document.querySelectorAll('.mobile-menu a').forEach(el => el.style.color = '#fbbf24')
                    e.target.style.color = '#fde047'
                    e.target.querySelector('.mobile-underline').style.width = '100%'
                  }}>
                  Beranda
                  <div className="mobile-underline" style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    height: '3px',
                    width: activeNav === 'beranda' ? '100%' : '0',
                    backgroundColor: '#fde047',
                    transition: 'width 0.3s ease'
                  }}></div>
                </a>
                <a href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('/menu', 'menu')
                  }}
                  style={{ 
                    color: '#fbbf24', 
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    padding: '0.8rem 0',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    document.querySelectorAll('.mobile-menu .mobile-underline').forEach(el => el.style.width = '0')
                    document.querySelectorAll('.mobile-menu a').forEach(el => el.style.color = '#fbbf24')
                    e.target.style.color = '#fde047'
                    e.target.querySelector('.mobile-underline').style.width = '100%'
                  }}>
                  Menu
                  <div className="mobile-underline" style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    height: '3px',
                    width: activeNav === 'menu' ? '100%' : '0',
                    backgroundColor: '#fde047',
                    transition: 'width 0.3s ease'
                  }}></div>
                </a>
                <a href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('/about', 'about')
                  }}
                  style={{ 
                    color: '#fbbf24', 
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    padding: '0.8rem 0',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    document.querySelectorAll('.mobile-menu .mobile-underline').forEach(el => el.style.width = '0')
                    document.querySelectorAll('.mobile-menu a').forEach(el => el.style.color = '#fbbf24')
                    e.target.style.color = '#fde047'
                    e.target.querySelector('.mobile-underline').style.width = '100%'
                  }}>
                  Tentang
                  <div className="mobile-underline" style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    height: '3px',
                    width: activeNav === 'about' ? '100%' : '0',
                    backgroundColor: '#fde047',
                    transition: 'width 0.3s ease'
                  }}></div>
                </a>
                <a href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('/contact', 'contact')
                  }}
                  style={{ 
                    color: '#fbbf24', 
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    padding: '0.8rem 0',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    document.querySelectorAll('.mobile-menu .mobile-underline').forEach(el => el.style.width = '0')
                    document.querySelectorAll('.mobile-menu a').forEach(el => el.style.color = '#fbbf24')
                    e.target.style.color = '#fde047'
                    e.target.querySelector('.mobile-underline').style.width = '100%'
                  }}>
                  Kontak
                  <div className="mobile-underline" style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    height: '3px',
                    width: activeNav === 'contact' ? '100%' : '0',
                    backgroundColor: '#fde047',
                    transition: 'width 0.3s ease'
                  }}></div>
                </a>
              </div>

              <div style={{
                padding: '2rem',
                marginTop: 'auto',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                opacity: menuClosing ? 0 : 1,
                transform: menuClosing ? 'translateY(20px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.15s'
              }}>
                <p style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '500'
                }}>
                  © 2024 Tahara Kopi
                </p>
                <p style={{
                  margin: '0',
                  fontSize: '0.8rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.4'
                }}>
                  Menyajikan kopi berkualitas tinggi dengan cita rasa nusantara yang autentik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { useState } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Footer() {
  const [activeFooterNav, setActiveFooterNav] = useState('')

  return (
    <footer style={{
      width: '100%',
      padding: '4rem 2rem 2rem',
      backgroundColor: '#065f46',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.9) 0%, rgba(4, 120, 87, 0.8) 50%, rgba(2, 100, 70, 0.9) 100%)',
        zIndex: 1
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'clamp(2rem, 4vw, 3rem)',
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
        alignItems: 'flex-start'
        }}>
          <div style={{
            minWidth: 'clamp(250px, 60vw, 300px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <img 
                src="/assets/logo-tahara.png"
                alt="Tahara Kopi Logo"
                style={{
                  height: 'clamp(50px, 10vw, 70px)',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}
              />
              <div>
                <h2 style={{
                  margin: '0',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: '700',
                  color: '#fbbf24',
                  letterSpacing: '1px'
                }}>
                  TAHARA KOPI
                </h2>
                <p style={{
                  margin: '0.2rem 0 0 0',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  color: 'rgba(251, 191, 36, 0.8)',
                  fontStyle: 'italic'
                }}>
                  Coffee & Eatery
                </p>
              </div>
            </div>
            <p style={{
              margin: '0',
              fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              maxWidth: '400px',
              textAlign: 'justify'
            }}>
              Menyajikan kopi berkualitas tinggi dengan cita rasa nusantara yang autentik. Nikmati pengalaman kopi terbaik bersama kami dalam setiap tegukan yang memanjakan lidah.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            minWidth: '300px'
          }}>
            <div>
              <h3 style={{
                margin: '0 0 1.2rem 0',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                fontWeight: '600',
                color: '#fbbf24',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                Menu
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '25px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #fbbf24, #fde047)',
                  borderRadius: '1px'
                }}></div>
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                {[
                  { href: '#beranda', text: 'Beranda', nav: 'beranda' },
                  { href: '#menu', text: 'Menu Kopi', nav: 'menu' },
                  { href: '#about', text: 'Tentang Kami', nav: 'about' },
                  { href: '#contact', text: 'Kontak', nav: 'contact' }
                ].map((item, index) => (
                  <a key={index}
                    href={item.href} 
                    onClick={() => setActiveFooterNav(item.nav)}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      textDecoration: 'none',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      fontWeight: '400',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      width: 'fit-content',
                      padding: '0.3rem 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#fde047'
                      e.target.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)'
                      e.target.style.transform = 'translateX(0)'
                    }}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                margin: '0 0 1.2rem 0',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                fontWeight: '600',
                color: '#fbbf24',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                Informasi
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '25px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #fbbf24, #fde047)',
                  borderRadius: '1px'
                }}></div>
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                {[
                  { href: '#privacy', text: 'Privacy Policy' },
                  { href: '#terms', text: 'Terms of Service' },
                  { href: '#faq', text: 'FAQ' }
                ].map((item, index) => (
                  <a key={index}
                    href={item.href}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '400',
                      transition: 'all 0.3s ease',
                      width: 'fit-content',
                      padding: '0.3rem 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#fde047'
                      e.target.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)'
                      e.target.style.transform = 'translateX(0)'
                    }}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                margin: '0 0 1.2rem 0',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                fontWeight: '600',
                color: '#fbbf24',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                Hubungi Kami
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '25px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #fbbf24, #fde047)',
                  borderRadius: '1px'
                }}></div>
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <MdEmail style={{
                    fontSize: '1.2rem',
                    color: '#fbbf24'
                  }} />
                  <span style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5'
                  }}>
                    info@taharakopi.com
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <MdPhone style={{
                    fontSize: '1.2rem',
                    color: '#fbbf24'
                  }} />
                  <span style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5'
                  }}>
                    (021) 123-4567
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.8rem'
                }}>
                  <MdLocationOn style={{
                    fontSize: '1.2rem',
                    color: '#fbbf24',
                    marginTop: '0.1rem'
                  }} />
                  <span style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5'
                  }}>
                    Jl. Kopi Nusantara No. 123, Jakarta Selatan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(251, 191, 36, 0.2)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <p style={{
            margin: '0',
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '400'
          }}>
            © 2024 Tahara Kopi. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <span style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.6)',
              marginRight: '0.5rem'
            }}>
              Ikuti Kami:
            </span>
            <a href="#facebook" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                backgroundColor: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '50%',
                color: '#000',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1877f2'
                e.target.style.borderColor = '#1877f2'
                e.target.style.color = '#fff'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 16px rgba(24, 119, 242, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'
                e.target.style.color = '#000'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#instagram" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                backgroundColor: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '50%',
                color: '#000',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #e1306c, #ffcc00)'
                e.target.style.borderColor = '#e1306c'
                e.target.style.color = '#fff'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 16px rgba(225, 48, 108, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'
                e.target.style.color = '#000'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#tiktok" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                backgroundColor: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '50%',
                color: '#000',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#000'
                e.target.style.borderColor = '#000'
                e.target.style.color = '#fff'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'
                e.target.style.color = '#000'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

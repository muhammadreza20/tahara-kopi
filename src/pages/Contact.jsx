import { useState, useEffect } from 'react'
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdSend } from 'react-icons/md'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getContactData } from '../api/contact'
import '../styles/contact.css'

function Contact() {
  const [animateElements, setAnimateElements] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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
      'contact-hero': true,
      'contact-info': true 
    }), 100)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda kembali.')
    setFormData({ name: '', email: '', message: '' })
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

      <section id="contact-hero" style={{
        minHeight: '70vh',
        background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.9) 0%, rgba(4, 120, 87, 0.8) 50%, rgba(2, 100, 70, 0.9) 100%), url("https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
            opacity: animateElements['contact-hero'] ? 1 : 0,
            transform: animateElements['contact-hero'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            Hubungi Kami
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.6',
            opacity: animateElements['contact-hero'] ? 1 : 0,
            transform: animateElements['contact-hero'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            Kami siap melayani Anda dengan sepenuh hati. Hubungi kami untuk reservasi, pertanyaan, atau saran
          </p>
        </div>
      </section>

      <section 
        id="contact-info"
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
            opacity: animateElements['contact-info'] ? 1 : 0,
            transform: animateElements['contact-info'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            Informasi Kontak
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '5rem',
            justifyItems: 'center'
          }}>
            {[
              {
                icon: <MdPhone />,
                title: 'Telepon',
                info: '+62 812-3456-7890',
              },
              {
                icon: <MdEmail />,
                title: 'Email',
                info: 'info@taharakopi.com',
                subtitle: 'Respon dalam 24 jam'
              },
              {
                icon: <MdLocationOn />,
                title: 'Alamat Utama',
                info: "Jl. Compreng Mangir",
                subtitle: "Jawa Barat, Indonesia"
              },
              {
                icon: <MdAccessTime />,
                title: 'Jam Operasional',
                info: 'Selasa - Minggu',
                subtitle: '09:00 - 01:00 WIB'
              }
            ].map((contact, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                opacity: animateElements['contact-info'] ? 1 : 0,
                transform: animateElements['contact-info'] ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${0.1 + index * 0.05}s`,
                width: '100%',
                maxWidth: '350px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(251, 191, 36, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  color: '#fde047',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {contact.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#fbbf24',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {contact.title}
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  {contact.info}
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  {contact.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="contact-form"
        data-animate
        style={{
          padding: '6rem 2rem',
          backgroundColor: 'rgba(6, 95, 70, 0.8)',
          backgroundImage: 'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
          maxWidth: '800px',
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
            opacity: animateElements['contact-form'] ? 1 : 0,
            transform: animateElements['contact-form'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            Kirim Pesan
          </h2>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '3rem',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            opacity: animateElements['contact-form'] ? 1 : 0,
            transform: animateElements['contact-form'] ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  color: '#fbbf24',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '15px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(251, 191, 36, 0.6)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Enter your name..."
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  color: '#fbbf24',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '15px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(251, 191, 36, 0.6)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Enter your email"
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  color: '#fbbf24',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="contact-textarea"
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '15px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(251, 191, 36, 0.6)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1.2rem 2rem',
                  backgroundColor: '#fbbf24',
                  color: '#065f46',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fde047'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 20px rgba(251, 191, 36, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#fbbf24'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <MdSend style={{ fontSize: '1.2rem' }} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      <section 
        id="social-media"
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
          background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.98) 0%, rgba(4, 120, 87, 0.95) 100%)',
          zIndex: 1
        }}></div>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2rem',
            color: '#fbbf24',
            fontWeight: '700',
            opacity: animateElements['social-media'] ? 1 : 0,
            transform: animateElements['social-media'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            Ikuti Kami
          </h2>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            opacity: animateElements['social-media'] ? 1 : 0,
            transform: animateElements['social-media'] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}>
            Tetap terhubung dengan kami untuk update terbaru, promo menarik, dan info acara spesial
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: <FaInstagram />, name: '@taharakopi', color: '#E4405F' },
              { icon: <FaFacebook />, name: 'Tahara Kopi Official', color: '#1877F2' },
              { icon: <FaTwitter />, name: '@taharakopi', color: '#1DA1F2' },
              { icon: <FaWhatsapp />, name: '+62 812-3456-7890', color: '#25D366' }
            ].map((social, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '20px',
                  padding: '1.5rem 2rem',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: animateElements['social-media'] ? 1 : 0,
                  transform: animateElements['social-media'] ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${0.5 + index * 0.1}s`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color + '20'
                  e.currentTarget.style.borderColor = social.color
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                  e.currentTarget.style.boxShadow = `0 10px 25px ${social.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  color: social.color
                }}>
                  {social.icon}
                </div>
                <span style={{
                  fontSize: '1.1rem',
                  color: '#fff',
                  fontWeight: '600'
                }}>
                  {social.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

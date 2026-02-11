import { SafeIcon } from './components/SafeIcon';
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'О нас', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Контакты', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto max-w-6xl px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3">
              <img
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-svg-1.svg"
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                Brand
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-600' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all transform hover:scale-105">
                Начать
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}
            >
              <SafeIcon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-slate-800 py-3 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-5 py-4 rounded-lg text-lg font-semibold mt-4 w-full">
                Начать
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-svg-1.svg"
            alt="Brand Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 invert brightness-0"
          />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Создаем будущее <br />
            <span className="text-blue-400">вместе с вами</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Мы создаем современные решения для вашего бизнеса.
            Простота, качество и надежность — наши главные принципы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <SafeIcon name="arrow-right" size={20} />
              Узнать больше
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <SafeIcon name="play" size={20} />
              Смотреть видео
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/50"
          >
            <SafeIcon name="chevron-down" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-100 rounded-3xl p-8 md:p-12 flex items-center justify-center">
              <img
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-svg-1.svg"
                alt="About Illustration"
                className="w-48 h-48 md:w-64 md:h-64 opacity-80"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              О нас
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Мы строим цифровое будущее
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Наша команда состоит из профессионалов, которые увлечены созданием
              качественных цифровых продуктов. Мы верим в силу минимализма и
              функциональности.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              С 2018 года мы помогаем бизнесу расти и развиваться в цифровой среде,
              создавая сайты и приложения, которые приносят результаты.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">150+</div>
                <div className="text-sm text-slate-500">Проектов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">50+</div>
                <div className="text-sm text-slate-500">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">6</div>
                <div className="text-sm text-slate-500">Лет опыта</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Section
const Services = () => {
  const services = [
    {
      icon: 'layout',
      title: 'Веб-дизайн',
      description: 'Создаем уникальные и запоминающиеся дизайны для вашего бренда',
    },
    {
      icon: 'code',
      title: 'Разработка',
      description: 'Разрабатываем быстрые и надежные веб-приложения любой сложности',
    },
    {
      icon: 'smartphone',
      title: 'Мобильные приложения',
      description: 'Создаем нативные и кроссплатформенные мобильные решения',
    },
    {
      icon: 'zap',
      title: 'Оптимизация',
      description: 'Ускоряем и оптимизируем существующие проекты для лучшей производительности',
    },
    {
      icon: 'shield',
      title: 'Безопасность',
      description: 'Защищаем ваши данные и обеспечиваем безопасность систем',
    },
    {
      icon: 'headphones',
      title: 'Поддержка',
      description: 'Предоставляем круглосуточную техническую поддержку',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Полный спектр услуг для вашего цифрового присутствия
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <SafeIcon name={service.icon} size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const { isSubmitting, isSuccess, isError, errorMessage, handleSubmit, resetForm } = useFormHandler()
  const ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY' // Replace with your Web3Forms Access Key from https://web3forms.com

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Контакты
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Давайте работать вместе
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Есть проект или идея? Свяжитесь с нами, и мы поможем воплотить её в жизнь.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon name="mail" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon name="phone" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Телефон</h4>
                  <p className="text-slate-600">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon name="map-pin" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Адрес</h4>
                  <p className="text-slate-600">г. Москва, ул. Примерная, 123</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl"
          >
            {!isSuccess ? (
              <form onSubmit={(e) => handleSubmit(e, ACCESS_KEY)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Имя</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Сообщение</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                {isError && (
                  <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <SafeIcon name="send" size={20} />
                      Отправить сообщение
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon name="check-circle" size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Сообщение отправлено!</h3>
                <p className="text-slate-600 mb-8">
                  Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  onClick={resetForm}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Отправить ещё
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 telegram-safe-bottom">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-svg-1.svg"
                alt="Logo"
                className="w-10 h-10 invert brightness-0"
              />
              <span className="text-2xl font-bold">Brand</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Создаем цифровые решения для вашего бизнеса.
              Простота, качество и надежность.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <SafeIcon name="twitter" size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <SafeIcon name="instagram" size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <SafeIcon name="linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Brand. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Form Handler Hook
const useFormHandler = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e, accessKey) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    const formData = new FormData(e.target)
    formData.append('access_key', accessKey)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        e.target.reset()
      } else {
        setIsError(true)
        setErrorMessage(data.message || 'Something went wrong')
      }
    } catch (error) {
      setIsError(true)
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setIsError(false)
    setErrorMessage('')
  }

  return { isSubmitting, isSuccess, isError, errorMessage, handleSubmit, resetForm }
}

// useInView Hook (inline since we can't import from @react-intersection-observer)
const useInView = (ref, options) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (options?.once) {
          observer.disconnect()
        }
      } else if (!options?.once) {
        setIsInView(false)
      }
    }, { threshold: options?.threshold || 0.1, rootMargin: options?.margin || '0px' })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, options?.once, options?.threshold, options?.margin])

  return isInView
}

// Ref hook
import { useRef } from 'react'

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
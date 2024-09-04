import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 flex flex-col items-center bg-white rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 z-30 animate-bounce"
      aria-label="Back to top"
    >
      <div className="bg-gray-200 p-3 rounded-full mb-4">
        <ArrowUp className="h-6 w-6 text-gray-600" />
      </div>
      <div className="bg-white px-2 pb-2 rounded-b-full">
        <span className="text-gray-600 text-sm font-bold flex flex-col-reverse items-center">
          {'BACK TO TOP'.split('').map((char, index) => (
            <span
              key={index}
              className="transform -rotate-90"
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    </button>
  )
}

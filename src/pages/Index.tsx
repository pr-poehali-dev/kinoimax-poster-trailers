import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null)
  const [selectedSession, setSelectedSession] = useState<{movieId: number, time: string} | null>(null)
  const [showHeroVideo, setShowHeroVideo] = useState(true)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const videoRef = useRef<HTMLVideoElement>(null)

  const movies = [
    {
      id: 1,
      title: 'Плагиатор',
      ageRating: '16+',
      poster: 'https://m.media-amazon.com/images/M/MV5BNmY2OTFiYmYtZjFhMS00MDAxLWI0NmItYjg4YTU3NDBmZGQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trailer: 'https://media.cinemabox.team/net/c5/movies/12894/trailer-plagiator.mp4',
      genre: 'Триллер',
      duration: '108 мин',
      year: '2024',
      sessions: ['12:30', '14:50', '19:45', '22:25']
    },
    {
      id: 2,
      title: 'Супермен предсеанс. обсл. & Куда уходят папы?',
      ageRating: '12+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000370/150114_68790004c7e067.10116531.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Фантастика',
      duration: '125 мин',
      year: '2025',
      sessions: ['11:25', '12:55', '15:00', '16:05', '18:35', '19:35', '20:15', '22:15', '23:55']
    },
    {
      id: 3,
      title: 'Лило и Стич предсеанс. обсл. & Куда уходят папы?',
      ageRating: '6+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000354/147965_6830cae02b9974.26300785.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Семейный',
      duration: '95 мин',
      year: '2025',
      sessions: ['11:55', '14:10', '16:35', '18:35', '20:55', '22:15']
    },
    {
      id: 4,
      title: 'Как приручить дракона предсеанс. обсл. & Куда уходят папы?',
      ageRating: '12+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000363/148704_685b0568d31802.59369405.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000363/trailer-kak-priruchit-drakona-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Анимация',
      duration: '110 мин',
      year: '2025',
      sessions: ['15:05', '17:55', '21:20']
    },
    {
      id: 5,
      title: 'Формула 1 предсеанс. обсл. & Куда уходят папы?',
      ageRating: '12+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000369/149883_68760521b2b993.21002650.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000369/trailer-formula-1-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Спорт',
      duration: '135 мин',
      year: '2025',
      sessions: ['20:55', '23:35']
    },
    {
      id: 6,
      title: 'Материалистка',
      ageRating: '18+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/12271/149392_6866726ab072d7.65373077.webp',
      trailer: 'https://media.cinemabox.team/r/movies/12271/trailer-materialistka.mp4',
      genre: 'Комедия',
      duration: '102 мин',
      year: '2024',
      sessions: ['20:10']
    },
    {
      id: 7,
      title: '28 лет спустя предсеанс. обсл. & Куда уходят папы?',
      ageRating: '18+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000368/150110_6878bd395a04e3.07287001.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000368/trailer-28-let-spustya-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Ужасы',
      duration: '118 мин',
      year: '2025',
      sessions: ['21:10', '23:45']
    },
    {
      id: 8,
      title: 'Пила X',
      ageRating: '18+',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/10780/150106_6878aba5700005.24408322.webp',
      trailer: 'https://media.cinemabox.team/r/movies/10780/trailer-pila-x.mp4',
      genre: 'Ужасы',
      duration: '103 мин',
      year: '2024',
      sessions: ['22:15']
    }
  ]

  const handlePosterClick = (movieId: number) => {
    setSelectedMovie(movieId)
  }

  const handleSessionClick = (movieId: number, time: string) => {
    setSelectedSession({movieId, time})
  }

  const toggleSeat = (seatId: string) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    )
  }

  const selectedMovieData = movies.find(movie => movie.id === selectedMovie)
  const selectedSessionMovie = movies.find(movie => movie.id === selectedSession?.movieId)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Автовоспроизведение заблокировано, показываем кнопку
        })
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cinema-dark-blue via-cinema-light-blue to-cinema-dark-blue">
      {/* Fullscreen Hero Video */}
      {showHeroVideo && (
        <div className="fixed inset-0 z-50 bg-black">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            src="https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4"
            muted
            onEnded={() => setShowHeroVideo(false)}
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-4xl font-bold mb-2">Супермен в кино!</h2>
            <Badge className="bg-cinema-orange text-white font-bold text-lg px-3 py-1">
              12+
            </Badge>
          </div>
          <Button 
            onClick={() => setShowHeroVideo(false)}
            className="absolute top-8 right-8 bg-cinema-orange hover:bg-cinema-orange/80"
            size="lg"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>
      )}
      {/* Header */}
      <header className="relative bg-cinema-dark-blue/90 backdrop-blur-sm border-b border-cinema-orange/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Film" size={32} className="text-cinema-orange" />
              <h1 className="text-3xl font-bold text-white tracking-wide">KINOIMAX</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-cinema-orange transition-colors font-medium">Главная</a>
              <a href="#" className="text-white hover:text-cinema-orange transition-colors font-medium">Афиша</a>
              <a href="#" className="text-white hover:text-cinema-orange transition-colors font-medium">Расписание</a>
              <a href="#" className="text-white hover:text-cinema-orange transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="bg-cinema-orange hover:bg-cinema-orange/80 text-white font-semibold px-6">
              Купить билет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <video 
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Супермен в кино!</h2>
          <Badge className="bg-cinema-orange text-white font-bold text-lg px-3 py-1">
            12+
          </Badge>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Сейчас в кино</h3>
            <p className="text-xl text-gray-300">Выберите фильм и посмотрите трейлер</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <Card 
                key={movie.id} 
                className="group bg-cinema-dark-blue/50 border-cinema-orange/20 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative cursor-pointer" onClick={() => handlePosterClick(movie.id)}>
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-cinema-orange rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Icon name="Play" size={32} className="text-white" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-cinema-orange text-white font-bold z-10">
                      {movie.ageRating}
                    </Badge>
                    <div className="absolute top-3 right-3 bg-cinema-orange/90 rounded-full p-2">
                      <Icon name="Video" size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-bold text-white text-lg mb-3 leading-tight line-clamp-2">
                      {movie.title}
                    </h4>
                    
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                      <span>{movie.genre}</span>
                      <span>{movie.year}</span>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-4">{movie.duration}</div>
                    
                    {/* Расписание сеансов */}
                    <div className="border-t border-cinema-orange/20 pt-4">
                      <h5 className="text-sm font-semibold text-cinema-orange mb-3">Сеансы:</h5>
                      <div className="flex flex-wrap gap-2">
                        {movie.sessions.map((time) => (
                          <span
                            key={time}
                            onClick={() => handleSessionClick(movie.id, time)}
                            className="bg-cinema-orange/20 text-cinema-orange px-3 py-1 rounded-md text-sm font-medium cursor-pointer hover:bg-cinema-orange hover:text-white transition-colors"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cinema-dark-blue/90 backdrop-blur-sm border-t border-cinema-orange/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Film" size={28} className="text-cinema-orange" />
                <h3 className="text-xl font-bold text-white">KINOIMAX</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Современный кинотеатр с технологиями будущего
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-cinema-orange transition-colors">Афиша</a></li>
                <li><a href="#" className="hover:text-cinema-orange transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-cinema-orange transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kinoimax.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Кинематографистов, 1</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Соцсети</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-cinema-orange text-cinema-orange hover:bg-cinema-orange hover:text-white">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-cinema-orange text-cinema-orange hover:bg-cinema-orange hover:text-white">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-cinema-orange text-cinema-orange hover:bg-cinema-orange hover:text-white">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-cinema-orange/20 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 KINOIMAX. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <Dialog open={selectedMovie !== null} onOpenChange={() => setSelectedMovie(null)}>
        <DialogContent className="max-w-4xl w-full h-[80vh] bg-cinema-dark-blue border-cinema-orange/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Play" size={24} className="text-cinema-orange" />
                <span>{selectedMovieData?.title}</span>
              </div>
              <Badge className="bg-cinema-orange text-white font-bold">
                {selectedMovieData?.ageRating}
              </Badge>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 rounded-lg overflow-hidden">
            {selectedMovieData && (
              <video 
                controls 
                autoPlay 
                className="w-full h-full object-cover rounded-lg"
                src={selectedMovieData.trailer}
              >
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Seat Selection Modal */}
      <Dialog open={selectedSession !== null} onOpenChange={() => setSelectedSession(null)}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] bg-cinema-dark-blue border-cinema-orange/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Armchair" size={24} className="text-cinema-orange" />
                <span>{selectedSessionMovie?.title}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-cinema-orange text-white font-bold">
                  {selectedSession?.time}
                </Badge>
                <Badge className="bg-cinema-orange text-white font-bold">
                  {selectedSessionMovie?.ageRating}
                </Badge>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Экран */}
            <div className="text-center">
              <div className="w-full h-2 bg-cinema-orange rounded-full mb-2"></div>
              <p className="text-cinema-orange font-semibold">ЭКРАН</p>
            </div>
            
            {/* Схема зала */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => (
                <div key={row} className="flex items-center justify-center space-x-1">
                  <div className="w-8 text-center text-cinema-orange font-bold">{row}</div>
                  <div className="flex space-x-1">
                    {Array.from({length: 12}, (_, i) => {
                      const seatId = `${row}${i + 1}`
                      const isOccupied = Math.random() < 0.3
                      const isSelected = selectedSeats.includes(seatId)
                      
                      return (
                        <button
                          key={seatId}
                          onClick={() => !isOccupied && toggleSeat(seatId)}
                          disabled={isOccupied}
                          className={`w-8 h-8 rounded-md text-xs font-bold transition-all ${
                            isOccupied 
                              ? 'bg-red-500 cursor-not-allowed opacity-50' 
                              : isSelected 
                                ? 'bg-cinema-orange text-white' 
                                : 'bg-gray-600 hover:bg-gray-500 text-white'
                          }`}
                        >
                          {i + 1}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Легенда */}
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                <span className="text-gray-300">Свободно</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-cinema-orange rounded"></div>
                <span className="text-gray-300">Выбрано</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-gray-300">Занято</span>
              </div>
            </div>
            
            {/* Кнопка покупки */}
            {selectedSeats.length > 0 && (
              <div className="text-center space-y-4">
                <p className="text-white">
                  Выбрано мест: <span className="text-cinema-orange font-bold">{selectedSeats.length}</span>
                  {' '}({selectedSeats.join(', ')})
                </p>
                <Button className="bg-cinema-orange hover:bg-cinema-orange/80 text-white font-semibold px-8 py-3">
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Купить билеты ({selectedSeats.length * 350} ₽)
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Index
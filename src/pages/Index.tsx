import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null)

  const movies = [
    {
      id: 1,
      title: 'Плагиатор',
      poster: 'https://m.media-amazon.com/images/M/MV5BNmY2OTFiYmYtZjFhMS00MDAxLWI0NmItYjg4YTU3NDBmZGQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trailer: 'https://media.cinemabox.team/net/c5/movies/12894/trailer-plagiator.mp4',
      genre: 'Триллер',
      duration: '108 мин',
      year: '2024'
    },
    {
      id: 2,
      title: 'Супермен',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000370/150114_68790004c7e067.10116531.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Фантастика',
      duration: '125 мин',
      year: '2025'
    },
    {
      id: 3,
      title: 'Лило и Стич',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000354/147965_6830cae02b9974.26300785.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Семейный',
      duration: '95 мин',
      year: '2025'
    },
    {
      id: 4,
      title: 'Как приручить дракона',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000363/148704_685b0568d31802.59369405.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000363/trailer-kak-priruchit-drakona-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Анимация',
      duration: '110 мин',
      year: '2025'
    },
    {
      id: 5,
      title: 'Формула 1',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000369/149883_68760521b2b993.21002650.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000369/trailer-formula-1-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Спорт',
      duration: '135 мин',
      year: '2025'
    },
    {
      id: 6,
      title: 'Материалистка',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/12271/149392_6866726ab072d7.65373077.webp',
      trailer: 'https://media.cinemabox.team/r/movies/12271/trailer-materialistka.mp4',
      genre: 'Комедия',
      duration: '102 мин',
      year: '2024'
    },
    {
      id: 7,
      title: '28 лет спустя',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000368/150110_6878bd395a04e3.07287001.webp',
      trailer: 'https://media.cinemabox.team/net/c5/movies/1000000000368/trailer-28-let-spustya-predseans-obsl-kuda-ukhodyat-papy.mp4',
      genre: 'Ужасы',
      duration: '118 мин',
      year: '2025'
    },
    {
      id: 8,
      title: 'Пила X',
      poster: 'https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/10780/150106_6878aba5700005.24408322.webp',
      trailer: 'https://media.cinemabox.team/r/movies/10780/trailer-pila-x.mp4',
      genre: 'Ужасы',
      duration: '103 мин',
      year: '2024'
    }
  ]

  const handlePosterClick = (movieId: number) => {
    setSelectedMovie(movieId)
  }

  const selectedMovieData = movies.find(movie => movie.id === selectedMovie)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cinema-dark-blue via-cinema-light-blue to-cinema-dark-blue">
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

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Современный кинотеатр<br />
            <span className="text-cinema-orange">премиум-класса</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Погрузитесь в мир кино с технологиями будущего. Уникальные фильмы, комфортные залы и незабываемые эмоции.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cinema-orange hover:bg-cinema-orange/80 text-white font-semibold px-8 py-3">
              <Icon name="Ticket" className="mr-2" size={20} />
              Выбрать сеанс
            </Button>
            <Button size="lg" variant="outline" className="border-cinema-orange text-cinema-orange hover:bg-cinema-orange hover:text-white font-semibold px-8 py-3">
              <Icon name="MapPin" className="mr-2" size={20} />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Сейчас в кино</h3>
            <p className="text-xl text-gray-300">Выберите фильм и посмотрите трейлер</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Card 
                key={movie.id} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-cinema-dark-blue/50 border-cinema-orange/20 backdrop-blur-sm"
                onClick={() => handlePosterClick(movie.id)}
              >
                <CardContent className="p-0 relative overflow-hidden rounded-lg">
                  <div className="relative">
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-cinema-orange rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Icon name="Play" size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-cinema-orange/90 rounded-full p-2">
                      <Icon name="Video" size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-white text-lg mb-2 leading-tight">{movie.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>{movie.genre}</span>
                      <span>{movie.year}</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{movie.duration}</div>
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
            <DialogTitle className="text-2xl font-bold text-white flex items-center space-x-3">
              <Icon name="Play" size={24} className="text-cinema-orange" />
              <span>{selectedMovieData?.title}</span>
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
    </div>
  )
}

export default Index
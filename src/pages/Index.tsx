import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'bio', label: 'Биография', icon: 'User' },
    { id: 'videos', label: 'Видео', icon: 'Play' },
    { id: 'music', label: 'Музыка', icon: 'Music' },
    { id: 'concerts', label: 'Концерты', icon: 'Calendar' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
  ];

  const videos = [
    { id: 1, title: 'Последний концерт в Москве', views: '125K', date: '2 дня назад' },
    { id: 2, title: 'Новый клип "Звезды"', views: '89K', date: '1 неделя назад' },
    { id: 3, title: 'За кулисами тура', views: '56K', date: '2 недели назад' },
  ];

  const tracks = [
    { id: 1, title: 'Звезды', album: 'Новый альбом', duration: '3:45' },
    { id: 2, title: 'Город огней', album: 'Новый альбом', duration: '4:12' },
    { id: 3, title: 'Последний танец', album: 'Синдром', duration: '3:58' },
    { id: 4, title: 'Ночной звонок', album: 'Синдром', duration: '3:22' },
  ];

  const concerts = [
    { id: 1, date: '15 дек 2024', city: 'Москва', venue: 'Adrenaline Stadium', status: 'available' },
    { id: 2, date: '22 дек 2024', city: 'Санкт-Петербург', venue: 'A2 Green Concert', status: 'available' },
    { id: 3, date: '29 дек 2024', city: 'Казань', venue: 'Пирамида', status: 'soldout' },
  ];

  const news = [
    { id: 1, title: 'Альберт анонсировал новый альбом', date: '5 ноября 2024', preview: 'Выход запланирован на начало следующего года...' },
    { id: 2, title: 'Группа выступит на фестивале ROCK WEEK', date: '28 октября 2024', preview: 'Синдром восьмиклассника станет хедлайнером...' },
    { id: 3, title: 'Интервью для журнала "Афиша"', date: '15 октября 2024', preview: 'Альберт рассказал о творческом процессе...' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={28} />
              <span className="text-xl font-bold">Альберт Галимзянов</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Youtube" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="text-sm">Солист группы "Синдром восьмиклассника"</Badge>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Альберт<br />Галимзянов
              </h1>
              <p className="text-xl text-muted-foreground">
                Рок-музыкант, автор хитов и вдохновитель миллионов. Каждое выступление — это взрыв энергии и эмоций.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Слушать музыку
                  <Icon name="Music" size={18} className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Ticket" size={18} className="mr-2" />
                  Купить билеты
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl" />
              <img
                src="https://cdn.poehali.dev/projects/0cff90f2-cc9c-4ccf-9de5-2f7ff1b1f5ac/files/2c3465b1-52b0-461f-ac25-f80766bdc291.jpg"
                alt="Альберт Галимзянов"
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bio" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Биография</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Альберт Галимзянов — харизматичный солист легендарной рок-группы "Синдром восьмиклассника". 
              Его мощный вокал и уникальная энергия на сцене покорили сердца тысяч фанатов по всей России.
            </p>
            <p>
              Музыкальный путь начался в подростковом возрасте, когда Альберт впервые взял в руки гитару. 
              С тех пор прошло немало лет, но страсть к музыке только крепнет. Группа "Синдром восьмиклассника" 
              стала настоящим прорывом в российской рок-сцене.
            </p>
            <p>
              Сегодня Альберт продолжает создавать музыку, которая вдохновляет и заряжает энергией миллионы слушателей.
            </p>
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Видео</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="group hover:scale-105 transition-all cursor-pointer">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={28} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground space-x-3">
                    <span className="flex items-center">
                      <Icon name="Eye" size={14} className="mr-1" />
                      {video.views}
                    </span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="music" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Музыка</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon name="Play" size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.album}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{track.duration}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="concerts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Концерты</h2>
          <div className="space-y-4">
            {concerts.map((concert) => (
              <Card key={concert.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-6">
                      <div className="text-center min-w-[80px]">
                        <div className="text-3xl font-bold text-primary">{concert.date.split(' ')[0]}</div>
                        <div className="text-sm text-muted-foreground uppercase">{concert.date.split(' ')[1]} {concert.date.split(' ')[2]}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{concert.city}</h3>
                        <p className="text-muted-foreground flex items-center">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          {concert.venue}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {concert.status === 'soldout' ? (
                        <Badge variant="secondary" className="text-sm">Билеты проданы</Badge>
                      ) : (
                        <>
                          <Badge variant="outline" className="text-sm text-green-500 border-green-500">Билеты в продаже</Badge>
                          <Button>
                            Купить билет
                            <Icon name="ArrowRight" size={16} className="ml-2" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Новости</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Calendar" size={14} className="mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground">{item.preview}</p>
                    <Button variant="link" className="p-0 h-auto">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center">
                <Icon name="Zap" className="text-primary mr-2" size={24} />
                Альберт Галимзянов
              </h3>
              <p className="text-sm text-muted-foreground">
                Официальный сайт солиста группы "Синдром восьмиклассника"
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Следите за нами</h3>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Music" size={18} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <p className="text-sm text-muted-foreground">
                Для сотрудничества:<br />
                info@albertgalimzyanov.ru
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            © 2024 Альберт Галимзянов. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

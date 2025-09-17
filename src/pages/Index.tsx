import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-secondary text-3xl"></div>
            <div>
              <h1 className="text-2xl font-bold text-primary"></h1>
              <p className="text-sm text-muted-foreground"></p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#classes" className="hover:text-primary transition-colors">Обучение</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#teachers" className="hover:text-primary transition-colors">Преподаватели</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-secondary text-6xl mb-6">✨</div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Танцуй Кавказ
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучай традиционную лезгинку и игру на кавказских барабанах в самой атмосферной школе Санкт-Петербурга
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на занятие
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-3">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Направления обучения</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите направление, которое вам ближе по душе, или изучайте оба одновременно
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">💃</div>
                  <CardTitle className="text-primary">Лезгинка</CardTitle>
                </div>
                <CardDescription>
                  Традиционный кавказский танец с элементами акробатики и пластики
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Группы для начинающих</span>
                    <Badge variant="secondary">Идет набор</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Продвинутый уровень</span>
                    <Badge variant="outline">2 места</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Детская группа (6-12 лет)</span>
                    <Badge variant="secondary">Идет набор</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">🥁</div>
                  <CardTitle className="text-accent">Кавказские барабаны</CardTitle>
                </div>
                <CardDescription>
                  Обучение игре на традиционных инструментах: дхол, нагара, даф
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Базовый курс</span>
                    <Badge variant="secondary">Идет набор</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ансамблевая игра</span>
                    <Badge variant="outline">3 места</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Мастер-классы</span>
                    <Badge variant="secondary">По записи</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Расписание занятий</h3>
            <p className="text-muted-foreground">Удобное время для всех возрастов и уровней подготовки</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { day: "Понедельник", time: "19:00-20:30", type: "Лезгинка (начинающие)", instructor: "Асият" },
              { day: "Вторник", time: "18:00-19:00", type: "Детская лезгинка", instructor: "Марьям" },
              { day: "Среда", time: "19:00-20:30", type: "Барабаны (базовый)", instructor: "Магомед" },
              { day: "Четверг", time: "19:30-21:00", type: "Лезгинка (продвинутые)", instructor: "Асият" },
              { day: "Пятница", time: "18:30-20:00", type: "Ансамбль барабанов", instructor: "Магомед" },
              { day: "Суббота", time: "11:00-12:30", type: "Общие занятия", instructor: "Все" }
            ].map((lesson, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{lesson.day}</CardTitle>
                    <Badge variant="outline">{lesson.time}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary mb-2">{lesson.type}</p>
                  <p className="text-sm text-muted-foreground">Преподаватель: {lesson.instructor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Наши преподаватели</h3>
            <p className="text-muted-foreground">Профессиональные мастера с многолетним опытом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  АМ
                </div>
                <CardTitle className="text-primary">Асият Магомедова</CardTitle>
                <CardDescription>Преподаватель лезгинки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  15 лет опыта, лауреат международных конкурсов, хореограф Дагестанского театра танца
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Лезгинка</Badge>
                  <Badge variant="secondary">Хореография</Badge>
                  <Badge variant="secondary">Постановка</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  МА
                </div>
                <CardTitle className="text-accent">Магомед Алиев</CardTitle>
                <CardDescription>Мастер кавказских барабанов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  20 лет игры на традиционных инструментах, участник фольклорных ансамблей Кавказа
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Дхол</Badge>
                  <Badge variant="secondary">Нагара</Badge>
                  <Badge variant="secondary">Даф</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Галерея и достижения</h3>
            <p className="text-muted-foreground">Моменты из жизни нашей школы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/img/807966d2-f4e7-4d1b-9d17-2775affe03ce.jpg" 
                alt="Занятие лезгинкой" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">Занятие лезгинкой</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/img/27836f22-3d7e-48e2-8c15-420838362ab3.jpg" 
                alt="Кавказские барабаны" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">Класс барабанов</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-lg text-white flex flex-col justify-center items-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-xl font-bold mb-2">Наши достижения</h4>
              <ul className="text-sm space-y-1 text-center">
                <li>1 место - Фестиваль "Кавказ 2023"</li>
                <li>Лауреаты "Горские ритмы"</li>
                <li>50+ выступлений в год</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Цены на обучение</h3>
            <p className="text-muted-foreground">Доступные тарифы для всех желающих</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Разовое занятие</CardTitle>
                <div className="text-3xl font-bold">1500₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />1 занятие</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Любое направление</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Знакомство с группой</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2 relative">
              <Badge variant="default" className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-primary">Абонемент (8 занятий)</CardTitle>
                <div className="text-3xl font-bold">10000₽</div>
                <div className="text-sm text-muted-foreground">1250₽ за занятие</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />8 занятий в месяц</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Любое направление</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Заморозка абонемента</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Участие в мероприятиях</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-accent">Индивидуальные занятия</CardTitle>
                <div className="text-3xl font-bold">3000₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Персональный подход</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Гибкое расписание</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Ускоренное обучение</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-2 text-green-500" />Подготовка к выступлениям</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Специальные предложения для детей и семей</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Обсудить цены
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Контакты</h3>
            <p className="text-muted-foreground">Приходите к нам в гости или свяжитесь для записи</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Наш адрес
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Home" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Танцевальная студия "Ритмы Гор"</p>
                    <p className="text-muted-foreground">ул. Рубинштейна, 15/17, Санкт-Петербург</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-muted-foreground" />
                  <div>
                    <p className="font-medium">+7 (812) 123-45-67</p>
                    <p className="text-muted-foreground text-sm">Ежедневно с 10:00 до 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-muted-foreground" />
                  <div>
                    <p className="font-medium">info@ritmygir.ru</p>
                    <p className="text-muted-foreground text-sm">Ответим в течение часа</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Icon name="Clock" className="mr-2" size={20} />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: "Понедельник - Пятница", time: "18:00 - 22:00" },
                    { day: "Суббота", time: "10:00 - 18:00" },
                    { day: "Воскресенье", time: "12:00 - 16:00" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-center">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на пробное занятие
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="text-secondary text-2xl">🏔️</div>
              <div>
                <p className="font-bold text-primary">Ритмы Гор</p>
                <p className="text-sm text-muted-foreground">Школа кавказских традиций</p>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Ритмы Гор. Все права защищены.</p>
            <p className="mt-1">Санкт-Петербург • Традиции живут в танце</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
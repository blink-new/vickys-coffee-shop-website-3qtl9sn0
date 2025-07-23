import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { MapPin, Clock, Phone, Mail, Coffee, Star, Menu, X } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = {
    coffee: [
      { 
        name: 'Espresso', 
        price: '₹80', 
        description: 'Rich and bold single shot',
        image: 'https://images.unsplash.com/photo-1572281451006-34e8940bb5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHNob3QlMjBjb2ZmZWUlMjBjdXAlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc1MzI1MTgwNHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Cappuccino', 
        price: '₹120', 
        description: 'Perfect balance of espresso, steamed milk, and foam',
        image: 'https://images.unsplash.com/photo-1544281474-bdf3e12f871f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnQlMjBmb2FtJTIwYmVhdXRpZnVsfGVufDB8MHx8fDE3NTMyNTE4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Latte', 
        price: '₹140', 
        description: 'Smooth espresso with steamed milk',
        image: 'https://images.unsplash.com/photo-1608833269765-a52366f7c40e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnQlMjBmb2FtJTIwYmVhdXRpZnVsfGVufDB8MHx8fDE3NTMyNTE4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Americano', 
        price: '₹100', 
        description: 'Espresso with hot water',
        image: 'https://images.unsplash.com/photo-1642316201223-2331fd52efa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBibGFjayUyMGNvZmZlZSUyMGN1cCUyMHN0ZWFtfGVufDB8MHx8fDE3NTMyNTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Mocha', 
        price: '₹160', 
        description: 'Chocolate and espresso blend',
        image: 'https://images.unsplash.com/photo-1664793678025-21bb2d47c2a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZSUyMHdoaXBwZWQlMjBjcmVhbXxlbnwwfDB8fHwxNzUzMjUxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Cold Brew', 
        price: '₹130', 
        description: 'Smooth, cold-extracted coffee',
        image: 'https://images.unsplash.com/photo-1610920051820-cb947e1c75da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxhbWVyaWNhbm8lMjBibGFjayUyMGNvZmZlZSUyMGN1cCUyMHN0ZWFtfGVufDB8MHx8fDE3NTMyNTE4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    tea: [
      { 
        name: 'Masala Chai', 
        price: '₹60', 
        description: 'Traditional Indian spiced tea',
        image: 'https://images.unsplash.com/photo-1669663078569-aa77d40c81e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhJTIwc3BpY2VzJTIwbWlsa3xlbnwwfDB8fHwxNzUzMjUxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Green Tea', 
        price: '₹70', 
        description: 'Fresh and healthy',
        image: 'https://images.unsplash.com/photo-1638367779083-3a8f8d7fcd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMGdsYXNzJTIwY3VwJTIwdHJhbnNwYXJlbnQlMjBob3R8ZW58MHwwfHx8MTc1MzI1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Earl Grey', 
        price: '₹80', 
        description: 'Classic English tea',
        image: 'https://images.unsplash.com/photo-1730281911215-fb36f0ad8af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxtYXNhbGElMjBjaGFpJTIwdGVhJTIwc3BpY2VzJTIwbWlsa3xlbnwwfDB8fHwxNzUzMjUxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Herbal Tea', 
        price: '₹75', 
        description: 'Caffeine-free blend',
        image: 'https://images.unsplash.com/photo-1566931081758-1df1109f4a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxncmVlbiUyMHRlYSUyMGdsYXNzJTIwY3VwJTIwdHJhbnNwYXJlbnQlMjBob3R8ZW58MHwwfHx8MTc1MzI1MTgzMHww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    snacks: [
      { 
        name: 'Samosa', 
        price: '₹40', 
        description: 'Crispy Indian snack with spiced filling',
        image: 'https://images.unsplash.com/photo-1716801564904-5605f562b664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW4lMjBzbmFjayUyMGZyaWVkJTIwZ29sZGVufGVufDB8MHx8fDE3NTMyNTE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Club Sandwich', 
        price: '₹150', 
        description: 'Fresh ingredients, multiple layers',
        image: 'https://images.unsplash.com/photo-1655195672061-90c23e3e8026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGNsdWIlMjBmcmVzaCUyMHZlZ2V0YWJsZXMlMjBicmVhZHxlbnwwfDB8fHwxNzUzMjUxODM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Grilled Sandwich', 
        price: '₹120', 
        description: 'Perfectly toasted with cheese',
        image: 'https://images.unsplash.com/photo-1649138759434-283589b34e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxzYW5kd2ljaCUyMGNsdWIlMjBmcmVzaCUyMHZlZ2V0YWJsZXMlMjBicmVhZHxlbnwwfDB8fHwxNzUzMjUxODM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Caprese Sandwich', 
        price: '₹140', 
        description: 'Fresh mozzarella, tomato, and basil',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxzYW5kd2ljaCUyMGNsdWIlMjBmcmVzaCUyMHZlZ2V0YWJsZXMlMjBicmVhZHxlbnwwfDB8fHwxNzUzMjUxODM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    desserts: [
      { 
        name: 'Tiramisu', 
        price: '₹180', 
        description: 'Classic Italian dessert with coffee layers',
        image: 'https://images.unsplash.com/photo-1671370796187-bc1a7f2574e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBjb2ZmZWUlMjBtYXNjYXJwb25lJTIwbGF5ZXJzfGVufDB8MHx8fDE3NTMyNTE4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Chocolate Cake', 
        price: '₹160', 
        description: 'Rich and decadent chocolate layers',
        image: 'https://images.unsplash.com/photo-1741244133035-660d79b51bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxicm93bmllJTIwY2hvY29sYXRlJTIwZnVkZ2UlMjBkZXNzZXJ0JTIwc3F1YXJlfGVufDB8MHx8fDE3NTMyNTE4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Brownie', 
        price: '₹120', 
        description: 'Fudgy chocolate brownie square',
        image: 'https://images.unsplash.com/photo-1739667648859-5434b0d677ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxicm93bmllJTIwY2hvY29sYXRlJTIwZnVkZ2UlMjBkZXNzZXJ0JTIwc3F1YXJlfGVufDB8MHx8fDE3NTMyNTE4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      { 
        name: 'Sticky Date Pudding', 
        price: '₹140', 
        description: 'Warm dessert with caramel sauce',
        image: 'https://images.unsplash.com/photo-1724116380693-52da975b9bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxicm93bmllJTIwY2hvY29sYXRlJTIwZnVkZ2UlMjBkZXNzZXJ0JTIwc3F1YXJlfGVufDB8MHx8fDE3NTMyNTE4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-coffee-brown/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-coffee-brown" />
              <span className="font-display text-2xl font-bold text-coffee-brown">Vicky's</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === item 
                      ? 'text-coffee-brown border-b-2 border-coffee-brown' 
                      : 'text-gray-600 hover:text-coffee-brown'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-coffee-brown/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-coffee-brown capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-coffee-brown/10 text-coffee-brown hover:bg-coffee-brown/20">
                  ☕ Fresh Coffee Daily
                </Badge>
                <h1 className="font-display text-5xl lg:text-7xl font-bold text-coffee-brown leading-tight">
                  Welcome to
                  <span className="block text-gradient">Vicky's Coffee</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the perfect blend of rich flavors and cozy atmosphere in the heart of Baner, Pune. 
                  Where every cup tells a story and every visit feels like home.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="coffee-gradient text-white hover:opacity-90 transition-opacity"
                  onClick={() => scrollToSection('menu')}
                >
                  View Our Menu
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Visit Us Today
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-coffee-brown" />
                  <span className="text-gray-600">Baner, Pune</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-coffee-brown" />
                  <span className="text-gray-600">7 AM - 10 PM</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-coffee-brown to-coffee-accent rounded-3xl p-8 shadow-2xl">
                <div className="h-full bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Coffee className="h-24 w-24 text-coffee-brown mx-auto" />
                    <h3 className="font-display text-2xl font-bold text-coffee-brown">
                      Crafted with Love
                    </h3>
                    <p className="text-gray-600">
                      Every cup is carefully prepared by our skilled baristas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-coffee-brown/10 text-coffee-brown">Our Menu</Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-coffee-brown">
              Delicious Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From aromatic coffees to delightful snacks, discover our carefully curated selection
            </p>
          </div>

          <div className="grid gap-12">
            {Object.entries(menuItems).map(([category, items]) => {
              const categoryImages = {
                coffee: 'https://images.unsplash.com/photo-1610920051820-cb947e1c75da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMGRhcmslMjByb2FzdHxlbnwwfDB8fHwxNzUzMjUxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                tea: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHx0ZWElMjBjdXAlMjBoZXJiYWwlMjBncmVlbiUyMHRlYXxlbnwwfDB8fHwxNzUzMjUxNTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
                snacks: 'https://images.unsplash.com/photo-1658740877404-4ec982e2ac8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnklMjBmb29kfGVufDB8MHx8fDE3NTMyNTE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                desserts: 'https://images.unsplash.com/photo-1645805740318-31bb7604ffd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydCUyMHNsaWNlfGVufDB8MHx8fDE3NTMyNTE1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080'
              }
              
              return (
                <div key={category} className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={categoryImages[category as keyof typeof categoryImages]} 
                        alt={category}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-coffee-brown capitalize">
                      {category}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow border-coffee-brown/10 overflow-hidden">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-coffee-brown">{item.name}</CardTitle>
                            <Badge variant="secondary" className="bg-coffee-brown text-white">
                              {item.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {category !== 'desserts' && <Separator className="my-8" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-coffee-brown/10 text-coffee-brown">About Vicky's</Badge>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-coffee-brown">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded with a passion for exceptional coffee and community, Vicky's Coffee Shop 
                  has been serving the Baner neighborhood with love and dedication since our opening.
                </p>
                <p>
                  We believe that great coffee brings people together. Our carefully selected beans, 
                  expert brewing techniques, and warm atmosphere create the perfect space for 
                  conversations, work, and relaxation.
                </p>
                <p>
                  Every cup we serve is a testament to our commitment to quality, from sourcing 
                  the finest beans to training our baristas in the art of coffee making.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-coffee-brown">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-coffee-brown">15+</div>
                  <div className="text-sm text-gray-600">Coffee Varieties</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-coffee-brown">2+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-coffee-brown/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex text-coffee-brown">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-coffee-brown">5.0 Rating</span>
                </div>
                <blockquote className="text-gray-600 italic">
                  "The best coffee in Baner! The atmosphere is so cozy and the staff is incredibly friendly. 
                  My go-to place for morning coffee and evening conversations."
                </blockquote>
                <div className="mt-4 font-medium text-coffee-brown">- Priya S., Regular Customer</div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-coffee-brown/5 p-6 rounded-lg text-center">
                  <Coffee className="h-8 w-8 text-coffee-brown mx-auto mb-2" />
                  <div className="font-semibold text-coffee-brown">Premium Beans</div>
                  <div className="text-sm text-gray-600">Sourced globally</div>
                </div>
                <div className="bg-coffee-brown/5 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-coffee-brown mx-auto mb-2" />
                  <div className="font-semibold text-coffee-brown">Fresh Daily</div>
                  <div className="text-sm text-gray-600">Roasted in-house</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-coffee-brown/10 text-coffee-brown">Get in Touch</Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-coffee-brown">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to serve you the perfect cup. Find us in Baner or get in touch!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6 border-coffee-brown/10">
                <CardHeader>
                  <CardTitle className="text-coffee-brown flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    123 Main Street, Baner<br />
                    Pune, Maharashtra 411045<br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-coffee-brown/10">
                <CardHeader>
                  <CardTitle className="text-coffee-brown flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Opening Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday - Sunday</span>
                    <span className="font-medium">8:00 AM - 11:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-coffee-brown/10">
                <CardHeader>
                  <CardTitle className="text-coffee-brown flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-coffee-brown" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-coffee-brown" />
                    <span>hello@vickyscoffee.com</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 border-coffee-brown/10">
              <CardHeader>
                <CardTitle className="text-coffee-brown">Send us a Message</CardTitle>
                <CardDescription>
                  Have questions or feedback? We'd love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                  <Textarea 
                    placeholder="Tell us what's on your mind..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full coffee-gradient text-white hover:opacity-90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-8 w-8" />
                <span className="font-display text-2xl font-bold">Vicky's</span>
              </div>
              <p className="text-coffee-brown/80">
                Serving exceptional coffee and creating memorable experiences in Baner, Pune.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-coffee-brown/80 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold">Connect</h3>
              <div className="space-y-2 text-coffee-brown/80">
                <p>📍 Baner, Pune</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ hello@vickyscoffee.com</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-coffee-brown/20" />
          
          <div className="text-center text-coffee-brown/60">
            <p>&copy; 2024 Vicky's Coffee Shop. Made with ❤️ in Baner, Pune.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
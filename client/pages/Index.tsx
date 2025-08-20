import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-red-600">吉野家</div>
              <div className="ml-2 text-sm text-gray-600">YOSHINOYA</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#menu"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                메뉴
              </a>
              <a
                href="#stores"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                매장찾기
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                브랜드
              </a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              주문하기
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-50 pt-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-700 mb-4">
                일본 전통의 맛
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                정통 일본식
                <br />
                <span className="text-red-600">규동의 명가</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                1899년부��� 이어온 전통의 맛. 신선한 일본산 소고기와 특제 소스로
                만든 진짜 규동을 경험해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  지금 주문하기
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  매장 찾기
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🍚</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      규동
                    </h3>
                    <p className="text-gray-600">일본 ���통 소고기덮밥</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium z-20">
                베스트셀러
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              대표 메뉴
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              130년 전통의 비법으로 만든 요시노야만의 특별한 맛을 경험해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "규동",
                price: "5,900원",
                description:
                  "요시노야 대표 메뉴. 부드러운 소고기와 양파의 조화",
                badge: "인기",
                emoji: "🥩",
              },
              {
                name: "치즈규동",
                price: "6,900원",
                description: "고소한 치즈가 더해진 특별한 규동",
                badge: "신메뉴",
                emoji: "🧀",
              },
              {
                name: "가라아게",
                price: "4,500원",
                description: "바삭한 일본식 닭튀김",
                badge: "",
                emoji: "🍗",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow border-0 shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">{item.emoji}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <Badge className="bg-red-100 text-red-700">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">
                      {item.price}
                    </span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      주문
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                빠른 서비스
              </h3>
              <p className="text-gray-600">
                주문 후 평균 3분 내 제공되는 신속한 서비스로 바쁜 일상에 완벽한
                식사
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                프리미엄 재료
              </h3>
              <p className="text-gray-600">
                엄선된 일본산 소고기와 130년 전통의 특제 소스로 만든 authentic한
                맛
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                전국 매장
              </h3>
              <p className="text-gray-600">
                전국 주요 지역 200여 개 매장에서 언제든지 만나볼 수 있는
                요시노야
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 주문하세요
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            130년 전통의 맛을 집에서도, 매장에서도 편리하게 즐기세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              온라인 주문
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              가까운 매장 찾기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-red-500 mb-4">吉野家</div>
              <p className="text-gray-400">
                1899년부터 이어온
                <br />
                일본 규동의 전통
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">메뉴</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    규동
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    치즈규동
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    가라아게
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    매장찾기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    배달주문
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    고객센터
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">고객센터</h4>
              <div className="flex items-center text-gray-400 mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>1588-1234</span>
              </div>
              <p className="text-gray-400 text-sm">운영시간: 평일 9:00-18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Yoshinoya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

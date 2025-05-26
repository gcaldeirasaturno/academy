import {
  BookOpen,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Target,
  Lightbulb,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#2D3E50] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">tt</span>
              </div>
              <span className="text-2xl font-bold text-[#2D3E50]">academy</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#missao" className="text-gray-600 hover:text-[#2D3E50] transition-colors">
                Nossa Missão
              </a>
              <a href="#diferenciais" className="text-gray-600 hover:text-[#2D3E50] transition-colors">
                Diferenciais
              </a>
              <a href="#lista-espera" className="text-gray-600 hover:text-[#2D3E50] transition-colors">
                Lista de Espera
              </a>
              <a href="#contato" className="text-gray-600 hover:text-[#2D3E50] transition-colors">
                Contato
              </a>
            </nav>
            <Button className="bg-[#B8860B] hover:bg-[#9A7209] text-white">Entrar na Lista</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#34495E] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#B8860B] text-white mb-4">Maior Referência em Marketing Digital Tributário</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                TT Academy: Sua Escola de
                <span className="text-[#B8860B]"> Consultores Tributários</span> no Brasil
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Bem-vindo à TT Academy, a maior referência em marketing digital para educação profissional na área
                tributária do Brasil. Somos focados em especialização tributária e em abrir oportunidades de prestação
                de serviços para advogados e contadores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white">
                  Entrar na Lista de Espera
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2D3E50]"
                >
                  Saiba Mais
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#B8860B]">#1</div>
                  <div className="text-sm text-gray-300">Referência Nacional</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#B8860B]">360º</div>
                  <div className="text-sm text-gray-300">Visão do Negócio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#B8860B]">100%</div>
                  <div className="text-sm text-gray-300">Foco Prático</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#B8860B]">Nossa Expertise Combina:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#B8860B]" />
                    <span>Pesquisa de mercado especializada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#B8860B]" />
                    <span>Storytelling educativo eficaz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#B8860B]" />
                    <span>Estratégias de funil de vendas perpétuo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-[#B8860B]" />
                    <span>Profundo conhecimento da regulação fiscal brasileira</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section id="missao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2D3E50] mb-4">Nossa Missão</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Na TT Academy, nossa missão é transformar profissionais em consultores tributários de sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-[#B8860B]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#2D3E50]">Educar e Qualificar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Capacitar advogados e contadores (incluindo recém-formados) nas principais tendências de tributação
                  empresarial e legal tech.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-[#6B7280]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#6B7280] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#2D3E50]">Monetizar desde o Primeiro Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Oferecer produtos de entrada que gerem receita imediata e construam um caminho para produtos de maior
                  valor.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-[#2D3E50]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#2D3E50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#2D3E50]">Construir Autoridade e Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Preparar você para avançar em sua jornada profissional, desde cursos de entrada até mentoria e
                  possíveis parcerias/franquias.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-[#B8860B]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#2D3E50]">Abrir Portas de Mercado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Conectar você a oportunidades concretas de prestação de serviços para empresas brasileiras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2D3E50] mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de educação tributária
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3E50] mb-2 text-xl">Foco Prático e Inovador</h3>
                  <p className="text-gray-600">
                    Currículo robusto e atualizado, com metodologias ativas, estudos de caso, simulações e TaxTech.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#6B7280] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3E50] mb-2 text-xl">Corpo Docente de Excelência</h3>
                  <p className="text-gray-600">Instrutores experientes e renomados no mercado tributário brasileiro.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#2D3E50] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3E50] mb-2 text-xl">Visão 360º do Negócio</h3>
                  <p className="text-gray-600">
                    Vamos além do ensino técnico, desenvolvendo suas competências consultivas e de gestão.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3E50] mb-2 text-xl">Comunidade Engajada</h3>
                  <p className="text-gray-600">
                    Conecte-se com outros profissionais, troque experiências e expanda sua rede de contatos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#34495E] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Por que se inscrever?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#B8860B] flex-shrink-0 mt-1" />
                  <span>Receba conteúdos exclusivos sobre as últimas tendências do mercado tributário</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#B8860B] flex-shrink-0 mt-1" />
                  <span>Tenha acesso prioritário a nossos cursos e eventos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#B8860B] flex-shrink-0 mt-1" />
                  <span>Faça parte de uma comunidade de profissionais de alto nível</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#B8860B] flex-shrink-0 mt-1" />
                  <span>Dê um salto na sua carreira e conquiste novas oportunidades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Espera Section */}
      <section id="lista-espera" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2D3E50] mb-4">Junte-se à Nossa Lista de Espera!</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Queremos que você faça parte da comunidade de profissionais mais qualificados e requisitados do mercado
                tributário brasileiro. Deixe seus dados abaixo para receber em primeira mão as novidades sobre nossos
                cursos, eventos e conteúdos exclusivos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Área de Atuação *</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="area" value="advogado" className="mr-2 text-[#B8860B]" />
                        <span>Advogado</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="area" value="contador" className="mr-2 text-[#B8860B]" />
                        <span>Contador</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="area" value="outro" className="mr-2 text-[#B8860B]" />
                        <span>Outro</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent">
                      <option value="">Selecione seu estado</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="PR">Paraná</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="BA">Bahia</option>
                      <option value="GO">Goiás</option>
                      <option value="PE">Pernambuco</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="AL">Alagoas</option>
                      <option value="AM">Amazonas</option>
                      <option value="AP">Amapá</option>
                      <option value="MA">Maranhão</option>
                      <option value="PI">Piauí</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                      <option value="AC">Acre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interesse Principal *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="interesse" value="tributacao" className="mr-2 text-[#B8860B]" />
                      <span>Tributação Empresarial</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="interesse" value="legaltech" className="mr-2 text-[#B8860B]" />
                      <span>Legal Tech</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="interesse" value="consultoria" className="mr-2 text-[#B8860B]" />
                      <span>Consultoria Financeira</span>
                    </label>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-12">
                    Entrar na Lista de Espera
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Ao se inscrever, você concorda em receber comunicações da TT Academy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D3E50] to-[#34495E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            TT Academy: Sua jornada para o sucesso tributário começa aqui!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Faça parte da maior referência em marketing digital para educação profissional na área tributária do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white">
              Entrar na Lista de Espera
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2D3E50]">
              Falar com Nossa Equipe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2D3E50] mb-6">Entre em Contato</h2>
              <p className="text-lg text-gray-600 mb-8">
                Tem dúvidas sobre nossa metodologia ou quer saber mais sobre como podemos ajudar na sua carreira? Nossa
                equipe está pronta para conversar com você.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3E50]">Telefone</div>
                    <div className="text-gray-600">(11) 3456-7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6B7280] rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3E50]">E-mail</div>
                    <div className="text-gray-600">contato@ttacademy.com.br</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2D3E50] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3E50]">Endereço</div>
                    <div className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#2D3E50] mb-6">Solicite Mais Informações</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent">
                    <option>Selecione um assunto</option>
                    <option>Informações sobre cursos</option>
                    <option>Parcerias e franquias</option>
                    <option>Mentoria personalizada</option>
                    <option>Oportunidades de mercado</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#B8860B] hover:bg-[#9A7209] text-white">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3E50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#B8860B] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">tt</span>
                </div>
                <span className="text-xl font-bold">academy</span>
              </div>
              <p className="text-gray-300 mb-4">
                A maior referência em marketing digital para educação profissional na área tributária do Brasil.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nossa Missão</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Educar e Qualificar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Monetizar desde o Primeiro Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Construir Autoridade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Abrir Portas de Mercado
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Diferenciais</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Foco Prático e Inovador
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Corpo Docente de Excelência
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Visão 360º do Negócio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#B8860B] transition-colors">
                    Comunidade Engajada
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>(11) 3456-7890</li>
                <li>contato@ttacademy.com.br</li>
                <li>Av. Paulista, 1000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 TT Academy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

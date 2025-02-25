import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Calendar, Flag, Car, GraduationCap, BookOpen, Star, Briefcase } from "lucide-react"

export default function CvGrid() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
      <Card className="mx-auto max-w-6xl">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <Avatar className="h-32 w-32 rounded-md">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250212_192611419_PORTRAIT.jpg-jvJSeHZsZG0Gl5KsztgJZq6VkBAcAB.jpeg"
                alt="Profile photo"
                className="object-cover"
              />
              <AvatarFallback>TI</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Taras Ishchuk</h1>
              <p className="text-lg text-muted-foreground">Frontend Developer | Full Stack Developer</p>
            </div>
          </div>

          {/* Main Content and Sidebar Grid */}
          <div className="grid gap-8 md:grid-cols-[1fr,300px]">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Profile */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Profil</h2>
                </div>
                <p className="text-muted-foreground">
                  Full Stack Developer s více než dvouletým vzděláním v oblasti webového vývoje a rozsáhlými zkušenostmi
                  v oblasti analýzy dat a systémové automatizace. Kombinuji technické znalosti webových technologií
                  (JavaScript, React.js, Node.js) s analytickým myšlením získaným z předchozí práce v oblasti statistiky
                  a informačních systémů.
                </p>
              </section>

              {/* Projects */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Významné projekty</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Škola Pro - Vzdělávací platforma</h3>
                      <span className="text-sm text-muted-foreground">Prosinec 2023 — Současnost</span>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Komplexní vzdělávací systém vyvinutý pomocí React.js a Node.js
                    </p>
                    <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                      <li>Frontend: github.com/ishchuktaras/skola-pro</li>
                      <li>Backend: github.com/ishchuktaras/scool-pro-api</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Work Experience */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Relevantní pracovní zkušenosti</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">
                        Hlavní specialista informačně-analytického oddělení v TMG s.r.o., Kyiv
                      </h3>
                      <span className="text-sm text-muted-foreground">Prosinec 2012 — Květen 2015</span>
                    </div>
                    <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                      <li>Správa automatizace prodeje v síti distributorů</li>
                      <li>Analýza a optimalizace prodejních procesů</li>
                      <li>Implementace systémových řešení</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">
                        Hlavní ekonom (státní zaměstnanec) v Statistický úřad Žytomyrské oblasti, Žytomyr
                      </h3>
                      <span className="text-sm text-muted-foreground">Srpen 2008 — Listopad 2012</span>
                    </div>
                    <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                      <li>
                        Shromažďování statistických údajů o objemech maloobchodu, obratu zboží a finančních ukazatelích
                        podniků
                      </li>
                      <li>Kontrola, analýza a agregace získaných dat pro přípravu oficiálních zpráv</li>
                      <li>Příprava pravidelných zpráv pro Státní statistickou službu Ukrajiny</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* IT Education */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Vzdělávání v IT</h2>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Absolvent kurzu front end vývoje, IT Step Academy, Praha</h3>
                    <span className="text-sm text-muted-foreground">Listopad 2021 — Březen 2022</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Po ukončení kurzu schopen:</p>
                  <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                    <li>Vytvářet moderní responzivní webové aplikace</li>
                    <li>Pracovat s populárními front-end frameworky</li>
                    <li>Implementovat interaktivní uživatelská rozhraní</li>
                    <li>Spolupracovat v týmu pomocí verzovacích systémů</li>
                    <li>Řešit technické problémy a optimalizovat kód</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Vzdělání</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Kyjevská národní ekonomická univerzita, Kyjev</h3>
                      <span className="text-sm text-muted-foreground">Září 2010 — Březen 2012</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">Magistr veřejné správy</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Evropská univerzita financí, managementu a IS, Žytomyr</h3>
                      <span className="text-sm text-muted-foreground">Září 2002 — Květen 2008</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Manažer-ekonom, Management zahraničně-ekonomické činnosti
                    </p>
                  </div>
                </div>
              </section>

              {/* Courses */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Kurzy</h2>
                </div>
              </section>

              {/* Free time activities */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Volnočasové aktivity</h2>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Details */}
              <section>
                <h2 className="mb-4 text-xl font-semibold">Detaily</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Nad Plovárnou 3767/8, 58601, Jihlava, Česká Republika</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:ishchuktaras@gmail.com" className="text-sm text-blue-600">
                      ishchuktaras@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">22.04.1981, Žytomyr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    <span className="text-sm">Ukrajina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    <span className="text-sm">A,B,C</span>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="mb-4 text-xl font-semibold">Technické dovednosti</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium">Frontend:</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "React.js", "Next.js", "jQuery", "Bootstrap", "CSS"].map(
                        (skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Backend:</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <Badge variant="secondary">Node.js</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Databáze:</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {["PostgreSQL", "Prisma DB", "Neon DB"].map((db) => (
                        <Badge key={db} variant="secondary">
                          {db}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="mb-4 text-xl font-semibold">Jazyky</h2>
                <div className="space-y-2">
                  {[
                    { lang: "Čeština", level: "Pokročilý" },
                    { lang: "Angličtina", level: "Pokročilý" },
                    { lang: "Ruština", level: "Rodilý mluvčí" },
                  ].map((language) => (
                    <div key={language.lang} className="flex items-center justify-between">
                      <span className="text-sm">{language.lang}</span>
                      <Badge variant="outline">{language.level}</Badge>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


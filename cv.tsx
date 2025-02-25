"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  GraduationCap,
  BookOpen,
  Star,
  Briefcase,
  Download,
  Moon,
  Sun,
  Phone,
  Github,
  LinkedinIcon,
} from "lucide-react"

export default function CV() {
  const [theme, setTheme] = React.useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`min-h-screen p-4 md:p-8 lg:p-12 ${theme}`}>
      <Card className="mx-auto max-w-6xl bg-background">
        <CardContent className="p-6">
          {/* Header with Theme Toggle and Download */}
          <div className="mb-6 flex justify-end gap-2">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile Header */}
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">
            <Avatar className="h-32 w-32 rounded-md">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250212_192611419_PORTRAIT.jpg-jvJSeHZsZG0Gl5KsztgJZq6VkBAcAB.jpeg"
                alt="Profile photo"
                className="object-cover"
              />
              <AvatarFallback>TI</AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-3xl font-bold">Taras Ishchuk</h1>
                <p className="text-lg text-muted-foreground">Frontend Developer | Full Stack Developer</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:ishchuktaras@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary">
                  <Mail className="h-4 w-4" />
                  ishchuktaras@gmail.com
                </a>
                <a href="tel:+420777596216" className="flex items-center gap-2 text-sm hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +420777596216
                </a>
                <a
                  href="https://github.com/ishchuktaras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ishchuktaras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="profile">Profil & Projekty</TabsTrigger>
              <TabsTrigger value="experience">Zkušenosti</TabsTrigger>
              <TabsTrigger value="education">Vzdělání</TabsTrigger>
              <TabsTrigger value="skills">Dovednosti</TabsTrigger>
            </TabsList>

            {/* Profile & Projects Tab */}
            <TabsContent value="profile" className="space-y-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Profil</h2>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">
                      Full Stack Developer s více než dvouletým vzděláním v oblasti webového vývoje a rozsáhlými
                      zkušenostmi v oblasti analýzy dat a systémové automatizace. Kombinuji technické znalosti webových
                      technologií (JavaScript, React.js, Node.js) s analytickým myšlením získaným z předchozí práce v
                      oblasti statistiky a informačních systémů.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Významné projekty</h2>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Škola Pro - Vzdělávací platforma</h3>
                          <Badge>Prosinec 2023 — Současnost</Badge>
                        </div>
                        <p className="mt-2 text-muted-foreground">
                          Komplexní vzdělávací systém vyvinutý pomocí React.js a Node.js
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline">React.js</Badge>
                          <Badge variant="outline">Node.js</Badge>
                          <Badge variant="outline">PostgreSQL</Badge>
                        </div>
                        <div className="mt-4 space-y-2">
                          <a
                            href="https://github.com/ishchuktaras/skola-pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Github className="h-4 w-4" />
                            Frontend Repository
                          </a>
                          <a
                            href="https://github.com/ishchuktaras/scool-pro-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Github className="h-4 w-4" />
                            Backend Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Pracovní zkušenosti</h2>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Hlavní specialista informačně-analytického oddělení</h3>
                      <Badge>2012 — 2015</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">TMG s.r.o., Kyiv</p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      <li>Správa automatizace prodeje v síti distributorů</li>
                      <li>Analýza a optimalizace prodejních procesů</li>
                      <li>Implementace systémových řešení</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Hlavní ekonom</h3>
                      <Badge>2008 — 2012</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Statistický úřad Žytomyrské oblasti, Žytomyr</p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      <li>Shromažďování a analýza statistických údajů</li>
                      <li>Příprava oficiálních zpráv a analýz</li>
                      <li>Správa databází a tvorba analytických výstupů</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Vzdělávání v IT</h2>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">IT Step Academy, Praha</h3>
                      <Badge>2021 — 2022</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Front End Development</p>
                    <div className="mt-4 space-y-2">
                      <Badge className="mr-2" variant="outline">
                        HTML/CSS
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        JavaScript
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        React
                      </Badge>
                      <Badge variant="outline">Git</Badge>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Formální vzdělání</h2>
                </div>
                <Card>
                  <CardContent className="p-4 space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Kyjevská národní ekonomická univerzita</h3>
                        <Badge>2010 — 2012</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Magistr veřejné správy</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Evropská univerzita financí, managementu a IS</h3>
                        <Badge>2002 — 2008</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Manažer-ekonom, Management zahraničně-ekonomické činnosti
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Technické dovednosti</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="mb-4 font-medium">Frontend</h3>
                      <div className="space-y-4">
                        {[
                          { skill: "JavaScript/TypeScript", level: 90 },
                          { skill: "React.js", level: 85 },
                          { skill: "Next.js", level: 80 },
                          { skill: "HTML/CSS", level: 90 },
                        ].map((item) => (
                          <div key={item.skill} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{item.skill}</span>
                              <span>{item.level}%</span>
                            </div>
                            <Progress value={item.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="mb-4 font-medium">Backend & Databáze</h3>
                      <div className="space-y-4">
                        {[
                          { skill: "Node.js", level: 75 },
                          { skill: "PostgreSQL", level: 70 },
                          { skill: "Prisma", level: 65 },
                          { skill: "REST API", level: 80 },
                        ].map((item) => (
                          <div key={item.skill} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{item.skill}</span>
                              <span>{item.level}%</span>
                            </div>
                            <Progress value={item.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Jazyky</h2>
                <Card>
                  <CardContent className="p-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { lang: "Čeština", level: 80, label: "Pokročilý" },
                        { lang: "Angličtina", level: 75, label: "Pokročilý" },
                        { lang: "Ruština", level: 100, label: "Rodilý mluvčí" },
                      ].map((item) => (
                        <div key={item.lang} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{item.lang}</span>
                            <Badge variant="outline">{item.label}</Badge>
                          </div>
                          <Progress value={item.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Soft Skills</h2>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Analytické myšlení",
                        "Řešení komplexních problémů",
                        "Týmová spolupráce",
                        "Adaptabilita",
                        "Komunikační dovednosti",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}


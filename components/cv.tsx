'use client'

import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
} from 'lucide-react'
import { translations } from '@/lib/translations'

export default function CV() {
  const [theme, setTheme] = React.useState('light')
  const [language, setLanguage] = React.useState<'cs' | 'en'>('cs')
  const t = translations[language]

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const toggleLanguage = (lang: 'cs' | 'en') => {
    setLanguage(lang)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/CV_fullstack.pdf" // Změň cestu k souboru
    link.download = "CV_fullstack.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-4">
      <Card className="mx-auto max-w-12xl bg-background shadow-xl">
        <CardContent className="p-2 md:p-8 lg:p-4">
          {/* Header with Theme Toggle, Language and Download */}
          <div className="mb-6 flex justify-end gap-2">
            <div className="flex gap-2 mr-auto">
              <Button
                variant={language === 'cs' ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleLanguage('cs')}
                className={language === 'cs' ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                <span className="mr-1">🇨🇿</span> Česky
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleLanguage('en')}
                className={language === 'en' ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                <span className="mr-1">🇬🇧</span> English
              </Button>
            </div>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2" />
              Download CV
            </Button>
          </div>

          {/* Profile Header */}
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">
            <Avatar className="h-32 w-32 rounded-md border-2 border-purple-300 dark:border-purple-700">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250212_192611419_PORTRAIT.jpg-jvJSeHZsZG0Gl5KsztgJZq6VkBAcAB.jpeg"
                alt="Profile photo"
                className="object-cover"
              />
              <AvatarFallback className="bg-purple-200 text-purple-700">TI</AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-3xl font-bold">Taras Ishchuk</h1>
                <p className="text-lg text-muted-foreground">
                  Frontend Developer | Full Stack Developer
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:ishchuktaras@gmail.com"
                  className="flex items-center gap-2 text-sm hover:text-purple-600"
                >
                  <Mail className="h-4 w-4" />
                  ishchuktaras@gmail.com
                </a>
                <a
                  href="tel:+420777596216"
                  className="flex items-center gap-2 text-sm hover:text-purple-600"
                >
                  <Phone className="h-4 w-4" />
                  +420777596216
                </a>
                <a
                  href="https://github.com/ishchuktaras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-purple-600"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ishchuktaras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-purple-600"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="profile" className="space-y-28">
            <TabsList className="grid w-full grid-cols-1 lg:grid-cols-4 bg-purple-100 dark:bg-purple-900">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {t.tabs.profile}
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {t.tabs.experience}
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {t.tabs.education}
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                {t.tabs.skills}
              </TabsTrigger>
            </TabsList>

            {/* Profile & Projects Tab */}
            <TabsContent value="profile" className="space-y-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-semibold">{t.sections.profile.title}</h2>
                </div>
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{t.sections.profile.content}</p>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-semibold">{t.sections.projects.title}</h2>
                </div>
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{t.sections.projects.items[0].title}</h3>
                          <Badge className="bg-purple-600 hover:bg-purple-700">
                            {t.sections.projects.items[0].period}
                          </Badge>
                        </div>
                        <p className="mt-2 text-muted-foreground">
                          {t.sections.projects.items[0].description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="border-purple-300 dark:border-purple-700"
                          >
                            React.js
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-purple-300 dark:border-purple-700"
                          >
                            Node.js
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-purple-300 dark:border-purple-700"
                          >
                            PostgreSQL
                          </Badge>
                        </div>
                        <div className="mt-4 space-y-2">
                          <a
                            href="https://github.com/ishchuktaras/skola-pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-purple-600 hover:underline"
                          >
                            <Github className="h-4 w-4" />
                            Frontend Repository
                          </a>
                          <a
                            href="https://github.com/ishchuktaras/scool-pro-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-purple-600 hover:underline"
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
                <Briefcase className="h-5 w-5 text-purple-600" />
                <h2 className="text-xl font-semibold">{t.sections.experience.title}</h2>
              </div>
              <div className="space-y-4">
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{t.sections.experience.items[0].title}</h3>
                      <Badge className="bg-purple-600 hover:bg-purple-700">
                        {t.sections.experience.items[0].period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.sections.experience.items[0].company}
                    </p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      {t.sections.experience.items[0].responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{t.sections.experience.items[1].title}</h3>
                      <Badge className="bg-purple-600 hover:bg-purple-700">
                        {t.sections.experience.items[1].period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.sections.experience.items[1].company}
                    </p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      {t.sections.experience.items[1].responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-semibold">{t.sections.itEducation.title}</h2>
                </div>
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{t.sections.itEducation.items[0].institution}</h3>
                      <Badge className="bg-purple-600 hover:bg-purple-700">
                        {t.sections.itEducation.items[0].period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.sections.itEducation.items[0].degree}
                    </p>
                    <div className="mt-4 space-y-2">
                      <Badge
                        className="mr-2 border-purple-300 dark:border-purple-700"
                        variant="outline"
                      >
                        HTML/CSS
                      </Badge>
                      <Badge
                        className="mr-2 border-purple-300 dark:border-purple-700"
                        variant="outline"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        className="mr-2 border-purple-300 dark:border-purple-700"
                        variant="outline"
                      >
                        React
                      </Badge>
                      <Badge variant="outline" className="border-purple-300 dark:border-purple-700">
                        Git
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-semibold">{t.sections.formalEducation.title}</h2>
                </div>
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4 space-y-6">
                    {t.sections.formalEducation.items.map((edu, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{edu.institution}</h3>
                          <Badge className="bg-purple-600 hover:bg-purple-700">{edu.period}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t.sections.technicalSkills.title}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                      <h3 className="mb-4 font-medium">Frontend</h3>
                      <div className="space-y-4">
                        {[
                          { skill: 'JavaScript/TypeScript', level: 70 },
                          { skill: 'React.js', level: 70 },
                          { skill: 'Next.js', level: 70 },
                          { skill: 'HTML/CSS', level: 90 },
                        ].map((item) => (
                          <div key={item.skill} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{item.skill}</span>
                              <span>{item.level}%</span>
                            </div>
                            <Progress
                              value={item.level}
                              className="h-2 bg-purple-200 dark:bg-purple-950"
                              indicatorClassName="bg-purple-600"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4">
                      <h3 className="mb-4 font-medium">
                        Backend & {t.sections.technicalSkills.database}
                      </h3>
                      <div className="space-y-4">
                        {[
                          { skill: 'Node.js', level: 60 },
                          { skill: 'PostgreSQL', level: 60 },
                          { skill: 'Prisma', level: 50 },
                          { skill: 'REST API', level: 50 },
                        ].map((item) => (
                          <div key={item.skill} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{item.skill}</span>
                              <span>{item.level}%</span>
                            </div>
                            <Progress
                              value={item.level}
                              className="h-2 bg-purple-200 dark:bg-purple-950"
                              indicatorClassName="bg-purple-600"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t.sections.languages.title}</h2>
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="grid gap-4 md:grid-cols-4">
                      {t.sections.languages.items.map((item) => (
                        <div key={item.lang} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{item.lang}</span>
                            <Badge
                              variant="outline"
                              className="border-purple-300 dark:border-purple-700"
                            >
                              {item.level}
                            </Badge>
                          </div>
                          <Progress
                            value={item.value}
                            className="h-2 bg-purple-200 dark:bg-purple-950"
                            indicatorClassName="bg-purple-600"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t.sections.softSkills.title}</h2>
                <Card className="border-purple-200 dark:border-purple-800">
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {t.sections.softSkills.items.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
                        >
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

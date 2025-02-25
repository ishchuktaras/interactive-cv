import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      {/* IT Education */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Vzdělávání v IT</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Absolvent kurzu front end vývoje, IT Step Academy, Praha</h3>
                  <span className="text-sm text-muted-foreground">Listopad 2021 — Březen 2022</span>
                </div>
                <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                  <li>Vytvářet moderní responzivní webové aplikace</li>
                  <li>Pracovat s populárními front-end frameworky</li>
                  <li>Implementovat interaktivní uživatelská rozhraní</li>
                  <li>Spolupracovat v týmu pomocí verzovacích systémů</li>
                  <li>Řešit technické problémy a optimalizovat kód</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Formal Education */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Vzdělání</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
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
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
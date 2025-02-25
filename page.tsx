import CvSidebar from "./cv_sidebar"
import CvGrid from "./cv_grid"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <CvSidebar />
        <CvGrid />
      </div>
    </main>
  )
}


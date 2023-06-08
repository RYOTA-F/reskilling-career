/* Components */
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Profile from '@/components/Profile'
import ScrollTopButton from '@/components/Elements/ScrollTopButton'
/* Styles */
import '/public/globals.css'

export const metadata = {
  title: 'リスキリング・キャリア',
  description: 'リスキリングを通じてキャリアを変える',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="max-w-full overflow-x-hidden">
          <div className="flex justify-between py-[60px] tb:pt-5 px-[5%] tb:block sp:block">
            <div className="min-w-[75%] mr-8 tb:mr-0">{children}</div>
            <aside className="min-w-[25%] tb:w-[80%] tb:mx-auto tb:mt-10">
              <Profile />
            </aside>
          </div>
        </main>
        {/* <Seo {...seoData} /> */}

        {/* <BreadCrumb /> */}

        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  )
}

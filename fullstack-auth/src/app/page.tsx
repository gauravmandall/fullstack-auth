
import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LoginBtn } from "@/components/auth/login-btn"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 h-full flex-col items-center justify-center">
      <div className="space-y-6">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className
        )}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>

        <div>
          <LoginBtn>
            <Button variant={"secondary"} className="w-full">
              Sign In
            </Button>
          </LoginBtn>
        </div>
      </div>
    </main>
  )
}

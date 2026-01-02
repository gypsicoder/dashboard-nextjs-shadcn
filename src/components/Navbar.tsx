import Link from "next/link"
import { Moon, User, Settings, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4'>
        CollapseButton
        <div className="flex items-center gap-4">
            <Link href="/">Dashboard</Link>
            <Moon />
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/1951794" />
                        <AvatarFallback>BC</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className="w-[1.3rem] h-[1.3rem] mr-2"/>Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="w-[1.3rem] h-[1.3rem] mr-2"/>Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut className="w-[1.3rem] h-[1.3rem] mr-2"/>Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>
  )
}

export default Navbar
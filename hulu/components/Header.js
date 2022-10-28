import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { CheckBadgeIcon, CircleStackIcon, HomeIcon, BoltIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">

        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title='HOME' Icon={HomeIcon}/>
            <HeaderItem title='TRENDING' Icon={BoltIcon}/>
            <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
            <HeaderItem title='COLLECTIONS' Icon={CircleStackIcon}/>
            <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
            <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>

        <img className="object-contain pt-5 sm:pt-0" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/220px-Hulu_Logo.svg.png' alt='' width={200} height={200} />


    </header>
  )
}

export default Header
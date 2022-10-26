import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header>

        <div>
            <HeaderItem title='HOME' Icon={HomeIcon}/>
        </div>

        <img className="object-contain" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/220px-Hulu_Logo.svg.png' width={200} height={200} />


    </header>
  )
}

export default Header
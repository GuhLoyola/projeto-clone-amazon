import LowerNav from "./lower-nav"
import MiddleNav from "./middle-nav"
import UpperNav from "./upper-nav"

const Header = () => {
    return (
        <header>
            <div className="grid text-white">
                <UpperNav />
                <MiddleNav />
                <LowerNav />
            </div>
        </header>
    )
}

export default Header
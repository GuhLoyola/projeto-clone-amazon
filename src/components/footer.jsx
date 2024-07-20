import LowerFooter from "./lower-footer"
import MiddleFooter from "./middle.footer"
import UpperFooter from "./upper-footer"

const Footer = () => {
    return (
        <footer className="flex flex-col text-white">
            <UpperFooter />
            <MiddleFooter />
            <LowerFooter />
        </footer>
    )
}

export default Footer
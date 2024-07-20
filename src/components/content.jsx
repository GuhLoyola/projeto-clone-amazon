import AsideMenu from "./aside-menu"
import Categories from "./categories"
import Offers from "./offers"
import Products from "./products"
import Promotions from "./promotion"

const Content = () => {
    return (
        <main>
            <div className="grid grid-cols-6">
                <AsideMenu />
                <div className="col-span-6 md:col-span-5 p-2">
                    <div className="flex flex-col">
                        <Categories />
                        <Promotions />
                        <Offers />
                        <Products />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Content
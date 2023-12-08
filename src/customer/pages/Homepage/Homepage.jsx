//react arrow function component export
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mens_kurta'
import { mens_shirt } from '../../../data/mens_shirt.js'
import { mens_shoes } from '../../../data/mens_shoes.js'
import { women_saree } from '../../../data/women_saree.js'
import { women_dress } from '../../../data/women_dress.js'

const Homepage = () => {
    return (
        <div>
            <MainCarousel />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
            <HomeSectionCarousel data={mens_shoes} sectionName={"Men's Shoes"} />
            <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"} />
            <HomeSectionCarousel data={women_saree} sectionName={"Women's Saree"} />
            <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"} />
        </div>
    )
}

export default Homepage
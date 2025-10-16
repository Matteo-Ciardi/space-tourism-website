import { useEffect } from "react"

import './HomePage.css'
import '../styles/utilities/text-presets.css'

const HomePage = () => {
    useEffect(() => {
        document.body.classList.add("home-page-bg")

        return () => {
            document.body.classList.remove("home-page-bg")
        }
    }, [])

    return (
        <div className="main-content">
            <div className="hero">
                <div className="texts">
                    <span className="text-preset-8">SO, YOU WANT TO TRAVEL TO</span>
                    <span className="big-title">SPACE</span>
                    <p className="home-content">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage
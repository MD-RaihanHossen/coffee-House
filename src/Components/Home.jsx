import { useLoaderData } from "react-router-dom";
import CoffeesDisplay from "./CoffeesDisplay";


const Home = () => {
    
    const coffeesData = useLoaderData()

    return (
        <div>
            <section>
                <CoffeesDisplay coffeesData={coffeesData}></CoffeesDisplay>
            </section>
        </div>
    );
};

export default Home;
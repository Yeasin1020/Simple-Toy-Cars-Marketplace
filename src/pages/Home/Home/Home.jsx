
import { useEffect } from "react";
import HomeSection from "../HomeSection/HomeSection";
import CarouselPart from "./Carousel/CarouselPart";

import Gallery from "./Gallery/Gallery";
import Tabs from "./Tabs/Tabs";
import TopCategory from "./TopCategory/TopCategory";


const Home = () => {
	useEffect(()=> {
		document.title = "ToyCar-Home"
	  },[])
	return (
		<div>

			<HomeSection></HomeSection>
			<CarouselPart></CarouselPart>
			<Gallery></Gallery>
			<Tabs></Tabs>
			<TopCategory></TopCategory>
		</div>
	);
};

export default Home;
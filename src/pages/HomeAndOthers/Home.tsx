// import { Transition } from '@headlessui/react'

import Banner from '../../components/Banner';
import BestSeller from '../../components/BestSeller';
import Brand from '../../components/Brand';
import Event from '../../components/Event';
const Home = () => {
    return (
	<div>
		<Banner />
		<Brand />
		<Event />
		<BestSeller />
	</div>
    );
};

export default Home;
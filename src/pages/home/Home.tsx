import BarChartbox from '../../components/barChartbox/barChartbox';
import LineChartbox from '../../components/lineChartbox/LineChartbox';
import Topbox from '../../components/topbox/Topbox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxProduct, chartBoxUser } from '../../exampleData';
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <Topbox/>
            </div>
            <div className="box box2"><LineChartbox {...chartBoxUser} /></div>
            <div className="box box3"><LineChartbox {...chartBoxProduct} /></div>
            <div className="box box4">Box4</div>
            <div className="box box5"><LineChartbox {...chartBoxProduct} /></div>
            <div className="box box6"><LineChartbox {...chartBoxProduct} /></div>
            <div className="box box7">Box7</div>
            <div className="box box8"><BarChartbox {...barChartBoxVisit} /></div>
            <div className="box box9"><BarChartbox {...barChartBoxRevenue} /></div>
        </div>
    );
};

export default Home;
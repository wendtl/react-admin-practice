import { Link } from "react-router-dom";
import "./chartbox.scss"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


type ChartboxProps = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}

const Chartbox = ( props: ChartboxProps ) => {
    return (
        <div className="chartbox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to="/">View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: 'transparent', border: 'none' }}
                                labelStyle={{ display: 'none' }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <div className="percentage" style={{ color: props.percentage > 0 ? 'limegreen' : 'tomato' }}>{props.percentage}</div>
                    <div className="duration">this month</div>
                </div>
            </div>
        </div >
    );
};

export default Chartbox;

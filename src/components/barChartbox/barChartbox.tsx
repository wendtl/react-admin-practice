import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import "./barchartbox.scss"


type BarChartboxProps = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const BarChartbox = ( props: BarChartboxProps ) => {
    return (
        <div className="barChartbox">
            <h1>{props.title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="99%">
                    <BarChart data={props.chartData}>
                        <Tooltip
                            labelStyle={{ display: 'none' }}
                            contentStyle={{ borderRadius: '5px' }}
                            cursor={{ fill: 'none' }}
                        />
                        <Bar dataKey={props.dataKey} fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartbox;

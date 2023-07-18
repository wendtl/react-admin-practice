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
        <div>
            <h1>{props.title}</h1>
            <div>
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart data={props.chartData}>
                        <Tooltip labelStyle={{ display: 'none' }} contentStyle={{ backgroundColor: '#2a3447', borderRadius: '5px' }} />
                        <Bar dataKey={props.dataKey} fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartbox;

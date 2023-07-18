import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";
import { bigChartboxData } from '../../exampleData'
import "./bigChartbox.scss"

interface BigChartboxProps { }

const BigChartbox: React.FC<BigChartboxProps> = () => {
    return (
        <div className='bigChartbox'>
            <h1 className="title">Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={bigChartboxData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer></div>
        </div>
    )
};

export default BigChartbox;
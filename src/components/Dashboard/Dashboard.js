
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (

        <div className='container mx-auto grid grid-cols-2 d-flex'>
            <div>
                <AreaChart width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }} >
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="purple"></Area>
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="black"></Area>
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="blue" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                </AreaChart>
                <h5 className='text-center'>Chart of: Monthly Sell and Revenue</h5>
            </div>
            <div >
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
                <h5 className='text-center'>Chart of: Sell and InvestMent</h5>
            </div>
        </div>
    );
};

export default Dashboard;
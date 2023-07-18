import { Header, Avatar } from "./dashboard.style";
import Card from "../../../components/card";
import CustomPieChart from "../../../components/charts/piechart";

const Dashboard = () => {
    return ( 
        <div >
           <div className="flex">
                <Header>Overview</Header>
                <div className="flex-1 flex justify-end">
                    <div className="sm:h-8 h-7 w-7 sm:w-10 cursor-pointer mr-3 rounded-md flex justify-center items-center text-white text-2xl" style={{background:'#7F56D9'}}>
                        +
                    </div>
                    <Avatar src="../../../assets/man.jpg" />
                </div>
           </div>

           <div className="mt-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 gap-x-2 sm:gap-x-5 gap-y-5">
                    <Card
                        label="Completed Tasks"
                        taskCount={100}
                        color=""
                    />
                    <Card
                        label="Uncompleted Tasks"
                        taskCount={100}
                        color=""
                    />
                    <Card
                        label="Overdue Tasks"
                        taskCount={100}
                        color=""
                    />
                    <Card
                        label="Total Tasks"
                        taskCount={100}
                        color=""
                    />
                    
                </div>
           </div>

           <div className="grid 2xl:grid-cols-2 grid-cols-1 mt-10 gap-x-7 gap-y-5">
                <div className="rounded-lg" style={{border:'1px solid lightgray', minHeight:'250px'}}>

                </div>
                <div className="rounded-lg px-5 py-3" style={{border:'1px solid lightgray', minHeight:'250px'}}>
                    <div className="w-1/2 h-full">
                        <div className="text-lg"></div>
                        <CustomPieChart values={[30,10]} />
                    </div>
                </div>
           </div>

           <div className="mt-10 rounded-lg" style={{border:'1px solid lightgray', minHeight:'250px'}}>

           </div>
        </div>
     );
}
 
export default Dashboard;
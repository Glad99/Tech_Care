import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import arrowdown from "../assets/ArrowDown.svg";
import arrowup from "../assets/ArrowUp.svg";
import expand from "../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const username = import.meta.env.VITE_APP_USERNAME;
  const password = import.meta.env.VITE_APP_PASSWORD;

  // A base64 encoded string of the username and password
  const auth = btoa(`${username}:${password}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': `Basic ${auth}`
          }
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [auth]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const patient = data[3]; //Jessica Taylor

  // Function to abbreviate month names
  const abbreviateMonth = (month) => {
    const monthAbbr = {
      January: 'Jan',
      February: 'Feb',
      March: 'Mar',
      April: 'Apr',
      May: 'May',
      June: 'Jun',
      July: 'Jul',
      August: 'Aug',
      September: 'Sep',
      October: 'Oct',
      November: 'Nov',
      December: 'Dec',
    };
    return monthAbbr[month];
  };

  // Filtered history to only include the last six months
  const filteredHistory = patient.diagnosis_history.filter(record => {
    const { month, year } = record;
    const relevantMonths = ['October', 'November', 'December', 'January', 'February', 'March'];

    return (year === 2023 && relevantMonths.includes(month) && month !== 'January' && month !== 'February' && month !== 'March')
    || (year === 2024 && relevantMonths.includes(month));
  });

  // Processed data to extract months and blood pressure values
  const labels = filteredHistory.map(
    (record) => `${abbreviateMonth(record.month)}, ${record.year}`
  ).reverse();

  const systolicValues = filteredHistory.map(
    (record) => record.blood_pressure.systolic.value
  ).reverse();

  const diastolicValues = filteredHistory.map(
    (record) => record.blood_pressure.diastolic.value
  ).reverse();

  const chartData = {
    labels,
    datasets: [
      {
        label: '', 
        data: systolicValues,
        borderColor: '#E66FD2',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: '', 
        data: diastolicValues,
        borderColor: '#8C6FE6',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Ensure all labels are shown
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className='w-[726px] h-[298px] bg-[#F4F0FE] opacity-100 rounded-xl p-5 flex gap-10'>
      <div className='w-[417px] h-[187]'>
      <div className='flex justify-between mb-3'>
      <h1 className='text-[20px] font-[700] mb-2'>Blood Pressure</h1>
      <div className='flex items-center'>
      <form>
        <select id="" name="" className='bg-[#F4F0FE]'>
            <option value="volvo" >Last 6 months</option>
        </select>
    </form>
      </div>
      </div>
      <Line
          data={chartData} options={chartOptions}
        className="px-6 pb-5"
      />
      </div>
      <div className=''>
        <div className='*:py-1 pb-2'>
        <div className='flex gap-2 items-center'>
          <div className='w-[14px] h-[14px] bg-[#E66FD2] rounded-full '></div>
          <p>Systolic</p>
        </div>
        <p className='text-[22px] font-bold'>160</p>
        <div className='flex gap-2'>
          <img src={arrowup} alt="" />
          <p>Higher than Average</p>
        </div>
        </div>
        <hr className='w-[14rem]' />
        <div className='*:py-1 pt-2'>
        <div className='flex gap-2 items-center'>
          <div className='w-[14px] h-[14px] bg-[#8C6FE6] rounded-full '></div>
          <p>Diastolic</p>
        </div>
        <p className='text-[22px] font-bold'>78</p>
        <div className='flex gap-2'>
          <img src={arrowdown} alt="" />
          <p>Lower than Average</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;

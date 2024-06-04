import respiratory from '../assets/respiratory rate.svg';
import temperature from '../assets/temperature.svg';
import heart from '../assets/HeartBPM.svg';
import arrowDown from '../assets/ArrowDown.svg';
import Aside from './Aside';
import Profile from './Profile';
import DiagnosticList from './DiagnosticList';
import LineChart from './LineChart';



const Diagnosis = () => {
  return (
    <div className='flex gap-5 items-center justify-center'>
      <Aside/>
      <div>
        <div className='bg-[#ffffff] w-[766px] h-[673px] p-5 rounded-xl flex flex-col justify-between mt-7'>
          <h1 className='text-[24px] font-[800] mb-4'>Diagnosis History</h1>
          <LineChart/>
          <div className='flex justify-between'>
            <div className='bg-[#E0F3FA] opacity-100 w-[228px] h-[242px] rounded-xl p-4'>
              <div className='bg-[#fff] p-1 rounded-full w-[96px] h-[96px]'>
                <img src={respiratory} alt="Respiratory Rate" />
              </div>
              <div>
                <p className='text-[16px] pt-1 '>Respiratory Rate</p>
                <h2 className='text-[30px] font-[800]'>20 bpm</h2>
              </div>
              <div>
                <p>Normal</p> 
              </div>
            </div>
            <div className='bg-[#FFE6E9] opacity-100 w-[228px] h-[242px] rounded-xl p-4'>
              <div className='bg-[#fff] p-1 rounded-full w-[96px] h-[96px]'>
                <img src={temperature} alt="Temperature" />
              </div>
              <div>
                <p className='text-[16px] pt-1 '>Temperature</p>
                <h2 className='text-[30px] font-[800]'>98.6°F</h2>
              </div>
              <div>
                <p>Normal</p> 
              </div>
            </div>
            <div className='bg-[#FFE6F1] opacity-100 w-[228px] h-[242px] rounded-xl p-4'>
              <div className='bg-[#fff] p-1 rounded-full w-[96px] h-[96px]'>
                <img src={heart} alt="Heart Rate" />
              </div>
              <div>
                <p className='text-[16px] pt-1 '>Heart Rate</p>
                <h2 className='text-[30px] font-[800]'>78 bpm</h2>
              </div>
              <div>
                <p className='flex items-center gap-2 '><span><img src={arrowDown} alt="Arrow Down" /></span>Lower than Average</p> 
              </div>
            </div>
          </div>
        </div>
        <DiagnosticList/>
      </div>
      <Profile/>
    </div>
  );
}

export default Diagnosis;

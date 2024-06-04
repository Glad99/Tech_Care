import { useEffect, useState } from 'react';
import axios from 'axios';
import search from '../assets/search_FILL0_wght300_GRAD0_opsz24.svg';
import moreIcon from '../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';

const Aside = () => {
  const [data, setData] = useState([]);
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

  return (
    <div className='w-[310px] h-[1054px] bg-[#fff] rounded-xl  mt-7'>
      <div>
      <div className='mb-4 flex justify-between px-4 pt-7 '>
        <h1 className='text-[24px] font-[800]'>Patients</h1>
        <img src={search} alt="search icon" />
      </div>
      <div className='flex'>
      <div>
        {error && <div>Error: {error.message}</div>}
        {data.slice(0, 13).map((item, i) => <div key={i} className='flex *:py-3 cursor-pointer hover:bg-[#D8FCF7]'>
          <div className='flex justify-between items-center pl-4 w-[265px]'>
          <div className='flex gap-3 items-center'>
          <img src={item.profile_picture} alt="" className='size-[48px] ' />
          <p><strong>{item.name}</strong> <br/><span className='text-[#707070]'>{item.gender}, {item.age}</span></p>
          </div>
          <img src={moreIcon} alt="" className=''/>
          </div>
          </div>)}
      </div>
      <div className='w-[6px] mt-4 ml-4 bg-[#E3E4E6] rounded-full '>
        <div className='bg-[#072635] h-[100px] w-[6px] rounded-full'></div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Aside;

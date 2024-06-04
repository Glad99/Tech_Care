import download from '../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg'

const LabResults = () => {
  return (
    <div className='h-[296px] w-[310px] bg-[#fff] rounded-xl p-4 mt-7 flex gap-2'>
      <div className='w-full'>
      <h1 className='text-[24px] font-[800] mb-4'>Lab Results</h1>
      <div className='pl-2 *:py-3 *:px-3'>
        <div className='flex justify-between hover:bg-[#e7dfdf14] cursor-pointer'>
          <p>Blood Tests</p>
          <img src={download} alt="" />
        </div>
        <div className='flex justify-between bg-[#F6F7F8] hover:bg-[#e7dfdf14] cursor-pointer'>
          <p>CT Scans</p>
          <img src={download} alt="" />
        </div>
        <div className='flex justify-between hover:bg-[#e7dfdf14] cursor-pointer'>
          <p>Radiology Reports</p>
          <img src={download} alt="" />
        </div>
        <div className='flex justify-between hover:bg-[#e7dfdf14] cursor-pointer'>
          <p>X-Rays</p>
          <img src={download} alt="" />
        </div>
        <div className='flex justify-between hover:bg-[#e7dfdf14] cursor-pointer'>
          <p>Urine Test</p>
          <img src={download} alt="" />
        </div>
      </div>
      </div>
      <div className='w-[6px] bg-[#E3E4E6] rounded-full mt-16'>
        <div className='bg-[#072635] h-1/5 w-[6px] rounded-full'></div>
      </div>
    </div>
  )
}

export default LabResults
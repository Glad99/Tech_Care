

const DiagnosticList = () => {
  return (
    <div className='h-[349px] w-[766px] bg-white rounded-xl p-4 mt-7'>
      <h1 className='text-2xl font-extrabold mb-10'>Diagnostic List</h1>
      <div className='flex gap-1'>
      <table className='w-full table-auto border-collapse'>
        <thead>
          <tr className='bg-[#F6F7F8]'>
            <th className=' p-3 text-left rounded-l-full '>Problem/Diagnosis</th>
            <th className=' p-3 text-left'>Description</th>
            <th className='p-3 text-left rounded-r-full '>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='*:px-3 *:py-4 *:pt-7 hover:bg-[#e7dfdf14] cursor-pointer'>
            <td className='border-b '>Hypertension</td>
            <td className='border-b p-3'>Chronic high blood pressure</td>
            <td className='border-b p-3'>Under Observation</td>
          </tr>
          <tr className='*:px-3 *:py-4 hover:bg-[#e7dfdf14] cursor-pointer'>
            <td className='border-t border-b p-3'>Type 2 Diabetes</td>
            <td className='border-t border-b p-3'>Insulin resistance and elevated blood sugar</td>
            <td className='border-t border-b p-3'>Cured</td>
          </tr>
          <tr className='*:px-3 *:py-4 hover:bg-[#e7dfdf14] cursor-pointer'>
            <td className='border-t border-b p-3'>Asthma</td>
            <td className='border-t border-b p-3'>Recurrent episodes of bronchial constriction</td>
            <td className='border-t border-b p-3'>Inactive</td>
          </tr>
        </tbody>
      </table>
      <div className='w-[6px] bg-[#E3E4E6] rounded-full mt-16'>
        <div className='bg-[#072635] h-2/5 w-[6px] rounded-full'></div>
      </div>
      </div>
    </div>
  );
}

export default DiagnosticList;

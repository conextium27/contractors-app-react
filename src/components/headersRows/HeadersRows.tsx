
export default  function HeadersRows() {
    return (
        <div className="flex  items-center p-[24px]">
            <div className="flex gap-[6px] w-[293px] flex-1 items-center">
              <input type="checkbox" />
              <p className="text-[#868683] text-xs">FULLNAME</p>
              <figure>
                <img src="/images/arrow.svg" className='arrow' alt='arrow' />
              </figure>
            </div>
            <div className="flex gap-[6px] w-[298px] items-center">
              <p className="text-[#868683] text-xs"> SPECIALITIES </p>
              <figure>
                <img src="/images/arrow.svg" className='arrow' alt='arrow' />
              </figure>
            </div>
            <div className="flex  gap-[6px] w-[120px] items-center">
              <p className="text-[#868683] text-xs">  DAY RATE </p>

              <figure>
                <img src="/images/arrow.svg" className='arrow' alt='arrow' />
              </figure>
            </div>
            <div className="flex gap-[6px] w-[120px] items-center">
              <p className="text-[#868683] text-xs">AVAILABITY</p>

              <figure>
                <img src="/images/arrow.svg" className='arrow' alt='arrow' />
              </figure>
            </div>
        </div>

    )

}
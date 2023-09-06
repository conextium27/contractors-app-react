import SearchBar from "../components/searchBar/SearchBar"
import Modal from "../components/modal/Modal"

export default function Home() {
  let text = 'Contractors'
    let subtitle = 'Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non et vel nec sit proin.'
    
  return (
    <div className="flex items-center justify-center flex-1 w-full max-w-none bg-[#F2F1FF] relative ">
            <div className="bg-[#FFF] absolute top-0 left-0 w-full h-full z-0"></div>
            <div className="bg-[#ffffff] z-10">
                <h3 className='text-[#1B1B18] text-[40px] px-[24px]'>{text}</h3>
                <p className='text-color_gray text-sm mt-2 px-[24px]' >{subtitle}</p>
                <div className="rounded-[5px] mt-[40px] bg-[#fff] dark:shadow-boxshadow">
                    <SearchBar></SearchBar>
                    <Modal/>
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
                    <ul>
                        {/* {datosResult.map((data: any, i:number) => {
                            const { fullname, specialities, dayrate, availability } = data;
                            return (
                                <RowList 
                                    key={i}
                                    unique={fullname}
                                    fullname={fullname}
                                    specialities={specialities}
                                    dayrate={dayrate}
                                    availability={availability ? 'Yes' : 'No'}
                                ></RowList>)
  
                        })} */}
  
                    </ul>
                </div>
  
            </div>
        </div>
  )
}

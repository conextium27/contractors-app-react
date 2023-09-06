import SearchBar from "../components/searchBar/SearchBar"
import Modal from "../components/modal/Modal"
import Container from "../components/container/Container"
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
          <Modal />
          <Container></Container>
        </div>
      </div>
    </div>
  )
}

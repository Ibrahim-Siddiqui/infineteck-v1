
const ValueCard = ({ item }: any) => {
    return (
      <div
        key={item.id}
        // border-2 border-primary-color rounded-lg
        className="h-[90%] flex flex-col justify-center group border border-primary-color rounded-lg p-[5%] my-[5%] mx-[2%] hover:bg-accent-color hover:text-white hover:transition-all duration-1000 ease-in-out"
      >
        <div className="flex flex-col gap-5 justify-between items-start">
          {/* <Image src={item.icon} width={100} height={100} alt="icon" /> */}
          <div className="text-primary-color group-hover:text-white">
            {item.image}
          </div>
          <h3 className="text-2xl font-bold tracking-tighter">{item.title}</h3>
        </div>
        <hr className="border-1 border-primary-color group-hover:border-white" />
  
        {/* <h3 className="mt-[5%] mb-[2%] text-2xl font-semibold">
          {item.title}
        </h3> */}
        <p className="row-span-3 my-[5%] text-md lg:text-lg tracking-tight">{item.content}</p>
  
        {/* <a className="flex gap-2 my-[2%] text-primary-color group-hover:text-inherit font-semibold">
          Read More
          <ChevronRight />
        </a> */}
      </div>
    )
}  
export default ValueCard;
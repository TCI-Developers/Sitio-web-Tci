
type Params ={
    location : string,
    address : string,
    phone : string,
    img : string
}
const OurOfficesCard = ({location,address,phone,img}:Params) => {
  return (
    <div className="backdrop-blur-[80px] rounded-3xl mt-8 tracking-normal text-sm md:mt-2 font-wix">
        <div className="p-8 rounded-3xl flex md:p-4">
            <div className="flex flex-col">
                <p className="font-bold text-primary">{location}</p>
                <p className="leading-none py-2">{address}</p>
                <p>{phone}</p>
            </div>
            <div className="w-32 h-20 p-2 bg-white rounded-full md:min-h-28 md:min-w-28">
              <div className="bg-white rounded-full overflow-hidden p-1" style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}>
                  <img src={img} className="w-full" alt="Ubicacion tci uruapan" />
              </div>
            </div>
        </div>
      </div>
  )
}

export default OurOfficesCard

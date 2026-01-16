import './App.css'
import UserData from "./UserData.json"
import UserCard from "./components/UserCard";


function App() {

  return (
    <>
      <div className='py-8 bg-[#050505]'>
        <div className='container mx-auto text-center max-sm:px-3'>
          <h1 className='text-3xl font-bold text-[#ffffff] uppercase pb-5 sticky top-0 max-sm:py-3 bg-[#050505] z-20'>Our Talented <span className='text-[#3bebf1]'>Team</span> </h1>
          <div className='w-[full] h-[100] rounded-xl grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-4'>

            {/* Rendering Card Data using seprate json file */}

            {
              UserData.map(function (userData) {
                return (
                  <UserCard
                    key={userData.id}
                    title={userData.name}
                    userImg={userData.userImg}
                    designation={userData.designation}
                    countLink={userData.countLink}
                    commentLink={userData.commentLink}
                    shareLink={userData.shareLink}
                  />
                )
              })
            }

            {/* Rendering Card Data by sending/receiving data using props */}

            {/* <UserCard title="Harjit Kumar" userImg="./src/assets/images/user-1.jpg" designation="Frontend Developer" countLink="20.3k" commentLink="5.1k" shareLink="15.2k"/>
        <UserCard title="Gourav Kalsi" userImg="./src/assets/images/user-2.jpg" designation="Sr. Graphic Designer" countLink="25.3k" commentLink="8.2k" shareLink="10.1k"/>
        <UserCard title="Sahil Kalsi" userImg="./src/assets/images/user-3.jpg" designation="Pharmacist" countLink="31.5k" commentLink="3.6k" shareLink="18.6k"/>
        <UserCard title="Chandan Jassi" userImg="./src/assets/images/user-4.jpg" designation="Marketing Specialist" countLink="35.6k" commentLink="2.3k" shareLink="9.2k"/>
        <UserCard title="Rajeshwar Summan" userImg="./src/assets/images/user-5.jpg" designation="Customer Support Executive" countLink="22.1k" commentLink="4.6k" shareLink="11.5k"/>
        <UserCard title="Anil Summan" userImg="./src/assets/images/user-6.jpg" designation="Bank Sales Executive" countLink="24.3k" commentLink="2.6k" shareLink="16.2k"/>
        <UserCard title="Manjinder Singh" userImg="./src/assets/images/user-7.jpg" designation="Import/Export Manager" countLink="34.9k" commentLink="6.5k" shareLink="20.8k"/>
        <UserCard title="Parminder Guru" userImg="./src/assets/images/user-8.jpg" designation="Software Developer" countLink="18.7k" commentLink="9.6k" shareLink="17.4k"/> */}
          </div>
        </div>
      </div>
    </>
  )



}

export default App

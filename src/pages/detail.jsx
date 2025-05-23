import RsImage from "../assets/rs.jpg"; 
import Navs from "../layout/Navs";

function Detail() {
  const deskripsi = `Rumah Sakit Umum ini merupakan salah satu rumah sakit rujukan terbaik di wilayah Sumatera Barat.
  Dilengkapi dengan fasilitas modern, layanan gawat darurat 24 jam, dan tenaga medis profesional. Kami berkomitmen
  memberikan pelayanan kesehatan terbaik kepada masyarakat.`;
 const nama = "RS JAMIL"
  return (
    <>
     <div className="mx-auto max-w-[100rem] bg-blue-200/20 ">
        <Navs />
      </div>
      <div className="mx-auto max-w-[100rem] px-25 py-10">
        <p className="font-bold text-3xl mb-10 text-black">{nama}</p>
      <div className="mb-10">
        <img
          src={RsImage}
          alt="Gambar Rumah Sakit"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg boder-2"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-3xl font-bold  text-black mb-2  tracking-wide">
          Tentang Rumah Sakit
        </p>
        <h4 className="text-lg leading-relaxed text-gray-800">
          {deskripsi}
        </h4>
      </div>
    </div>
    </>
    
  );
}

export default Detail;

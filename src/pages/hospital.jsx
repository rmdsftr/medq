import Card from "../layout/Card";
import Navs from "../layout/Navs";
import Rs from "../assets/rs.jpg";

const hospitalData = [
  {
    judul: "RSUP M Jamil",
    label: "Lihat Detail",
    gambar: Rs,
  },
  {
    judul: "RSUD Dr. Achmad",
    label: "Lihat Detail",
    gambar: Rs,
  },
  {
    judul: "RS Ibnu Sina",
    label: "Lihat Detail",
    gambar: Rs,
  },
  {
    judul: "RS Hermina",
    label: "Lihat Detail",
    gambar: Rs,
  },
  {
    judul: "RS Siti Rahmah",
    label: "Lihat Detail",
    gambar: Rs,
  },
  {
    judul: "RS BMC Padang",
    label: "Lihat Detail",
    gambar: Rs,
  },
];

function Hospital() {
  return (
    <>
      <div className="mx-auto max-w-[100rem] px-6">
        <Navs />
      </div>

      <div className=" mx-auto max-w-[100rem] pr-110">
        <div className="flex justify-center">
     
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {hospitalData.map((rs, index) => (
              <Card
                key={index}
                judul={rs.judul}
                label={rs.label}
                gambar={rs.gambar}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



export default Hospital;

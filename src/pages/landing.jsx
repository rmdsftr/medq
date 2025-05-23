import Navs from "../layout/Navs";
import Dokter from "../assets/dokter.png";
import Join from "../assets/join.png";
import Button from "../layout/Button";

function Landing() {
  return (
    <>
      <div className="mx-auto max-w-[100rem] bg-blue-200/20 ">
        <Navs />
      </div>

      <section className=" mx-auto max-w-[100rem] bg-blue-200/20 ">
        <div className="columns-2 max-w[100rem] pt-15 pb-20">
          <div className=" p-20  justify-center text-left align-center">
            <p className="font-bold text-8xl bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Antri Ga Pake Lama Sehat Lebih Cepat
            </p>

            <p className="mt-15 text-xl text-blue-500 mb-7">
              Cek estimasi antrian secara real-time, daftar konsultasi dari
              rumah, dan dapatkan rekomendasi tempat menarik di sekitar rumah
              sakit—semua dalam satu aplikasi.{" "}
              <span className="font-bold text-blue-400">
                Lebih praktis, lebih cepat, dan lebih sehat.
              </span>{" "}
            </p>
            <Button label={"Join"} variant="biru" />
          </div>
          <div className="">
            <img src={Dokter} alt="" className="ml-15" />
          </div>
        </div>
      </section>

      <section className="justify-center text-center bg-blue-200/20">
        <h1 className="font-bold pt-5 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent h-[90px]">Fitur Unggulan</h1>
        <h2 className="text-lg mt-3 ">
          Solusi lengkap untuk pengalaman rumah sakit yang lebih nyaman
        </h2>
      </section>

      <section className="mx-auto max-w-[100rem] py-12 bg-blue-200/20 ">
        <div className="flex flex-row items-center justify-between gap-10">
          <div className="w-1/2">
            <img src={Join} alt="Join" className="w-full h-auto" />
          </div>

          <div className="w-1/2 flex flex-col justify-center text-left">
            <p className="text-6xl font-bold text-blueMed">
              Sehat Gak Perlu Ribet
            </p>
            <p className="text-6xl font-bold text-blueMed mt-4">
              Coba{" "}
              <span className="bg-blue-500 text-white pl-1 pr-1">MedQ</span>{" "}
              Sekarang!
            </p>
            <div className="mt-8">
              <Button label={"Daftar Sekarang"} variant="biru" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;

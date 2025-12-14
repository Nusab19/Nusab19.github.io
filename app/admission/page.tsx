export const metadata = {
  title: "Admission Data",
};

const Admission = () => {
  return (
    <div className="item-center mx-4 my-5 flex flex-col justify-center gap-5">
      <h3 className="text-center md:text-2xl text-xl font-bold">
        Click the button below to download the zip file
      </h3>
      <h4 className="text-center md:text-lg font-semibold text-black/70">
        It is password-protected tho
      </h4>
      <a href="/assets/Admission.zip" className="w-fit mx-auto mt-20 cursor-pointer rounded-2xl bg-blue-500 p-3 font-mono font-bold text-white hover:bg-blue-600">
        Click Here
      </a>
    </div>
  );
};

export default Admission;

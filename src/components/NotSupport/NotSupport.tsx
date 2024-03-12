export default function NotSupport() {
  return (
    <div className=" mt-20 h-full w-full">
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6023/6023986.png"
          alt="mobile"
        />
      </div>
      <div className="mt-20">
        <h1 className="animate-pulse bg-red-300 text-center text-xl font-semibold">
          Sorry, this site is not supported on mobile
        </h1>
        <p className="text-center text-2xl font-normal">
          Please visit on a desktop
        </p>
      </div>
    </div>
  );
}

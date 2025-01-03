const Gallery = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute -inset-10 bg-black opacity-10  bg-[url('/remini1.jpg')] bg-cover" />
      <div className="grid grid-cols-12 gap-2 mx-14 z-20">
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src={`/remini${i + 2}.jpg`}
            className="col-span-4 size-36 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

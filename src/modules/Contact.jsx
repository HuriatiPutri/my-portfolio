export default function Contact() {
  return (
    <section id="contact" className="bg-white md:p-20 p-5 flex flex-col h-screen gap-3">
      <h2 className="text-3xl font-medium text-[#173b6c]">Contact</h2>
      <span
        style={{
          background: "#149ddd",
          width: "100px",
          height: "5px",
          borderRadius: "5px",
        }}
      />
      <span>
      Do you want to know more about me? Or maybe you prefer to ask a personalized question? or better yet, contact my services and skills; If so, don't hesitate any longer! Fill out the form and send a message.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        <div className="span-col-1 shadow-md p-6 flex flex-col gap-3">
            <div className="flex gap-2">
                {/* <IconMapPinFilled className="w-6 h-6 text-[#149ddd]" /> */}
                <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xl font-medium">Location</label>
                <span>Jakarta Selatan, Indonesia</span>
                </div>
            </div>
            <div className="flex gap-2">
                {/* <IconMapPinFilled className="w-6 h-6 text-[#149ddd]" /> */}
                <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xl font-medium">Email</label>
                <span>huriatiputri@gmail.com</span>
                </div>
            </div>
            <div className="flex gap-2">
                {/* <IconMapPinFilled className="w-6 h-6 text-[#149ddd]" /> */}
                <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xl font-medium">Call</label>
                <span>Call me for more information.</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

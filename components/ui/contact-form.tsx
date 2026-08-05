

export default function ContactForm() {
  return (
    <div className="bg-secondary w-full rounded-2xl">
      <form id="contact-form" action="contact-form" className="p-4 flex flex-col font-semibold">
      
           <label htmlFor="first-name" className="form-label">
          First Name
        </label>
        <input
          id="first-name"
          name="first-name"
          type="text"
          placeholder="Enter Your First Name"
          className="w-full bg-white rounded-full px-4 py-2  h-14 text-lg outline-none "
        />
       
       

        <label htmlFor="last-name" className="form-label">
          Last Name (Optional)
        </label>
        <input
          id="last-name"
          name="last-name"
          type="text"
          placeholder="Enter Your Last Name"
        className="w-full bg-white rounded-full p-2 h-14 text-lg outline-none"
        />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full bg-white rounded-full p-2 h-14 text-lg outline-none"
        />

        <label htmlFor="phone" className="form-label">
          Phone Number (Optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 514 461 4678"
           className="w-full bg-white rounded-full p-2 h-14 text-lg outline-none"
        />

        <label htmlFor="message" className="form-label">
          Description
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What do you need?"
        className="w-full bg-white rounded-2xl p-2 min-h-32 text-lg outline-none"
        ></textarea>
      </form>
    </div>
  );
}
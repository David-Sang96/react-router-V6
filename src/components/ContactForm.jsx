import { Form, redirect, useActionData } from "react-router-dom";

const ContactForm = () => {
  const data = useActionData();
  return (
    <section className="mt-8 w-[300px] ">
      <Form method="post" action="/contact-us/contact-form">
        <div className="space-y-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            className="w-full outline-none p-1 rounded-md text-black"
          />
        </div>
        <div className="space-y-2 mt-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password..."
            name="password"
            className="w-full outline-none p-1 text-black rounded-md"
          />
        </div>
        {data?.error && <p>{data.error}</p>}
        <button
          className="bg-slate-950 py-2 px-4 mt-5 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </section>
  );
};

export default ContactForm;

export const FormAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };

  if (submission.password.length < 5) {
    return { error: "Message  must be over  5 chars long" };
  }

  return redirect("/");
};

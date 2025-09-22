
const Contact = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Contact Me</h2>
            <form className="mt-2">
                <div>
                    <label className="block">Name:</label>
                    <input type="text" className="border p-1 w-full" />
                </div>
                <div className="mt-2">
                    <label className="block">Email:</label>
                    <input type="email" className="border p-1 w-full" />
                </div>
                <div className="mt-2">
                    <label className="block">Message:</label>
                    <textarea className="border p-1 w-full" rows={4} />
                </div>
                <button type="submit" className="mt-2 bg-blue-500 text-white p-2">Send</button>
            </form>
        </div>
    );
};

export default Contact;
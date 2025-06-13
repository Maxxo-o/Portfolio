import { useState } from "react";
import { RevealOnScrolls } from "../RevealOnScrolls";
import emailjs from 'emailjs-com';


export const Contact = () => {

    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, event.target, import.meta.env.VITE_PUBLIC_KEY).then((response) => {
            alert("Message envoyé correctement !");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }).catch((error) => {
            console.error("Error sending message:", error);
            alert("Echec lors de l'envoi du message. Veuillez réessayer plus tard.");
        });
    }

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScrolls>
                <div className="px-4 w-full md:w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Contactez-moi
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name"
                                name="name" 
                                value={FormData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Votre nom..."
                                onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                value={FormData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message" 
                                value={FormData.message}
                                rows="5"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Votre message..."
                                onChange={(e) => setFormData({ ...FormData, message: e.target.value })}
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white rounded px-6 py-3 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            > Envoyer le message </button>
                    </form>
                </div>
            </RevealOnScrolls>
        </section>
    )

}

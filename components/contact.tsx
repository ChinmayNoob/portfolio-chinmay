"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Email sent successfully!', {
                    description: 'I will get back to you soon.',
                    duration: 4000,
                });
                setEmail('');
                setMessage('');
            } else {
                toast.error('Failed to send email', {
                    description: result.error || 'Please try again later.',
                    duration: 4000,
                });
            }
        } catch (error) {
            toast.error('An error occurred', {
                description: 'Please check your connection and try again.',
                duration: 4000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-[calc(80vh)]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                viewport={{ margin: "-100px", once: true }}
                className="text-4xl md:text-6xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 text-center to-blue-500 mt-4"
            >
                Contact Me
            </motion.div>
            <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md">
                <h2 className="text-sm font-bold mb-6 text-center text-gray-300">
                    Send me a message and I&apos;ll get back to you soon
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="w-full px-4 py-2 border rounded-md bg-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                        rows={4}
                        className="w-full h-48 px-4 py-2 border rounded-md bg-black-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-500 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
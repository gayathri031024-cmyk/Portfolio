import React, { useState } from "react";
import { motion } from "motion/react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up — this simply confirms receipt in the UI.
    // Swap in your form endpoint (e.g. Formspree, EmailJS) here.
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactItems = [
    { icon: FiMail, label: "Email", value: PERSONAL_INFO.email, href: PERSONAL_INFO.social.email },
    { icon: FiPhone, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}` },
    { icon: FiMapPin, label: "Location", value: PERSONAL_INFO.location, href: null },
    { icon: FiLinkedin, label: "LinkedIn", value: "Connect with me", href: PERSONAL_INFO.social.linkedin },
    { icon: FiGithub, label: "GitHub", value: "View my repositories", href: PERSONAL_INFO.social.github },
  ];

  return (
    <section id="contact" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading command="./contact.sh" title="Get In Touch" />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-text-secondary leading-relaxed mb-2">
              Have a project, an opportunity, or just want to talk about AI and full-stack builds?
              My inbox is open.
            </p>
            {contactItems.map((item) => {
              const content = (
                <div className="glass glow-border rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-signal flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{item.label}</p>
                    <p className="text-sm font-medium text-text-primary">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" data-cursor-hover className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-border-soft text-text-primary placeholder:text-text-muted outline-none focus:border-signal-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-border-soft text-text-primary placeholder:text-text-muted outline-none focus:border-signal-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-border-soft text-text-primary placeholder:text-text-muted outline-none focus:border-signal-violet transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-hover
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-signal text-white font-medium shadow-lg shadow-signal-violet/30"
            >
              {status === "sent" ? (
                <>
                  <FiCheck /> Message Sent
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

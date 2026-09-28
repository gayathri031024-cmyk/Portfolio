import React, { useState } from "react";
import { motion } from "motion/react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: this opens the visitor's own email app with the message pre-filled.
  // Nothing is sent until they press Send there, so we never claim delivery.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    { icon: FiMail, label: "Email", value: PERSONAL_INFO.email, href: PERSONAL_INFO.social.email },
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
              Reach me on LinkedIn, GitHub or email.
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
            <p className="text-xs text-text-muted">This opens your email app with the message pre-filled; nothing is sent until you press Send there.</p>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-hover
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-signal text-white font-medium shadow-lg shadow-signal-violet/30"
            >
              <FiSend /> Compose Email
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

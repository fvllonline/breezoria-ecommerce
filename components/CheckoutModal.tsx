'use client';

import { useCart } from '@/context/CartContext';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export default function CheckoutModal({ isOpen, onClose, total }: CheckoutModalProps) {
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("_Kf9bTbQ0jvDucffm");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cartDetails = items.map(item => `${item.name} (x${item.quantity}) - ${item.price * item.quantity} MAD`).join('\n');
    
    const templateParams = {
      customer_name: formData.fullName,
      customer_email: formData.email,
      email: formData.email, // Alias au cas où le template utilise {{email}}
      customer_phone: formData.phone,
      customer_address: `${formData.address}, ${formData.city}`,
      order_details: cartDetails,
      total_price: `${total.toFixed(2)} MAD`,
    };

    try {
      console.log('Début de la soumission de commande...');
      console.log('Paramètres envoyés:', templateParams);
      
      // 1. Notification Propriétaire (Formspree)
      console.log('Envoi à Formspree...');
      const formspreeResponse = await fetch('https://formspree.io/f/xkoewyaw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...templateParams,
          _subject: `Nouvelle commande de ${formData.fullName}`,
        }),
      });

      console.log('Réponse Formspree:', formspreeResponse.status);
      if (!formspreeResponse.ok) {
        const errorData = await formspreeResponse.json();
        console.error('Erreur Formspree détaillée:', errorData);
        throw new Error(`Erreur Formspree (${formspreeResponse.status})`);
      }

      // 2. Confirmation Client (EmailJS)
      console.log('Envoi à EmailJS...');
      const emailjsResponse = await emailjs.send(
        'service_qzxs9vg',
        'template_uprv6l4',
        templateParams,
        "_Kf9bTbQ0jvDucffm" // Ajout explicite de la clé publique ici aussi
      );

      console.log('Réponse EmailJS:', emailjsResponse.status, emailjsResponse.text);
      if (emailjsResponse.status !== 200) {
        throw new Error(`Erreur EmailJS: ${emailjsResponse.text}`);
      }

      console.log('Commande réussie !');
      setSubmitted(true);
      setTimeout(() => {
        clearCart();
        setFormData({ fullName: '', email: '', phone: '', address: '', city: '' });
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (error: any) {
      console.error('Erreur capturée:', error);
      const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
      alert(`Erreur: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="checkout-overlay"
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            key="checkout-modal"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-xl shadow-xl max-w-md w-full mx-4 z-50 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6">
              {!submitted ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Finaliser la Commande</h2>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      disabled={isSubmitting}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email (pour la confirmation)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="exemple@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Adresse de livraison
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="N°, Rue, Quartier"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: Casablanca"
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-foreground font-medium">Sous-total</span>
                        <span className="text-foreground font-bold">{total.toFixed(2)} MAD</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-border">
                        <span className="text-foreground font-semibold">Total</span>
                        <span className="text-primary font-bold text-lg">{total.toFixed(2)} MAD</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity mt-6 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Traitement...
                        </>
                      ) : (
                        'Confirmer la Commande'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground text-center mb-2">
                    Commande Confirmée !
                  </h3>
                  <p className="text-center text-muted-foreground mb-2">
                    Merci pour votre achat ! Un email de confirmation a été envoyé à <strong>{formData.email}</strong>.
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    Nous préparons votre colis avec soin.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

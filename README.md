# ✨ Breezoria - Premium Suncare Brand

Breezoria est une application e-commerce moderne et élégante dédiée à la vente de produits de protection solaire premium. Conçue avec une esthétique luxueuse et épurée, elle offre une expérience utilisateur fluide, de la découverte du produit jusqu'à la confirmation de commande.

## 🌟 Vision du Produit
Breezoria se positionne comme une marque de soin de la peau haut de gamme. Son produit phare, l'**Invisible Matte Finish Sunscreen (SPF 50 PA+++)**, combine une protection solaire maximale avec les bénéfices d'un primer cosmétique :
- **Fini Mat :** Contrôle l'excès de sébum pour une peau veloutée.
- **Effet Flouteur :** Estompe les pores et les imperfections.
- **Zéro Trace Blanche :** Formule chimique invisible adaptée à toutes les carnations.
- **Compatible Maquillage :** Base parfaite qui ne bouge pas.

---

## 🚀 Technologies Utilisées

### Frontend
- **Framework :** [Next.js 15+](https://nextjs.org/) (App Router)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **Styles :** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Composants UI :** [shadcn/ui](https://ui.shadcn.com/) (basé sur Radix UI)
- **Animations :** [Framer Motion](https://www.framer.com/motion/)
- **Icônes :** [Lucide React](https://lucide.dev/)

### Gestion d'État & Services
- **État Global :** React Context API (`CartContext`) pour la gestion du panier.
- **Notifications Client :** [EmailJS](https://www.emailjs.com/) pour les emails de confirmation automatiques.
- **Notifications Propriétaire :** [Formspree](https://formspree.io/) pour la réception des commandes par le vendeur.

### Déploiement
- **Hébergement :** [Vercel](https://vercel.com/)
- **Analytics :** Vercel Analytics intégré.

---

## 🛠️ Fonctionnalités Clés

### 🛒 Système de Panier Complet
- Ajout de produits avec gestion des quantités.
- Drawer (tiroir) latéral animé pour visualiser le panier en temps réel.
- Calcul automatique du sous-total et du total en **MAD**.

### 📱 Expérience Produit Immersive
- Galerie d'images interactive avec zoom et sélection de miniatures.
- Page produit détaillée avec sections informatives (Détails, Application, Ingrédients).
- Design 100% Responsive (Mobile, Tablette, Desktop).

### 📧 Workflow de Commande Automatisé
1. **Formulaire de Checkout :** Capture du nom, email, téléphone et adresse.
2. **Validation :** Intégration de `Loader` pour le feedback utilisateur pendant le traitement.
3. **Confirmation Client :** Email stylisé envoyé instantanément via EmailJS.
4. **Alerte Vendeur :** Notification détaillée envoyée via Formspree contenant le récapitulatif complet des articles.

---

## 📁 Structure du Projet

```text
├── app/               # Routes et pages (Next.js App Router)
│   ├── product/       # Page produit détaillée
│   └── layout.tsx     # Configuration globale (Fonts, Providers, Metadata)
├── components/        # Composants React réutilisables
│   ├── sections/      # Sections de la Landing Page (Hero, About, etc.)
│   ├── ui/            # Composants de base shadcn/ui
│   ├── CartDrawer.tsx # Système de panier latéral
│   └── Navbar.tsx     # Navigation avec compteur de panier
├── context/           # Contextes React (CartContext)
├── public/            # Assets statiques (Images, Favicon)
└── package.json       # Dépendances et scripts du projet
```

---

## 🔧 Installation et Développement

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/fvllonline/breezoria-ecommerce.git
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Variables d'environnement :**
   Le projet utilise EmailJS et Formspree. Assurez-vous de configurer les IDs dans `components/CheckoutModal.tsx` ou via des variables d'environnement.

---

## 👤 Auteur
Projet développé pour **Breezoria** - *L'excellence de la protection solaire.*

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const price = 399;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      id: 'breezoria-sunscreen',
      name: 'Breezoria Invisible Matte Finish Sunscreen',
      price,
      quantity,
      image: '/images/product-1.jpeg',
    });

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="sticky top-24 h-fit"
    >
      <div className="space-y-6">
        <div>
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Premium Sun Care</p>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-4xl font-extrabold text-foreground">{price.toFixed(2)} MAD</span>
            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">50ml • SPF 50 PA+++</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-primary/10 border border-secondary/30 p-4 rounded-lg">
          <p className="text-sm text-foreground">
            ✓ Invisible formula with no white cast<br/>
            ✓ Acts like a primer, blurs imperfections<br/>
            ✓ Matte finish, makeup-friendly<br/>
            ✓ Non-comedogenic & gentle
          </p>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-foreground">
            Quantity
          </label>
          <div className="flex items-center gap-3 border border-border rounded-lg w-fit p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
            >
              −
            </button>
            <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdding
              ? 'bg-primary/70 text-primary-foreground'
              : 'bg-primary text-primary-foreground hover:opacity-90'
          }`}
        >
          {isAdding ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-xl"
            >
              ✓
            </motion.div>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </>
          )}
        </motion.button>

        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-2xl mb-2">⭐</p>
            <p className="font-semibold text-foreground">100% Safe</p>
            <p className="text-xs text-muted-foreground">Dermatologist tested</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-2xl mb-2">🚚</p>
            <p className="font-semibold text-foreground">Fast Shipping</p>
            <p className="text-xs text-muted-foreground">Ships within 48h</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border text-xs text-muted-foreground">
          <p>
            <strong>Application:</strong> Apply 15 minutes before sun exposure. Reapply every 2 hours for optimal protection.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

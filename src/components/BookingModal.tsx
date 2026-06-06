import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { ShoppingBag, X, Calendar, CreditCard, CheckCircle, Star } from 'lucide-react';
import { Professional, Category } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  professional: Professional | null;
  category: Category | null;
}

export function BookingModal({ isOpen, onClose, professional, category }: BookingModalProps) {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setStep(1);
      setDate('');
      setTime('');
      setAddress('');
      setIsProcessing(false);
    }
  }, [isOpen]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#1d1d1f]/40 backdrop-blur-md"
          onClick={step !== 3 ? onClose : undefined}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
          className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#e8e8ed]"
        >
          {step !== 3 && (
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#86868b] hover:bg-[#f5f5f7] rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="p-8 md:p-10 overflow-y-auto">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-2">Book Service</h2>
                  <p className="text-sm font-medium text-[#86868b]">Select date, time, and location.</p>
                </div>
                
                {professional && (
                  <div className="flex items-center gap-4 p-5 bg-[#f5f5f7] rounded-2xl">
                    <img src={professional.imageUrl} alt={professional.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                    <div>
                      <p className="font-semibold text-[#1d1d1f]">{professional.name}</p>
                      <div className="flex items-center text-xs font-semibold text-[#86868b] mt-1">
                        <Star className="w-3.5 h-3.5 text-[#1d1d1f] fill-current mr-1" />
                        <span className="text-[#1d1d1f] font-semibold">{professional.rating}</span>
                        <span className="mx-2 text-[#e8e8ed]">•</span>
                        CAD ${professional.pricePerHour}/hr
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">Date</label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all bg-[#f5f5f7] hover:bg-[#e8e8ed]/50 text-[#1d1d1f] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">Time</label>
                    <input 
                      type="time" 
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all bg-[#f5f5f7] hover:bg-[#e8e8ed]/50 text-[#1d1d1f] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">Location</label>
                    <textarea 
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all resize-none bg-[#f5f5f7] hover:bg-[#e8e8ed]/50 text-[#1d1d1f] text-sm"
                      placeholder="Enter full address..."
                    />
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  disabled={!date || !time || !address}
                  className="w-full py-3.5 px-4 bg-[#1d1d1f] text-white rounded-full font-semibold text-sm hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handlePayment} className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 bg-[#f5f5f7] text-[#1d1d1f] rounded-full">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">Payment</h2>
                  </div>
                  <p className="text-sm font-medium text-[#86868b] mt-2">Provide card details to complete booking.</p>
                </div>

                <div className="p-5 bg-[#f5f5f7] rounded-2xl mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#86868b] text-sm font-medium">Service Fee</span>
                    <span className="font-semibold text-[#1d1d1f] text-sm">CAD ${professional ? professional.pricePerHour * 2 : 80}.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#86868b] text-sm font-medium">Taxes & Fees</span>
                    <span className="font-semibold text-[#1d1d1f] text-sm">CAD $8.00</span>
                  </div>
                  <div className="h-px bg-[#e8e8ed] my-4" />
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-[#1d1d1f]">Total</span>
                    <span className="font-semibold text-[#1d1d1f]">CAD ${professional ? professional.pricePerHour * 2 + 8 : 88}.00</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all font-mono text-sm bg-[#f5f5f7] hover:bg-[#e8e8ed]/50"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">Expiry</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all font-mono text-sm bg-[#f5f5f7] hover:bg-[#e8e8ed]/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">CVC</label>
                      <input 
                        type="password" 
                        placeholder="123"
                        className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all font-mono text-sm bg-[#f5f5f7] hover:bg-[#e8e8ed]/50"
                        required
                      />
                    </div>
                  </div>
                  <div>
                     <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5 ml-1">Name on card</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-[#e8e8ed] rounded-xl focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] outline-none transition-all text-sm bg-[#f5f5f7] hover:bg-[#e8e8ed]/50"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 px-4 bg-[#1d1d1f] text-white rounded-full font-semibold text-sm hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-2"
                  >
                    {isProcessing ? 'Processing Payment...' : `Pay CAD $${professional ? professional.pricePerHour * 2 + 8 : 88}.00`}
                  </button>
                  <div className="mt-4 flex justify-center items-center gap-1 opacity-70">
                     <p className="text-xs text-center text-[#86868b] font-medium">Secured by Delivreh Pay.</p>
                  </div>
                </div>
              </form>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                className="py-10 text-center"
              >
                <div className="w-24 h-24 bg-[#f5f5f7] rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-[#1d1d1f]" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-3">Booking Confirmed</h2>
                <p className="text-[#86868b] font-medium text-sm leading-relaxed mb-10 max-w-[280px] mx-auto">
                  Your appointment for <span className="text-[#1d1d1f] font-semibold">{date}</span> at <span className="text-[#1d1d1f] font-semibold">{time}</span> has been confirmed. A receipt is in your email.
                </p>
                
                <button 
                  onClick={onClose}
                  className="w-full py-3.5 px-6 bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] rounded-full font-semibold text-sm transition-colors"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

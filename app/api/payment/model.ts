import mongoose from 'mongoose';
import { Payment } from '@/app/types/types';


const paymentSchema = new mongoose.Schema<Payment>({
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.models?.Payment || mongoose.model<Payment>('Payment', paymentSchema);

export default Payment;

import mongoose from 'mongoose';
import { Notification } from '@/app/types/types';

const notificationSchema = new mongoose.Schema<Notification>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
});

const Notification = mongoose.models?.Notification || mongoose.model<Notification>('Notification', notificationSchema);

export default Notification;

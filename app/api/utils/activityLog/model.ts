import mongoose from 'mongoose';
import { ActivityLog } from '@/app/types/types';


const activityLogSchema = new mongoose.Schema<ActivityLog>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

const ActivityLog = mongoose.model<ActivityLog>('ActivityLog', activityLogSchema);

export default ActivityLog;

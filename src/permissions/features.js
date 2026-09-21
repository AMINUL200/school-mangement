import { FEATURES } from '../constants';

const featureMap = {
  [FEATURES.TRANSPORT]: 'transport',
  [FEATURES.HOSTEL]: 'hostel',
  [FEATURES.PAYROLL]: 'payroll',
  [FEATURES.ONLINE_EXAM]: 'online_exam',
  [FEATURES.LIBRARY]: 'library',
  [FEATURES.ACCOUNTING]: 'accounting',
  [FEATURES.HR]: 'hr',
  [FEATURES.INVENTORY]: 'inventory',
  [FEATURES.NOTIFICATIONS]: 'notifications',
  [FEATURES.REPORTS]: 'reports',
};

export function hasFeature(subscription, feature) {
  if (!subscription) return false;
  const features = subscription.features || [];
  return features.includes(feature) || features.includes(featureMap[feature]) || features.includes('*');
}

export function featureGuard(subscription, feature) {
  return hasFeature(subscription, feature);
}

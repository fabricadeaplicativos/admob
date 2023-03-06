import { WebPlugin } from '@capacitor/core';
import type { AdMobPlugin } from '.';
import type { AdMobRewardItem } from './reward';
import type { AdOptions, AdLoadInfo } from './shared';
import type { TrackingAuthorizationStatusInterface } from './shared/tracking-authorization-status.interface';
export declare class AdMobWeb extends WebPlugin implements AdMobPlugin {
  constructor();
  initialize(): Promise<void>;
  targetSettings(): Promise<void>;
  trackingAuthorizationStatus(): Promise<TrackingAuthorizationStatusInterface>;
  showBanner(options: AdOptions): Promise<void>;
  hideBanner(): Promise<void>;
  resumeBanner(): Promise<void>;
  removeBanner(): Promise<void>;
  prepareInterstitial(options: AdOptions): Promise<AdLoadInfo>;
  showInterstitial(): Promise<void>;
  prepareRewardVideoAd(options: AdOptions): Promise<AdLoadInfo>;
  showRewardVideoAd(): Promise<AdMobRewardItem>;
}

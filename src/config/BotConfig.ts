export interface BotConfigOptions {
  pair: string,
  interval: number,
  threshold: number,
}

/**
 * Bot-specific configurations and constants
 */
export class BotConfig implements BotConfigOptions {
  pair: string;
  interval: number;
  threshold: number;

  // Default configuration
  private static defaults: BotConfigOptions = {
    pair: "BTC-USD",
    interval: 5000,       // 5 seconds
    threshold: 0.01       // 0.01%
  };

  constructor() {
    // assign default values (fixed: threshold was incorrectly set to interval)
    this.pair = BotConfig.defaults.pair;
    this.threshold = BotConfig.defaults.threshold;
    this.interval = BotConfig.defaults.interval;
  }

  public getPair(): string {
    return this.pair;
  }

  public getInterval(): number {
    return this.interval;
  }

  public getThreshold(): number {
    return this.threshold;
  }

  public toJSON(): BotConfigOptions {
    return {
      pair: this.pair,
      interval: this.interval,
      threshold: this.threshold
    };
  }
}
